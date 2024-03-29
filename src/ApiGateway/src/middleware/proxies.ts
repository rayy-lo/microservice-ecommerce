import { createProxyMiddleware } from "http-proxy-middleware";
import jwt from "jsonwebtoken";

const cartProxy = createProxyMiddleware("/cart", {
  target: `${process.env.CART_API_URL}/api`,
  changeOrigin: true,
});

const catalogProxy = createProxyMiddleware(["/collection", "/product"], {
  target: `${process.env.CATALOG_API_URL}/api/`,
  changeOrigin: true,
});

const userProxy = createProxyMiddleware(["/login", "/register"], {
  target: `${process.env.USER_API_URL}/api/`,
  changeOrigin: true,
  onProxyRes: (proxyRes, req, res) => {
    // Generate id token
    if (proxyRes.statusCode === 200) {
      const idToken = jwt.sign(
        { email: true },
        `${process.env.USER_JWT_SECRET}`
      );

      res.cookie("id_token", idToken, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
    }
  },
  onProxyReq: function (proxyReq, req, res, options) {
    if (req.body) {
      let bodyData = JSON.stringify(req.body);
      // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
      proxyReq.setHeader("Content-Type", "application/json");
      proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
      // stream the content
      proxyReq.write(bodyData);
    }
  },
});

export { cartProxy, catalogProxy, userProxy };

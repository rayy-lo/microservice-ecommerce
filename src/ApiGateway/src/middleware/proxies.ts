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
    // Generate access token
    if (proxyRes.statusCode === 200) {
      const accessToken = jwt.sign(
        { isSignedIn: true },
        `${process.env.USER_JWT_SECRET}`
      );
      res.cookie("jwt", accessToken, {
        httpOnly: true,
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

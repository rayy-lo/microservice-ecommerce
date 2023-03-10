import { createProxyMiddleware } from "http-proxy-middleware";

const cartProxy = createProxyMiddleware("/cart", {
  target: `${process.env.CART_API_URL}/api`,
  changeOrigin: true,
});

const collectionProxy = createProxyMiddleware("/collection", {
  target: `${process.env.CATALOG_API_URL}/api/`,
  changeOrigin: true,
});

export { cartProxy, collectionProxy };

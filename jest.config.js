/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  forceExit: true,
  clearMocks: true,
  testMatch: ["**/*.test.ts"],
  projects: [
    {
      displayName: "api-gateway",
      rootDir: "src/ApiGateway",
    },
    {
      displayName: "cart",
      rootDir: "src/Services/Cart",
    },
    {
      displayName: "catalog",
      rootDir: "src/Services/Catalog",
    },
    {
      displayName: "user",
      rootDir: "src/Services/User",
    },
    {
      displayName: "web-client",
      rootDir: "src/Web",
    },
  ],
};

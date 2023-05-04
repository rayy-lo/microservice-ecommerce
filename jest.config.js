/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
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
      preset: "ts-jest/presets/default-esm",
    },
    {
      displayName: "user",
      rootDir: "src/Services/User",
      preset: "ts-jest/presets/default-esm",
    },
    {
      displayName: "web-client",
      rootDir: "src/Web",
    },
  ],
};

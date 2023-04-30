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
      preset: "ts-jest/presets/default-esm", // or other ESM presets
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },
      transform: {
        // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
        // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
        "^.+\\.tsx?$": [
          "ts-jest",
          {
            useESM: true,
          },
        ],
      },
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

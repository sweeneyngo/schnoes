const nextJest = require("next/jest");
const config = nextJest({
  dir: "./"
});

module.exports = config({
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1"
  },
  testEnvironment: "jest-environment-jsdom"
});

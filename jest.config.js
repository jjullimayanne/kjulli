module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  rootDir: "./",
  testRegex: "test/.*\\.spec\\.ts$",
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.5.16",
        settings: {},
      },
      {
        version: "0.8.9",
        settings: {},
      },

      {
        version: "0.6.6",
        settings: {},
      },
      {
        version: "0.5.10",
        settings: {},
      },
      {
        version: "0.4.0",
        settings: {},
      },
      {
        version: "0.4.23",
        settings: {},
      },

    ],
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};

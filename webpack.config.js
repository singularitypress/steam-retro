/* eslint-disable @typescript-eslint/no-var-requires*/
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");
const NODE_MODULES = path.resolve(__dirname, "node_modules");
const NAME = "main";

const config = () => {
  return {
    target: "electron-main",
    entry: [`${APP_DIR}/electron.ts`],
    resolve: {
      extensions: [".ts", ".js", ".json", ".tsx", ".jsx"],
    },
    output: {
      path: BUILD_DIR,
      filename: `${NAME}.js`,
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          include: APP_DIR,
          loader: "swc-loader",
          exclude: NODE_MODULES,
        },
        {
          enforce: "pre",
          test: /\.js$/,
          include: APP_DIR,
          exclude: NODE_MODULES,
          loader: "source-map-loader",
        },
      ],
    },
  };
};

module.exports = config;

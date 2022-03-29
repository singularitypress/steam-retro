/* eslint-disable @typescript-eslint/no-var-requires*/
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = !!(process.argv.pop() === "production");

const BUILD_DIR = path.resolve(__dirname, "build");
const APP_DIR = path.resolve(__dirname, "src");
const NODE_MODULES = path.resolve(__dirname, "node_modules");
const NAME = "bundle";

const config = () => {
  return {
    entry: [`${APP_DIR}/client/index.tsx`, `${APP_DIR}/style/index.scss`],
    resolve: {
      extensions: [".ts", ".js", ".json", ".tsx", ".jsx", ".scss"],
      alias: {
        "@pages": path.resolve(__dirname, "src/client/pages"),
        "@components": path.resolve(__dirname, "src/client/components"),
        "@types": path.resolve(__dirname, "src/client/types"),
      },
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
        {
          test: /(\.module)?.(sass|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            "sass-loader",
            "postcss-loader",
          ],
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProd ? `${NAME}.[contenthash].css` : `${NAME}.css`,
        chunkFilename: isProd ? "[id].[contenthash].css" : "[id].css",
      }),
    ],
  };
};

module.exports = config;

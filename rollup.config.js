import pkg from "./package.json";
import babel from "@rollup/plugin-babel";

export default {
  input: "./src/KeepAliveRoute.js",
  output: {
    file: pkg.module,
    format: "esm",
  },
  watch: true,
  external: ["react", "react-router-dom"],
  plugins: [babel({ babelHelpers: "bundled" })],
};

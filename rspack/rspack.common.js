const {rspack} = require('@rspack/core');
const path = require("path");
const srcDir = path.join(__dirname, "..", "src");

module.exports = {
    entry: {
      popup: path.join(srcDir, 'popup.tsx'),
      options: path.join(srcDir, 'options.tsx'),
      background: path.join(srcDir, 'background.ts'),
      content_script: path.join(srcDir, 'content_script.tsx'),
    },
    output: {
        path: path.join(__dirname, "../dist/js"),
        filename: "[name].js",
    },
    optimization: {
        splitChunks: {
            name: "vendor",
            chunks(chunk) {
              return chunk.name !== 'background';
            }
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'builtin:swc-loader',
                exclude: [/node_modules/],
                options: {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                    },
                },
                },
                type: 'javascript/auto',
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [
        new rspack.CopyRspackPlugin({
            patterns: [{ from: ".", to: "../", context: "public" }],
            options: {},
        }),
    ],
};

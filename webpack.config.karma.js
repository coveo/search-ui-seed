const webpack = require("webpack");
const webpackConfig = require('./webpack.config.js');

const componentsConfig = webpackConfig[0];

componentsConfig.optimization = {
    noEmitOnErrors: true
};

/*
 * Ensures that TypeScript extends is not counted twice for the "branches" coverage summary.
 * Since `super()` outputs `_super.call() || this`, it counts as two branches in the coverage.
 * This gives a cleaner coverage output.
 * See issue here for more details: https://github.com/Microsoft/TypeScript/issues/13029
 */
// const ignoreNonRequiredBranchForIstanbulRule = {
//     enforce: "pre",
//     test:/\.ts/,
//     loader: StringReplacePlugin.replace({
//         replacements: [{
//             pattern:/(super\([,\.\w\s]+\))[;]??/i,
//             replacement: function(match, part1, offset, string) {
//                 return `${part1} /* istanbul ignore next: TypeScript extends */;`;
//             }
//         }]
//     })
// };

componentsConfig.externals.push({
    "coveo-search-ui-tests": "CoveoJsSearchTests"
});

componentsConfig.plugins = [
    new webpack.SourceMapDevToolPlugin({
        filename: null, // if no value is provided the sourcemap is inlined
        test: /\.(ts|js)($|\?)/i // process .js and .ts files only
    })
];

module.exports = webpackConfig;
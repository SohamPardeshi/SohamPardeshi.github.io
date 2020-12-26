const path = require("path");

module.exports = {
    // Set our build folder to be Github Pages compliant
    outputDir: path.resolve(__dirname, "docs"),
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");
        inlineSvgRule = config.module.rule("inline-svg");

        svgRule.exclude.add(/inline\.(.*)\.svg/).end();

        inlineSvgRule
            .test(/inline\.(.*)\.svg/)
            .use("vue-svg-loader")
            .loader("vue-svg-loader");
    },
};

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/nexus-assignment',
  configureWebpack: {
    plugins: [
      new (require('webpack').DefinePlugin)({
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // Disable Vue devtools in production
        __VUE_OPTIONS_API__: JSON.stringify(true), // Enable Options API
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false), // Disable detailed hydration mismatch details
      }),
    ],
  },
});

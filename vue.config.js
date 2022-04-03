const path = require('path');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@',path.join(__dirname,'./src'))
  },
  devServer: {
    proxy: {
      '/mmdb': {
        target: 'https://api.maoyan.com',
        changeOrigin: true
      },
    }
  }
})
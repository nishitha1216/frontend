const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://portfoliowebsite-30b7.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
};


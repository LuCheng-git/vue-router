
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports={
  // 对象和函数都可以，如果要控制开发环境可以选择函数
  configureWebpack:{
    resolve:{
      alias:{
        '@':path.resolve('src')
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/name.scss";
        `
      },
      scss: {
        prependData: `@import "~@/variables.scss";`
      },
      less:{
        globalVars: {
          primary: '#fff'
        }
      }
    }, // Enable CSS modules for all css / pre-processor files. // This option does not affect *.vue files.
  },




}


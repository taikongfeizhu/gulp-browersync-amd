module.exports = {
  appDir: 'dev',            // 相对build.js的当前路径的所属地址
  baseUrl: 'js/app',        // 定位到appDir后，找到js脚本相对页面地址的位置
  dir: 'dist',              // 生成的文件地址
  wrap: true,
  modules: [
    {
      name: 'home/home',
      include: ["almond", "home/homeDo"]
    },
    {
      name: 'detail/detail',
      include: ["almond", "detail/detailDo"]
    }
  ],
  //optimize: "none",
  fileExclusionRegExp: /(^build)|(.idea)|(gulpfile.js)|(gulp.sh)|(package.json)|(tmod)|(less)$/,
  optimizeCss: 'standard', /* none|standard|standard.keepLines|standard.keepComments|standard.keepComments.keepLines */
  removeCombined: true,

  paths: {
    zepto: "../lib/zepto.min",
    jquery: "../lib/jquery",
    lazyload: "../lib/jquery.lazyload",
    underscore: '../lib/underscore',
    template: '../lib/template',
    domReady: '../plugin/domReady',
    almond: "../plugin/almond",
    text: '../plugin/require.text',
    css: '../plugin/require.css',
    text_path: "../tpl",     // eg:"text!text_path/channel.tpl.html"
    css_path: "../../css"           // eg:"css!css_path/new.css"
  },

  waitSeconds: 10,

  '*': {
    'text': '../plugin/require.text',
    'css': '../plugin/require.css'
  },

  shim: {
    'zepto': {
      exports: '$'
    },

    'template': {
      exports: "template"
    },

    lazyload: {
      deps: ['zepto'],
      exports: "lazyload"
    }
  }
}
### 这是一个基于browsersync的javascript前端项目开发模板 ###

### 本工程提供一个标准项目模板，可减轻开发环境搭建和快速实现同步刷新测试页面功能。###

#### 该模块包含如下内容：####
>1. 使用zepto underscore jquery atrtemplate等框架
>1. 使用browsersync用于配合实现一次修改多个终端的同步刷新
>1. 使用requirejs amd模块加载器
>1. 使用gulp构建系统
>1. 展示了页面切分和逻辑模块划分（html、css、js），及如何根据实际切换模块。
>1. 支持两种应用场景，浏览器，移动app
>1. 支持生产环境，即可将js合并压缩成单个js文件，优化css文件，优化html文件
>1. 大型项目则更推荐使用webpack，fis等作为工程化管理

## 目录说明 ##

~~~
├── html -------------------- SHFramework的开发目录
│   ├── build --------------------  前端项目构建AMD的命令配置模块，基于r.js，可以分析js模块之间的依赖关系
│   │   ├── build.js
│   │   ├── r.js
│   │   ├── run.js
│   │   └── run.sh
│   ├── css -------------------- 前端项目开发中需要用到的css模块，可以拆分成初始化css，页面css和组件css，工程中支持用require.css动态加载
│   │   ├── channel.css
│   │   ├── normalize.css
│   │   └── plugin.css
│   ├── images --------------------  前端项目开发中需要用到的图片资源
│   │   └── loading.gif
│   └── js  ---- SHframework需要调用的js根目录
│       ├── app ---- 
│       │   ├── home
│       │   │   ├── home.js
│       │   │   ├── homeDo.js
│       │   │   └── template.js
│       │   └── helper
│       ├── lib  ---- 第三方库js库
│       │   ├── jquery.lazyload.js
│       │   ├── template.js
│       │   ├── requirejs.js
│       │   ├── underscore.js
│       │   └── zepto.min.js
│       └── plugin  ---- requriejs加载器插件
│           ├── almond.js
│           ├── css-builder.js
│           ├── domReady.js
│           ├── normalize.js
│           ├── require.css.js
│           └── require.text.js
├──README.md  ---- 模块使用说明的markdown
├──gulpfile.js -------------------- gulp构建工具配置文件
├──package.json -------------------- 工具需要加载的资源依赖包
├──dist  ---- 构建输出目录
└── test  ---- 单元测试用例目录
~~~

## Getting Started

安装、启动、编译项目

### Install 

First, clone the project:

```bash
$ git clone git@github.com:taikongfeizhu/gulp-browersync-amd.git
$ cd gulp-browersync-amd
```

```bash
$ npm install          # Install project dependencies
$ npm run dev          # Compile and launch (same as `npm start`)
$ npm run build        # build amd files (same as `npm build`)
$ npm run preview      # preview your dist page (same as `npm preview`)
```
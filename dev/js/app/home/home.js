require.config({

    baseUrl:"./js/app",

    paths: {
        zepto:"../lib/zepto.min",
        jquery:"../lib/jquery",
        lazyload:"../lib/jquery.lazyload",
        underscore: '../lib/underscore',
        template: '../lib/template',
        domReady: '../plugin/domReady',
        almond:"../plugin/almond",
        text: '../plugin/require.text',
        css: '../plugin/require.css',
        text_path:"../tpl",     // eg:"text!text_path/channel.tpl.html"
        css_path:"../../css"           // eg:"css!css_path/new.css"
    },

    waitSeconds: 10,

    '*':{
        'text':'../plugin/require.text',
        'css':'../plugin/require.css'
    },

    shim: {
        'zepto':{
            exports:'$'
        },

        'template': {
            exports: "template"
        },

        lazyload:{
            deps:['zepto'],
            exports:"lazyload"
        }
    }
});

require(["home/homeDo"],function(homeDo){
    homeDo.init();
});



/**
 * Created by jenking on 15-3-26.
 */
define([
    "jquery",
    "underscore",
    "helper/util",
    'text!text_path/demo.html',
    'css!css_path/plugins',
    "domReady!"

],function($, _, util, treeData, demoViewTemplate){

    function HomeDo(){
        this.mainBox = $("#mainBox");
        this.dateInfo = $("#dateInfo");
    };

    HomeDo.prototype.render=function(){
        var t=this;
        t.mainBox.removeClass("displayNone");
        this.dateInfo.text('Page get Ready !!!');    
    }

    HomeDo.prototype.init=function(){
        this.render();
    }

    return new HomeDo();
});
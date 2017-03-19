/**
 * Created by jenking on 15-3-26.
 */
define([
    "jquery",
    "underscore",
    "helper/util",
    "domReady!"

],function($, _, util){

    function DetailDo(){
        this.mainBox = $("#mainBox");
        this.dateInfo = $("#dateInfo");
    };

    DetailDo.prototype.render=function(){
        var t=this;
        t.mainBox.removeClass("displayNone");
        this.dateInfo.text('Detail page ready !!!');
    }

    DetailDo.prototype.init=function(){
        this.render();
    }

    return new DetailDo();
});

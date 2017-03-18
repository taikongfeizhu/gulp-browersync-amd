/**
 * Created by jenking on 15-3-25.
 */
define(["jquery"], function($){
    return {
        say: function(msg){
            $("#cookie").html('cookie: '+msg);
        }
    };
});
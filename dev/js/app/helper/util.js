/**
 * Created by jenking on 15-3-25.
 */
define(["jquery"], function ($) {
    var util = {
        getRandomNum: function (min, max) {
            var range = max - min;
            var rand = Math.random();
            return (min + Math.round(rand * range));
        },
        cost_time: function (time) {
            var elapsed = Math.round(time / 100);
            var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
            return seconds;
        }
    };
    return util;
});

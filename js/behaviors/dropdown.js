/*jshint devel:true */
/*global define */
/*global DropdownBehavior */

define(["marionette"], function(Marionette){

  DropdownBehavior = Marionette.Behavior.extend({
    ui: {
      slider: '.js-slider',
    },

    events: {
      'focus @ui.slider': 'onDropdownShow'
    },

    onDropdownShow: function(e) {
      $(".a-slider:not(.a-closed)").each(function() {
        $(this).toggleClass("a-closed");
      });

      $(e.target).next().toggleClass("a-closed");
    }
  });

  return DropdownBehavior;
});
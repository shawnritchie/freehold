/*jshint devel:true */
/*global requirejs */
/*global require */

requirejs.config({
  paths: {
    marionette: "bower_components/marionette/lib/core/backbone.marionette"
    ,backbone: "bower_components/backbone/backbone"
    ,"backbone.wreqr":"bower_components/backbone.wreqr/lib/backbone.wreqr"
    ,"backbone.babysitter":"bower_components/backbone.babysitter/lib/backbone.babysitter"
    ,"backbone.modelbinder":"bower_components/Backbone.ModelBinder/Backbone.ModelBinder"
    ,jquery: "bower_components/jquery/dist/jquery"
    ,underscore: "bower_components/underscore/underscore"
    ,"jquery-ui": "bower_components/jquery-ui/jquery-ui"
    ,text: "bower_components/requirejs-text/text"
    ,tpl: "bower_components/requirejs-underscore-tpl/underscore-tpl"
    ,"jquery.knob": "bower_components/jquery.knob/jquery.knob"
    ,"highcharts": "bower_components/highcharts-release/highcharts"
  },

  shim: {
    underscore: {
      exports: "_"
    }
    ,backbone: {
      deps: ["jquery", "underscore"]
      ,exports: "Backbone"
    }
    ,"backbone.modelbinder": {
      deps: ["backbone"]
    }
    ,marionette: {
      deps: ["backbone"]
      ,exports: "Marionette"
    }
    ,"jquery-ui": ["jquery"]
    ,"jquery.knob": ["jquery"]
    ,"tpl": ["text"]
    ,"highcharts": {
      "exports": "Highcharts",
      "deps": [ "jquery"] 
    }
  }
});


require(["app"], function(freeholdApp){
  freeholdApp.start();
});

/*jshint devel:true */
/*global define */
/*global require */
/*global Backbone */

define(["marionette"], function(Marionette){

  Marionette.Behaviors.behaviorsLookup = function() {
    return window;
  };

  var FreeholdApp = new Marionette.Application();

  FreeholdApp.addRegions({
    mainRegion: "#main-region"
  });

  FreeholdApp.navigate = function(route,  options){
    options  = options ? options : {};
    Backbone.history.navigate(route, options);
  };

  FreeholdApp.getCurrentRoute = function(){
    return Backbone.history.fragment;
  };

  FreeholdApp.startSubApp = function(appName, args){
    var currentApp = appName ? FreeholdApp.module(appName) : null;
    if (FreeholdApp.currentApp === currentApp){ return; }

    if (FreeholdApp.currentApp){
      FreeholdApp.currentApp.stop();
    }

    FreeholdApp.currentApp = currentApp;
    if(currentApp){
      currentApp.start(args);
    }
  };

  FreeholdApp.on("start", function(){
    if(Backbone.history){
      require(["apps/calculator/calculator"], function () {
        Backbone.history.start();

        if(FreeholdApp.getCurrentRoute() === "")
          FreeholdApp.trigger("calculator:repayment:show");
        
      });
    }
  });

  return FreeholdApp;
});
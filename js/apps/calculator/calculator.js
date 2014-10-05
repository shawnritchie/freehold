/*jshint devel:true */
/*global define */
/*global require */
/*global Backbone */

define(["app"], function(FreeholdApp){

	FreeholdApp.module("Calculator", function(Calculator, FreeholdApp, Backbone, Marionette, $, _){
		Calculator.startWithParent = false;

		Calculator.channel = Backbone.Wreqr.radio.channel('calculator');

	    Calculator.onStart = function(){
	      console.log("Starting Calculator");
	      console.log("Built using requirejs, backbone.marionette, less");
	      console.log("linkedin: https://www.linkedin.com/in/ritchieshawn");
	      console.log("git: https://github.com/xritchie");
	    };

	    Calculator.onStop = function(){
	      console.log("Stopping Calculator");
	    };
	});

	FreeholdApp.module("Routers.Calculator", function(CalculatorRouter, FreeholdApp, Backbone, Marionette, $, _){

	    CalculatorRouter.Router = Marionette.AppRouter.extend({
	      appRoutes: {
	        "calculator/repayment": "showRepaymentCalculator",
	        "calculator/term": "showTermCalculator",
	      }
	    });

	    var executeAction = function(action, arg){
	      FreeholdApp.startSubApp("Calculator");
	      action(arg);
	    };

	    var API = {
	      showRepaymentCalculator: function(direction){
			require(["apps/calculator/calculator_controller"], function(Controller){
          		executeAction(Controller.showRepaymentCalculator, {
          			header: "Repayment Calculator", 
          			direction: direction ? direction.direction : "right"
          		});
	        });
	      },
	      showTermCalculator: function(direction) {
	      	require(["apps/calculator/calculator_controller"], function(Controller){
          		executeAction(Controller.showTermCalculator, {
          			header: "Term Calculator",
          			direction: direction ? direction.direction : "right"
          		});
	        });
	      }
	    };

	    FreeholdApp.on("calculator:repayment:show", function(direction){
	      FreeholdApp.navigate("calculator/repayment");
	      API.showRepaymentCalculator(direction);
	    });

	    FreeholdApp.on("calculator:term:show", function(direction){
	      FreeholdApp.navigate("calculator/term");
	      API.showTermCalculator(direction);
	    });

	    FreeholdApp.commands.setHandler("calculator:toggle:mode", function(direction) {
	    	if (Backbone.history.fragment === "calculator/term")
	    		FreeholdApp.trigger("calculator:repayment:show", direction);
	    	else
	    		FreeholdApp.trigger("calculator:term:show", direction);
	    });

	    FreeholdApp.addInitializer(function(){
	      new CalculatorRouter.Router({
	        controller: API
	      });
	    });
  });

  return FreeholdApp.CalculatorRouter;
});
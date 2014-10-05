/*jshint devel:true */
/*global define */

define(["app"] ,function(FreeholdApp) {

	FreeholdApp.module("Widgets", function(Widgets, FreeholdApp, Backbone, Marionette, $, _) {

		Widgets.GuageModel = Backbone.Model.extend({
			defaults: {
				 guageTitle:null
				,guagePercentage:0
				,guageValue:0
			}
		});
	});

	return FreeholdApp.Widgets.GuageModel;
});
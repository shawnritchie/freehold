/*jshint devel:true */
/*global define */

define(
	[
		"app", 
		"behaviors/guage",
		"tpl!components/guage/templates/guage.tpl"
	]
	,function(FreeholdApp, GuageBehavior, guageTpl) {


	FreeholdApp.module("Widgets", function(Widgets, FreeholdApp, Backbone, Marionette, $, _) {

		Widgets.Guage = Marionette.ItemView.extend({
			tagName: 'div',	  
			template: guageTpl, 	

			behaviors: {
				GuageBehavior: {}
			}
		});

	});

	return FreeholdApp.Widgets.Guage;
});
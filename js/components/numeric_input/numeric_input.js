/*jshint devel:true */
/*global define */

define(
	[
		"app", 
		"behaviors/numeric_inputbox",
		"tpl!components/numeric_input/templates/freehold_numeric_input.tpl"
	]
	,function(FreeholdApp, InputBoxBehavior, inputTpl) {


	FreeholdApp.module("Widgets", function(Widgets, FreeholdApp, Backbone, Marionette, $, _) {

		Widgets.NumericInputView = Marionette.ItemView.extend({
			tagName: 'div',	  
			template: inputTpl, 	
			className: 'u-normalSpacing',

			behaviors: {
				NumericInputBoxBehavior: {}
			}
		});

	});

	return FreeholdApp.Widgets.NumericInputView;
});
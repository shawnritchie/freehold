/*jshint devel:true */
/*global define */

define(
	[
		"app", 
		"behaviors/dropdown", 
		"behaviors/slider", 
		"behaviors/numeric_inputbox",
		"tpl!components/slider/templates/freehold_slider.tpl"
	]
	,function(FreeholdApp, DropdownBehavior, SliderBehavior, InputBoxBehavior, sliderTpl) {


	FreeholdApp.module("Widgets", function(Widgets, FreeholdApp, Backbone, Marionette, $, _) {

		var utility = {
			calculateWidth: function(sliderContainer) {
				return Math.floor((sliderContainer.width()-20)/20)*20 + 2;
			}
		};

		Widgets.SliderView = Marionette.ItemView.extend({
			tagName: 'div',	  
			template: sliderTpl, 	
			className: 'u-normalSpacing',

			behaviors: {
				DropdownBehavior: {},
				SliderBehavior: {},
				NumericInputBoxBehavior: {}
			},

			ui: {
				slider: '.slider-pointer',
				sliderContainer: '.slider-bckgrd',
				foregroundScale: '.slider-default',
				backgroundScale:  '.slider-selected',
		    },

			onShow: function(){
				var max = utility.calculateWidth(this.ui.sliderContainer);
				this.ui.backgroundScale.width(max);

				this.options.max = max + (this.ui.slider.width());
      			this.options.min = (this.ui.slider.width()/2);
      			this.options.offset = this.ui.backgroundScale.position().left;

      			this.ui.foregroundScale.width((this.options.max));
			},

			getOffset: function() {
				return this.ui.backgroundScale.position().left;
			}
		});
	});

	 return FreeholdApp.Widgets.SliderView;
});
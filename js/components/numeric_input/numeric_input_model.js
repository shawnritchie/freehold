/*jshint devel:true */
/*global define */

define(["app"] ,function(FreeholdApp) {

	FreeholdApp.module("Widgets", function(Widgets, FreeholdApp, Backbone, Marionette, $, _) {

		Widgets.NumericInputModel = Backbone.Model.extend({

			defaults: {
				 fhTitle:null
				,fhValue:0
				,fhDisplay:null
				,fhMin:0
				,fhMax:100
				,fhPreTag:""
				,fhPostTag:""
				,fhIcon:""
				,fhScale:null
				,fhIncrement:1
			},

			initialize: function() {
        		this.on('change:fhValue', this.updateValue);
        		this.updateValue();

        		if (!this.get("fhScale"))
	        		this.set({"fhScale": [this.get("fhMin"), this.get("fhMax")]});
			},

			updateValue: function() {
				this.setValue();
			},

			setValue: function() {
				var value = this.get("fhValue");
				if (value)
				{
					value = parseFloat(value);
					if (value)
						this.set({fhValue: value});
					else
						this.set({fhValue: ''});
				}
			}
		});
	});

	return FreeholdApp.Widgets.NumericInputModel;
});
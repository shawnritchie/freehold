/*jshint devel:true */
/*global define */

define(["app", "apps/calculator/calculator", "entities/calculator",  "apps/calculator/calculator_model", "apps/calculator/calculator_summary_layout"], function(FreeholdApp){

	var utility = {
	    timeoutReference:{}
	};

	FreeholdApp.module("Calculator", function(Calculator, FreeholdApp, Backbone, Marionette, $, _) {

		Calculator.Model = Backbone.Model.extend({

			termPeriod: 12,
			defaults: {
				 amount:0
				,term:0
				,deposit:0
				,interest:0
				,repayments:0
				,termPeriod: 12
			},

			fire: {
				calculatorSummary: function() {
					return {
						event: "calculator:summary",
						channel: FreeholdApp.Calculator.channel.commands
					};
				},
				calculatorInstallments: function() {
					return {
						event: "calculator:installments:calculate",
						channel: FreeholdApp.commands
					};
				}
			},

			initialize: function() {
				this.on("change",  function(e) {
					this.onChange(e);
				});
			},

			canCalculateRepayments: function() {
				return ((this.get("mode") === "repayments")&& (this.get("amount")) && (this.get("term")) && (this.get("interest")));
			},

			calculateRepayments: function() {
				//r = pi(1+i)^t / (1+i)^t - 1
				var interest = ((this.get("interest")/100)/this.termPeriod);
				var termInterest = Math.pow((interest + 1), this.get("term")*this.termPeriod);
				var amount = (this.get("amount") - this.get("deposit"));
				return Math.ceil((amount * interest * termInterest) / (termInterest - 1));
			},

			canCalculateTerm: function() {
				return ((this.get("mode") === "term") && (this.get("amount")) && (this.get("interest")) && (this.get("repayments")));
			},

			calculateTerm: function() {
				//t = log(r / (r - pi)) / log(1 + 1)
				var interest = ((this.get("interest")/100)/this.termPeriod);
				var amount = (this.get("amount") - this.get("deposit"));
				var termRepayments = (this.get("repayments") - (amount*interest));
				if (termRepayments  > 0)
					return Math.ceil((Math.log((this.get("repayments") / termRepayments)) / Math.log(interest + 1)) / 12);
			},

			onChange: function() {
				if (this.canCalculateRepayments()){
					this.set({repayments : this.calculateRepayments()});
					this.createSummary();
				} 

				if (this.canCalculateTerm()) {
					var termCalc = this.calculateTerm();
					if (termCalc) {
						this.set({term : termCalc });
						this.createSummary();
					}
				}
			},

			createSummary: function() {
				if (utility.timeoutReference) 
		        	clearTimeout(utility.timeoutReference);

		        utility.timeoutReference = setTimeout(function() {
		        	var calculatorSummary = this.fire.calculatorSummary();
		        	calculatorSummary.channel.execute(calculatorSummary.event);

		        	var calculatorInstallments = this.fire.calculatorInstallments();
		        	calculatorInstallments.channel.execute(calculatorInstallments.event, this);
		      	}.bind(this), 1000);
			}

		});

	});

	return FreeholdApp.Calculator.Model;
});
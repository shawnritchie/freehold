/*jshint devel:true */
/*global define */
/*global require */

define(["app", "apps/calculator/calculator", "apps/calculator/calculator_layout", "apps/calculator/calculator_form_layout"], 
	function(FreeholdApp, Calculator, CalculatorLayout, CalculatorFormLayout){

	FreeholdApp.module("Calculator", function(Calculator, FreeholdApp, Backbone, Marionette, $, _){
	    Calculator.Controller = {
			showRepaymentCalculator: function(options){
			    require(
			      ["apps/calculator/calculator_model", "tpl!apps/calculator/templates/calculator_repayment_layout.tpl"], 
			        function (CalcModel, CalcRepaymentTpl) {
			          var calcLayout = new CalculatorLayout(options);
			          FreeholdApp.mainRegion.show(calcLayout);
			          var calcRepaymentForm = 
			            new CalculatorFormLayout({ 
			              model: new FreeholdApp.Calculator.Model({
			                mode: 'repayments'
			              }),
			              tpl: CalcRepaymentTpl
			            });
			          calcLayout.form.show(calcRepaymentForm);
			        }.bind(this)
			    );
			},

			showTermCalculator: function(options) {
			    require(
			      ["apps/calculator/calculator_model", "tpl!apps/calculator/templates/calculator_term_layout.tpl"], 
			        function (CalcModel, CalcTermTpl) {
			          var calcLayout = new CalculatorLayout(options);
			          FreeholdApp.mainRegion.show(calcLayout);
			          var calcTermForm = 
			            new CalculatorFormLayout({ 
			              model: new FreeholdApp.Calculator.Model({
			                mode: 'term'
			              }),
			              tpl: CalcTermTpl
			            });
			          calcLayout.form.show(calcTermForm);
			        }
			    );
			},
			
			showYearlyStats: function(loanDetails, year) {
				year = (year) ? year : new Date().getFullYear();

				require(["entities/calculator", "apps/calculator/calculator_stats_layout", "apps/calculator/calculator_year_view", "apps/calculator/calculator_graph_view"], function () {
					var fetchingInstallments = FreeholdApp.request("calculator:installments:fetch");
					$.when(fetchingInstallments).done(function(installments){
						if (installments.last().get('year') >= year)
						{
							var aggrState = installments.generateState(year);
							FreeholdApp.Calculator.channel.vent.trigger("calculator:stats:update", aggrState);
						}
					});
				});
			}

	    };
  	});

  return FreeholdApp.Calculator.Controller;
});
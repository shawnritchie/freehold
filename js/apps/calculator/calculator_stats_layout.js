/*jshint devel:true */
/*global define */

define(
  [
    "marionette", 
    "backbone.babysitter",
    "tpl!apps/calculator/templates/calculator_stats_layout.tpl",
    "app", 
    "apps/calculator/calculator",
    "components/guage/guage", 
    "components/guage/guage_model", 
    "behaviors/guage",
    "jquery.knob"
  ], 
function(Marionette, Babysitter, statsTpl, FreeholdApp){

  var CalculatorFormLayout = Marionette.LayoutView.extend({
    tagName: "div",
    template: statsTpl,
    className: "calculator-guages kite kite--center",

    regions: {
      totalInterest: "#totalInterest",
      totalPrincipal: "#totalPrincipal",
      yearlyInterest: "#yearlyInterest",
      yearlyPrincipal: "#yearlyPrincipal",
    },

    recieve: {
      calculatorStatsUpdate : function() {
          return {
              event: 'calculator:stats:update',
              channel: FreeholdApp.Calculator.channel.vent
          };
      }
    },

    initialize: function() {
      this.viewContainer = new Backbone.ChildViewContainer();

      this.viewContainer.add(
        new FreeholdApp.Widgets.Guage({
              model: new FreeholdApp.Widgets.GuageModel({
                  guageTitle:"Total Interest Paid"
                  ,guagePercentage:0
                  ,guageValue:0
              })
            })
        ,"totalInterest"
      );

      this.viewContainer.add(
        new FreeholdApp.Widgets.Guage({
              model: new FreeholdApp.Widgets.GuageModel({
                  guageTitle:"Total Principal Paid"
                  ,guagePercentage:0
                  ,guageValue:0
              })
            })
        ,"totalPrincipal"
      );

      this.viewContainer.add(
        new FreeholdApp.Widgets.Guage({
              model: new FreeholdApp.Widgets.GuageModel({
                  guageTitle:"Interest Paid"
                  ,guagePercentage:0
                  ,guageValue:0
              })
            })
        ,"yearlyInterest"
      );

      this.viewContainer.add(
        new FreeholdApp.Widgets.Guage({
              model: new FreeholdApp.Widgets.GuageModel({
                  guageTitle:"Princripal Paid"
                  ,guagePercentage:0
                  ,guageValue:0
              })
            })
        ,"yearlyPrincipal"
      );
    },

    onRender: function() {
        this.totalInterest.show(this.viewContainer.findByCustom("totalInterest"));
        this.totalPrincipal.show(this.viewContainer.findByCustom("totalPrincipal"));
        this.yearlyInterest.show(this.viewContainer.findByCustom("yearlyInterest"));
        this.yearlyPrincipal.show(this.viewContainer.findByCustom("yearlyPrincipal"));

        this.listenTo(this.recieve.calculatorStatsUpdate().channel, this.recieve.calculatorStatsUpdate().event, function(aggrState) {
            this.viewContainer.findByCustom("totalInterest").triggerMethod("changeGuage", {
              value: Math.round(aggrState.totalInterest),
              percentage: Math.round((100 / (aggrState.totalPrincipal + aggrState.totalInterest))*aggrState.totalInterest)
            });

            this.viewContainer.findByCustom("totalPrincipal").triggerMethod("changeGuage", {
              value: Math.round(aggrState.totalPrincipal),
              percentage: Math.round((100 / (aggrState.totalPrincipal + aggrState.totalInterest))*aggrState.totalPrincipal)
            });

            this.viewContainer.findByCustom("yearlyInterest").triggerMethod("changeGuage", {
              value: Math.round(aggrState.yearlyInterest),
              percentage: Math.round((100 / (aggrState.yearlyPrincipal + aggrState.yearlyInterest))*aggrState.yearlyInterest)
            });
            this.viewContainer.findByCustom("yearlyInterest").triggerMethod("changeYear", aggrState.year);

            this.viewContainer.findByCustom("yearlyPrincipal").triggerMethod("changeGuage", {
              value: Math.round(aggrState.yearlyPrincipal),
              percentage: Math.round((100 / (aggrState.yearlyPrincipal + aggrState.yearlyInterest))*aggrState.yearlyPrincipal)
            });
            this.viewContainer.findByCustom("yearlyPrincipal").triggerMethod("changeYear", aggrState.year);
            $(window).trigger('resize');
        }.bind(this));
    }

  });

  return CalculatorFormLayout;
});
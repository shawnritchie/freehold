/*jshint devel:true */
/*global define */

define(
  [
    "marionette"
    ,"tpl!apps/calculator/templates/calculator_navigator_view.tpl"
    ,"app"
    ,"apps/calculator/calculator"
    ,"utils/utility"
  ], 
function(Marionette, calcNavTpl, FreeholdApp){

  var CalculatorNavigatorView = Marionette.ItemView.extend({
    tagName: "div",
    template: calcNavTpl,
    className: "kite kite--middle kite--justify",

    ui: {
  		toggleCalc: '.calculator-toggleCalc',
      header: 'h1',
      prevBtn: '.js-navPrev',
      nextBtn: '.js-navNext'
    },

    events: {
      'click @ui.prevBtn': 'onPrevAni',
      'click @ui.nextBtn': 'onNextAni'
    },

    fire: {
      calculatorToggleCalculator: function() {
        return {
          event: "calculator:toggle:mode",
          channel: FreeholdApp.commands
        };
      },
      calculatorResetForm: function() {
        return {
          event: "calculator:reset:form",
          channel: FreeholdApp.Calculator.channel.commands
        };
      }
    },

    onShow: function(){
      $(this.ui.header).text(this.options.header);
    },

    onNext: function(direction) {
      var calculatorResetForm = this.fire.calculatorResetForm();
      calculatorResetForm.channel.execute(calculatorResetForm.event, {direction: direction});
    },

    onPrevAni: function() {
      this.onNext('left');
    },

    onNextAni: function() {
      this.onNext('right');
    }
  });

  return CalculatorNavigatorView;
});


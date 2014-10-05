/*jshint devel:true */
/*global define */
/*global require */

define(
  [
    "marionette"
    ,"tpl!apps/calculator/templates/calculator_year_view.tpl"
    ,"app"
    ,"apps/calculator/calculator"
    ,"utils/utility"
  ], 
function(Marionette, calcYearViewTpl, FreeholdApp){

  var CalculatorYearView = Marionette.ItemView.extend({
    tagName: "div",
    template: calcYearViewTpl,
    className: "calculator-yearContainer kite__item",

    ui: {
  		year: '.calculator-yearStats h2',
  		paymentLeft: '.calculator-yearStats h3',
      nextYear: '.js-nextYear',
      previousYear: '.js-previousYear'
    },

    events: {
      'mousedown @ui.slider': 'onSliderDrag',
      'click @ui.nextYear': 'onNext',
      'click @ui.previousYear': 'onPrevious',
    },

    recieve: {
      calculatorPaginatorUpdate: function() {
        return {
          event: "calculator:paginator:update",
          channel: FreeholdApp.Calculator.channel.commands
        };
      },
      calculatorStatsUpdate: function() {
        return {
          event: "calculator:stats:update",
          channel: FreeholdApp.Calculator.channel.vent
        };
      }
    },

    initialize: function() {
      this.options.currentYear = (new Date()).getFullYear();

      var eventAggr = this.recieve.calculatorPaginatorUpdate();
      eventAggr.channel.setHandler(eventAggr.event, function(aggrState) {
        this.injectValues(aggrState.year, aggrState.totalPrincipalLeft);
      }.bind(this));

      var eventAggr = this.recieve.calculatorStatsUpdate();
      this.listenTo(eventAggr.channel, eventAggr.event, function(aggrState) {
        this.injectValues(aggrState.year, aggrState.totalPrincipalLeft);
      }.bind(this));
    },

    injectValues: function(year, paymentLeft) {
      this.options.year = year;
    	$(this.ui.year).text(year);

      this.options.paymentLeft = paymentLeft;
    	$(this.ui.paymentLeft).text("€" + Math.round(paymentLeft).toString().commafy());
    },

    onNext: function() {
      require(["apps/calculator/calculator_controller"], function(Controller){
        Controller.showYearlyStats(null, (this.options.year+1));
      }.bind(this));
    },

    onPrevious: function() {
      if ((this.options.year-1) >= this.options.currentYear)
      {
        require(["apps/calculator/calculator_controller"], function(Controller){
          Controller.showYearlyStats(null, (this.options.year-1));
        }.bind(this));
      }
    }
  });

  return CalculatorYearView;
});


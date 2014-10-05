/*jshint devel:true */
/*global define */
/*global require */

define(
  [
    "marionette"
    ,"apps/calculator/calculator_stats_layout"
    ,"apps/calculator/calculator_year_view"
    ,"apps/calculator/calculator_graph_view"
    ,"apps/calculator/calculator_table_view"
    ,"tpl!apps/calculator/templates/calculator_summary_layout.tpl"
    ,"app"
    ,"apps/calculator/calculator"
    ,"components/guage/guage"
    ,"components/guage/guage_model"
    ,"entities/calculator"
  ], 
function(Marionette, CalculatorStatsLayout, CalculatorYearView, CalculatorGraphView, CalculatorTableView, CalSumTpl, FreeholdApp){

  var CalculatorSummaryLayout = Marionette.LayoutView.extend({
    tagName: "div",
    template: CalSumTpl,

    regions: {
  		paginator: '#fh-paginator',
  		stats: '#fh-stats',
  		graph: '#fh-graph',
  		tables: '#fh-tables'
    },

    recieve: {
      calculatorStatsUpdate: function() {
        return {
          event: "calculator:stats:update",
          channel: FreeholdApp.Calculator.channel.vent
        };
      }
    },

    fire: {
      calculatorPaginatorUpdate: function() {
        return {
          event: "calculator:paginator:update",
          channel: FreeholdApp.Calculator.channel.commands
        };
      }
    },

    initialize: function() {
      this.options.year = (new Date()).getFullYear();

      var eventAggr = this.recieve.calculatorStatsUpdate();
      this.listenTo(eventAggr.channel, eventAggr.event, function(aggrState) {
        this.updateTable(aggrState.yearlyInstallments);
      }.bind(this));
    },

    onRender: function() {
        this.stats.show(new CalculatorStatsLayout());
    },

    onShow: function() {
      this.paginator.show(new CalculatorYearView());
      this.graph.show(new CalculatorGraphView());

      var calculatorPaginatorUpdate = this.fire.calculatorPaginatorUpdate();
      calculatorPaginatorUpdate.channel.execute(calculatorPaginatorUpdate.event, {year: this.options.year, totalPrincipalLeft: (this.options.formModel.get("amount") - this.options.formModel.get("deposit"))});
     	
      $(this.el).removeClass().addClass('bounceInUp animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this.el).removeClass();
        this.onUpdateRegions();
    	}.bind(this));
    },
    
    onUpdateRegions: function() {
      require(["apps/calculator/calculator_controller"], function(Controller){
          Controller.showYearlyStats(null, this.options.year);
      }.bind(this));
    },

    updateTable: function(collection) {
      this.tables.show(new CalculatorTableView({collection: collection}));
    }
  });

  return CalculatorSummaryLayout;
});


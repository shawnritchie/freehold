/*jshint devel:true */
/*global define */
/*global require */

define(["marionette", "highcharts", "tpl!apps/calculator/templates/calculator_graph_view.tpl", "app", "apps/calculator/calculator"], 
function(Marionette, Highcharts, calcGraphTpl, FreeholdApp){

  var CalculatorGraphView = Marionette.ItemView.extend({
    tagName: "div",
    template: calcGraphTpl,
    className: "calculator-graphContainer kite__item",

    ui: {
  		container: '.calculator-graphView',
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
      this.options.currentYear = (new Date()).getFullYear();

      var calculatorStatsUpdate = this.recieve.calculatorStatsUpdate();
      this.listenTo(calculatorStatsUpdate.channel, calculatorStatsUpdate.event, function(aggrState) {
        this.onUpdate(aggrState.yearlyInstallments);
      }.bind(this));
    },

    onShow: function() {
      this.options.chart = 
        new Highcharts.Chart({
            chart: {
                renderTo: 'calculator-graphView',
                type: 'column'
            },
            style: {
                fontFamily: 'OpenSans'
            },
            title: {
                text: 'Monthly Breakdown',
                style: { 
                    "color": "#a4b7d7", 
                    "fontSize": "24px", 
                    "font-family": "Droid Sans" 
                }
            },
            subtitle: {
                text: 'Interest  vs Principal',
                style: { 
                    "color": "#e2ecff", 
                    "fontSize": "15px", 
                    "font-family": "OpenSans" 
                }
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                labels: {
                    style: {
                        "color": "#b3b3b3", 
                        "fontSize": "9px", 
                        "fontWeight": "lighter"
                    }
                }
            },
            yAxis: {
                gridLineColor: '#e2ecff',
                title: {
                    text: 'Repayments (€)',
                    style: {
                        "color": "#b3b3b3", 
                        "fontSize": "9px", 
                        "fontWeight": "lighter"
                    }
                },
                labels: {
                    style: {
                        "color": "#b3b3b3", 
                        "fontSize": "9px", 
                        "fontWeight": "lighter"
                    }
                }
            },
            tooltip: {
                valuePrefix: '€'
            },
            legend: {
                borderWidth: 0,
                itemStyle: { 
                    "color": "#b3b3b3", 
                    "cursor": "pointer", 
                    "fontSize": "12px", 
                    "fontWeight": "lighter" 
                }
            },
            plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
              }
            },
             series: [{
                name: 'Repayment',
                color: "#d88c90",
                data: [0,0,0,0,0,0,0,0,0,0,0,0]
              }, {
                  name: 'Principal',
                  color: "#a4b7d7",
                  data: [0,0,0,0,0,0,0,0,0,0,0,0]
              }]
            });
    },

    onUpdatePrincipal: function(prinicpalArr) {
      this.options.chart.series[0].setData(prinicpalArr);
    },

    onUpdateInterest: function(interestArr) {
      this.options.chart.series[1].setData(interestArr);
    },

    onUpdate: function(yearlyInstallments) {
      var interestArr = _.map(yearlyInstallments.models, 
                              function(installment) {
                                return Math.round(installment.get('interestPaid'));
                              });

      var principalArr = _.map(yearlyInstallments.models, 
                              function(installment) {
                                return Math.round(installment.get('principalPaid'));
                              }); 

      this.onUpdatePrincipal(interestArr);
      this.onUpdateInterest(principalArr);
    },

    onDestroy: function() {
      this.options.chart.destroy();
    }
  });

  return CalculatorGraphView;
});


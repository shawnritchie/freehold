/*jshint devel:true */
/*global define */

define(
  [
    "marionette"
    ,"tpl!apps/calculator/templates/calculator_row_view.tpl"
    ,"tpl!apps/calculator/templates/calculator_table_view.tpl"
    ,"entities/calculator"
    ,"utils/utility"
  ], 
function(Marionette, calcRowViewTpl, calcTableViewTpl, Entities){

  var CalculatorRowView = Marionette.ItemView.extend({
    tagName: "tr",
    template: calcRowViewTpl,

    onBeforeRender: function(){
      var principalPaid = Math.round(this.model.get("principalPaid"));
      var interestPaid = Math.round(this.model.get("interestPaid"));
      var principalLeft = Math.round(this.model.get("principalLeft"));
      var month = this.model.get("month");

      this.model = new Entities.Installment({
        month: month,
        principalLeft: "€" + principalLeft.toString().commafy(),
        principalPaid: "€" + principalPaid.toString().commafy(),
        interestPaid: "€" + interestPaid.toString().commafy(),
        paid:  "€" + (principalPaid +  interestPaid).toString().commafy()
      });
    }
  });

  var CalculatorYearView = Marionette.CompositeView.extend({
    tagName: "div",
    template: calcTableViewTpl,
    className: "calculator-tblContainer kite__item",
    childView: CalculatorRowView,
    childViewContainer: "tbody",

    initilize: function() {
      console.out(this);
    }
  });

  return CalculatorYearView;
});


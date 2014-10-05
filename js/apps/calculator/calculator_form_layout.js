/*jshint devel:true */
/*global define */
/*global require */

define(
  [
    "marionette", 
    "backbone.babysitter",
    "app", 
    "components/slider/slider", 
    "components/numeric_input/numeric_input", 
    "components/numeric_input/numeric_input_model"
  ], 
function(Marionette, Babysitter, FreeholdApp){

  var CalculatorFormLayout = Marionette.LayoutView.extend({
    tagName: "form",
    className: "login-form kite__item",
    viewContainer: undefined,

    regions: {
      amount: "#fh-amount",
      term: "#fh-term",
      deposit: "#fh-deposit",
      interest: "#fh-interest",
      repayments: "#fh-repayments"
    },

    initialize: function() {
      this.template = this.options.tpl;
      this.viewContainer = new Backbone.ChildViewContainer();

        var modelAmount = 'amount';
        this.viewContainer.add(
          new FreeholdApp.Widgets.SliderView({
                model: new FreeholdApp.Widgets.NumericInputModel({
                   fhTitle: "Loan Amount"
                  ,fhValue:this.model.get(modelAmount)
                  ,fhMin:0
                  ,fhMax:2000000
                  ,fhIncrement:1000
                  ,fhPreTag:"€"
                  ,fhIcon:"u-home"
                  ,fhScale:[0,100000,250000,400000,2000000]
                  ,fhModelAttr: modelAmount
                  ,fhParentModel: this.model
                })
              })
          ,modelAmount
        );

        var modelTerm = 'term';
        this.viewContainer.add(
          new FreeholdApp.Widgets.SliderView({
                model: new FreeholdApp.Widgets.NumericInputModel({
                   fhTitle: "Loan Term"
                  ,fhValue:this.model.get(modelTerm)
                  ,fhMin:0
                  ,fhMax:45
                  ,fhIncrement:1
                  ,fhPostTag:" years"
                  ,fhIcon:"u-clock"
                  ,fhModelAttr: modelTerm
                  ,fhParentModel: this.model
                })
              })
          ,modelTerm
        );

        var modeDeposit = 'deposit';
        this.viewContainer.add(
          new FreeholdApp.Widgets.SliderView({
                model: new FreeholdApp.Widgets.NumericInputModel({
                   fhTitle: "Deposit"
                  ,fhValue:this.model.get(modeDeposit)
                  ,fhMin:0
                  ,fhMax:100000
                  ,fhIncrement:1000
                  ,fhPreTag:"€"
                  ,fhIcon:"u-euro"
                  ,fhScale:[0,10000,20000,50000,100000]
                  ,fhModelAttr: modeDeposit
                  ,fhParentModel: this.model
                })
              })
          ,modeDeposit
        );

        var modelInterest = 'interest';
        this.viewContainer.add(
          new FreeholdApp.Widgets.SliderView({
                model: new FreeholdApp.Widgets.NumericInputModel({
                   fhTitle: "Interest Rate"
                  ,fhValue:this.model.get(modelInterest)
                  ,fhMin:0
                  ,fhMax:10
                  ,fhIncrement:1
                  ,fhPostTag:"%"
                  ,fhIcon:"u-percentage"
                  ,fhModelAttr: modelInterest
                  ,fhParentModel: this.model
                })
              })
          ,modelInterest
        );

        var modelRepayments = 'repayments';
        this.viewContainer.add(
          new FreeholdApp.Widgets.NumericInputView({
                model: new FreeholdApp.Widgets.NumericInputModel({
                   fhTitle: "Repayments"
                  ,fhValue:this.model.get(modelRepayments)
                  ,fhMin:0
                  ,fhMax:2000
                  ,fhIncrement:100
                  ,fhPreTag:"€"
                  ,fhIcon:"u-graph"
                  ,fhScale:[0,250,500,1000,20000]
                  ,fhModelAttr: modelRepayments
                  ,fhParentModel: this.model
                })
              })
          ,modelRepayments
        );

      
        this.viewContainer.each(function(view) {
            var viewDict = this.viewContainer;

            view.model.on('change:fhValue', function(e) {
              if (e.changed.fhValue)
              {
                var attribute = view.model.get('fhModelAttr');
                if (attribute)
                  view.model.get('fhParentModel').set(attribute, e.changed.fhValue);
              }
            }.bind(this));

            view.model.get('fhParentModel').on('change', function(e) {
              _.each(Object.keys(e.changed), function(changed){
                if (changed === view.model.get('fhParentModel').get('mode'))
                {
                  var generatedView = viewDict.findByCustom(changed);
                  generatedView.model.set({fhValue : view.model.get('fhParentModel').get(changed)});
                  generatedView.trigger('numeric:input:update');
                }
              }.bind(e));
            }.bind(this));

        }.bind(this));
    },

    onShow: function() {
      this.amount.show(this.viewContainer.findByCustom("amount"));
      this.term.show(this.viewContainer.findByCustom("term"));
      this.deposit.show(this.viewContainer.findByCustom("deposit"));
      this.interest.show(this.viewContainer.findByCustom("interest"));
      this.repayments.show(this.viewContainer.findByCustom("repayments"));
      $(this[this.model.attributes.mode].el).find('input').prop('disabled', true);
    }
  });

  return CalculatorFormLayout;

});
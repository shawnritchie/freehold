/*jshint devel:true */
/*global define */

define(
  [
    "marionette", 
    "tpl!apps/calculator/templates/calculator_layout.tpl",
    "app", 
    "apps/calculator/calculator_summary_layout", 
    "apps/calculator/calculator_navigator_view", 
    "apps/calculator/calculator"
  ], 
function(Marionette, calcTpl, FreeholdApp, CalculatorSummaryLayout, CalculatorNavigatorView){

  var CalculatorLayout = Marionette.LayoutView.extend({
    tagName: "div",
    template: calcTpl,
    className: "wrapper kite kite--center",

    regions: {
      navigator: '.calculator-type',
  		form: '#fh-form',
  		summary: '#calculator--summary',
    },

    recieve: {
      calculatorSummary: function() {
        return {
          event: "calculator:summary",
          channel: FreeholdApp.Calculator.channel.commands
        };
      },
      calculatorResetForm: function() {
        return {
          event: "calculator:reset:form",
          channel: FreeholdApp.Calculator.channel.commands
        };
      }
    },

    fire: {
      calculatorToggleCalculator: function() {
        return {
          event: "calculator:toggle:mode",
          channel: FreeholdApp.commands
        };
      }
    },

    animate: {
      _animate: function(elem, animation, callback) {
        $(elem).addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          if (callback) 
            callback()
          else
            $(elem).removeClass(animation + ' animated');
        }.bind(this));
      },
      bounceInLeft: function(elem) {
        this._animate(elem, 'bounceInLeft');
      },
      bounceInRight: function(elem) {
        this._animate(elem, 'bounceInRight');
      },
      bounceOutLeft: function(elem, callback) {
        this._animate(elem, 'bounceOutLeft', callback);
      },
      bounceOutRight: function(elem, callback) {
        this._animate(elem, 'bounceOutRight', callback);
      }
    },

    initialize: function(){
      var calculatorResetForm = this.recieve.calculatorResetForm();
      calculatorResetForm.channel.setHandler(calculatorResetForm.event, function(direction) {
        this.animateOut(direction.direction);
      }.bind(this));
    },

    onShow: function() {
      this.navigator.show(new CalculatorNavigatorView({header: this.options.header}));
      var calculatorSummary = this.recieve.calculatorSummary();
      calculatorSummary.channel.setHandler(calculatorSummary.event, function() {
        if (!this.summary.currentView)
          this.summary.show(new CalculatorSummaryLayout({"formModel": this.form.currentView.model}));
        else
          this.updateSummaryLayout();
      }.bind(this));
      this.animateIn();
    },

    animateIn: function() {
      switch(this.options.direction) {
        case 'left':
            this.animate.bounceInRight(this.el);
          break;
        default:
            this.animate.bounceInLeft(this.el); 
      }
    },

    animateOut: function(direction) {
      var callback = function() {
        var calculatorToggleCalculator = this.fire.calculatorToggleCalculator();
        calculatorToggleCalculator.channel.execute(calculatorToggleCalculator.event, {direction: direction});
      }.bind(this);
      switch(direction) {
        case 'left':
          this.animate.bounceOutLeft(this.el, callback);
          break;
        default: 
          this.animate.bounceOutRight(this.el, callback);
      }
    },

    updateSummaryLayout: function() {
      this.summary.currentView.triggerMethod("updateRegions");
    }

  });

  return CalculatorLayout;
});


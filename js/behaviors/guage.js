/*jshint devel:true */
/*global define */
/*global GuageBehavior */

define(["marionette", "utils/utility", "jquery.knob"], function(Marionette){

  var calculateChange = function(state) {
    var increment = state.targetVal - state.currentVal;
    var divisor = increment >= 0 ? 100 : -100;
    increment = Math.abs(increment);

    return {
      divisor: divisor,
      increment: increment
    };
  };

  GuageBehavior = Marionette.Behavior.extend({

    ui: {
        guageYear: 'h3',
        guagePercentage: '.dial',
        guageValue: '.calculator-gagueValue',
    },

    onChangeGuagePercentage: function(state) {
        state.currentVal = this.view.model.get('guagePercentage');
        var animationState = calculateChange(state);
        $(this.ui.guagePercentage).animate({value: 100}, {
            duration: 10*animationState.increment,
            easing:'swing',
            progress: function (promise, progress) {
              var value = Math.round(progress*100);
              var inc = Math.round(value/animationState.divisor*animationState.increment);
              $(this).val(state.currentVal + inc).trigger('change');
            }
        });
        this.view.model.set('guagePercentage', state.targetVal);  
    },

    onChangeGuageValue: function(state) {
      state.currentVal = this.view.model.get('guageValue');
      var animationState = calculateChange(state);
        $(this.ui.guageValue).animate({value: 100}, {
            duration: 1000,
            easing:'swing',
            progress: function (promise, progress) {
              var value = Math.round(progress*100);
              var inc = Math.round(value/animationState.divisor*animationState.increment);
              $(this).text("€" + (state.currentVal + inc).toString().commafy());
            }
        });
        this.view.model.set('guageValue', state.targetVal);
    },

    onChangeYear: function(year) {
      $(this.ui.guageYear).text(this.view.model.get('guageTitle') + ' ' + year);
    },

    onChangeGuage: function(state) {
      this.view.triggerMethod("changeGuageValue", {targetVal: Math.ceil(state.value)});
      this.view.triggerMethod("changeGuagePercentage", {targetVal: Math.ceil(state.percentage)});
    },

    onShow: function() {
      $(this.ui.guagePercentage).knob({
          'readOnly':true,
          'width':'100%',
          'thickness':'.3',
          'inputColor': 'rgb(164, 183, 215)',
          'fgColor': 'rgb(164, 183, 215)',
          'bgColor': 'rgb(226, 236, 255)',
            'draw' : function () { 
              $(this.i).val(this.cv + '%');
            }
        });
    },

    onBeforeDestroy: function() {
      $.removeData($(this.ui.guagePercentage));
      $(this.ui.guagePercentage).off();
      $(this.ui.guagePercentage).unbind();
      $(this.ui.guagePercentage).remove();
    }

  });

  return GuageBehavior;
});
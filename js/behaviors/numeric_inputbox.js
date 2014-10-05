/*jshint devel:true */
/*global define */
/*global InputBoxBehavior */
/*global _ */

define(["marionette", "utils/utility"], function(Marionette){

  var utility = {
    timeoutReference:{}
  };

  NumericInputBoxBehavior = Marionette.Behavior.extend({
    ui: {
        input: '.slider-input',
        slider: '.slider-pointer',
        foregroundScale: '.slider-default',
    },

    events: {
      'focus @ui.input': 'startUpdating',
      'blur @ui.input': 'onFinish',

      'mouseover @ui.input': 'onDelayedUpdate',
      'mouseout @ui.input': 'cancelDelayedUpdate',

      'keyup @ui.input': 'onInputChange',
      'keydown @ui.input': 'incrementValue'
    },

    initialize: function() {
      this.view.on("slider:resize", this.onInputChange.bind(this));
      
      this.view.on("slider:resize:complete", function() {
        this.onInputChange();
        this.ui.input.focus();
      }.bind(this));

      this.view.on("numeric:input:update", function() {
        this.onFinish();
      }.bind(this));
    },

    onShow: function() {
      this.onFinish();
    },

    onInputChange: function() {
      var value = this.ui.input.val();
      if (value)
      {
        this.view.model.set({fhValue: value.uncommafy()});
        if (!value.endsWith('.'))
          this.showPrettyValue();
      }
    },

    onFinish: function() {
      this.ui.input.val(this.getPrettyTitle());
    },

    startUpdating: function() {
      var value = this.view.model.get("fhValue");
      this.ui.input.val( value === 0 ? "" : this.getPrettyValue() );
    },

    onDelayedUpdate: function() {
      utility.timeoutReference = setTimeout(function() {
        this.ui.input.trigger('focus.fh', null);
      }.bind(this), 500);
    },

    cancelDelayedUpdate: function() {
      if (utility.timeoutReference) 
        clearTimeout(utility.timeoutReference);
    },

    incrementValue: function(e) {
      var value = this.view.model.get("fhValue");
      switch(e.which) {
        case 38: // up
          this.ui.input.val((value + this.view.model.get('fhIncrement')).toString().commafy());
          e.preventDefault();
        break;
        case 40: // down
          value = value - this.view.model.get('fhIncrement');
          if (value >= 0)
            this.ui.input.val(value.toString().commafy());
          e.preventDefault();
        break;
      }
    },

    getPrettyValue: function() {
      return this.view.model.get("fhValue").toString().commafy();
    },

    getPrettyTitle: function() {
      return (!this.view.model.get("fhValue")) ? this.view.model.get("fhTitle") : this.view.model.get("fhTitle") + ": " + this.view.model.get("fhPreTag") + this.getPrettyValue() + this.view.model.get("fhPostTag");
    },

    showPrettyValue: function() {
      this.ui.input.val(this.getPrettyValue());
    }

  });

  return NumericInputBoxBehavior;
});
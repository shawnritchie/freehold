/*jshint devel:true */
/*global define */
/*global SliderBehavior */
/*global _ */

define(["marionette"], function(Marionette){

  var utility = {
    round: function(value, min, max) {
      if (value < min) return min;
      if (value > max) return max;
      return value;
    },
    noSegments: function(scale) {
      return (scale.length-1);
    },
    segmentWidth: function(max, noSegments) {
      return (max/noSegments);
    },
    getSegmentPosition: function(position, segmentWidth, scale) {
      for(var i = 1; i <  scale.length; i++)
      {
        if (position <= (i*segmentWidth))
            return i-1;
      }

      return (scale.length-1);
    },
    getSegmentValue: function(value, scale) {
      for(var i = 1; i <  scale.length; i++)
      {
        if (value <= (scale[i]))
            return i-1;
      }

      return (scale.length-1);
    },
    perPixelValue: function(segment, segmentWidth, scale) {
      var scaleFrom = scale[segment]; 
      var scaleTo = scale[segment+1];
      return (scaleTo - scaleFrom)/segmentWidth;
    },
    positionFix: function(position, options) {
      var pos = position === options.min ? 0 :  position;
      return (options.max-pos);
    },
    calculteSlideVal: function(position, options, scale) {
      var pos = this.positionFix(position, options);
      var noSegment = this.noSegments(scale);
      var segmentWidth = this.segmentWidth(options.max, noSegment);
      var selectedSegment = this.getSegmentPosition(pos, segmentWidth, scale);
      var perPixelValue = this.perPixelValue(selectedSegment, segmentWidth, scale);
      var inSegmentPost = pos - (selectedSegment*segmentWidth);
      return scale[selectedSegment] + Math.floor(inSegmentPost*perPixelValue);
    },
    calculateSlidePos: function(value, options, scale) {
      if (value > scale[scale.length-1]) return options.min;
      var noSegment = this.noSegments(scale);
      var segmentWidth = this.segmentWidth(options.max, noSegment);
      var selectedSegment = this.getSegmentValue(value, scale);
      var perPixelValue = this.perPixelValue(selectedSegment, segmentWidth, scale);
      var segmentValue = value - (scale[selectedSegment]);
      var pos = options.max - Math.floor((selectedSegment*segmentWidth) + (segmentValue/perPixelValue));
      return pos <= options.min ? options.min : pos;
    }
  };

  SliderBehavior = Marionette.Behavior.extend({
    ui: {
        input: '.slider-input',
        slider: '.slider-pointer',
        foregroundScale: '.slider-default',
    },

    events: {
      'mousedown @ui.slider': 'onSliderDrag'
    },

    initialize: function() {
      this.view.options.model.on('change:fhValue', this.updateValue.bind(this));
      this.view.on("slider:resize", this.onResize.bind(this));
      this.updateValue();
    },

    onShow: function() {
      this.updateValue();
    },

    onSliderDrag: function() {
      var handlers = {
          mousemove : function(e){
              $(this.ui.foregroundScale).width(
                  utility.round((this.view.options.max - (e.pageX - this.view.options.offset)), this.view.options.min, this.view.options.max)+ 'px'
              );
              this.view.trigger("slider:resize", this);
          }.bind(this),
          mouseup : function(){
              this.view.trigger("slider:resize:complete", this);
              this.$el.off(handlers);   
          }.bind(this)
      };

      this.$el.on(handlers);
    },

    onResize: function() {
      $(this.ui.input).val(
        utility.calculteSlideVal(
          $(this.ui.foregroundScale).width(),
          this.view.options,
          this.view.options.model.get('fhScale')
        )
      );
    },

    updateValue: function() {
      $(this.ui.foregroundScale).width(
        utility.calculateSlidePos(
          this.view.options.model.get('fhValue'),
          this.view.options,
          this.view.options.model.get('fhScale')
        )
      );
    }

  });

  return SliderBehavior;
});
function calculateWidth(sliderContainer) {
	return Math.floor((sliderContainer.width()-20)/20)*20 + 2;
}

function round(value, min, max) {
	if (value < min) return min;

	if (value > max) return max;

	return value;
}

$(document).ready(function() {
	var input = $(".slider-input");
	var sliderContainer = $(".slider-bckgrd");
	var slider = $(".slider-pointer");
	var variableScale = $(".slider-default");
	var fixxedScale = $(".slider-selected");

	var max = calculateWidth(sliderContainer);
	fixxedScale.width(max);

	max = max + (slider.width()/2);
	var min = (slider.width()/2);

	var offset = fixxedScale.position().left;


	input
		.on("focus", function() {
			$(".a-slider:not(.a-closed)").each(function() {
				$(this).toggleClass("a-closed");
			});

			$(this).next().toggleClass("a-closed");
		});


	slider.on("mousedown", function() {
		var handlers = {
	        mousemove : function(e){
	            variableScale.css({
	                width : round((max - (e.pageX - offset)), min, max)+ 'px'
	            });
	        },
	        mouseup : function(){
	            $(this).off(handlers);   
	        }
	    };

	    console.log("mouse down");
	    $(document).on(handlers);
    });		
});
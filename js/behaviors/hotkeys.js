
define(["marionette", "utils/hotkeys-util"], function(Marionette, HotKeys){

	HotKeysBehavior = Marionette.Behavior.extend({
	    onRender: function() {
	        window.HotKeys.bind(this.view.keyEvents, this.view, this.view.cid);
	    },

	    onClose: function() {
	        window.HotKeys.unbind(this.view.keyEvents, this.view, this.view.cid);
	    }
	});

	return HotKeysBehavior;

});
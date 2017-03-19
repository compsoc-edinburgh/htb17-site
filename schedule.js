var events = $(".timeline-event");

// for (i = events.length - 1; i > 0; i--) {
	if ($(events[6]).data("time") <= getTime()) {
		$("body").scrollTop($(events[6]).position().top);
//	}
//



var scroll_start = 0;
var startchange, offset;
var animationAdded = false;
var initiallyRun = false;

function updateNav() { 
	var nav = $("nav")

	if (initiallyRun && !animationAdded) {
		console.log("ok")
		animationAdded = true;
		nav.addClass("nav-animate")
	}
	initiallyRun = true;

	scroll_start = $(this).scrollTop();
	if(scroll_start > offset) {
		nav.addClass("teal");
		nav.removeClass("transparent");
	} else {
		nav.addClass("transparent");
		nav.removeClass("teal");
	}
}


$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.parallax').parallax();

	$('#location-map')
		.mousedown(
			function(){
				$(this).find('iframe').addClass('clicked')
			}
		)
		.mouseleave(
			function(){
				$(this).find('iframe').removeClass('clicked')
			}
		);

	startchange = $('#cover-img');
	offset = startchange.offset().top - startchange.height() / 4;
	$(document).scroll(updateNav);
	updateNav();
})
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
})
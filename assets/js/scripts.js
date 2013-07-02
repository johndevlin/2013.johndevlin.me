/* Author: John Devlin

*/

if ( $(window).width() > 767) {
	$(document).ready(function() {
		$('.no-touch header hgroup').hide().delay(500).fadeIn(1200);
		$('.no-touch #main h1').hide().delay(1200).fadeIn(1200);
		$('.no-touch #main p.intro').hide().delay(1800).fadeIn(1200);
		$('.no-touch #main p.sub').hide().delay(2400).fadeIn(1200);
		$('.no-touch #main ul').hide().delay(3000).fadeIn(1200);
	});
}

// Rotate JD background
$(function() {
	$("header .container").mousemove(function(e) {
		
		// Mouse position
		var offset = $(this).offset();
		var relativeX = (e.pageX - offset.left);
		
		// Mouse position from center
		var center = relativeX-480
		
		// Angle
		var angle = center/13
		
		// Negative angle
		var negitiveAngle = -angle
		
		$("header hgroup").css({
			'transform': 'rotate(' + angle + 'deg)'
		});
		
		$("header h1").css({
			'transform': 'rotate(' + negitiveAngle + 'deg)'
		});

	});
});

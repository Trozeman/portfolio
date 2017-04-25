$(window).scroll(function() {
	$('.mov').each(function(){
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+300) {
			$(this).addClass('tada');
		}
		if (imagePos < topOfWindow) {
			$(this).removeClass('tada');
		}
		if (imagePos > topOfWindow+450) {
			$(this).removeClass('tada');
		}
	});
});
var s = 1;
var mov = $('.mov'); 
$(window).scroll(function() {
	var top = $(window).scrollTop();
	var move = projects.offset().top;
	if (top >= move-300 && s == 1) {
		s++;
		$('.mov').addClass('tada');
	}
	if (top >= move+200 && s == 2) {
		s--;
		$('.mov').removeClass('tada');
	}
});
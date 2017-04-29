var photo = $('.portret'); 
var logo = $('.photo'); 
var projects = $('.progect'); 
/*
onComplete:color,
repeat:1, 
repeatDelay:1,
yoyo:true
*/
var tm = new TimelineMax({}); 
// var p = 1;
/*
rotation: 720,
*/
tm.from(photo, 1, {rotationY:90, rotationX:90, opacity: 0,  scale: 0.3, ease:Power1.easeOut }, 0.3);


var m =1;
var c =1;
$(window).scroll(function() {
	var top = $(window).scrollTop();
	var proj = projects.offset().top;
	var logs = logo.offset().top;
		// console.log(top );
	// console.log(proj);
	if (top <= logs+300 && c == 1) {
		c++;
		tm.staggerTo(logo, 0.5, {rotationY:0, rotationX:0, opacity: 1,  scale: 1 ,ease: Power1.easeOut }, 0.1);
	}
	if (top >= proj && m == 1) {
		m++;
		tm.staggerTo(projects, 0.5, {rotationY:0, rotationX:0, opacity: 1,  scale: 1 ,ease: Power1.easeOut }, 0.2);
	}
});
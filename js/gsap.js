var photo = $('.portret'); 
var logo = $('.photo'); 
var projects = $('.progect'); 
var tm = new TimelineMax({}); 

tm.from(photo, 1, {rotationY:90, rotationX:90, opacity: 0,  scale: 0.3, ease:Power1.easeOut }, 0.3);


var m =1;
var c =1;
$(window).scroll(function() {
	var top = $(window).scrollTop();
	var proj = projects.offset().top;
	var logs = logo.offset().top;

	if (top >= logs-300 && c == 1) {
		c++;
		tm.staggerTo(logo, 0.3, {rotationY:0, rotationX:0, opacity: 1,  scale: 1 ,ease: Power1.easeOut }, 0.1);
	}
	if (top >= proj-300 && m == 1) {
		m++;
		tm.staggerTo(projects, 0.5, {rotationY:0, rotationX:0, opacity: 1,  scale: 1 ,ease: Power1.easeOut }, 0.2);
	}
});
var banner = $('.banner');
var bannerText = $('.banner>.row>h3:nth-child(1)');
var bannerText2 = $('.banner>.row>h3:nth-child(2)');
var bannerText3 = $('.banner>.row>h3:nth-child(3)');
var bh = banner.height();
var bw = banner.width();
var th = bannerText.height();
var tw = bannerText.width();

tm.to(bannerText, 1, {y:bh/2 - th/2, rotationY:0, rotationX:0, opacity: 1,  scale: 1, ease:Power1.easeOut });
tm.to(bannerText, 1, {y:bh, rotationY:0, rotationX:90, opacity: 0,  scale: 0.8, ease:Power1.easeOut }, '+=3');
tm.to(bannerText2, 1, {y:bh/2 - th/2, rotationY:0, rotationX:0, opacity: 1,  scale: 1, ease:Power1.easeOut }, 'bannerText-=1');
tm.to(bannerText2, 1, {y:bh, rotationY:0, rotationX:90, opacity: 0,  scale: 0.8, ease:Power1.easeOut }, '+=3');
tm.to(bannerText3, 1, {y:bh/2 - th/2, rotationY:0, rotationX:0, opacity: 1,  scale: 1, ease:Power1.easeOut }, 'bannerText2-=1');
tm.to(bannerText3, 1, {y:bh, rotationY:0, rotationX:90, opacity: 0,  scale: 0.8, ease:Power1.easeOut }, '+=3');
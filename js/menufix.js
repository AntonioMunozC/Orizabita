$(document).ready(function(){
	var altura = $('.header').offset().top;
    
    $(window).on('scroll', function(){
		if ( $(window).scrollTop() > (altura+250) ){
            $('header').addClass('menu-fixed');
            $('.logo').addClass('add-logo');
		} else {
            $('.header').removeClass('menu-fixed');
            $('.logo').removeClass('add-logo');
		}
	});
 
});
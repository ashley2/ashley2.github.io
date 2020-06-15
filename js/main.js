var sass = require('sass');

var result = sass.renderSync({
  file: scss_filename
});

$(function() {
$('.center').css('display', 'none');
});


$( window ).on( "load", function() { 
	console.log('load')
$(".left").animate({
                right: '1000px'

            },1000, 'linear');
$(".right").animate({
                left: '1000px'

            },1000,'linear');

setTimeout(function(){ 
	$('.center').fadeIn(2000);
}, 200);


});





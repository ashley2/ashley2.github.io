'use strict'
// $('.parallax-window').parallax({
//     naturalWidth: 600,
//     naturalHeight: 400
//   });


$(document).ready(function() {

let navMain =  $('#navMain');
    // home parallax animation 
    $(window).scroll(function(e) {
        parallax();
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.hero').css('top', -(scrolled * 0.0315) + 'rem');
        $('.signature, .tagline').css('top', -(scrolled * -0.005) + 'rem');
        // $('.instagramBlock').css('top', -(scrolled * 0.0315) + 'rem');
        // $('.signature, .tagline').css('opacity',1-(scrolled*.00175));
    };

window.addEventListener('resize', function(event){
console.log('resizing')
let windoWidth = document.documentElement.clientWidth;
if (windoWidth >= 992) {
    console.log('992+')
$('#overlay').removeClass('overlay');
 $('#navMain').addClass('bg-transparent navbar-light');
 $('#navMain').removelass(' navbar-dark');

  // document.querySelector('.height').innerText = document.documentElement.clientHeight;
}
});


});

function overlayScroll() {
    $('#overlay').toggleClass('overlay');
    $('body').toggleClass('stop-scrolling');
}



let pathname = window.location.pathname.slice(1).toString()

function navFunction() {
    console.log(pathname)
    switch (pathname) {
        case 'work/':
            $(navMain).toggleClass('bg-transparent')
            overlayScroll();
            break;
        case 'contact/':
            $(navMain).toggleClass('bg-transparent')
            overlayScroll();
            break;
        case 'about/':
            $(navMain).toggleClass('bg-transparent navbar-dark navbar-light');
            overlayScroll();
            break;
        default:
            $(navMain).toggleClass('bg-transparent navbar-dark navbar-light');
            overlayScroll();
    }


    $('.dropdown-item').click(function() {
        overlayScroll();
        $('.navbar-collapse').removeClass("show");
        $(navMain).toggleClass('bg-transparent')


    })

}
'use strict'
// $('.parallax-window').parallax({
//     naturalWidth: 600,
//     naturalHeight: 400
//   });


$(document).ready(function() {

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



});

function overlayScroll() {
    $('#overlay').toggleClass('overlay');
    $('body').toggleClass('stop-scrolling');
}



let pathname = window.location.pathname.slice(1).toString()

function navFunction() {
    if (pathname === "work.html") {
        $('#navMain').toggleClass('bg-transparent')
        overlayScroll();
    } else {
        $('#navMain').toggleClass('bg-transparent navbar-dark navbar-light');
        overlayScroll();
    }

    $('.dropdown-item').click(function() {
        overlayScroll();
        $('.navbar-collapse').removeClass("show");
        $('#navMain').toggleClass('bg-transparent')


    })

}
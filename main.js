'use strict'
// $('.parallax-window').parallax({
//     naturalWidth: 600,
//     naturalHeight: 400
//   });



// $(document).ready(function() {
// /*! Fades in page on load */
// $('body').css('display', 'none').fadeIn(500);
// console.log('fade')
// function isMobile() {
//   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }

// });

$(document).ready(function() {

    // setTimeout(function() { 
    //        $('#homeLink').addClass('active');
    //  }, 500);


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
   let pathname = window.location.pathname.slice(1).toString()
function navFunction() {
    if (pathname === "work.html") {
        console.log('2')
         $('#navMain').toggleClass('bg-transparent')
        $('#overlay').toggleClass('overlay');
        $('body').toggleClass('stop-scrolling');
    } else {
        $('#navMain').toggleClass('bg-transparent navbar-dark navbar-light');
        $('#overlay').toggleClass('overlay');
        $('body').toggleClass('stop-scrolling');

    }

    // let pathname = window.location.pathname.slice(1).toString()
    // console.log(pathname)

    // if (pathname === "work.html") {
    //     $('#workLink').html('<li class="nav-item text-center dropdown"><a class="nav-link dropdown-toggle active" href="#" id="portfolioDropDown" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page">work</a><ul class="dropdown-menu" aria-labelledby="portfolioDropDown"><li><a class="dropdown-item" href="#panelOne">Web Development & Design</a></li><li><a class="dropdown-item" href="#panelTwo">Mockups & Design</a></li> <li><a class="dropdown-item" href="#panelThree">Logos & Branding</a></li><li><a class="dropdown-item" href="#panelFour">Digital Art</a></li></ul></li>')
    //     $('#navMain').toggleClass('navbar-light')
    // }

}
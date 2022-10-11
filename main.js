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

function navFunction() {
    $('#navMain').toggleClass('bg-transparent navbar-dark navbar-light')
    $('#overlay').toggleClass('overlay')
    $('body').toggleClass('stop-scrolling')

}


// function on() {
//   document.getElementById("overlay").style.display = "block";
// }

// function off() {
//   document.getElementById("overlay").style.display = "none";
// }
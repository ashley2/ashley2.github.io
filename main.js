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



    $('.navbar').click(function() {
        console.log('click')
        if ($('#navbarNav').hasClass('show')) {
            console.log('yes')
            $('.navbar').addClass('openNav')
        } else {
console.log('no')
        }

    })

});
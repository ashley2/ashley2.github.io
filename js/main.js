$(function() {
    $('.center').css('display', 'none');

   
//     var controller = new ScrollMagic.Controller({addIndicators: true});

// // create a scene
// var scene = new ScrollMagic.Scene({
// 	triggerElement: "#trigger1",
// 	triggerHook: .5,
// 	// duration: 100, // the scene should last for a scroll distance of 100px
// 	// offset: 50 // start this scene after scrolling for 50px
// })
//  // .setPin(".center") // pins the element for the the scene's duration
	
// 	.addIndicators()
// 	.addTo(controller); 

// scene.on("leave", function (event) {
// $('.center').removeClass("sticky")

// })

});

$(window).on("load", function() {
    $(".left").animate({
        right: '1000px'

    }, 1000, 'linear');
    $(".right").animate({
        left: '1000px'

    }, 1000, 'linear');

    setTimeout(function() {
        $('.center').fadeIn(2000);
    }, 200);


});
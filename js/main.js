$(function() {
            $('.center').css('display', 'none');

            var testCtrl  = new ScrollMagic.Controller({
                addIndicators: true,
                globalSceneOptions: {
                    triggerHook: 'onLeave'
                }
            });



            $(".pinning").each(function() {

                new ScrollMagic.Scene({
                        triggerElement: this,
                        duration: '50%'
                    })
                    .setPin(this)
                    // .addIndicators()
                    .addTo(testCtrl);
            });

var controller = new ScrollMagic.Controller();

$(".wrapper").each(function() {
  var tl = new TimelineMax();
  var child = $(this).find(".child");
  tl.to(child, 1, { y: -180, ease: Linear.easeNone });

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.4,
    duration: "100%"
  })
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});


            // wait for document ready
            // init
            // globalSceneOptions: {
            // 	triggerHook: 'onLeave',
            // 	duration: "200%" // this works just fine with duration 0 as well
            // 	// However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // 	// Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
            // }
            // animate all sections parallax easy
            // get all slides
            	// var slides = document.querySelectorAll("section.panel");

            	// // create scene for every slide
            	// for (var i=0; i<slides.length; i++) {
            	// 	new ScrollMagic.Scene({
            	// 			triggerElement: slides[i],
            	// 			triggerHook: 'onLeave',
            	// 		duration: "200%"
            	// 		})
            	// 		.setPin(slides[i], {pushFollowers: false})
            	// 		.addIndicators() // add indicators (requires plugin)
            	// 		.addTo(controller);
            	// }
            // });



            // var timeline = new TimelineMax().add([
            // 	TweenMax.to(".timeline", 1, {alpha:0,ease:Linear.easeNone}),	
            // // // create a scene
            // var scene = new ScrollMagic.Scene({
            // 	triggerElement: ".spacer",
            // 	triggerHook: 0.5,
            // 	duration: 300, // the scene should last for a scroll distance of 100px
            // // 	// offset: 50 // start this scene after scrolling for 50px
            // })

            //  .setPin(".fadeIn") // pins the element for the the scene's duration
            // 	// setTween(timeline)
            // 	.addIndicators()
            // 	.addTo(controller); 

            // scene.on("leave", function (event) {
            // $('.center').removeClass("sticky")

            // }x)

            });

            $(window).on("load", function() {


                setTimeout(function() {
                    $('.center').fadeIn(2000);
                }, 200);


            });
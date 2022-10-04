// **text animation fade in on scroll
var listones = gsap.utils.toArray('.listone');

listones.forEach((listone) => {

    gsap.from(listone, {
        autoAlpha: 0,
        scrollTrigger: {
            trigger: listone,
            start: 'top center',
            scrub: true,
            end: '+=100',
            // markers: true
        }
    })
});

// *** animation color fade
gsap.to(".section1", {
  scrollTrigger: {
    trigger: ".section1",
    start: 'center 40%',
    toggleActions: "restart pause reverse pause"
  }, 
  duration: 1, 
  backgroundColor: "#ffffff", 
  ease: "none"
});


// gsap.to(".instagramBlock",{
//   scrollTrigger:{
    
//     trigger: ".instagramBlock",
//     pin: true,
//     pinSpacing: false,
//     start: "top center",
//     // end: "bottom center",
//     // id: "hero"
// }});


ScrollTrigger.matchMedia({
    // large
    "(min-width: 992px)": function() {
        console.log('biiig')
        const ipadTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".ipads",
                start: "100 30%",
                end: "bottom bottom",
                // pin: true,
                scrub: true,

                // markers: true,
                // toggleActions: "play reverse play reverse",
            }
        })

        ipadTl.to('.ipadLeft', { opacity: 1, duration: 2, x: -150, })
            .to('.ipadRight', { opacity: 1, duration: 2, x: 150 }, "<")
            .to('.ipadTextLeft', { opacity: 1, duration: 3, x: 135 }, "<")
            .to('.ipadTextRight', { opacity: 1, duration: 3, x: -70 }, "<")
            .to('.ipadLeft', 4, { delay: 2, duration: 2, x: 50 }, ">")
            .to('.ipadRight', 4, { duration: 2, x: 50 }, "<")


    },

    // medium
    // "(min-width: 600px) and (max-width: 991px)": function() {

    "(min-width: 672px) and (max-width: 991px)": function() {


    },

    // small
    "(max-width: 671px)": function() {
        console.log("small")

        // ***** add class which moves the text to above or below the images 
        const ipadTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".ipads",
                start: "100 30%",
                end: "bottom bottom",
                // pin: true,
                scrub: true,
                // toggleActions: "play reverse play reverse",
            }
        })
        ipadTl.to('.ipadLeft', { opacity: 1, duration: 2, x: -100, })
            // .to('.ipadRight', { opacity: 1, duration: 2, x: 150 }, "<")
            .to('.ipadTextLeft', { opacity: 1, duration: 3, x: 235, y: 150 }, "<")
            .to('.ipadTextRight', { opacity: 1, duration: 3, x: -20, y: -100 }, "<")
           .to('.ipadRight', { opacity: 1, duration: 2, x: 100, y: 150}, "<")
            .to('.ipadLeft', 4, { delay: 2, duration: 2, x: 50 }, ">")
            .to('.ipadRight', 4, { duration: 2, x: 50 }, "<")

    },

    "all": function() {
        console.log("all")
        // const ipadTl = gsap.timeline({
        // scrollTrigger: {
        //      trigger: ".ipads",
        //      start: "100 30%",
        //      end: "bottom bottom",
        //       // pin: true,
        //      scrub: true,

        //      // markers: true,
        //      // toggleActions: "play reverse play reverse",
        //    }
        //    })

        // ipadTl.to('.ipadLeft', { opacity: 1, duration: 2,  x: -150, })
        // .to('.ipadRight', { opacity: 1, duration: 2,  x: 150}, "<")
        // .to('.ipadTextLeft', { opacity: 1, duration: 3, x:135}, "<")
        // .to('.ipadTextRight', { opacity: 1, duration: 3, x: -70 }, "<")
        // .to('.ipadLeft', 4,{ delay: 2, duration: 2, x: 50}, ">")
        // .to('.ipadRight',4,{ duration: 2, x: 50}, "<")
        // }

    }

});

// *** pin ipad animation 
ScrollTrigger.create({
    trigger: ".ipads",
    start: "0 20%",
    // end: 'bottom bottom',
    pin: true,
    markers: true,
    // onEnter: () => tl2.play(),
    // onLeaveBack: () => ipadTl.reverse()
})


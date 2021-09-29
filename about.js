

//   ScrollTrigger.addEventListener("refreshInit", () => progress = ScrollTrigger.progress);
// ScrollTrigger.addEventListener("refresh", () => ScrollTrigger.scroll(progress * ScrollTrigger.maxScroll(window)));


ScrollTrigger.matchMedia({
    // large
    "(min-width: 992px)": function() {
              console.log('biiig')

    $(".scroll-trigger-about").css('font-size', '15px');
  $(".scroll-trigger-about").css('margin-top', '0rem');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-trigger-about",
                pin: true,
                scrub: 1,
                start: "top center",
                end: "+=200",
            }
        });
        tl.to(".ashleyImg", {
            x: 100,
            duration: 3,
            opacity: 1,
            ease: "slow"
        }).to(".p1", {
            y: 15,
            duration: 2,
            opacity: 1
        }).to(".p2", {
            y: 15,
            duration: 2,
            opacity: 1
        }).to(".p3", {
            y: 15,
            duration: 2,
            opacity: 1
        }).to(".p4", {
            y: 15,
            duration: 2,
            opacity: 1
        });


        
    },

    // medium
        // "(min-width: 600px) and (max-width: 991px)": function() {

    "(min-width: 672px) and (max-width: 991px)": function() {
        console.log('med')
        // $(".scroll-trigger-about").css('font-size', '13px');
                $(".scroll-trigger-about").css('margin-top', '10rem');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pinTrigger",
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=100",
            }
        });
        tl.to(".ashleyImg", {
            x: 5,
            duration: 2,
            opacity: 1,
            ease: "slow"
        }).to(".p1", {
            y: 20,
            duration: 4,
            opacity: 1
        }).to(".p2", {
            y: 20,
            duration: 4,
            opacity: 1
        }).to(".p3", {
            y: 20,
            duration: 4,
            opacity: 1
        }).to(".p4", {
            y: 20,
            duration: 4,
            opacity: 1
        });
    },

    // small
    "(max-width: 671px)": function() {
        console.log('sm')
        // $(".scroll-trigger-about").css('font-size', '10px');
          $(".scroll-trigger-about").css('margin-top', '0rem');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pinTrigger",
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=100",
            }
        });
        tl.to(".ashleyImg", {
            x: 80,
            duration: 2,
            opacity: 1,
            ease: "slow"
        }).to(".p1", {
            y: 2,
            duration: 4,
            opacity: 1
        }).to(".p2", {
            y: 2,
            duration: 4,
            opacity: 1
        }).to(".p3", {
            y: 2,
            duration: 4,
            opacity: 1
        }).to(".p4", {
            y: 2,
            duration: 4,
            opacity: 1
        });


    },

    // all 
    // "all": function() {
    //     console.log('all')
    //      const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".scroll-trigger-about",
    //             pin: true,
    //             scrub: 1,
    //             start: "top center",
    //             end: "+=200",
    //         }
    //     });
    //     tl.to(".ashleyImg", {
    //         x: 100,
    //         duration: 3,
    //         opacity: 1,
    //         ease: "slow"
    //     }).to(".p1", {
    //         y: 15,
    //         duration: 2,
    //         opacity: 1
    //     }).to(".p2", {
    //         y: 15,
    //         duration: 2,
    //         opacity: 1
    //     }).to(".p3", {
    //         y: 15,
    //         duration: 2,
    //         opacity: 1
    //     }).to(".p4", {
    //         y: 15,
    //         duration: 2,
    //         opacity: 1
    //     });


    // }

});
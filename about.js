
const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
        console.log('view')
      // Add the animation class
      entry.target.classList.add('pinTrigger-animation');
      $('.ashleyImg' ).fadeIn(600)
     $('.pAnimate' ).fadeIn(600)

    }
  });
});
// Tell the observer which elements to track
observer.observe(document.querySelector('.ashleyImg'));


const observerP = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
        console.log('view')
      // Add the animation class
      entry.target.classList.add('pTrigger-animation');
    }
  });
});
// Tell the observer which elements to track
observerP.observe(document.querySelector('.scroll-trigger-about'));


// ScrollTrigger.matchMedia({
//     // large
//     "(min-width: 992px)": function() {
//               console.log('biiig')

//     // $(".scroll-trigger-about").css('font-size', '15px');
//   $(".scroll-trigger-about").css('margin-top', '0rem');

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".scroll-trigger-about",
//                 pin: true,
//                 scrub: 1,
//                 start: "top center",
//                 end: "+=200",
//                 // markers: true,

//             }
//         });
//         tl.to(".ashleyImg", {
//             x: 100,
//             duration: 3,
//             opacity: 1,
//             ease: "slow"
//         }).to(".p1", {
//             y: 15,
//             duration: 2,
//             opacity: 1
//         }).to(".p2", {
//             y: 15,
//             duration: 2,
//             opacity: 1
//         }).to(".p3", {
//             y: 15,
//             duration: 2,
//             opacity: 1
//         }).to(".p4", {
//             y: 15,
//             duration: 2,
//             opacity: 1
//         });


        
//     },

//     // medium
//         // "(min-width: 600px) and (max-width: 991px)": function() {

//     "(min-width: 672px) and (max-width: 991px)": function() {
//         console.log('med')
//         // $(".scroll-trigger-about").css('font-size', '5rem');
//                 $(".scroll-trigger-about").css('margin-top', '10rem');

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".pinTrigger",
//                 pin: true,
//                 markers: true,
//                 scrub: 1,
//                 start: "top top",
//                 end: "+=2000",
//             }
//         });
//         tl.to(".ashleyImg", {
//             x: 5,
//             duration: 2,
//             opacity: 1,
//             ease: "slow"
//         }).to(".p1", {
//             y: 20,
//             duration: 4,
//             opacity: 1
//         }).to(".p2", {
//             y: 20,
//             duration: 4,
//             opacity: 1
//         }).to(".p3", {
//             y: 20,
//             duration: 4,
//             opacity: 1
//         }).to(".p4", {
//             y: 20,
//             duration: 4,
//             opacity: 1
//         });
//     },

//     // small
//     "(max-width: 671px)": function() {
//         console.log('sm')
//         // $(".scroll-trigger-about").css('font-size', '4rem');
//           $(".scroll-trigger-about").css('margin-top', '0rem');

//         const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".pinTrigger",
//                 pin: true,
//                 scrub: 1,
//                 start: "top top",
//                 end: "+=100",
//             }
//         });
//         tl.to(".ashleyImg", {
//             x: 80,
//             duration: 2,
//             opacity: 1,
//             ease: "slow"
//         }).to(".p1", {
//             y: 2,
//             duration: 4,
//             opacity: 1
//         }).to(".p2", {
//             y: 2,
//             duration: 4,
//             opacity: 1
//         }).to(".p3", {
//             y: 2,
//             duration: 4,
//             opacity: 1
//         }).to(".p4", {
//             y: 2,
//             duration: 4,
//             opacity: 1
//         });


//     },

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

// });
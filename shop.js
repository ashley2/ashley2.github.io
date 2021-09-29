const tl = gsap.timeline( { 
   scrollTrigger: {
     trigger: ".view",
     // start: "+=133 80%",
     start: "top  center",
          // end: "+=1000 ",
      pin: true,
     scrub: true,
     markers: true,
     // toggleActions: "play reverse play reverse",
   }
   
 });
 
 tl.to('.slide1', { opacity: 1, duration: 0.60, y: -50 })
   .to('.slide1', { opacity: 0, duration: 0.60,  y: -50})
   .to('.slide2', { opacity: 1, duration: 0.60, y: -50})
   .to('.slide2', { opacity: 0, duration: 0.60, y: -50 })
   .to('.slide3', { opacity: 1, duration: 0.60, y: -50})
   .to('.slide3', { opacity: 0, duration: 0.60,  y: -50})
   .to('.slide4', { opacity: 1, duration: 0.60,  y: -50})
   .to('.slide4', { opacity: 0, duration: 0.60, y: -50})


// gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: ".view",
    start: "top top", 
    pin: true, 
    pinSpacing: false 
  });
});


// ScrollTrigger.create({
//   snap: 1 / 4 // snap whole page to the closest section!
// });


// var ipad = gsap.registerPlugin(ScrollTrigger);

// gsap.to(".panel:not(:last-child)", {
//   yPercent: -100, 
//   ease: "none",
//   stagger: 0.5,
//   scrollTrigger: {
//     trigger: ".view",
//     start: "top top",
//     end: "+=300%",
//     scrub: true,
//     pin: true
//   }
// });


// const imageTl = gsap.timeline({ 
//    scrollTrigger: {
//      trigger: ".view",
//      start: "top  center",
//      scrub: true,
//      markers: true,
//      // toggleActions: "play reverse play reverse",
//    }
//    tl.to('.imageSlide1', { opacity: 1, duration: 0.60, y: -50 })
//    .to('.imageSlide1', { opacity: 0, duration: 0.60,  y: -50})
//    .to('.imageSlide2', { opacity: 1, duration: 0.60, y: -50})
//    .to('.imageSlide2', { opacity: 0, duration: 0.60, y: -50 })
//    .to('.slide3', { opacity: 1, duration: 0.60, y: -50})
//    .to('.slide3', { opacity: 0, duration: 0.60,  y: -50})
//    .to('.slide4', { opacity: 1, duration: 0.60,  y: -50})
//    .to('.slide4', { opacity: 0, duration: 0.60, y: -50})
//  });
   
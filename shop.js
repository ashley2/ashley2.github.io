// const tl = gsap.timeline( { 
//    scrollTrigger: {
//      trigger: ".view",
//      // start: "+=133 80%",
//      start: "top  center",
//           end: "+=4000 ",
//       pin: true,
//      scrub: true,
//      // markers: true,
//      // toggleActions: "play reverse play reverse",
//    }
   
//  });
 
//  tl.to('.slide1', { opacity: 1, duration: 0.60, y: -50 })
//    .to('.slide1', { opacity: 0, duration: 0.60,  y: -50})
//    .to('.slide2', { opacity: 1, duration: 0.60, y: -50})
//    .to('.slide2', { opacity: 0, duration: 0.60, y: -50 })
//    .to('.slide3', { opacity: 1, duration: 0.60, y: -50})
//    .to('.slide3', { opacity: 0, duration: 0.60,  y: -50})
//    .to('.slide4', { opacity: 1, duration: 0.60,  y: -50})
//    .to('.slide4', { opacity: 0, duration: 0.60, y: -50})


const ipadTl = gsap.timeline({
scrollTrigger: {
     trigger: ".ipads",
     start: 150,
          end: myLeaveFunc,
      // pin: true,
     scrub: true,
     markers: true,
     // toggleActions: "play reverse play reverse",
   }
   })
ipadTl.to('.ipadLeft', { opacity: 1, duration: 1,  x: -300})
.to('.ipadRight', { opacity: 1, duration: 1,  x: 300}, "<")


ScrollTrigger.create({
  trigger: elem,
  onEnter: myEnterFunc,
  onLeave: myLeaveFunc,
  onEnterBack: myEnterFunc,
  onLeaveBack: myLeaveFunc
});


function myLeaveFunc(){
  console.log("test")
}
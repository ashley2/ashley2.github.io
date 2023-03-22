
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

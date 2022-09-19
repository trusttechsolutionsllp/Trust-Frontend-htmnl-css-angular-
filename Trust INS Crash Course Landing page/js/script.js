const scrollSection = document.querySelector('.parallax-container');
const scrollTitle = document.querySelector('h1');

gsap.to(scrollSection, {
 backgroundPosition: '100% 100%',
  scrollTrigger: {
    trigger: scrollSection,
    scrub: 3
  }
})

gsap.to(scrollTitle, {
  yPercent: 100,
  scrollTrigger: {
    trigger: scrollSection,
    scrub: 2,
    start: '60% center',
    end: '90% center'
  }
})

console.log(scrollTitle);

//--------------------------------------------------











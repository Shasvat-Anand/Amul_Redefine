gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 10, // Smoothness (higher is slower)
  effects: true, // Enable data-speed & data-lag
});

let isShortHeight = window.screen.height < 1050;

ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    gsap.to("#coffeecan", {
      scrollTrigger: {
        trigger: "#section2",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: "85vh",
      x: "18vw",
      width: "32vw",
      rotate: 90,
      ease: "power1.inOut",
      immediatedRender: false,
    });

    gsap.to("#coffeecan", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
      y: "250vh",
      x: "3vw",
      width: "35vw",
      rotate: 35,
      ease: "power1.inOut",
      immediatedRender: false,
    });

    gsap.to("#coffeecan", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: "390vh",

      x: "-2vw",
      width: "35vw",

      rotate: 360,
      ease: "power1.inOut",
      immediatedRender: false,
    });

// trigger the coffeecan to at their own position

    gsap.to("#coffeecan", {
      scrollTrigger: {
        trigger: "#section5",
        start: "top bottom",
        end: "center bottom",
        scrub: true,
      },
      y: isShortHeight ? '492vh' : "473vh",
      x:'1vh',
      width: "18vw",

      rotate:360,
      ease: "power1.inOut",
      immediatedRender: false,
    });


    //content section2 comes out 
    
    gsap.from("#section2 .content-wrapper ", {
      scrollTrigger: {
        trigger: "#section2",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: "140%",
      opacity:0,
      
      ease: "power1.inOut",
      
    });

    //section2 feature wrapper slide

    gsap.from("#section2 .feature-wrapper", {
      scrollTrigger: {
        trigger: "#section2",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      x: "100%",
      opacity:0,
      duration:5,
      
      ease: "power1.inOut",
      
    });

    //section3 heading goes up

     gsap.from("#section3 .heading", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y: "20%",
      opacity:0,
      duration:3,
      
      ease: "power1.inOut",
      
    });


    // section3 content slider

     gsap.from("#section3 .content", {
      scrollTrigger: {
        trigger: "#section3",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      x: "300%",
      opacity:0,
      duration:1,
      
      ease: "power1.inOut",
      
    });
    
   

    // images can visible from opacity 0 to 1

    gsap.from("#section4 img", {
      scrollTrigger: {
        trigger: "#section4",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      width:0,
      opacity:0,
      
      ease: "power1.inOut",
      
    });
  

    // section details
    
    gsap.to("#section6 .content-wrapper", {
      scrollTrigger: {
        trigger: "#section6",
        start: "top bottom",
        end: "center center",
        scrub: true,
      },
      y:'40%',
      duration:2,
       
      
      ease: "power1.inOut",
      
    });


    // split modern harmony

    let split = SplitText.create("#section1 .heading",{
      type:' chars, words, lines',
      mask:'lines'
    })

    gsap.from(split.chars,{
      // yPercent: () => gsap.utils.random(-100,100),
      // rotation: () => gsap.utils.random(-30,30),
      autoAlpha:0,
      duration: 2,
        y:300,
        
        rotation: 0,
        opacity: 0,
        ease:"elastic",
        stagger: 0.15,

    });

    // coffeecan visible
    gsap.from('#coffeecan',{
      opacity:0,
      scale:0,
      duration:1,
      delay:1.8,
      ease:'power1.inOut'
    })

  },
});

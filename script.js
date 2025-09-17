gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 4,            // Smoothness (higher is slower)
  effects: true,          // Enable data-speed & data-lag
});

let isShortHeight = window.screen.height < 1050;

ScrollTrigger.matchMedia({
    "(min-width: 991px)": function(){
        gsap.to('#coffeecan',{
            scrollTrigger :{
                trigger :"#section2",
                start : 'top bottom',
                end:"center center",
                scrub :true,
            },
            y:'85vh',
            x:'18vw',
            width:'32vw',
            rotate:90,
            ease: 'power1.inOut',
            immediatedRender:false
        });

        gsap.to('#coffeecan',{
            scrollTrigger:{
                trigger:"#section3",
                start:'top bottom',
                end:'bottom bottom',
                scrub:true,
            },
            y:'202vh',
            x: '3vw',
            width:'35vw',
            rotate:35,
            ease: 'power1.inOut',
            immediatedRender:false
        });

         gsap.to('#coffeecan',{
            scrollTrigger:{
                trigger:"#section4",
                start:'top bottom',
                end:'center center',
                scrub:true,
            },
            y:'350vh',
             
            x:'-2vw',
            width:'42vw',
             
            rotate:0,
            ease: 'power1.inOut',
            immediatedRender:false
        });

           gsap.to('#coffeecan',{
            scrollTrigger:{
                trigger:"#section5",
                start:'top bottom',
                end:'center center',
                scrub:true,
            },
            y: '444vh' ,
             
            x:'0vw',
            width:'15vw',
             
            rotate:-360,
            ease: 'power1.inOut',
            immediatedRender:false
        });

         
         
         
    }
})
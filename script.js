
const circle= [];
for (i=1; i<=6; i++) {
circle.push(document.querySelector(`.circle-0${i}`))
}

const dash = [];
for(j=1; j<=5; j++){
    dash.push(document.querySelector(`.dash-0${j}`));
};



const imagesArr = ["first", "second", "third", "fourth", "fifth", "sonar"];

const image = imagesArr.map(function(imageClass){
return document.querySelector(`.image-decoration.${imageClass}`)
})

const planeWrap = document.querySelector(".plane-wrap");
const planeItem = document.querySelector(".plane-item");
const embed = document.querySelector(".decoration_embed");
const phone = document.querySelector(".home_hero_item-right");
const leftContent = document.querySelector(".home_hero_item-left");
const embedWrap = document.querySelector('decoration-embed_wrap');
const homeWrap = document.querySelector('.home_hero_wrapper');

embed.style.visibility = "visible";


const tl = gsap.timeline({
    scrollTrigger: {
        trigger:".decoration-wrap",
        start: "top 50%", // When the top of the section reaches 50% of the viewport
        once: true, // Makes the animation smooth and tied to scroll position
        toggleActions: "play none none none", // this tells it to play once
    }
});

const dashLength01 = dash[0].getTotalLength();
const dashLength02 = dash[1].getTotalLength();
const dashLength03 = dash[2].getTotalLength();
const dashLength04 = dash[3].getTotalLength();
const dashLength05 = dash[4].getTotalLength();

window.onload = function (){ // elements animation
setTimeout(() => {
    
        tl.fromTo(image[0],
        {opacity: 0, scale: 0},
        {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}
        )
        
        .to(dash[0],{
            strokeDasharray: dashLength01,
            strokeDashoffset: dashLength01,
            duration:0,
            opacity: 1,
            }, "<")
        .to(dash[0],{
            strokeDashoffset: 0,
            duration: 1,
            ease: "power1.inOut"
        },"<")

        tl.fromTo(
            circle[0],
            { opacity: 0, scale: 0, transformOrigin: "center center" },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
            "<0.3"
          );
          tl.fromTo(
            circle[1],
            { opacity: 0, scale: 0, transformOrigin: "center center" },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
            "<0.3"
          );

    tl.fromTo(image[1],
                {opacity: 0, scale: 0},
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.2"
                )       
                
            .to(dash[1],{
                 strokeDasharray: dashLength02,
                 strokeDashoffset: dashLength02,
                 duration:0,
                 opacity: 1,
                 }, "<")
            .to(dash[1],{
                strokeDashoffset: 0,
                 duration: 1,
                 ease: "power1.inOut"
                },"<")   
            tl.fromTo(
                circle[2],
                { opacity: 0, scale: 0, transformOrigin: "center center" },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                "<0.3"
                );
            tl.fromTo(
                circle[3],
                { opacity: 0, scale: 0, transformOrigin: "center center" },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                "<0.1"
                );
            tl.fromTo(
                circle[4],
                { opacity: 0, scale: 0, transformOrigin: "center center" },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                "<0.2");
        tl.fromTo(image[2],
            {opacity: 0, scale: 0},
            {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.2"
            )    
            .to(dash[2],{
                strokeDasharray: dashLength03,
                strokeDashoffset: dashLength03,
                duration:0,
                opacity: 1,
                }, "<")
            .to(dash[2],{
                strokeDashoffset: 0,
                 duration: 1,
                 ease: "power1.inOut"
                },"<")  
                tl.fromTo(
                    circle[5],
                    { opacity: 0, scale: 0, transformOrigin: "center center" },
                    { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                    "<0.4"
                    );
            tl.fromTo(image[3],
                {opacity: 0, scale: 0},
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.2"
                )  
                .to(dash[3],{
                    strokeDasharray: dashLength04,
                    strokeDashoffset: dashLength04,
                    duration:0,
                    opacity: 1,
                    }, "<0.2")
                .to(dash[3],{
                    strokeDashoffset: 0,
                     duration: 1,
                     ease: "power1.inOut"
                    },"<") 
            tl.fromTo(planeWrap,
                {opacity: 0, scale: 0, transformOrigin: "center center" } ,
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.6"
                )   
            tl.fromTo(planeItem,
                {opacity: 0, scale: 0, transformOrigin: "center center" },
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<"
                )    
                .to(dash[4],{
                    strokeDasharray: dashLength05,
                    strokeDashoffset: dashLength05,
                    duration:0,
                    opacity: 1,
                    }, "<0.2")
                .to(dash[4],{
                    strokeDashoffset: 0,
                     duration: 1,
                     ease: "power1.inOut"
                    },"<") 
            tl.fromTo(image[4],
                {opacity: 0, scale: 0},
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.5"
                )  


            tl.to(image[5], 
                {
                scale: 2,
                duration: 3,
                ease: "power1.inOut",
                repeat: -1,
                repeatDelay: 0.5,
                keyframes: [
                    {opacity: 0.5, duration: 1},
                    {opacity: 0.5, duration: 0.5},
                    {opacity: 0, duration: 1.5}
                ]
                }, "<0.5");

            }, 800);

           
};

const mm = gsap.matchMedia();
let xValue;
let yValue;

 function calculatePhone() {
    const wrapperRect = homeWrap.getBoundingClientRect();
    const phoneRect = phone.getBoundingClientRect();
    xValue = wrapperRect.left + wrapperRect.width / 2 - phoneRect.width/2 - phoneRect.left;
    // console.log(` wrapperWidth is ${wrapperRect.width}, rect left is ${phoneRect.left} and phone offset is ${phone.offsetWidth}`);
    return { xValue, yValue};
    
};
calculatePhone();
window.addEventListener('resize', calculatePhone);


mm.add(
    {
        isDesktop: "(min-width: 992px)",
        isTablet: "(min-width: 767px) and (max-width: 991px)",
        isMobileLandscape: "(min-width:479px) and (max-width: 766px)",
        isMobile: "(max-width: 478px)",
    },
    (context) => {
        const {isDesktop, isTablet, isMobileLandscape, isMobile} = context.conditions;
        if(isDesktop){
            const zs = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section_home-hero",
                    start: "10%top top",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                  }
                });
                
            
                zs.to(phone, {
                    x: () => calculatePhone().xValue,
                    ease: "power2.out",
                    duration: 1.5,
                    scale: 1.4,
                  }); 
                  
                 
                  zs.to(leftContent, {
                    scale: 0.5,
                    x: "-10vw",
                    opacity: 0.5,
                    ease: "none",
                    duration: 1.5,
                  },"<");
                  
                  
                  zs.to(phone, {
                    scale: 7,
                    ease: "power2.out",
                    duration: 2,
                  });
                  zs.to(leftContent, {
                    opacity: 0,
                    ease: "none",
                    duration: 0.3,
                  },"<0.1");
                  zs.to(".hero_cover",{
                    opacity:1,
                    duration: 0.3,
                  },"<0.5");
                  zs.to(".scroll-wrap", {
                    opacity: 1,
                    duration: 0.3,
                    ease:"power1.inOut",
                  }, "<0.2");
               
                //   zs.to(".hero_cover", {
                //     opacity: 0,
                //     ease: "power1.out",
                //     duration: 0.1,
                //     scrollTrigger: {
                //       trigger: ".section_home-about", 
                //       start: "top top",      // When top of next section hits top of viewport
                //       scrub: true,
                //       toggleActions: "play reverse play reverse",
                //       invalidateOnRefresh: true,
              
                //   },"<");
                  zs.to([embed, ".decoration-wrap"], {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                  }, "-=1")
                  zs.to(".scroll-wrap", {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power1.inOut",
                  },"<1.5")
                  zs.to('.nav_component', {
                    backgroundColor: "#e9f0e8",
                  },"<");
               
        }
        else{
            const zs = gsap.timeline({
                scrollTrigger: {
                    trigger: ".home_hero_item-right",
                    start:"center center",
                    scrub: true,
                    pin: true,
                    end: "+=200%",
                    invalidateOnRefresh: true,
                  }
                });
                
            
                zs.to(phone, {
                    x: () => calculatePhone().xValue,
                    ease: "power2.out",
                    duration: 1.5,
                    scale: 1.4,
                  },"<"); 
                  
                 
                  zs.to(leftContent, {
                    scale: 0.5,
                    x: "-10vw",
                    opacity: 0.5,
                    ease: "none",
                    duration: 1.5,
                  },"<");
                  
                  
                  zs.to(phone, {
                    scale: 5,
                    ease: "power2.out",
                    duration: 2,
                  });
                  zs.to(leftContent, {
                    opacity: 0,
                    ease: "none",
                    duration: 0.3,
                  },"<0.1");
                  zs.to(".hero_cover",{
                    opacity:1,
                    duration: 0.3,
                  },"<0.5");
                  zs.to(".scroll-wrap", {
                    opacity: 1,
                    duration: 0.3,
                    ease:"power1.inOut",
                  }, "<0.2");
               
                  zs.to(".hero_cover", {
                    opacity: 0,
                    ease: "power1.out",
                    duration: 0.1,
                    scrollTrigger: {
                      trigger: ".section_home-about", // Replace with your actual class or ID
                      start: "top top",      // When top of next section hits center of viewport
                      scrub: true,
                    }
                  },"<");
                  zs.to([embed, ".decoration-wrap"], {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                  }, "-=1")
                  zs.to(".scroll-wrap", {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power1.inOut",
                  },"<1.5")
                  zs.to('.nav_component', {
                    backgroundColor: "#e9f0e8",
                  },"<");
               
        }
    }
);
// window.addEventListener("resize", () => {
//     ScrollTrigger.refresh();
//   });

// document.addEventListener('visibilitychange', () => {
//     if (document.visibilityState === 'visible') {
//       ScrollTrigger.refresh();
//     }
//   });


    
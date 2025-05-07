
const circle= []; // assigning circles classes to an array
for (i=1; i<=6; i++) {
circle.push(document.querySelector(`.circle-0${i}`))
}

const dash = []; // assigning dashes classes to an array
for(j=1; j<=5; j++){
    dash.push(document.querySelector(`.dash-0${j}`));
};

const imagesArr = ["first", "second", "third", "fourth", "fifth", "sonar"]; // assigning images classes to an array with map array method
const image = imagesArr.map(function(imageClass){
return document.querySelector(`.image-decoration.${imageClass}`)
})

const dashLength = []; // loop for assigning dash length to the new array
for (k=0; k<dash.length; k++){
   let dashValue = dash[k].getTotalLength();
   dashLength.push(dashValue);
    }
    // console.log(dashLength[2]);

const line = []; //lines declaration
    for (l=1; l<=6; l++){
    line.push(document.querySelector(`.line-0${l}`));
    }


// declaration for hero section
const planeWrap = document.querySelector(".plane-wrap");
const planeItem = document.querySelector(".plane-item");
const embed = document.querySelector(".decoration_embed");
const phone = document.querySelector(".home_hero_item-right");
const leftContent = document.querySelector(".home_hero_item-left");
const embedWrap = document.querySelector('.decoration-embed_wrap');
const homeWrap = document.querySelector('.home_hero_wrapper');
const sectionHero = document.querySelector(".section_home-hero");


//declaration for faq section
const faqItem = [];
for (f=1; f<=5; f++) {
  faqItem.push(document.querySelector(`.accordion_item.is-${f}`))
}


embed.style.visibility = "visible";
const tl = gsap.timeline({ //declaration of tl gsap animation timeline
    scrollTrigger: {
        trigger:".decoration-wrap",
        start: "top 50%", // When the top of the section reaches 50% of the viewport
        once: true, // Makes the animation smooth and tied to scroll position
        toggleActions: "play none none none", // this tells it to play once
    }
});

window.onload = function (){ // elements animation
setTimeout(() => {
    
        tl.fromTo(image[0],
        {opacity: 0, scale: 0},
        {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}
        )
        
        .to(dash[0],{
            strokeDasharray: dashLength[0],
            strokeDashoffset: dashLength[0],
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
                 strokeDasharray: dashLength[1],
                 strokeDashoffset: dashLength[1],
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
                strokeDasharray: dashLength[2],
                strokeDashoffset: dashLength[2],
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
                    strokeDasharray: dashLength[3],
                    strokeDashoffset: dashLength[3],
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
                    strokeDasharray: dashLength[4],
                    strokeDashoffset: dashLength[4],
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
 function calculatePhone() { //calculating center pixles of the phone and phone wrap
    const wrapperRect = homeWrap.getBoundingClientRect(); // calculating sizes of the phone wrapper
    const phoneRect = phone.getBoundingClientRect(); // calculating phone sizes
    xValue = wrapperRect.left + wrapperRect.width / 2 - phoneRect.width/2 - phoneRect.left;
    // console.log(` wrapperWidth is ${wrapperRect.width}, rect left is ${phoneRect.left} and phone offset is ${phone.offsetWidth}`);
    return {xValue};
    
};
calculatePhone();
window.addEventListener('resize', calculatePhone);

function logSectionSize(){ //function to log resize of the hero section just for info
    
    const sectionRect = sectionHero.getBoundingClientRect();
    let sectionHeroSize = sectionRect.height;
    console.log(`section size is ${sectionHeroSize}`);
};
window.addEventListener('resize', logSectionSize); //event listener for logSectionSize on resize of the screen

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
                  zs.fromTo(".hero_cover",{
                    visibility: "visible",
                    opacity: 0,
                  },{
                    opacity:1,
                    duration: 0.3,
                  },"<0.5");
                  zs.to(".scroll-wrap", {
                    opacity: 1,
                    duration: 0.3,
                    ease:"power1.inOut",
                  }, "<0.2");
               
                  
                  zs.to([embed, ".decoration-wrap"], {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                  }, "-=1")
                  zs.to(".scroll-wrap", {
                    opacity: 0,
                    duration: 0.4,
                    ease: "power1.inOut",
                  },"<2")
                  zs.to('.nav_component', {
                    backgroundColor: "#e9f0e8",
                  },"<");
               
                  const hc = gsap.timeline( {
                    scrollTrigger: {
                      trigger: ".section_home-about-wrap", 
                      start: "top top",      // When top of next section hits top of viewport
                      scrub: true,
                      invalidateOnRefresh: true,
                      end: "center top",
                    }
                  });
                  hc.to(".hero_cover", {
                    opacity: 0,
                    ease: "power1.out",
                  })
        }
        else{
            const zs = gsap.timeline({
                scrollTrigger: {
                    trigger: ".home_hero_item-right",
                    start:"center center",
                    scrub: true,
                    pin: true,
                    end: "+=300%",
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
                  zs.fromTo(".hero_cover",{
                    visibility: "visible",
                    opacity: 0,
                  },{
                    opacity:1,
                    duration: 0.3,
                  },"<0.5");
                  zs.to(".scroll-wrap", {
                    opacity: 1,
                    duration: 5,
                    ease:"power1.inOut",
                  }, "<0.2");
                  zs.to([embed, ".decoration-wrap"], {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power1.out",
                  }, "-=1")
                  zs.to(".scroll-wrap", {
                    opacity: 0,
                    duration: 4,
                    ease: "power1.inOut",
                  },">")
                  zs.to('.nav_component', {
                    backgroundColor: "#e9f0e8",
                  },"<");


                  const hc = gsap.timeline( {
                    scrollTrigger: {
                      trigger: ".section_home-about-wrap", 
                      start: "top top",      // When top of next section hits top of viewport
                      scrub: true,
                      invalidateOnRefresh: true,
                      end: "center top",
                    }
                  });
                  hc.to(".hero_cover", {
                    opacity: 0,
                    ease: "power1.out",
                  })
               
        }
    }
);  

//logic for faq section
let previousImage = document.querySelector(".accordion-image.is-1");
let currentImage = null;
// const firstImage = document.querySelector(".accordion-image.is-1");
const buttons = document.querySelectorAll(".accordion-button");

//function for faq
function faqClick (){
  console.log("function works");
  const fq = gsap.timeline();
   fq.set(currentImage, {
    x: "+120%",
    zIndex: 4,
   })
   fq.to(previousImage, {
    x: "-120%",
    scaleX: 1.2,
    duration: 1.2,
    ease: "power3.inOut",
   });
   fq.to(currentImage, {
    x: "0%",
    duration: 1.2,
    ease: "power3.inOut",
   },"<")
  //  fq.fromTo(previousImage, {
  //   filter: "brightness(1)",
  //  },{
  //   filter: "brightness(0.5)",
  //   ease: "power2.inOut",
  //  },"-=1")
   
};

//buttons click logic
buttons.forEach((btn) => {
btn.addEventListener('click', () => {
  const buttonAttribute = btn.getAttribute("data-attribute");
  currentImage = document.querySelector(`.accordion-image.is-${buttonAttribute}`);
if (currentImage !== previousImage) {
faqClick ();
previousImage = currentImage;
}




}
)

})

// window.addEventListener('DOMContentLoaded', () => { //bad abimation for about section
//  //declaration for about section embed elements
// const planeAbout = document.querySelector(".plane-about");
// const planeWrapAbout = document.querySelector(".plane-wrap-about");
// const carAbout = document.querySelectorAll(".car-about");
// const bikeAbout = document.querySelectorAll(".bike-about");
// const shipAbout = document.querySelectorAll(".ship-about");
// const travelerAbout = document.querySelectorAll(".traveler-about");
// console.log(line[1]);
// const ll = gsap.timeline({
//     scrollTrigger: {
//        trigger: ".section_home-about",
//         start: "60% top",
//         once: true,
//     }
// });

// ll.to(line[0], {
//   opacity: 1,
//   duration: 0.4,
//   ease: "power2.Out",
// });
// ll.to(planeWrapAbout, {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// }, "-=0.2"); // Starts a little earlier, overlapping with previous animation

// ll.to(planeAbout, {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// }, "<");

// // Add stagger effect for lines
// ll.to(line[1], {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// });
// ll.to(carAbout, {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// }, "-=0.2"); // Staggered overlap

// // Repeat for remaining items with stagger
// ll.to(line[2], {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// });
// ll.to(bikeAbout, {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// }, "-=0.2");

// ll.to(line[3], {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// });
// ll.to(shipAbout, {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// }, "-=0.2");

// ll.to(line[4], {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// });
// ll.to(travelerAbout, {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
// }, "-=0.2");

// // Finally, animate the last line with slight delay for a smooth ending
// ll.to(line[5], {
//   opacity: 1,
//   duration: 0.3,
//   ease: "power2.Out",
//   })
// });
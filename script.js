


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

embed.style.visibility = "visible";


const tl = gsap.timeline({
    scrollTrigger: {
        trigger:".decoration-wrap",
        start: "top 80%", // When the top of the section reaches 80% of the viewport
        once: true, // Makes the animation smooth and tied to scroll position
        toggleActions: "play none none none", // this tells it to play once
    }
});

const dashLength01 = dash[0].getTotalLength();
const dashLength02 = dash[1].getTotalLength();
const dashLength03 = dash[2].getTotalLength();
const dashLength04 = dash[3].getTotalLength();
const dashLength05 = dash[4].getTotalLength();

window.onload = function (){
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
        x: () => window.innerWidth / 2 - phone.getBoundingClientRect().left - phone.offsetWidth / 2,
        y: () => window.innerHeight / 2 - phone.getBoundingClientRect().top - phone.offsetHeight / 2,
        ease: "power2.out",
        duration: 1.5,
        scale: 1.4,
      }); // start at beginning
      
      // Simultaneously shrink and move the left content
      zs.to(leftContent, {
        scale: 0.5,
        x: "-10vw",
        opacity: 0.5,
        ease: "none",
        duration: 1.5,
      },"<");
      
      // Keyframe 2: Zoom in fully
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
        opacity:0.8,
        duration: 0.3
      },"<0.8")
    //   zs.to(".hero_cover",{
    //     opacity:0,
    //     duration: 0.3
    //   },">1.5");
    
      gsap.to(".hero_cover", {
        opacity: 0,
        ease: "power1.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: ".section_home-about", // Replace with your actual class or ID
          start: "top top",      // When top of next section hits center of viewport
          scrub: true,
        }
      });




    
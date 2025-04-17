
const circle= [];
for (i=1; i<=6; i++) {
circle.push(document.querySelector(`.circle-0${i}`))
}

const dash = [];
for(j=1; j<=5; j++){
    dash.push(document.querySelector(`.dash-0${j}`));
};


const imagesArr = ["first", "second", "third", "fourth", "fifth"];
const image = imagesArr.map(function(imageClass){
return document.querySelector(`.image-decoration.${imageClass}`)
})

const planeWrap = document.querySelector(".plane-wrap");
const planeItem = document.querySelector(".plane-item");
const embed = document.querySelector(".decoration_embed");

embed.style.visibility = "visible";

const tl = gsap.timeline();
const dashLength01 = dash[0].getTotalLength();
const dashLength02 = dash[1].getTotalLength();
const dashLength03 = dash[2].getTotalLength();
const dashLength04 = dash[3].getTotalLength();


window.onload = function (){

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
            duration: 3,
            ease: "power1.inOut"
        },"<")

        tl.fromTo(
            circle[0],
            { opacity: 0, scale: 0, transformOrigin: "center center" },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
            "<1.1"
          );
          tl.fromTo(
            circle[1],
            { opacity: 0, scale: 0, transformOrigin: "center center" },
            { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
            "<0.6"
          );

    tl.fromTo(image[1],
                {opacity: 0, scale: 0},
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.6"
                )       
                
            .to(dash[1],{
                 strokeDasharray: dashLength02,
                 strokeDashoffset: dashLength02,
                 duration:0,
                 opacity: 1,
                 }, "<")
            .to(dash[1],{
                strokeDashoffset: 0,
                 duration: 3,
                 ease: "power1.inOut"
                },"<")   
            tl.fromTo(
                circle[2],
                { opacity: 0, scale: 0, transformOrigin: "center center" },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                "<0.6"
                );
            tl.fromTo(
                circle[3],
                { opacity: 0, scale: 0, transformOrigin: "center center" },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                "<0.6"
                );
            tl.fromTo(
                circle[4],
                { opacity: 0, scale: 0, transformOrigin: "center center" },
                { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                "<0.6"
                );
        tl.fromTo(image[2],
            {opacity: 0, scale: 0},
            {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.6"
            )    
            .to(dash[2],{
                strokeDasharray: dashLength03,
                strokeDashoffset: dashLength03,
                duration:0,
                opacity: 1,
                }, "<")
            .to(dash[2],{
                strokeDashoffset: 0,
                 duration: 3,
                 ease: "power1.inOut"
                },"<")  
                tl.fromTo(
                    circle[5],
                    { opacity: 0, scale: 0, transformOrigin: "center center" },
                    { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
                    "<0.6"
                    );
            tl.fromTo(image[3],
                {opacity: 0, scale: 0},
                {opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)"}, "<0.6"
                )  
                .fromTo(dash[3],
                    {drawSVG: "0% 0%"}, {
                        drawSVG: "0% 100%", duration: 1, ease: "power1.inOut"
                    });
                    
};   

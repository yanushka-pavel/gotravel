
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
            strokeDashoffset: dashLength01/2 ,
            duration: 2,
            ease: "power1.inOut"
        },"<")

};
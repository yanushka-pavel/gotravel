
const circles = [];
for (i=1; i<=6; i++) {
circles.push(document.querySelector(`.circle-0${i}`))
}

const dashes = [];
for(j=1; j<=5; j++){
    dashes.push(document.querySelector(`.dash-0${j}`));
};


const imagesArr = ["first", "second", "third", "fourth", "fifth"];
const images = imagesArr.map(function(imageClass){
return document.querySelector(`.image-decoration.${imageClass}`)
})

images[0].classList.add("test-class");



console.log("test branch");
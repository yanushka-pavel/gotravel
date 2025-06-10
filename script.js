const page = document.body.dataset.page  //assingning to variable page current page data-attribute


//code for the book page
if (page === "book"){
  // console.log("test")
  //logic for nav menu
  const menuButton = document.querySelector(".menu-button")
  const menuButtonClose = document.querySelector(".close-wrapper")
  const closeLinksWrap = document.querySelector(".close-nav-links");
  const closeLinks = closeLinksWrap.querySelectorAll(".heading");
  const clnav = gsap.timeline({defaults: {duration: 1}});
  function closeNavOpen (){ // logic for opening nav menu
      clnav.fromTo(closeLinks, {
        opacity: 0,
        x:50,
        ease: "power1.inOut",
      },
      {
        opacity: 1,
        x: 0,
        ease: "power1.inOut",
        stagger: 0.1
      }
      )
      }
  function closeNavClose () { // logic for closing nav menu
    clnav.fromTo(closeLinks, {
      opacity: 1,
      x:0,
      ease: "power1.inOut",
    },
    {
      opacity: 0,
      x: 100,
      ease: "power1.inOut",
      stagger: 0.1,
      duration: 0.5,
    }
    )
  }
  
  menuButton.addEventListener('click', closeNavOpen); //menu button click open
  menuButtonClose.addEventListener('click', closeNavClose); // menu button click close
  closeLinks.forEach(link => {
  link.addEventListener('click',closeNavClose);
  });
  

// Animate the progress bar fill based on scroll
const circles = document.querySelectorAll(".progress-circle");
function stepsCircles(index) { //circles filling animation
  gsap.to(circles[index], {
    fill: "#4D6F4A",
    duration: 0.3
  });
};

const tabWrap =document.querySelectorAll(".tab-wrap"); // selecting each tab 

function tabChange(prevIndex, nextIndex){ //function for tab change
tabWrap[prevIndex].classList.remove("is-active");
tabWrap[nextIndex].classList.add("is-active");
gsap.fromTo(tabWrap[nextIndex],  {
  y:20,
  opacity:0,
},
{
  y:0,
  opacity:1,
  ease: "power2.inOut",
})
};//end of the function


let reachedHalf = false;
let reachedEnd = false;

const progressTL = gsap.timeline({ // declaration of progress timeline for tabs
  scrollTrigger: {
    trigger: ".book-steps_tracker",
    start: "top top",
    end: "bottom bottom+=40%",
    scrub: true,
    onUpdate: (self) => { // updating position of the scroll after each scroll
      const progress = self.progress; // .progress - special property to track actual

      if (progress >= 0.5 && !reachedHalf) {
        reachedHalf = true;
        stepsCircles(1); // center
        tabChange(0,1);
      }

      if (progress >= 1 && !reachedEnd) {
        reachedEnd = true;
        stepsCircles(2); // bottom
        tabChange(1,2);
      }

      // Reset if scrolling up
      if (progress < 0.5 && reachedHalf) {
        reachedHalf = false;
        gsap.to(circles[1], { fill: "#D3E1D1", duration: 0.3 });
        tabChange(1,0);
      }
      if (progress < 1 && reachedEnd) {
        reachedEnd = false;
        gsap.to(circles[2], { fill: "#D3E1D1", duration: 0.3 });
        tabChange(2,1);
      }
    }
  }
});

progressTL.to(".progress-fill", { //line animation
  height: "100%",
  ease: "none"
});

gsap.to('.nav_component', {
backgroundColor: "#e9f0e8",
});


//code for types of books section
const bookTypeOpen = document.querySelectorAll(".button.book-type");
const bookTypeTimeline = gsap.timeline({defaults: {duration:0.5}}); //gsap timeline for book types animation
// console.log(bookTypeOpen);
bookTypeOpen.forEach((button, index) => { //trackicng what button is clicked
  button.addEventListener("click", ()=>{
const buttonList = document.querySelector(`.type_item.is-${index+1} .back-content-list`); //selecting list with text for each book type connected to the button
const buttonListText = buttonList.querySelectorAll(".body-text-l")
// console.log(buttonList);
bookTypeTimeline.fromTo(buttonListText, { //stagger animation for list content inside each book type card
  y:10,
  opacity: 0,
},{
  y:0,
  opacity: 1,
  ease: "power1.inOut",
  stagger: 0.1,
}
)
  });
});





};//end of the book page code
//////////////////////////////////


//code for the home page
if (page === "home"){
  // console.log("Home page logged")

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
  
  const dashLength = []; // loop for assigning dash length fpr new array
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
          start: "top 50%", // when the top of the section reaches 50% of the viewport
          once: true, // makes the animation smooth and tied to scroll position
          toggleActions: "play none none none", // this tells it to play once
      }
  });
  
  window.onload = function (){ // hero route animation
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
      // console.log(`section size is ${sectionHeroSize}`);
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
  let nextImage = null;
  let accordionItemBottom = null;
  let isAnimating = false;
  const faqImages = document.querySelectorAll(".accordion-image");
  const buttons = document.querySelectorAll(".accordion-button");
  
  
  faqImages.forEach(image => {
    image.style.visibility = 'hidden';
  })
  
  previousImage.style.visibility = 'visible';
  // console.log("Initial previous image is ",previousImage);
  // console.log("Initial next image is",nextImage);
  const fq = gsap.timeline( {defaults: {duration:1, ease: "power3.inOut"}, //main fq timeline declaration
  // onComplete: () => {
  //   isAnimating = false;
  // }
  },
  );
  
  const fqc = gsap.timeline({defaults: {duration: 0.6, ease: "power2.inOut"},
    // onComplete: () => {
    //   isAnimating = false;
    // }
  },); // fqc timeline for faq circle animation
  
  
  //function for paragraph reveal
  function paragraphReveal (timeline, useDelay) { //function for paragraph reveal and class adding
    let delayAnimation = null;
    if (useDelay) { //checking usedelay attribute to assign a value to variable
      delayAnimation = "<";
    }
    // console.log("The paragraph revealed")
    timeline.to(accordionItemBottom, {
      height: accordionItemBottom.scrollHeight + "px", //scrollHeight counts the pixel height of the element
      }, delayAnimation
    );
      accordionItemBottom.classList.add("opened");
  }
  
  //function for faq close
  function faqClickClose (timeline) { //faqclose animatio
  // console.log("The paragraph is closed");
    timeline.to(accordionItemBottom, {
      height: "0px",
    });
    accordionItemBottom.classList.remove("opened");
  }; 
  
  //circle line animation
  const faqCircleElements = document.querySelectorAll(".faq-circle"); // dynamically counting circles length and hiding it
  faqCircleElements.forEach(circle => {
  const length = circle.getTotalLength();
  circle.style.strokeDasharray = length;
  circle.style.strokeDashoffset = length;
  circle.dataset.length = length;
  }
  );
  
  
  //gsap minus animation for circles and lines
  function faqCircleOpen (timeline, line, circle) { // faqcircle animation
  // console.log("Open circle animation");
  const length = circle.dataset.length;
  timeline.to(line, {
    rotate: 90,
    transformOrigin: "center",
  });
  timeline.to(circle, {
  strokeDashoffset: 0,
  }, "<")
  timeline.to(circle, {
   opacity: 0,
   duration: 0.4,
    }); 
  };
  
  //gsap plus animation for circles and lines
  function faqCircleClose (timeline, line, circle){
    // console.log("Close circle animation");
  const length = circle.dataset.length;
  timeline.set(circle,
  {
    opacity: 1,
  })
  timeline.to(line, {
    rotate: 0,
    transformOrigin: "center",
  },"<");
  timeline.to(circle,{
    strokeDashoffset: length,
  ease: "power3.inOut",
  }, "<");
  };
  //gsap image animation brightness + clippath
  function faqImageAnimation (){ 
    // console.log("Image is animatng");
    gsap.set(nextImage, {clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}) //images to normal state;
    fq.fromTo(previousImage, 
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 0%, 0% 0%, -1% 100%, 0% 100%)", 
    });
    fq.fromTo(previousImage,
      {filter: "brightness(100%)"},
      {filter: "brightness(20%)", delay: 0.1}, "<",
    )
  }
  
  //main logic for faq animation
  function faqClick (faqLine, faqCircle){ //faqclick animation
    if (isAnimating) return; //only one animation at a time
    isAnimating = true;
  
    // console.log("function works");
      previousImage.style.visibility = 'visible';
      nextImage.style.visibility = 'visible';
      previousImage.style.zIndex = '2';
      nextImage.style.zIndex = '1';
  
    const master = gsap.timeline({
      onComplete: () => {
        isAnimating = false;
      }
    })
  fq.clear();
  fqc.clear();
   
    if (nextImage !== previousImage && !accordionItemBottom.classList.contains("opened")) {
      master.add('start')
      .add(fq, 'start')
      .add(fqc, 'start');
  
      faqCircleOpen (fqc, faqLine, faqCircle);
      faqImageAnimation ();
      // console.log("basic clippath animation");
  
    previousImage = nextImage;
    gsap.set(previousImage, {
      filter: "brightness(100%)"
    })
    paragraphReveal (fq, true); //true for delayAnimation = "<"
      }
  
      else if (accordionItemBottom.classList.contains("opened")) {
        master.add('start')
        .add(fq, 'start')
        .add(fqc, 'start');
    faqClickClose (fq);
    faqCircleClose (fqc, faqLine, faqCircle);
      }
  
      else if (nextImage == previousImage && !accordionItemBottom.classList.contains("opened")) {
        master.add('start')
        .add(fq, 'start')
        .add(fqc, 'start');
        faqCircleOpen (fqc, faqLine, faqCircle);
        // console.log("nextimage = previousimage")
          paragraphReveal (fq, false); //false to not add any timeline delay (because there are no elements before)
         
      }
  
    };
  
  //buttons click logic
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const buttonAttribute = btn.getAttribute("data-attribute");
      nextImage = document.querySelector(`.accordion-image.is-${buttonAttribute}`);
      accordionItemBottom = document.querySelector(`.accordion_item.is-${buttonAttribute} .accordion_bottom`)
      const faqLine = btn.querySelector(".faq-line-plus");
      const faqCircle = btn.querySelector(".faq-circle");
    
  
    
      faqClick (faqLine, faqCircle);
  }
  )
  
  })
  
  
  
  
  
  //logic for nav menu
  const menuButton = document.querySelector(".menu-button")
  const menuButtonClose = document.querySelector(".close-wrapper")
  const closeLinksWrap = document.querySelector(".close-nav-links");
  const closeLinks = closeLinksWrap.querySelectorAll(".heading");
  const clnav = gsap.timeline({defaults: {duration: 1}});
  function closeNavOpen (){
      clnav.fromTo(closeLinks, {
        opacity: 0,
        x:50,
        ease: "power1.inOut",
      },
      {
        opacity: 1,
        x: 0,
        ease: "power1.inOut",
        stagger: 0.1
      }
      )
      }
  function closeNavClose () {
    clnav.fromTo(closeLinks, {
      opacity: 1,
      x:0,
      ease: "power1.inOut",
    },
    {
      opacity: 0,
      x: 100,
      ease: "power1.inOut",
      stagger: 0.1,
      duration: 0.5,
    }
    )
  }
  
  menuButton.addEventListener('click', closeNavOpen); //menu button click open
  menuButtonClose.addEventListener('click', closeNavClose); // menu button click close
  closeLinks.forEach(link => {
  link.addEventListener('click',closeNavClose);
  });
  



  //code for popup
  const popupContainer = document.querySelector(".popup_container");//container with content
  const closeButton = document.querySelector(".close_button-wrap");//button
  const closeInfo = document.querySelector(".close_info");//button info "close"
  const sectionPopup = document.querySelector(".section_popup");
  const popupTrigger = document.querySelectorAll('[data-attribute="popup"]')
  
  //for clarification popup
  const clarification = document.querySelector(".clarification_wrap") // clarifiaction 
  const clarificationTimeline = gsap.timeline();//gsap timeline
  const clarLinkBack = document.querySelector(".clarification_link.is-back"); //back to form button
  const clarLinkClose = document.querySelector(".clarification_link.is-close"); // still close the form

  //popup gsap timelines
  const popupGsapTL = gsap.timeline({defaults: {duration: 0.9, ease: "power2.inOut"}});
  const popupTextElements = popupContainer.querySelectorAll(`h2, .body-text-l, .body-text-m, .button-wrapper.form`); //selecting all text elements inside container
  const formInputs = popupContainer.querySelectorAll(".form-input");
  let mySplitText =new SplitText(popupTextElements, {type: "lines", aria: "hidden"});//gsap split text declaration with clue parameters
  let lines = mySplitText.lines; // assigning all lines to 1 variable
  //popup trigger
  popupTrigger.forEach(trigger => {
trigger.addEventListener("click", popupMain)
  });

//popup main code
let isInside = true; // to track if mouse is inside the container
let animating = false; //flag to check if the main animation in progress
let clarOpen = false; // flag for additional popup play
let animationLocked = false; //flag to lock mouse animtion while additional popup is opened


  function popupMain (){//main popup function
    popupGsapOpen();
    animationLocked = false;
    closeButton.style.visibility = "hidden";
    sectionPopup.style.visibility = "visible";
    const mouse = { x: 0, y: 0 }; //tracks mouse position
    const buttonPos = { x: 0, y: 0 };  // Tracks closeButton
    const infoPos = { x: 0, y: 0 };    // Tracks closeInfo
    
    
    popupContainer.addEventListener("mousemove", () => { // hide close button when inside container
      isInside = true;
      closeButton.style.visibility = "hidden";
      closeInfo.style.visibility = "hidden";
    });
    
    // popupContainer.addEventListener("mouseleave", () => { //tracking when the mouse leaves container
    //   isInside = false;
    // });
    document.addEventListener("mousemove", (e) => {
      const rect = popupContainer.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
    
      if (inside !== isInside) {
        isInside = inside;
      }
    });

    //mousemove tracker
    sectionPopup.addEventListener("mousemove", (e) => {
      if(animationLocked) return;
      mouse.x = e.clientX; //current mouse x position
      mouse.y = e.clientY; //current mouse y position
    
      if (!isInside) { //when cursor is outside the container
        
        closeButton.style.visibility = "visible";
        closeInfo.style.visibility = "visible";
        document.body.style.cursor = "pointer";
  
        if (!animating) {
          animating = true;
          animate();
        }
    
      } else {
        closeButton.style.visibility = "hidden";
        document.body.style.cursor = "default"; 
      }
    });

    //mouse click tracker
    sectionPopup.addEventListener("click", (e)=> {
      if (!isInside && !clarOpen) {
      
         animationLocked = true;
         clarPopOpen();
         closeButton.style.visibility = "hidden";
         closeInfo.style.visibility = "hidden";
       
      }
    })
  
    //return to form logic
    clarLinkBack.addEventListener("click", (e)=>{
      if (!clarOpen) return;
      e.stopPropagation(); //tracks only clicks on LinkBack not considering sectionPopup
      animationLocked = false;
      clarBackToForm();
    
      
      // resume animation if mouse is outside container
      if (!isInside && !animating) {
        animating = true;
        animate()
        closeButton.style.visibility = "visible";
        closeInfo.style.visibility = "visible";
      }
       
  
     })


    
  
  //functions for popup
  function clarPopOpen () { // animation for click outside the container

    //need find a way to block it while its closed
    clarOpen = true;
    clarification.style.visibility = "visible";
    clarificationTimeline.fromTo(clarification,{
    scale: 0,
    opacity: 0,
    },{
      scale:1,
      opacity:1,
      ease: "bounce.Out",
  })
  console.log("1")
  }

  function clarBackToForm (){
  console.log("problem is here")
  clarOpen = false;
  clarificationTimeline.fromTo(clarification,{
  scale: 1,
  opacity: 1,
  },{
    scale:0.2,
    duration: 0.5,
    opacity:0,
    ease: "power1.inOut",
})
  
  
  }
  function animate() { // animation for cursor
      const speed1 = 0.3;  // Button delay
      const speed2 = 0.1; // Info delay (slower)
    
      buttonPos.x += (mouse.x - buttonPos.x) * speed1;
      buttonPos.y += (mouse.y - buttonPos.y) * speed1;
    
      infoPos.x += (mouse.x - infoPos.x) * speed2;
      infoPos.y += (mouse.y - infoPos.y) * speed2;
    
      closeButton.style.left = `${buttonPos.x}px`;
      closeButton.style.top = `${buttonPos.y}px`;
    
      closeInfo.style.left = `${infoPos.x + 20}px`;
      closeInfo.style.top = `${infoPos.y-20}px`;
    
      // Keep animating only while visible
      if (!isInside) {
        requestAnimationFrame(animate);
      } else {
        animating = false;
      }
    }
  }
//close form anyway logic
    clarLinkClose.addEventListener("click", (e)=> {//resetting all the properties to 0 and hidden
      e.stopPropagation();
      console.log("u clicked link close");    
      deactivatePopup();    
    
    })

  function popupGsapOpen (){ //animation for container and its content after the popup is opened
    //container animation
    gsap.set([lines, formInputs, popupContainer], {
      clearProps: "all" // removes all inline transform/opacity styles
    }, 0);
    popupGsapTL.fromTo(sectionPopup, {
      backgroundColor: "rgba(0, 0, 0, 0)"  
    },{
      backgroundColor: "rgba(0, 0, 0, 0.6)"  
    })
    popupGsapTL.fromTo(popupContainer,{
      x:-700,
    },
    {
      x:0,
    }, "<")

 
    popupTextElements[0].style.overflow = "hidden";
    
    popupGsapTL.from(lines, {//text animation
      y: "120%",
      x: "-10%",
      opacity: 0,
      duration: 1.2,
      stagger: {
        each: 0.02,
        from: "start"
      },
      ease: "power4.out",
    }, "<0.5");

    popupGsapTL.from(formInputs, {//form inputs animation
      y: "30%",
      x: "-10%",
      opacity: 0,

    }, "-=1.5")

  }

  function popupGsapClose (){//gsap animation OUT for popup container and its content

    popupGsapTL.fromTo(popupContainer,{
      x:0,
    },
    {
      x:-700,
    })

    popupGsapTL.to(lines, {//text animation
      y: "30%",
      x: "-10%",
      opacity: 0,
      duration: 1.2,
      stagger: {
        each: 0.02,
        from: "start"
      },
      ease: "power4.out",
    }, "<");


    //code for closing clar menu
    clarOpen = false;
    clarificationTimeline.fromTo(clarification,{
    scale: 1,
    opacity: 1,
    },{
      scale:0.2,
      duration: 0.5,
      opacity:0,
      ease: "power1.inOut",
  })
    //code for closing clar menu



    popupGsapTL.to(formInputs, {//form inputs animation
      y: "0%",
      x: "-10%",
      opacity: 0,
      onComplete: () =>{
        sectionPopup.style.visibility = "hidden";
        clarification.style.visibility = "hidden";
        closeButton.style.visibility = "hidden";
        closeInfo.style.visibility = "hidden";
        document.body.style.cursor = "default";
      }

    }, "-=1.5")

popupGsapTL.fromTo(sectionPopup, {
      backgroundColor: "rgba(0, 0, 0, 0.6)"  
    },{
      backgroundColor: "rgba(0, 0, 0, 0)",
      duration: 1,
    },"<")
    
  }

  function deactivatePopup() { // disactivating all the popup logic
    popupGsapClose();
   
  
    // Reset flags
    animating = false;
    clarOpen = false;
    animationLocked = true;

  }

  //add smooth bg animation, span stagger for elements inside form container. animation for closing. Animtion for steps section.




}; //end of the home page code
//////////////////////////////////


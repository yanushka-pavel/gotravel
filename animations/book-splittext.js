export function animateSplitText(target){
    const splitTextTracker = document.querySelector('.section_book-about');
    console.log("splittext animation works 2");
const splitText = new SplitType(target, {
    types: 'chars, words',
    tagName: 'span',
    autoSplit: true,
})
gsap.to(splitText.chars,{
    color:"#40583d",
    stagger: 0.02,
    scrollTrigger: {
        trigger: splitTextTracker,
        start: "bottom 10%",
        end: "bottom 30%",
        scrub: true,
        once: false,
    }
},
)

}

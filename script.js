var tl = gsap.timeline()
var body = document.querySelector("body")
var pfp = document.querySelector("#pfp")
var cursor = document.querySelector("#cursor")

gsap.from("nav a",{
    y:-100,
    duration:0.6,
    stagger:0.3
})
gsap.from("#heading ",{
    y:200,
    duration:0.4,
    stagger:0.2,
    opacity:0

})
gsap.from("#projects ",{
    opacity:0,
    duration:1,

})
gsap.from("#para ",{
    opacity:0,
    duration:0.8,
    x:-200,

})
tl.from("#pfp",{
    x:200,
    duration:0.4,
    stagger:0.2

})
tl.from("#svg1",{
    x:100,
    duration:0.4,
    opacity:0


})
tl.from("#svg2",{
    y:100,
    duration:0.4,
    opacity:0


})
body.addEventListener("mousemove",function(delts){
    gsap.to("#cursor",{
        x:delts.x,
        y:delts.y,
        duration:0.3,
    })
})

pfp.addEventListener("mouseenter",function(){
    cursor.innerHTML = "Follow me &larr;",
    cursor.addEventListener("click", function() {
        window.location.href = "https://x.com/garvits093";  
    });


    gsap.to("#cursor",{
        scale:4,

    })
})
pfp.addEventListener("mouseleave",function(){
    cursor.innerHTML = "",

    gsap.to("#cursor",{
        scale:1,

    })
})

tl.from("ul li",{
    x:200,
    duration:0.6,
    stagger:0.4,
    delay:0.2,
    scrollTrigger:{
        scroller:body,
        trigger:"#page2",
        markers:true,
        start:"top 30%",
        end:"top -100%",
        // scrub:5,
    }
})
tl.from("#skillss",{
    opacity:0,
    duration:0.5
})
document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    // Add event listeners here
 
function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
init();

    // var tl = gsap.timeline()

    
    // tl.from("#loader img",{
    //     scale:0,
    //     opacity:1,
    //     delay:0.5,
    //     duration:1,
    //     // onStart:time()
    // })
    // tl.to("#loader",{
    //     top:"-100vh",
    //     delay:0.4,
    //     duration:1.5
    // })
    hamburger = document.querySelector('.hamburger');
    navbar = document.querySelector('.navbar');
    list = document.querySelector('.list');
    login = document.querySelector('.login');
    
    hamburger.addEventListener('click', ()=> {
        navbar.classList.toggle("h-nav");
        list.classList.toggle("v-class");
        login.classList.toggle("v-class");
        gsap.from(".h-nav",{
            opacity:0,
            duration:1,
            stagger:0.1,
        })
        
    })

// var items=document.querySelectorAll(".list li a")
//     items.forEach(function(item){
//         var nav=item.textContent;
//         console.log(item)
//         item.addEventListener('click',()=>{
//             nav.style.display="none";
//         })
//     })

var currentUrl = window.location.href;


// Loop through each navigation link and check if it matches the current URL
var navLinks = document.querySelectorAll('.list a');
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

function isLaptopScreen() {
    return window.innerWidth > 500; // You can adjust the breakpoint as needed
}
    
var elems=document.querySelector(".elems")
var fixedimg=document.querySelector(".fixedimg")

if (isLaptopScreen()) {
elems.addEventListener("mouseenter",function(){
    fixedimg.style.opacity="1";
})
elems.addEventListener("mouseleave",function(){
    fixedimg.style.opacity="0";
})

var elem=document.querySelectorAll(".elem");
elem.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        fixedimg.style.backgroundImage=`url(${image})`
    })
})
}
else{
    var elem=document.querySelectorAll(".elem");
    var fixed=document.querySelectorAll(".fixedimg>img");
    elem.forEach(function(e,i){
       fixed.forEach(function(elements,index){
        if(i==index){
            var image=e.getAttribute("data-image")
            console.log(image)
            console.log(elements)
            elements.src=image;
            // elements.style.backgroundImage=`url(${image})`
        }
       })
       
    })
}


    

function animations(){
    gsap.from("#logo,.list li ,.nav-right", {
        y: -100,
        duration: 1,
        opacity: 0,
        stagger: 0.1,
    })
    
    gsap.from(".tagline", {
        opacity: 0,
        duration: 3.5,
        ease: Power1,
    })
    
    gsap.from(".content .btn", {
        opacity: 0,
        duration: 3.5,
        ease: Power1,
    })
    
    gsap.from("h5", {
        scale: 0,
        opacity: 0,
        delay: 2
    })
    
    gsap.to("h5", {
        y: 30,
        repeat: -1,
        duration: 0.5,
        yoyo: true
    })
    // var tl = gsap.timeline()
    
    gsap.from(".fleftelem", {
        scale:0,
        opacity:0,
        duration: 1,
        scrollTrigger: {
            trigger: ".fleftelem",
            scroller: ".main",
            // markers:true,
            // start:"top 80%",
            end:"top 60%"
        } 
    })
    gsap.from(".images-list", {
        scale:0,
        opacity:0,
        duration: 1,
        scrollTrigger: {
            trigger: ".images-list",
            scroller: ".main",
            // markers:true,
            start:"top 80%",
            end:"top 60%",
            scrub:2
        }
    })

    gsap.from(".box",{
        scale:0,
        duration:1,
        ease:Power1,
        stagger:0.1,
        scrollTrigger:{
            trigger:".box",
            scroller:".main",
            // markers:true,
            start:"top 60%",
            end:"top 0%"
        }
    })
}

animations();

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".heading",
        scroller: ".main",
        // markers:true,
        start: "top -140%",
        end: "top -140%",
        scrub: 4
    }
})

tl3.to(".main",{
    backgroundColor:"#F7F8FC",
    // backgroundImage:"linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 84%)"
})

gsap.from(".owner ,.describe h3,.describe h6",{
    opacity:1,
    duration:1,
    scale:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".owner",
        scroller:".main" ,
        // markers: true,
        start:"top 90%",
        end:"top 0%",
    }
})

gsap.from(".achieve h4",{
    y:100,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".owner",
        scroller:".main" ,
        // markers: true,
        start:"bottom 60%",
        end:"top 0%",

    }
})




const box1 = document.querySelectorAll(".box");
box1.forEach((box) => {
    box.addEventListener('mouseenter', () => {
        gsap.to(box, { scale: 1.1, duration: 0.2 });
      });
      
      box.addEventListener('mouseleave', () => {
        gsap.to(box, { scale: 0.9, duration: 0.2 });
      });
});



// JavaScript
function typeWriter(textElement, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}


    const h1 = document.querySelector('.heading');
    typeWriter(h1, 'Ashok Boutique', 100);
});


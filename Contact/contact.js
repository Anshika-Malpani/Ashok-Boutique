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

    var currentUrl = window.location.href;


// Loop through each navigation link and check if it matches the current URL
var navLinks = document.querySelectorAll('.list a');
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});
var tl=gsap.timeline();

tl.from(".content h1, .content h5 ",{
  y:100,
  opacity:0,
  duration:0.7,
  stagger:0.2
})

tl.from(".lower",{
  y:100,
  opacity:0,
  duration:1
})
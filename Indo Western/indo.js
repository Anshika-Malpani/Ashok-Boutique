var indo=[
{
    image:"Indo Western Designs/indo(1).jpg",
    des:"Indo 1",
   
},
{
    image:"Indo Western Designs/indo(2).jpg",
    des:"Indo 2",
   
},
{
    image:"Indo Western Designs/indo(3).jpg",
    des:"Indo 3",
   
},
{
    image:"Indo Western Designs/indo(4).jpg",
    des:"Indo 4",
   
},
{
    image:"Indo Western Designs/indo(5).jpg",
    des:"Indo 5",
   
},
{
    image:"Indo Western Designs/indo(6).jpg",
    des:"Indo 6",
   
},
{
    image:"Indo Western Designs/indo(7).jpg",
    des:"Indo 7",
   
},
{
    image:"Indo Western Designs/indo(8).jpg",
    des:"Indo 8",
   
},
{
    image:"Indo Western Designs/indo(9).jpg",
    des:"Indo 9",
   
},
{
    image:"Indo Western Designs/indo(10).jpg",
    des:"Indo 10",
   
},
{
    image:"Indo Western Designs/indo(11).jpg",
    des:"Indo 11",
   
},
{
    image:"Indo Western Designs/indo(12).jpg",
    des:"Indo 12",
   
},
{
    image:"Indo Western Designs/indo(13).jpg",
    des:"Indo 13",
   
},
{
    image:"Indo Western Designs/indo(14).jpg",
    des:"Indo 14",
   
},
{
    image:"Indo Western Designs/indo(15).jpg",
    des:"Indo 15",
   
},
{
    image:"Indo Western Designs/indo(16).jpg",
    des:"Indo 16",
   
},
{
    image:"Indo Western Designs/indo(17).jpg",
    des:"Indo 17",
   
},
{
    image:"Indo Western Designs/indo(18).jpg",
    des:"Indo 18",
   
},
{
    image:"Indo Western Designs/indo(19).jpg",
    des:"Indo 19",
   
},
{
    image:"Indo Western Designs/indo(20).jpg",
    des:"Indo 20",
   
},
{
    image:"Indo Western Designs/indo(21).jpg",
    des:"Indo 21",
   
},
{
    image:"Indo Western Designs/indo(22).jpg",
    des:"Indo 22",
   
},
{
    image:"Indo Western Designs/indo(23).jpg",
    des:"Indo 23",
   
},
{
    image:"Indo Western Designs/indo(24).jpg",
    des:"Indo 24",
   
},
{
    image:"Indo Western Designs/indo(25).jpg",
    des:"Indo 25",
   
},
{
    image:"Indo Western Designs/indo(26).jpg",
    des:"Indo 26",
   
},
{
    image:"Indo Western Designs/indo(27).jpg",
    des:"Indo 27",
   
},
{
    image:"Indo Western Designs/indo(28).jpg",
    des:"Indo 28",
   
},
{
    image:"Indo Western Designs/indo(29).jpg",
    des:"Indo 29",
   
},
{
    image:"Indo Western Designs/indo(30).jpg",
    des:"Indo 30",
   
},
{
    image:"Indo Western Designs/indo(31).jpg",
    des:"Indo 31",
   
},
{
    image:"Indo Western Designs/indo(32).jpg",
    des:"Indo 32",
   
},
{
    image:"Indo Western Designs/indo(33).jpg",
    des:"Indo 33",
   
},
{
    image:"Indo Western Designs/indo(34).jpg",
    des:"Indo 34",
   
},
{
    image:"Indo Western Designs/indo(35).jpg",
    des:"Indo 35",
   
},
{
    image:"Indo Western Designs/indo(36).jpg",
    des:"Indo 36",
   
},
{
    image:"Indo Western Designs/indo(37).jpg",
    des:"Indo 37",
   
},
{
    image:"Indo Western Designs/indo(38).jpg",
    des:"Indo 38",
   
},
{
    image:"Indo Western Designs/indo(39).jpg",
    des:"Indo 39",
   
},
{
    image:"Indo Western Designs/indo(40).jpg",
    des:"Indo 40",
   
},
{
    image:"Indo Western Designs/indo(41).jpg",
    des:"Indo 41",
   
},
{
    image:"Indo Western Designs/indo(42).jpg",
    des:"Indo 42",
   
},
{
    image:"Indo Western Designs/indo(43).jpg",
    des:"Indo 43",
   
},
{
    image:"Indo Western Designs/indo(44).jpg",
    des:"Indo 44",
   
},
{
    image:"Indo Western Designs/indo(44).jpg",
    des:"Indo 44",
   
},
{
    image:"Indo Western Designs/indo(45).jpg",
    des:"Indo 45",
   
},
{
    image:"Indo Western Designs/indo(46).jpg",
    des:"Indo 46",
   
},
{
    image:"Indo Western Designs/indo(47).jpg",
    des:"Indo 47",
   
},
{
    image:"Indo Western Designs/indo(48).jpg",
    des:"Indo 48",
   
},
{
    image:"Indo Western Designs/indo(49).jpg",
    des:"Indo 49",
   
},
{
    image:"Indo Western Designs/indo(50).jpg",
    des:"Indo 50",
   
},
{
    image:"Indo Western Designs/indo(51).jpg",
    des:"Indo 51",
   
},
{
    image:"Indo Western Designs/indo(52).jpg",
    des:"Indo 52",
   
},
{
    image:"Indo Western Designs/indo(53).jpg",
    des:"Indo 53",
   
},
{
    image:"Indo Western Designs/indo(54).jpg",
    des:"Indo 54",
   
},
{
    image:"Indo Western Designs/indo(55).jpg",
    des:"Indo 55",
   
},
{
    image:"Indo Western Designs/indo(56).jpg",
    des:"Indo 56",
   
},
{
    image:"Indo Western Designs/indo(57).jpg",
    des:"Indo 57",
   
},
{
    image:"Indo Western Designs/indo(58).jpg",
    des:"Indo 58",
   
},
{
    image:"Indo Western Designs/indo(59).jpg",
    des:"Indo 59",
   
},
{
    image:"Indo Western Designs/indo(60).jpg",
    des:"Indo 60",
   
},
{
    image:"Indo Western Designs/indo(61).jpg",
    des:"Indo 61",
   
},

]

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
function displayImage(src) {
    var modal = document.getElementById('imageModal');
    var img = document.getElementById('expandedImage');
    img.src = src;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

var currentUrl = window.location.href;


// Loop through each navigation link and check if it matches the current URL
var navLinks = document.querySelectorAll('.list a');
navLinks.forEach(function(link) {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});

const imgSection=document.querySelector(".img-section");


function createDesignsBox(indos) {
    const box = document.createElement("div");
    box.classList.add('box');
    box.innerHTML = `
      <img class="designss" src="${indos.image}" alt="">
      <h3 class="title">${indos.des}</h3>
    `;
    for (let i = 0; i <indo.length; i++) {
        box.addEventListener('click',(dets)=>{
           var targetImg=dets.target.getAttribute('src')
           displayImage(targetImg)
        })
        
    }
    return box;
  }
  
  function showDesignss() {
    indo.forEach(function (indos) {
      const designsBox = createDesignsBox(indos);
      imgSection.appendChild(designsBox);
  
      // Add event listener to each box for mouseenter
      designsBox.addEventListener("mouseenter", () => {
        const tl = gsap.timeline();
        tl.to(designsBox, {
          scale: 1.1,
          duration: 1,
          opacity: 0.8
        });
        tl.play();
      });
  
      // Add event listener to each box for mouseleave
      designsBox.addEventListener("mouseleave", () => {
        const tl = gsap.timeline();
        tl.to(designsBox, {
          scale: 1,
          duration: 1,
          opacity: 1  // Return opacity to its original value (e.g., 1)
        });
        tl.play();
      });
    //   designsBox.addEventListener("click",(dets)=>{
    //     const fullimg= document.querySelector(".fullimg")
    //     const fullscrn= document.querySelector(".fullscrn")
    //     fullimg.style.display="block";
    //     fullscrn.style.backgroundImage=`url(indoss/indos(1).jpg)`;
    //   })
    });
  }
  
  showDesignss();
  

  gsap.from("h1",{
    y:-100,
    scale:1.1,
    duration:1
  })
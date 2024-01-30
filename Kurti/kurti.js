var kurties=[
    {
        image:"Kurties/kurti(1).jpg",
        des:"Kurti 1",
       
    },
    {
        image:"Kurties/kurti(2).jpg",
        des:"Kurti 2",
       
    },
    {
        image:"Kurties/kurti(3).jpg",
        des:"Kurti 3",
       
    },
    {
        image:"Kurties/kurti(4).jpg",
        des:"Kurti 4",
       
    },
    {
        image:"Kurties/kurti(5).jpg",
        des:"Kurti 5",
       
    },
    {
        image:"Kurties/kurti(6).jpg",
        des:"Kurti 6",
       
    },
    {
        image:"Kurties/kurti(7).jpg",
        des:"Kurti 7",
       
    },
    {
        image:"Kurties/kurti(8).jpg",
        des:"Kurti 8",
       
    },
    {
        image:"Kurties/kurti(9).jpg",
        des:"Kurti 9",
       
    },
    {
        image:"Kurties/kurti(10).jpg",
        des:"Kurti 10",
       
    },
    {
        image:"Kurties/kurti(11).jpg",
        des:"Kurti 11",
       
    },
    {
        image:"Kurties/kurti(12).jpg",
        des:"Kurti 12",
       
    },
    {
        image:"Kurties/kurti(13).jpg",
        des:"Kurti 13",
       
    },
    {
        image:"Kurties/kurti(14).jpg",
        des:"Kurti 14",
       
    },
    {
        image:"Kurties/kurti(15).jpg",
        des:"Kurti 15",
       
    },
    {
        image:"Kurties/kurti(16).jpg",
        des:"Kurti 16",
       
    },
    {
        image:"Kurties/kurti(17).jpg",
        des:"Kurti 17",
       
    },
    {
        image:"Kurties/kurti(18).jpg",
        des:"Kurti 18",
       
    },
    {
        image:"Kurties/kurti(19).jpg",
        des:"Kurti 19",
       
    },
    {
        image:"Kurties/kurti(20).jpg",
        des:"Kurti 20",
       
    },
    {
        image:"Kurties/kurti(21).jpg",
        des:"Kurti 21",
       
    },
    {
        image:"Kurties/kurti(22).jpg",
        des:"Kurti 22",
       
    },
    {
        image:"Kurties/kurti(23).jpg",
        des:"Kurti 23",
       
    },
    {
        image:"Kurties/kurti(24).jpg",
        des:"Kurti 24",
       
    },
    {
        image:"Kurties/kurti(25).jpg",
        des:"Kurti 25",
       
    },
    {
        image:"Kurties/kurti(26).jpg",
        des:"Kurti 26",
       
    },
    {
        image:"Kurties/kurti(27).jpg",
        des:"Kurti 27",
       
    },
    {
        image:"Kurties/kurti(28).jpg",
        des:"Kurti 28",
       
    },
    {
        image:"Kurties/kurti(29).jpg",
        des:"Kurti 29",
       
    },
    {
        image:"Kurties/kurti(30).jpg",
        des:"Kurti 30",
       
    }
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


function createDesignBox(kurti) {
    const box = document.createElement("div");
    box.classList.add('box');
    box.innerHTML = `
      <img class="designs" src="${kurti.image}" alt="">
      <h3 class="title">${kurti.des}</h3>
    `;
    for (let i = 0; i < kurties.length; i++) {
        box.addEventListener('click',(dets)=>{
           var targetImg=dets.target.getAttribute('src')
           displayImage(targetImg)
        })
        
    }
    return box;
  }
  
  function showDesigns() {
    kurties.forEach(function (kurti) {
      const designBox = createDesignBox(kurti);
      imgSection.appendChild(designBox);
  
      // Add event listener to each box for mouseenter
      designBox.addEventListener("mouseenter", () => {
        const tl = gsap.timeline();
        tl.to(designBox, {
          scale: 1.1,
          duration: 1,
          opacity: 0.8
        });
      });
  
      // Add event listener to each box for mouseleave
      designBox.addEventListener("mouseleave", () => {
        const tl = gsap.timeline();
        tl.to(designBox, {
          scale: 1,
          duration: 1,
          opacity: 1  // Return opacity to its original value (e.g., 1)
        });
      });
    //   designBox.addEventListener("click",(dets)=>{
    //     const fullimg= document.querySelector(".fullimg")
    //     const fullscrn= document.querySelector(".fullscrn")
    //     fullimg.style.display="block";
    //     fullscrn.style.backgroundImage=`url(blouses/blouse(1).jpg)`;
    //   })
    });
  }
  
  showDesigns();
  

  gsap.from("h1",{
    y:-100,
    scale:1.1,
    duration:1
  })
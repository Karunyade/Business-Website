// navbar for small screen
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*scroll section for nav a links*/
let sections=document.querySelectorAll('section');//to select all section tag
let navLinks=document.querySelectorAll('header nav a');//to select all the a tag in nav tag

window.onscroll=()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top< offset + height ){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // navbar automatically changes according to the screen size
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    
    // remove toggle icon after any navlist is clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 // scroll reveal  reset:true whenever the section was clicked by user it should reveal fro first
 ScrollReveal({ 
    //reset:true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 //section reveal from scrollreveal 
 ScrollReveal().reveal('.home-content,.heading', { origin:'top'});
 ScrollReveal().reveal('.home-img,.service-container,.service-box,.contact-details', { origin:'bottom'});
 ScrollReveal().reveal('.vm-box h2', { origin:'right'});
 ScrollReveal().reveal('.vm-box', { origin:'left'});

// typed.js
const typed=new Typed('.multiple-text',{
    strings: ['Paddy Threshing','Hand Pound Rice','All Dhal and pulse Breaking Service','Groundnut Powdering Service','Rotatry'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

/!* ================ menu icon navbar ============ */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
}





/!* ================ scroll sections active linke ============ */
let sections = document.querySelectorAll('section');
let navLinks  = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector(`header nav a[href*=` + id + `]`).classList.add('active')
            });
        };
    });

    /!* ================ stickey navbar ============ */
    //! short hand navigation po-up and display none when cilcked on any option 
    let header = document.querySelector(".header");
    header.classList.toggle('sticky', window.scrollY > 30);
    menuIcon.classList.remove('bx-x'); 
    navbar.classList.remove('active'); 


}; 


//! this is for understanding the function how scrolling work 
// window.onscroll= () => {
    //     const header = document.querySelector(".header");
    //     let previousScroll = 0;
    //     const currentScroll = window.pageYOffset;
    //     console.log(currentScroll);
    //     if (currentScroll > previousScroll) {
        //         header.classList.add("sticky");
        //     } else {
            //         header.classList.remove("sticky");
            //     }
            //     previousScroll = currentScroll;
            // };
            
            
/!* ================ swiper carocel ============ */
var Carousel = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor: true,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

    /!* ================ darkmode light ============ */
let darkModeIcon = document.querySelector("#darkMode-icon");
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

    /!* ================ scroll reveal ============ */

    // !slideDown while loading

    //? portfolio log 
    var portfolioScale = {
        scale: 2,
        duration: 300,
        delay: 2000
    }; 
    ScrollReveal().reveal('.header .logo', portfolioScale);
//     //? heading interval delay
//     var headingInterval = {
//         interval: 100 
//     };
//     ScrollReveal().reveal('.header .interval', headingInterval);

    var slideDown = {
        origin: 'top',
        distance: '90px',
        duration: 2000,
        delay: 200
    };
    ScrollReveal().reveal('.home-content, .heading', slideDown);
    
    //! slideUp
    var slideUp = {
        origin: 'bottom',
        distance: '90px',
        duration: 3000,
        delay: 500
    };
    ScrollReveal().reveal('.home-img img, .services-container, .rtfolio-box, .testimonial-wrapper, .contact form', slideUp); 
    
    //! slideLeft
    var slideLeft = {
        origin: 'left',
        distance: '90px',
        duration: 2000,
        delay: 200
    };
    ScrollReveal().reveal('.home-content h1, .about-img img', slideLeft); 
    
    //! slideRigh
    var slideRight = {
        origin: 'right',
        distance: '90px',
        duration: 2000,
        delay: 200
    };
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', slideRight); 
    
    // slideing the context information
    // !slide contect right
    var contactName = {
        origin: 'left',
        distance: '200px',
        duration: 2000,
        delay: 200
    }
    ScrollReveal().reveal('.contact .input-box .name' , contactName); 
    var contactMobile = {
        origin: 'left',
        distance: '200px',
        duration: 3000,
        delay: 500
    }
    ScrollReveal().reveal('.contact .input-box .mobile' , contactMobile); 
    // !slide contect left
    var contactEmail = {
        origin: 'right',
        distance: '200px',
        duration: 2000,
        delay: 200
    }
    ScrollReveal().reveal('.contact .input-box .email' , contactEmail); 
    var contactSubject = {
        origin: 'right',
        distance: '200px',
        duration: 3000,
        delay: 500
    }
    ScrollReveal().reveal('.contact .input-box .subject' , contactSubject); 
    
    //! rotating the arrow icon in the footer 
    var rotateArrow = {
        scale: 3,
        rotate: {
            x: 30,
            y: 30,
            z: 30,
        },
        origin: 'right',
        distance: '200px',
        duration: 3000,
        delay: 500
    }
    ScrollReveal().reveal('.footer .footer-iconTop' , rotateArrow); 

// const menuOpenButton = document.querySelector('#menu-open-button');
// const navMenu = document.querySelector('.nav-menu');

// menuOpenButton.addEventListener('click', () => {
//     if (navMenu.style.left === '0px') {
//         navMenu.style.left = '-300px';
//     } else {
//         navMenu.style.left = '0px';
//     }
// });

// document.querySelector('#menu-close-button').addEventListener('click', () => {
//     navMenu.style.left = '-300px';
// });

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
      const whatsappNumber = "917094383426"; 
      const url = `https://wa.me/${whatsappNumber}?text=${text}`;

      window.open(url, "_blank");
    });
  });



const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor:true,
    spaceBetween :20,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints:{
        0:{
            slidesPerView:1
        },
        760:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }
    }
    
  });

  window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header');

    if (window.scrollY > 500) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
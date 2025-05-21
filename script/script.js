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

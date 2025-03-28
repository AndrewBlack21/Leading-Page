let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
//slide

var slide = new slide(".home-slide",{
    spaceBetween: 20,
    effect: "fade",
    grabCursos: true,
    loop:true,
    autoplay:{
        delay:4000,
    },
    centeredSlides:true,
    pagination:{
        el:"carousel-control-prev",
        clickable:true,
    },
});

var slide = new slide(".review-slide",{
    spaceBetween: 20,
    grabCursos: true,
    loop:true,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidePerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
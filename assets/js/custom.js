// ======================= NAVIGATION RESPONSIVE
var navIcon = document.querySelector(".nav-icon");
mainNav = document.querySelector("nav");
navIcon.addEventListener("click",function() {
   mainNav.classList.toggle("active");
});

window.addEventListener("scroll", function() {
    mainNav.classList.toggle("sticky", this.scrollY > 400);
})

// ============================= COUNTER js
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;
        if(count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});

// ========================= Wow js
new WOW().init();









// ========================== TESTIMONIAL CAROUSEL 
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        // Most important owl features
            loop:true,
            autoplay:true,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:1,
                    nav:false
                },
                800:{
                    items:2,
                    nav :false
                },
                992:{
                    items:3,
                    nav :false
                },
                1000:{
                    items:3,
                    nav:false,
                    loop:true
                }
            }

    });
})

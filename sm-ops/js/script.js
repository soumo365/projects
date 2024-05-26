

$(document).ready(function () {
  $('#navigation nav').slimNav_sk78();
  $('#nav-icon0').click(function() {
      $(this).toggleClass('open');
  });
 
 // Equal height
 $(function () {
    $(".hm-sec4 .row  .cap-card > p").matchHeight();
    $(".abt-sec4 .row  .proof-card > h2").matchHeight();
  });

// counter
  // Function to start counter animation
function startCounterAnimation(entry, observer) {
    if (entry.isIntersecting && !entry.target.classList.contains('animation-triggered')) {
        // Start counter animation for each counter element in view
        const counterElements = entry.target.querySelectorAll('.counter');
        counterElements.forEach(counterElement => {
            const target = parseInt(counterElement.getAttribute('data-target'));
            const sign = counterElement.getAttribute('data');
            $({ countNum: 0 }).animate({ countNum: target }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    counterElement.textContent = Math.ceil(this.countNum) + sign;
                }
            });
        });
        entry.target.classList.add('animation-triggered');
    }
}

// Options for the intersection observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the target is visible
};

// Create a new intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        startCounterAnimation(entry, observer);
    });
}, options);

// Target the elements to observe
const counterSections = document.querySelectorAll('.hm-sec3');
const counterSections2 = document.querySelectorAll('.abt-sec4');

// Observe each counter section
counterSections.forEach(section => {
    observer.observe(section);
});
counterSections2.forEach(section => {
    observer.observe(section);
});

// Reset animation-triggered class when scrolling
$(window).on('scroll', function() {
    counterSections.forEach(section => {
        if (!isInViewport(section)) {
            section.classList.remove('animation-triggered');
        }
    });
});
$(window).on('scroll', function() {
    counterSections2.forEach(section => {
        if (!isInViewport(section)) {
            section.classList.remove('animation-triggered');
        }
    });
});

// Function to check if element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// looping

$('.process-card').each(function(index) {
    var topPosition = index * 3 + 'rem'; // Calculate top position based on index
    $(this).css('top', topPosition); // Set top position for each card
});



 // Get the background color of the first div or section inside .page-content
 var firstBackgroundColor = $(".page-content > div:first-child, .page-content > section:first-child").css("background-color");
        
 // Check if background color is defined
 if (firstBackgroundColor) {
     // Apply the background color to the header
     $("header").css("background-color", firstBackgroundColor);
 }

// cara

$('.companies .owl-carousel').owlCarousel({
    stagePadding: 0,
    loop:true,
    dots:false,
    margin:50,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3,
            margin:20,
        },
        1000:{
            items:3,
            margin:50,
        }
    }
})


 
});




        
    // gsap

    gsap.to(".banner ", {
        duration: 3,
        scrollTrigger: {
        trigger: ".banner",
        start: "top top",
        pin: ".banner",
        pinSpacing: false,
        },
    });
gsap.to(".hm-sec5 ", {
    duration: 3,
    scrollTrigger: {
      trigger: ".hm-sec5",
      start: "top top",
      pin: ".hm-sec5",
      pinSpacing: false,
    },
  });
gsap.to(".hm-sec7  .left ", {
    duration: 3,
    scrollTrigger: {
      trigger: ".hm-sec7",
      start: "top top",
      pin: ".hm-sec7  .left",
      pinSpacing: false,
    },
  });
gsap.to(".hm-sec7  .ab ", {
    duration: 3,
    scrollTrigger: {
      trigger: ".hm-sec7",
      start: "top top",
      pin: ".hm-sec7  .ab",
      pinSpacing: false,
    },
  });
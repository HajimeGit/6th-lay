$(document).ready(function(){
    const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
    const menuToggle = document.getElementById('navbarsExample');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
        toggle: false
    });
    navLinks.forEach(function(l) {
        l.addEventListener('click', function() {
            if (menuToggle.classList.contains('show')) { bsCollapse.toggle(); }
        });
    });


    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }

        ]
});
    });

function checkWidth() {
    try{
        if ($(window).width() <= 1200) {
            $('.feedback_slider').slick({
                dots: true  ,
                arrows: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    }
                ]

            });
        } else {
            $('.feedback_slider').slick('unslick');
        }
    }catch {return}

}

$(function(){
    checkWidth();
    $(window).resize(checkWidth);
});



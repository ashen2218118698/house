/**
 * Created by frontend-huan on 2016/12/11.
 */
function slickCarousel() {
    if ($("#slick:has(div)").length != 0 && $("#slick")[0].childNodes[2].nodeType < 8) {
        $('.header__recommended .listings-grid').slick({
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            dotsClass: 'slick-dots slick-dots-light',
            infinite: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
}
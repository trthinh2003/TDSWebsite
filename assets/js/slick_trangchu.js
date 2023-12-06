$(document).ready(function() {
    $(".just-posted-product").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        accessibility: false,
        responsive: [
            {
                breakpoint: 1024, // 800x600
                settings: { slidesToShow: 4 }
            },

            {
                breakpoint: 800, // 768x1024
                settings: { slidesToShow: 4 }
            },

            {
                breakpoint: 768, // 600x800
                settings: { slidesToShow: 1 }
            },

            {
                breakpoint: 600, // 480x320
                settings: { slidesToShow: 1 }
            },

            {
                breakpoint: 480, // 320x480
                settings: { slidesToShow: 1 }
            }
        ],
    });
    $(".free-product").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        accessibility: false,
        // draggable: false,
        responsive: [
            {
                breakpoint: 1024, // 800x600
                settings: { slidesToShow: 4 }
            },

            {
                breakpoint: 800, // 768x1024
                settings: { slidesToShow: 4 }
            },

            {
                breakpoint: 768, // 600x800
                settings: { slidesToShow: 1 }
            },

            {
                breakpoint: 600, // 480x320
                settings: { slidesToShow: 1 }
            },

            {
                breakpoint: 480, // 320x480
                settings: { slidesToShow: 1 }
            }
        ],
    });
});
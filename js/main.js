$(document).ready(function () {

    // Scroll to section

    $('.header__link').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });

    //Open modal window

    $(".invite__button").fancybox();

    //Close modal window
    $('.invite__close').on('click',function open () {
        $.fancybox.close();
    });
    $('.invite__send').on('click',function open () {
        $.fancybox.close();
    });
    $('.header__send').on('click',function open () {
        $.fancybox.close();
    });
    //Open modal-thank window

    $(".invite__send").fancybox();

    //Open call modal

    $('.header__call').fancybox();

    //initialize swiper when document ready

    var mySwiper = new Swiper('.reviews__slider.swiper-container', {
        // Optional parameters
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })
});
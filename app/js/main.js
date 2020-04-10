$(function () {

    $('.rate-star').rateYo({
        rating: 4.5,
        readOnly: true,
        starWidth: "15px"
    });


    
    $('.newest__review-star').rateYo({
        rating: 5.0,
        readOnly: true,
        starWidth: "15px"
    });

    $('.slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: document.querySelector('   .slider__top-right'),
        prevArrow: document.querySelector('.slider__top-left')
    });

    $('.slider__inner-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        nextArrow: document.querySelector('.slider__right'),
        prevArrow: document.querySelector('.slider__left')
      });


});
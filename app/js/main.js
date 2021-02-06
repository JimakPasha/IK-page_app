$(function () {
  
  $('.partners__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    dots: true
  });

  $('.gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    waitForAnimate: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500
  });

  $('.connection__form-input--phone').mask('+ 375 ( 9 9 ) 9 9 9 - 9 9 - 9 9');

});
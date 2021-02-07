$(function () {
  
  $('.partners__inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          waitForAnimate: false
        }
      },
      {
        breakpoint: 611,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 411,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '35px'
        }
      }
    ]
  });

  $('.gallery__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    waitForAnimate: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
        centerMode: false
        }
      }
    ]
  });

  $('.connection__form-input--phone').mask('+ 375 ( 9 9 ) 9 9 9 - 9 9 - 9 9');

  $('.menu__btn').on('click', function () {
    $('.menu__list,.menu__btn,.header').toggleClass('active');
    $('body').toggleClass('lock');
  });

});
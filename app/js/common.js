$(document).ready(function () {

  $('.page_header-slider').slick({
    dots: true,
    dotsClass: "header_slider-control",
    arrows: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});

$(document).ready(function () {
  $('.page_header-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Playboy</small>';
      }
    }
  });
});

$(document).ready(function () {
  $('.menu').removeClass('fixed_menu');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('.menu').addClass("fixed_menu");
    } else {
      $('.menu').removeClass("fixed_menu");
    }
  });
});

$(document).ready(function () {
  $('.menu_button').click(function () {
    $('.menu_hamburger').toggleClass('hamburger_active');
    $('.main_nav ').slideToggle(500);
  });
});

$(document).ready(function () {
  $('.main_nav-item').click(function () {
    var listMenu = $(this)
    listMenu.find('.nav_list-embedded').slideToggle(500);
  })
});

$(document).ready(function () {
  $('.menu_search-link').click(function () {
    $('.menu_search-panel').fadeToggle(500);
  })
  $('.search_field-close').click(function () {
    $('.menu_search-panel').fadeToggle(500);
  });
});

$(document).ready(function () {
  $('.menu_enter-link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#login',
    modal: true
  });
  $(document).on('click', '.close__popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

});

$(document).ready(function () {
  $('.enter_mobile-link').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#login',
    modal: true
  });
  $(document).on('click', '.close__popup', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

});

VK.Widgets.Group("vk_groups", {
  mode: 0,
  width: "300",
  height: "240"
}, 24377932);
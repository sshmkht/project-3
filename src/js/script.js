// slider

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev'); 
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});


// catalog 
(function($) {
	$(function() {

		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});

	});

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };

  toggleSlide ('.catalog-item__link');
  toggleSlide ('.catalog-item__back');

  // modal forms
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  })

  $('.btn_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });


  // form validation
  function validateForms (form) {
    $(form).validate({
      rules: {
        name: "required",
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Пожалуйста, введите имя",
        phone: "Пожалуйста, введите номер телефона",
        email: {
          required: "Пожалуйста, введите адрес",
          email: "Неправильно введен адрес"
        }
      }
    });
  }
  validateForms ('#consultation-form');
  validateForms ('#consultation form');
  validateForms ('#order form');

  //phone mask
$('input[name=phone]').mask("+7 (999) 999-99-99");

})(jQuery);



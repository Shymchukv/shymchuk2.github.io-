$(function() {
  const header = $('.header_top');
  const about = $('#about');

  function checkScroll() {
    const scrollPos = $(window).scrollTop();
    const aboutBottom = about.offset().top + about.outerHeight();

    if (scrollPos === 0) {
      header.removeClass('hidden');
    } else if (scrollPos < aboutBottom) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }
  }

  $(window).on('scroll resize', checkScroll);
  checkScroll();

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if ($(target).length) {
      let targetOffset = $(target).offset().top - 70; 
      $('html, body').animate({ scrollTop: targetOffset }, 600);
    }
  });

  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();
    let elementId = $(this).data('scroll');
    console.log("Клікнули по:", elementId);

    if ($(elementId).length) {
      let elementOffset = $(elementId).offset().top - 70; 
      $("html, body").animate({ scrollTop: elementOffset }, 600);
    } else {
      console.warn("Елемент не знайдено:", elementId);
    }
  });
});

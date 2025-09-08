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
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 600); 
  });
});

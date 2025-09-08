$(function() {
  const header = $('.header_top');
  const about = $('#about');

  function checkScroll() {
    const scrollPos = $(window).scrollTop();
    const aboutBottom = about.offset().top + about.outerHeight();

    if (scrollPos === 0) {
      // завжди показуємо хедер на самому верху
      header.removeClass('hidden');
    } else if (scrollPos < aboutBottom) {
      // поки не проскролили about — ховаємо
      header.addClass('hidden');
    } else {
      // після about — показуємо
      header.removeClass('hidden');
    }
  }

  $(window).on('scroll resize', checkScroll);
  checkScroll(); // одразу перевірка
});

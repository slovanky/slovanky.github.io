
// Navigation
$(document).ready(function() {
  $('.scrolling-item').click(function(e) {

    var targetHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(targetHref).offset().top
    }, 500);

      e.preventDefault();
  });
});

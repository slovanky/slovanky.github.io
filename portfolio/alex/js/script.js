
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

// Counters
/*
$('.Count').each(function () {
  var $this = $(this);
  $({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
*/

// Counters
$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($("#numbers")) && !viewed) {
    viewed = true;
    $('.Count').each(function () {
      $(this).prop('Counter',0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });
  }
}

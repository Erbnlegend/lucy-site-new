$(document).ready(function() {
  $('#navButton').click(function(event) {
    $('#nav').animate({opacity: 'toggle'}, 200);
  });
  $('#nav p').click(function(event) {
    $('#nav').animate({opacity: 'toggle'}, 200);
  });

  // Smooth Scroll Effect

  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 1000, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});
});

$(document).ready(function() {
  $('#navButton').click(function(event) {
    $('#nav').animate({opacity: 'toggle'}, 200);
  });
  $('#nav p').click(function(event) {
    $('#nav').animate({opacity: 'toggle'}, 200);
  });
});

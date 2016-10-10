// HomePage SlideShow

window.onload = slide;
// Slideshow
function slide() {
  var i = 0;
  var background = document.getElementById('background1');
  var img = [
    'Sea_14',
    'Sea_8',
    'metal_1',
    'background-sm'
  ];

  setInterval(function() {background.style.background = "url(assets/img/background/" + img[i] + ".jpg) no-repeat fixed center";
  background.style.backgroundSize = "cover";
  i++;
  if (i >= img.length) {i = 0};
  }, 3000);
};

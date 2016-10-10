$(document).ready(function() {
//This is for use with sliderShowFull
  $(document).on('mouseover', '.sectionFull', function(e) {
    $(this).find('.title h4').css('margin-left', '-100%');
    $(this).find('.float').css('width', '100%');
    $(this).find('.float').css('opacity', '1');
    $(this).find('span').css('opacity', '0');
  });
  $(document).on('mouseout', '.sectionFull', function(e) {
    $(this).find('.title h4').css('margin-left', '0');
    $(this).find('.float').css('width', '0');
    $(this).find('.float').css('opacity', '0');
    $(this).find('span').css('opacity', '1');
  });
//This is for use with sliderShowPart
  $(document).on('mouseover', '.sectionPart', function(e) {
    $(this).find('.title h4').css('width', '100%');
    $(this).find('.float').css('margin-right', '-100%');
    $(this).find('.float').css('opacity', '0');
    $(this).find('span').css('opacity', '1');
  });
  $(document).on('mouseout', '.sectionPart', function(e) {
    $(this).find('.title h4').css('width', '60%');
    $(this).find('.float').css('margin-right', '0');
    $(this).find('.float').css('opacity', '1');
    $(this).find('span').css('opacity', '0');
  });
});

var app = angular.module('galleryFun', ['ngTouch']);

app.controller('GalleryController', ['$scope', '$http', function($scope, $http){

  $scope.gallery = null;
  $http.get('assets/js/data/gallery.json')
      .success(function(data) {
          $scope.gallery = data;
      })
      .error(function(data,status,error,config){
          $scope.gallery = [{heading:"Error",description:"Could not load json   data"}];
      });

// Function to set the Initial Image when you click to open the Gallery

$scope.getInitImage = function(event) {
  var initCategory = event.target.attributes.category.value; //Cat of the elm being clicked
  var initGallery = event.target.attributes.gallery.value; //ID of the img being clicked
  var images = $scope.gallery[initGallery-1].galImages[0].imgLarge;
  var large = $('#' + initCategory + initGallery + "-large");
  large.attr('src', 'assets/img/transparent.png'); //make the tranparent
  //IE Crap because object Fit doesnt Work
      // Assign image source to variable
      var asset = 'assets/img/galleries/' + images;
      // Add background image asset to CSS Same as style.css
      large.css('backgroundImage', 'url(' + asset + ')');
      large.css('backgroundSize', 'contain');
      large.css('backgroundPosition', 'center center');
  };

// Function for Changing Gallery Image on Thumbnail Click
$scope.replaceImage = function(event) {
  var thumbLocation = event.target.attributes.thumb.value; //ID of the thumb being clicked
  var thumbGalleryLocation = event.target.attributes.gallery.value; //Get the Gallery ID associated with the thumbNail
  var images = $scope.gallery[thumbGalleryLocation -1].galImages[thumbLocation -1]; //Array Path to imgLarge src based on the thumb clicked
  // Now Change the Large Image that shows in the gallery based on what thumb is clicked
  var category = $scope.gallery[thumbGalleryLocation -1].category;
  var large = $('#' + category + thumbGalleryLocation + '-large');
  large.attr('src', 'assets/img/transparent.png'); //Chrome Issue. img src must have an image

  //IE Crap because object Fit doesnt Work

      // Assign image source to variable
      var asset = 'assets/img/galleries/' + images.imgLarge;
      // Add background image asset to CSS Same as style.css
      large.css('backgroundImage', 'url(' + asset + ')');
      large.css('backgroundSize', 'contain');
      large.css('backgroundPosition', 'center center');

  $(large).on('load',function(){
    large.animate({opacity: '1'}, 1000);
  });
  large.attr('thumbNailIndex', thumbLocation ); //Change the DOM to reflect the Gallery Image
};

// Function for Changing Gallery Image on Arrow Click
$scope.arrowSelected = function(event) {
  var arrowGallery = event.target.attributes.gallery.value; // ID of the arrow being clicked
  var arrowDirection = event.target.attributes.direction.value; //Get the Id on the DOM

  // Now get what Image that should replace the src and add animation
  var category = $scope.gallery[arrowGallery -1].category;
  var large = $('#' + category + arrowGallery + '-large');
  var length = $scope.gallery[arrowGallery -1].galImages.length;
  var thumbIndex = large.attr('thumbNailIndex'); // Get the Current value for thumbnail

  thumbIndex = parseInt(thumbIndex) + parseInt(arrowDirection);
  if(thumbIndex > length) { //Make sure the DOM is not greater than the Array Length
    thumbIndex = 1;
  };
  if(thumbIndex < length - length + 1) { //Make sure the DOM is not Less than the Array Length
    thumbIndex = length;
  }
  //Change the image
  large.attr('thumbNailIndex', thumbIndex );//Change the DOM to reflect the Gallery Image
  var images = $scope.gallery[arrowGallery -1].galImages[thumbIndex -1];
  large.attr('src', 'assets/img/transparent.png'); //Chrome Issue. img src must have an image

  //IE Crap because object Fit doesnt Work

      // Assign image source to variable
      var asset = 'assets/img/galleries/' + images.imgLarge;
      // Add background image asset to CSS Same as style.css
      large.css('backgroundImage', 'url(' + asset + ')');
      large.css('backgroundSize', 'contain');
      large.css('backgroundPosition', 'center center');

  $(large).on('load',function(){
    large.animate({opacity: '1'}, 1000);
  });
};

// Adding Mobile Swipe capabilities

//Left

$scope.prevSlide = function(event) {
  var galleryLocation = event.target.attributes.gallery.value; // ID of the img being swiped
  var left = event.target.attributes.left.value; //Get either -1 or 1 to move array

  var category = $scope.gallery[galleryLocation -1].category;
  var large = $('#' + category + galleryLocation + '-large');

  var length = $scope.gallery[galleryLocation -1].galImages.length;
  var thumbIndex = large.attr('thumbNailIndex'); // Get the Current value for thumbnail

  thumbIndex = parseInt(thumbIndex) + parseInt(left);
  if(thumbIndex > length) { //Make sure the DOM is not greater than the Array Length
    thumbIndex = 1;
  };
  if(thumbIndex < length - length + 1) { //Make sure the DOM is not Less than the Array Length
    thumbIndex = length;
  };

  large.attr('thumbNailIndex', thumbIndex );//Change the DOM to reflect the Gallery Image
  var images = $scope.gallery[galleryLocation -1].galImages[thumbIndex -1];
  large.attr('src', 'assets/img/transparent.png'); //Chrome Issue. img src must have an image

  //IE Crap because object Fit doesnt Work

      // Assign image source to variable
      var asset = 'assets/img/galleries/' + images.imgLarge;
      // Add background image asset to CSS Same as style.css
      large.css('backgroundImage', 'url(' + asset + ')');
      large.css('backgroundSize', 'contain');
      large.css('backgroundPosition', 'center center');

  $(large).on('load',function(){
    large.animate({opacity: '1'}, 1000);
  });
};

//Right
$scope.nextSlide = function(event) {
  var galleryLocation = event.target.attributes.gallery.value; // ID of the img being swiped
  var right = event.target.attributes.right.value; //Get either -1 or 1 to move array

  var category = $scope.gallery[galleryLocation -1].category;
  var large = $('#' + category + galleryLocation + '-large');

  var length = $scope.gallery[galleryLocation -1].galImages.length;
  var thumbIndex = large.attr('thumbNailIndex'); // Get the Current value for thumbnail

  thumbIndex = parseInt(thumbIndex) + parseInt(right);
  if(thumbIndex > length) { //Make sure the DOM is not greater than the Array Length
    thumbIndex = 1;
  };
  if(thumbIndex < length - length + 1) { //Make sure the DOM is not Less than the Array Length
    thumbIndex = length;
  };

  large.attr('thumbNailIndex', thumbIndex );//Change the DOM to reflect the Gallery Image
  var images = $scope.gallery[galleryLocation -1].galImages[thumbIndex -1];
  large.attr('src', 'assets/img/transparent.png'); //Chrome Issue. img src must have an image

  //IE Crap because object Fit doesnt Work

      // Assign image source to variable
      var asset = 'assets/img/galleries/' + images.imgLarge;
      // Add background image asset to CSS Same as style.css
      large.css('backgroundImage', 'url(' + asset + ')');
      large.css('backgroundSize', 'contain');
      large.css('backgroundPosition', 'center center');

  $(large).on('load',function(){
    large.animate({opacity: '1'}, 1000);
  });
};

}]);

app.controller('AwardsController', ['$scope', '$http', function($scope, $http) {
  $scope.awards = null;
  $http.get('../assets/js/data/awards.json')
      .success(function(data) {
          $scope.awards = data;
      })
      .error(function(data,status,error,config){
          $scope.awards = [{heading:"Error",description:"Could not load json data"}];
      });
}]);

app.controller('ExhibitionsController', ['$scope', '$http', function($scope, $http) {
  $scope.exhibs = null;
  $http.get('../assets/js/data/exhibitions.json')
      .success(function(data) {
          $scope.exhibs = data;
      })
      .error(function(data,status,error,config){
          $scope.exhibs = [{heading:"Error",description:"Could not load json data"}];
      });

}]);

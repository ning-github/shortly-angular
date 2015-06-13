angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url) {
    console.log('add link fired');
    Links.insertLink(url).then(function(link) {
      $scope.link = link;
    });
  };
});

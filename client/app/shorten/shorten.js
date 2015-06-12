angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.insertLink($location).then(function(link) {
      $scope.link = link;
    });
  };
});

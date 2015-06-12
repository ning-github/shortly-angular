angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function(){
    // must use promise .then here
    Links.retrieveLinks().then(function(links){
      $scope.data.links = links;
    });
  };

  $scope.init = function() {
    $scope.getLinks();
  };

  $scope.init();

});

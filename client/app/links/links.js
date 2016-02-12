angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // When user adds a new link, put it in the collection
  $scope.links = Links.getAll();

  $scope.addLink = function () {
    Links.addOne($scope.newLink);
  };

});

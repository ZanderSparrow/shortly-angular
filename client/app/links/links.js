angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // When user adds a new link, put it in the collection
  Links.getAll()
  .then(function (res) {
    $scope.links = res;
  });

  $scope.addLink = function () {
    Links.addOne($scope.newLink)
    .then(function (res) {
      $scope.links.push(res.data);
    });
  };

});

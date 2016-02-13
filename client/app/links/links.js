angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // When user adds a new link, put it in the collection
  $scope.data = {};
  Links.getAll()
  .then(function (res) {
    $scope.data.links = res;
  });

  $scope.addLink = function () {
    Links.addOne({url: $scope.newLink})
    .then(function (res) {
      $scope.data.links.push(res.data);
    });
  };

});

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.data = {};
  $scope.loading = false;

  $scope.addLink = function () {
    $scope.link.url = $scope.newLink;
    $scope.loading = true;
    Links.addOne($scope.link)
    .then(function (res) {
      $scope.data.link = res.data;
      $location.path('/links');
    });
  };
});

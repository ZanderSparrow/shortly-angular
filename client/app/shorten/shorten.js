angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.data = Links.data;

  $scope.addLink = function () {
    $scope.link.url = $scope.newLink;
    Links.addOne($scope.link)
    .then(function (res) {
      $scope.data.links.push(res.data);
    });
  };
});

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // When user adds a new link, put it in the collection
  $scope.data = {};
  $scope.loggedIn = true;
  Links.getAll()
  .then(function (res) {
    $scope.data.links = res;
  })
  .catch(function(error) {
    console.error(error);
  });

});

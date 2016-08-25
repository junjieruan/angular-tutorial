'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main/:id', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function View2Ctrl($scope,$routeParams,$http) {

        $http.get("../books/"+$routeParams.id+".json").then(function(response){
          $scope.book=response.data;
           // $scope.setImage(book.images[0]);
        })

        $scope.setImage = function setImage(imageUrl) {
          $scope.mainImageUrl = imageUrl;
        };
});
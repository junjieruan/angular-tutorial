'use strict';

angular.module('myApp.mainView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'mainView/mainView.html',
    controller: 'mainViewCtrl'
  });
}])

.controller('mainViewCtrl', function mainViewCtrl($http,$scope) {

        $http.get("../books/firstbooks.json").then(function(response){
            $scope.firstbooks=response.data;
        })

        $http.get("../books/secondbooks.json").then(function(response){
            $scope.secondbooks=response.data;
        })

        $http.get("../books/thirdbooks.json").then(function(response){
            $scope.thirdbooks=response.data;
        })

        $http.get("../books/books.json").then(function(response){
            $scope.books=response.data;
        })

        $scope.setImage=function(imageUrl,name){                     //动态显示图片
            $scope.mainImageUrl=imageUrl;
            $scope.mainName=name;
        }

        $scope.orderProp="year";
});
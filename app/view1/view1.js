'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$timeout',function($scope,$timeout) {
    //$scope.time = new Date();
    $scope.clock = new Date();
    var updateTime = function () {
      $scope.clock = new Date();
    };
    setInterval(function () {
      $scope.$apply(updateTime);
    },1000);
}]);
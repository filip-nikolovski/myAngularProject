'use strict';

/**
 * @ngdoc function
 * @name myProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myProjectApp
 */
angular.module('myProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

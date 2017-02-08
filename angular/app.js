(function(angular) {
  'use strict';
var mainApp = angular.module('mainApp', []);

mainApp.controller('mainController', ['$scope', function($scope) {
    $scope.name = 'world';

    $scope.setName = function() {
        $scope.name = 'set';
    };

    $scope.reset = function() {
        $scope.name = 'world';
    };
}]);
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
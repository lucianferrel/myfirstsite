(function() {
    'use strict';

    angular
        .module('myFirstApp')
        .controller('homeController', homeController);

    function homeController() {

        var vm = this;
        vm.name = 'world';

        vm.setName = function() {
            vm.name = 'set';
        };

        vm.reset = function() {
            vm.name = 'world';
        };

    }
})();

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
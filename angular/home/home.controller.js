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

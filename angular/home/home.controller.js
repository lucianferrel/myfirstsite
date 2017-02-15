(function() {
    'use strict';

    angular
        .module('myFirstApp')
        .controller('homeController', homeController);

    function homeController() {

        var vm = this;
        vm.capital = '70000';
        vm.interest = '3';
        vm.period = '0';
        vm.newCapital = '70000';

        vm.evaluate = function() {
            vm.newCapital = '100000';
        };

        vm.reset = function() {
            vm.capital = '70000';
            vm.interest = '3';
            vm.period = '0';
            vm.newCapital = '70000';
        };

    }
})();

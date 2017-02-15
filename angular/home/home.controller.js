(function() {
    'use strict';

    angular
        .module('myFirstApp')
        .controller('homeController', homeController);

    function homeController() {

        var vm = this;
        vm.capital = '70000';
        vm.revenu = '13000';
        vm.interest = '3';
        vm.period = '0';
        vm.newCapital = '70000';

        vm.evaluate = function() {
            for (var i = 0; i < vm.period; i++) {
                vm.newCapital = (vm.newCapital + vm.revenu)*(1+vm.interest*0.01);
            }
        };

        vm.reset = function() {
            vm.capital = '70000';
            vm.revenu = '13000';
            vm.interest = '3';
            vm.period = '0';
            vm.newCapital = '70000';
        };

    }
})();

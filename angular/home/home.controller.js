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
            vm.newCapital = vm.capital;
            for (var i = 0; i < Number(vm.period); i++) {
                vm.newCapital = (Number(vm.newCapital) + Number(vm.revenu))*(1+Number(vm.interest)*0.01);
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

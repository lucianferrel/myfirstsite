(function() {
    'use strict';

    angular
        .module('myFirstApp')
        .controller('homeController', homeController);

    function homeController() {

        var vm = this;
        vm.capital = '70000';
        vm.revenu = '13000';
        vm.reval = '400';
        vm.interest = '3';
        vm.period = '0';
        vm.newCapital = '70000';
        vm.newRevenu = '13000';

        vm.evaluate = function() {
            vm.newCapital = vm.capital;
            vm.newRevenu = vm.revenu;
            for (var i = 0; i < Number(vm.period); i++) {
                var isr = ((Number(vm.newCapital))*(Number(vm.interest)*0.01) + Number(vm.newRevenu))*0.14 - 1358;
                vm.newCapital = (Number(vm.newCapital))*(1+Number(vm.interest)*0.01) + Number(vm.newRevenu) - isr;
                vm.newRevenu = Number(vm.newRevenu) + Number(vm.reval);
            }
        };

        vm.reset = function() {
            vm.capital = '70000';
            vm.revenu = '13000';
            vm.interest = '3';
            vm.period = '0';
            vm.newCapital = '70000';
            vm.newRevenu = '13000';
        };

    }
})();

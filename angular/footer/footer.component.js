(function() {
    'use strict';

    angular
        .module('myFirstApp')
        .component('footerMain', {
                templateUrl: 'angular/footer/footer.view.html',
                controller: 'footerController as footerCtrl'
        })
        .controller('footerController', footerController);

    footerController.$inject = [];

    function footerController() {
        var vm = this;

    }
})();

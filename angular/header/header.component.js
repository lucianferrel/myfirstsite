(function() {
    'use strict';

    angular
        .module('myFirstApp')
        .component('headerMain', {
                templateUrl: 'angular/header/header.view.html',
                controller: 'headerController as headerCtrl'
            }
        )
        .controller('headerController', headerController);


    function headerController() {
        var vm = this;
    }

})();
(function() {
    'use strict';

	angular
        .module('myFirstApp')
        .config(config);

    function config(($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'angular/home/home.view.html',
                controller: 'homeController as homeCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();

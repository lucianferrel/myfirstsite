(function() {
    'use strict';

	angular
        .module('myFirstApp')
        .config(config);

    function config(($routeProvider) {
        $routeProvider
            .when('/', {
                title: 'Main',
                templateUrl: 'angular/home/home.view.html',
                controller: 'homeController as homeCtrl',
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();

var app = angular.module('adminlte', ['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'DummyCtrl',
                templateUrl: 'views/starter.html',
                params: {
                    title: 'Home',
                    desc: 'Optional subtitle'
                }
            })
            .when('/page1', {
                controller: 'DummyCtrl',
                templateUrl: 'views/starter.html',
                params: {
                    title: 'Page 1'
                }
            })
            .when('/page2', {
                controller: 'DummyCtrl',
                templateUrl: 'views/starter.html',
                params: {
                    title: 'Page 2',
                    desc: 'Description of Page 2'
                }
            })
            .otherwise({
                controller: 'DummyCtrl',
                templateUrl: 'views/starter.html'
            });

    });
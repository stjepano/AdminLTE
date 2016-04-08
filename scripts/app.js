var app = angular.module('adminlte', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                controller: 'DummyCtrl',
                templateUrl: 'views/empty.html',
                params: {
                    title: 'Home',
                    desc: 'Optional subtitle'
                }
            })
            .when('/ui-elements/general', {
                controller: 'DummyCtrl',
                templateUrl: 'views/ui-elements/general.html',
                params: {
                    title: 'General UI',
                    desc: 'Preview of UI elements'
                }
            })
            .when('/ui-elements/icons', {
                controller: 'DummyCtrl',
                templateUrl: 'views/ui-elements/icons.html',
                params: {
                    title: 'Icons',
                    desc: 'a set of beautiful icons'
                }
            })
            .when('/ui-elements/buttons', {
                controller: 'DummyCtrl',
                templateUrl: 'views/ui-elements/buttons.html',
                params: {
                    title: 'Buttons',
                    desc: 'a set of buttons'
                }
            })
            .when('/page1', {
                controller: 'DummyCtrl',
                templateUrl: 'views/empty.html',
                params: {
                    title: 'Page 1'
                }
            })
            .when('/page2', {
                controller: 'DummyCtrl',
                templateUrl: 'views/empty.html',
                params: {
                    title: 'Page 2',
                    desc: 'Description of Page 2'
                }
            })
            .when('/multi', {
                controller: 'DummyCtrl',
                templateUrl: 'views/empty.html',
                params: {
                    title: 'Multi',
                    desc: 'Description of Multi'
                }
            })
            .when('/multi/first', {
                controller: 'DummyCtrl',
                templateUrl: 'views/empty.html',
                params: {
                    title: 'Multi First',
                    desc: 'Description of Multi First'
                }
            })
            .when('/multi/second', {
                controller: 'DummyCtrl',
                templateUrl: 'views/empty.html',
                params: {
                    title: 'Multi Second',
                    desc: 'Description of Multi second'
                }
            })
            .otherwise({
                redirectTo: '/'
            });

    });
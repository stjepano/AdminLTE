var app = angular.module('adminlte', ['ngRoute', 'ui.mask', 'ui.bootstrap', 'ngAnimate', 'ui.bootstrap-slider', 'rt.select2', 'ngSanitize', 'ngBootstrap', 'textAngular', 'ui.tinymce'])
.config(function($routeProvider) {
    "use strict";

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
    .when('/ui-elements/sliders', {
        controller: 'DummyCtrl',
        templateUrl: 'views/ui-elements/sliders.html',
        params: {
            title: 'Sliders',
            desc: 'range sliders'
        }
    })
    .when('/ui-elements/timeline', {
        controller: 'DummyCtrl',
        templateUrl: 'views/ui-elements/timeline.html',
        params: {
            title: 'Timeline',
            desc: 'example'
        }
    })
    .when('/ui-elements/modals', {
        controller: 'DummyCtrl',
        templateUrl: 'views/ui-elements/modals.html',
        params: {
            title: 'Modals',
            desc: 'new'
        }
    })
    .when('/forms/general', {
        controller: 'DummyCtrl',
        templateUrl: 'views/forms/general.html',
        params: {
            title: 'General Form Elements',
            desc: 'Preview'
        }
    })
    .when('/forms/advanced', {
        controller: 'DummyCtrl',
        templateUrl: 'views/forms/advanced.html',
        params: {
            title: 'Advanced Form Elements',
            desc: 'Preview'
        }
    })
    .when('/forms/editors', {
        controller: 'DummyCtrl',
        templateUrl: 'views/forms/editors.html',
        params: {
            title: 'Text Editors',
            desc: 'Advanced form element'
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

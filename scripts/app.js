var app = angular.module('adminlte', ['ui.mask', 'ui.bootstrap',
'ngAnimate', 'ui.bootstrap-slider', 'rt.select2', 'ngSanitize', 'ngBootstrap',
'textAngular', 'ui.tinymce', 'ui.codemirror', 'ui.grid', 'ui.grid.selection',
'ui.calendar', 'ui.router'])
.config(function($stateProvider) {
    "use strict";

    $stateProvider
    .state('index', {
        url: '/',
        controller: 'DummyCtrl',
        templateUrl: 'views/empty.html',
        data: {
            title: 'Home',
            desc: 'Optional subtitle'
        }
    })
    .state('ui-elements', {
        abstract: true,
        url: '/ui-elements',
        controller: 'DummyCtrl',
        template: '<ui-view/>'
    })
    .state('ui-elements.general', {
        templateUrl: 'views/ui-elements/general.html',
        url: '/general',
        data: {
            title: 'General UI',
            desc: 'Preview of UI elements'
        }
    })
    .state('ui-elements.icons', {
        templateUrl: 'views/ui-elements/icons.html',
        url: '/icons',
        data: {
            title: 'Icons',
            desc: 'a set of beautiful icons'
        }
    })
    .state('ui-elements.buttons', {
        templateUrl: 'views/ui-elements/buttons.html',
        url: '/buttons',
        data: {
            title: 'Buttons',
            desc: 'a set of buttons'
        }
    })
    .state('ui-elements.sliders', {
        templateUrl: 'views/ui-elements/sliders.html',
        url: '/sliders',
        data: {
            title: 'Sliders',
            desc: 'range sliders'
        }
    })
    .state('ui-elements.timeline', {
        templateUrl: 'views/ui-elements/timeline.html',
        url: '/timeline',
        data: {
            title: 'Timeline',
            desc: 'example'
        }
    })
    .state('ui-elements.modals', {
        templateUrl: 'views/ui-elements/modals.html',
        url: '/modals',
        data: {
            title: 'Modals',
            desc: 'new'
        }
    })
    .state('forms', {
        abstract: true,
        url: '/forms',
        controller: 'DummyCtrl',
        template: '<ui-view/>'
    })
    .state('forms.general', {
        templateUrl: 'views/forms/general.html',
        url: '/general',
        data: {
            title: 'General Form Elements',
            desc: 'Preview'
        }
    })
    .state('forms.advanced', {
        templateUrl: 'views/forms/advanced.html',
        url: '/advanced',
        data: {
            title: 'Advanced Form Elements',
            desc: 'Preview'
        }
    })
    .state('forms.editors', {
        templateUrl: 'views/forms/editors.html',
        url: '/editors',
        data: {
            title: 'Text Editors',
            desc: 'Advanced form element'
        }
    })
    .state('forms.codemirror', {
        templateUrl: 'views/forms/codemirror.html',
        url: '/codemirror',
        data: {
            title: 'CodeMirror',
            desc: 'Advanced code editor'
        }
    })
    .state('tables', {
        abstract: true,
        url: '/tables',
        controller: 'DummyCtrl',
        template: '<ui-view/>'
    })
    .state('tables.simple', {
        templateUrl: 'views/tables/simple.html',
        url: '/simple',
        data: {
            title: 'Simple Tables',
            desc: 'preview of simple tables'
        }
    })
    .state('tables.uigrid', {
        templateUrl: 'views/tables/uigrid.html',
        url: '/uigrid',
        data: {
            title: 'Angular UI Grid',
            desc: 'A data grid for AngularJS'
        }
    })
    .state('calendar', {
        url: '/calendar',
        controller: 'CalendarCtrl',
        templateUrl: 'views/calendar.html',
        data: {
            title: 'Calendar',
            desc: 'Angular UI Calendar'
        }
    });

});

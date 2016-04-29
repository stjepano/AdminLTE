angular.module('adminlte').controller('MenuCtrl', ['$rootScope', '$scope', '$state', 'Session', function($rootScope, $scope, $state, session) {
    'use strict';

    var self = this;
    this.user = session.user();
    this.searchTerm = '';
    this.menu = {
        header: 'MENU',
        items: [
            {
                sref: 'index',
                text: 'Home',
                icon: 'fa fa-link'
            },
            {
                text: 'UI Elements',
                icon: 'fa fa-laptop',
                items: [
                    { sref: 'ui-elements.general', text: 'General', icon: 'fa fa-circle-o'},
                    { sref: 'ui-elements.icons', text: 'Icons', icon: 'fa fa-circle-o'},
                    { sref: 'ui-elements.buttons', text: 'Buttons', icon: 'fa fa-circle-o'},
                    { sref: 'ui-elements.sliders', text: 'Sliders', icon: 'fa fa-circle-o'},
                    { sref: 'ui-elements.timeline', text: 'Timeline', icon: 'fa fa-circle-o'},
                    { sref: 'ui-elements.modals', text: 'Modals', icon: 'fa fa-circle-o'},
                ]
            },
            {
                text: 'Forms',
                icon: 'fa fa-edit',
                items: [
                    { sref: 'forms.general', text: 'General Elements', icon: 'fa fa-circle-o' },
                    { sref: 'forms.advanced', text: 'Advanced Elements', icon: 'fa fa-circle-o' },
                    { sref: 'forms.editors', text: 'Editors', icon: 'fa fa-circle-o' },
                    { sref: 'forms.codemirror', text: 'CodeMirror', icon: 'fa fa-circle-o' }
                ]
            },
            {
                text: 'Tables',
                icon: 'fa fa-table',
                items: [
                    { sref: 'tables.simple', text: 'Simple tables', icon: 'fa fa-circle-o' },
                    { sref: 'tables.uigrid', text: 'UI Grid', icon: 'fa fa-circle-o' }
                ]
            },
            {
                sref: 'calendar',
                text: 'Calendar',
                icon: 'fa fa-calendar'
            }
        ]
    };

    var toggleMenuItemsActiveState = function(menu, path) {
        if ( !menu.items ) return;
        menu.items.forEach(function(menuItem) {
            var itemPath = menuItem.href;
            if ( menuItem.href && menuItem.href.startsWith('#') ) {
                itemPath = menuItem.href.substring(1);
            }

            if ( itemPath === path ) {
                menuItem.active = true;
            } else {
                menuItem.active = false;
            }

            toggleMenuItemsActiveState(menuItem, path);
        });
    };

    $rootScope.$on('$routeChangeSuccess', function(event, next) {
        var path = next.$$route.originalPath;
        toggleMenuItemsActiveState(self.menu, path);
    });

    this.toggleStatus = function() {
        session.toggleStatus();
    };

    this.search = function() {
        console.log('Searching for ' + self.searchTerm);
        self.searchTerm = '';
    };
}]);

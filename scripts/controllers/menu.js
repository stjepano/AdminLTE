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

    var toggleMenuItemsActiveState = function(menu) {
        if ( !menu.items ) return 0;
        var sum = 0;
        menu.items.forEach(function(menuItem) {
            if ( $state.is(menuItem.sref) ) {
                menuItem.active = true;
                sum += 1;
            } else {
                menuItem.active = false;
            }

            sum += toggleMenuItemsActiveState(menuItem);
        });
        if ( sum > 0 ) {
            menu.active = true;
        }
        return sum;
    };

    $rootScope.$on('$stateChangeSuccess', function(event, next) {
        toggleMenuItemsActiveState(self.menu);
    });

    toggleMenuItemsActiveState(self.menu);

    this.toggleStatus = function() {
        session.toggleStatus();
    };

    this.search = function() {
        console.log('Searching for ' + self.searchTerm);
        self.searchTerm = '';
    };


}]);

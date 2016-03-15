angular.module('adminlte').controller('MenuCtrl', ['$rootScope', '$scope', '$route', 'Session', function($rootScope, $scope, $route, session) {
    var self = this;
    this.user = session.user();
    this.searchTerm = '';
    this.menu = {
        header: 'MENU',
        items: [
            {
                href: '#/',
                text: 'Home',
                icon: 'fa fa-link'
            },
            {
                href: '#/page1',
                text: 'Page 1',
                icon: 'fa fa-link'
            },
            {
                href: '#/page2',
                text: 'Page 2',
                icon: 'fa fa-link'
            },
            {
                text: 'Multi level',
                href: '#/multi',
                icon: 'fa fa-link',
                items: [{
                    href: '#/multi/first',
                    text: 'Link in level 2'
                }, {
                    href: '#/multi/second',
                    text: 'Link in level 2'
                }]
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

    $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
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
angular.module('adminlte').controller('MenuCtrl', ['$scope', 'Session', function($scope, session) {
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
                icon: 'fa fa-link',
                items: [{
                    href: '#',
                    text: 'Link in level 2'
                }, {
                    href: '#',
                    text: 'Link in level 2'
                }]
            }
        ]
    };

    this.toggleStatus = function() {
        session.toggleStatus();
    };

    this.search = function() {
        console.log('Searching for ' + self.searchTerm);
        self.searchTerm = '';
    };
}]);
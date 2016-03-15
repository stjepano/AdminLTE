angular.module('adminlte')
    .directive('userPanel', function() {
        var directive = {
            scope: {
                user: '=user',
                toggleStatus: '&?'
            },
            templateUrl: 'scripts/templates/user_panel.html'
        };

        return directive;
    });
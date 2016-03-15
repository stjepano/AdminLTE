angular.module('adminlte')
    .directive('userDropdown', ['AdminLTEService', function(AdminLTEService) {
        var o = AdminLTEService.options();
        var directive = {
            restrict: 'A',
            scope: {
                user: '=',
                logout: '&?'
            },
            templateUrl: 'scripts/templates/user_dropdown.html'
        };

        return directive;
    }]);
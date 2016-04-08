angular.module('adminlte')
    .directive('callout', function() {
        var directive = {
            scope: {
                type: '=?',
                title: '=?'
            },
            controller: function($scope) {
                $scope.type = angular.isDefined($scope.type) ? $scope.type : 'info'
            },
            transclude: true,
            templateUrl: 'scripts/templates/callout.html'
        };

        return directive;
    });
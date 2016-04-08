angular.module('adminlte')
    .directive('box', function() {
        var directive = {
            scope: {
                type: '@?',
                title: '@?',
                iconClass: '@?',
                customClass: '@?',
                headerBorder: '=?',
                headerClass: '@?',
                bodyClass: '@?',
            },
            controller: function($scope) {
                $scope.type = angular.isDefined($scope.type) ? $scope.type : 'default';
                $scope.headerBorder = angular.isDefined($scope.headerBorder) ? $scope.headerBorder : true;
                $scope.headerClasses = angular.isDefined($scope.headerClass) ? $scope.headerClass + ' ' : '';
                if ( $scope.headerBorder ) {
                    $scope.headerClasses = 'with-border';
                }
            },
            transclude: true,
            templateUrl: 'scripts/templates/box.html'
        };

        return directive;
    });
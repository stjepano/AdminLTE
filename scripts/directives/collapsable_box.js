angular.module('adminlte')
    .directive('collapsableBox', function() {
        var directive = {
            scope: {
                type: '@?',
                title: '@?',
                iconClass: '@?',
                customClass: '@?',
                headerBorder: '=?',
                headerClass: '@?',
                bodyClass: '@?',
                collapsed: '=?'
            },
            controller: function($scope) {
                $scope.type = angular.isDefined($scope.type) ? $scope.type : 'default';
                $scope.headerBorder = angular.isDefined($scope.headerBorder) ? $scope.headerBorder : true;
                $scope.headerClasses = angular.isDefined($scope.headerClass) ? $scope.headerClass + ' ' : '';
                if ( $scope.headerBorder ) {
                    $scope.headerClasses = 'with-border';
                }


                $scope.collapsed = angular.isDefined($scope.collapsed) ? $scope.collapsed : false;
                $scope.toggleCollapsed = function() {
                    $scope.collapsed = !$scope.collapsed;
                };
            },
            transclude: true,
            templateUrl: 'scripts/templates/collapsable_box.html'
        };

        return directive;
    });
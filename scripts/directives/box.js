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
            link: function(scope, element) {
                if ( angular.isDefined(scope.titleEl) ) {
                    element.children('div.box').children('div.box-header').append(scope.titleEl);
                }
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
    })
    .directive('boxHeader', function($sce) {
        var directive = {
            require: '^box',
            controller: function() {

            },
            link: function(scope, element, attrs, boxCtrl, transclude) {
                transclude(scope, function(clone) {
                    scope.$parent.titleEl = clone;
                });
            },
            scope: false,
            transclude: true,
            template: ''
        };

        return directive;
    });
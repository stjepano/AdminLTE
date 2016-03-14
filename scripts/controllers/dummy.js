angular.module('adminlte')
    .controller('DummyCtrl', ['$scope', '$route', function($scope, $route) {

        $scope.title = $route.current.$$route.params.title;
        $scope.desc = $route.current.$$route.params.desc || '';

    }]);
angular.module('adminlte').directive('icheck', function($timeout, $parse) {
    'use strict';
    var directive = {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value = $attrs['value'];
                var icheckStyle = $attrs['icheck'] || 'minimal-blue';



                $scope.$watch($attrs['ngModel'], function(newValue) {
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: 'icheckbox_' + icheckStyle,
                    radioClass: 'iradio_' + icheckStyle
                }).on('ifChanged', function(event) {
                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                        $scope.$apply(function() {
                            return ngModel.$setViewValue(event.target.checked);
                        });
                    }
                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                        return $scope.$apply(function() {
                            return ngModel.$setViewValue(value);
                        });
                    }
                });
            });
        }
    };
    return directive;
});

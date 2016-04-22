angular.module('adminlte')
    .directive('timepicker', function() {
        'use strict';
        var directive = {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var $ = jQuery;
                $(el).timepicker(scope.$eval(attrs.timepicker));
            }
        };
        return directive;
    });

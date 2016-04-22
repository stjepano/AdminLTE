angular.module('adminlte')
    .directive('colorpicker', function() {
        'use strict';
        var directive = {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var $ = jQuery;
                $(el).colorpicker(scope.$eval(attrs.colorpicker));
            }
        };
        return directive;
    });

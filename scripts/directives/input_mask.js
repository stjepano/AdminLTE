angular.module('adminlte')
    .directive('inputMask', function() {
        'use strict';
        var directive = {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var $ = jQuery;
                $(el).inputmask(scope.$eval(attrs.inputMask));
                $(el).on('change', function(e) {

                });
            }
        };
        return directive;
    });

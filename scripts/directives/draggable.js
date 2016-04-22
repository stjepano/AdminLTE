angular.module('adminlte')
    .directive('draggable', function() {
        'use strict';
        var directive = {
            restrict: 'A',
            link: function(scope, el, attrs) {
                var $ = jQuery;
                $(el).draggable(scope.$eval(attrs.draggable));
            }
        };
        return directive;
    })

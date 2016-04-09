angular.module('adminlte').directive("ionRangeSlider", function () {
        var directive = {
            restrict: "E",
            scope: {
                min: "=",
                max: "=",
                type: "@",
                prefix: "@",
                maxPostfix: "@",
                prettify: "@",
                grid: "=?",
                gridMargin: "@",
                postfix: "@",
                step: "@",
                hideMinMax: "=?",
                hideFromTo: "=?",
                ngModel: "=",
                disable: "="
            },
            replace: true,
            link: function (scope, element) {
                var internalChangeFlag = false;
                scope.min = angular.isDefined(scope.min)?scope.min:0;
                scope.max = angular.isDefined(scope.max)?scope.max:100;
                scope.hideMinMax = angular.isDefined(scope.hideMinMax)?scope.hideMinMax:false;
                scope.hideFromTo = angular.isDefined(scope.hideFromTo)?scope.hideFromTo:false;
                scope.grid = angular.isDefined(scope.grid)?scope.grid:false;
                element.ionRangeSlider({
                    min: scope.min,
                    max: scope.max,
                    type: scope.type,
                    prefix: scope.prefix,
                    max_postfix: scope.maxPostfix,
                    prettify: scope.prettify,
                    grid: scope.grid,
                    gridMargin: scope.gridMargin,
                    postfix: scope.postfix,
                    step: scope.step,
                    hide_min_max: scope.hideMinMax,
                    hide_from_to: scope.hideFromTo,
                    from: scope.ngModel.from,
                    to: scope.ngModel.to,
                    disable: scope.disable,
                    onChange: function (a) {
                        internalChangeFlag = true;
                        scope.ngModel.from = a.from;
                        scope.ngModel.to = a.to;
                        scope.$apply();
                        internalChangeFlag = false;
                    }
                });

                scope.$watch('disable', function(value) {
                    element.data('ionRangeSlider').update({
                        disable: value
                    });
                });

                scope.$watch("min", function (value) {
                    element.data("ionRangeSlider").update({
                        min: value
                    });
                });

                scope.$watch('max', function (value) {
                    element.data("ionRangeSlider").update({
                        max: value
                    });
                });

                scope.$watch('ngModel.from', function(value) {
                    if ( internalChangeFlag === true ) return;
                    element.data("ionRangeSlider").update({
                        from: value
                    });
                });

                scope.$watch('ngModel.to', function(value) {
                    if ( internalChangeFlag === true ) return;
                    element.data("ionRangeSlider").update({
                        to: value
                    });
                });
            }
        };

        return directive;
    });
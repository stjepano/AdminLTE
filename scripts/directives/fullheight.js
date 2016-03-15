angular.module('adminlte')
    .directive('fullHeight', ['$window', 'AdminLTEService', function($window, AdminLTEService) {
        return function(scope, element) {
            var win = angular.element($window);

            var opts = AdminLTEService.options();

            var changeHeight = function() {
                if (jQuery('body').hasClass('fixed')) {
                    element.css('min-height', win.height() - jQuery('.main-footer').outerHeight());
                } else {
                    var neg = jQuery('.main-header').outerHeight() + $('.main-footer').outerHeight();
                    var sidebar_height = jQuery(".sidebar").height();
                    if (win.height() >= sidebar_height) {
                        element.css('min-height', win.height() - neg);
                        postSetWidth = win.height() - neg;
                    } else {
                        element.css('min-height', sidebar_height);
                        postSetWidth = sidebar_height;
                    }

                    if ( opts.controlSidebarOptions && opts.controlSidebarOptions.selector ) {
                        var controlSidebar = jQuery(opts.controlSidebarOptions.selector);
                        if (typeof controlSidebar !== "undefined") {
                            if (controlSidebar.height() > postSetWidth)
                                element.css('min-height', controlSidebar.height());
                        }
                    }
                }
            };

            win.bind('resize', changeHeight);
            changeHeight();
        };
    }]);
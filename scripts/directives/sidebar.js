angular.module('adminlte')
    .directive('sidebar', ['$window', 'AdminLTEService', function($window, AdminLTEService) {
        return function(scope, element) {
            var opts = AdminLTEService.options();
            var screenSizes = opts.screenSizes;

            var win = angular.element($window);

            var fixSidebar = function () {
                //Make sure the body tag has the .fixed class
                if (!jQuery("body").hasClass("fixed")) {
                    if (typeof jQuery.fn.slimScroll != 'undefined') {
                        element.slimScroll({destroy: true}).height("auto");
                    }
                    return;
                } else if (typeof $.fn.slimScroll == 'undefined' && console) {
                    console.error("Error: the fixed layout requires the slimscroll plugin!");
                }
                //Enable slimscroll for fixed layout
                if (jQuery.AdminLTE.options.sidebarSlimScroll) {
                    if (typeof jQuery.fn.slimScroll != 'undefined') {
                        //Destroy if it exists
                        element.slimScroll({destroy: true}).height("auto");
                        //Add slimscroll
                        element.slimScroll({
                            height: (win.height() - jQuery(".main-header").height()) + "px",
                            color: "rgba(0,0,0,0.2)",
                            size: "3px"
                        });
                    }
                }
            };

            win.bind('resize', fixSidebar);
            fixSidebar();
        };

        if (jQuery.AdminLTE.options.sidebarPushMenu && (
            jQuery.AdminLTE.options.sidebarExpandOnHover
                || (jQuery('body').hasClass('fixed')
                && jQuery('body').hasClass('sidebar-mini')))) {
            expandOnHover();
        };

        var expandOnHover = function () {
            var screenWidth = jQuery.AdminLTE.options.screenSizes.sm - 1;
            //Expand sidebar on hover
            element.hover(function () {
                if (jQuery('body').hasClass('sidebar-mini')
                    && jQuery("body").hasClass('sidebar-collapse')
                    && win.width() > screenWidth) {
                    expand();
                }
            }, function () {
                if (jQuery('body').hasClass('sidebar-mini')
                    && jQuery('body').hasClass('sidebar-expanded-on-hover')
                    && win.width() > screenWidth) {
                    collapse();
                }
            });
        };
        var expand = function () {
            jQuery("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
        };
        var collapse = function () {
            if (jQuery('body').hasClass('sidebar-expanded-on-hover')) {
                jQuery('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
            }
        };
    }]);
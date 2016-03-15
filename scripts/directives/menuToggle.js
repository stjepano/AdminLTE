angular.module('adminlte')
    .directive('menuToggle', ['$window', 'AdminLTEService',function($window, AdminLTEService) {
        return function(scope, element) {
            var win = angular.element($window);

            var opts = AdminLTEService.options();

            var sidebarPushMenu = opts.sidebarPushMenu;
            if ( !sidebarPushMenu ) {
                return;
            }
            var screenSizes = opts.screenSizes;

            element.on('click', function (e) {
                e.preventDefault();

                //Enable sidebar push menu
                if (win.width() > (screenSizes.sm - 1)) {
                    if (jQuery("body").hasClass('sidebar-collapse')) {
                        jQuery("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
                    } else {
                        jQuery("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
                    }
                }
                //Handle sidebar push menu for small screens
                else {
                    if (jQuery("body").hasClass('sidebar-open')) {
                        jQuery("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
                    } else {
                        jQuery("body").addClass('sidebar-open').trigger('expanded.pushMenu');
                    }
                }
            });
        };
    }]);
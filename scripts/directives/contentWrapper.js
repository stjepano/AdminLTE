angular.module('adminlte')
    .directive('contentWrapper', ['$window', 'AdminLTEService', function($window, AdminLTEService) {
        return function(scope, element) {
            var win = angular.element($window);

            var opts = AdminLTEService.options();
            var screenSizes = opts.screenSizes;

            if ( opts.sidebarPushMenu ) {
                element.click(function () {
                    //Enable hide menu when clicking on the content-wrapper on small screens
                    if (win.width() <= (screenSizes.sm - 1) && jQuery("body").hasClass("sidebar-open")) {
                        jQuery("body").removeClass('sidebar-open');
                    }
                });
            }
        };
    }]);
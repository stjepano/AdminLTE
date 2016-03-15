angular.module('adminlte')
    .directive('messagesDropdown', ['AdminLTEService', function(AdminLTEService) {
        var o = AdminLTEService.options();
        var directive = {
            restrict: 'A',
            scope: {
                messages: '='
            },
            link: function(scope, element, attr) {
                if ( typeof jQuery.fn.slimscroll !== 'undefined' ) {
                    element.find(".menu").slimscroll({
                        height: o.navbarMenuHeight,
                        alwaysVisible: false,
                        size: o.navbarMenuSlimscrollWidth
                    }).css("width", "100%");
                }
            },
            templateUrl: 'scripts/templates/messages_dropdown.html'
        };

        return directive;
    }]);
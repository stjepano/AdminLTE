angular.module('adminlte')
    .directive('adminlte', ['$window', 'AdminLTEService', function($window, AdminLTEService) {
        return function(scope, element) {
            var $ = jQuery;

            //Fix for IE page transitions
            $("body").removeClass("hold-transition");

            var o = AdminLTEService.options();

            if (o.enableControlSidebar) {
                $.AdminLTE.controlSidebar.activate();
            }

            //Add slimscroll to navbar dropdown
            if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
                $(".navbar .menu").slimscroll({
                    height: o.navbarMenuHeight,
                    alwaysVisible: false,
                    size: o.navbarMenuSlimscrollWidth
                }).css("width", "100%");
            }

            //Activate Bootstrap tooltip
            if (o.enableBSToppltip && typeof $.tooltip != 'undefined') {
                $('body').tooltip({
                    selector: o.BSTooltipSelector
                });
            }

            //Activate box widget
            if (o.enableBoxWidget) {
                $.AdminLTE.boxWidget.activate();
            }

            //Activate fast click
            if (o.enableFastclick && typeof FastClick != 'undefined') {
                FastClick.attach(document.body);
            }

            //Activate direct chat widget
            if (o.directChat.enable) {
                $(document).on('click', o.directChat.contactToggleSelector, function () {
                    var box = $(this).parents('.direct-chat').first();
                    box.toggleClass('direct-chat-contacts-open');
                });
            }

            /*
             * INITIALIZE BUTTON TOGGLE
             * ------------------------
             */
            $('.btn-group[data-toggle="btn-toggle"]').each(function () {
                var group = $(this);
                $(this).find(".btn").on('click', function (e) {
                    group.find(".btn.active").removeClass("active");
                    $(this).addClass("active");
                    e.preventDefault();
                });

            });

        };
    }]);
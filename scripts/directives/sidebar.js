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

            // if change this also change fullheight.changeHeight
            var fix = function() {
                var el = jQuery('.content-wrapper');
                if (jQuery('body').hasClass('fixed')) {
                    el.css('min-height', win.height() - jQuery('.main-footer').outerHeight());
                } else {
                    var neg = jQuery('.main-header').outerHeight() + $('.main-footer').outerHeight();
                    var sidebar_height = jQuery(".sidebar").height();
                    if (win.height() >= sidebar_height) {
                        el.css('min-height', win.height() - neg);
                        postSetWidth = win.height() - neg;
                    } else {
                        el.css('min-height', sidebar_height);
                        postSetWidth = sidebar_height;
                    }

                    var controlSidebar = jQuery(jQuery.AdminLTE.options.controlSidebarOptions.selector);
                    if (typeof controlSidebar !== "undefined") {
                        if (controlSidebar.height() > postSetWidth)
                            el.css('min-height', controlSidebar.height());
                    }
                }
            };

            win.bind('resize', fixSidebar);
            fixSidebar();

            /** Adds multilevel menu support to sidebar */
            var tree = tree = function () {
                var _this = this;
                var animationSpeed = opts.animationSpeed;
                element.on('click', 'li a', function (e) {
                    //Get the clicked link and the next element
                    var $this = jQuery(this);
                    var checkElement = $this.next();

                    //Check if the next element is a menu and is visible
                    if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!jQuery('body').hasClass('sidebar-collapse'))) {
                        //Close the menu
                        checkElement.slideUp(animationSpeed, function () {
                            checkElement.removeClass('menu-open');
                            //Fix the layout in case the sidebar stretches over the height of the window
                            //_this.layout.fix();
                        });
                        checkElement.parent("li").removeClass("active");
                    }
                    //If the menu is not visible
                    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
                        //Get the parent menu
                        var parent = $this.parents('ul').first();
                        //Close all open menus within the parent
                        var ul = parent.find('ul:visible').slideUp(animationSpeed);
                        //Remove the menu-open class from the parent
                        ul.removeClass('menu-open');
                        //Get the parent li
                        var parent_li = $this.parent("li");

                        //Open the target menu and add the menu-open class
                        checkElement.slideDown(animationSpeed, function () {
                            //Add the class active to the parent li
                            checkElement.addClass('menu-open');
                            parent.find('li.active').removeClass('active');
                            parent_li.addClass('active');
                            //Fix the layout in case the sidebar stretches over the height of the window
                            //_this.layout.fix();
                            fix();
                        });
                    }
                    //if this isn't a link, prevent the page from being redirected
                    if (checkElement.is('.treeview-menu')) {
                        e.preventDefault();
                    }
                });
            };

            tree();
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
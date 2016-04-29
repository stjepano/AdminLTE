angular.module('adminlte').directive('menuTree', ['$window','AdminLTEService', function($window, AdminLTEService) {
    'use strict';

    var directive = {};
    directive.restrict = 'E';

    directive.scope = {
        menu: '=menu',
        css: '@'
    };

    directive.templateUrl = 'scripts/templates/menu_tree.html';


    var opts = AdminLTEService.options();
    /** Adds multilevel menu support to sidebar */
    directive.link = function (scope, element, attrs) {
        // if change this also change fullheight.changeHeight
        var win = angular.element($window);

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

                var controlSidebar = jQuery(opts.controlSidebarOptions.selector);
                if (typeof controlSidebar !== "undefined") {
                    if (controlSidebar.height() > postSetWidth)
                        el.css('min-height', controlSidebar.height());
                }
            }
        };

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

    return directive;
}]);

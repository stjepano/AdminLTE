angular.module('adminlte').service('AdminLTEService', function() {

    var $ = jQuery;

    if ( typeof $.AdminLTE == 'undefined' ) {
        $.AdminLTE = {};
    }

    /**
     * Initialize all objects ...
     */
    var initObjects = function (opts) {
        /* BoxWidget
         * =========
         * BoxWidget is a plugin to handle collapsing and
         * removing boxes from the screen.
         *
         * @type Object
         * @usage $.AdminLTE.boxWidget.activate()
         *        Set all your options in the main $.AdminLTE.options object
         */
        $.AdminLTE.boxWidget = {
            selectors: opts.boxWidgetOptions.boxWidgetSelectors,
            icons: opts.boxWidgetOptions.boxWidgetIcons,
            animationSpeed: opts.animationSpeed,
            activate: function (_box) {
                var _this = this;
                if (!_box) {
                    _box = document; // activate all boxes per default
                }
                //Listen for collapse event triggers
                $(_box).on('click', _this.selectors.collapse, function (e) {
                    e.preventDefault();
                    _this.collapse($(this));
                });

                //Listen for remove event triggers
                $(_box).on('click', _this.selectors.remove, function (e) {
                    e.preventDefault();
                    _this.remove($(this));
                });
            },
            collapse: function (element) {
                var _this = this;
                //Find the box parent
                var box = element.parents(".box").first();
                //Find the body and the footer
                var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
                if (!box.hasClass("collapsed-box")) {
                    //Convert minus into plus
                    element.children(":first")
                        .removeClass(_this.icons.collapse)
                        .addClass(_this.icons.open);
                    //Hide the content
                    box_content.slideUp(_this.animationSpeed, function () {
                        box.addClass("collapsed-box");
                    });
                } else {
                    //Convert plus into minus
                    element.children(":first")
                        .removeClass(_this.icons.open)
                        .addClass(_this.icons.collapse);
                    //Show the content
                    box_content.slideDown(_this.animationSpeed, function () {
                        box.removeClass("collapsed-box");
                    });
                }
            },
            remove: function (element) {
                //Find the box parent
                var box = element.parents(".box").first();
                box.slideUp(this.animationSpeed);
            }
        };
    };

    var initPlugins = function() {
        /* ------------------
         * - Custom Plugins -
         * ------------------
         * All custom plugins are defined below.
         */

        /*
         * BOX REFRESH BUTTON
         * ------------------
         * This is a custom plugin to use with the component BOX. It allows you to add
         * a refresh button to the box. It converts the box's state to a loading state.
         *
         * @type plugin
         * @usage $("#box-widget").boxRefresh( options );
         */
        (function ($) {

            "use strict";

            $.fn.boxRefresh = function (options) {

                // Render options
                var settings = $.extend({
                    //Refresh button selector
                    trigger: ".refresh-btn",
                    //File source to be loaded (e.g: ajax/src.php)
                    source: "",
                    //Callbacks
                    onLoadStart: function (box) {
                        return box;
                    }, //Right after the button has been clicked
                    onLoadDone: function (box) {
                        return box;
                    } //When the source has been loaded

                }, options);

                //The overlay
                var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

                return this.each(function () {
                    //if a source is specified
                    if (settings.source === "") {
                        if (window.console) {
                            window.console.log("Please specify a source first - boxRefresh()");
                        }
                        return;
                    }
                    //the box
                    var box = $(this);
                    //the button
                    var rBtn = box.find(settings.trigger).first();

                    //On trigger click
                    rBtn.on('click', function (e) {
                        e.preventDefault();
                        //Add loading overlay
                        start(box);

                        //Perform ajax call
                        box.find(".box-body").load(settings.source, function () {
                            done(box);
                        });
                    });
                });

                function start(box) {
                    //Add overlay and loading img
                    box.append(overlay);

                    settings.onLoadStart.call(box);
                }

                function done(box) {
                    //Remove overlay and loading img
                    box.find(overlay).remove();

                    settings.onLoadDone.call(box);
                }

            };

        })(jQuery);

        /*
         * EXPLICIT BOX CONTROLS
         * -----------------------
         * This is a custom plugin to use with the component BOX. It allows you to activate
         * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
         *
         * @type plugin
         * @usage $("#box-widget").activateBox();
         * @usage $("#box-widget").toggleBox();
         * @usage $("#box-widget").removeBox();
         */
        (function ($) {

            'use strict';

            $.fn.activateBox = function () {
                $.AdminLTE.boxWidget.activate(this);
            };

            $.fn.toggleBox = function () {
                var button = $($.AdminLTE.boxWidget.selectors.collapse, this);
                $.AdminLTE.boxWidget.collapse(button);
            };

            $.fn.removeBox = function () {
                var button = $($.AdminLTE.boxWidget.selectors.remove, this);
                $.AdminLTE.boxWidget.remove(button);
            };

        })(jQuery);

        /*
         * TODO LIST CUSTOM PLUGIN
         * -----------------------
         * This plugin depends on iCheck plugin for checkbox and radio inputs
         *
         * @type plugin
         * @usage $("#todo-widget").todolist( options );
         */
        (function ($) {

            'use strict';

            $.fn.todolist = function (options) {
                // Render options
                var settings = $.extend({
                    //When the user checks the input
                    onCheck: function (ele) {
                        return ele;
                    },
                    //When the user unchecks the input
                    onUncheck: function (ele) {
                        return ele;
                    }
                }, options);

                return this.each(function () {

                    if (typeof $.fn.iCheck != 'undefined') {
                        $('input', this).on('ifChecked', function () {
                            var ele = $(this).parents("li").first();
                            ele.toggleClass("done");
                            settings.onCheck.call(ele);
                        });

                        $('input', this).on('ifUnchecked', function () {
                            var ele = $(this).parents("li").first();
                            ele.toggleClass("done");
                            settings.onUncheck.call(ele);
                        });
                    } else {
                        $('input', this).on('change', function () {
                            var ele = $(this).parents("li").first();
                            ele.toggleClass("done");
                            if ($('input', ele).is(":checked")) {
                                settings.onCheck.call(ele);
                            } else {
                                settings.onUncheck.call(ele);
                            }
                        });
                    }
                });
            };
        }(jQuery));
    };


    this.options = function() {

        var options = {
            //Add slimscroll to navbar menus
            //This requires you to load the slimscroll plugin
            //in every page before app.js
            navbarMenuSlimscroll: true,
            navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
            navbarMenuHeight: "200px", //The height of the inner menu
            //General animation speed for JS animated elements such as box collapse/expand and
            //sidebar treeview slide up/down. This options accepts an integer as milliseconds,
            //'fast', 'normal', or 'slow'
            animationSpeed: 500,
            //Sidebar push menu toggle button selector
            sidebarToggleSelector: "[data-toggle='offcanvas']",
            //Activate sidebar push menu
            sidebarPushMenu: true,
            //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
            sidebarSlimScroll: true,
            //Enable sidebar expand on hover effect for sidebar mini
            //This option is forced to true if both the fixed layout and sidebar mini
            //are used together
            sidebarExpandOnHover: false,
            //BoxRefresh Plugin
            enableBoxRefresh: true,
            //Bootstrap.js tooltip
            // We now use uib-tooltip from angular-ui-bootstrap
            //enableBSToppltip: true,
            //BSTooltipSelector: "[data-toggle='tooltip']",
            //Enable Fast Click. Fastclick.js creates a more
            //native touch experience with touch devices. If you
            //choose to enable the plugin, make sure you load the script
            //before AdminLTE's app.js
            enableFastclick: true,
            //Control Sidebar Options
            enableControlSidebar: true,
            controlSidebarOptions: {
                //Which button should trigger the open/close event
                toggleBtnSelector: "[data-toggle='control-sidebar']",
                // The sidebar selector
                // no need for this anymore as we are using control-sidebar directive now
                //selector: ".control-sidebar",
                //Enable slide over content
                slide: true
            },
            //Box Widget Plugin. Enable this plugin
            //to allow boxes to be collapsed and/or removed
            enableBoxWidget: true,
            //Box Widget plugin options
            boxWidgetOptions: {
                boxWidgetIcons: {
                    //Collapse icon
                    collapse: 'fa-minus',
                    //Open icon
                    open: 'fa-plus',
                    //Remove icon
                    remove: 'fa-times'
                },
                boxWidgetSelectors: {
                    //Remove button selector
                    remove: '[data-widget="remove"]',
                    //Collapse button selector
                    collapse: '[data-widget="collapse"]'
                }
            },
            //Direct Chat plugin options
            directChat: {
                //Enable direct chat by default
                enable: true,
                //The button to open and close the chat contacts pane
                contactToggleSelector: '[data-widget="chat-pane-toggle"]'
            },
            //Define the set of colors to use globally around the website
            colors: {
                lightBlue: "#3c8dbc",
                red: "#f56954",
                green: "#00a65a",
                aqua: "#00c0ef",
                yellow: "#f39c12",
                blue: "#0073b7",
                navy: "#001F3F",
                teal: "#39CCCC",
                olive: "#3D9970",
                lime: "#01FF70",
                orange: "#FF851B",
                fuchsia: "#F012BE",
                purple: "#8E24AA",
                maroon: "#D81B60",
                black: "#222222",
                gray: "#d2d6de"
            },
            //The standard screen sizes that bootstrap uses.
            //If you change these in the variables.less file, change
            //them here too.
            screenSizes: {
                xs: 480,
                sm: 768,
                md: 992,
                lg: 1200
            }
        };

        //Extend options if external options exist
        if (typeof AdminLTEOptions !== "undefined") {
            angular.extend(true,
                options,
                AdminLTEOptions);
        }

        return options;
    };

    initObjects(this.options());

    initPlugins();
});
angular.module('adminlte')
    .directive('navTabsCustom', function() {
        var directive = {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.addClass('nav-tabs-custom');
                element.find('ul.nav > li > a[data-toggle="tab"]').click(function(evt) {
                    var $ = jQuery;
                    evt.preventDefault();
                    var href = $(this).attr('href');

                    element.find('div.tab-content > div.tab-pane.active').each(function() {
                        $(this).removeClass('active');
                    });

                    element.find('div.tab-content > ' + href).each(function() {
                        $(this).addClass('active');
                    });

                    element.find('ul.nav > li.active').each(function() {
                        $(this).removeClass('active');
                    });
                    $(this).parent().addClass('active');
                });
            }
        };

        return directive;
    });
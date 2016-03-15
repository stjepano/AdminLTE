angular.module('adminlte')
    .directive('searchForm', function() {
        var directive = {
            scope: {
                searchTerm: '=',
                onSubmit: '&'
            },
            templateUrl: 'scripts/templates/search_form.html'
        };

        return directive;
    });
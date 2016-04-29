angular.module('adminlte')
    .controller('MailboxCtrl', ['$scope', '$state', function($scope, $route) {
        'use strict';

        $scope.title = $state.current.data.title;
        $scope.desc = $state.current.data.desc || '';
    }])
    .controller('MailboxFolderCtrl', ['$scope', function($scope) {
        'use strict';

    }])
    .controller('MailboxSingleCtrl', ['$scope', function($scope) {
        'use strict';

    }])
    .controller('MailboxComposeCtrl', ['$scope', function($scope) {
        'use strict';

    }]);

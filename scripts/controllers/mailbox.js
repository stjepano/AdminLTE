angular.module('adminlte')
    .controller('MailboxCtrl', ['$scope', '$state', function($scope, $state) {
        'use strict';

        $scope.title = $state.current.data.title;
        $scope.desc = $state.current.data.desc || '';

        $scope.folders = [
            { id: 'inbox', icon: 'fa fa-inbox', text: 'Inbox', numUnread: 12, labelClass: 'label-primary', active: true  },
            { id: 'sent', icon: 'fa fa-envelope-o', text: 'Sent', numUnread: 0 },
            { id: 'drafts', icon: 'fa fa-file-text-o', text: 'Drafts', numUnread: 0  },
            { id: 'junk', icon: 'fa fa-filter', text: 'Junk', numUnread: 65, labelClass: 'label-warning'  },
            { id: 'trash', icon: 'fa fa-trash-o', text: 'Trash', numUnread: 0  }
        ];

        $scope.labels = [
            { colorClass: 'text-red', text: 'Important' },
            { colorClass: 'text-yellow', text: 'Promotions' },
            { colorClass: 'text-light-blue', text: 'Social' }
        ];




    }]);

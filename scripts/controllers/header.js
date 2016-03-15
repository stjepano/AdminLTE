angular.module('adminlte').controller('HeaderCtrl', ['$scope', '$q', 'Session', function($scope, $q, session) {

    var self = this;

    this.messages = [];
    this.notifications = [];
    this.tasks = [];
    this.user = {};

    session.onReady(function() {
        self.messages = session.messages();
        self.notifications = session.notifications();
        self.tasks = session.tasks();
        self.user = session.user();
    });

    this.logout = function() {
        console.log('logout requested');
        session.logout();
    };
    
    
    


}]);
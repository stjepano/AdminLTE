angular.module('adminlte').service('Session', ['$q', 'DemoData', function($q, data) {

    var STATUS = {
        online: 'online',
        offline: 'offline'
    };

    var currentUser = {
        id: 1,
        username: 'stjepano',
        name: 'Stjepan Obranković',
        description: 'Full Stack Developer',
        status: STATUS.online,
        img: 'images/user2-160x160.jpg',
        since: 'Nov., 2015'
    };

    var messages        = [];
    var notifications   = [];
    var tasks           = [];

    var loadMessages = function() {
        var deferred = $q.defer();
        data.messages()
            .then(function(data) {
                messages = data;
                deferred.resolve();
            });
        return deferred.promise;
    };
    var loadNotifications = function() {
        var deferred = $q.defer();
        data.notifications()
            .then(function(data) {
                notifications = data;
                deferred.resolve();
            });
        return deferred.promise;
    };
    var loadTasks = function() {
        var deferred = $q.defer();
        data.tasks()
            .then(function(data) {
                tasks = data;
                deferred.resolve();
            });
        return deferred.promise;
    };

    var readyCallback = null;
    var dataLoaded = false;
    $q.all([loadMessages(), loadNotifications(), loadTasks()])
        .then(function() {
            dataLoaded = true;
            if ( readyCallback ) {
                readyCallback();
            }
        });

    
    //
    // Service methods ....
    //

    this.onReady = function(cb) {
        readyCallback = cb;
        if ( dataLoaded ) {
            readyCallback();
        }
    };
    
    /**
     * Gets currently logged in user
     * @returns {User} currently logged in user or null if not logged in
     */
    this.user = function() {
        return currentUser;
    };

    /**
     * Logout the current user.
     */
    this.logout = function() {
        if ( currentUser == null ) {
            throw new Error("User already logged out!");
        }
        currentUser = null;
    };

    /**
     * Toggle user status online <-> offline
     */
    this.toggleStatus = function() {
        currentUser.status = ( currentUser.status == STATUS.online ) ? STATUS.offline : STATUS.online;
    };

    /**
     * Get the messages for current logged in user.
     */
    this.messages = function() {
        return messages;
    };

    /**
     * Get the notifications
     */
    this.notifications = function() {
        return notifications;
    };

    /**
     * Get the tasks.
     */
    this.tasks = function() {
        return tasks;
    };

}]);
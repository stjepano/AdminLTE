angular.module('adminlte').service('DemoData', ['$q', '$timeout', function($q, $timeout) {

    var delay = { min: 15, max: 250 };

    var randomDelay = function() {
        return Math.floor(Math.random() * (delay.max - delay.min) + delay.min);
    };

    var data = {
        messages: [],
        notifications: [],
        tasks: []
    };

    var generateDemoData = function() {

        var ids = {
            messages: 1,
            notifications: 1,
            tasks: 1
        };

        var prototypeMessages = [
            {
                id: 1,
                title: 'Support Team',
                time: new Date().getTime(),
                excerpt: 'Why not buy new awesome theme?',
                sender: {
                    id: 15,
                    name: 'John Doe',
                    image: 'images/user2-160x160.jpg'
                },
                status: 'unread'
            }
        ];
        var prototypeNotifications = [
            {
                id: 1,
                text: '5 new members joined today',
                icon: 'fa fa-users text-aqua',
                status: 'unread'
            }
        ];
        var prototypeTasks = [
            {
                id: 1,
                text: 'Design some buttons',
                progress: 20,
                color: 'aqua',
                status: 'unread'
            }
        ];

        var generateMessages = function(count) {

            var randomMessage = function() {
                return prototypeMessages[0];
            };

            for ( var i = 0; i < count; i++ ) {
                var obj = randomMessage();
                obj.id = ids.messages++;
                data.messages.push(obj);
            }
        };

        var generateNotifications = function(count) {

            var randomNotification = function() {
                return prototypeNotifications[0];
            };

            for ( var i = 0; i < count; i++ ) {
                var obj = randomNotification();
                obj.id = ids.notifications++;
                data.notifications.push(obj);
            }
        };

        var generateTasks = function(count) {

            var randomTask = function() {
                return prototypeTasks[0];
            };

            for ( var i = 0; i < count; i++ ) {
                var obj = randomTask();
                obj.id = ids.tasks++;
                data.tasks.push(obj);
            }
        };


        generateMessages(7);
        generateNotifications(4);
        generateTasks(4);
    };

    /**
     * Load messages for current user.
     */
    this.messages = function(user) {
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(data.messages);
        }, randomDelay());
        return deferred.promise;
    };

    /**
     * Load notifications for current user.
     */
    this.notifications = function(user) {
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(data.notifications);
        }, randomDelay());
        return deferred.promise;
    };

    /**
     * Load tasks for current user.
     */
    this.tasks = function(user) {
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(data.tasks);
        }, randomDelay());
        return deferred.promise;
    };


    generateDemoData();

}]);
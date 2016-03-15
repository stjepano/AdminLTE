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
                title: 'Support Team',
                time: new Date().getTime(),
                excerpt: 'Why not buy new awesome theme?',
                sender: {
                    id: 15,
                    name: 'John Doe',
                    img: 'images/user2-160x160.jpg'
                },
                timeAgo: '5 mins'
            },
            {
                title: 'Lorem ipsum',
                time: new Date().getTime(),
                excerpt: 'Lorem ipsum dolor sit amet',
                sender: {
                    id: 22,
                    name: 'Jane Doe',
                    img: 'images/user3-128x128.jpg'
                },
                timeAgo: '10 mins'
            },
            {
                title: 'Quad et pesci',
                time: new Date().getTime(),
                excerpt: 'Quad et pesci nouvane retir!',
                sender: {
                    id: 22,
                    name: 'Jane Doe',
                    img: 'images/user4-128x128.jpg'
                },
                timeAgo: '30 mins'
            }
        ];
        var prototypeNotifications = [
            {
                text: '5 new members joined today',
                icon: 'fa fa-users text-aqua'
            },
            {
                text: 'Lorem ipsum dolor sit amet',
                icon: 'fa fa-users'
            },
            {
                text: 'Qued stormi propo',
                icon: 'fa fa-users text-aqua'
            }
        ];
        var prototypeTasks = [
            {
                text: 'Design some buttons',
                progress: 20,
                color: 'aqua'
            },
            {
                text: 'Lorem ipsum dolor',
                progress: 60,
                color: 'red'
            },
            {
                text: 'Velara veneris',
                progress: 92,
                color: 'aqua'
            }
        ];

        var randomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        var generateMessages = function(count) {

            var randomMessage = function() {

                var fields = ['title', 'time', 'excerpt', 'sender', 'timeAgo'];
                var res = fields.reduce(function(acc, field) {
                    acc[field] = prototypeMessages[randomInt(0, prototypeMessages.length)][field];
                    return acc;
                }, {});

                return angular.copy(res);
            };

            for ( var i = 0; i < count; i++ ) {
                var obj = randomMessage();
                obj.id = ids.messages++;
                data.messages.push(obj);
            }
        };

        var generateNotifications = function(count) {

            var randomNotification = function() {
                var fields = ['text', 'icon'];
                var res = fields.reduce(function(acc, field) {
                    acc[field] = prototypeNotifications[randomInt(0, prototypeNotifications.length)][field];
                    return acc;
                }, {});

                return angular.copy(res);
            };

            for ( var i = 0; i < count; i++ ) {
                var obj = randomNotification();
                obj.id = ids.notifications++;
                data.notifications.push(obj);
            }
        };

        var generateTasks = function(count) {

            var randomTask = function() {
                var fields = ['text', 'progress', 'color'];
                var res = fields.reduce(function(acc, field) {
                    acc[field] = prototypeTasks[randomInt(0, prototypeTasks.length)][field];
                    return acc;
                }, {});

                return angular.copy(res);
            };

            for ( var i = 0; i < count; i++ ) {
                var obj = randomTask();
                obj.id = ids.tasks++;
                data.tasks.push(obj);
            }
        };


        generateMessages(3);
        generateNotifications(7);
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
angular.module('adminlte')
    .controller('CalendarCtrl', ['$scope', '$route', function($scope, $route) {
        'use strict';

        $scope.title = $route.current.$$route.params.title;
        $scope.desc = $route.current.$$route.params.desc || '';

        $scope.externalEvents = [
            { color: 'green', title: 'Lunch' },
            { color: 'yellow', title: 'Go Home' },
            { color: 'aqua', title: 'Do Homework' },
            { color: 'light-blue', title: 'Work on UI design' },
            { color: 'red', title: 'Sleep!!' }
        ];
        $scope.removeAfterDrop = false;

        $scope.newEventColor = 'blue';
        $scope.newEventTitle = '';

        $scope.createEvent = function() {
            $scope.externalEvents.push({
                color: $scope.newEventColor,
                title: $scope.newEventTitle || 'Some event'
            });
        };

        $scope.calendarOptions = {
            header: {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
            },
            buttonText: {
              today: 'today',
              month: 'month',
              week: 'week',
              day: 'day'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar !!!
          drop: function(date, allDay) { // this function is called when something is dropped

                    var $ = jQuery;

                    // retrieve the dropped element's stored Event Object
                    var dataEventIndex = $(this).data('eventIndex');
                    var originalEventObject = $scope.externalEvents[dataEventIndex];

                    // we need to copy it, so that multiple events don't have a reference to the same object
                    var copiedEventObject = angular.copy(originalEventObject);

                    // assign it the date that was reported
                    copiedEventObject.start = date;
                    copiedEventObject.allDay = allDay;
                    copiedEventObject.backgroundColor = $(this).css("background-color");
                    copiedEventObject.borderColor = $(this).css("border-color");

                    // render the event on the calendar
                    // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                    //$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
                    $scope.events.push(copiedEventObject);

                    // is the "remove after drop" checkbox checked?
                    if ($scope.removeAfterDrop) {
                        // if so, remove the element from the "Draggable Events" list
                        $scope.externalEvents.splice(dataEventIndex,1);
                    }

                }
        };

        var date = new Date();
        var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

        $scope.events = [
            {
              title: 'All Day Event',
              start: new Date(y, m, 1),
              backgroundColor: "#f56954", //red
              borderColor: "#f56954" //red
            },
            {
              title: 'Long Event',
              start: new Date(y, m, d - 5),
              end: new Date(y, m, d - 2),
              backgroundColor: "#f39c12", //yellow
              borderColor: "#f39c12" //yellow
            },
            {
              title: 'Meeting',
              start: new Date(y, m, d, 10, 30),
              allDay: false,
              backgroundColor: "#0073b7", //Blue
              borderColor: "#0073b7" //Blue
            },
            {
              title: 'Lunch',
              start: new Date(y, m, d, 12, 0),
              end: new Date(y, m, d, 14, 0),
              allDay: false,
              backgroundColor: "#00c0ef", //Info (aqua)
              borderColor: "#00c0ef" //Info (aqua)
            },
            {
              title: 'Birthday Party',
              start: new Date(y, m, d + 1, 19, 0),
              end: new Date(y, m, d + 1, 22, 30),
              allDay: false,
              backgroundColor: "#00a65a", //Success (green)
              borderColor: "#00a65a" //Success (green)
            },
            {
              title: 'Click for Google',
              start: new Date(y, m, 28),
              end: new Date(y, m, 29),
              url: 'http://google.com/',
              backgroundColor: "#3c8dbc", //Primary (light-blue)
              borderColor: "#3c8dbc" //Primary (light-blue)
            }
        ];

        $scope.eventSources = [$scope.events];

    }]);

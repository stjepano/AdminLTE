angular.module('adminlte')
    .controller('DummyCtrl', ['$scope', '$state', '$uibModal', 'uiGridConstants', function($scope, $state, $uibModal, uiGridConstants) {
        'use strict';

        $scope.title = $state.current.data.title;
        $scope.desc = $state.current.data.desc || '';

        $scope.alerts = [{
            type: 'danger',
            canClose: true,
            iconClass: 'fa fa-ban',
            title: 'Alert!',
            content: 'Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'
        }, {
            type: 'info',
            canClose: true,
            iconClass: 'fa fa-info',
            title: 'Alert!',
            content: 'Info alert preview. This alert is dismissable.'
        }, {
            type: 'warning',
            canClose: true,
            iconClass: 'fa fa-warning',
            title: 'Alert!',
            content: 'Warning alert preview. This alert is dismissable.'
        }, {
            type: 'success',
            canClose: true,
            iconClass: 'fa fa-check',
            title: 'Alert!',
            content: 'Success alert preview. This alert is dismissable.'
        }];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


        $scope.callouts = [{
            type: 'danger',
            title: 'I am a danger callout!',
            content: 'There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'
        }, {
            type: 'info',
            title: 'I am an info callout!',
            content: 'Follow the steps to continue to payment.'
        }, {
            type: 'warning',
            title: 'I am a warning callout!',
            content: 'This is a yellow callout.'
        }, {
            type: 'success',
            title: 'I am a success callout!',
            content: 'This is a green callout.'
        }];

        $scope.carousel = {
            active: 0,
            slides: [{
                id: 0,
                img: {
                    src: 'http://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap',
                    alt: 'First Slide'
                },
                caption: 'First Slide'
            }, {
                id: 1,
                img: {
                    src: 'http://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap',
                    alt: 'Second Slide'
                },
                caption: 'Second Slide'
            }, {
                id: 2,
                img: {
                    src: 'http://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap',
                    alt: 'Third Slide'
                },
                caption: 'Third Slide'
            }]
        };


        $scope.sliders = {
            ion: {
                first: {
                    from: 0
                },
                second: {
                    from: 30000,
                    to: 90000
                },
                third: {
                    from: 50,
                    to: 60
                },
                fourth: {
                    from: 20,
                    to: 30
                }
            },
            bs: {
                first: [-100, 100]
            }
        };


        // MODAL
        $scope.openModal = function(type) {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'modal-' + type + '.html',
                windowClass: 'modal-' + type,
                controller: ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
                    $scope.close = function() {
                        $uibModalInstance.dismiss('cancel');
                    };

                    $scope.save = function() {
                        $uibModalInstance.close(true);
                    };
                }],
                size: 'md' // sm, lg, xs
            });

            modalInstance.result.then(function(val) {
                alert('OK with val ' + val);
            }, function(val) {
                alert('Dismiss ' + val);
            });
        };


        var countries = [{
            id: 1,
            name: 'Alabama'
        }, {
            id: 2,
            name: 'Alaska'
        }, {
            id: 3,
            name: 'California'
        }, {
            id: 4,
            name: 'Delaware'
        }, {
            id: 5,
            name: 'Tennessee'
        }, {
            id: 6,
            name: 'Texas'
        }, {
            id: 7,
            name: 'Washington'
        }];
        // SELECT2
        $scope.minimalSelect = {
            itemArray: countries,
            selected: countries[0].id
        };

        $scope.multipleSelect = {
            itemArray: countries,
            selected: [countries[0].id]
        };

        // Date range
        $scope.reservation = {
            startDate: null,
            endDate: null
        };


        $scope.reservationTime = {
            startDate: null,
            endDate: null
        };

        $scope.reservationRanges = {
            startDate: null,
            endDate: null
        };

        $scope.ranges = {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        };


        // INPUT MASKS
        $scope.dateMask1 = null;
        $scope.dateMask2 = null;
        $scope.usPhoneMask = null;

        // iCheck
        $scope.icheck = {

            cb0: false,
            cb1: false,
            cb2: false,

            opt: 1

        }

        // editors
        $scope.htmlText = '<h1>This is some text<br/></h1><p>We are <a href="http://textangular.com" target="">textAngular</a> editor which works out of the box with AngularJS.</p><p><br/><br/></p>';
        $scope.tinymceText = '<h1>The TinyMCE editor</h1>\n<p>Please take a look <a href="https://github.com/angular-ui/ui-tinymce">here</a> and <a href="https://www.tinymce.com/docs/configure/">here</a> for more info on configuration.</p>';

        // codemirror
        $scope.codemirrorCode = '<!doctype html>\n' +
            '<html>\n' +
            '    <head>\n' +
            '        <title>Hello World</title>\n' +
            '    </head>\n' +
            '    <body>\n' +
            '        <h1>\n' +
            '            Hello World\n' +
            '        </h1>\n' +
            '        <p>\n' +
            '            How are you?\n' +
            '        </p>\n' +
            '    </body>\n' +
            '</html>';


        // SIMPLE TABLES
        var pages = [
            [{
                num: 1,
                text: 'Update software',
                progress: 55,
                progressClass: 'progress-bar-danger',
                badgeBg: 'bg-red'
            }, {
                num: 2,
                text: 'Clean database',
                progress: 70,
                progressClass: 'progress-bar-yellow',
                badgeBg: 'bg-yellow'
            }, {
                num: 3,
                text: 'Cron job running',
                progress: 30,
                progressClass: 'progress-bar-primary',
                badgeBg: 'bg-light-blue'
            }, {
                num: 4,
                text: 'Fix and squish bugs',
                progress: 90,
                progressClass: 'progress-bar-success',
                badgeBg: 'bg-green'
            }],
            [{
                num: 5,
                text: 'Update software',
                progress: 55,
                progressClass: 'progress-bar-danger',
                badgeBg: 'bg-red'
            }, {
                num: 6,
                text: 'Clean database',
                progress: 70,
                progressClass: 'progress-bar-yellow',
                badgeBg: 'bg-yellow'
            }, {
                num: 7,
                text: 'Cron job running',
                progress: 30,
                progressClass: 'progress-bar-primary',
                badgeBg: 'bg-light-blue'
            }, {
                num: 8,
                text: 'Fix and squish bugs',
                progress: 90,
                progressClass: 'progress-bar-success',
                badgeBg: 'bg-green'
            }],
            [{
                num: 9,
                text: 'Update software',
                progress: 55,
                progressClass: 'progress-bar-danger',
                badgeBg: 'bg-red'
            }, {
                num: 10,
                text: 'Clean database',
                progress: 70,
                progressClass: 'progress-bar-yellow',
                badgeBg: 'bg-yellow'
            }, {
                num: 11,
                text: 'Cron job running',
                progress: 30,
                progressClass: 'progress-bar-primary',
                badgeBg: 'bg-light-blue'
            }, {
                num: 12,
                text: 'Fix and squish bugs',
                progress: 90,
                progressClass: 'progress-bar-success',
                badgeBg: 'bg-green'
            }],
            [{
                num: 13,
                text: 'Update software',
                progress: 55,
                progressClass: 'progress-bar-danger',
                badgeBg: 'bg-red'
            }, {
                num: 14,
                text: 'Clean database',
                progress: 70,
                progressClass: 'progress-bar-yellow',
                badgeBg: 'bg-yellow'
            }, {
                num: 15,
                text: 'Cron job running',
                progress: 30,
                progressClass: 'progress-bar-primary',
                badgeBg: 'bg-light-blue'
            }, {
                num: 16,
                text: 'Fix and squish bugs',
                progress: 90,
                progressClass: 'progress-bar-success',
                badgeBg: 'bg-green'
            }]
        ];
        $scope.simpleTables = {
            tasks: pages[0],
            pages: pages,
            pageIndex: 0,
            switchPage: function(index) {
                $scope.simpleTables.pageIndex = index;
                $scope.simpleTables.tasks = pages[index];
            },
            next: function() {
                if (!$scope.simpleTables.canNext()) {
                    return;
                }
                $scope.simpleTables.pageIndex++;
                $scope.simpleTables.tasks = pages[$scope.simpleTables.pageIndex];
            },
            prev: function() {
                if (!$scope.simpleTables.canPrev()) {
                    return;
                }
                $scope.simpleTables.pageIndex--;
                $scope.simpleTables.tasks = pages[$scope.simpleTables.pageIndex];
            },
            canNext: function() {
                if ($scope.simpleTables.pageIndex >= ($scope.simpleTables.pages.length - 1)) {
                    return false;
                }
                return true;
            },
            canPrev: function() {
                if ($scope.simpleTables.pageIndex === 0) {
                    return false;
                }
                return true;
            },

            people: [{
                id: 183,
                user: 'John Doe',
                date: '11-7-2014',
                status: 'Approved',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
            }, {
                id: 219,
                user: 'Alexander Pierce',
                date: '11-7-2014',
                status: 'Pending',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
            }, {
                id: 657,
                user: 'Bob Doe',
                date: '11-7-2014',
                status: 'Approved',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
            }, {
                id: 175,
                user: 'Mike Doe',
                date: '11-7-2014',
                status: 'Approved',
                reason: 'Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.'
            }, ],
            search: ''
        };


        // UI Grid

        $scope.uigrid = {
            simple: {
                options: {
                    data: [{
                        "firstName": "Cox",
                        "lastName": "Carney",
                        "company": "Enormo",
                        "employed": true
                    }, {
                        "firstName": "Lorraine",
                        "lastName": "Wise",
                        "company": "Comveyer",
                        "employed": false
                    }, {
                        "firstName": "Nancy",
                        "lastName": "Waters",
                        "company": "Fuelton",
                        "employed": false
                    }],
                    enableRowSelection: true,
                    enableRowHeaderSelection: false,
                    noUnselect: true,
                    multiSelect: false,
                    enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER
                }

            }
        };

        $scope.uigrid.simple.options.onRegisterApi = function( gridApi ) {
            $scope.gridApi = gridApi;
            $scope.gridApi.selection.selectRow($scope.uigrid.options.data[0]);
        };


    }]);

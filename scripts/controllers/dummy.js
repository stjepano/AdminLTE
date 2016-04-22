angular.module('adminlte')
    .controller('DummyCtrl', ['$scope', '$route', '$uibModal', function($scope, $route, $uibModal) {
        'use strict';

        $scope.title = $route.current.$$route.params.title;
        $scope.desc = $route.current.$$route.params.desc || '';

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


    }]);

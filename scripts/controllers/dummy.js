angular.module('adminlte')
    .controller('DummyCtrl', ['$scope', '$route', '$uibModal', function($scope, $route, $uibModal) {
        'use strict';

        $scope.title = $route.current.$$route.params.title;
        $scope.desc = $route.current.$$route.params.desc || '';

        $scope.alerts = [
            { type: 'danger', canClose: true, iconClass: 'fa fa-ban', title: 'Alert!', content: 'Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.' },
            { type: 'info', canClose: true, iconClass: 'fa fa-info', title: 'Alert!', content: 'Info alert preview. This alert is dismissable.'},
            { type: 'warning', canClose: true, iconClass: 'fa fa-warning', title: 'Alert!', content: 'Warning alert preview. This alert is dismissable.'},
            { type: 'success', canClose: true, iconClass: 'fa fa-check', title: 'Alert!', content: 'Success alert preview. This alert is dismissable.'}
        ];

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };


        $scope.callouts = [
            { type: 'danger', title: 'I am a danger callout!', content: 'There is a problem that we need to fix. A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'},
            { type: 'info', title: 'I am an info callout!', content: 'Follow the steps to continue to payment.'},
            { type: 'warning', title: 'I am a warning callout!', content: 'This is a yellow callout.'},
            { type: 'success', title: 'I am a success callout!', content: 'This is a green callout.'}
        ];

        $scope.carousel = {
            active: 0,
            slides: [
                {
                    id: 0,
                    img: { src: 'http://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap', alt: 'First Slide'},
                    caption: 'First Slide'
                },
                {
                    id: 1,
                    img: { src: 'http://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap', alt: 'Second Slide'},
                    caption: 'Second Slide'
                },
                {
                    id: 2,
                    img: { src: 'http://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap', alt: 'Third Slide'},
                    caption: 'Third Slide'
                }
            ]
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
                first: [-100,100]
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


        var countries = [
            {id: 1, name: 'Alabama'},
            {id: 2, name: 'Alaska'},
            {id: 3, name: 'California'},
            {id: 4, name: 'Delaware'},
            {id: 5, name: 'Tennessee'},
            {id: 6, name: 'Texas'},
            {id: 7, name: 'Washington'}
        ];
        // SELECT2
        $scope.minimalSelect = {
            itemArray: countries,
            selected: countries[0].id
        };

        $scope.multipleSelect = {
            itemArray: countries,
            selected: [countries[0].id]
        };


    }]);

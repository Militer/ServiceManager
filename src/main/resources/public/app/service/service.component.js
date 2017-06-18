/**
 * Created by militer on 18.06.2017.
 */
angular
    .module('service')
    .controller('ServiceController', ['$scope', 'Service',
        function ($scope, Service) {
            $scope.test = 'tes2t';
            var services = Service.query(function () {
                $scope.services = services;
            });
        }
    ]);
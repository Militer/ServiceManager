/**
 * Created by militer on 18.06.2017.
 */
angular
    .module('service')
    .controller('ServiceController', ['$scope', 'Service', 'MonitoringService', 'DockerService',
        function ($scope, Service, MonitoringService, DockerService) {
            $scope.serviceInstances = [];
            $scope.monitoringData = {};
            $scope.gatewayIndex = -1;
            var currentInstance = 0;

            currentInstance = 0;
            var services = Service.query(function () {
                $scope.services = services;
                for (var index in services) {
                    parseServiceInstances(services[index].serviceInstances);
                }
            });


            function parseServiceInstances(serviceInstances) {
                for (var index2 in serviceInstances) {
                    $scope.serviceInstances[currentInstance] = serviceInstances[index2];
                    if (serviceInstances[index2].serviceId === 'CAR-GATEWAY') {
                        $scope.gatewayIndex = currentInstance;
                    }
                    getMonitoringData(serviceInstances[index2].instanceInfo.ipAddr, serviceInstances[index2].port, currentInstance);
                    currentInstance++;
                }
            }

            function getMonitoringData(ipAddress, port, index) {
                MonitoringService.get({
                    host: ipAddress,
                    port: port
                }, function (result) {
                    $scope.serviceInstances[index].data = result;
                    $scope.serviceInstances[index].labels = [];
                    for (var i = 0; i < result.length; i++) {
                        $scope.serviceInstances[index].labels[i] = i + 1;
                    }
                }, function (error) {
                    console.log('Error: ' + JSON.stringify(error));
                });
            }

            $scope.graph = {};
            $scope.graph.colours = ['#803690', '#00ADF9', '#DCDCDC'];
            $scope.graph.options = {
                responsive: false
            };

            $scope.startDockerContainer = function (serviceName) {
                DockerService.get({serviceName: serviceName}, function (result){
                    console.log(JSON.stringify(result));
                }, function (error){
                    console.log('Error: ' + JSON.stringify(error));
                });
            };

            $scope.removeDockerContainer = function(serviceName){
                DockerService.remove({serviceName: serviceName}, function (result){
                    console.log(JSON.stringify(result));
                }, function (error){
                    console.log('Error: ' + JSON.stringify(error));
                });
            };
        }
    ]);
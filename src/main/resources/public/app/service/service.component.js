/**
 * Created by militer on 18.06.2017.
 */
angular
    .module('service')
    .controller('ServiceController', ['$scope', 'Service', 'MonitoringService',
        function ($scope, Service, MonitoringService) {
            $scope.test = 'tes2t';
            var services = Service.query(function () {
                $scope.services = services;
                for (var index in services){
                    var serviceInstances = services[index].serviceInstances;
                    for (var index2 in serviceInstances) {
                        console.log("ServiceId: " + serviceInstances[index2].serviceId);
                        console.log("Port: " + serviceInstances[index2].port);
                        console.log("IP: " + serviceInstances[index2].instanceInfo.ipAddr);
                    }
                }
            });

            var monitoringServices = MonitoringService.query('http://172.18.0.3:8081').query(function(result){
                console.log("Monitoring: " + JSON.stringify(result));
            });

            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.colours = ['#803690', '#00ADF9', '#DCDCDC'];
            $scope.series = ['Series A', 'Series B'];
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
            $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
            $scope.options = {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            id: 'y-axis-1',
                            type: 'linear',
                            display: true,
                            position: 'left'
                        },
                        {
                            id: 'y-axis-2',
                            type: 'linear',
                            display: true,
                            position: 'right'
                        }
                    ]
                }
            };
        }
    ]);
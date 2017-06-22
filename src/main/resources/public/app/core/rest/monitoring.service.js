/**
 * Created by militer on 19.06.2017.
 */
angular
    .module('core')
    .service('MonitoringService', ['$resource', 'MONITORING_SERVICE_BASE_URL',
        function ($resource, MONITORING_SERVICE_BASE_URL) {
            return $resource(MONITORING_SERVICE_BASE_URL + '/monitoring/:host/:port', {}, {
                get: {
                    isArray: true
                }
            });
        }
    ]);
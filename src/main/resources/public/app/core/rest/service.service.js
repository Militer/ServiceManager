/**
 * Created by militer on 18.06.2017.
 */
angular
    .module('core')
    .service('Service', ['$resource', 'MONITORING_SERVICE_BASE_URL',
        function ($resource, MONITORING_SERVICE_BASE_URL) {
            return $resource(MONITORING_SERVICE_BASE_URL + '/service', {}, {
                query: {
                    isArray: true
                }
            });
        }
    ]);
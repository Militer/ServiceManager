/**
 * User: Militaru Gabriel
 * Date: 7/3/2017
 */
angular
    .module('core')
    .service('DockerService', ['$resource', 'MONITORING_SERVICE_BASE_URL',
        function ($resource, MONITORING_SERVICE_BASE_URL) {
            return $resource(MONITORING_SERVICE_BASE_URL + '/docker');
        }
    ]);
/**
 * Created by militer on 19.06.2017.
 */
angular
    .module('core')
    .service('MonitoringService', ['$resource',
        function ($resource) {
            return $resource('/monitoring/:host/:port', {}, {
                get: {
                    isArray: true
                }
            });
        }
    ]);
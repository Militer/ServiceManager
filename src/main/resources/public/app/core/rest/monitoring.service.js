/**
 * Created by militer on 19.06.2017.
 */
angular
    .module('core')
    .service('MonitoringService', ['$resource',
        function ($resource) {
            return {
                query: function (url) {
                    return $resource(url + '/request-monitor', {}, {
                        query: {
                            isArray: true
                        }
                    });
                }
            }
        }
    ]);
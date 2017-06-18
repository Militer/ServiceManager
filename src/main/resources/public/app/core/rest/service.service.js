/**
 * Created by militer on 18.06.2017.
 */
angular
    .module('core')
    .service('Service', ['$resource',
        function ($resource) {
            return $resource('/service', {}, {
                query: {
                    isArray: true
                }
            });
        }
    ]);
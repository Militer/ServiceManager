'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/service');

            $stateProvider
                .state('service', {
                    url: '/service',
                    templateUrl: 'app/service/service.template.html',
                    controller: "ServiceController"
                })
        }
    ]);

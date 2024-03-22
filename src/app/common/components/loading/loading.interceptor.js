(function() {
    'use strict';

    angular.module('common')
    .factory('loadingHttpInterceptor', LoadingHttpInterceptor);

    LoadingHttpInterceptor.$inject = ['$rootScope', '$q'];

    function LoadingHttpInterceptor($rootScope, $q) {
        var loadingCount = 0;
        var loadingEventName = 'spinner:activate';

        return {
            request: function (config) {
                if (config.method !== 'POST') {
                    if (++loadingCount === 1) {
                        $rootScope.$broadcast(loadingEventName, {'on': true})
                    }
                }

                return config;
            },
            response: function (response) {
                if (response.config.method !== 'POST') {
                    if (--loadingCount === 0) {
                        $rootScope.$broadcast(loadingEventName, {'on': false})
                    }
                }

                return response;
            },
            requestError: function (reponse) {
                if (--loadingCount === 0) {
                    $rootScope.$broadcast(loadingEventName, {'on': false})
                }

                return $q.reject(reponse);
            },
            reponseError: function (reponse) {
                if (--loadingCount === 0) {
                    $rootScope.$broadcast(loadingEventName, {'on': false})
                }

                return $q.reject(reponse);
            }

        }
    }
}());

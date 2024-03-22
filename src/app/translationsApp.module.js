(function() {
    'use strict';

    angular.module('translationsApp', ['public', 'ui.utils.masks', 'vcRecaptcha'])
    .config(config);

    config.$inject = ['$urlRouterProvider', '$locationProvider'];
    function config($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }
}());

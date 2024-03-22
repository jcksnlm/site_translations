(function() {
    'use strict';
    angular.module('translationsApp')
    .controller('indexController', Controller);

    Controller.$inject = ['$scope', 'CONTACTS', '$http', 'API', 'AnimationsFactory', '$timeout'];
    function Controller($scope, CONTACTS, $http, API, AnimationsFactory, $timeout) {
        $scope.CONTACTS = CONTACTS;

        var animations = AnimationsFactory();
        angular.element(document).ready(function () {
            $timeout(() => {
                animations.loadAllAnimations();
            });
        });


    }


}());

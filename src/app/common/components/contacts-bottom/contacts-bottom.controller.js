(function($) {
    'use strict';

    angular.module('common')
    .directive('contactsBottom', ContactsBottom);

    function ContactsBottom() {

        Controller.$inject = ['CONTACTS'];
        function Controller( CONTACTS) {
            var vm = this;
            vm.CONTACTS = CONTACTS;
        }

        return {
    		restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true,
    		scope: {
                title: '<?wTitle'
    		},
    		templateUrl	: 'app/common/components/contacts-bottom/contacts-bottom.html',
    	};
    }

}(window.$));

(function (angular, $) {
    'use strict';

    angular.module('common')
    .directive('fileUpload', fileUpload);

    function fileUpload() {

        Controller.$inject = ['$scope', '$element'];
        function Controller($scope, $element) {

            var elemInput = $element[0].querySelector('#input-file')
            elemInput.addEventListener('change', function (event) {

                angular.forEach(event.target.files, function (item) {
                    var file, reader;
                    var formato = '';
                    if (item.name.indexOf('.') !== -1) {
                        formato = item.name.split('.').pop();
                    }

                    if(formato !== 'exe' && formato !== 'msi' && formato !== 'jar') {
                        file = {
                            name: item.name,
                            size: item.size
                        };

                        if (FileReader) {
                            reader = new FileReader();
                        }

                        if (reader && reader.readAsBinaryString) {
                            reader = new FileReader();
                            reader.onload = function (e) {
                                file.target = e.target;
                                $scope.$emit('file:load', file);
                            };

                            reader.readAsBinaryString(item);
                        }
                        else {
                            // just for browsers that does have the FileReader lib not fully implemented
                            FileAPI.readAsBinaryString(item, function (readFile){
                            	if( readFile.type == 'load' ) {
                                    file.target = {result: readFile.result}
                            	 	$scope.$emit('file:load', file);
                            	} else if( readFile.type =='progress' ) {
                            	} else {
                            		// Error
                            	}
                            });

                        }
                    }
                });

                elemInput.value = '';
            });
        }

        return {
            restrict: 'E',
            templateUrl: 'app/common/components/file-upload/file-upload.html',
            replace: true,
            controller: Controller,
            scope: {
            }
        };
    }
})(window.angular, window.$);

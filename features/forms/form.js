(function (app) {
    'use strict';

    app.controller('formController', function ($scope) {
        $scope.emailaddress = '';

        $scope.submit = function () {
            $scope.showSubmitResult = true;
        };

        $scope.status = function() {
            var form = this.theform;

            if (form.$valid) return 'alert-info';
            if (form.emailaddress.$valid || form.termsandconditions.$valid) return 'alert-warning';
            return 'alert-danger';
        };
        
        $scope.ctrlstatus = function (ctrl) {
            return {
                'has-success': ctrl.$valid,
                'has-error': ctrl.$invalid
            };
        };
		
		$scope.ctrlstatusicon = function (ctrl) {
            return {
                'glyphicon-ok': ctrl.$valid,
                'glyphicon-remove': ctrl.$invalid
            };
        };
    });
    
    app.config(function ($routeProvider) {
        $routeProvider.when('/form', {
            templateUrl: '/features/forms/form.htm',
            controller: 'formController'
        });
    });
}(window.angular.module('demo')));
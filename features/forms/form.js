(function (app) {
    'use strict';

    app.controller('formController', function () {
        var self = this;

        //self.emailaddress = '';

        self.submit = function () {
            self.showSubmitResult = true;
        };

        self.status = function() {
            var form = self.theform;

            if (form.$valid) return 'alert-info';
            if (form.emailaddress.$valid || form.termsandconditions.$valid) return 'alert-warning';
            return 'alert-danger';
        };
        
        self.ctrlstatus = function (ctrl) {
            return {
                'has-success': ctrl.$valid,
                'has-error': ctrl.$invalid
            };
        };
		
		self.ctrlstatusicon = function (ctrl) {
            return {
                'glyphicon-ok': ctrl.$valid,
                'glyphicon-remove': ctrl.$invalid
            };
        };
    });
    
    app.config(function ($routeProvider) {
        $routeProvider.when('/form', {
            templateUrl: '/features/forms/form.htm',
            controller: 'formController',
            controllerAs: 'frmCtrl'
        });
    });

}(window.angular.module('demo')));
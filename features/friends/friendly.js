(function (app) {
    'use strict';

    app.controller('friendlyController', function () {
        var self = this;
        self.sayHello = function (name) {
            self.showGreeting = (name || '').length > 0;
        };
    });
    
    app.config(function ($routeProvider) {
        $routeProvider.when('/controller', {
            templateUrl: 'features/friends/controller.htm',
            controller: 'friendlyController',
            controllerAs: 'friendlyCtrl'
        });
    });
}(window.angular.module('demo')));
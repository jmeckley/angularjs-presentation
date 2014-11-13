(function (app) {
    'use strict';

    app.controller('friendlyController', function ($scope) {
        $scope.sayHello = function (name) {
            $scope.showGreeting = (name || '').length > 0;
        };
    });
    
    app.config(function ($routeProvider) {
        $routeProvider.when('/controller', {
            templateUrl: 'features/friends/controller.htm',
            controller: 'friendlyController'
        });
    });
}(window.angular.module('demo')));
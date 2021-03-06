// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
(function (ng) {
    'use strict';

    ng
        .module('demo', ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(false);

            $routeProvider
                .when('/', {
                    template: '<div>select an option below</div>'
                })
                .when('/static', {
                    templateUrl: '/partials/static.htm',
                })
                .when('/dynamic', {
                    templateUrl: '/partials/dynamic.htm',
                })
                .otherwise({
                    redirectTo: '/'
                });
        });
}(window.angular));
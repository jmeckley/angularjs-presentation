(function (ng, crypto, date) {
    'use strict';

    var app = ng.module('demo');
    
    app.requires.push('ngResource');
    
    app.constant('marvelApiKey', {
        'public': '49411debbefeda964067b8c621929e23'
        , 'private': '7c2ed6615041b3d8f169e804b6ea095f14729359'
    });

    app.provider('hash', function (marvelApiKey) {
        var _override = null;

        function Authentication() {
            this.authenticate = function () {
                var timeStamp = date.now().toString()
                    , md5Hash = crypto.MD5(timeStamp + marvelApiKey.private + marvelApiKey.public).toString();

                return {
                    apikey: marvelApiKey.public,
                    ts: timeStamp,
                    hash: md5Hash
                };
            };
        }

        this.override = function (authentication) {
            _override = {
                authenticate: function () {
                    return authentication;
                }
            };
        };

        this.$get = function () {
            return _override || new Authentication();
        };
    });

    app.factory('marvelRepository', function (hash, $resource) {
        var extended = ng.extend(hash.authenticate(), { id: '@id' });
        var characters = $resource('http://gateway.marvel.com/v1/public/characters/:characterId', extended);

        var missingImage = function (items) {
            ng.forEach(items, function (character, index) {
                if (character.thumbnail !== null) return;

                character.thumbnail = {
                    path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
                    extension: 'jpg'
                };
            });
        };

        return {
            get: function (characterId) {
                return characters
                    .get({ characterId: characterId })
                    .$promise
                    .then(function (response) {
                        missingImage(response.data.results);

                        return response.data.results[0];
                    })
                    .catch(function (response) {
                        throw response;
                    });
            },
            fetch: function (pageIndex) {
                return characters
                    .get({ limit: 20, offset: pageIndex * 20 })
                    .$promise
                    .then(function (response) {
                        missingImage(response.data.results);

                        return response.data;
                    })
                    .catch(function (response) {
                        throw response;
                    });
            }
        };
    });
    
    app.controller('charactersController', function ($routeParams, marvelRepository, $location) {
        var self = this;
        var page = parseInt($routeParams.pageNumber);

        marvelRepository.fetch(page - 1).then(function (data) {
            self.items = data.results;
            self.paging = {
                page: page,
                total: data.total,
                pageSize: data.limit
            };
        });

        self.goto = function (pageNumber) {
            $location.path('/characters/' + pageNumber);
        };
    });

    app.controller('characterController', function ($routeParams, marvelRepository, $window) {
        var self = this;
        var characterId = $routeParams.id;

        self.back = function () {
            $window.history.back();
        };

        marvelRepository.get(characterId).then(function (character) {
            self.item = character;
        });
    });
    
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/characters/:pageNumber', {
                templateUrl: '/features/marvel/characters.htm',
                controller: 'charactersController',
                controllerAs: 'charactersCtrl'
            })
            .when('/characters', {
                redirectTo: '/characters/1'
            })
            .when('/character/:id', {
                templateUrl: '/features/marvel/character.htm',
                controller: 'characterController',
                controllerAs: 'characterCtrl'
            });
    });
}(window.angular, CryptoJS, Date));

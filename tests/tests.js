"use strict";

describe("A suite is just a function", function () {
    var a;

    it("and so is a spec", function () {
        a = true;

        expect(a).toBe(true);
    });
});

describe('Angular - core services', function () {
    describe("$httpBackEnd", function () {
        var url = '/someUrl';

        it("should be able to stub out http calls",  inject(function ($http, $httpBackend) {
            $httpBackend.expectGET(url).respond({ data: 'success' });

            $http.get(url).success(function (result) {
                expect(result.data).toBe('success');
            });

            $httpBackend.flush();
        }));
    });

    describe('$q', function () {
        it('should simulate promise', inject(function ($q, $rootScope) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var resolvedValue;

            promise.then(function (value) { resolvedValue = value; });
            expect(resolvedValue).toBeUndefined();

            // Simulate resolving of promise
            deferred.resolve(123);
            // Note that the 'then' function does not get called synchronously.
            // This is because we want the promise API to always be async, whether or not
            // it got called synchronously or asynchronously.
            expect(resolvedValue).toBeUndefined();

            // Propagate promise resolution to 'then' functions using $apply().
            $rootScope.$apply();
            expect(resolvedValue).toEqual(123);
        }));
    });
});

describe("Angular Demo - Test", function () {
    var scope, controller, injector;

    beforeEach(module('demo'));

    beforeEach(module(function (hashProvider) {
        hashProvider.override({/*no authentication, cleaner urls for testing*/});
    }));
    
    beforeEach(inject(function ($controller, $rootScope, $injector) {
        scope = $rootScope.$new();
        controller = $controller;
        injector = $injector;
    }));

    describe('friendlyController', function () {
        beforeEach(function () {
            controller('friendlyController', { $scope: scope });
        });
        
        it('should say hello to jason', function () {
            scope.sayHello('jason');

            expect(scope.showGreeting).toBe(true);
        });
        
        it('should not say hello to null name', function () {
            scope.sayHello(null);

            expect(scope.showGreeting).toBe(false);
        });
    });
    
    describe('requiring Marvel respository', function() {
        var httpBackend, location;
       
        beforeEach(function () {
            location = injector.get('$location');
            httpBackend = injector.get('$httpBackend');
            
            httpBackend.whenGET(/^\/partials\//).respond('template');
        });

        afterEach(function () {
            //httpBackend.verifyNoOutstandingExpectation();
            //httpBackend.verifyNoOutstandingRequest();
        });

        describe('charactersController', function () {
            var charactersUrl = 'http://gateway.marvel.com/v1/public/characters?limit=20&offset=0';
            var characters;
            
            beforeEach(function() {
                characters = [{thumbnail: ''}];

                httpBackend.whenGET(charactersUrl).respond({ data: { results: characters, offset: 2, limit: 20, total: 100 } });
                
                controller('charactersController', { $scope: scope, $routeParams: { pageNumber: 1 } });
                
                scope.$apply();
                httpBackend.flush();
            });

            it('should be able to get a page of characters', function () {
                expect(scope.characters).toEqual(characters);
            });
            
            it('should be able to configure paging', function () {
                expect(scope.paging).toEqual({
                    total: 100,
                    page: 1,
                    pageSize: 20
                });
            });
            
            it('should be able to navigate to another page of characters', function () {
                scope.goto(5);

                expect(location.path()).toBe('/characters/5');
            });
        });

        describe('characterController', function () {
            var characterUrl = 'http://gateway.marvel.com/v1/public/characters/1';
            var character;

            beforeEach(function () {
                character = { name: 'Wolverine'};

                httpBackend.whenGET(characterUrl).respond({ data: { results: [character] } });
                
                controller('characterController', { $scope: scope, $routeParams: { id: 1 } });
                
                scope.$apply();//execute promises
                httpBackend.flush(); //process http requests

            });

            it('should be able to get character with id of 1', function () {
                expect(scope.character).toEqual(character);
            });
        });
    });
});
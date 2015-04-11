'use strict';

/**
 * @ngdoc overview
 * @name myVisualStoryBookApp
 * @description
 * # myVisualStoryBookApp
 *
 * Main module of the application.
 */
var myVirtualStoryBookApp = angular
  .module('myVirtualStoryBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.utils',
    'ui.router',
    'ui.bootstrap',
    'angular.layout',
    'textAngular',
    'ngMaterial',
    'angular-carousel'
  ]).config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, send to /signup
        //TODO: à changer plus tard.
        $urlRouterProvider.otherwise("/play/books");
        $stateProvider
            //Portail
            .state('signup', {
                url: "/signup",
                templateUrl: "feature/portal/view/Signup.html"
            })
            .state('signin', {
                url: "/signin",
                templateUrl: "feature/portal/view/Signin.html",
                controller: "SignInController"
            })

            .state('app', {
                templateUrl: "feature/common/template/Base.template.html",
                controller: "BaseController",
                abstract: true
            })
            .state('app.play',{
                url:"/play",
                template:"<div ui-view></div>",
                abstract:true
            })
            .state('app.play.books', {
                url: "/books",
                controller:"BookListController",
                templateUrl:"feature/play/view/BookList.html"  
            })
            .state('app.play.games', {
                url: "/games",
                controller:"GameListController",
                templateUrl:"feature/play/view/GameList.html"  
            })
            .state('app.play.playing', {
                url: "/playing/{id}",
                controller:"PlayingGameController",
                templateUrl:"feature/play/view/PlayingGame.html"  
            })
            .state('app.write',{
                url:"/write",
                template:"<div ui-view></div>",
                abstract:true
            })
            .state('app.write.drafts', {
                url: "/drafts",
                controller:"DraftListController",
                templateUrl:"feature/write/view/DraftList.html"  
            })
            .state('app.write.book', {
                url: "/book/{id}",
                controller:"WriteBookController",
                templateUrl:"feature/write/view/WriteBook.html"  
            })
            .state('app.write.page', {
                url: "/page/{id}",
                controller:"WritePageController",
                templateUrl:"feature/write/view/WritePage.html"  
            })
            .state('app.share',{
                url:"/share",
                template:"<div ui-view></div>",
                abstract:true
            })
            .state('app.share.publication', {
                url: "/publication",
                controller:"PublicationListController",
                templateUrl:"feature/share/view/PublicationList.html"  
            })
            //Joueur
            /*.state('player', {
                url: "/player",
                templateUrl: "feature/player/template/Player.template.html"
            })
            .state('player.books', {
                url: "/books",
                templateUrl: "feature/player/view/Books.html",
                controller: "PlayerBooksController"
            })
            .state('player.myprofile', {
                url: "/myprofile",
                templateUrl: "feature/player/view/MyProfile.html",
                controller: "PlayerProfileController"
            })
            
            //Edition
            .state('player.editionbook', {
                url: "/edition/book/{id}",
                templateUrl: "feature/edition/view/EditionBook.html",
                controller: "EditionBookController"
            })
            
            .state('player.editionpage', {
                url: "/edition/page/{id}",
                templateUrl: "feature/edition/view/EditionPage.html",
                controller: "EditionPageController"
            })
            
            //Jeu
            .state('player.game', {
                url: "/game/{id}",
                templateUrl: "feature/game/view/CurrentGame.html",
                controller: "GameController"
            })*/

}); 

myVirtualStoryBookApp.factory('httpErrorInterceptor', ['$q', '$injector', '$window', '$location',
    function ($q, $injector, $window, $location) {
        var myInterceptor = {
            'response': function (response) {
                return response;
            },
            'responseError': function (rejection) {
                if (rejection.status === 401) {
                    $injector.get('$state').go('signin');
                }
                return $q.reject(rejection);
            }
        };
        return myInterceptor;
}]);

myVirtualStoryBookApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpErrorInterceptor');
}]);
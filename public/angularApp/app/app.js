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
    'ngCookies',
    'ngSanitize',
    'ui.utils',
    'ui.router',
    'ui.bootstrap',
    'angular.layout',
    'textAngular',
    'ngMaterial',
    'ngTouch',
    'angular-carousel'
  ]).config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, send to /signup
        //TODO: à changer plus tard.
        $urlRouterProvider.otherwise("/play/books");
        $stateProvider
            //Portail
            .state('signup', {
                url: "/signup",
                templateUrl: "app/feature/portal/view/Signup.html",
                controller: "SignUpController"
            })
            .state('signin', {
                url: "/signin",
                templateUrl: "app/feature/portal/view/Signin.html",
                controller: "SignInController"
            })

            .state('app', {
                templateUrl: "app/feature/common/template/Base.template.html",
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
                templateUrl:"app/feature/play/view/BookList.html"  
            })
            .state('app.play.games', {
                url: "/games",
                controller:"GameListController",
                templateUrl:"app/feature/play/view/GameList.html"  
            })
            .state('app.play.playing', {
                url: "/playing/{id}",
                controller:"PlayingGameController",
                templateUrl:"app/feature/play/view/PlayingGame.html"  
            })
            .state('app.write',{
                url:"/write",
                template:"<div ui-view></div>",
                abstract:true
            })
            .state('app.write.drafts', {
                url: "/drafts",
                controller:"DraftListController",
                templateUrl:"app/feature/write/view/DraftList.html"  
            })
            .state('app.write.book', {
                url: "/book/{id}",
                controller:"WriteBookController",
                templateUrl:"app/feature/write/view/WriteBook.html"  
            })
            .state('app.write.page', {
                url: "/page/{id}",
                controller:"WritePageController",
                templateUrl:"app/feature/write/view/WritePage.html"  
            })
            .state('app.share',{
                url:"/share",
                template:"<div ui-view></div>",
                abstract:true
            })
            .state('app.share.publication', {
                url: "/publication",
                controller:"PublicationListController",
                templateUrl:"app/feature/share/view/PublicationList.html"  
            })
            .state('app.share.book', {
                url: "/book",
                controller:"PublishBookController",
                templateUrl:"app/feature/share/view/PublishBook.html"  
            })
            //Joueur
            /*.state('player', {
                url: "/player",
                templateUrl: "app/feature/player/template/Player.template.html"
            })
            .state('player.books', {
                url: "/books",
                templateUrl: "app/feature/player/view/Books.html",
                controller: "PlayerBooksController"
            })
            .state('player.myprofile', {
                url: "/myprofile",
                templateUrl: "app/feature/player/view/MyProfile.html",
                controller: "PlayerProfileController"
            })
            
            //Edition
            .state('player.editionbook', {
                url: "/edition/book/{id}",
                templateUrl: "app/feature/edition/view/EditionBook.html",
                controller: "EditionBookController"
            })
            
            .state('player.editionpage', {
                url: "/edition/page/{id}",
                templateUrl: "app/feature/edition/view/EditionPage.html",
                controller: "EditionPageController"
            })
            
            //Jeu
            .state('player.game', {
                url: "/game/{id}",
                templateUrl: "app/feature/game/view/CurrentGame.html",
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

myVirtualStoryBookApp.run( function($rootScope, $window, $location) {
    $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams, error){
        $window.ga('send', 'pageview', { page: $location.url(), title:toState.name});
    })
});
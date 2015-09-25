'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('WriteBookController', function ($scope, $state, $stateParams, GenreService, PlayerService, BookService, PageService, D3Service) {
    
    $scope.bookLoading=true;
    $scope.pagesLoading=true;

    BookService.getBook($stateParams.id).success(function(book){
      $scope.book = book;
      if(!book.stats) $scope.book.stats = [];
      if(angular.isDefined(book.genre))$scope.selectedGenre = book.genre.id;
      $scope._release = !book.draft;
      $scope.init = true;    
      $scope.bookLoading=false;
      BookService.getBookPages($stateParams.id).success($scope.updatePages);
    });

    $scope.updatePages = function(pages){
      $scope.pages = pages;
      $scope._buildD3Graph();
      $scope.pagesLoading=false;
    };
    
    $scope.saveBook = function(){
      BookService.updateBook($scope.book).success(function(){
        PlayerService.player.refreshBooks(false);
      });
    }
    
    $scope._buildD3Graph = function(){
      D3Service.clear();
      D3Service.buildLinksForBook($scope.book).then(function(){
        D3Service.init("#pageGraph",500,400);
      });
    };
    
    $scope.genres = GenreService.genres;
    
    $scope.addNewPage = function(){
      PageService.addBookNewPage($scope.book).success(function(page){
        $state.go("app.write.page",{id:page._id});
      });
    }
    
    $scope.newGame = function(book){
      PlayerService.player.newGame(book).success(function(newGame){
        $state.go("app.play.playing",{id:newGame._id});
      });
    }
    
    $scope.deletePage = function(page){
      PageService.deletePage(page).success(function(){
        BookService.getBookPages($stateParams.id).success($scope.updatePages)
      });
    }
    
    
    $scope.launchTour = function(){
      // Instance the tour
      $scope.tour = new Tour({
        steps: [
        {
          element: "#book-title",
          title: "Titre du livre",
          content: "Entre ici le titre de ton livre",
          placement: "top",
        },
        {
          element: "#book-genre",
          title: "Genre du livre",
          content: "Selectionne un genre pour aider les joueurs à trouver ton livre",
          placement: "top",
        },
        {
          element: "#book-synopsis",
          title: "Synospsis du livre",
          content: "Résume rapidement ton livre et donne envie aux joueurs de le lire",
          placement: "top",
        },
        {
          element: "#book-cover",
          title: "Image de couverture",
          content: "Ajoute une image qui servira de couverture à ton live. Copie colle simplement le lien vers l'image",
          placement: "bottom",
        },
        {
          element: "#book-starting-page",
          title: "Page de départ",
          content: "Pense à préciser la page de départ de ton livre",
          placement: "top",
        },
        {
          element: "#book-stats",
          title: "Statistiques du livre",
          content: "Ajoute autant de statistiques que tu veux à ton livre, elle te permetrons de conditionner l'affichage des choix du joueur",
          placement: "top",
        },],
        container: "body",
        keyboard: true,
        storage: window.localStorage,
        debug: false,
        backdrop: true,
        backdropContainer: 'main-wrapper',
        backdropPadding: 10,
        redirect: true,
        orphan: true
      });
      
      // Initialize the tour
      $scope.tour.init(true);
      
      // Start the tour
      $scope.tour.start();
      console.log($scope.tour);
    }
    
    $scope.launchTour();
    
});

'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, $location, $window, ConnectionService, PlayerService) {

    if ($location.protocol() != 'https'){
            $window.location.href = $location.absUrl().replace('http', 'https');
    };

    $scope.authentify = function(){
        if($scope.loginForm.$valid){
            $scope.displayMessage = true;
            $scope.displayMessageText = "Connexion en cours";
            ConnectionService.login(angular.copy($scope.user)).success(function(player){
                $window.sessionStorage.setItem("playerUsername",$scope.user.username);
                PlayerService.setCurrentPlayerUsername($scope.user.username);
                $state.go('player.myprofile');
            }).error($scope._displayError);
        }
    }
    
    $scope._displayError = function(){
        $scope.displayMessage = true;
        $scope.displayMessageText = "Nom d'utilisateur ou mot de passe incorrect";
    }
    
    $scope.logos = [
        "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpt1/v/t34.0-12/11130335_10205795501718533_1251221556_n.jpg?oh=6458857b6d4e7cb2c043e1d01211fa0a&oe=551F29B2&__gda__=1428111594_66f900daceb3d45f393d3d421fd62536",
        "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t34.0-12/11106492_10205795734004340_652211116_n.jpg?oh=a6bba2ab9880bdbf87983ee06b3aa260&oe=551F985B&__gda__=1428135215_d08058461c3595848e20d54668111b9b",
        "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t34.0-12/11092109_10205795748164694_1293026541_n.jpg?oh=e8517af31af2bdd05d2a621b7446bdeb&oe=551F98DD&__gda__=1428124876_e72e29021f9ced14a833916bc4c10b65",
        "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t34.0-12/11106347_10205795797485927_733298754_n.jpg?oh=12fcf7800784659df79d69951f2decc0&oe=551F7949&__gda__=1428134397_83e5006d66e8e81a7dec817855e2b43c",
        "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t34.0-12/11130623_10205795810966264_1089069374_n.jpg?oh=7c7c69693bdad47e1542a0c18b57615a&oe=551F9E15&__gda__=1428124804_e49045561c2724505fc01ab191a40bcd",
        "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xft1/v/t35.0-12/11127402_10205795816046391_333617736_o.jpg?oh=96a8c14d1c801f728c9a572abfb92b22&oe=55207522&__gda__=1428106576_7c2a156ed1c73c687a687ad5cedd170b",
        ];
  });

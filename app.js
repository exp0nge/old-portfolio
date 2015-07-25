var portfolioApp = angular.module('portfolioApp', []);

portfolioApp.controller('MainController', ['$http', 
    function($http){
        var mv = this;
        mv.data = [];
        $http.get('data.json').success(function(response) {
            mv.data = response;
        });
}]);
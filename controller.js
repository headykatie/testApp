var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {

    console.log("Hello World from controller");

var refresh = function(){
        $http.get('/contactlist').then(function(response){
            console.log("I got the data I requested");
            $scope.contactlist = response.data; 
            $scope.contact = {};
         }); 
};

refresh();

    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post("/contactlist", $scope.contact).then(function(response){
            console.log(response);
            refresh();
        });
    
    };

}]);
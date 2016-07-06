'use strict';

//note that _MOVIES has been loaded as a global

/* Your code goes here */

var myApp = angular.module('MoviesApp', []);

myApp.controller('MoviesCtrl', ['$scope', function($scope){
    //controller initialized

    //make a model that is my name
    $scope.myName = "Joel"

    //make a model that is a message
    $scope.message = "Hello world! It is a good day today";

    $scope.showDemo = true;

    $scope.movies = [
        {title:'Gone with the Wind', year:1939},
        {title:'Casablanca', year:1942},
        {title:'Star Wars', year:1979}
    ];

    $scope.sayHello = function() {
        console.log('Hello world!');
    };

    $scope.hideDemo = function() {
        $scope.showDemo = !$scope.showDemo;
    }

    //console.log( $scope.movies[0].year ); //=>1939

}]);


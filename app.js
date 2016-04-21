var app = angular.module('myModule', []);


app.directive('project', function(){
    return {
        restrict: "AE",
        templateUrl: 'template.html',
        replace: false,
    };
});



app.controller("singleController", ['$scope', function($scope){
    $scope.labs = [{
        title: "Proj 1",
        photo: "http://static1.squarespace.com/static/52619f74e4b0378afc9f13e5/5261d43ae4b0c5267bb2cf4a/5261d4b5e4b0c5267bb2cff8/1426888020007/NewYearsAd+copy.jpg?format=500w",
    },
    {
        title: "Proj 2",
        photo: 'http://placehold.it/300x100',
    },
    {
        title: "Proj 3",
        photo: 'http://placehold.it/200x100',
    }];
}]);

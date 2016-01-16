angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec.
     */

    $scope.itemToAdd = {
      code: "",
      name: "",
      coordinates: {
        latitude: 0,
        longitude: 0
      },
      address: ""
    }


    $scope.addListing = function() {
      var adder = {};
      adder.name = ;


    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {

    };

  }
]);
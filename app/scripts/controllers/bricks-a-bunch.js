'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:BricksABunchCtrl
 * @description
 * # BricksABunchCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('BricksABunchCtrl', ['brickWarehouse', function (brick) {
    var vm = this;
    
    brick.getBrick().then(function(data) {
      vm.items = data;
    });
    
    this.name = 'Bricks A Bunch';
    this.buy = function(color, size) {
      this.brick[color][size].quantity -= 1;
      
    this.return = function(color, size) {
      this.brick[color][size].quantity += 1;

    }
    
  }]);
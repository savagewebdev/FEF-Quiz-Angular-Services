'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl', ['brickWarehouse', function (brick) {
    var vm = this;
    
    brick.getBrick().then(function(data) {
      vm.items = data;
    });
    
      this.name = 'Lots O Bricks';
      this.buy = function(color, size) {
        this.brick[color][size].quantity -= 1;
        
      this.return = function(color, size) {
        this.brick[color][size].quantity += 1;
      
    }]);

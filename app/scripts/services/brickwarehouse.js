'use strict';

/**
 * @ngdoc service
 * @name serviceQuizApp.brickWarehouse
 * @description
 * # brickWarehouse
 * Service in the serviceQuizApp.
 */
angular.module('serviceQuizApp')
  .service('brickWarehouse', function () {
    this.getBrick = function () {
      return $.get('/services/brickFinder.json');
    };
  });

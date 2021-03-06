'use strict';

/**
 * @name restaurantsApp
 */
angular
  .module('restaurantsApp', [
    'restaurantsServices',
    'restaurantsFilters',
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'slick',
    'angular-flexslider',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/nis/:slug', {
        templateUrl: 'views/restaurant.html',
        controller: 'RestaurantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

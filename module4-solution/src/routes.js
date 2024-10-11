(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/home/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/categories/categories.template.html',
        controller: 'CategoriesController as categoriesController',
        resolve: {
          items: ['MenuService', function (MenuService) {
            return MenuService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/items/{itemShortname}',
        templateUrl: 'src/items/items.template.html',
        controller: "ItemsController as itemsController",
        resolve: {
            menuItems: ['MenuService', '$stateParams', function(MenuService, $stateParams) {
                return MenuService.getItemsForCategory($stateParams.itemShortname);
            }]
        }
      });
    
    }
    
    })();
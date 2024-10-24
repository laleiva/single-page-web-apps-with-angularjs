(function() {
    'use strict';
    
    angular.module('private')
    .config(routeConfig);
    
    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig ($stateProvider) {
      $stateProvider 
        .state('private', {
            abstract: true,
            templateUrl: 'src/private/private.html'
        })
        .state('private.signUp', {
          url: '/private/sign-up',
          templateUrl: 'src/private/sign-up/sign-up.html',
          controller: 'SignUpController',
          controllerAs: 'signUpCtrl'
        })
        .state('private.myInfo', {
            url: '/private/my-info',
            templateUrl: 'src/private/my-info/my-info.html',
            controller: 'MyInfoController',
            controllerAs: 'myInfoCtrl'
        });
    }
})();
    
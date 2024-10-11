(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('itemsComponent', {
      templateUrl: 'src/items/items.template.html',
      bindings: {
        items: '<'
      }
    });
    
    })();
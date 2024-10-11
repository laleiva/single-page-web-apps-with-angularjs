(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['menuItems'];
    function ItemsController(menuItems) {
      var itemsController = this;
      itemsController.menuItems = menuItems.data.menu_items;
    }
    
})();
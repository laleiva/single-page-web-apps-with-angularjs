(function () {
    'use strict';
    
    angular.module('Data', [])
        .service('MenuService', MenuService);

    MenuService.$inject = ['$http']
    function MenuService($http) {
      var service = this;
    
      service.getAllCategories = function() {
        return $http({
            method:"GET",
            url:"https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
        });
      }

      service.getItemsForCategory = function(categoryShortname) {
        return $http({
            method:"GET",
            url:" https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortname + ".json"
        });
      }
    }
    
})();
    
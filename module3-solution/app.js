(function () {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            restrict: 'E',
            templateUrl: 'foundItems.html',
            controller: DirectiveController,
            bindToController: true,
            controllerAs: 'ctrl'
        }

        return ddo;
    }

    function DirectiveController() {
        var list = this;
        
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.found = [];
        controller.text = "";
        controller.message = "";

        controller.search = function() {
            if(controller.text.length != 0) {
                var promise = MenuSearchService.search(controller.text);
                promise.then(function (result) {
                    controller.found = Object.values(result.data).
                        map(function(item) {
                            return item.menu_items;
                        }).
                        flat().
                        filter(function(item) {
                            return item.description.toLowerCase().includes(controller.text.toLowerCase());
                        });
                        if(controller.found.length == 0) {
                            controller.message = "Nothing found";
                        }
                    });
            } else {
                controller.message = "Nothing found";
            }
        };

        controller.remove = function(index) {
            controller.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http) {
        var service = this;
        
        this.found = [];

        this.search = function (text) {
            return $http({
                method:"GET",
                url:"https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
            });
        }
    }
    
})();
    
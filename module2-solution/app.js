(function () {
    'use strict';
    
    angular.module('Module2App', [])
    .controller('Module2Controller', Module2Controller)
    .provider('ToBuyService', ToBuyServiceProvider);

    Module2Controller.$inject = ['$scope', 'ToBuyService'];
    function Module2Controller($scope, ToBuyService) {
        var controller = this;

        $scope.toBuyItems = ToBuyService.getToBuyItems();
        $scope.buyedItems = ToBuyService.getBuyedItems();
        $scope.everythingBuyed = false;
        $scope.nothingBuyed = true;
        $scope.buy = function(index) {
            ToBuyService.buyItem(index);
            $scope.toBuyItems = ToBuyService.getToBuyItems();
            $scope.buyedItems = ToBuyService.getBuyedItems();
            $scope.everythingBuyed = ToBuyService.isEverythingBuyed();
            $scope.nothingBuyed = ToBuyService.isNothingBuyed();
        };
    }

    function ToBuyListService(initialContent) {
        var service = this;
        var toBuyItems = initialContent;
        var buyedItems = [];

        service.buyItem = function(index) {
            var item = toBuyItems.pop(index);
            buyedItems.push(item);
        }

        service.getToBuyItems = function() {
            return toBuyItems;
        }

        service.getBuyedItems = function() {
            return buyedItems;
        }

        service.isEverythingBuyed = function(){
            return toBuyItems.length == 0;
        }

        service.isNothingBuyed = function(){
            return buyedItems.length == 0;
        }
    }

    function ToBuyServiceProvider() {
        var provider = this;

        provider.defaults = {
            "items": [
                {
                    "name": "Cookies",
                    "quantity" : 5
                },
                {
                    "name": "Chips",
                    "quantity" : 4
                },
                {
                    "name": "Salad",
                    "quantity" : 3
                },
                {
                    "name": "Sugary drinks",
                    "quantity" : 2
                },
                {
                    "name": "Pepto bismol",
                    "quantity" : 1
                }
            ]
        }

        provider.$get = function() {
            var toBuyList = new ToBuyListService(provider.defaults.items);
            return toBuyList;
        };
    }
    
})();
    
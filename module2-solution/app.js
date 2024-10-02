(function () {
    'use strict';
    
    angular.module('Module2App', [])
    .controller('ToBuyController', ToBuyController)
    .controller('BuyedController', BuyedController)
    .service('ToBuyService', ToBuyService);

    ToBuyController.$inject = ['ToBuyService'];
    function ToBuyController(ToBuyService) {
        var toBuy = this;

        toBuy.toBuyItems = ToBuyService.getToBuyItems();

        toBuy.buy = function(index) {
            ToBuyService.buyItem(index);
        };
    }

    BuyedController.$inject = ['ToBuyService'];
    function BuyedController(ToBuyService) {
        var buyed = this;
        buyed.buyedItems = ToBuyService.getBuyedItems();
    }

    function ToBuyService() {
        var service = this;

        var toBuyItems = [
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
        ];
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
    }
    
})();
    
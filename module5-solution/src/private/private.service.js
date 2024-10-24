(function () {
    "use strict";
    
    angular.module('private')
    .service('PrivateService', PrivateService);
        
    PrivateService.$inject = [];
    function PrivateService() {
      var service = this;

      service.info = {};
    
      service.setInfo = function (info) {
        service.info = info;
      };
    
    
      service.getInfo = function () {
        return service.info;
      };
    
    }
})();
(function () {
    "use strict";
    
    angular.module('private')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['PrivateService'];
    function MyInfoController(PrivateService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = PrivateService.getInfo();
    }
    
})();
    
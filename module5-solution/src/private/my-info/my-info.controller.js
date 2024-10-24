(function () {
    "use strict";
    
    angular.module('private')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['PrivateService', 'MenuService'];
    function MyInfoController(PrivateService, MenuService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = PrivateService.getInfo();
      myInfoCtrl.description = "";
      myInfoCtrl.image = "images/menu/" + myInfoCtrl.user.menu + "/" +
        myInfoCtrl.user.menu + myInfoCtrl.user.favourite + ".jpg";
      MenuService.getDish(myInfoCtrl.user.menu, myInfoCtrl.user.favourite).
        then(function(response) {
          myInfoCtrl.description = response.data.description;
        }).
        catch(function(response) {
          console.log(response);
        });
    }
    
})();
    
(function () {
    "use strict";
    
    angular.module('private')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MenuService', 'PrivateService'];
    function SignUpController(MenuService, PrivateService) {
      var signUpCtrl = this;
      
      signUpCtrl.user = {};
      signUpCtrl.error = false;
      signUpCtrl.valid = false;

      signUpCtrl.submit = function() {
        var promise = MenuService.getDish(signUpCtrl.user.menu, signUpCtrl.user.favourite);
        promise.then(function (response) {
          if(response.data) {
            PrivateService.setInfo(signUpCtrl.user);
            signUpCtrl.error = false;
            signUpCtrl.valid = true;
          } else {
            signUpCtrl.error = true;
          }
        }).catch(function(error) {
          signUpCtrl.error = true;
        });
      }
    }
    
})();
    
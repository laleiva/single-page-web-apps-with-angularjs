(function () {
    'use strict';
    
    angular.module('Module1App', [])
    .controller('Module1Controller', Module1Controller);
    
    Module1Controller.$inject = ['$scope'];
    function Module1Controller($scope) {
        $scope.inValue = "";
        $scope.message = "";
        $scope.messageColor = "red";
        $scope.borderColor = "transparent";
      $scope.check = function() {
        var numItems = $scope.inValue.split(",").filter(function(item) {
            return item.trim().length > 0;
        }).length;
        $scope.message = getMessage(numItems);
        $scope.messageColor = getMessageColor(numItems);
        $scope.borderColor = getBorderColor($scope.message, numItems);
      }
    }

    function getMessage(numItems) {
        if(numItems === 0) {
            return "Please enter data first";
        } else if(numItems <= 3) {
            return "Enjoy!";
        } else {
            return "Too much!";
        }
    }

    
    function getMessageColor(numItems) {
        if(numItems === 0) {
            return "red";
        } else {
            return "green";
        }
    }

    function getBorderColor(message, numItems) {
        if(message.length === 0) {
            return "transparent";
        } else if(numItems === 0) {
            return "red";
        } else {
            return "green";
        }
    }
    
    })();
    
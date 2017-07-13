(function() {
  'use strict';
  angular.module('latticeApp', ['ngMessages'])
    .controller('formController', [function() {
      var vm = this;
      vm.isSpinnerVisible = false;
      vm.users = [];
      vm.registrationForm = {};

      vm.submit = submit;

      function submit() {
        vm.isSpinnerVisible = true;
        var user = {};
        angular.copy(vm.registrationForm, user);
        localStorage.users.push(user);
        vm.isSpinnerVisible = true;
      }

      function reset() {
        vm.registrationForm = {};
      }
    }]);
})();

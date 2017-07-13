(function() {
  'use strict';
  angular.module('latticeApp', ['ngMessages'])
    .controller('formController', [function() {
      var vm = this;
      vm.isSpinnerVisible = false;
      vm.users = [];
      vm.registrationForm = {};

      vm.submit = submit;
      vm.remove = remove;

      function submit() {
        vm.isSpinnerVisible = true;
        var user = {};
        angular.copy(vm.registrationForm, user);
        vm.users.push(user);
        vm.isSpinnerVisible = false;
      }

      function remove(user) {
        console.log(vm.users);
        var index;
        if (user) {
          index = vm.users.indexOf(user);
          vm.users.splice(index, 1);
        }
      }

      function reset() {
        vm.registrationForm = {};
      }
    }]);
})();

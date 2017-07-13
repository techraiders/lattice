(function() {
  'use strict';
  angular.module('latticeApp', ['ngMessages'])
    .controller('formController', [function() {
      var vm = this;
      vm.users = [];
      vm.registrationForm = {};

      vm.submit = submit;

      function submit() {
        var user = {};
        angular.copy(vm.registrationForm, user);
        vm.users.push(user);
      }

      function reset() {
        vm.registrationForm = {};
      }
    }]);
})();

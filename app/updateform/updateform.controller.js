(function() {
    angular.module('app').controller('UpdateFormController', updateformController);

    updateformController.$inject = ['authService'];
    function updateformController(authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        vm.lat = localStorage.getItem('a');
        vm.log = localStorage.getItem('b');
        var check=0;
        vm.check=0;
    }
})();
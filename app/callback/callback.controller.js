(function() {
    angular.module('app').controller('CallbackController', callbackController);

    callbackController.$inject = ['authService'];
    function callbackController(authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        var check=0;
        vm.check=0;
    }
})();
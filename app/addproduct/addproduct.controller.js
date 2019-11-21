(function() {
    angular.module('app').controller('AddProductController', addproductController);

    addproductController.$inject = ['authService'];
    function addproductController(authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        
        var check=0;
        vm.check=0;
    }
})();
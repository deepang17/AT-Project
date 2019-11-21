(function() {
   
    angular.module('app').directive('navbar', navbar)

    function navbar() {
        return{
            templateUrl: 'app/navbar/navbar.html',
            controller: navbarController,
            controllerAs: 'vm'
        }
    }
    
    navbarController.$inject = ['authService','$location'];
    function navbarController(authService) {
        var vm = this;
        vm.auth = authService;
        var check=0;
        vm.check=0;
    var absUrl = window.location.pathname;
    console.log(absUrl);
    if(absUrl=="/"){
        vm.check=1;
    }
    if(absUrl=="/products"){
        vm.check=2;
    }
    }
})();
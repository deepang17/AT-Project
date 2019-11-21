var myVar=1;
(function(){

    angular.module('app').controller('HomeController', homeController)
    homeController.$inject = ['$http', 'authService']
    function homeController($http, authService) {

        var vm = this;

        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        vm.message = '';
        vm.getMessage = function() {
            $http.get('http://127.0.0.1:8080/authorized')
                .then(function(result){
                    vm.message = result.data.message;
                }, function(err) {
                    console.log(err)
                })
        }
    }
})();
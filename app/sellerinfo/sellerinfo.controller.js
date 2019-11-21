(function() {
    angular.module('app').controller('SellerInfoController', sellerinfoController);

    sellerinfoController.$inject = ['$http', 'authService'];
    function sellerinfoController($http, authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        var x = vm.profile.name;
        var check=0;
        vm.check=0;
        (function() {
            $http.get('http://127.0.0.1:8080/sellerinfo')
            .then(function(resul){
                vm.username = resul.data.name;
                vm.picture = resul.data.profilepic;
                vm.phone   = resul.data.phone;
                vm.lat = resul.data.latitude;
                vm.long = resul.data.longitude;
                vm.address = resul.data.address;
                vm.em = resul.data.email;
            }
            , function(err) {
                console.log(err)
            })
        })();
    }
})();
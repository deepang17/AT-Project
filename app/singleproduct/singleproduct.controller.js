(function() {
    angular.module('app').controller('SingleProductController', singleproductController);

    singleproductController.$inject = ['$http', 'authService'];
    function singleproductController($http, authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        var x = vm.profile.name;
        var check=0;
        vm.check=0;
        (function() {
            $http.get('http://127.0.0.1:8080/sgprod')
            .then(function(result){
                vm.productname = result.data.pname;
                vm.ppicture = result.data.prodpic;
                vm.type   = result.data.type;
                vm.price = result.data.price;
                vm.description = result.data.description;
                vm.seller = result.data.sid;
            }
            , function(err) {
                console.log(err)
            })
        })();
    }
})();
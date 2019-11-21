(function() {
    angular.module('app').controller('ProductListController', productlistController);

    productlistController.$inject = ['$http', 'authService'];
    function productlistController($http , authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        var check=0;
        vm.check=0;
        vm.array=1;
        // for(var i=0; i < sizeof(vm.array); i++){
        //     vm.array[i] = i;
        // }
        vm.cars = ["Saab", "Volvo", "BMW"];
        var len;
        (function() {
            $http.get('http://127.0.0.1:8080/productlist')
            .then(function(result){
                vm.dig=result;
                console.log(vm.dig);
            }
            , function(err) {
                console.log(err)
            })
        })();
    }
})();
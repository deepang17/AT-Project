(function() {
    angular.module('app').controller('ProfileController', profileController);

    profileController.$inject = ['$http', 'authService'];
    function profileController($http, authService) {
       
        var vm =this;
        vm.auth = authService;
        vm.profile = JSON.parse(localStorage.getItem('profile'));
        var x = vm.profile.name;
        var check=0;
        vm.check=0;
        (function() {
            $http.get('http://127.0.0.1:8080/profile')
            .then(function(result){
                var u =localStorage.getItem('checker');
                if(u==0){
                vm.address = result.data.address;
                vm.picture = result.data.profilepic;
                vm.phone   = result.data.phone;}
                else{
                    localStorage.removeItem('checker');
                    localStorage.setItem('checker',0);
                }
            }, function(err) {
                console.log(err)
            })
        })();
    }
})();
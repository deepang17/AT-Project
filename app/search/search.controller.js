(function() {
    angular.module('app').controller('SearchController', searchController);

    searchController.$inject = ['authService'];
    function searchController(authService) {
       
        var vm =this;
        vm.auth = authService;
        var check=0;
        vm.check=0;
    var absUrl = window.location.pathname;
    console.log(absUrl);
    if(absUrl=="/"){
        vm.check=1;
    }
    }
      window.onload = function () {
    if (! localStorage.justOnce) {
        localStorage.setItem("justOnce", "true");
        window.location.reload();
    }
}
})();
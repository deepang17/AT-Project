(function() {
    angular
        .module('app', ['auth0.auth0', 'ui.router', 'angular-jwt'])
        .config(config);

        config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$httpProvider', 'angularAuth0Provider', 'jwtOptionsProvider'];

        function config($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, angularAuth0Provider,jwtOptionsProvider){
            $stateProvider.state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'app/home/home.html',
                controllerAs: 'vm'
            })
            .state('callback', {
               url: '/callback',
               controller: 'CallbackController',
               templateUrl: 'app/callback/callback.html',
               controllerAs: 'vm' 
            })
            .state('profile', {
                url: '/profile',
                controller: 'ProfileController',
                templateUrl: 'app/profile/profile.html',
                controllerAs: 'vm' 
            })
            .state('search', {
                url: '/search',
                controller: 'SearchController',
                templateUrl: 'app/search/search.html',
                controllerAs: 'vm'
            })
            .state('products', {
                url: '/products',
                controller: 'ProductsController',
                templateUrl: 'app/products/products.html',
                controllerAs: 'vm'
            })
            .state('sgprod', {
                url: '/sgprod',
                controller: 'SingleProductController',
                templateUrl: 'app/singleproduct/singleproduct.html',
                controllerAs: 'vm'
            })
            .state('capture', {
                url: '/cap',
                //controller: 'SearchController',
                templateUrl: 'app/capture.html',
                controllerAs: 'vm' 
            })
            .state('maps', {
                url: '/maps',
                //controller: 'SearchController',
                templateUrl: 'app/maps/maps.html',
                controllerAs: 'vm'
            })
            .state('updateform', {
                url: '/updateform',
                controller: 'UpdateFormController',
                templateUrl: 'app/updateform/updateform.html',
                controllerAs: 'vm'
            })
            .state('sellerinfo', {
                url: '/sellerinfo',
                controller: 'SellerInfoController',
                templateUrl: 'app/sellerinfo/sellerinfo.html',
                controllerAs: 'vm'
            })
            
            .state('addproduct', {
                url: '/addproduct',
                controller: 'AddProductController',
                templateUrl: 'app/addproduct/addproduct.html',
                controllerAs: 'vm'
            })
            .state('productlist', {
                url: '/productlist',
                controller: 'ProductListController',
                templateUrl: 'app/productlist/productlist.html',
                controllerAs: 'vm'
            });

            angularAuth0Provider.init({
                clientID: '6MIuHWiVOo5PpjQKs7d8JCrzhixcSuHM',
                domain: 'deepang.auth0.com',
                responseType: 'token id_token',
                redirectUri: 'http://127.0.0.1:3000/callback',
                scope: 'openid profile',
                audience: 'https://reventa.in/api'

            })

            jwtOptionsProvider.config({
                tokenGetter: function() {
                   return localStorage.getItem('access_token'); 
                },
                whiteListedDomains: ['127.0.0.1']
            });

            $httpProvider.interceptors.push('jwtInterceptor')

            $urlRouterProvider.otherwise('/');

            $locationProvider.hashPrefix('');

            $locationProvider.html5Mode(true);
        }
})();
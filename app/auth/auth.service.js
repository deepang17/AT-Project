
(function() {
    angular.module('app').service('authService', authService);

    authService.$inject = ['$state', 'angularAuth0', '$timeout'];
    function authService($state, angularAuth0, $timeout){

        function login() {
            angularAuth0.authorize();
        }

        function handleAuthentication() {
            angularAuth0.parseHash(function(err, authResult) {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    setSession(authResult)
                    $timeout(function() {
                        $state.go('home');
                    });
                }

            });
        }

        function setSession(authResult) {
            var expiresAt = JSON.stringify(
                (authResult.expiresIn * 1000) + new Date().getTime()
            );

            var profile = {
                name: authResult.idTokenPayload.name,
                nickname: authResult.idTokenPayload.nickname,
                picture: authResult.idTokenPayload.picture
            }
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at',expiresAt);
            localStorage.setItem('profile',JSON.stringify(profile));
			localStorage.setItem('a',22.6798311);
            localStorage.setItem('b',72.8802908);
            localStorage.setItem('checker',1);
        }

        function logout() {
            localStorage.removeItem('checker');
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            localStorage.removeItem('a');
            localStorage.removeItem('b');
            localStorage.removeItem('imgsource');
            document.location.href = 'https://deepang.auth0.com/v2/logout?federated?returnTo=http%3A%2F%2F127.0.0.1:3000&client_id=6MIuHWiVOo5PpjQKs7d8JCrzhixcSuHM'
        }

        function isAuthenticated() {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;

        }

        return {
            login: login,
            handleAuthentication: handleAuthentication,
            logout : logout,
            isAuthenticated : isAuthenticated
        };

    }
})();
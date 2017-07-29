angular.module('blocJams', ['ui.router']);

(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled:true,   /*why use commas instead of semicolon here*/
                requireBase: false

            });


}

    angular
        .module('blocJams', ['ui.router']);
        .config(config);

}) ();

$stateProvider
    .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
    })
    .state('album', {
      url: '/album',
      templateUrl: '/templates/album.html'
    })
    .state('collection', {
        url: '/',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html'
    });

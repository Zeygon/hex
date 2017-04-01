
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('form', {
            url: '/form',
            templateUrl: 'partials/form.html'
        })

        .state('form.auth', {
            url: '/auth',
            templateUrl: 'step-2-auth.html'
        })

        .state('form.piq', {
            url: '/piq',
            templateUrl: 'step-3-piq.html'
        })

        .state('form.map', {
            url: '/map',
            templateUrl: 'step-4-map.html'
        })

        .state('form.done', {
            url: '/done',
            templateUrl: 'step-5-done.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form');
})

// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router','webcam'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('form', {
            url: '/form',
            templateUrl: 'partials/form.html'
        })

        .state('auth', {
            url: '/auth',
            templateUrl: 'partials/step-2-auth.html',
            controller: function($scope) {
              $scope.c = "#fc0061";
              $scope.spin = true;
              $scope.toggle = function(){
                $scope.spin = false;
              }
            }
        })

        .state('piq', {
            url: '/piq',
            templateUrl: 'partials/step-3-piq.html',
            controller: function($scope) {
              $scope.c = "#fc0061";

                document.getElementById('camera').addEventListener('change', function(e) {
                        var file = e.target.files[0];
                        // Do something with the image file.
                        $scope.source = URL.createObjectURL(file);
                        console.log($scope.source);
                        document.getElementById("frame").src = $scope.source;

                    });
            }
        })

        .state('map', {
            url: '/map',
            templateUrl: 'partials/step-4-map.html',
            controller: function($scope) {
              $scope.c = "#fc0061";

              var map = L.map('map').setView([51.505, -0.09], 13);

              L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              }).addTo(map);

              L.marker([51.5, -0.09]).addTo(map)
                  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                  .openPopup();
                  
            }
        })

        .state('done', {
            url: '/done',
            templateUrl: 'partials/step-5-done.html',
            controller: function($scope) {
              $scope.c = "#24b47e";
            }
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form');
})

.controller('formCtrl', function($scope, $state){
  $scope.c = "#F7F7F7";
  console.log($state.current.name);
  if ($state.current.name === "auth") {
    $scope.c = "#fc0061";
  }
  //red: #fc0061
});

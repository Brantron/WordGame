
 var app = angular.module("myApp", []);

app.factory('weatherService', ['$http', '$q', function ($http, $q){
       function getWeather (zip) {
        var deferred = $q.defer();
        $http.get('https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20weather.forecast%20WHERE%20location%3D%22' + zip + '%22&format=json&diagnostics=true&callback=')
          .success(function(data){
            deferred.resolve(data.query.results.channel);
          })
          .error(function(err){
            console.log('Error retrieving markets');
            deferred.reject(err);
          });
        return deferred.promise;
      }
      
      return {
        getWeather: getWeather
      };
    }]);

app.factory('movieService', ['$http', '$q', function ($http, $q){
       function getMovie (zip) {
        var deferred = $q.defer();
        $http.get('http://api.fandango.com/v1/?op=performancesbypostalcodesearch&postalcode=' + zip + '&apikey=x4ax69webgaavju7whffs8d&sig=8e57108d44141f0813edd33e40d3ed3cb841691fcc47c5419bb85546b788cb3a')
          .success(function(data){
            deferred.resolve(data.query.results.channel);
          })
          .error(function(err){
            console.log('Error retrieving markets');
            deferred.reject(err);
          });
        return deferred.promise;
      }
      
      return {
        getWeather: getWeather
      };
    }]);

 app.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
      function fetchWeather(zip) {
        weatherService.getWeather(zip).then(function(data){
          $scope.place = data;
        }); 
      }
      
      fetchWeather('84105');

      $scope.findWeather = function(zip) {
      	$scope.place ='';
      	fetchWeather(zip);
      }
    }]);



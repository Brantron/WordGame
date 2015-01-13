var app = angular.module("sight", ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("");
	$stateProvider
		.state('colors', {
			url: '/colors',
			templateUrl: 'templates/colors.html',
			controller: 'WordController'
		})
		.state('numbers', {
			url: '/numbers',
			templateUrl: 'templates/numbers.html',
			controller: 'WordController'
		})
		.state('words', {
			url: '/words',
			templateUrl: 'templates/words.html',
			controller: 'WordController'
		});
});
app.controller('WordController', ['$rootScope', '$scope','$sce', 'masterlist','$route', '$routeProvider', function($rootScope, $scope, $sce, $route, $routeProvider, masterlist){


	$scope.words      = masterlist.words;
	$scope.colors     = masterlist.colors;
	$scope.numbers    = masterlist.numbers;
	$scope.color_Q    = masterlist.colors[$scope.c_counter];
	$scope.number_Q   = masterlist.numbers[$scope.n_counter];
	$scope.word_Q     = masterlist.words[$scope.w_counter];
	$scope.addCorrect = masterlist.addCorrect;
	$scope.addWrong   = masterlist.addWrong;
	$scope.question = {};
	$scope.c_counter = 0;
	$scope.n_counter = 0;
	$scope.w_counter = 0;

	$scope.checkWord = function(guess, question) {
		if (guess.sound === question.sound) {
			$scope.addCorrect(guess);
			console.log($scope.colors);
			$scope.word_Q     = masterlist.words[0];
			$route.reload();
			if (question == color_Q){
				c_counter++;
				console.log(c_counter)

			}
			else if (question == number_Q){
				n_counter++;
			}
			else {
				w_counter++;
			}

		}
		else {
			$scope.addWrong(guess);
			console.log(question);
			$scope.word_Q     = masterlist.words[0];
			$route.reload();
		}
		$route.reload();
	}

	//*****random order thing - maybe remove later
	$scope.randOrd = function(){
		return (Math.round(Math.random())-0.5); };

	//*****clickwords filter
	$scope.myFunc = function(a) {
		for(catagory in $scope.catagoryArray){
			var c = $scope.catagoryArray[catagory];
			$scope.randOrd(a);
			if(c.on && String(a.quarter).indexOf(c.area) > -1){

				return true;
			}

		}
	};

	//*****for clicking words to filter
	$scope.catagoryArray = [
		{ area: 'colors',  on: false},
		{ area: "numbers", on: false},
		{ area: 'first',   on: false},
		{ area: 'second',  on: false},
		{ area: 'third',   on: false},
		{ area: "fourth",  on: false}];

	//***** use for orderBy:random
	$scope.random = function() {
		return 0.5 - Math.random();
	};
}]);
	//***** allows expressions in music url
app.config(function($sceDelegateProvider) {
	$sceDelegateProvider.resourceUrlWhitelist([
		'self',
		// Allow loading from our assets domain.  Notice the difference between * and **.
		'audio/*']);
});
	//***** master word list
app.factory('masterlist', function( $rootScope ){
	var service = {
		tries:     0,
		wrong:    [],
		correct:  [],
		colors:     [
			{
				name: 'Red',
				sound: "audio/color.mp3",
				quarter: 'colors',
				Correct: false,
				tried: false
			},
			{
				name: 'White',
				sound: "audio/color.mp3",
				quarter: 'colors',
				Correct: false,
				tried: false
			},
			{
				name: 'Blue',
				sound: "audio/color.mp3",
				quarter: 'colors',
				Correct: false,
				tried: false
			},
			{
				name: 'Yellow',
				sound: "audio/color.mp3",
				quarter: 'colors',
				Correct: false,
				tried: false
			},
			{
				name: 'Black',
				sound: "audio/color.mp3",
				quarter: 'colors',
				Correct: false,
				tried: false
			},
			{
				name: 'Green',
				sound: "audio/color.mp3",
				quarter: 'colors',
				Correct: false,
				tried: false
			}],
		numbers:    [
			{
				name: 'One',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Two',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Three',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Four',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Five',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Six',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Seven',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Eight',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Nine',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			},
			{
				name: 'Ten',
				sound: "audio/number.mp3",
				quarter: 'numbers',
				Correct: false,
				tried: false
			}],
		words:      [
			{
				name: 'am',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'and',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'are',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'at',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'can',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'do',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'for',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'go',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'have',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'he',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'here',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'I',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'is',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'it',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'like',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'look',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'me',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'my',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'no',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'play',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false			 },
			{
				name: 'said',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'see',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'she',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'the',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'to',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'up',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'we',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'will',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'you',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'secondtest',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'thirdtest',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			},
			{
				name: 'will',
				sound: "audio/test.mp3",
				quarter: 'first',
				Correct: false,
				tried: false
			}
		],

		addCorrect: function(correctWord) {
			service.correct.push( correctWord);
			$rootScope.$broadcast('master.update');
			correctWord.tried = true;
			correctWord.Correct = true;
			console.log(service.correct);
		},
		addWrong: function(wrongWord) {
			service.wrong.push( wrongWord);
			$rootScope.$broadcast('master.update');
			service.tries = service.tries + 1;
			wrongWord.tried = true;
			console.log(service.wrong);
		}
}
	return service;
});
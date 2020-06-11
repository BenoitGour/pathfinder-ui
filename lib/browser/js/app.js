
var app = angular.module('pathfinderApp', ['ngMaterial', 'ngMdIcons', 'hljs'])
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo')
			.accentPalette('light-green')
			.warnPalette('red');
	});



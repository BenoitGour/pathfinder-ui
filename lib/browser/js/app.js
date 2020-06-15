
var app = angular.module('pathfinderApp', ['ngMaterial', 'ngMdIcons'])
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('light-blue')
			.accentPalette('light-green')
			.warnPalette('red')
			.backgroundPalette('grey')
			.dark();
	});


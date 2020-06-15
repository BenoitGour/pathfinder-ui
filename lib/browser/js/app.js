
var app = angular.module('pathfinderApp', ['ngMaterial', 'ngMdIcons'])
	.config(function ($mdThemingProvider) {

		$mdThemingProvider.theme('dark')
			.primaryPalette('light-blue')
			.accentPalette('light-green')
			.warnPalette('red')
			.backgroundPalette('grey')
			.dark();

		$mdThemingProvider.theme('light')
			.primaryPalette('light-blue')
			.accentPalette('light-green')
			.warnPalette('red')
			.backgroundPalette('grey');

		$mdThemingProvider.setDefaultTheme('light');
		$mdThemingProvider.alwaysWatchTheme(true);
	});


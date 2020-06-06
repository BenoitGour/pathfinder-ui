
var app = angular.module('pathfinderApp', ['ngMaterial', 'ngMdIcons'])
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo')
			.accentPalette('light-green')
			.warnPalette('red');
	});

app.factory('Page', function () {
	var packageJsonPath = process.cwd() + '/package.json';
	var packageJsonName = require(packageJsonPath).name;
	var packageJsonVersion = require(packageJsonPath).version;

	var title = 'Pathfinder - ' + packageJsonName + ' v' + packageJsonVersion;
	console.log('title:' + title);
	return {
		title: function () { return title; }
	};
});


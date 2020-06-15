
app.controller('MainController', function ($scope, RequestFactory, DataFactory) {
	/*
		{
			method: string,
			url: string,
			params: {obj},
			data: {obj},
			headers: {}
		}
		*/


	DataFactory.titlePromise.then(function (title) {
		$scope.title = title;
	});

	$scope.setParams = RequestFactory.setParams;
	$scope.populateData = RequestFactory.populateData;

	let currentView = window.localStorage.getItem('view');
	if (!currentView) currentView = 'Table';
	$scope.selected = currentView;

	$scope.changeDisplay = function (option) {
		$scope.selected = option;
		window.localStorage.setItem('view', $scope.selected);
	};

	$scope.$on('$viewContentLoaded', function () {
		console.log('view loaded');
	});

	$scope.updateHighlight = function () {
		document.querySelectorAll('pre > code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	};


	let currentTheme = window.localStorage.getItem('theme');

	if (!currentTheme) currentTheme = 'light';

	$scope.theme = currentTheme;

	$scope.toggleTheme = function () {
		if ($scope.theme === 'dark') {
			$scope.theme = 'light';
		} else if ($scope.theme === 'light') {
			$scope.theme = 'dark';
		}
		window.localStorage.setItem('theme', $scope.theme);
	};



});
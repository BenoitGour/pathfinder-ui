
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
	var viewOptions = ["Tree", "Table"];
	$scope.selected = "Table";

	$scope.changeDisplay = function (option) {
		$scope.selected = option;
	};



	$scope.$on('$viewContentLoaded', function () {
		console.log('view loaded');
	});

	$scope.updateHighlight = function () {
		document.querySelectorAll('pre > code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	};

});
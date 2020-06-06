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

console.log('scopes', $scope);
console.log('rf',RequestFactory);
console.log('df',DataFactory);

	console.log('node title', RequestFactory.getTitle());

	DataFactory.titlePromise.then(function(title){
		$scope.title = title;
	});


	$scope.setParams = RequestFactory.setParams;
	$scope.populateData = RequestFactory.populateData;
	var viewOptions = ["Tree", "Table"];
	$scope.selected = "Tree";

	$scope.changeDisplay = function (option) {
		$scope.selected = option;

		console.log('node title', RequestFactory.getTitle());
		$scope.title = RequestFactory.getTitle();
	};


	// $scope.setParams() //this is for testing until tree is hooked up to this controller

})
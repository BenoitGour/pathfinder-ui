app.controller('MainController', function($scope, RequestFactory, Page){
	/*
	{
		method: string,
		url: string,
		params: {obj},
		data: {obj},
		headers: {}
	}
	*/
	$scope.Page = Page;
	$scope.setParams = RequestFactory.setParams;
	$scope.populateData = RequestFactory.populateData;
	var viewOptions = ["Tree", "Table"];
	$scope.selected = "Tree";

	$scope.changeDisplay = function(option) {
		$scope.selected = option;
	};


	// $scope.setParams() //this is for testing until tree is hooked up to this controller

})
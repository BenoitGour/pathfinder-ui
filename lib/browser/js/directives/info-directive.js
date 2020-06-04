app.directive('info', function (RequestFactory) {

	return {
		restrict: 'E',
		templateUrl: "js/directives/info.html",
		scope: true,

		link: function (scope, elem, attr) {

			console.log('get route info');
			console.log(RequestFactory);
			console.log('getinfo', RequestFactory.getInfo());

			scope.routeInfo = RequestFactory.getInfo();

		}
	};
});
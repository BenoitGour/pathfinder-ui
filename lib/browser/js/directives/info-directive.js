
app.directive('info', function (RequestFactory) {

	return {
		restrict: 'E',
		templateUrl: "js/directives/info.html",
		scope: true,

		link: function (scope, elem, attr) {

			scope.routeInfo = RequestFactory.getInfo;
			scope.getMethod = RequestFactory.getMethod;

		}
	};
});
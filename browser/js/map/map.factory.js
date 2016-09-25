'use strict';

app.factory('MapFactory', function($http) {
	var MapFactory = {};

	var getData = function(res) {
		return res.data;
	};

	MapFactory.fetchAllMarkers = function() {
		return $http.get('/api/jobleads')
		.then(getData);
	};

	return MapFactory;
});

'use strict';

app.controller("mapCtrl", function($scope, MapFactory, uiGmapGoogleMapApi) {

    // Google map settings

    uiGmapGoogleMapApi.then(function(maps) {
        maps.visualRefresh = true;
        $scope.map = {
            center: {
                latitude: 41.878114,
                longitude: -87.629798
            },
            zoom: 12,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: true
            }
        };
        console.log($scope.map);
        $scope.isOffline = false;
    });

    $scope.onClick = function(marker, eventName, model) {
        console.log("Clicked!");
        model.show = !model.show;
    };

    // Create map markers

    $scope.markers = [];
    var oldMarkersIdArray = [];
    MapFactory.fetchAllMarkers()
        .then(function(markerArray) {
            var markers = angular.forEach(markerArray, function(marker) {
                // Assign 'coords' attribute here for the directive to read
                marker.coords = {
                    latitude: marker.lat,
                    longitude: marker.long
                };
                marker.idKey = marker.id;

                var dateObj = new Date(marker.createdAt);
                marker.createdAt = dateObj.toDateString();

                var dateDiff = Math.floor((new Date() - dateObj) / 1000 / 60 / 60 / 24);
                if (dateDiff <= 3) marker.icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
                if (dateDiff > 3 && dateDiff <= 7) marker.icon = 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png';
                if (dateDiff > 7 && dateDiff <= 14) marker.icon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
                if (dateDiff > 14) {
                    oldMarkersIdArray.push(marker.id);
                    // MapFactory.purge(marker.id)
                }
            });
            $scope.markers = markers.filter(function(obj) {
                return !(oldMarkersIdArray.includes(obj.id));
            });
        });
});

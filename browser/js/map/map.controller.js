'use strict';

app.controller("mapCtrl", function($scope, MapFactory, uiGmapGoogleMapApi) {

    uiGmapGoogleMapApi.then(function(maps) {
        maps.visualRefresh = true;
        $scope.map = {
            center: {
                latitude: 41.878114,
                longitude: -87.629798
            },
            // bounds: {
            //     northeast: {
            //         latitude: 47.427362,
            //         longitude: -66.355610
            //     },
            //     southwest: {
            //         latitude: 23.298928,
            //         longitude: -124.673759
            //     }
            // },
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

    // $scope.map.bounds = {
    //     northeast: {
    //         latitude: 47.427362,
    //         longitude: -66.355610
    //     },
    //     southwest: {
    //         latitude: 23.298928,
    //         longitude: -124.673759
    //     }
    // };

    $scope.markers = [];
    MapFactory.fetchAllMarkers()
        .then(function(markerArray) {
            // console.log('???????????????', markerArray);
            var markers = angular.forEach(markerArray, function(marker) {
                // Assign 'coords' attribute here for the directive to read
                marker.coords = {
                    latitude: marker.lat,
                    longitude: marker.long
                };
            });
            $scope.markers = markers;
            console.log($scope.markers);
        });
});

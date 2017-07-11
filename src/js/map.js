var markerList = [
    { title: 'Toit', lat: 12.9793822, lng: 77.6406363 },
    { title: 'Truffles', lat: 12.9332976396, lng: 77.6142926887 },
    { title: 'Big Brewsky', lat: 12.9129742, lng: 77.6830537 },
    { title: 'ABs - Absolute Barbecues', lat: 12.9497983, lng: 77.6993079 },
    { title: 'Communiti', lat: 12.9726926041, lng: 77.6083475724 },
    { title: 'Kormangala Social', lat: 12.9354246, lng: 77.6141871 },
    { title: 'Hoot', lat: 12.914264, lng: 77.6784 },
    { title: 'Flechazo', lat: 12.9753769124, lng: 77.6966639981 },
    { title: 'ECHOES', lat: 12.934179, lng: 77.615797 },
    { title: 'Barbeque Nation', lat: 12.9607795, lng: 77.6412627 },
    { title: 'Arbor Brewing Company', lat: 12.9701824099, lng: 77.610235177 },
    { title: 'The Hole in the Wall Cafe', lat: 12.9347439221, lng: 77.6257024705 },
    { title: 'High Ultra Lounge', lat: 13.0113161, lng: 77.5555831 },
    { title: 'Farzi Cafe', lat: 12.9721612, lng: 77.5960137 },
    { title: 'Windmills Craftworks', lat: 12.9820705, lng: 77.7218244 },
    { title: 'Vapour Pub & Brewery', lat: 12.9696261, lng: 77.640681 },
    { title: 'Fatty Bao - Asian Gastro Bar', lat: 12.9703746, lng: 77.6452452 },
    { title: 'biergarten', lat: 12.9824112, lng: 77.7085878 },
    { title: 'SodaBottleOpenerWala', lat: 12.9706495, lng: 77.5976253 },
    { title: 'Smoke House Deli', lat: 12.965557, lng: 77.641218 },
    { title: 'Toast & Tonic', lat: 12.966835, lng: 77.608727, },
    { title: 'Brik Oven', lat: 12.974711, lng: 77.605404 },
    { title: 'Rosavara - The Royal Kitchen', lat: 12.971721, lng: 77.596209 },
    { title: 'Shiro', lat: 12.971923, lng: 77.596542 },
    { title: 'Samaroh', lat: 12.970529, lng: 77.599503 },
    { title: 'Here & Now Cafe', lat: 12.913742, lng: 77.638301 },
    { title: 'Zzungry', lat: 12.911672, lng: 77.629827 },
    { title: 'RedFork', lat: 12.970407, lng: 77.642776 },
    { title: 'Kesariya', lat: 12.906616, lng: 77.589579 },
    { title: 'Sultans of Spice', lat: 12.933473, lng: 77.615188 },
    { title: 'Haagen Dazs', lat: 12.970205, lng: 77.643887 },
    { title: 'Monkey Bar', lat: 12.970468, lng: 77.645247 },
    { title: 'Shake It Off', lat: 12.919827, lng: 77.589590 },
    { title: 'Frozen Bottle', lat: 12.912379, lng: 77.638277 },
    { title: 'Third Wave Coffee Roasters', lat: 12.934806, lng: 77.629595 },
    { title: 'MudPipe Cafe', lat: 12.934632, lng: 77.609564 },
    { title: 'Lazy Suzy', lat: 12.970874, lng: 77.647465 }
];

// jQuery(function($) {
//     // Asynchronously Load the map API 
//     var script = document.createElement('script');
//     script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCRLZ6KbWKr9b3FDIGjcy7G9GLtonZaBDY&callback=initMap&v=3.exp';
//     document.body.appendChild(script);
// });


function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();

    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13,
        center: {
            lat: 12.966835,
            lng: 77.608727
        }
        // ,styles: [
        //     { stylers: [{ visibility: 'simplified' }] },
        //     { elementType: 'labels', stylers: [{ visibility: 'off' }] }
        // ]
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.setTilt(45);

    var infoWindow = new google.maps.InfoWindow(),
        position;

    markerList.forEach(function(markerInfo, index) {
        position = new google.maps.LatLng(markerInfo['lat'], markerInfo['lng']);
        bounds.extend(position);

        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markerInfo['title'],
            icon: {
                path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
                fillColor: '#cb202d',
                fillOpacity: 1,
                scale: 0.8,
                strokeColor: 'white',
                strokeWeight: 2
            }
        });

        // info Window for Each marker
        google.maps.event.addListener(marker, 'click', (function(marker, index) {
            return function() {
                infoWindow.setContent(marker['title']);
                infoWindow.open(map, marker);
            }
        })(marker, index));

        map.fitBounds(bounds);
    });

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(13);
        google.maps.event.removeListener(boundsListener);
    });
}

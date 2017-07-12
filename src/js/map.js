var map, infoWindow, markerIcon1, markerIcon2;

function initMap() {
    var mapOptions = {
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoom: 13,
        center: {
            lat: 12.966835,
            lng: 77.608727
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.setTilt(45);

    // Normal `Red` Icon
    markerIcon1 = {
        path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
        fillColor: '#cb202d',
        fillOpacity: 1,
        scale: 0.8,
        strokeColor: 'white',
        strokeWeight: 2
    };

    // onHover `Blue` Icon
    markerIcon2 = jQuery.extend({}, markerIcon1);
    markerIcon2.fillColor = '#0CB';

    // initiazing infoWindow to be used for markers
    infoWindow = new google.maps.InfoWindow();

    // applying knockout bindings
    ko.applyBindings(new ViewModel());
}

function googleMapError() {
    alert("There was an error in getting Google Maps Data. Please refresh and try again");
}

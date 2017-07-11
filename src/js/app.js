// Normal `Red` Icon
var markerIcon1 = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#cb202d',
    fillOpacity: 1,
    scale: 0.8,
    strokeColor: 'white',
    strokeWeight: 2
};

// Hover `Blue` Icon
var markerIcon2 = jQuery.extend({}, markerIcon1);
markerIcon2.fillColor = '#0CB';

var fourSquareURL;

// FourSqure `clientId` and `clientSecret`
var clientID = '5PHXENDJH4FANF5GFNTZK4QX5KV0MSLIU5MX51BYXCP1JLOF';
var clientSecret = 'X2UQHHRCEGYFO2Y05XJDG0WVSY3TZD13CEOJ4O00IUB0XCI3';


var Restaurant = function(data) {
    var self = this;
    self.name = data.name;
    self.lat = data.lat;
    self.lng = data.lng;
    self.address = '';
    self.phone = '';

    self.visible = ko.observable(true);
    self.infoWindow = new google.maps.InfoWindow({ content: this.name });

    // Getting the Data from FourSquare and setting into infoWindow
    fourSquareURL = 'https://api.foursquare.com/v2/venues/search?ll=' + self.lat + ',' + self.lng + '&client_id=' + clientID + '&client_secret=' + clientSecret + '&v=20170710' + '&query=' + this.name;
    $.getJSON(fourSquareURL, function(data) {
        var result = data.response.venues[0];
        self.address = result.location.formattedAddress.join('\n');
        self.phone = result.contact.formattedPhone || '';

        self.infoWindowContent = '<div class="marker-info">' +
            '<div>' + self.name + '</div>' +
            '<div>' + self.address + '</div>' +
            '<div>' + self.phone + '</div>' +
            '</div>';

        self.infoWindow.setContent(self.infoWindowContent);

    }).fail(function() {
        alert("Error in Getting Data from Foursquare API call. Please refresh the page and try again!");
    });

    self.marker = new google.maps.Marker({
        position: new google.maps.LatLng(self.lat, self.lng),
        map: map,
        title: self.name,
        icon: markerIcon1
    });

    self.showMarker = ko.computed(function() {
        if (self.visible() === true)
            self.marker.setMap(map);
        else
            self.marker.setMap(null);
    });

    self.marker.addListener('click', function() {
        map.panTo(self.marker.getPosition());
        self.infoWindow.open(map, this);
    });

    self.marker.addListener('mouseover', function() {
        self.marker.setIcon(markerIcon2);
    });

    self.marker.addListener('mouseout', function() {
        self.marker.setIcon(markerIcon1);
    });

    self.triggerClick = function() {
        google.maps.event.trigger(self.marker, 'click');
    };
    self.triggerMouseOver = function() {
        google.maps.event.trigger(self.marker, 'mouseover');
    };
    self.triggerMouseOut = function() {
        google.maps.event.trigger(self.marker, 'mouseout');
    };

};

var ViewModel = function() {
    var self = this;

    self.locationList = ko.observableArray([]);
    restaurantLocations.forEach(function(restaurant) {
        self.locationList.push(new Restaurant(restaurant));
    });

    self.filterText = ko.observable('');

    self.visibleLocationList = ko.computed(function() {
        if (!self.filterText().length) {
            self.locationList().forEach(function(locationItem) {
                locationItem.visible(true);
            });
            return self.locationList();
        }

        return ko.utils.arrayFilter(self.locationList(), function(locationItem) {
            var result = locationItem.name.toLowerCase().indexOf(self.filterText().toLowerCase()) > -1;
            locationItem.visible(result);
            return result;
        });
    });
};

ko.applyBindings(new ViewModel());

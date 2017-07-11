var markerIcon1 = {
    path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    fillColor: '#cb202d',
    fillOpacity: 1,
    scale: 0.8,
    strokeColor: 'white',
    strokeWeight: 2
};
var markerIcon2 = jQuery.extend({}, markerIcon1);
markerIcon2.fillColor = '#0CB';

var Restaurant = function(data) {
    var self = this;
    self.name = data.name;
    self.lat = data.lat;
    self.lng = data.lng;
    self.visible = ko.observable(true);

    self.infoWindow = new google.maps.InfoWindow({ content: self.name });

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
        //self.marker.setIcon(markerIcon2);
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
    }
    self.triggerMouseOver = function() {
        google.maps.event.trigger(self.marker, 'mouseover');
    }
    self.triggerMouseOut = function() {
        google.maps.event.trigger(self.marker, 'mouseout');
    }

}

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
            var result = locationItem.name.toLowerCase().indexOf(self.filterText().toLowerCase()) > -1
            locationItem.visible(result);
            return result;
        });
    });
}

ko.applyBindings(new ViewModel());

var ViewModel = function() {
    var self = this;

    self.mapLocations = mapLocations;
    //console.log(self.mapLocations);

    self.filterText = ko.observable('');

    self.visibleLocations = ko.computed(function() {
        if (!self.filterText().length) return self.mapLocations;

        return self.mapLocations.filter(function(location) {
            return location.title.toLowerCase().indexOf(self.filterText().toLowerCase()) > -1
        });
    });

    // self.filterLocation = function(data, event) {
    //     //console.log("filterLocation", event.target.value);
    //     //this.filterText(event.target.value);
    //     return true;
    //     //self.filterText
    // }

    // self.goToMarker = function(obj) {
    //     console.log("goToMarker", obj);
    // }
}

ko.applyBindings(new ViewModel());

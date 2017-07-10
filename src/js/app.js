var ViewModel = function() {
    var self = this;

    self.myName = ko.observable("Tushar Goel");

    self.goToMarker = function() {

    }
}

$(function() {
    ko.applyBindings(new ViewModel());
});

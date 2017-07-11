// Trigger Tooltip on elements
// $('[data-toggle="tooltip"]').tooltip();

$('#btn_side_nav').on('click', function(event) {
    $('#filter_nav').toggleClass('collapsed');
    $('#map').toggleClass('expanded');
});

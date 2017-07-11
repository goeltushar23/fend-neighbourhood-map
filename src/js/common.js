// Side Navigation
$('#btn_side_nav').on('click', function(event) {
    $('#filter_nav').toggleClass('collapsed');
    $('#map').toggleClass('expanded');
});

// Focus on Restaurant Filter Input
$('#filter_input').focus();

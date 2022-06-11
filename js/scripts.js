

var $scrollIndicator = $('.scroll_indicator');

// using waypoint to make sure the user knows to scroll down when 
// they see the testimonies section

$scrollIndicator.waypoint(function () {
    // first we make the opacity 1
    $scrollIndicator.css('opacity', '1');

    // then we wait 3 seconds and set it back to 0
    // also hide it so that the user can still scroll
    setTimeout(function (){
        $scrollIndicator.css('opacity', '0');
        $scrollIndicator.css('visibility','hidden');
    }, 2300);

}, {offset: '75%'});





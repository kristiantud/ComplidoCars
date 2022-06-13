

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



// for the hamburger part
// also make the navbar bigger
const menuBtn = document.querySelector('.navbar_burger_wrapper');
const navBar = document.querySelector('.navbar_');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen){
        menuBtn.classList.add('open');
        navBar.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBar.classList.remove('open');
        menuOpen = false;
    }
});

function closeNav(){
    if (menuOpen){
        menuBtn.classList.remove('open');
        navBar.classList.remove('open');
        menuOpen = false;
    }
}
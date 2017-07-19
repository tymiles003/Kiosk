$(document).ready(function() {
    toggleSlider();
    hotspotSlider();
    skipFade();
    toggleFullscreen();
    resetPointcloud();
});
 /**************end of document ready function ************/


/* Splash Video
*****************************************************/
window.getElementById("splash-video").playbackRate = 1.75;

document.getElementById("splash-video").addEventListener("ended", loadLanding);
function loadLanding(){
    window.location.href="../pages/landing.html";
};


/* Fade in landing after skip
*****************************************************/
function skipFade (){
    $("#skip-button").on("click", function() {
        $("body").fadeOut("slow", function() {
            $("body").load('../pages/landing.html #jquery-load-point').fadeIn("slow");
        });
            return false;
    });
};

/* Reset Pointcloud
*****************************************************/


/* Hotspot Scene Toggle
*****************************************************/
function toggleSlider (){
$("#toggle").click(function() {
    $("#hotspot-container").slideToggle();
    });
};


/* Carousel Slider
*****************************************************/
function hotspotSlider (){
    $('#hotspotCarousel').carousel("slow",{
	interval: 10000 })
};


/* HTML5 Fullscreen API
*****************************************************/
document.getElementById('fullscreen').addEventListener('click', function(){
toggleFullscreen();
});

function toggleFullscreen(elem) {
elem = elem || document.documentElement;
if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
} else {
    if (document.exitFullscreen) {
    document.exitFullscreen();
    } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    }
}
}

// $(document).ready(function(){
//     $("#toggle").click(function() {
//     $("#hotspot-container").css("display", "inline-block");
// });
// });


/* Sidebar/Controlbar Actions 
*****************************************************/
//Comment out until controlbar functinality has been decided
// $('#back').hide();
// $('.potree_container').on("click", 'div.annotation', function () { 
// 	$('#back').show();
// 	$('#about').hide();  
// });


    // // About Us
    // $("#about a").click(function() {
    //     // Reset overlays
    //     $(".open").toggle().removeClass("open");
    //     // load overlay html
    //     $("#potree_render_area").append($('<div>').load("../pages/about-us.html", function() {
    //         // set css
    //         $("#about-overlay").addClass("open").toggle();
    //         $('#potree_render_area').css('right', '33%');
    //         // Handle Overlay - Close button
    //         $(".overlay .close-button").click(function() {
    //             $(".open").toggle().removeClass("open");
    //             $('#potree_render_area').css('right', '0');
    //         }); 
    //     }));
    // });



        // // Reset overlays
        // $(".open").toggle().removeClass("open");
        // // load overlay html and set css
        // $("#potree_render_area").append($('<div>').load("../pages/help.html", function() {
        //     // set css
        //     $("#help-overlay").addClass("open").toggle();
        //     $('#potree_render_area').css('right', '33%');
        //     // Handle Overlay - Close button
        //     $(".overlay .close-button").click(function() {
        //         $(".open").toggle().removeClass("open");
        //         $('#potree_render_area').css('right', '0');
        //     });           
        // }));






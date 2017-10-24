 // Get the modal
var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (i = 0; i < modal_btn_multi.length; i++)
    {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}


for (i = 0; i < modal_btn_multi.length; i++)
{
    modal_btn_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
        $("body").css({'overflow': 'hidden' }); /* Tilføjer css til body - Prevent body from scrolling when box is open (can only scroll in popup box) */
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function() {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
        $("body").css({'overflow': "" }); /* Fjerner css fra body - aktiver scroll igen */
    };

}

window.onload = function() {

    setDataIndex();
};

window.onclick = function(event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
        $("body").css({'overflow': "" }); /* Fjerner css fra body - aktiver scroll igen */
    }

    // OLD CODE
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

/* MOBILE NAVIGATION
-------------------------------------------------------------------------------------------------------*/
/* Set the width of the side navigation to 260px */
function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* FOLLOW NAVIGATION
-------------------------------------------------------------------------------------------------------*/
(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 1100) {
                $('#follow_nav').fadeIn(500);
            } else {
                $('#follow_nav').fadeOut(500);
            }
        });
    });
})(jQuery);



/* LINK ANIMATION SMOOTH SCROLL
https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
-------------------------------------------------------------------------------------------------------*/
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


/* TO GO
-------------------------------------------------------------------------------------------------------*/
$(function() {
    $( "#datepicker-13" ).datepicker();
    });


$(function(){
    $( "#timepicker" ).timepicker(); 
});
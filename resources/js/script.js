function initMap() {
    const position = { lat: 16.459097, lng: 107.606874 };
    const map = new google.maps.Map(document.getElementById("location"), {
        zoom: 9,
        center: position,
    });
    const marker = new google.maps.Marker({
        position: position,
        map: map,
    });
}

const time = setInterval(function() {
    document.getElementById("datetime").innerHTML = new Date().toLocaleString();
});

$(document).ready(
    function() {
        $('.aboutme').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            } , {
                offset: '550px'
            }
        )

        $('a').click(function(event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 250);
            event.preventDefault();
        });

        $('.mobilelinkicon').click(
            function() {
                $('.headerlink').slideToggle(100);
                if ($('.mobilelinkicon').hasClass('fa-bars')) {
                    $('.mobilelinkicon').addClass('fa-times');
                    $('.mobilelinkicon').removeClass('fa-bars');
                } else {
                    $('.mobilelinkicon').addClass('fa-bars');
                    $('.mobilelinkicon').removeClass('fa-times');
                }
            }
        )
    }
)
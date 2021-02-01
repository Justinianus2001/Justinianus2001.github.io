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
            }, 1000);
            event.preventDefault();
        });

        $('.mobilelinkicon').click(
            function() {
                $('.headerlink').slideToggle(250);
                if ($('.mobilelinkicon').hasClass('fa-bars')) {
                    $('.mobilelinkicon').addClass('fa-times');
                    $('.mobilelinkicon').removeClass('fa-bars')
                } else {
                    $('.mobilelinkicon').addClass('fa-bars');
                    $('.mobilelinkicon').removeClass('fa-times')
                }
            }
        )
    }
)
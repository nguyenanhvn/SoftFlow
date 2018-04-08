$(document).ready(function() {
    var width_device = $(window).width();
    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    $('.banner').owlCarousel({
        loop:true,
        items: 1,
        dots: false,
        margin: 0,
        autoplay:true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });

    jQuery('.icon-menu').click(function(event) {
        if(jQuery('#menu-responsive').hasClass('active')){
            jQuery('#menu-responsive').removeClass('active');    
        } else {
            jQuery('#menu-responsive').addClass('active');
            $('#header-responsive .icon-search img').attr('src', 'images/icon-search.png');
            $('#header-responsive #box-search').removeClass('active');
            $('.language-menu').removeClass('active');
        }
    });
    if (width_device > 600) {
        jQuery('.parallax-1').parallax("100%", -0.2);
        jQuery('.parallax-2').parallax("10%", -0.2);
    }    
});
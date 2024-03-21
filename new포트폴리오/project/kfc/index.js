$(document).ready(function () {
    $(document).ready(function () {
    $('.sub_menu').hide();
    $('.main_menu').on('mouseenter', function () {
        $('.sub_menu').stop().fadeIn();
    });
    $('.main_menu').on('mouseleave', function () {
        $('.sub_menu').stop().fadeOut();
    });
});


    var animationFlag = false;
    $(window).scroll(function() {
        // Check if the window width is 1200px or larger
        if ($(window).width() >= 1200) {
            if (!animationFlag) {
                $('.best').each(function() {
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    if (bottom_of_window > bottom_of_element) {
                        $(this).addClass('animated').animate({'opacity':'1'}, 500);
                        animationFlag = true;
                    }
                });
            }
        }
    });
    // 모바일
    $('.app_menu .fa-bars').click(function(){
    $('.app_menu .fa-bars').fadeOut();
    $('.app_menu .fa-x').fadeIn();
    $('.app_sub').fadeIn();
});

$('.app_menu .fa-x').click(function(){
    $('.app_menu .fa-x').fadeOut();
    $('.app_menu .fa-bars').fadeIn();
    $('.app_sub').fadeOut();
});

});

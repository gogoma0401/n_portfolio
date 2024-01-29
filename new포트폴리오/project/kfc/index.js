$(document).ready(function () {
    $('.main_menu>li').hover(
        function () {
            // 마우스 진입 시
            $(this).find('.sub_menu').stop().animate({
                height: '150px'
            }, 500);
            $(this).find('.sub_menu').css('opacity', '1');
        },
        function () {
            // 마우스 떠날 시
            $(this).find('.sub_menu').stop().animate({
                height: '0'
            }, 500);
            $(this).find('.sub_menu').css('opacity', '0');
        }
    );

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

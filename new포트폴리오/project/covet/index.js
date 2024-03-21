// 헤더 hover효과
$(document).ready(function(){
    $('.submenu').mouseenter(function(){
        $(this).siblings('a').css('color','var(--pupule-color)');
    });
    $('.submenu').mouseleave(function(){
        $(this).siblings('a').css('color','#fff');
    });


//   슬라이드

    let currentIndex = 0; // 현재 화면(이미지)
    var firstClone = $('.slider').eq(0).clone(true);
    $('.slider_warp').append(firstClone) // 첫번째 이미지 복사-> 마지막에 추가
    circleIndex = $('circle').index();

    setInterval(function(){
        currentIndex++;
        $('.slider_warp').animate({marginLeft: -currentIndex * 100 + "vw"}, 500);

        $('.circle').eq(currentIndex).css('background-color','var(--pupule-color)');
        $('.circle').eq(currentIndex).siblings().css('background-color','#ffffff3e');

        if(currentIndex == 4){
            $('.circle').eq(3).css('background-color','#ffffff3e');
            setTimeout(function(){
                $('.circle').eq(0).css('background-color','var(--pupule-color)');
                $('.slider_warp').animate({marginLeft: 0}, 0); //애니매이션을 정지
                currentIndex = 0; //현재이미지 초기화  
            },2000);
            $('.circle').eq(0).css('background-color','var(--pupule-color)');
             
        }
    },2500)

    
    function circle(){
        
        $('.circle').click(function(){
            circleIndex = $(this).index();
            $('.slider_warp').animate({marginLeft: -circleIndex * 100 + "vw"}, 500);
            $(this).siblings().css('background-color','#fff')
            $(this).css('background-color','var(--pupule-color)');
        })
    }

    circle();

    $('.container2 .menu_icon').click(function() {
        $('.menu_full').css('display', 'block');
        $('.slider_box').css('z-index', '-999');
        $('.slider_warp').css('z-index', '-999');
        $('.slider').css('z-index', '-999');
    });
    $('.fa-solid').click(function() {
        $('.menu_full').css('display', 'none');
        $('.slider_box').css('z-index', '9');
        $('.slider_warp').css('z-index', '9');
        $('.slider').css('z-index', '9');
    });

});

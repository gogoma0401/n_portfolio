//스와이프
$(document).ready(function() {
    var swiper = new Swiper(".mySwiper", {
       
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    //헤더
    
        $('header .list_menu>li>a').mouseenter(function(){
            $('.list_menu .sub-list').css('opacity','1');
            $(this).css('color','#002c5f');
        });
        $('header .list_menu>li').mouseleave(function(){
            $('header .list_menu .sub-list').css('opacity','0');
            $('header .list_menu>li>a').css('color','#fff');
        });




    //롤링
    const animationBox = document.querySelector('.animation_box');

   
    const clone = animationBox.cloneNode(true);
    animationBox.appendChild(clone);

    let currentPosition = 0;
    const step = 1; 

    function animate() {
        currentPosition -= step;
        animationBox.style.transform = `translateX(${currentPosition}%)`;

        if (currentPosition <= -100) {
            currentPosition = 0;

            
            const newClone = clone.cloneNode(true);
            animationBox.appendChild(newClone);
        }

        requestAnimationFrame(animate);
    }

    animate();





new Swiper('.notice .swiper',{ 
  direction : 'vertical', // 수직 슬라이드
  autoplay : true, //자동 재생 여부
  loop:true	//반복 재생 여부
});

});
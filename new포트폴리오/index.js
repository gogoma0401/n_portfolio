$(document).ready(function () {
    const content = "안녕하세요. 신입 퍼블리셔 변준현입니다!";
    const text = document.querySelector(".text");
    text.textContent = "";
    let txtIdx = 0;

    function typing() {
        let txt = content[txtIdx++];
        if (txt === undefined) {
            // typing 함수가 끝났을 때, typing2 함수 호출
            typing2();
            return;
        }
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (txtIdx <= content.length) {
            setTimeout(typing, 100);
        }
    }
    typing();

    const content2 = "함께 일하고 배우며 미래를 꿈꾸는 개발자가 되고 싶습니다.";
    const slef_text = document.querySelector(".slef_text");
    slef_text.textContent = "";
    let txtIdx2 = 0;

    function typing2() {
        let txt = content2[txtIdx2++];
        if (txt === undefined) return;
        slef_text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (txtIdx2 <= content2.length) {
            setTimeout(typing2, 100);
        }
    }

    
    const toolLength = document.querySelectorAll('.icon_box ul li').length;
    for(var i = 0; i<toolLength; i++){
        const tool = document.querySelectorAll('.icon_box ul li')[i];
        const explan = document.querySelector('.explan').children[i];
            tool.addEventListener('mouseenter',function(){
                this.style.borderRadius = '40px'
                explan.style.opacity = '1';
            });
            tool.addEventListener('mouseleave',function(){
                this.style.borderRadius = '20px'
                explan.style.opacity = '0';
            });
        
    }

    $('.fa-bars').click(function(){
        $('.fa-xmark').css('display','block');
        $('.nav').css('display','block');
        $(this).css('display','none')
    })
    $('.fa-xmark').click(function(){
        $('.fa-bars').css('display','block');
        $('.nav').css('display','none');
        $(this).css('display','none')
    })
});

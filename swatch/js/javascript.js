$(document).ready (function(){

    let ht = $(window).height();

    $('section').height(ht)

    $(window).resize(function(){

            let ht = $(window).height();

    $('section').height(ht)
    }); //높이값을 찾아서 한페이지당 꽉 차게하기

    // nav li를 클릭할 떄 마다 sctollTop의 위치를 바꾸어라.

    $(window).scroll(function(){

            let sc = $(window).scrollTop()

    // $('h1').text(sc)
    })

    $('nav li').click(function(e){

        e.preventDefault()

        let i = $(this).index()
        console.log(i);
        let ht = $(window).height();

        $('html,body').stop().animate({scrollTop:ht*i},1400)
    });

// section 위에서 마우스를 올릴 때, 내릴 때 이벤트가 발생한다.


$('section').mousewheel(function(event,delta){

    if(delta>0){


        let prev = $(this).prev().offset().top //한페이지씩 딱딱 떨어지게 올릴 떄 (이래서 위로)
        $('html,body').stop().animate({scrollTop:prev},1400)
    }
        else if(delta<0){

            let next = $(this).next().offset().top //한페이지씩 딱딱 떨어지게 올릴 떄 (위에서 아래로라 next)
        $('html,body').stop().animate({scrollTop:next},1400)
        }


})


// 예제 윈도우에서 마우스를 올렸을 때, 마우스올림 글씨 출력
// 윈도우에서 마우스를 내렸을 때, 마우스내림 글씨 출력


// $(window).mousewheel(function(event,delta){

    // event.preventDefault() //원래 이벤트는 잃어버리고 델타를 가져와라.

    // 마우스를 올렸을 때 

//     if(delta>0){

//         $('h1').text('마우스올림')
//     }

//     else if(delta<0){

//     $('h1').text('마우스내림')
// }

// })



}) //제이쿼리끝
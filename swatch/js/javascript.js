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

    $('h1').text(sc)
    let ht = $(window).height();


    // if(sc>=ht*0 && sc<ht){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(0).addClass('on')
    // }



    // if(sc>=ht*1 && sc<ht*2){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(1).addClass('on')
    // }

    
    // if(sc>=ht*2 && sc<ht*3){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(2).addClass('on')
    // }

    
    // if(sc>=ht*3 && sc<ht*4){
    //     $('nav li').removeClass('on')
    //     $('nav li').eq(3).addClass('on')
    // }


    // 반복문을 활용한 축약설정

    for(var a=0; a<4; a++){

            if(sc>=ht*a && sc<ht*a+1){
        $('nav li').removeClass('on')
        $('nav li').eq(a).addClass('on')
    }
    }

    
    })

    $('nav li').click(function(e){

        e.preventDefault()

        let i = $(this).index()
        console.log(i);
        let ht = $(window).height();

        $('html,body').stop().animate({scrollTop:ht*i},1400);
        
        
        $('nav li').removeClass('on')
        $(this).addClass('on')
    });

// section 위에서 마우스를 올릴 때, 내릴 때 이벤트가 발생한다.


$('section').mousewheel(function(event,delta){

    if(delta>0){


        let prev = $(this).prev().offset().top 
        //한페이지씩 딱딱 떨어지게 올릴 떄 (이래서 위로)
        $('html,body').stop().animate({scrollTop:prev},1400,'easeOutBounce')
    }
        else if(delta<0){

            let next = $(this).next().offset().top //한페이지씩 딱딱 떨어지게 올릴 떄 (위에서 아래로라 next)
        $('html,body').stop().animate({scrollTop:next},1400,'easeOutBounce')
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





$('section').mousemove(function(e){

    let x = e.pageX;
    let y = e.pageY;

    console.log(x,y)

    $(this).find('.p11').css({'bottom':20+(y/50),'right':20+(x/50)})
    // 마이너스면 마우스를 따라 움직이고, 플러스면 마우스 반대로 움직임.
    // this의 find로 하면 다른페이지로 갔을 땐 안움직임.

    $(this).find('.p12').css({'top':20+(y/10),'right':20+(x/10)})
    $(this).find('.p13').css({'top':20-(y/10),'right':20-(x/10)})

    $(this).find('.p21').css({'bottom':20+(y/50),'right':20+(x/50)})
    $(this).find('.p22').css({'top':20+(y/50),'left':20+(x/50)})

    $(this).find('.p31').css({'top':20+(y/50),'left':20+(x/50)})
    $(this).find('.p32').css({'top':20+(y/20),'left':20+(x/20)})
    $(this).find('.p33').css({'top':20-(y/10),'left':20-(x/10)})

    $(this).find('.p41').css({'top':20-(y/10),'left':20-(x/10)})
    $(this).find('.p42').css({'top':20+(y/60),'left':20+(x/60)})


    
})






}) //제이쿼리끝
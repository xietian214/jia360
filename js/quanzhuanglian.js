$(function(){ 
    // 手风琴效果
    (function(){
        $('.qzl_con01 .w390 ul li').on('mouseover',function(){
            $(this).addClass('cur').siblings('li').removeClass('cur');
        })
    })();
    // 招财情报
    (function(){
        $('.zhaocaibox .navul li').on('mouseover',function(){
            var _index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent('ul').siblings('div').children('.artbox').eq(_index).addClass('active').siblings().removeClass('active');
        })
    })();
    // 楼盘案例
    $('.loupananli').on('mouseenter','.loupanbox a',function(){
        $(this).find('div').stop().animate({top:0}, 500);
        $(this).find('.p1').stop().animate({marginTop:'80px',fontSize:'18px'}, 500);
    })
    $('.loupananli').on('mouseleave','.loupanbox a',function(){
        $(this).find('div').stop().animate({top:'173px'}, 500);
        $(this).find('.p1').stop().animate({marginTop:0,fontSize:'16px'}, 500);
    })
})
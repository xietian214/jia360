$(function(){ 
    /*banner*/
    playbox({className:'Products_banner',hovbtn:true,arrow: false});
    
    /*tab标签切换*/
    $(".tab_ul li").on("mouseover",function(ev){
        var _this = $(this);
        var index = _this.index();
        _this.addClass("active").siblings().removeClass("active");
        var left = _this.position().left + 15;
        $(this).parent().siblings(".line").stop().animate({left:left},150)
        $(this).parent().siblings(".tab_box").find('ul').eq(index).fadeIn().siblings().fadeOut();
        ev.stopPropagation();
    }).eq(0).trigger("mouseover");
    
    $('.roundabout_box ul').roundabout({
        duration: 1000,//动画速度
        minScale: 0.6,
        autoplay: true,
        autoplayDuration: 5000,
        minOpacity: 1,
        maxOpacity: 1,
        reflect: true,
        startingChild: 3,
        autoplayInitialDelay: 5000,
        autoplayPauseOnHover: true,
        enableDrag: true,
        btnNext: '#next',
        btnPrev: '#previous'
    });
    
    //鼠标悬浮出现阴影
    $('.liHover').hover(function(){
        $(this).addClass('box_hov');
    },function(){
        $(this).removeClass('box_hov');
    });
    
})




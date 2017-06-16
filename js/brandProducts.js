$(function(){ 
    /*banner*/
    (function(){
        var bannerPage = $(".brandBox .playbox");
        var imgnum = $('.brandBox .swiper-slide').length;
        if (imgnum > 1) {
            $('.brandBox .arrow-left,.brandBox .arrow-right').show();
            var mySwiper = new Swiper('.brandBox .swiper-container',{
                pagination: '.brandBox .pagination',
                paginationClickable: true,
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.brandBox .arrow-left').on('click', function(e){
                e.preventDefault()
                mySwiper.swipePrev();
            });
            $('.brandBox .arrow-right').on('click', function(e){
                e.preventDefault()
                mySwiper.swipeNext();
            });
            bannerPage.on("mouseenter",function(){
                mySwiper.stopAutoplay();
            });
            bannerPage.on("mouseleave",function(){
                mySwiper.startAutoplay();
            });
        }else{
            $('.brandBox .arrow-left,.brandBox .arrow-right').hide();
        };
    })();
    
    /*tab标签切换*/
    $('.tab_ul li').on('mouseover',function(ev){
        var _istrue = $(this).attr('class')!=$('.tab_ul .active').attr('class');
        if (_istrue) {
            var _thisIndex = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().siblings('.tab_box').children('ul').fadeOut('fast').eq(_thisIndex).fadeIn('fast');
            ev.stopPropagation();
        };
        
    });
    
})




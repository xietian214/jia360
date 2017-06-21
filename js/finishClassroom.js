$(function(){
    /*banner*/
    (function(){
        var bannerPage = $(".finishBox .playbox");
        var imgnum = $('.finishBox .swiper-slide').length;
        if (imgnum > 1) {
            $('.finishBox .arrow-left,.finishBox .arrow-right').show();
            var mySwiper = new Swiper('.finishBox .swiper-container',{
                pagination: '.finishBox .pagination',
                paginationClickable: true,
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.finishBox .arrow-left').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipePrev();
            });
            $('.finishBox .arrow-right').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipeNext();
            });
            bannerPage.on("mouseenter",function(){
                mySwiper.stopAutoplay();
            });
            bannerPage.on("mouseleave",function(){
                mySwiper.startAutoplay();
            });
        }else{
            $('.finishBox .arrow-left,.finishBox .arrow-right').hide();
        };
    })();
    /*tab标签切换*/
    $('.tab_ul li').on('mouseover',function(ev){
        var _thisIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_box .tab_div').eq(_thisIndex).show().siblings().hide();
        ev.stopPropagation();
    });
})




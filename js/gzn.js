$(function(){ 
    /*toplistnav*/
    (function(){
        var pHeight = $('.snav_listbox .lab_box div').height();
        $('.sl_up').hide();
        $('.snav_listbox .sl_more').on('click',function(){
            $('.snav_listbox .lab_box').animate({height: pHeight}, "400");
            $(this).hide().siblings('.sl_up').show();
        });
        $('.snav_listbox .sl_up').on('click',function(){
            $('.snav_listbox .lab_box').animate({height: '35px'}, "400");
            $(this).hide().siblings('.sl_more').show();
        });
    })();
    /*banner*/
    (function(){
        var bannerPage = $(".common01 .playbox");
        var imgnum = $('.common01 .swiper-slide').length;
        if (imgnum > 1) {
            $('.common01 .arrow-left,.common01 .arrow-right').show();
            var mySwiper = new Swiper('.common01 .swiper-container',{
                pagination: '.common01 .pagination',
                paginationClickable: true,
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.common01 .arrow-left').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipePrev();
            });
            $('.common01 .arrow-right').on('click', function(e){
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
            $('.common01 .arrow-left,.common01 .arrow-right').hide();
        };
    })();
    /*banner*/
    (function(){
        var bannerPage = $(".common02 .playbox");
        var imgnum = $('.common02 .swiper-slide').length;
        if (imgnum > 1) {
            $('.common02 .arrow-left,.common02 .arrow-right').show();
            var mySwiper = new Swiper('.common02 .swiper-container',{
                paginationClickable: true,
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.common02 .arrow-left').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipePrev();
            });
            $('.common02 .arrow-right').on('click', function(e){
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
            $('.common02 .arrow-left,.common02 .arrow-right').hide();
        };
    })()
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
    
    /*图片logo*/
    /*$('.common05 .combox li').hover(function(){
        console.log($(this).index());
        $(this).css('position','absolute');
        $(this).css('width','200px;')
    },function(){
        $(this).css('position','relative');
        $(this).css('width','200px;')
    })*/
})




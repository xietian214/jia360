$(function(){
    //bannner
    (function(){
        var bannerSwiper = new Swiper('#banner_swiper',{
            onlyExternal:true,
            speed:300,
            autoplay : 3000
        });

        var timer;
        $(".swiper-btnLeft").on("click",function(){
            clearTimeout(timer);
            bannerSwiper.swipeNext();
            timer = setTimeout(function(){
                bannerSwiper.startAutoplay();
            },300)
        });

        $(".swiper-btnRight").on("click",function(){
            clearTimeout(timer);
            bannerSwiper.swipePrev();
            timer = setTimeout(function(){
                bannerSwiper.startAutoplay();
            },300)
        });

      })();

    //体验馆
    (function(){
        var gylysSwiper = new Swiper('#gylys_swiper',{
            onlyExternal:true,
            speed:300
        });

        $(".gylys-list dl").on("mouseover",function(){
            var i = $(this).index();
            gylysSwiper.swipeTo(i,300,true);
        })
    })();

    //体验馆
    (function(){
        var tygSwiper = new Swiper('#tyg_swiper',{
            onlyExternal:true,
            speed:300
        });

        $(".tyg-list .tyg-row").on("mouseover",function(){
            var i = $(this).index();
            tygSwiper.swipeTo(i,300,true);
        })
    })();
})




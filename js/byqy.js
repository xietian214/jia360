$(function(){
    //bannner
    (function(){
        var bannerSwiper = new Swiper('#banner_swiper',{
            onlyExternal:true,
            autoplayDisableOnInteraction:false,
            speed:300,
            autoplay : 3000,
            pagination : '.banner-page'
        });

        $("#banner_btnLeft").on("click",function(){
            bannerSwiper.swipeNext();
        });

        $("#banner_btnRight").on("click",function(){
            bannerSwiper.swipePrev();
        });

    })();

    //精选产品
    (function(){
        var jxcpSwiper = new Swiper('#jxcp_swiper',{
            onlyExternal:true,
            speed:300,
            slidesPerView : 'auto'
        });

        $("#jxcp_btnLeft").on("click",function(){
            jxcpSwiper.swipeNext();
        });

        $("#jxcp_btnRight").on("click",function(){
            jxcpSwiper.swipePrev();
        });
    })();

    //行热动态
    (function(){
        var hydtSwiper = new Swiper('#hydt_swiper',{
            onlyExternal:true,
            speed:300
        });

        $("#hydt_list").on("mouseover","dd",function(){
            var i = $(this).index() - 1;
            hydtSwiper.swipeTo(i,300,true);
        })
    })();

    //企业动态
    (function(){
        var qydtSwiper = new Swiper('#qydt_swiper',{
            onlyExternal:true,
            speed:300
        });

        $("#qydt_list").on("mouseover","dd",function(){
            var i = $(this).index() - 1;
            qydtSwiper.swipeTo(i,300,true);
        })
    })();

    //人物风采
    (function(){
        var rwfcSwiper = new Swiper('#rwfc_swiper',{
            onlyExternal:true,
            autoplayDisableOnInteraction:false,
            speed:300,
            autoplay : 3000
        });

        $("#rwfc_btnLeft").on("click",function(){
            rwfcSwiper.swipeNext();
        });

        $("#rwfc_btnRight").on("click",function(){
            rwfcSwiper.swipePrev();
        });
    })();

    //大事记
    (function(){
        var dsjSwiper = $("#dsj_swiper");
        var dsjWrapper = $(".dsj_swiper_wrapper");
        var imgWidth = dsjWrapper.find("img").width();
        dsjWrapper.css("width",imgWidth);
        var left = 0;
        var time = 15;

        if(imgWidth <= dsjSwiper.width()) return false;

        var timer = setInterval(function(){
            left--;
            doPlay();
        },time);

        dsjSwiper.on("mouseenter",function(){
            clearInterval(timer);
        });

        dsjSwiper.on("mouseleave",function(){
            isDown = false;
            dsjSwiper.css("cursor","default");
            timer = setInterval(function(){
                left--;
                doPlay();
            },time);
        });

        var isDown = false;
        var startX = 0;
        dsjSwiper.on("mousedown",function(ev){
            startX = ev.pageX;
            isDown = true;
            dsjSwiper.css("cursor","move");
        });

        var moveX = 0;
        dsjSwiper.on("mousemove",function(ev){
            moveX = ev.pageX;
           if(isDown){
               if(startX - moveX > 0){
                   left -= 5;
               }else{
                   left += 5;
               }
               doPlay();
           }
            startX = moveX;
        });

        function doPlay(){
            if(isDown){
                if(left <= -(imgWidth - dsjSwiper.width())){
                    left = -(imgWidth - dsjSwiper.width());
                }else if(left >= 0){
                    left = 0;
                }
            }else{
                if(left <= -(imgWidth - dsjSwiper.width())){
                    left = 0;
                }
            }
            dsjWrapper.css("left",left)
        }

        dsjSwiper.on("mouseup",function(ev){
            isDown = false;
            dsjSwiper.css("cursor","default");
        });

        dsjWrapper.on("mousemove","img",function(ev){
            ev.preventDefault();
        })

        dsjWrapper.on("mousedown","img",function(ev){
            ev.preventDefault();
        })


    })();

})

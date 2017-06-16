$(function(){
    //bannner
    (function(){
        var bannerPage = $(".banner-page");
        var addCls = "cur";
        var bannerSwiper = new Swiper('#banner_swiper',{
            onlyExternal:true,
            speed:300,
            autoplay : 3000,
            onImagesReady: function(swiper){
                var slides = swiper.slides;
                var len = slides.length;
                if(len > 0){
                    for(var i = 0; i < len ;i++ ){
                        bannerPage.find(">div").append('<div class="page-point"></div>');
                    }
                    bannerPage.find(".page-point").eq(0).addClass(addCls);
                }
            },
            onSlideChangeStart: function(swiper){
                var aIndex = swiper.activeIndex;
               bannerPage.find(".page-point").eq(aIndex).addClass(addCls).siblings().removeClass(addCls);
            }
        });

        bannerPage.on("mouseenter",".page-point",function(){
            var index = $(this).index();
            bannerSwiper.swipeTo(index,300,true);
            bannerSwiper.stopAutoplay();
        })
        bannerPage.on("mouseleave",".page-point",function(){
            bannerSwiper.startAutoplay();
        })
    })();


    //精品案例选项卡
    $(".case-nav img").on("mouseover",function(ev){
        var oLi = $(this).parents("li");
        var index = oLi.index();
        oLi.addClass("cur").siblings().removeClass("cur");
        $(".case-list").eq(index).fadeIn().siblings().fadeOut();
        ev.stopPropagation();
    }).eq(0).trigger("mouseover");

    //找产品选项卡
    $(".product-nav li").on("mouseover",function(ev){
        var _this = $(this);
        var index = _this.index();
        _this.addClass("cur").siblings().removeClass("cur");
        var left = _this.position().left + 15;
        $(".product-slider").stop().animate({left:left},150)
        $(".product-list").eq(index).fadeIn().siblings().fadeOut();
        ev.stopPropagation();
    }).eq(0).trigger("mouseover");

    //产品侧栏导航
    $("#sidebar_nav>div").on("mouseover",function(ev){
        var _this = $(this);
        var index = _this.index();
        _this.addClass("cur").siblings().removeClass("cur");
        $(".sidebar-nav-list").eq(index).show().siblings().hide();
        ev.stopPropagation();
    }).eq(0).trigger("mouseover");
    //底部广告
    $(".advertise_bclose").on("click",function(ev){
        $(this).parents(".advertise_bottom").hide();
        ev.stopPropagation();
    });
    //全屏广告
    (function(){
        $('.advertise_tclose').click(function(){
            $('.advertise_top').hide();
        });
        //全屏关闭
        !$('.advertise_all').length && $('.advertise_bottom').css('display','block');
        var advAll_close = function(){
            $('.advertise_all').hide();
            $('.advertise_bottom').css('display','block');
        }
        $('.advertise_allclose').click(function(){
            advAll_close();
        });
        var itimeall = setTimeout(function(){
            advAll_close();
        },8000);
        //对联广告
        $('.coupletclose').click(function(){
            $(this).parent('div').hide();
        });
        $(window).scroll(function() {
            var scrollTop = $(this).scrollTop();
            if (scrollTop >= 170){
                $(".adverleft,.adverright").addClass('fixed');
            } else {
                $(".adverleft,.adverright").removeClass('fixed');
            };
        });
        if ($(window).width()<1560) {
            $('.adverleft').css({left:0,right:'auto'});
            $('.adverright').css({right:0,left:'auto'});
        };
        //顶部通栏广告
        var flagAdv = $('.headerAdv').attr('data-visible');
        var topadvUp = function(){
            $('.headA').stop().animate({height:"80px"},1000,function(){
                $('.advertise_updown').html('展开');
                upd = 1;
                $('.advDown').css('display','none');
                $('.advUp').css('display','block');
            });
            $('.adverleft,.adverright,.advertise_all').stop().animate({top:"278px"},1000);
        };
        var topadvDown = function(){
            $('.advDown').css('display','block');
            $('.advUp').css('display','none');
            $('.headA').stop().animate({height:"319px"},1000,function(){
                $('.advertise_updown').html('收起');
                upd = 0;
            });
            $('.adverleft,.adverright,.advertise_all').stop().animate({top:"515px"},1000);
        }
        //展开收起
        var upd = 0;
        $('.advertise_updown').click(function(){
            clearTimeout(itime);
            if (upd == 0) {
                topadvUp();
            }else{
                topadvDown();
            };
        });
        var itime;
        if (flagAdv == 1) {
            $('.header-ad').remove();
            itime = setTimeout(function(){
                topadvUp();
            },5000);
        }else{
            $('.headerAdv').remove();
            $('.adverleft,.adverright,.advertise_all').css({top:"278px"});
        }
        /*关闭顶部广告*/
        $('.allAdvClose').on('click',function(){
            $('.headerAdv').remove();
        })
    })();

    // 买家具
    $('.home_tabul span').on('mouseover',function(ev){
        $(this).addClass('active').siblings().removeClass('active');
        var _index = $(this).attr('tabspan')-1;
        $(".home_tabbox .divbox").eq(_index).fadeIn().siblings().fadeOut();
        ev.stopPropagation();
    });

    /*黄金小广告*/
    var listgg_li = $(".hjadv li");
    $(".imgs,.imgname").on("mouseenter",function(){      
        var that = $(this).siblings(".imgl");
        $(".imgl").css("z-index",1);
        that.css("z-index",2);
        that.fadeIn(function(){
            $(".imgl").not(that).hide();
        });
        
    });
    $(".hjadv").on("mouseleave",function(){
        $(".imgl").hide();
    });

        
});





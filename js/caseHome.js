$(function(){ 
    /*案例首页banner*/
    (function(){
        var bannerPage = $(".caseHome .playbox");
        var imgnum = $('.caseHome .swiper-slide').length;
        if (imgnum > 1) {
            $('.caseHome .arrow-left,.caseHome .arrow-right').show();
            var mySwiper = new Swiper('.caseHome .swiper-container',{
                pagination: '.caseHome .pagination',
                paginationClickable: true,
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.caseHome .arrow-left').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipePrev();
            });
            $('.caseHome .arrow-right').on('click', function(e){
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
            $('.caseHome .arrow-left,.caseHome .arrow-right').hide();
        };
    })();
    /*案例详情banner*/
    (function(){
        var bannerPage = $(".caseDetBox .playbox");
        var imgnum = $('.caseDetBox .swiper-slide').length;
        if (imgnum > 1) {
            $('.caseDetBox .arrow-left,.caseDetBox .arrow-right').show();
            var mySwiper = new Swiper('.caseDetBox .swiper-container',{
                pagination: '.caseDetBox .pagination',
                paginationClickable: true,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.caseDetBox .arrow-left').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipePrev();
            });
            $('.caseDetBox .arrow-right').on('click', function(e){
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
            $('.caseDetBox .arrow-left,.caseDetBox .arrow-right').hide();
        };
        $('.caseDetBox .playbox .arrow-left,.caseDetBox .playbox .arrow-right').hide();
        $('.caseDetBox .playbox').hover(function(){
            $('.caseDetBox .playbox .arrow-left,.caseDetBox .playbox .arrow-right').show();
        },function(){
            $('.caseDetBox .playbox .arrow-left,.caseDetBox .playbox .arrow-right').hide();
        });
    })();
    /*案例首页筛选*/
    $('.caseScreenbox .list1').each(function(){
        var _aNum = $(this).children('.listUl').children('a').length;
        _aNum <= 11 && $(this).children('.more').hide();
    });
    $('.caseScreenbox .list').each(function(){
        var _aNum = $(this).children('.listUl').children().length;
        _aNum <= 10 && $(this).children('.more').hide();
    });
    var _more = function(_list){
        _list.children('.more').click(function(){
            var _heig = 0 , _num = 0;
            if (_list.attr('class')=='clearfl list') {
                _heig = 54;
                _num = 10;
            }else{
                _heig = 70;
                _num = 7;
            };
            var _listUl_height = _heig*Math.ceil(($(this).prev('.listUl').children().length-1)/_num);
            if ($(this).hasClass('moreUp')) {
                $(this).removeClass('moreUp').prev().stop(true,true).animate({height:_heig+'px'}, "300");
            }else{
                $(this).addClass('moreUp').prev().stop(true,true).animate({height:_listUl_height}, "300");
            };
        })
    };
    _more($('.caseScreenbox .list1'));
    _more($('.caseScreenbox .list'));
    /*案例详情去style*/
    $('.caseDetBox .caseRight dt p').removeAttr("style");
})

/*案例首页调用案例*/
var _httpAjax = function(){
        /*瀑布流*/
        var ajaxLock = false;
        var page = 2; //page
        //初始化页面    
        window.onscroll=function(){
            var flag = checkscrollside();
            if(flag && !ajaxLock){
                ajax(page);
                page++;
            };
        };
        function checkscrollside(){
            var $aPin = $( "#waterfall>div" );
            var lastPinH = 0;
            //最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
            $aPin.length == 0 ? lastPinH = 0 : lastPinH = parseInt($aPin.last().offset().top) + Math.floor($aPin.last().height()/2);
            var scrollTop = $(window).scrollTop()
            var winH = $(window).height();
            return (lastPinH < scrollTop + winH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
        }

        function ajax(page){
            var _url = window.location.href;
            _url = _url.replace(/x\/index/,'x\/ajaxlist');
            ajaxLock = true;
            $.ajax({
                url:'data.json',
                type:"get",
                dataType:"json",
                data:{
                    p : page
                },
                success:function(res){
                    if(res){
                        var dataList = res.list;
                        if(dataList.length != 0){
                            $.each(dataList, function( index, value ){
                                var _url = 'http://m.jia360.com/cases/index/detail/id/'+value.id+'.html';
                                var html = '';
                                html += '<div class="case_box_list"><a href="';
                                html += _url
                                html += '"><p class="case_box_list_img"><img src="';
                                html += value.pic_url
                                html += '" /></p><p class="case_box_list_text">';
                                html += value.title
                                html += '</p></a></div>';
                                $(html).appendTo($('#waterfall'));
                            });
                            $('#waterfall').waterfall();
                            ajaxLock = false;
                        }else{
                            //加载到底
                            ajaxLock = true;
                            $('#prompt').css('display','block');
                        }
                    }
                },
                error: function(e){
                    console.warn("ajax error")
                }
            })
        }
    }

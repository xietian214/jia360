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
        var bannerPage = $(".newsBox .playbox");
        var imgnum = $('.newsBox .swiper-slide').length;
        if (imgnum > 1) {
            $('.newsBox .arrow-left,.newsBox .arrow-right').show();
            var mySwiper = new Swiper('.newsBox .swiper-container',{
                pagination: '.newsBox .pagination',
                paginationClickable: true,
                autoplay : 3000,
                speed:300,
                autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                loop: true,
                noSwiping : true
            })
            $('.newsBox .arrow-left').on('click', function(e){
                e.preventDefault()
                /*var swiper = $(this).siblings('.swiper-container');*/
                mySwiper.swipePrev();
            });
            $('.newsBox .arrow-right').on('click', function(e){
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
            $('.newsBox .arrow-left,.newsBox .arrow-right').hide();
        };
    })();
    
    var data_hashname = $('.newsBox .tab_ul .active').attr('data-hashname');
    /*tab标签切换*/
    $('.tab_ul li').on('mouseover',function(ev){
        var _thisIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tab_box .tab_div').eq(_thisIndex).show().siblings().hide();
        ev.stopPropagation();
    });
    /*瀑布流*/
    var ajaxLock = false;
    var page = 2; //page
    
    //初始化页面
    ajax(data_hashname,1); //初始页面加载
    $('#loadMore').on('click',function(){
        if(!ajaxLock){
            ajax(data_hashname,page);
            page++;
        }
    })

    function ajax(data_hashname,page){
        ajaxLock = true;
        var _url = '/index/getNews';
        $.ajax({
            url: _url,
            type:"get",
            dataType:"json",
            data:{
                cid: data_hashname,
                p : page
            },
            success:function(res){
                if(res){
                    var dataList = res;
                    if(dataList.length != 0){
                        $.each(dataList, function( index, value ){
                            var Oimg = JSON.parse(value.smeta);
                            for (var OimgSrc in Oimg) {
                                var imgSrc = [];
                                $.each(Oimg[OimgSrc],function(ind,val){
                                    if (val =="") {return false};
                                    imgSrc[ind] = val;
                                });
                            };
                            value.id = 'http://www.jia360.com/new/'+value.id+'.html';
                            var html = '';
                            html += '<li class="li1"><a target="_blank" href="';
                            html += value.id
                            html += '" title="';
                            html += value.title
                            html += '" class="fl"><img src="';
                            html += imgSrc[0]
                            html += '" alt="';
                            html += value.title
                            html += '" /></a><div class="font"><h6><a target="_blank" href="';
                            html += value.id
                            html += '" title="';
                            html += value.title
                            html += '">';
                            html += value.title
                            html += '</a></h6><p>';
                            html += value.desc
                            html += '</p><span>';
                            html += value.date
                            html += '</span></div></li>';                              
                            $(html).appendTo($('#waterfall'));
                        });
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
})




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
    
    //鼠标悬浮出现阴影
    $('.liHover').hover(function(){
        $(this).addClass('box_hov');
    },function(){
        $(this).removeClass('box_hov');
    });

    //品牌列表鼠标悬浮
    $('.produL_content,.tuijian').on('mouseenter','li',function(){
        $(this).addClass('hov');
    });
    $('.produL_content,.tuijian').on('mouseleave','li',function(){
        $(this).removeClass('hov');
    });

    //产品详情
    var sHeight = $('.proDet_bot .right').outerHeight()-$('.proDet_bot .tuijian').outerHeight()-155;
    var rightHeight1 = $('.proDet_bot .right').outerHeight();
    var outsHeight1 = $('.proDet_bot .left .tabdiv').eq(0).outerHeight()+50+20+388;
    var outsHeight2 = $('.proDet_bot .left .tabdiv').eq(1).outerHeight()+50+20+388;
    console.log(outsHeight2);
    if(outsHeight1<=rightHeight1){
        $('.proDet_bot .left .tabdiv').eq(0).find('.upDown').css('display','none');
    }else{
        $('.proDet_tabBox .tabdiv').eq(0).height(sHeight);
    };
    if(outsHeight2<=rightHeight1){
        $('.proDet_bot .left .tabdiv').eq(1).find('.upDown').css('display','none');
    }else{
        $('.proDet_tabBox .tabdiv').eq(1).height(sHeight);
    }
    
    $('.proDet_tabBox').on('click','.upDown',function(e){
        if($(e.target).parents('.tabdiv').attr('datnum')==0){//展开
            $(e.target).parents('.tabdiv').attr('datnum','1').height('auto');
            $(e.target).text('收起').parent('.upDown').addClass('up');
        }else{//合上 
            $(e.target).parents('.tabdiv').attr('datnum','0').height(sHeight);
            $(e.target).text('展开').parent('.upDown').removeClass('up');
        }
    });
    $('.proDet_top .s img').on('mouseover',function(){
        var _index = $(this).index();
        $(this).addClass('cur').siblings().removeClass('cur').parent().siblings('.l').find('img').eq(_index).addClass('cur').siblings().removeClass('cur');
    })
    /*产品详情tab标签切换*/
    $(".tabUl li").on("click",function(ev){
        var _this = $(this);
        var index = _this.index();
        _this.addClass("active").siblings().removeClass("active");
        var left = _this.position().left + 15;
        $(this).parent().siblings(".line").stop().animate({left:left},150)
        $(this).parent().siblings(".tabBox").find('.tabdiv').eq(index).css('display','block').siblings().css('display','none');
        ev.stopPropagation();
    }).eq(0).trigger("click");
    //品牌十大排行
    $('.brandList_content li').eq(1).children('.num').addClass('nu2').parent('li').next().children('.num').addClass('nu3');
    //品牌详情-更多产品
    var braD_productlist = $('#braD_product li').length;
    if(braD_productlist>5){
        $('#braD_moreproduct').on('click',function(){
            var _thisH = $(this).prev('ul').height();
            if(_thisH == 290){
                $(this).prev('ul').height('auto');
                $(this).attr('class','brandDe_Down').find('span').text('收起');
            }else{
                $(this).prev('ul').height('290px');
                $(this).attr('class','brandDe_up').find('span').text('展开');
            }
        })
    }else{
        $('#braD_moreproduct').css('display','none');
    }
    //品牌详情-更多品牌描述
    $('#brandDet_fontmore').on('click',function(){
        $(this).prev('p').height('auto');
    })
    //品牌详情-公司店面
    var braD_shoplist = $('.brandDetshop_list li').length;
    if(braD_shoplist%2 == 1){
        $('.brandDetshop_list li').eq(braD_shoplist-1).css('border','none');
    }else{
        $('.brandDetshop_list li').eq(braD_shoplist-1).css('border','none').prev('li').css('border','none');
    }
    if(braD_shoplist>4){
        $('.brandDetshop_list').height('270px');
        $('#braD_moreshop').on('click',function(){
            var _thisH = $(this).prev('ul').height();
            if(_thisH == 270){
                $(this).prev('ul').height('auto');
                $(this).attr('class','brandDe_Down').find('span').text('收起');
            }else{
                $(this).prev('ul').height('270px');
                $(this).attr('class','brandDe_up').find('span').text('展开');
            }
        })
    }else{
        $('#braD_moreshop').css('display','none');
    }
    
    //品牌详情-品牌专卖店锚链接
    $('#shop_Location').on('click',function(){
        var _scroltop = $('.proDet_bot').offset().top;
        $(window).scrollTop(_scroltop);
        $('.proDet_tabUl li').eq(1).trigger('click');
    })
})


//品牌详情-店面搜索
var shopSeach = function(){
    var nowProvince = "北京";
    var nowCity = "东城区";
    $(".shop_address").citySelect({
        url:"js/lib/city.min_lk.js",
        prov:nowProvince,
        city:nowCity,
        required:true,
        nodata:"none"
    })
    $('#shopSeach').on('click',function(){
        //调用ajax还木有写
    })
}

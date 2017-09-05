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
    /*$('.produL_content,.tuijian').on('mouseenter','li',function(){
        $(this).addClass('hov');
    });
    $('.produL_content,.tuijian').on('mouseleave','li',function(){
        $(this).removeClass('hov');
    });*/

    //产品详情
    var sHeight = $('.proDet_bot .right').outerHeight()-$('.proDet_bot .tuijian').outerHeight()-155;
    var rightHeight1 = $('.proDet_bot .right').outerHeight();
    var outsHeight1 = $('.proDet_bot .left .tabdiv').eq(0).outerHeight()+50+20+388;
    var outsHeight2 = $('.proDet_bot .left .tabdiv').eq(1).outerHeight()+50+20+388;
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
    (function(){
        if($('#brandDet_fontmore').prev('div.fontdiv').height()<75){
            $('#brandDet_fontmore').hide();
        }else{
            $('#brandDet_fontmore').prev('div.fontdiv').height('75px');
            $('#brandDet_fontmore').show();
        };
        var _flag = 0;
        $('#brandDet_fontmore').on('click',function(){
            if(_flag == 0){
                $(this).html('收起').prev('div.fontdiv').height('auto');
                _flag = 1;
            }else{
                $(this).html('展开更多<i>&gt;&gt;</i>').prev('div.fontdiv').height('75px');
                _flag = 0;
            }
             
        })
    })();
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

    //商铺图片切换
    $('.produL_sort>div').on('click',function(){
        var sortId = 0;
        var showId = 0;
        if($(this).hasClass('sbtn')){
            $(this).addClass('active').siblings('sbtn').removeClass('active');
            sortId = $(this).attr('data-sbtn');
        }else{
            $(this).addClass('active').siblings('rbtn').removeClass('active');
            showId = $(this).attr('data-rbtn');
        };
        
        var page = 1;
        function getmore(){
            var _url = '/?g=Product&m=Ajax&a=getPcProductList';
            var brand_id = 0;
            var category_id = 0;
            var filter_id = 0;
            $.ajax({
                url:_url,
                type:"get",
                dataType:"json",
                data:{
                    page : page,
                    brand_id : brand_id,
                    category_id :category_id,
                    filter_id : filter_id,
                    sortId : sortId,
                    showId : showId
                },
                success:function(res){
                    if(res.length != 0){
                        $.each(res, function( index, value ){
                            console.log(value.logo);
                            var _url = '/product/'+value.id+'.html';
                            var html = '';
                            html += '<li><a href="';
                            html += _url
                            html += '" target="_blank"  class="a1"><img src="';
                            html += value.logo
                            html += '" /></a><a href="';
                            html += _url
                            html += '" target="_blank"  class="a2">';
                            html += value.name
                            html += '</a><span>参考价格:';
                            html +=value.price
                            html +='</span></li>';
                            $(html).appendTo($('#products'));
                        });
                        /*$('#waterfall').waterfall();*/
                        /*ajaxLock = false;*/
                    }else{
                        //加载到底
                        /*ajaxLock = true;*/
                        $('#prompt').css('display','block');
                        $('.productgetmore').css('display','none');
                    }
                },
                error: function(e){
                    console.warn("ajax error")
                }
            })
            page ++;
        };
        shopSeach();

        



    });
})


//品牌详情-店面搜索
var shopSeach = function(){
    $('#shopSeach').on('click',function(){
        var city_code = $("#shopCity").val();
        var brand_id = $("#brand_id").val();
        _url = "/?g=product&m=index&a=getBrandStoreByCity";
        ajaxLock = true;
        $.ajax({
            url:_url,
            type:"get",
            dataType:"json",
            data:{
                city_code : city_code,
                brand_id : brand_id
            },
            success:function(res){
                if(res.length != 0){
                    $('#shop_list').html('');
                    $.each(res, function( index, value ){
                        var img ='';
                        if(value.img == ''){
                            img = 'http://tencentjiaju.img-cn-beijing.aliyuncs.com/20170809/h160w120-598ad3d63f3b8.jpg';
                        }else{
                            img = value.img;
                        }
                        var html = '';
                        html += '<li><a href="javascript:;" title="" class="imgbox"><img alt="';
                        html +=  value.name               
                        html += '" src="';
                        html += img
                        html += '" /></a><div class="fontbox"><h6><a href="javascript:;" title="';
                        html += value.name
                        html += '">';
                        html += value.name
                        html += '</a></h6><p class="p1">';
                        html += value.address
                        html += '</p><p class="p2">';
                        html += value.contact_way
                        html += '</p></div></li>';
                        $(html).appendTo($('#shop_list'));
                    });
                    /*$('#waterfall').waterfall();*/
                    /*ajaxLock = false;*/
                }else{
                    //加载到底
                    /*ajaxLock = true;*/
                    $('#prompt').css('display','block');
                }  
            },
            error: function(e){
                console.warn("ajax error")
            }
        })
    })
}

// 获取二级城市
function getcitys(brand_id){
    _url = '/?g=Product&m=Ajax&a=getBrandStoreByProv';
    var brand_id = brand_id;
    var ad_code = $("#shopProv option:selected").val();
    $.ajax({
        url:_url,
        type:"get",
        dataType:"json",
        data:{
            brand_id : brand_id,
            ad_code : ad_code
        },
        success:function(res){
            if(res.length != 0){
                $('#shopCity').html('');
                $.each(res, function( index, value ){
                    var html = '';
                    html += '<option value="';
                    html += value.city_code
                    html += '" >';
                    html += value.name
                    html += '</option>';
                    $(html).appendTo($('#shopCity'));
                });
                /*$('#waterfall').waterfall();*/
                /*ajaxLock = false;*/
            }else{
                //加载到底
                /*ajaxLock = true;*/
                $('#prompt').css('display','block');
            }  
        },
        error: function(e){
            console.warn("ajax error")
        }
    })
} 

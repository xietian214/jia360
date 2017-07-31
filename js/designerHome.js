$(function(){
    //设计栏目列表
    $('.columnListul li').on('mouseover',function(){
        var _index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.columnListbox ul').eq(_index).addClass('active').siblings().removeClass('active');
    });
    //设计师列表
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

    //设计师列表，详情样式清除
    (function(){
        $('.designerListli p').each(function(){
            $(this).attr('style','');
        })
    })()

    //设计师首页-设计师视野
    $('.comm04 .abox a').on('mouseenter',function(){
        $(this).find('div').stop().animate({top:0}, 500);
        $(this).find('.p1').stop().animate({marginTop:'100px',fontSize:'18px'}, 500);
    })
    $('.comm04 .abox a').on('mouseleave',function(){
        $(this).find('div').stop().animate({top:'220px'}, 500);
        $(this).find('.p1').stop().animate({marginTop:0,fontSize:'16px'}, 500);
    })
    //设计师首页-设计师约吧设计师
    $('.comm03 .tabUl li').on('mouseenter',function(){
        var _index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings('.tabBox').children('.tabDiv').eq(_index).addClass('active').siblings().removeClass('active');
    })
    //设计师首页-banner
    playbox({ 
        className: 'playbox',
        hovbtn:true //悬浮展示左右按钮
    });
    //设计师列表-查看更多设计师
    (function(){
        var page = 2;
        $('.moredesigner').on('click',function(){
            //function ajax(page){
                var _url = window.location.href;
                _url = _url.replace(/x\/index/,'x\/ajaxlist');
                ajaxLock = true;
                $.ajax({
                    url:'data1.json',
                    type:"get",
                    dataType:"json",
                    data:{
                        p : page,
                        designer_place :$('#designer_place .active').attr('name'),
                        design_style:$('#design_style .active').attr('name'),
                        designer_price:$('#designer_price .active').attr('name')
                    },
                    success:function(res){
                        if(res){
                            console.log(res);
                            var dataList = res;
                            if(dataList.length != 0){
                                $.each(dataList, function( index, value ){
                                    var _url = 'http://www.jia360.com/designer/index/designer_detail/id/'+value.id+'.html';
                                    var an_url = 'http://www.jia360.com/anli/'+value.id+'.html';
                                    var html = '';
                                    html += '<li class="clearfix"><a href="';
                                    html += _url;
                                    html += '" target="_blank" title="';
                                    html += value.name;
                                    html += '" class="imgbox"><img src="';
                                    html += value.avatar;
                                    html += '" /></a><div class="fontbox"><a href="';
                                    html += _url;
                                    html += '" target="_blank" class="name">';
                                    html += value.name;
                                    html += '<i class="rz">腾讯家居认证</i></a><div class="label">';
                                    html += value.address;
                                    html +='  |  ';
                                    html += value.case_count;
                                    html +='  ｜ ';
                                    html += value.tag;
                                    html += '</div><p class="describe">';
                                    html += value.detail;
                                    html += '</p><a href="javascript:;" class="yysjbtn" designerId="'
                                    html += value.id;
                                    html +='" >预约设计</a></div><a href="';
                                    html += an_url;
                                    html += '" target="_blank" title="';
                                    html += value.recommcase[0].title;
                                    html += '" class="imga"><img src="';
                                    html += value.recommcase[0].pic_url;
                                    html += '" /></a><a href="';
                                    html += an_url;
                                    html += '" target="_blank" title="';
                                    html += value.recommcase[1].title;
                                    html += '" class="imga"><img src="';
                                    html += value.recommcase[1].pic_url;
                                    html += '" /></a></li>';
                                    $(html).appendTo($('.designerListli'));
                                });
                                page++;
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
            //}
        })
        $('.designerListli p').each(function(){
            $(this).attr('style','');
        })
    })();
    //设计师详情页
    (function(){
        var desDHeight = $('.designerDmore').siblings('.describe').height();
        var _flag = 0;
        if(desDHeight >=75){
            $('.designerDmore').siblings('.describe').css('height','75px');
            $('.designerDmore span').on('click',function(){
                if(_flag == 0){
                    $('.designerDmore').siblings('.describe').css('height','auto');
                    $('.designerDmore span').html('收起');
                    _flag = 1;
                }else{
                    $('.designerDmore').siblings('.describe').css('height','75px');
                    $('.designerDmore span').html('查看更多<i>&gt;&gt;</i>');
                    _flag = 0;
                }
            })
        }else{
            $('.designerDmore').hide();
        }
       
    })();
    
    
})
//设计师报名
    /*var designerSignUp = function(){
        $('.yysjbtn').on('click',function(){
            $('.designer_tck').css('display','block').children('#designerId').val($(this).attr('designerId'));
            console.log($('#designerId').val());
        })
        var nowProvince = "北京";
        var nowCity = "东城区";
        $(".designer_address").citySelect({
            url:"js/lib/city.min_lk.js",
            prov:nowProvince,
            city:nowCity,
            required:true,
            nodata:"none"
        })
        //报名确定按钮
        $('#designerName,#designerPhone,#designerProv,#designerCity').focus(function(){
            $('.Noticesp span').css('display','none');
        })
        $('.designer_tck .submit_btn').on('click',function(){
            var designerId = $('#designerId').val();
            var name=$("#designerName").val();
            var phone=$("#designerPhone").val();
            if(name=="" || name.length==0){
                $('.Noticesp span').css('display','block').text('请输入您的姓名');
                return false;
            }
            if(phone=="" || phone.length==0){
                $('.Noticesp span').css('display','block').text('请输入您的手机号码');
                return false;
            }
            if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
                $('.Noticesp span').css('display','block').text('手机号码有误，请重填');
                return false;
            }
            var prov=$("#designerProv option:selected").text();
            var city=$("#designerCity option:selected").text();
            if(prov.length==0 || city.length==0){
                $('.Noticesp span').css('display','block').text('请选择您所在的城市');
                return false;
            }
            if(prov=="省" || city=="市"){
                $('.Noticesp span').css('display','block').text('请选择您所在的城市');
                return false;
            }
            //ajax();
            $.ajax({
                url:'data.json',
                type:"get",
                dataType:"json",
                data:{
                    name : name,
                    phone : phone,
                    prov : prov,
                    city : city,
                    designerId : designerId
                },
                success:function(res){
                    
                },
                error: function(e){
                    console.warn("ajax error")
                }
            })

        })
        //关闭报名弹出框
        $('.designer_tck .close_btn').on('click',function(){
            $('.designer_tck').css('display','none');
        })
        //关闭报名成功弹出框
        $('.designer_tckinfo .okbtn,.designer_tckinfo .close_btn').on('click',function(){
            $('.designer_tckinfo').css('display','none');
        })
    }*/

/*设计师详情页案例调用*/
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

//设计师设计栏目加载
var designercolumnLoad = function(){
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
        return ($(document).scrollTop() >= $(document).height() - $(window).height()-250) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
    }

    function ajax(page){
        var _url = window.location.href;
        _url = _url.replace(/x\/index/,'x\/ajaxlist');
        ajaxLock = true;
        $.ajax({
            url:'data1.json',
            type:"get",
            dataType:"json",
            data:{
                p : page,
                id : $('.columnListbox ul.active').attr('id')
            },
            success:function(res){
                if(res){
                    var dataList = res.list;
                    if(dataList.length != 0){
                        $.each(dataList, function( index, value ){
                            var _url = 'http://m.jia360.com/cases/index/detail/id/'+value.id+'.html';
                            var html = '';
                            html += '<li><a href="';
                            html += _url;
                            html += '" title="'
                            html += value.title;
                            html += '" target="_blank" class="imgbox"><img src="';
                            html += value.pic_url;
                            html += '" alt="';
                            html += value.title;
                            html += '" /></a><a href="';
                            html += value.title;
                            html += '" title="';
                            html += value.title;
                            html += '" target="_blank" class="fontbox">';
                            html += value.title;
                            html += '</a></li>';
                            //$('.columnListbox ul.active').append(html);
                            $(html).appendTo($('.columnListbox ul.active'));
                        });
                        //$('#waterfall').waterfall();
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



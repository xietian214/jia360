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
    
})
//设计师报名
    var designerSignUp = function(){
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
    }


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
    /*tab标签切换*/
    $('.tab_ul li').on('mouseover',function(ev){
        var _istrue = $(this).attr('class')!=$('.tab_ul .active').attr('class');
        if (_istrue) {
            var _thisIndex = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).parent().siblings('.tab_box').children('ul').hide().eq(_thisIndex).show();
            ev.stopPropagation();
        };
        
    });
    //时尚前沿手风琴效果
    $('.shishangul li').on('mouseover',function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //新闻盒子效果
    $('.im1_nf li').on('mouseenter mouseleave',function(e){
    
        if(e.type == 'mouseenter'){
            $(this).find('.bg').stop(true).animate({left:'0',top:'0'},200)
            $(this).find('.p3').stop(true).animate({left:'23px',top:'135px'},350)
        }else{
            $(this).find('.bg').stop(true).animate({left:'0',top:'223px'},200)
            $(this).find('.p3').stop(true).animate({left:'23px',top:'223px'},200)
        }
    }) 
    //图片盒子效果
    $("#im4_pic li").bind("mouseenter mouseleave",function(e) {  
        var w = $(this).width();  
        var h = $(this).height();
        var ws = ($(window).width()-1200)/2;
        var hs = $('#im4_pic').get(0).offsetTop+this.offsetTop;
        var x = (e.pageX - (this.offsetLeft+ws) - (w / 2)) * (w > h ? (h / w) : 1);  
        var y = (e.pageY - hs - (h / 2)) * (h > w ? (w / h) : 1);  
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左” 
        var eventType = e.type;  
        var dirName = new Array('top','right','down','left');  
        if(e.type == 'mouseenter'){
            switch(dirName[direction]){
                case 'top':
                        $(this).find('p').css({left:'0',top:-h+"px"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
                case 'right':
                    $(this).find('p').css({left:w+'px',top:"0"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
                case 'down':
                    $(this).find('p').css({left:'0',top:h+"px"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
                case 'left':
                    $(this).find('p').css({left:-w+'px',top:"0"}).stop(true).animate({left:'0',top:'0'},300)
                    break;
            } 
        }else{
            switch(dirName[direction]){
                case 'top':
                        $(this).find('p').css({left:'0',top:'0'}).stop(true).animate({left:'0',top:-h+"px"},300)
                    break;
                case 'right':
                    $(this).find('p').css({left:'0',top:'0'}).stop(true).animate({left:w+'px',top:"0"},300)
                    break;
                case 'down':
                    $(this).find('p').css({left:'0',top:'0'}).stop(true).animate({left:'0',top:h+"px"},300)
                    break;
                case 'left':
                    $(this).find('p').css({left:'0',top:'0'}).stop(true).animate({left:-w+'px',top:"0"},300)
                    break;
            } 
        }  
    }); 

})




$(function() {
    //静态页面添加头部，后台不用加去掉。
    $('#loadtop').load('./loadtop.html');
    /*playbox({ 
        className: 'sw01',
        hovbtn:true //悬浮展示左右按钮
    }, {
        className: 'sw02',
        arrow: true //是否展示悬浮按钮
    });*/
    // 返回顶部
    $("#goUp").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            $("#goUp").fadeIn(500);
        } else {
            $("#goUp").fadeOut(500);
        }
    });
    $("#goUp").on("click", function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    })

})
function playbox(){
    for (var i = 0; i < playbox.arguments.length; i++) {
        var _obj = playbox.arguments[i];
        var obj = $('.'+_obj.className);
        _obj.pagination = obj.find('.pagination').length;
        obj.swiperSlide = obj.find('.swiper-slide');
        obj.arrowLeft = obj.find('.arrow-left');
        obj.arrowRight = obj.find('.arrow-right');
        var imgnum = obj.swiperSlide.length;
        if (imgnum > 1) {
            if (_obj.arrow) {
                obj.arrowLeft.show();
                obj.arrowRight.show();
            }else{
                obj.arrowLeft.hide();
                obj.arrowRight.hide();
            };
            if (_obj.pagination) {
                var mySwiper = new Swiper("."+_obj.className+" .swiper-container",{
                    pagination: "."+_obj.className+" .pagination",
                    paginationClickable: true,
                    autoplay : 3000,
                    speed:300,
                    autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                    loop: true,
                    noSwiping : true
                });
            }else{
                var mySwiper = new Swiper("."+_obj.className+" .swiper-container",{
                    paginationClickable: true,
                    autoplay : 3000,
                    speed:300,
                    autoplayDisableOnInteraction: false , /*操作之后是否自动播放*/
                    loop: true,
                    noSwiping : true
                });
            };
            obj.arrowLeft.on('click', function(e){
                e.preventDefault()
                mySwiper.swipePrev();
            });
            obj.arrowRight.on('click', function(e){
                e.preventDefault()
                mySwiper.swipeNext();
            });
            obj.on("mouseenter",function(){
                mySwiper.stopAutoplay();
                if (_obj.hovbtn) {
                    obj.arrowLeft.show();
                    obj.arrowRight.show();
                };
            });
            obj.on("mouseleave",function(){
                mySwiper.startAutoplay();
                if (_obj.hovbtn) {
                    obj.arrowLeft.hide();
                    obj.arrowRight.hide();
                };
            });
        }else{
            obj.arrowLeft.hide();
            obj.arrowRight.hide();
        };
    };
    
}

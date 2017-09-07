//mui初始化
mui.init();

mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});

//轮播图
$.ajax({
    url:'http://127.0.0.1:9091/api/getlunbo',
    //dataType:"json",
    success: function (data) {
        $(".swiper-wrapper").append(template("template_banner",data));
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 0, //表示轮播图直接的间距 如果不要设置为0或者去掉这个属性
            loop: true, //循环 无缝轮播
            autoplay: 1000, //轮播图自动播放
            autoplayDisableOnInteraction: false,
        });
    }
})

//tab栏
$.ajax({
    url:'http://127.0.0.1:9091/api/gethometab/1',
    success: function (data) {
        console.log(data);
        $("#home").append(template("template-tab",data));
    }
})

$(".nav").on("touchstart","li", function () {
    var index = $(this).index()+1;
    $(".nav li").removeClass("active");
    $(this).addClass("active");
    $.ajax({
        url:'http://127.0.0.1:9091/api/gethometab/'+index,
        success: function (data) {
            $("#home").html(template("template-tab",data));
        }
    })
})

//左上角菜单按钮
$(".mui-action-menu").on("tap",function () {
    //console.log(111);
    mui('.mui-off-canvas-wrap').offCanvas().toggle();
})

//点击跳转到连载动漫
$(".menu-list").on("tap", ".serial", function () {
    mui.openWindow({
        url:'serial-cartoon.html'
    })
})

//点击跳转到专题列表
$(".menu-list").on("tap", ".special", function () {
    mui.openWindow({
        url:'special-list.html'
    })
})


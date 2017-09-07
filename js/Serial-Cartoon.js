/**
 * Created by Aiden on 2017-09-03 .
 */
mui(function () {
    //mui初始化
    mui.init();
    scroll();
    back();
})


function scroll(){
    //拖拽滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
}

function back(){
    $(".mui-icon-back").on("tap",function () {
        mui.openWindow({
            url:'index.html'
        })
    })
}

//连载动漫
$.ajax({
    url:'http://127.0.0.1:9091/api/getlianzai',
    success: function (data) {
        console.log(data);
        var html = [];
        for(var i = 0 ; i < data.length; i++){
            html.push(
            '<div class="mui-pull-left mui-col-xs-12">\
                <a href="'+data[i].url+'">\
                    <img class="mui-pull-left" src="'+data[i].img+'" alt=""/>\
                    <h3>'+data[i].name+'</h3>\
                    <span>'+data[i].episode+'</span>\
                    <span>'+data[i].updateTime+'</span>\
                    <span>下载次数:'+data[i].downloadCount+'</span>\
                </a>\
            </div>'
            )
        }
        $(".mui-row").html(html.join(""));
    }
})
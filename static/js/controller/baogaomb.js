define('controller/baogaomb',['lib/jquery','lib/common'], function () {
    /*弹窗*/
    $(".popTitle").children("em").click(function () {
        $(".feildAdd").css('display','none');
        $(".reportPop1").css('display','none');
        $(".reportPop").css('display','none');
    });
    $(".popBtnBox").children(".btn-default").click(function () {
        $(".feildAdd").css('display','none');
        $(".reportPop1").css('display','none');
        $(".reportPop").css('display','none');
    });
    $("#feildAdd").click(function () {
        $(".feildAdd").css('display','block');
    });
    $("#feildOK").click(function () {
        alert("您点击了添加字段弹窗的确认");
        $(".feildAdd").css('display','none');
    });
    $("#reportAdd").click(function () {
        $(".reportPop1").css('display','block');
    });
    $("#reportOk1").click(function () {
        alert("您点击了添加表模块的确认");
        $(".reportPop1").css('display','none');
        $(".reportPop").css('display','block');
    });
    $("#reportOk").click(function () {
        alert("您点击了确认表模块的确认");
        $(".reportPop").css('display','none');
    });

});
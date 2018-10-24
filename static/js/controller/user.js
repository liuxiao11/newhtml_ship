define('controller/user',['lib/jquery','lib/common'], function () {
    /*新增员工下拉框*/
    $("#userSelect").click(function () {
        if($(".fluid3-menu-list").css('display')=='block')
        {
            $(".fluid3-menu-list").css('display','none');
        }
        else{
            $(".fluid3-menu-list").css('display','block');
        }

    });
    /*弹窗*/
    $(".popTitle").children("em").click(function () {
        $(".pop-user-edit").css('display','none');
        $(".pop-user-add").css('display','none');
        $(".pop-department-add").css('display','none');
        $(".pop-user-more").css('display','none');
    });
    $(".popBtnBox").children(".btn-default").click(function () {
        $(".pop-user-edit").css('display','none');
        $(".pop-user-add").css('display','none');
        $(".pop-department-add").css('display','none');
        $(".pop-user-more").css('display','none');
    });
    $(".fluid3-content-edit").click(function () {
        $(".pop-user-edit").css('display','block');
    });
    $("#department").click(function () {
        $(".pop-department-add").css('display','block');
    });
    $("#userAdd").click(function () {
        $(".pop-user-add").css('display','block');
    });
    $("#userMore").click(function () {
        $(".pop-user-more").css('display','block');
    });

    $("#userEditOk").click(function () {
        alert("您点击了编辑用户弹窗的确认");
        $(".pop-user-edit").css('display','none');
    });
    $("#departmentAddOk").click(function () {
        alert("您点击了新增部门弹窗的确认");
        $(".pop-department-add").css('display','none');
    });
    $("#userMoreOk").click(function () {
        alert("您点击了批量导入用户弹窗的确认");
        $(".pop-user-more").css('display','none');
    });
    $("#userAddOk").click(function () {
        alert("您点击了新增用户弹窗的确认");
        $(".pop-user-add").css('display','none');
    });
});
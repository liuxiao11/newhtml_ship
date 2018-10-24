define('controller/index',['lib/common'],
function () {
    var a = $(".yScrollListInList1 ul").css({width:$(".yScrollListInList1 ul li").length*(160+84)+"px"});
    console.log(a);
    var numwidth=(160+84)*3;
    $(".yScrollListInList .yScrollListbtnl").click(function(){
        var obj=$(this).parent(".yScrollListInList").find("ul");
        if (!(obj.is(":animated"))) {
            var lefts=parseInt(obj.css("left").slice(0,-2));
            if(lefts<30){
                obj.animate({left:lefts+numwidth},1000);
            }
        }
    });
    $(".yScrollListInList .yScrollListbtnr").click(function(){
        var obj=$(this).parent(".yScrollListInList").find("ul");
        var objcds=-(30+(Math.ceil(obj.find("li").length/3)-2)*numwidth);
        if (!(obj.is(":animated"))) {
            var lefts=parseInt(obj.css("left").slice(0,-2));
            if(lefts>objcds){
                obj.animate({left:lefts-numwidth},1000);
            }
        }
    })

});
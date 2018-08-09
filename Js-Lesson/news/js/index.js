//jQuery 文档就绪函数
$(function(){
    //记录页面下表
    var curIndex;
    var links = [
        "./pages/text-joke.html",
        "./pages/img-joke.html",
        "./pages/gif-joke.html"
    ];
    //为菜单项添加点击事件
    $(".tabBar-item").on("click",function(e){
        var index = $(this).index();
        //避免用户重复点击
        if(index == curIndex){
            return;
        }
        curIndex  = index;
        //jQu   ary提供的ajax请求方法
        $.ajax({
            url:links[$(this).index()],
            type:"GET",
            success:function(response){
                $("#content").html(response);
                // console.clear();
            }
        })
    }).first().trigger("click");
});
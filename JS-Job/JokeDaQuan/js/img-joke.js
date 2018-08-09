$(function(){
    $.ajax({
        //请求地址
        url:"http://route.showapi.com/341-2",
        // 请求方法
        type:"GET",
        //指定数据类型
        dataType:"json",
        //请求参数
        data:{
            "showapi_appid":"66408",
            "showapi_sign":"35faf3bcf9944ea2975c3cdc6fe56d4d"
        },
        success:function(response) {
            var contentlist = (response['showapi_res_body']['contentlist']);
            //拼接字符串（html自渡船）
            var htmlStr = "";
            contentlist.forEach(function(data){
                htmlStr += `
                <ul class="content-list">
        <li>
            <p class="title">${data.title}</p>
            <p class="date">${data.ct}</p>
            <img src="${data.img}" alt="">
        </li>
    </ul>
                `;
            })
            $(".content-list").html(htmlStr);
        }
    });
});
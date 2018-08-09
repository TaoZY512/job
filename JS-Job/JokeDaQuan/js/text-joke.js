$(function () {
    //抓取数据
    //appid:      showapi_appid:66409
    //密钥showapi_sign:4e1bfd0aaf6e4d11a12ba4a3abe1a0b0
    $.ajax({
        //请求地址
        url:"http://route.showapi.com/341-1",
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
                <li>
            <p class="title">${data.title}</p>
            <p class="date">${data.ct}</p>
            <p class="text">${data.text}</p>
             
                 </li>
                `;
            })
            $(".content-list").html(htmlStr);
        }

    })

})
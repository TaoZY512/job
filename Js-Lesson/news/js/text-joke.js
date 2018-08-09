$(function () {


    //抓取数据
    //appid:      showapi_appid:66409
    //密钥showapi_sign:4e1bfd0aaf6e4d11a12ba4a3abe1a0b0
    $.ajax({
        //请求地址
        url:" http://route.showapi.com/955-1 ",
        // 请求方法
        type:"GET",
        //指定数据类型
        dataType:"json",
        //请求参数
        data:{
            "showapi_timestamp": formatterDateTime(),
            "showapi_appid":"66408",
            "showapi_sign":"35faf3bcf9944ea2975c3cdc6fe56d4d",
            "type":"dp",
            "page":"1"
        },
        success:function(response) {
            var contentlist = (response['showapi_res_body']['pagebean']['contentlist']);
            console.log(contentlist)
            //拼接字符串（html自渡船）
            var htmlStr = "";
            contentlist.forEach(function(data){
                htmlStr += `
                <ul class="content-list">
        <li>
            <p class="title">${data.title}</p>
            <p class="date">${data.desc}</p>
            <p class="date"><a href="${data.link}">链接地址</a></p>
            <img src="${data.img}" alt="">
        </li>
    </ul>
                `;
            })
            $(".content-list").html(htmlStr);
        }

    })

})


// error: function(XmlHttpRequest, textStatus, errorThrown) {
//     alert("操作失败!");
// },
// success: function(result) {
//     console.log(result) //console变量在ie低版本下不能用
//     alert(result.showapi_res_code)
// }
//需要引用jquery库

function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}

function getSel(Sel) {
    return document.querySelector(Sel);
}
//注册
function add(name,pass){
    if(!name || !pass){
        alert("请完善信息");
        return;
    }
      var arr;
     var str = "";
      var signArr = JSON.parse(localStorage.getItem("US"));
    for(var i = 0; i < signArr.length; i++){
        str += signArr[i].name;
    }
    //定义存储数据的集合
    if(!localStorage.getItem("US")){
        arr = [];
    }else if(str.match(name) == name){
       alert("用户已注册!")
    }else{
        arr = JSON.parse(localStorage.getItem("US"));
    }

    //将数据存储到rootArr中
    arr.push({
        name:name,
        pass:pass
    })
    //更新本地数据
    //将任意对象转换为JSON
    location.href = "./first.html";

}

function show(name,pass,rem) {
    var str = '';
    var par = '';
    var rootArr = JSON.parse(localStorage.US);
    for (var i = 0; i<rootArr.length;i++){
        str += rootArr[i].name+',';
        par += rootArr[i].pass+',';
    }

    if(!name || !pass){
        alert("用户名或密码不能为空");
        return;
    }else if (str.match(name) == name && par.match(pass) == pass){
        location.href = "./first.html";
    }else {
        alert("账号或密码不对，请重新输入");
    }

    localStorage.clear();
}
//判断是否保存用户名

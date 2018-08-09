function getVerificationCode(length){
//    定义字符串长度
    var str = '';
    str += 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    // 定义随机数
    var result = "";
    for(var i=0;i<length;i++){
        var index = Math.floor(Math.random()*str.length);
        result += str[index];
    }
    return result;
}



function add(aUsername,aPhone,aEmail,aContent){
    //判断是否有值
    if(!aUsername.value || !aPhone.value || !aEmail.value || !aContent.value){
        new LHYAlertView({
            type: "alert",
            message: "咦，您好像还有信息没填哦！",
        })
    }else{


        var data = [],
            //获取本地存储
            stroge = localStorage.getItem("userInfo");
        if(stroge){
            data = JSON.parse(stroge)
        }
        //存放数据
        data.push({
            username:aUsername.value,
            phone:aPhone.value,
            email:aEmail.value,
            content:aContent.value
        });
        //存放数据
        var dataStr = JSON.stringify(data);
        localStorage.setItem("userInfo",dataStr);
        new LHYAlertView({
            type: "alert",
            message: "发布成功，请等待管理员处理！",
        })
    }
};
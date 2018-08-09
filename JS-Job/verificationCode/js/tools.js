   //
   // @description 获取随机验证码
   // @param length String 验证码长度
   // @param return String 随机字符

function getVerificationCode(length){
    //定义随机字符
    var str = "";
    str += "qwertyuiopasdfghjklzxcvbnm";
    str += "QWERTYUIOPASDFGHJKLZXCVBNM";
    str += "1234567890";
   // 定义随机数
    var result = "";
    for(var i=0;i<length;i++){
        var index = Math.floor(Math.random()*str.length);
        result += str[index];
    }
    return result;
   }
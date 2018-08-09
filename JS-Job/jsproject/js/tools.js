function getBirth(idCard,callback){
    var year  = idCard.slice(6,10),
        month = idCard.slice(10,12),
        day   = idCard.slice(12,14);
    callback && callback({year,month,day});
}

function getDevice(){
    let userAgent = navigator.userAgent;
    let device = "";
    if(!/mobile/i.test(userAgent)){
        device = "PC端";
    }else if(/iPhone/i.test(userAgent)){
        device = "iphone 手机";
    }else if(/Android/i.test(userAgent)){
        device = "Android 手机";
    }
    console.log(device);
}
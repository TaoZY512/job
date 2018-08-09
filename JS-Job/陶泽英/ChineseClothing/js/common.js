//获取DOM元素
function getSel(sel,isAll){
    if(isAll){
        return document.querySelectorAll(sel)
    }else{
        return document.querySelector(sel);
    }

}
//获取样式
function getStyle(el, attr) {
    if(el.currentStyle) {
        return el.currentStyle[attr];
    }else {
        return getComputedStyle(el, null)[attr];
    }
}
//index.html页面轮播
function setPicturn(){
    //定义一个计数器
    var count = 0;
    var bannerImg = getSel('.banner_img'),
        bannerImg_child = bannerImg.children,
        bannerImg_child_length = bannerImg_child.length;

        bannerImg_child[count].className = '';
        if(count === bannerImg_child_length - 1){
            count = -1;
        }
        bannerImg_child[++count].className ='show';

}
//JSON请求
function get(config){
    //创建请求对象
    var xhr = new XMLHttpRequest();
    //配置请求
    xhr.timeout      = 10;
    xhr.responseType = "json";
    xhr.open("GET",config.url,true);
    //发送请求
    xhr.send(null);
    //请求完成
    xhr.onload = function(){
        //请求成功
        if(xhr.status == 200){
            config.success &&config.success(xhr.response);
        }
        //请求失败
        else{
            config.fail && config.fail();
        }
    }
}
//获取JSON
function loadingHtml(parent,data,curIndex){
    //获取总页码
    var totalPage = Math.ceil(data.length / 6);
    var starIndex = (curIndex -1) * 6;
    var endIndex = curIndex == totalPage ? starIndex + totalPage % 6 : starIndex + 6;
    var textHtml ="";
    for(var i = starIndex; i < endIndex; i++){
        textHtml +=
            ' <div class="cite"><div class="fl">' + '<img src="' + data[i].imgSrc + '" alt="">' +
            '</div><div class="fr">' + '<h5><a href=" ' + data[i].src + '">' + data[i].title + '</a></h5>' +
            '<small>' + data[i].small + '</small>' +
            '<p>' + data[i].describe + '</p>' +
            '</div></div>'

    }
    parent.innerHTML = textHtml;

}
//获取JSON
function getWorking(response,parent){
    var textHtml = "";
    for(var i = 0,len = response.length;i < len; i++){
        textHtml +=
            '<div class="shape-child"><h2>'+ response[i].title +
            '</h2><small>'+ response[i].describe +'</small><br/>'+
            '<img src="'+ response[i].imgSrc + '" alt=""></div>'
    }
    parent.innerHTML = textHtml;
    parent.firstChild.classList.add('show');
}
//登录界面正则
function verification(username,password,phone,code){
    //用户名输入正则
    username.onblur = function(){
        var reg = /^[A-Za-z0-9_-]{4,16}$/;
        if(!reg.test(this .value)){
            this.parentElement.firstElementChild.className = 'data-msg';
        }else{
            this.parentElement.firstElementChild.className = 'hidden';
        }
    };
    //密码输入正则
    password.onblur = function(){
        var reg = /^[A-Za-z0-9_-]{4,16}$/;
        if(!reg.test(this .value)){
            this.parentElement.firstElementChild.className = 'data-msg';
        }else{
            this.parentElement.firstElementChild.className = 'hidden';
        }
    };
     //电话号码输入正则
     phone.onblur = function(){
        var reg = /^1[3578]{1}[0-9]{9}$/;
        if(!reg.test(this .value)){
            this.parentElement.firstElementChild.className = 'data-msg';
        }else{
            this.parentElement.firstElementChild.className = 'hidden';
        }
    };
    //验证码
    code.onblur = function(){
        var validateCode         = getSel('.validate-code'),
             reg = new RegExp(`^${validateCode.textContent}$`,'i');
        if(!reg.test(this.value)){
            this.parentElement.firstElementChild.className = 'data-msg';
        }else{
            this.parentElement.firstElementChild.className = 'hidden';
        }
    };
}
//把用户名保存到本地
function saveUsers(Username) {
    var objName = JSON.stringify(Username);
    sessionStorage.setItem("username", objName);
}
//登录
function logIn(userName,passWord,code){
    if(!userName.value || !passWord.value ||!code){
        new LHYAlertView({
            type: "alert",
            message: "信息不完整！",
        })
    }else{
        Bmob.User.logIn(userName.value,passWord.value,{
            success: function() {
                new LHYAlertView({
                    type: "alert",
                    message: "登陆成功！",
                    sureCallBack: function(){
                        sessionStorage.loginState = true;
                        location.href = "./index.html";
                        var currentUser = Bmob.User.current().attributes.username;
                        saveUsers(currentUser);
                    }
                })
            },
                error: function() {
                new LHYAlertView({
                    type: "alert",
                    message: "用户名不存在或是密码错误！",
                })
            }
        })
    }
}
//注册
function signIn(userName,passWord,phone,code){
    if(!userName.value || !passWord.value ||!phone.value ||!code){

        new LHYAlertView({
            type: "alert",
            message: "信息不完整！",
        })
    
    }else if(userName.parentElement.firstElementChild.className != "hidden" ||passWord.parentElement.firstElementChild.className != "hidden" || phone.parentElement.firstElementChild.className != "hidden"|| code.parentElement.firstElementChild.className != "hidden" ){
        new LHYAlertView({
            type: "alert",
            message: "信息输入错误！",
        })
    } else{
        var user = new Bmob.User();
        user.set("username",userName.value);
        user.set("password",passWord.value);
        user.set("phone",phone.value);
        user.signUp(null,{
            success:function(user){
                new LHYAlertView({
                    type: "alert",
                    message: "注册成功！",
                    sureCallBack:function(){
                        sessionStorage.loginState = true;
                        location.href = "./index.html"
                        var currentUser = Bmob.User.current().attributes.username;
                        saveUsers(currentUser);
                    }
                })
            },
            error:function(user,error){
                let alertMsg = "";
                switch(error.code) {
                    case 202: {
                        alertMsg = "用户名已存在！";
                    } break;
                    case 203: {
                        alertMsg = "邮箱已被注册！";
                    } break;
                }
                new LHYAlertView({
                    type: "default",
                    autoClose: 1000,
                    title: "温馨提示",
                    message: alertMsg
                });
            }
        })
    }
}
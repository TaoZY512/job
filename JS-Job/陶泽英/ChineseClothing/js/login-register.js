
(function(){
    var validateCode         = getSel('.validate-code'),
         code                = getSel('.code'),
         goRegister          = getSel('.go-register'),
         title               = getSel('.title'),
        loginRegister        = getSel('.login-register-btn'),
        Register             = getSel('.login-register'),
        goLogin              = getSel('.go-login'),
        phone                = getSel('.phone'),
        userName             = getSel('.username'),
        passWord             = getSel('.password'),
        inputBox             = getSel('.input-box');
    validateCode.textContent = getVerificationCode(6);
    validateCode.onclick = function(){
        validateCode.style.cursor = 'pointer';
        validateCode.textContent = getVerificationCode(6);
    };
    //注册登录正则判断
    verification(userName,passWord,phone,code);
    //记录登录/注册
    var isLogin  = true;
    location.hash = "login";
    goRegister.onclick = function(){
        title.textContent = "REGISTER ";
        Register.className = "login-register";
        loginRegister.className = "login-register-btn hidden";
        goLogin.className = 'fl go-login';
        this.className = 'fr go-register hidden';
        phone.className  = 'phone';
        phone.parentElement.className= 'input-box';
        location.hash = 'register';
        document.title = "Hanfu-show - REGISTER";
    };

    goLogin.onclick = function(){
        title.textContent = "LOGIN ";
        Register.className = "login-register hidden";
        loginRegister.className = "login-register-btn";
        this.className = 'fl go-login hidden';
        goRegister.className = 'fr go-register';
        phone.className  = 'phone hidden';
        phone.parentElement.className= 'input-box hidden';
        location.hash = "login";
        document.title = "Hanfu-show - LOGIN";
    };
    // 注册BMOB服务
    Bmob.initialize("5b1e0cd9a83e87c62ada018d5cb14db3", "bea32e05688b1fc7565f8160c0fe02db");
    //登陆
    loginRegister.onclick = function(){
        logIn(userName,passWord,code);
    }  
    //注册
    Register.onclick = function(){
        signIn(userName,passWord,phone,code);
    }
})();
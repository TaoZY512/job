(function(){
    //获取存储验证码元素
    var validateCode = document.querySelector(".validate-code");
    var input = document.querySelector('input');

    //设置默认验证码
    validateCode.textContent = getVerificationCode(6);
    //   点击验证码/切换
    validateCode.onclick = function(){
        validateCode.textContent = getVerificationCode(6);
    };
   //    判断验证码是否输入正确
    input.onblur = function(){
        var reg = new RegExp(`^${validateCode.textContent}$`,"i");
        if(!reg.test(this.value)){
            alert("验证码不匹配!")
        }

     }

})();

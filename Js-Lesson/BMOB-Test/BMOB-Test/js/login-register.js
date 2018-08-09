


$(function(){
    // 记录登陆/注册
    let isLogin   = true;
    location.hash = "login";
    // 点击前往注册
    $(".go-register").on("click", () => {
        isLogin = false;
        $(".register").removeClass("hidden");
        $(".login").addClass("hidden");
        $(".title").text("REGISTER");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
        document.title = "BMOB - REGISTER";
    });
    // 点击登陆
    $(".go-login").on("click", () => {
        isLogin = true;
        $(".register").addClass("hidden");
        $(".login").removeClass("hidden");
        $(".title").text("LOGIN");
        $(".login-register-btn").text("登陆");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
        document.title = "BMOB - LOGIN";
    });

    // 注册
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!Validate.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) {
            if(!$(".username").val() || !$(".password").val()) {
                console.log("请完善信息！");
            }else {
                console.log("请登录！");
            }
        }else {
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {    
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;
                }  
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
            });
            if(isEmpty) {
                console.log("请完善信息！");
            }else if(!isThough) {
                console.log("信息不合法！");
            }else {
                console.log("请注册！");
            }

        }
    });
});





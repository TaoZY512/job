(function(){
    var username = getEl("#username"),
        password = getEl("#password"),
        checkbox = getEl("#checkbox"),
        goRegister = getEl("#go-register"),
        goLogin  = getEl("#go-login"),
        btn      = getEl("#btn"),
        title    = getEl("#title"),
        remenber = getEl("#remenber");
    var isLogin = true;
    if(localStorage.localUser){
        user = JSON.parse(localStorage.localUser);
        username.value = user.username;
        password.value = user.password;
        checkbox.checked = true;
    }
})();
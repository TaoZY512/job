$(function(){
    var login = getSel('.login');
    
    if(sessionStorage.username){
        var result = JSON.parse(sessionStorage.username);
        login.innerHTML = '<a href="./index.html">' +'欢迎'+ result +'</a>';
    }

    // if(sessionStorage.loginUser){
    //     login.textContent = "欢迎"
    // }
    //鼠标放上去的代码
    var timer = setInterval(setPicturn,3000);
    var oDiv = document.querySelector('.banner_img');
    oDiv.onmouseover = function()
    {
        clearInterval(timer);
    };
    oDiv.onmouseout = function()
    {
        timer = setInterval(setPicturn,3000);
    };

});

(function(){
  if(!sessionStorage.loginUser){
      location.href ="./login-register.html";
      return;
  }
  var loginUser = JSON.parse(sessionStorage.loginUser);
  alert("Hello," + loginUser.username + "！");
})();
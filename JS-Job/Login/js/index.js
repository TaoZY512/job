(function(){

    var oUser = getSel(".nameIpt"),
        oPass = getSel(".passIpt"),
        oRem  = getSel("remember")
        oBtn = getSel(".submit");

    oBtn.onclick = function(){
        show(oUser.value,oPass.value,oRem);

    }

})();
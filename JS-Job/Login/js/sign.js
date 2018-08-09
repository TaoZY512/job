(function(){

    var oUser = getSel(".nameIpt"),
        oPass = getSel(".passIpt"),
        oSign = getSel(".sign");
    oSign.onclick = function(){
        add(oUser.value,oPass.value);
        localStorage.clear();
    }

})();
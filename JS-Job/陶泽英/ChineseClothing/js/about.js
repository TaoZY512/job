(function(){
    var aUsername = getSel('.aUsername'),
        aPhone    = getSel('.aPhone'),
        aEmail    = getSel('.aEmail'),
        aContent  = getSel('.aContent'),
        aBtn      = getSel('.aBtn');

    aBtn.onclick = function(){
        //添加到本地存储
        add(aUsername,aPhone,aEmail,aContent);
    };

})();


(function(){
    var oHeader   = document.querySelector("header");
    //滚出去的距离
    var offset 　  = 0,
        lastOffset  = 0;
    window.onscroll = function(e){
        //更新偏移量
        offset = document.body.scrollTop || document.documentElement.scrollTop;
        if(offset > lastOffset){
            oHeader.classList.add("menu-hidden");
        }else{
            oHeader.classList.remove("menu-hidden");
        }
        lastOffset = offset;

    }
})();
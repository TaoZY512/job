(function () {
    //1.定时器
    interval();
    //2.延时器
    timeout();


    //3.缓存
    //获取dom元素
    var oName     = getEl(".nameIpt"),
        oMajor    = getEl(".majorIpt"),
        oOrigin   = getEl(".originIpt"),
        oShowBtn  = getEl(".show"),
        oClearBtn = getEl(".clear"),
        oAddBtn   = getEl(".add"),
        oUl       = getEl("#data-list");

    //添加数据
    oAddBtn.onclick = function () {
        add(oName.value,oMajor.value,oOrigin.value);
    }
    //查看数据
    oShowBtn.onclick = function () {
        show(oUl);
    }
    oClearBtn.onclick = function () {
        clear(oUl);
    }
})()
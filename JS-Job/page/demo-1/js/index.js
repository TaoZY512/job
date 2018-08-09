
(function() {
    // 1. 定义变量
    var data       = null;
        totalPage  = 0, // 记录总页数
        curIndex   = 1, // 记录当前页
        oWrap      = getEl(".news-list"), // 内容容器
        oCurPage   = getEl(".curPage"),   // 当前页
        oTotalPage = getEl(".totalPage"), // 总页数
        oUp        = getEl(".up"),
        oDown      = getEl(".down");
    // 2. 获取数据
    GET({
        url: "./json/data.json",
        success: function(response) {
            // 更新数据
            data = response.news;
            // 更新总页数
            totalPage = Math.ceil(data.length / 10);
            oTotalPage.textContent = totalPage;
            // 加载页面
            loadingHtml(oWrap, data, curIndex);
        }
    });
    // 3. 事件
    oUp.onclick = function() {
        if(curIndex == 1) {
            return;
        }else {
            curIndex--;
        }
        loadingHtml(oWrap, data, curIndex);
        oCurPage.textContent = curIndex;
    };
    oDown.onclick = function() {
        if(curIndex == totalPage) {
            return;
        }else {
            ++curIndex;
        }
        loadingHtml(oWrap, data, curIndex);
        oCurPage.textContent = curIndex;
    }
})();



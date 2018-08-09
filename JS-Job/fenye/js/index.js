(function(){

    var totalPage  = 0,//记录总页数
        curIndex   = 1,//记录当前页
        warp       = getEl(".news-list"), //内容容器
        oCurPage   = getEl(".curPage"), //当前页
        oTotalPage = getEl(".totalPage"),//总页数
        oUp        = getEl(".up"),
        oDown      = getEl(".down"),
        data       = '';
     //获取数据
    get({
        url:"./data.json",
        success:function(response){
            data = response.news;
            //更新总页数
            totalPage = Math.ceil(data.length/10);
            //加载页面
            loadingHtml(warp,data,curIndex);
            oTotalPage.textContent = totalPage;
        }
    })
    //事件
    oUp.onclick = function(){
        if(curIndex == 1){
            return;
        }else{
            curIndex--;
        }
        loadingHtml(warp,data,curIndex)
        oCurPage.textContent = curIndex;
    };
    oDown.onclick = function () {
        if(curIndex == totalPage){
            return;
        }else {
            curIndex++;
        }
        loadingHtml(warp,data,curIndex)
        oCurPage.textContent = curIndex;
    }
})();
(function(){
  
    var totalPage  = 0,//记录总页数
        curIndex   = 1,//记录当前页
        warp       = getSel(".citeall"), //内容容器
        oCurPage   = getSel(".curPage"), //当前页
        oTotalPage = getSel(".totalPage"),//总页数
        oUp        = getSel(".up"),
        oDown      = getSel(".down"),
        data       = '';
    //获取数据
    get({
        url:"./json/knowledge.json",
        success:function(response){
            data = response.knowledgeInfo;
            //更新总页数
            totalPage = Math.ceil(data.length/6);
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
        loadingHtml(warp,data,curIndex);
        oCurPage.textContent = curIndex;
    }


})();

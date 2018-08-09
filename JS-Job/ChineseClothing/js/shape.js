(function(){
    var boxFlash         = getSel('.box-flash',true);
    for(var j = 0,len = boxFlash.length;j < len;j++){
        var oPrevNum         = getSel('.prev',true),
            oNextNum         = getSel('.next',true),
            oPrev            = oPrevNum[j],
            oNext            = oNextNum[j];
        //定义一个计数器
        var counter = 0;


        oPrev.onclick = function(){
            var thisElement = this.parentElement.parentElement.children[1].children;
            thisElement[counter].className ='shape-child';
            if(counter === thisElement.length - thisElement.length){
                counter = thisElement.length;
            }
            thisElement[--counter].className ='shape-child show';

        };
        oNext.onclick = function(){
            var thisElement = this.parentElement.parentElement.children[1].children;
            thisElement[counter].className ='shape-child';
            if(counter === thisElement.length-1){
                counter = -1;
            }
            thisElement[++counter].className ='shape-child show';
        };
    }



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
        url:"./json/shape.json",
        success:function(response){
            data = response.shape;
            //更新总页数
            totalPage = Math.ceil(data.length/6);
            //加载页面
            loadingHtml(warp,data,curIndex);
            oTotalPage.textContent = totalPage;
        }
    });
    //获取boxFlash数据
    var shapeData ="";
    get({
        url:"./json/info.json",
        success:function(response){
            getWorking(response.shapeInfo,boxFlash[0]);
            getWorking(response.shapeInfoImageText,boxFlash[1]);
            getWorking(response.shapeInfoLectureRoom,boxFlash[2]);
            getWorking(response.shapeInfoMake,boxFlash[3]);
         }
    });
    
    //事件
    oUp.onclick = function(){
        if(curIndex == 1){
            return;
        }else{
            curIndex--;
        }
        loadingHtml(warp,data,curIndex);
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
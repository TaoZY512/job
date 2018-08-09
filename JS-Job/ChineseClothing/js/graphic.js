(function(){
   //获取DOM元素
    var oPrev        = getSel('.prev'),
        oNext        = getSel('.next'),
        oMianContent = getSel('.main_content'),
        oContainer   = getSel('.container'),
        idotBox      = getSel('.idot-box'),
        idotBoxChild = idotBox.children;
    //定义变量
    var curIndex = 0,
        maxIndex  = 5,
        isAnimating = false,
        timer = null;
    //添加点击事件
    oPrev.onclick = function(){
        if(curIndex == 0){
            curIndex = maxIndex
        }else{
            --curIndex;
        }
        tab(+oMianContent.offsetWidth);
        changeIdot()
    };
    oNext.onclick = function(){
      if(curIndex == maxIndex){
          curIndex = 0;
      }else{
          ++curIndex;
      }
        tab(-oMianContent.offsetWidth);
        changeIdot()
    };
    for(var i = 0,len = idotBoxChild.length;i<len;i++){
        //动态设置小圆点下标
        idotBoxChild[i].dataset.index = i;
        idotBoxChild[i].onclick = function(){
            // 定义点击的小标事件
           var tarIndex = this.dataset.index;
           if(tarIndex == curIndex){
               return;
           }
           var offset = -oMianContent.offsetWidth * (tarIndex - curIndex);
           //更新当前下标
           curIndex = tarIndex;
           tab(offset);
           changeIdot();
        }
    }
    play();

    oContainer.onmouseenter = stop;
    oContainer.onmouseleave = play;
   function tab(offset){
        //更新动画的状态
       isAnimating = true;
       //定义动画
       var duration = 500,
           interval  = 15,
           frames = duration / interval,
           speed = Math.ceil(offset / frames);

       var curLeft = parseInt(getStyle(oContainer,"left")),
           tarLeft = curLeft + offset;
       var t = setInterval(function(){
           //更新当前值
           curLeft = parseInt(getStyle(oContainer,"left"));
           if((offset < 0 && curLeft > tarLeft) || (offset > 0 && curLeft <tarLeft)){
               oContainer.style.left = curLeft + speed + "px";
           }else{
               //清除定时器
               clearInterval(t);
               t = null;
               isAnimating = false;
               //更新位置
               oContainer.style.left = tarLeft + "px";
               //处理边界值
               var imgW = oMianContent.offsetWidth;
               if(parseInt(oContainer.style.left) < -6 * imgW){
                   oContainer.style.left = -imgW + "px";
               }else if(parseInt( oContainer.style.left) > -imgW){
                   oContainer.style.left = -6 * imgW + "px";
               }
           }
       },interval)
   }
   function changeIdot(){
       for(var i = 0,len = idotBoxChild.length;i < len; i++ ){
           if(idotBoxChild[i].classList.contains("show")){
               idotBoxChild[i].classList.remove("show");
               break;
           }
       }
       idotBoxChild[curIndex].classList.add("show");
   }
function play(){
        timer = setInterval(function(){
            oNext.onclick();
        },3000);
}
function stop(){
        clearInterval(timer);
        timer = null;
}
})();

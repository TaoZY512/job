(function(){
    //1.获取DOM元素
    var imgs = document.querySelectorAll('img'),
        idots = document.querySelectorAll('.idot'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        container = document.querySelector('.container');
    //2.
    var curIndex = 0,
         timer = null;
    //3.事件添加
    prev.onclick = function(){
        curIndex = curIndex == 0 ? 3:--curIndex;
        tab();
    }
    next.onclick = function(){
        curIndex = curIndex == 3 ? 0:++curIndex;
        tab();
    }
    for(var i = 0,len = idots.length;i<len;i++){
        //为小圆点设置下标
        idots[i].dataset.index = i;
        idots[i].onclick = function(){
          var index = this.dataset.index;
          if(index == curIndex){
              return
          }
          //更新当前显示下标
            curIndex = index;
          tab();
        }
    }
    container.onmouseenter = stop;
    container.onmouseleave = play;
    //自动播放
    play();
    //方法封装
    function play(){
        timer = setInterval(function(){
            next.onclick();
        },3000)
    }
    function stop(){
        clearInterval(timer);
        timer = null;
    }
    function tab(){
        for(var i = 0,len = imgs.length;i<len;i++){
            // classList.contains()判断是否包含某个class
            if(imgs[i].classList.contains("show")){
                //remove移除class
                imgs[i].classList.remove("show");
                idots[i].classList.remove("show");
                break;
            }
        }
        //classList.add（）添加class
        idots[curIndex].classList.add('show');
        imgs[curIndex].classList.add('show');
    }
})();
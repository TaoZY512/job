(function(){
 //1、获取元素
    var oInput    = getEl('#idCard'),
         oSureBtn = getEl('#sureBtn');
    //2、添加事件
    oSureBtn.onclick = function(e){
        e = e || event;
        console.log(e.target == this);
        console.log(this);
        handleSreBtnClick(oInput)
    };
    oSureBtn.addEventListener("mouseenter",function(){
        this.style.color = 'orange';
    },false);
    oSureBtn.addEventListener("mouseout",function(){
        this.style.color = '#000';
    },false);

    var oContainer    = document.querySelector('.container'),
        oBox          = document.querySelector('.box'),
        oSquare       = document.querySelector('.square');

    oContainer.addEventListener("click",function(e){
        e = e || event;
        switch(e.target.className){
            case "square" :{
                e.target.style.borderRadius = '8px';
            }break;
            case "box" :{
                e.target.style.borderRadius = "50%";
            }break;
        }
    },false)
    /*
    //true为冒泡
    //false为截取
    oContainer.addEventListener("click",function(){
        alert(1);
    },false);
    oBox.addEventListener("click",function(){
        alert(2);
    },false);
    oSquare.addEventListener("click",function(event){
        alert(3);
        event.stopPropagation();
    },false);
    */
})();

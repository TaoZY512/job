(function(){
    var oContainer = document.querySelector(".container"),
        oSmallBox  = document.querySelector('.small-box'),
        oGlass     = document.querySelector('.glass'),
        oSmallImg  = document.querySelector('.small-img'),
        oBigBox    = document.querySelector('.big-box'),
        oBigImg    = document.querySelector('.big-img');



    //计算大图宽高
    var w = parseInt(getStyle(oSmallImg,"width")) * parseInt(getStyle(oBigBox,"width")) / parseInt(getStyle(oGlass,"width"));
    var h = parseInt(getStyle(oSmallImg,"height")) * parseInt(getStyle(oBigBox,"height")) / parseInt(getStyle(oGlass,"height"));
    oBigImg.style.width = w + "px";
    oBigImg.style.height = h + "px";

    oSmallBox.onmouseover = function(){
        oGlass.style.display = "block"
        oBigBox.style.display = "block"
    };
    oSmallBox.onmouseout = function(){
        oGlass.style.display = "none"
        oBigBox.style.display = "none"
    };
    oSmallBox.onmousemove = function(e){
    //   计算放大镜的位置
        var left = e.clientX - oContainer.offsetLeft - oSmallBox.offsetLeft - oSmallBox.offsetWidth / 2;
        var top = e.clientY - oContainer.offsetTop - oSmallBox.offsetTop - oSmallBox.offsetHeight / 2;
        //处理边界值
        if(top<0){
            top =0;
        }else if(top > oSmallBox.offsetHeight - oGlass.offsetHeight){
            top = oSmallBox.offsetHeight - oGlass.offsetHeight

        }
        if(left<0){
            left =0;
        }else if(left > oSmallBox.offsetWidth - oGlass.offsetWidth){
            left = oSmallBox.offsetWidth - oGlass.offsetWidth

        }
        oGlass.style.left = left + "px";
        oGlass.style.top = top + "px";

    //    更新大图片位置
    //    大图移动的距离 * 大图的最大移动距离/放大镜的最大移动距离
        oBigImg.style.top  = -top * (oBigImg.offsetHeight - oBigBox.offsetHeight) / (oSmallBox.offsetHeight - oGlass.offsetHeight) + "px";
        oBigImg.style.left = -left * (oBigImg.offsetWidth - oBigBox.offsetWidth) / (oSmallBox.offsetWidth - oGlass.offsetWidth) + "px";

    };
    //获取非行内样式
    function getStyle(el,attr){
    //    兼容IE
        if(el.currentStyle){
            return el.currentStyle[attr];
        }else{
            return getComputedStyle(el,null)[attr];
        }
    }

})();
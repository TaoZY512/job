//图片名字
var imgGroup = document.querySelector('.img-group'),
    imgGroup_child = imgGroup.children,
    imgGroup_child_leng = imgGroup_child.length,
    dot = document.querySelector('.dot'),
    dot_child = dot.children;
    left = document.querySelector('.left'),
    right = document.querySelector('.right'),
    oDiv=document.querySelector('.all');


//申明一个计数器
var counter = 0;
var result = function() {
    imgGroup_child[counter].className = '';
    dot_child[counter].className = '';
    if (counter === imgGroup_child_leng - 1) {
        counter = -1;
    }
    imgGroup_child[++counter].className = 'show';
    dot_child[counter].className = 'on';
    //向左
    left.onclick = function(){

        imgGroup_child[counter].className = '';
        dot_child[counter].className = '';
        if (counter === imgGroup_child_leng - 5) {
            counter = 5;
        }
        imgGroup_child[--counter].className = 'show';
        dot_child[counter].className = 'on';


    }
    //向右
    right.onclick = function() {
        imgGroup_child[counter].className = '';
        dot_child[counter].className = '';
        if (counter === imgGroup_child_leng - 1) {
            counter = -1;
        }
        imgGroup_child[++counter].className = 'show';
        dot_child[counter].className = 'on';
    }
};
//鼠标放上去的代码
var timer = setInterval(result,2400);
oDiv.onmouseover = function()
{
    clearInterval(timer);
};
oDiv.onmouseout = function()
{
    timer = setInterval(result,2400);
};


function incident(onIpt,twIpt,select,callBack){

    //获取文本输入框输入的数字
    var oneValue = parseFloat(onIpt.value);
    var twoValue = parseFloat(twIpt.value);
    //获取运算符
    var options = select.options;
    var idx = select.selectedIndex;
    var option = options[idx];
    var operator = option.textContent;
    var result = 0;
    switch(operator){
        case '+': {result = oneValue + twoValue;} break;
        case '-': {result = oneValue - twoValue;} break;
        case 'x': {result = oneValue * twoValue;} break;
        case '÷':{result = oneValue / twoValue;} break;
    }
    if(callBack){
        callBack(result);
    }
}

(function (){
    //获取文本输入框输入的数字
    var oneIpt = document.querySelector('#one');
    var twoIpt = document.querySelector('#two');
    var selectIpt = document.querySelector('#operator');
    var resultIpt = document.querySelector('#result');
    //事件添加
    oneIpt.oninput = function () {
        incident(oneIpt, twoIpt, selectIpt, function (result) {
            resultIpt.textContent = result;
        });
    }
    twoIpt.oninput = function () {
        incident(oneIpt, twoIpt, selectIpt, function (result) {
            resultIpt.textContent = result;
        });
    }
        selectIpt.onchange = function(){
        incident(oneIpt,twoIpt,selectIpt, function(result){
            resultIpt.textContent = result;
        });
    }

})();


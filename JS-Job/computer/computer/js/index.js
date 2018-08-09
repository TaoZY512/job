   var Boo=false;
   var result = 0;
   var ope;
    function num(Num){
        var txt = $('res');
        if(Boo){
            txt.value = Num;//若接受过运算符，文本框清零
            Boo = false;
        }else{

            if(txt.value == '0'){
                txt.value = Num;
            }else{
            txt.value += Num;
            }
        }
    }
    function dot(Num){
        var txt = $('res');
        if(Boo){
            txt.value = '0.'
        }else{
            if(txt.value.indexOf('.') == -1){
                //判断数值中是否已经有小数点
                txt.value += ".";//若没有则加上

            }

        }
        Boo=false;
    }
function computer(op){
    var onum = $('res').value;
    if(onum == ''){onum = 0};
    Boo=true;
    switch(ope){
        case '+':result += parseFloat(onum);break;
        case '-':result -= parseFloat(onum);break;
        case '*':result *= parseFloat(onum);break;
        case '/':result /= parseFloat(onum);break;
        case '=':result = parseFloat(onum);break;
        case '%':result%=onum;break;
        default:result=parseFloat(onum)
    }
    $('res').value = result;
    ope=op;
}
  function plusMinus(){
    var onum = $('res').value;
        if(onum ==''){
            alert("数据不能为空")
        }else{
            $('$res').value *=-1;
        }
}

//substring提前字符串介于两个指定下标的字符

   function backspace(){
        var txt = $('res');
        txt.value = txt.value.slice(0,txt.value.length-1);
        if(txt.value == ''){txt.value=0}
   }
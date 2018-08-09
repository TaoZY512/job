(function(){

    var weather = "晴";
    if(weather == "雨"){
       console.log("不出门");
    }else{
        console.log("出门");
    }


    //获取html元素
    var ageInput = document.querySelector("#age");
    var btn = document.querySelector("#btn");
    //给按钮添加点击事件
    btn.onclick = function(){
        //获取输入框的值
        var age = ageInput.value;
       //异常处理
        //isNaN()判断是否为NaN
        if(!age || isNaN(Number(age))){
             alert("输入年龄不合法！");
            }else if(age > 18){
                alert("您已成年！");
            }else {
                alert("您还是未成年");
            }
        }
    var week = "日";
    switch(week){
        case "一":{
            console.log("今天限行尾号：1、6")
        }break;
        case "二":{
            console.log("今天限行尾号：2、7")
        }break;
        case "三":{
            console.log("今天限行尾号：3、8")
        }break;
        case "四":{
            console.log("今天限行尾号：4、9")
        }break;
        case "五":{
            console.log("今天限行尾号：5、0")
        }break;
        case "六":{
            console.log("今天不限行")
        }break;
        default:{
            console.log("输入不合法")
        }
    }

    for(var i=0; i<5; i++){
        console.log("Hello,world!");
    }

//计算1~100的和
    var sum = 0;
    for(var i = 1; i<=100; i++){
        sum += i;
    }
    console.log(sum);

    //循环打印输出100以内能被3整除的数
    for(var i = 1; i <= 100; i++){
      if(i%3 == 0){
          console.log(i);
      }
    }


    var i = 0;
    while(i < 10){
        if(i % 2 != 0){
            console.log(i);
        }
        i++;
    }

    //100以内的和
    var i = 0, sum = 0;
    do{
        sum += i;
        i++;
    }while(i <= 100);
    console.log(sum);

    //外层循环执行一次，内层循环执行N次
    //外层循环控制行数，内层循环控制列数
    var str = "";
   for(var i = 0; i < 5; i++){
       for(var j = 0; j < 3; j++){
           // console.log("i=" + i + ",j =" + j);
           str += "*";
       }
       str += "\n";
   }
   console.log(str);

   for(var i = 0; i < 10; i++){
      if(i == 4){
          //终止循环
          //break;
          //跳过某一次循环
          continue;
      }
       console.log(i)
   }//打印1到10，除了4

   var str = "";
   for(var i = 1; i <= 9; i++){
       str = '';
       for(var j = 1; j <= i; j++){
           str += j + "*" + i + "=" + j * i + "  ";
       }
       console.log(str);
   }
})();




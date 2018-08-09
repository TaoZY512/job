
(function(){
    var salary="6000";
    if(salary > 10000){
        console.log("购买 iPhone 7 Plus");
    }else if(salary >= 6000 && salary <=10000){
        console.log("购买 SAMSUNG  Galaxy S8");
    }else if(salary >= 3000 && salary < 6000){
        console.log("购买 OPPO R9S Plus");
    }else if(salary >= 1000 && salary < 3000){
        console.log("购买 MU Note4 X");
    }else{
        console.log("“等存足钱之后再买手机”");
    }

  for(var a = 1;a <= 100; a++){
        if(a % 3 ==0){
            console.log(a);
        }
  }
  var count = "";
  for(var b = 1; b <= 1000; b++){
        if(b % 3 ==0 && b % 2 ==0){
           count++;
        }
  }
    console.log("1-1000之间能被3整除的偶数的个数有：" + count);
  for(var year = 2000; year <= 3000; year++){
        if(year % 4 == 0 && year % 100 !==0 || year % 400 == 0){
            console.log(year)
        }
  }
  var sum = "";
  for(var i = 1;i <= 9; i++){
      sum = "";
      for(var j = 1; j <= i; j++){
          sum += j + "*" + i + "=" + i*j + "  ";
      }
      console.log(sum);
  }

  var space,starts,star = '';
  for(var e = 1; e <= 4; e++){
      space = 4 - e;
      starts = 2 * e - 1;
      for(var f = 1; f <= space; f++){
          star += ' ';
      }
      for(var g = 1; g <= starts; g++){
              star += '*';
      }
          star += '\n';
  }
    console.log(star);

    var num = 5;
    var num1 = -num+1;
    var stemp = 2;
    var str = "";
    for(var i=num1;i<num;i+=stemp){
        var space = Math.abs(i);
        for(var j=0;j<=space/2;j++){
            str+=" ";
        }
        while(space<num){
            str+="*";
            space++
        }
        str += '\n';
    }
    console.log(str)

    var month = 3,day=2,content=0,days=0;
    switch (month) {
        case 12:{content += 31};
        case 11:{content += 30};
        case 10:{content += 31};
        case 9:{content += 30};
        case 8:{content += 31};
        case 7:{content += 30};
        case 6:{content += 31};
        case 5:{content += 30};
        case 4:{content += 31};
        case 3:{content += 28};
        case 2:{content += 31};
        case 1:{content += 0};
        days = content + day;
    }
   console.log(month + "月" + day + "日,"+"是今年的第" + days +"天")
})()


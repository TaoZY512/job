(function(){
    console.log(2 === 2.0);//true  所有的数字都是以 64位浮点数的形式存储的
    console.log(0.5 + 0.2 === 0.7);
    //toFixed:保留小数位数
    var π = Math.PI.toFixed(4);//3.1416
    console.log(π);
    // pow(m,n); 求m的n次方
    console.log(Math.pow(2,3));//8

    var a = "3.14";
         b = "12e-2";
   var result =  parseInt(parseFloat(a) + parseFloat(b));
   console.log(result);

   console.log(parseInt(0b1110));
    console.log(parseInt(0o14));
    console.log(parseInt("1010",2));
    //将10进制的8转换成16进制
    console.log((12).toString(16));//c
    console.log((970616).toString(2));//11101100111101111000
    console.log(parseInt(11101100111101111000));

    //字面量创建方法
    var a = 10;
    console.log(typeof a);
    //对象构造方法
    var b = new Number(10);
    console.log(typeof b);

    //为指定对象拓展新的方法
    Number.prototype.haha = function(){
       console.log("dhfdskf");
    }
    var a = -1;
    a.haha();
})();
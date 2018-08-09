

(function(){
    //调用函数
    sayHello();
    drinkWith('葡萄汁');

    testing('511527','111111');

    console.log(sum(2,4));
    var result = sum(2);
    console.log(result);

    showInfos({
        age:0,
        name:"Admin",
        score:95.5
    });
    console.log(sum(1,3,4,5,6));
//对象类型为地址传递，其他为值传递
    var a = 10;
    changeNum(a);//值传递
    console.log(a);//10

    var b = new Number(10);
    changeNum(b);//值传递
    console.log(b);//10
    var stu ={
        gender:"男"
    };
    changeObj(stu);//地址传递
    console.log(stu.gender);//保密
    sayHi();
//实例化对象/构造对象
   var teacher = new Teacher("张珊",28,"前端");
   console.log(teacher)
    console.log(recursive(5));
   test(3)

    subtract(10,5,function(res){
       console.log(res);
    });


   function test(){
       console.log("hello");
   }
   test();
   var fun = new job("小小",20);
  console.log(fun)
})();


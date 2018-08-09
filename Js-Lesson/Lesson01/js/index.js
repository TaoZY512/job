//全局变量。可以在任意位置访问
//全局作用域
var car = "Benz";
//自调用函数/保护私有变量
(function(){
    console.log(car);
    //1.变量
    var name;//分配内存空间
    name = "林彦俊";//变量赋值
    var age = 20;
    console.log(name);
    console.log(age);
    /*
    //错误实例：变量必须要先定义后使用
    console.log(number); //not defined
    */
    var color;
    console.log(color);//undefined(没有值)
    //变量提升
    console.log(lang);//undefined(没有值)
    var lang = "javascript";
    console.log(lang);
    lang="java";
    console.log(lang); //java

    var lang;
    console.log(lang); //java

    //变量名可重复（一般不建议这么做）
    var lang = "Swift";
    console.log(lang); //Swift
    //同时定义多个变量
    var x = 10,
        y = 20;

    //类型推断
    //typeof：查看变量的数据类型
    console.log(typeof lang);//string（字符串类型的）
    var x = 10;
    console.log(typeof x);//number(数字类型)
    //驼峰命名
    var personAge = 28;

    //数据类型转换
    //1.转换为数值
    console.log("4" - 3);
    console.log("4" + 3);
    //a.Number 整体转换
    //只要存在非数字字符，则结果为NaN
    //b.parseInt 从左往右逐一转换
    //一旦遇到了非数字字符，终止转换
    //并返回已转换的结果。
    var result = Number("4")+3;
    console.log(result);
    //NaN(not a number)
})();
//lang 是在函数内部定义的变量
//所以lang是一个局部变量
//因此无法在函数外部进行访问
//局部变量起作用的区域只限于函数内部，
//因此称为局部作用域或者函数作用域


console.log(car);



//运算符与表达式
//1.基本运算符
// + - * /
//++自增运算符
//--自减运算符
//无论++前还是在后，自身都会+1
var x = 10;
x++;
console.log(x);//11

++x;
console.log(x);//12

--x;
console.log(x);//11

var x = 10,y;
y = ++x + 10;
console.log("x=" + x, "y=" + y)//x=11 y=21


var x = 10,y;
y = x++ + 10;
console.log("x=" + x, "y=" + y)//x=11 y=20

//结论：
//++在前，先自身+1，再参与运算；
//++在后，先参与运算，再自身+1；

x=10;
y = x-- - --x;
console.log("x=" + x + "y=" + y)//x=8,y=2;

x = 10;
y = ++x - --x;
console.log("x=" + x + "y=" + y)
//复合运算符
// += -+ *= /= %=
// x += y -> x=x + y
//x -= y -> x=x - y

x = 10;
x += ++x;
console.log(x);
var u;
 y = u ? 3.14 : "china";

console.log(y);
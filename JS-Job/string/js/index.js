(function(){
    //1.判断一个字符（比如"a"）是否出现在另一个字符（比如"2340sadfj2affa2"）中，如果出现，并求出现了几次。
    var str = "2340sadfj2affa2";
    var strs = str.split("");
    var sum = 0;
    for (var i = 0; i < strs.length; i++) {
        if(strs[i]=="a")
            sum++;
    };
    console.log(sum);

//2.将字符串" 49238028424"中的"2"全部清除。
    var num = "49238028424";
    //g 正则表达式全局匹配模式
    console.log(num.replace(/2/g,""));


  //3.将字符串逆序输出，如‘hello’，输出为‘olleh’
   var coun = "hello";
      console.log(coun.split('').reverse().join(''));


//4、定义一个网址完整的网址，实现以下需求：
//（1）、取出网址中的网络传输协议的类型（可能为：ftp、http、https等）；
//（2）、取出网址中当前的文件名及后缀名（假设不知道当前的文件名“index”和文件后缀名“html”）；
//（3）、取出网址中的域名部分（baidu.com）。

   var url = "https://www.baidu.com/index.css";
   var urll = url.split("");
   var sult = urll.indexOf(':');
    var fanhui = urll.indexOf('/',11);
    console.log("传输协议的类型为：" + url.slice(0, sult));
    console.log("后缀名为：" + url.slice(fanhui));
    console.log("域名部分：" + url.slice(12, 21));



})();

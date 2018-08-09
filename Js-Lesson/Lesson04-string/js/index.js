(function(){
    var s1 = "Hello,'Tom'!",//双引号包含单引号
         s2 = "Hello,\"Tom\"!",//双引号包含斜杠
         s3 = "今天是个" +
             "好日子";
    console.log(s3)
    //字符串与数组
    var fruits = ["香蕉","西瓜","葡萄","芒果"];
    console.log(fruits);
    //将数组转换成字符串
    console.log(fruits.join(","));
    //将字符串转换成数组
    var nameStr = "一，二，三，四";
    console.log(nameStr.split(","));
    var str = "\u738b\u8005\u8363\u8000";
    console.log(str); // "王者荣耀"
   var result = "\\u"+"不简单".charCodeAt(2).toString(2);
   console.log(result);
    /**
     * 函数封装：将字符串转为Unicode编码
     */
    function toUnicodeString(str) {
        var result = "";
        // "李鸿耀"
        for (var i = 0; i < str.length; i++) {
            result += "\\u" + str.charCodeAt(i).toString(16);
        }
        return result;
    }
   var s = toUnicodeString("欢迎来到刺激战场");
    console.log(s);

    var str = "Hello,world!";
    console.log(str === Object(str));
    //结论：判断一个对象为包装对象还是内置对象的方法：
    //1.对指定对象使用Object()方法之后，如果恒等于自身，
    //那么他是一个内置对象，否则为包装对象。
    //2.直接使用typeof查看指定对象的类型，如果为object,则为内置对象，否则为包装对象

    var objStr = new String("Hello,world!");
    console.log(typeof objStr);//object ->内置对象
    console.log(objStr);
    //valueOf从对象中取值
    console.log(objStr.valueOf());

    //长度
    var s = "Hi!"
    console.log(s.length);
    console.log(s.charAt(1));//i
    console.log(s.charAt(-1));//""
    console.log(s.charAt(1000)); //""

    s = "今天天气非常不错"
    console.log(s.indexOf("错"));
    console.log(s.indexOf("哈哈"));//-1如果没有找到则返回-1
    console.log(s.indexOf("天"));//1
    console.log(s.indexOf("天",2));//2
    console.log(s.lastIndexOf("天"));//2从后往前找，把下标返回回来

    console.log(s.match("天气")); //index:2  input:"今天天气非常不错"
    console.log(s.match("雷电")); //null
    console.log(s.search("天气"));//2
    console.log(s.search("雷电"));//-1

    s = "今天天气非常不错"
    //查询头部
    //以...开头
    console.log(/^今天/.test(s));//true
    //查询尾部
    console.log(/不$/.test(s));//false

    //3，字符串拼接
    var s1 = "Hello,",
        s2 = "World!";
    console.log(s1,s2);//Hello,World!

    //4.去空格
    var s = "          js从入门到放弃   ";
    console.log(s.trim());//js从入门到放弃
     //5.大小写转换
    var s = "I love china!";
    console.log(s.toUpperCase());
    console.log(s.toLowerCase());

    //6.字符串替换
    var s = "干包谷里头搬干包谷";
    console.log(s.replace("包谷","玉米"));
    //g 正则表达式全局匹配模式
    console.log(s.replace(/包谷/g,"玉米"));

    //7.字符串截取 slice(start,end);
    var str = "Hello,girl!";
    console.log(str.slice(6,10));//girl
    console.log(str.slice(6));//girl!
    console.log(str.slice(-5,-1));//girl
    console.log(str.slice(3,1));//""


    //截取18位身份证出生年月日
    //控制台输出格式：XXXX年XX月XX日

    var bir = "511527199501052167";
    var year = bir.slice(6,10),
        month = bir.slice(10,12),
        day = bir.slice(12,14);
    console.log("出生年月" + year + "年" + month + "月" + day + "日");

})();


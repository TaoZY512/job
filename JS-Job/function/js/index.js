function but(){
    var a = document.getElementById('ipT').value;
    var year = a.slice(-10,-8),
        month = a.slice(-8,-6),
        day = a.slice(-6,-4);
    if(a.length !== 18 || isNaN(a))
    {
        alert("你输入的身份证不正确！");
    }else{

        alert(year + "年" + month + "月" + day + "日");
    }
}
//2,定义一个函数，求数组中的最大值与最小值（使用闭包回调结果）。



/*
2、定义一个数组，数组里面包含五名学生的信息（学号，姓名，专业，成绩），按如下要求：
a、根据学生成绩按降序排序
b、求平均成绩
c、打印输出成绩最高和成绩最低的学生信息
d、打印输出成绩不及格的学生信息
*/

var students = [
    {num: 1101, name: "张三", major: "前端", score: "50"},
    {num: 1102, name: "李四", major: "前端", score: "76.5"},
    {num: 1103, name: "王麻子", major: "前端", score: "91"},
    {num: 1104, name: "赵二", major: "前端", score: "66"},
    {num: 1105, name: "王老吉", major: "前端", score: "88"},
];

solve(students, function(resObj) {
    console.log("数组排序结果：")
    console.log(resObj.sortArr);

    console.log("平均成绩:" + resObj.ave);

    console.log("成绩最高的学生信息是：");
    console.log(resObj.highInfo);

    console.log("成绩最低的学生信息是：");
    console.log(resObj.lowInfo);

    console.log("不及格的学生包括：")
    console.log(resObj.flunk);


});



function solve(students, callback) {
    // 第1小问
    var results = students.sort(function(stu1, stu2){
        return stu2.score - stu1.score;
    });
    // 第2小问
    var sum = 0;
    students.forEach(function(stu){
        sum += parseFloat(stu.score);
    });

    var ave = (sum / students.length).toFixed(2);

    // 第3小问
    // 第4小问
    var flunk = students.filter(function(stu){
        return stu.score < 60;
    });
    callback && callback({
        sortArr: results,
        ave: ave,
        highInfo: results[0],
        lowInfo: results[results.length - 1],
        flunk: flunk
    });
}

function maxAndMin(arr,callback){
    arr.sort(function(n1,n2){
        return n1-n2;
    });
    callback && callback(arr[0],arr[arr.length-1]);
}


var arr = [2,5,6,10,32];
maxAndMin(arr,function(min,max){
    document.write("最小值" + min + "最大值" + max);
})


//3、有一行英文语句，统计其中的单词个数（单词之间以空格分隔），并将每一个单词的第一个字母改为大写。
var word = "i asked him why";
wordB(word,function(wo){
    document.write(wo.number);
    document.write(wo.upp);

})

function wordB(word,callback){
var result = word.split(" ");
var sum = "";
for(var j = 0; j<result.length; j++){
    sum += (result[j].charAt(0).toUpperCase() + result[j].slice(1)) + " ";
}
 callback && callback({
     number:result.length,
     upp:sum
 })
}
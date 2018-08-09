(function(){
    //1、	随机产生20个100-200之间的正整数存放到数组中，并求数组中的所有元素最大值、最小值、平均值，然后将各元素的与平均值的差组成一个新数组。
    //提示：Math.random() 方法用于获取 0~1之间的随机数；

    var names = [],
        sum =0,
        str = "";
    for(var i = 0; i < 20; i++){
        names.push(parseInt(Math.random() * 100 + 100));

    }
    var max = names[0],
        len = names.length,
        min = names[0];

    for(var j = 0; j < 20; j++){
        sum += names[j];
        max = names[j] > max ? names[j]:max;
        min = names[j] < min? names[j]:min;
    }
    var avg = sum/len;
    str += "最高分：" + max + "\n";
    str += "最低分：" + min + "\n";
    str += "平均分：" + avg + "\n";
    console.log(names);
    console.log(str);

    var diff = [];
    for(var k=0;k<len;k++){
        diff.push(parseInt(names[k]-avg));
    }
    console.log("平均值的差为：" + diff);
   // 2、定义一个数组，数组里面包含五名学生的信息（学号，姓名，专业，成绩），按如下要求：
//a、根据学生成绩按降序排序
   // b、求平均成绩
    //c、打印输出成绩最高和成绩最低的学生信息
   // d、打印输出成绩不及格的学生信息

    var grades = [
        {number: 1001,name: "林彦俊", major:"艺术类",grade: 100},
        {number: 1002,name: "叶正廷", major:"计算机",grade: 95},
        {number: 1003,name: "范丞丞", major:"艺术类",grade: 94},
        {number: 1004,name: "陈立农", major:"计算机",grade: 58},
        {number: 1005,name: "蔡徐坤", major:"艺术类",grade: 99}
    ];

    var res = grades.sort(function(a, b) {
        return b.grade - a.grade;
    });
    console.log(res);
    //求平均数
    var sum = 0,
        str = "",
        len = grades.length,
        max = grades[0].grade,
        min = grades[0].grade,
        bad=[];
    for(var j = 0;j < len; j++){
        sum +=grades[j].grade;
        max = grades[j].grade > max ? grades[j].grade:max;
        min = grades[j].grade < min ? grades[j].grade:min;

        if(grades[j].grade < 60){
            bad.push(grades[j])
        }
    }
   console.log(bad);
    var avg = sum/len;
    str += "平均分：" + avg + "\n";
    str += "最高分：" + max + "\n";
    str += "最低分：" + min + "\n";
    str += "最低分：" + min + "\n";
    console.log(str);


  //3、有一行英文语句，统计其中的单词个数（单词之间以空格分隔），并将每一个单词的第一个字母改为大写。
  var word = "i asked him why";
  var result = word.split(" ");
  var sum = "";
   console.log(result.length);
   for(var j = 0; j<result.length; j++){
   sum += (result[j].charAt(0).toUpperCase() + result[j].slice(1)) + " ";
   }
   console.log(sum);
})();

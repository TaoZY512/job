(function(){
    //1.创建数组
    var names = ["大娃","二娃","三娃","四娃"];
    console.log(names);//["大娃", "二娃", "三娃", "四娃"]
    console.log(names[1]);//二娃
    names[3] = "火娃";
    console.log(names);//["大娃", "二娃", "三娃", "火娃"]
    //3.1末端添加数组元素
    var names = ["大娃","二娃","三娃","四娃"];
    names.push("水娃");
    console.log(names);//["穿山甲", "大娃", "二娃", "三娃", "火娃", "水娃"]
    //3.2开始位置添加数组元素
    var names = ["大娃","二娃","三娃","四娃"];
    names.unshift("穿山甲");
    console.log(names);//["穿山甲", "大娃", "二娃", "三娃", "火娃", "水娃"]

    //4.1删除数组元素(后面)
    var names = ["穿山甲", "大娃", "二娃", "三娃", "火娃", "水娃"];
    names.pop();
    console.log(names);//["穿山甲", "大娃", "二娃", "三娃", "火娃"]
    //4.2 从前面删除
    var names = ["穿山甲", "大娃", "二娃", "三娃", "火娃"];
    names.shift();
    console.log(names);//["大娃", "二娃", "三娃", "火娃"]
    //4.3选择删除splice(第一个数为下标，第二个数为删除的个数)
    var names = ["大娃", "二娃", "三娃", "火娃"];
    names.splice(1,1);
    console.log(names);// ["大娃", "三娃", "火娃"]
    //4.4范围替换（,删除下标为1的后面的两位数，并将"蛇精","蝎子精"添加到后面）
    names.splice(1,2,"蛇精","蝎子精");
    console.log(names);//["大娃", "蛇精", "蝎子精"]

    //4.4范围插入
    names.splice(1,0,"Kar98K");
    console.log(names);//["大娃", "Kar98K", "蛇精", "蝎子精"]

    //5.数组元素截取
    var names = ["大娃", "Kar98K", "蛇精", "蝎子精"];
    var arr = names.slice(1,names.length -1);
    console.log(arr);// ["Kar98K", "蛇精"]

    //6.数组遍历

    for(var i = 0, len = names.length; i < len; i++){
        console.log(names[i]);
    }

    //练习
    //定义5个学生的成绩，求学生的总成绩/平均成绩/最高分/最低分
    var grades = [92,88,98,96];
    var sum = 0,
        max = grades[0],
        min = grades[0];
    for(var a = 0, len = grades.length; a < len; a++){
        sum += grades[a];
        max = grades[a] > max ? grades[a]:max;
        min = grades[a] < min ? grades[a]:min;
    }
    var ave = sum / len,
        str = "";
    str += "总成绩：" + sum + "\n";
    str += "平均数：" + ave + "\n";
    str += "最高分：" + max + "\n";
    str += "最低分：" + min + "\n";
   console.log(str);

   //7.数组排序 sort
    var nums = [1,4,12,8,6];
    console.log(nums.sort());//[1, 12, 4, 6, 8]

    var result = nums.sort(function(n1,n2){
        //n1-n2 -> 升序
        //n2 -n1 -> 降序
        return n1 - n2;
    });
    console.log(result);//[1, 4, 6, 8, 12]

//对象排序
    var students = [
        {name: "张三", grade: 67},
        {name: "李四", grade: 80},
        {name: "老王", grade: 59}
    ];
    var res = students.sort(function(stu1, stu2){
        return stu2.grade - stu1.grade;
    });
    console.log(res[0]);//{name: "李四", grade: 80}

    //8.数组倒序
    var num = [1,2,3,4,5];
    console.log(num.reverse());//[5, 4, 3, 2, 1]

    //9.数组过渡
    var names = ["农农","林彦俊","蔡徐坤","尤长靖","朱正延"],
        len = names.length;
    //筛选出所有的林姓
    //item -> 遍历的每一个数组元素
    //index -> 对应遍历数组元素的下标
    //arr -> 遍历的原始数组
    //注意：函数参数的名字可以任意修改
    var result = names.filter(function(item, index, arr){
        return /延$/.test(item) || /农$/.test(item);
    });
    console.log(result);//["农农", "朱正延"]


    //10.forEach 遍历
    var nums = [1,2,3];
    nums.forEach(function(item,index,arr){
        console.log(item);//1 2 3
    });

    //11.map 操作数组元素本身
    var nums = [1,2,3];
    var res = nums.map(function(item,index,arr){
        return item * 2;
    });
    console.log(res);//[2, 4, 6]


    Array.prototype.removeDuplicate = function () {
        var json = {};
        var arr  = [];
        for(var i = 0, len = this.length; i < len; i++) {
            if(!json[this[i]]) {
                json[this[i]] = true;
                arr.push(this[i]);
            }
        }
        return arr;
    }
    var result = [1, 2, 3, 3, 4, 5].removeDuplicate();
    console.log(result); // [1, 2, 3, 4, 5]
})();

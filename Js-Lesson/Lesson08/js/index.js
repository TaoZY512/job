(function(){
    var oIpt = getEl("input"),
        oBtn = getEl("button"),
        oRes = getEl("#res");
    oBtn.onclick = function(){
        handleBtnClick(oIpt,oRes);
    };

    var person = new Person("Admin");
    //实例对象享有对象prototype中的属性和方法
      person.showName();
      person.kind = "高级动物";
      console.log(person.kind);
      console.log(person);
      console.log(person.__proto__ == Person.prototype);
      console.log(Person.prototype.__proto__ == Object.prototype);
      console.log(Object.prototype.__proto__ == null);
      console.log(person.__proto__.constructor == Person)

    var obj = {
          name:"Admin",
          age:28
    }
    var newobj = {};
    for(var key in obj){
        newobj[key] = obj[key];
    }
    console.log(newobj.age)

//倒计时
    var d = new Date("October 1, 2018");
    console.log(d);

    var d1 = new Date("October 1,2018");
    var d2 = new Date();
    var day = ((d1-d2) /1000/60/60/24).toFixed(0);
    console.log("距离2018年国庆还有" + day + "天");//144

/*
    var n = 10;
    var interval;
    interval = setInterval(function(){
        if (n == 0) {
            this.clearInterval(interval);
            console.log('定时器停止！');
        }else {
            console.log(--n);
        }
    }, 1000);*/
  var arr = [2,4,5,6,7];
  console.log(Math.max(arr));
function stuName(name){
    this.name = "小明";
}

  function stuKid(kind){
      this.kind = "学生";
  }
 stuKid.prototype = new stuName();
 stuKid.prototype.constructor = stuKid();

 var result = new stuKid();
    result.name = "小红";
    console.log(result.kind + result.name);
    console.log(result.kind + result.name);
    console.log(stuKid.prototype);
})();
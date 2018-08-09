(function(){
    /*
    var tearcher = {
        name:'耀哥',
        age:28,
        teach:"web前端"
    }
*/
    //构造函数
    function Car(){}
        Car.prototype = {
            brand:"Benz",
            color:"White",
            getSpeed:function(){
                return "180Km/h"
            }
        }


    var car1 = new Car();
    var car2 = new Car();
    console.log(car1.brand);
    console.log(car2.brand);
///
    car1.brand = "BWM";
    Car.prototype.brand ="奔奔";
    console.log("car1"+ car1.brand);//BWM
    console.log("car2"+ car2.brand);//Benz

    //这里需要注意的是原型属性和方法共享
    //即所有实例中都只是引用原型中的属性方法
    //如果说某一个对象实例修改了对应的属性
    //并不会影响其他对象实例


    function Teacher(name,age){
        this.name = name;
        this.age = age;
    }
    Teacher.prototype = {
        location:"睿峰培训",
        skill:function(){
            console.log("开车");
        }
    }
//提示：这里需要注意的是原型属性和方法的共享，即所有实例中都只是引用原型中的属性方法，任何一个地方产生的改动会引起其他实例的变化，因为它们指向同一块内存。
    var tea1 = new Teacher("林彦俊",21);
    var tea2 = new Teacher("陈立农",20);
    var tea3 = new Teacher("蔡徐坤",22);
    tea1.location = "chengdu";
    console.log(tea1.location);
    console.log(tea2);
    console.log(tea3);


    var dog = {
        name:"小黄",
        color:"黄色",
        runing:function(){
            console.log(this.name + "正在奔跑");
        }
    }
    console.log(dog.name);//小黄
    console.log(dog["name"]);//小黄
    dog.runing();//小黄正在奔跑
    //修改
    dog.name = "小黑";
    dog.runing();//小黑正在奔跑
    //添加属性
    dog.age = 28;
    console.log(dog)//{name: "小黑", color: "黄色", runing: ƒ, age: 28}
    //删除属性
    delete dog.age;
    console.log(dog);//{name: "小黑", color: "黄色", runing: ƒ}

    function cat(name,age){
        this.name = name;
        this.age = age;
    }
    var catNew = new cat("小猫",28);
    console.log(catNew);//cat {name: "小猫", age: 28}

    //对象继承
    function RIMIObject(){
        this.company = "睿峰";
        this.show = function(){
            console.log(this.name + "  "+this.position)
        }
    }
    function RIMIWorker(name,position){
        //1.通过apply继承
        RIMIObject.apply(this,arguments);
        this.name = name;
        this.position = position;
    }
    //2，通过prototype实现继承
    /*
    RIMIWorker.prototype = new RIMIObject();
    RIMIWorker.prototype.constructor = RIMIWorker;
    */
    //3.如果RIMIObject 的this写在花括号外
    /*
    RIMIWorker.prototype = RIMIObject.prototype;
    RIMIWorker.prototype.constructor = RIMIWorker;
    */
    var worker = new RIMIWorker("程程","明星");
    console.log(worker.company);//睿峰
    worker.show();//程程  明星


})();
(function(){
var r = /abc/igm;
console.log(r.ignoreCase );
   var reg=/123/g;
   var str = '123123123123';
   console.log(reg.test(str));
   console.log(reg.lastIndex);
    console.log(reg.exec(str));
    console.log(reg.lastIndex);

    var r = /a(b+)/;
    var arr = r.exec('_abbba_ab_');
    console.log(arr);
    var m = 'abc'.match(/b(?=c)/);
    console.log(m);
    
})();
function runFn() {
    var ac = 0
    console.log(ac);
    // 定义一个内部函数（次）
    function runConsole() {
        ac++
        console.log(ac);
    }
    runConsole();
    console.log(ac);

}
runFn();

var sum = 0, i = 0;
while(i<= 100){
    sum += i;
    i++;
}
console.log('sum is' + sum);

var sum = 0, i = 0;
do{
    sum +=i;
    i++
}while(i <= 100);
console.log('sum is' + sum);

var aP = document.getElementsByTagName('p');
for(var i =0; i<aP.length;i++){
    console.log(aP[i].innerHTML);
    console.log(aP[i].textContent)
}

var result;
var str = "HTML,CSS,JavaScript,jQuery";

result = str.split();
console.log(result); // ["HTML,CSS,JavaScript,jQuery"]

result = str.split(',');
console.log(result[1]); // ["HTML", "CSS", "JavaScript", "jQuery"]

var arr = ["152", "2888", "5771"];
result = arr.join();
console.log(result);

var str = "Hello, world!";
result = str.replace('H','h');
console.log(result);

var arr = [1,2,3,4];
result = arr.splice(2,1);
console.log(arr);

var arr = [3,4,5,6,6,1,2,3,3,4,5,6,7,8];

var sum = [];
for(var i =0;i<arr.length;i++){
    if(sum.indexOf(arr[i]) == -1){
    sum.push(arr[i]);
    }

}
console.log(sum);

var noReArr = new Set(arr);
     noReArr = Array.from(noReArr);
     console.log(noReArr);
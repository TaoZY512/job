

function Person(name){
    this.name = name;
}
Person.prototype.kind = "偶像";
Person.prototype.showName = function(){
    console.log(this.name);
}

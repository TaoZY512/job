function Sel(x){
    return document.querySelector(x);
}
function onloadData(){

    //本地存储
    var  data = JSON.parse(localStorage.getItem('userInfo')),
        textHtml ='';
    if(data){
        for(var i=0;i<data.length;i++){
            textHtml +=
                '<tr><td>' + (i+1) +
                '</td><td>' + data[i].number+
                '</td><td>' + data[i].name +
                '</td><td>' + data[i].kind +
                '</td><td>' + data[i].repertory +
                '</td><td>' + data[i].price +
                '</td><td>' + data[i].describe +
                '</td><td>' + data[i].myDate +
                '</td><td class="all"><button class="redact">编辑</button>&nbsp;<button class="del">删除</button></td></tr>'
        }
        tbody.innerHTML = textHtml;
    }
}



function add(goodsNumber, goodsName,goodsKind,goodsRepertory,goodsPrice,goodsDescribe,myDate){
    var shade = Sel('.shade'),
        formAdd = Sel('.formAdd');
     if(!goodsNumber || !goodsName || !goodsKind || !goodsRepertory || !goodsPrice || !goodsDescribe){
         alert("请完善信息");
         return;
     }

    var data = [],
        stroge = localStorage.getItem("userInfo");
    if(stroge){
        data = JSON.parse(stroge)
    }

    data.push({
        number:goodsNumber,
        name:goodsName,
        kind:goodsKind,
        repertory:goodsRepertory,
        price:goodsPrice,
        describe:goodsDescribe,
        myDate:myDate
    });
    var dataStr = JSON.stringify(data);
    localStorage.setItem("userInfo",dataStr);

    formAdd.style.display ="none";
    onloadData();
    shade.style.opacity ="1";
}





function del(){
    var del = document.querySelectorAll('.del');
   for(var i=0;i<del.length;i++){
       del[i].onclick = function(){
           this.parentElement.parentElement.remove();
           var  data = JSON.parse(localStorage.getItem('userInfo'));
           data.splice(i-1);
           var dataStr = JSON.stringify(data);
           localStorage.setItem("userInfo",dataStr);
       }
   }


};

function edit(){
        redact = document.querySelectorAll('.redact');
    for(var i=0;i<redact.length;i++){
        redact[i].onclick = function(){
            this.parentElement.parentElement.remove();
            var  data = JSON.parse(localStorage.getItem('userInfo'));
            data.splice(i-1);
            var dataStr = JSON.stringify(data);
            localStorage.setItem("userInfo",dataStr);
            formAdd.style.display ="block";
            shade.style.opacity =".2";
            goodsNumber.value = this.parentElement.parentElement.children[1].textContent;
            goodsName.value = this.parentElement.parentElement.children[2].textContent;
            goodsKind.value = this.parentElement.parentElement.children[3].textContent;
            goodsRepertory.value = this.parentElement.parentElement.children[4].textContent;
            goodsPrice.value = this.parentElement.parentElement.children[5].textContent;
            goodsDescribe.value = this.parentElement.parentElement.children[6].textContent;
            goodsSubmit.value = "确认修改";
            goodsSubmit.onclick = function(){

                var myDate = new Date();
                add(goodsNumber.value, goodsName.value,goodsKind.value,goodsRepertory.value,goodsPrice.value,goodsDescribe.value,myDate.toLocaleString());
            }
        }
    }
};
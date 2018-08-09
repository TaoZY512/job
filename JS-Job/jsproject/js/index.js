(function(){
    getBirth('511527199501052167',function(birth){
        console.log(birth);
    });
    var selText = document.querySelector("#selText"),
        resText = document.querySelector("#resText");
        selText.onmouseup = function(){
            var selObj = getSelection();
            resText.textContent = "您选择的内容是:" + selObj.toString();
        }
        getDevice();
        //传值
        var btn = document.querySelector('#btn');
        btn.onclick = function(){
            location.href = "./details.html?bookid=123&status=202";
        }
})();
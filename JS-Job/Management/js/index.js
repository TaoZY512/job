
var shade = Sel('.shade'),
    btn   = Sel('#btn'),
    table  = Sel('.taBle'),
    formAdd = Sel('.formAdd'),
    goodsNumber      = Sel('.goods-number'),
    goodsName        = Sel('.goods-name'),
    goodsKind        = Sel('.goods-kind'),
    goodsRepertory   = Sel('.goods-repertory'),
    goodsPrice       = Sel('.goods-price'),
    goodsDescribe    = Sel('.goods-describe'),
    goodsSubmit = Sel('.submit'),
    tbody       = Sel('.tbody');



(function(){
    onloadData();


    btn.onclick = function(){
        formAdd.style.display ="block";
        shade.style.opacity =".2";

    };

    var close = Sel('#close');
    close.onclick = function(){
        formAdd.style.display ="none";
        shade.style.opacity ="1";
    };
    goodsSubmit.onclick = function(){
        //定义时间
        var myDate = new Date();
        add(goodsNumber.value, goodsName.value,goodsKind.value,goodsRepertory.value,goodsPrice.value,goodsDescribe.value,myDate.toLocaleString());

    };

    del();
    edit();
})();
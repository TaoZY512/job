$(function(){
    //1.获取数据
    $.ajax({
        url:"../json/index.json",
        type:"GET",
        dataType:"json",
        success:(response) => {
             // 2. 加载数据
             loadingHtml("ostranger", response);
             loadingHtml("okinsfolk", response);
             loadingHtml("oschoolmate", response);
        }
    });

    //3.事件处理
    $(".group").on("click",(e)=>{
        $(e.currentTarget).siblings().slideToggle()
    
    })
    //添加分组
    $(".add").on("click",(e) =>{
        var textHtml = "";
        textHtml +=`
        <li class="item"> 
          <input type="text" class="input" placeholder="请输入分组名">
        </li>
        `
        let addChild = $(".item").last();
       addChild.after(textHtml);
       $(".input").on("blur",(e)=>{
        let $target = $(e.target);
        // console.log($target.val());
        let result ="";
        result += `
        <li class="item">
                <p class="group">${$target.val()}</p>
                <ul class="ostranger"></ul>
            </li>`
            let addChild = $(".item").last();
            addChild.after(result);
            $(".input").remove();
    })
    
    })
    
})
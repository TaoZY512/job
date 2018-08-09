$(function(){
   $(".get").click("天气",(e)=>{
       //事件参数绑定在事件对象上
       // e.data
      let $target = $(e.currentTarget);
      let msg ="";
      switch(e.data){
          case "天气":{
              msg = "天气晴朗"
          }break;
          case "心情":{
              msg = "非常美丽"
          }break;
      }
      $target.after(`<p>${msg}</p>`)
   }).hover((e) => {
    $(e.currentTarget).css({
        background: "green"
    });
},(e) => {
    $(e.currentTarget).css({
        background: "pink"
    });
    //trigger手动调用事件函数
}).trigger("click");

// $("hello").one("click",function(){
//     $(this).text("Hello,rimi!")
// });

$(".hello").on({
    click:function(){
        $(this).off();
    },
    mouseenter:function(){
        console.log("鼠标进入")
    }
});
 

$(".title").on("click",(e)=>{
    $(".des").slideToggle("slow","linear",()=>{
        console.log("动画执行完毕");
    });
    //添加动画效果
$(e.target).animate({
    marginLeft:"+=50px"
},{
    duration:1000,
    easing:"linear",
    complete:()=>{
        console.log("动画执行完成！")
    }
})
})

$(".box").one("click",function(){
    $(this).animate({width:"300px"},"slow","linear")
           .animate({height:"300px"},"slow","linear")
           .animate({marginLeft:"500px"},"slow","linear")
           .queue(function(next){
               $(this).css({
                   background:"orange"
               });
               next(); 
           }).slideUp("slow");
})
$('div').on('click', 'p', function(e) {
	e.target.textContent = 'Hello, world!';
});
});
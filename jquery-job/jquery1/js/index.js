$(function(){
  let $text = $("#text");
  console.log($text[0]);

  let oText = document.getElementById("text");
  console.log($(oText));
  //避免冲突
//   let jq = $.noConflict();
//   jq(oText).text("Hello,jQuery!");
//1.文本
$text.text("Hello,jQuery！");
console.log($text.text());

$(".wrap").html(
    `<h1>jQuery</h1>
    <p>jQuery 是轻量级的Javascript库。</p>`
)
//()是参数，{}的函数
$(".sure").on("click",()=>{
  console.log($(".username").val());
});
$(".clear").on("click",()=>{
    console.log($(".username").val(""));
  });
//内容
  $(".wrap").attr({
      "id":"test-box",
      "title":"哈哈"
  })

  $(".wrap").removeAttr("id");
  console.log($(".wrap").attr("title"));
//状态属性
let $checkbox = $("[type='checkbox']");
$("button:contains('选中')").data("msg","今天天气好像很不错")
$("button:contains('选中')").on("click",(e)=>{
   $checkbox.prop("checked",true);
   $checkbox.prop("indeterminate",false);
   alert($(e.target).data("msg"));
});
$("button:contains('未选中')").on("click",()=>{
    $checkbox.prop("checked",false);
    $checkbox.prop("indeterminate",false);
})
$("button:contains('半选中')").on("click",()=>{
    $checkbox.prop("indeterminate",true);
})
 
//添加
$(".wrap").addClass("test box");
//移除
$(".wrap").removeClass("box");
//设置样式
$(".menu-list li").css({
    "color":"red"
})
});
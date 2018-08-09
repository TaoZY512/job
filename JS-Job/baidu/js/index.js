(function(){
var addStyleLink = function(href){

        var head = document.getElementsByTagName('head')[0];
        var styleLink = document.createElement('link');
        styleLink.setAttribute('rel','stylesheet');
        styleLink.setAttribute('href',href);
        head.appendChild(styleLink);

    };
// 苹果手机采用CSS1
if(/iphone/i.test(navigator.userAgent))
    addStyleLink('./css/iphone.css');
// 安卓手机采用CSS2
if(/android/i.test(navigator.userAgent))
    addStyleLink('./css/index.css');

    var stus = [
        {stuNum: 1101, name: '张三', score: 95},
        {stuNum: 1102, name: '李四', score: 50},
        {stuNum: 1103, name: '王五', score: 65},
        {stuNum: 1104, name: '赵二', score: 70}
    ];

    stus.sort(function(x, y){
        return x.score > y.score ? 1:-1;
    });
    console.log(stus)
    Array.prototype.removeDuplicate = function () {
        var json = {};
        var arr  = [];
        for(var i = 0, len = this.length; i < len; i++) {
            if(!json[this[i]]) {
                json[this[i]] = true;
                arr.push(this[i]);
            }
        }
        return arr;
    }
    var result = [1, 2, 3, 3, 4, 5].removeDuplicate();
    console.log(result); // [1, 2, 3, 4, 5]
})();


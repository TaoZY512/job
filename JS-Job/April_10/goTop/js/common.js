function windowScroll(rel,time,everyRime){
   var mousePlace = 0;
   window.onscroll = function(){
       mousePlace = document.body.scrollTop || document.documentElement.scrollTop;
   };
    rel.onclick = function(){
        var frames = time / everyRime,
            speech = Math.ceil(mousePlace / frames);
        var t = setInterval(function(){
            if(mousePlace > 0){
                document.body.scrollTop = document.documentElement.scrollTop = mousePlace - speech;
            }else{
                clearInterval(t);
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },everyRime)
    };
};
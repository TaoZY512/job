(function(){
    var downTime = new Date("10 1,2018");
    var select = document.querySelectorAll(".time-item");

    var day = 0,
        hours = 0,
        minutes = 0,
        seconds = 0;
    var interval;
    interval = setInterval(function(){
        var days = downTime - new Date();
        if (days == 0) {
            return;
            clearInterval(interval);
            interval = null;
        }
        console.log(days);
        day = Math.floor(days/1000/60/60/24);
        hours = Math.floor(days/1000/60/60%24);
        minutes = Math.floor(days/1000/60%60);
        seconds = Math.floor(days/1000%60);

        var times = [day,hours,minutes,seconds];
        for(var i = 0; i<select.length; i++){
            select[i].textContent = times[i];
        }

    }, 1000);
})()




setTimeout(function(){
    var show = document.getElementById('show'),
        showDoc = show.contentDocument,
        get = document.getElementById('get'),
        getDoc = get.contentDocument,
        mainDiv= document.getElementById('mainDiv');
        mainDiv.innerHTML = `
        <p>${showDoc.getElementById('aa').value}</p>
        `;

       getDoc.getElementById('activate').onclick = function(){
           getDoc.getElementById('a').innerText = showDoc.getElementById('aa').value;
           getDoc.getElementById('b').textContent = showDoc.getElementById('bb').value;
           getDoc.getElementById('c').textContent = showDoc.getElementById('cc').value;
       }

},1000);
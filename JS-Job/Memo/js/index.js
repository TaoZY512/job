(function(){
var compile = document.getElementById('compile'),
    header = document.querySelector('.header'),
    top = document.querySelector('.top'),
    saveMemoire = document.getElementById('saveMemoire'),
    memoireContent = document.getElementById('memoireContent').textContent;
 compile.onclick =function(){
   this.parentElement.parentElement.style.display='none';
   this.parentElement.parentElement.nextElementSibling.style.display='block';
};
    saveMemoire.onclick = function(){
        var memoCon = JSON.stringify(memoireContent)
        console.log(memoCon);
        localStorage.setItem(memoCon)
    };

})();

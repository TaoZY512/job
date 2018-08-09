var start = document.getElementById('start');
start.onclick = function(){
    this.nextElementSibling.textContent='启动中...'
    this.parentElement.parentElement.nextElementSibling.children[0].style.color='red';
}
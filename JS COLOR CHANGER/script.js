var box = document.getElementById('box');
box.addEventListener('mousemove',runEvent);

function runEvent(e){

    box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}
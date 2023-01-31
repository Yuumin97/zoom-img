let zoom = document.querySelector('.zoom')
let img = document.getElementById('img');
zoom.addEventListener('mousemove',(e)=>{
    img.style.opacity = 1;
    let positionPx = e.x -zoom.getBoundingClientRect().left;
    let positionX = (positionPx / zoom.offsetWidth) * 100;
    let positionPy = e.y - zoom.getBoundingClientRect().top;
    let positionY = (positionPy / zoom.offsetHeight) * 100;
    img.style.setProperty('--zoom-x',positionX+'%');
    img.style.setProperty('--zoom-y',positionY+'%');
})
zoom.addEventListener('mouseout',(e)=>{
    img.style.opacity = 0;
})

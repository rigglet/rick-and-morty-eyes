
document.addEventListener('mousemove', (e)=> {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const mainImageAnchor = document.getElementById("main-image");
    const rectangle = mainImageAnchor.getBoundingClientRect();
    
    const anchorX = rectangle.left + rectangle.width / 2;
    const anchorY = rectangle.top + rectangle.height / 2;
    
    const angle = getAngle(mouseX, mouseY, anchorX, anchorY)
    
    //console.log(angle);

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach((eye) => {
        eye.style.transform = `rotate(${angle}deg)`
    })
})

function getAngle(cx,cy,ex,ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}
document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)

const logBlock = document.querySelector('.log-block');

let x1 = null
let y1 = null

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY
    // console.log(Boolean((!x1 || !y1)))
    // console.log("touch", "x1:", x1, "y1:", y1, event)
}

function handleTouchMove(event) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX
    let y2 = event.touches[0].clientY
    let diffX = x2 - x1;
    let diffY = y2 - y1;
    console.log(x1)

    console.log('x1:', x1, 'x2:', x2, 'diffX:', diffX, 'y1:', y1, 'y2:', y2, 'diffY:', diffY)

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // right - left
        if (diffX > 0) (logBlock.textContent = "right")
        else (logBlock.textContent = "left")
    }
    else {
        // top - bottom
        if (diffY > 0) (logBlock.textContent = "bottom")
        else (logBlock.textContent = "top")
    }
    x1 = null
    y1 = null

}


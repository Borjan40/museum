let x1 = null
let y1 = null

function handleTouchStart(event) {
    const firstTouch = event.touches[0]
    x1 = firstTouch.clientX
    y1 = firstTouch.clientY

    // console.log("touch x1:", x1, "touch y1:", y1)
    console.log("touch", "x1:", x1, "y1:", y1, event)
}

function handleTouchMove(event) {
    // console.log(event)
    // const firstTouch = event.touches[0]
    // x1 = "ppp"
    // setTimeout(() => console.log(x1, "vvs"), 1000

    // if (!y1 || !x1) {
    //     return console.log("if")
    // }

    // else {
    //     return console.log("else")
    // }


    // console.log("move x1:", x1, "move y1:", y1)
    console.log("move", "X:", event.touches[0].clientX, "Y:", event.touches[0].clientY, event)

    // let move = event
    // return move

    let arrKey = [];
    let arrVal = [];

    for (let key in event) {
        arrKey.push(key)
        arrVal.push(event[key])
    }

    console.log(arrVal)
    let box = document.querySelector(".log-block")
    // console.log(testDEtr)

    const objString = Object.assign({}, ...arrKey.map((n, i) => ({ [n]: arrVal[i].toString() })))
    console.log("objString", objString)

    const obj = Object.assign({}, ...arrKey.map((n, i) => ({ [n]: arrVal[i] })))
    console.log("obj", obj)



    // const [...info] = obj
    // console.log(info)
    // box.innerHTML = info
}


const logBlock = document.querySelector('.log-block')

document.addEventListener('touchstart', handleTouchStart, false)
document.addEventListener('touchmove', handleTouchMove, false)


// function handleTouchMove(event)
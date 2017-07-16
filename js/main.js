
const WIDTH = 800
const HEIGHT = 600

var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')

// 0 - up
// 1 - down
// 2 - left
// 3 - right
var pressed = [false, false, false, false]

// the inital function
function init() {
    clear()

    ctx.font="55px Source Code Pro"
    ctx.fillStyle = '#fff'

    ctx.textAlign = 'center'
    ctx.fillText('Key-Step', WIDTH / 2, HEIGHT / 2 - 50)

    ctx.font="25px Source Code Pro"
    ctx.fillText('by: PryDt', WIDTH / 2, HEIGHT / 2 + 10)

    ctx.font="30px Source Code Pro"
    ctx.fillText('<Click Anywhere to Start Game>', WIDTH / 2, HEIGHT / 2 + 100)

    window.onclick = function(e) {
        setInterval(loop, 10)
    }
}

// the basic game loop
function loop() {
    clear()
    update()
    draw()
}

// clears canvas to black
function clear() {
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, 1024, 768)
}

// updates game logic
function update() {
}

// key event handling
document.body.addEventListener('keyup', function(e) {
    toggle(e, false)
})
document.body.addEventListener('keydown', function(e) {
    toggle(e, true)
})

// sets keys in pressed array
function toggle(e, bool) {
    switch(e.key) {
    case 'W':
    case 'w':
    case 'ArrowUp':
        pressed[0] = bool
        e.preventDefault()
        break
    case 'S':
    case 's':
    case 'ArrowDown':
        pressed[1] = bool
        e.preventDefault()
        break
    case 'A':
    case 'a':
    case 'ArrowLeft':
        pressed[2] = bool
        e.preventDefault()
        break
    case 'D':
    case 'd':
    case 'ArrowRight':
        pressed[3] = bool
        e.preventDefault()
        break
    }
}

// draws all graphics to the screen
function draw() {
    drawArrows()
}

function drawArrows() {
    ctx.font = '55px Source Code Pro'
    ctx.fillStyle = '#fff'
    ctx.fillText('←', WIDTH / 4 - 100, 40)
    ctx.fillText('↓', WIDTH / 4 * 2 - 100, 40)
    ctx.fillText('↑', WIDTH / 4 * 3 - 100, 40)
    ctx.fillText('→', WIDTH - 100, 40)
}


const WIDTH = 800
const HEIGHT = 600

const arrows = ['←', '↓', '↑', '→']

var canvas = document.getElementById('game')
var ctx = canvas.getContext('2d')

// 0 - left
// 1 - down
// 2 - up
// 3 - right
var pressed = [false, false, false, false]

var notes = new NoteList()

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

function NoteList() {
    this.stack = []
}

NoteList.prototype.addNote = function() {
    var note = new Note(Math.floor(Math.random() * 4))
    this.stack.push(note)
}

NoteList.prototype.update = function() {
    for(var i = 0; i < this.stack.length; i++) {
        if(!(this.stack[i].y < 0)) {
            this.stack[i].update(pressed)
        }
    }
}

NoteList.prototype.draw = function() {
    for(var i = 0; i < this.stack.length; i++) {
        if(!(this.stack[i].y < 0)) {
            this.stack[i].draw()
        }
    }
}

// note object
function Note(type) {
    this.type = type
    this.hit = false
    this.y = 600
}

Note.prototype.check = function() {
    return (this.y < 130) && (this.y > 0)
}

Note.prototype.draw = function() {
    if(!this.hit) {
        ctx.font = '85px Source Code Pro'
        ctx.fillStyle = '#fff'
        ctx.fillText(arrows[this.type], WIDTH / 4 * (this.type + 1) - 100, this.y)
    }
}

Note.prototype.update = function(pressed) {
    this.y -= 2

    if(pressed[this.type] && this.check()) {
        this.hit = true
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
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
}

// updates game logic
var t = 0
function update() {
    t += 1
    if(t % 80 == 0) {
        t = 0
        notes.addNote()
    }

    notes.update()
}

// key event handling
document.body.addEventListener('keyup', function(e) {
    toggle(e, false)
})
document.body.addEventListener('keydown', function(e) {
    toggle(e, true)
})

// for debugging
document.body.addEventListener('click', function(e) {
    console.log('x: ' + e.clientX + ' y: ' + e.clientY)
})

// sets keys in pressed array
function toggle(e, bool) {
    switch(e.key) {
    case 'W':
    case 'w':
    case 'ArrowUp':
        pressed[2] = bool
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
        pressed[0] = bool
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
    drawLine()
    notes.draw()
}

const HIT_COLOR = '#f00'
function drawArrows() {
    ctx.font = '85px Source Code Pro'
    ctx.fillStyle = '#fff'

    if(pressed[0]) ctx.fillStyle = HIT_COLOR
    ctx.fillText(arrows[0], WIDTH / 4 - 100, 70)

    if(pressed[1]) ctx.fillStyle = HIT_COLOR
    else ctx.fillStyle = '#fff'
    ctx.fillText(arrows[1], WIDTH / 4 * 2 - 100, 70)

    if(pressed[2]) ctx.fillStyle = HIT_COLOR
    else ctx.fillStyle = '#fff'
    ctx.fillText(arrows[2], WIDTH / 4 * 3 - 100, 70)

    if(pressed[3]) ctx.fillStyle = HIT_COLOR
    else ctx.fillStyle = '#fff'
    ctx.fillText(arrows[3], WIDTH - 100, 70)
}

function drawLine() {
    ctx.fillStyle = '#add8e6' // light blue
    ctx.fillRect(0, 100, WIDTH, 1)
    ctx.fillRect(0, 0, WIDTH, 1)
}

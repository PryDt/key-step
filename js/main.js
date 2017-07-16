
const WIDTH = 800
const HEIGHT = 600

function init() {

    var canvas = document.getElementById('game')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fillRect(0, 0, 1024, 768)

    ctx.font="55px Source Code Pro"
    ctx.fillStyle = '#fff'

    ctx.textAlign = 'center'
    ctx.fillText('Key-Step', WIDTH / 2, HEIGHT / 2 - 50)

    ctx.font="35px Source Code Pro"
    ctx.fillText('by: PryDt', WIDTH / 2, HEIGHT / 2 + 10)
}

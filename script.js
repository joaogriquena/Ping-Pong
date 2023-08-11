const canvasEl = document.querySelector('canvas'),
    canvasCtx = canvasEl.getContext('2d')
gapX = 10



const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        // desenhando o corpo
        canvasCtx.fillStyle = "#286047"
        canvasCtx.fillRect(0, 0, this.w, this.h)
    }
}

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        canvasCtx.fillStyle = "#fff"
        // desenhando a linha central
        canvasCtx.fillRect(field.w / 2 - this.w / 2, 0, this.w, this.h)
    },
}

const leftPaddle = {
    x: gapX,
    y: 0,
    w: line.w,
    h: 200,
    // desenhando a raquete esquerda
    draw: function () {
        canvasCtx.fillStyle = "#fff"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const rightPaddle = {
    x: field.w - line.w - gapX,
    y: 100,
    w: line.w,
    h: 200,
    // desenhando a raquete Direita
    draw: function () {
        canvasCtx.fillStyle = "#fff"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    }
}

const score = {
    human: 1,
    computer: 2,
    draw: function () {
        // desenhando o placar
        canvasCtx.font = 'bold 72px Arial'
        canvasCtx.textAlign = 'center'
        canvasCtx.textBaseline = 'top'
        canvasCtx.fillStyle = '#01341D'
        canvasCtx.fillText(this.human, field.w / 4, 50)
        canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50)
    }
}

const ball = {
    x: 300,
    y: 200,
    r: 20,
    speed: 10,
    _move: function () {
        this.x += 1 * this.speed
        this.y += 1 * this.speed
    },
    draw: function () {
        // desenhando a bolinha
        canvasCtx.fillStyle = "#fff"
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        canvasCtx.fill()

        this._move()
    }
}

function setup() {
    canvasEl.width = canvasCtx.width = field.w
    canvasEl.height = canvasCtx.height = field.h
}

function draw() {
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    score.draw()
    ball.draw()
}

window.animateFrame = (function () {
    return (
        window.requestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        }
    )
})()

function main() {
    animateFrame(main)
    draw()
}

setup()
main()
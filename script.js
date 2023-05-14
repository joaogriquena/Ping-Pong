const canvasEl = document.querySelector('canvas'),
    canvasCtx = canvasEl.getContext('2d')

const lineWidth = 15

function setup() {
    canvasEl.width = canvasCtx.width = window.innerWidth
    canvasEl.height = canvasCtx.height = window.innerHeight
}

function draw() {
    // desenhando o corpo
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    canvasCtx.fillStyle = "#fff"

    // desenhando a linha central
    canvasCtx.fillRect(
        window.innerWidth / 2 - lineWidth / 2, 0, lineWidth, window.innerHeight
    )

    // desenhando a raquete esquerda
    canvasCtx.fillRect(10, 100, lineWidth, 200)

    // desenhando a raquete esquerda
    canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 200, lineWidth, 200)

    // desenhando a bolinha
    canvasCtx.beginPath()
    canvasCtx.arc(300, 300, 20, 0, 2 * Math.PI, false)
    canvasCtx.fill()
}

setup()
draw()
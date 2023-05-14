const canvasEl = document.querySelector('canvas'),
    canvasCtx = canvasEl.getContext('2d')

const lineWidth = 15

function setup() {
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight

    canvasCtx.width = canvasEl.width
    canvasCtx.height = canvasEl.height
}

function draw() {
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    canvasCtx.fillStyle = "#fff"

    const x = window.innerWidth / 2 - lineWidth / 2
    const y = 0
    const w = lineWidth
    const h = window.innerHeight

    canvasCtx.fillRect(x, y, w, h)
}

setup()
draw()
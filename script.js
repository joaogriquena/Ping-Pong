const canvasEl = document.querySelector('canvas'),
    canvasCtx = canvasEl.getContext('2d')

function setup() {
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight

    canvasCtx.width = canvasEl.width
    canvasCtx.height = canvasEl.height
}

function draw() {
    canvasCtx.fillStyle = "#286047"
    canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)
}



setup()
draw()
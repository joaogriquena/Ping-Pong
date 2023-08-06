const canvasEl = document.querySelector('canvas'),
    canvasCtx = canvasEl.getContext('2d')

const lineWidth = 15

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

function setup() {
    canvasEl.width = canvasCtx.width = field.w
    canvasEl.height = canvasCtx.height = field.h
}

function draw() {
    field.draw()
    line.draw()

    // desenhando a raquete esquerda
    canvasCtx.fillRect(10, 100, lineWidth, 200)

    // desenhando a raquete esquerda
    canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 200, lineWidth, 200)

    // desenhando a bolinha
    canvasCtx.beginPath()
    canvasCtx.arc(300, 300, 20, 0, 2 * Math.PI, false)
    canvasCtx.fill()

    // desenhando o placar
    canvasCtx.font = 'bold 72px Arial'
    canvasCtx.textAlign = 'center'
    canvasCtx.textBaseline = 'top'
    canvasCtx.fillStyle = '#01341D'
    canvasCtx.fillText('3', window.innerWidth / 4, 50)
    canvasCtx.fillText('1', window.innerWidth / 4 + window.innerWidth / 2, 50)

}

setup()
draw()
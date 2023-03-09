let ring = neopixel.create(DigitalPin.P2, 31, NeoPixelMode.RGB)
basic.showIcon(IconNames.Fabulous)
basic.forever(function () {
    for (let index = 0; index <= 23; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        ring.show()
        basic.pause(50)
        ring.setPixelColor(index, neopixel.rgb(16, 16, 16))
        ring.show()
    }
})

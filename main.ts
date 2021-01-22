basic.forever(function () {
    for (let index = 0; index <= 2; index++) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P5, 0)
        basic.pause(200)
    }
    basic.pause(1000)
    for (let index = 0; index <= 2; index++) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P5, 0)
        basic.pause(2000)
    }
    basic.pause(1000)
    for (let index = 0; index <= 2; index++) {
        pins.digitalWritePin(DigitalPin.P5, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P5, 0)
        basic.pause(200)
    }
    basic.pause(1000)
})

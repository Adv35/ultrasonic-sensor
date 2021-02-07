serial.writeValue("x", 0)
basic.forever(function () {
    basic.showNumber(maqueen.Ultrasonic(PingUnit.Centimeters))
    basic.pause(1000)
})

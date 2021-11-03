let tenperatura_neurtu = 0
basic.forever(function () {
    tenperatura_neurtu = input.temperature()
    basic.showString("" + (tenperatura_neurtu - 2))
})

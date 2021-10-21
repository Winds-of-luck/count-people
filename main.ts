let noOFpeople = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.lightLevel() > 128) {
        noOFpeople = 1
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showNumber(noOFpeople)
    }
    if (input.lightLevel() < 128) {
        noOFpeople = 0
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showNumber(noOFpeople)
    }
})

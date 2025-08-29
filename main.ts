input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let empty0btaclesY = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if ("" != "") {
    	
    }
}
basic.forever(function () {
    let obstacles: game.LedSprite[] = []
    for (let obtacle of obstacles) {
        obtacle.change(LedSpriteProperty.X, -1)
    }
    basic.pause(1000)
})

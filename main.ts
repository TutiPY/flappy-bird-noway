input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstaclesY = 0
let ticks = 0
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let obstacles: game.LedSprite[] = []
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obtacle of obstacles) {
        obtacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstaclesY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstaclesY) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    ticks += 1
    basic.pause(1000)
    for (let obtacle of obstacles) {
        if (true) {
        	
        }
    }
})

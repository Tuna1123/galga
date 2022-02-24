controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 8 . . . . . . . . . . . . . . 
        . . . 8 . 8 2 . . . . . . . . . 
        . . 8 . 2 2 4 4 4 4 4 . . . . . 
        . . . 8 . 8 2 . . . . . . . . . 
        . 8 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 100, 0)
    music.beamUp.play()
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    music.bigCrash.play()
    spacePlane.startEffect(effects.fire)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 2 . . . . . . . 2 2 2 . . . . 
    . 2 2 2 . . . . . 2 4 2 . . . . 
    . 2 4 4 2 . . 2 2 2 2 2 2 . . . 
    . 2 4 4 2 2 2 4 4 4 4 9 9 2 . . 
    . 2 2 2 2 4 4 4 4 4 4 9 9 9 2 . 
    . . . . . 2 4 4 4 4 4 4 4 4 2 . 
    . . . . . . 4 4 2 2 2 2 2 2 . . 
    . . . . . . . . . 2 4 2 . . . . 
    . . . . . . . . . 2 4 2 . . . . 
    . . . . . . . . . 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 100, 100)
spacePlane.setStayInScreen(true)
info.setLife(4)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . 2 2 2 2 2 2 . 4 4 
        . . . . . 2 2 4 4 4 4 4 4 4 4 4 
        . . . . . 2 2 4 4 4 4 4 4 4 4 4 
        . . . . . . 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})

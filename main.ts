namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile72`, function (sprite, location) {
    mySprite = sprites.create(assets.image`Security Guard Looking at camera`, SpriteKind.Player)
})
function createEnemies2 () {
    for (let Foxy of tiles.getTilesByType(assets.tile`myTile99`)) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile45`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 130, 130)
    mySprite.startEffect(effects.trail, 99999)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile119`, function (sprite, location) {
    music.stopAllSounds()
    info.stopCountdown()
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddcccccdcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff444444444fffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffff44444444444ffffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffffff444444444fffffffffffffffffffffffffffffff
        fffffffffffffffffffffff4444444444444fffffffffffffffffffffffccccccccccccccccccddddddddcccccccccfffffffffffffffffffffffff44444444444ffffffffffffffffffffffffffffff
        ffffffffffffffffffffff444455544444444ffffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffffff4444444444444fffffffffffffffffffffffffffff
        fffffffffffffffffffff44455555555444444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccfffffffffffffffffffffff444444455544444ffffffffffffffffffffffffffff
        fffffffffffffffffffff44455555555544444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44444455555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44455555555555444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44444555555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44455555555555544fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44445555555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44455555555555544fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44455555555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44455555555555444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44555555555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44445555555555444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44555555555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44445555555554444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff45555555555554444fffffffffffffffffffffffffff
        fffffffffffffffffffff44444555555544444fffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44555555555544444fffffffffffffffffffffffffff
        ffffffffffffffffffffff4444455555544444dffffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffff44455555555544444fffffffffffffffffffffffffff
        fffffffffffffffffffffff4444455554444ddddfffffffffffffffffffccccccccccccccccccddddddddcccccccccfffffffffffffffffffffd4445555555444444ffffffffffffffffffffffffffff
        ffffffffffffffffffffffff44444555444ddddddffffffffffffffffffccccccccccccccccccddddddddcccccccccffffffffffffffffffffdddd4455555444444fffffffffffffffffffffffffffff
        fffffffffffffffffffffffff444444444ddddddddfffffffffffffccccccccccccccccccccccccccccccccccccccccccccfffffffffffffffddddd44555444444ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffddddddddffffffffffffcccccccccccccccccccccccccccccccccccccccddddcfffffffffffffdddddddd444444444fffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffddddddddfffffffffffccccccccccccccccccccccccccccccccccccccccdddcfffffffffffffdddddddfffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffddddddddffffffffffccccccccccccccccccccccccccccccccccccccccccccffffffffffffdddddddffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffdddddddfffffffffcccccccccccccccccccccccccccccccccccccccccccc4ffffffffffdddddddfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffdddddddff444444444444444444444444444444444444444444444444444444444fffdddddddffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffddddd444444444444444444444444444444444444444444444444444444444444444ddddddfffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffddd44444444444444444444444444444444444444444444444444444444444444444ddddffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffd4444444444444444444444444444444444444444444444444444444444444444444dffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff444444444444444444444444444444444444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff44444444444444444444444444444444444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff44444444444ffffff4444444444444444444444444444444444444ffffff44444444444fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff44444444ffffffffffff4444444444444444444444444444444ffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff44444444ffffffffffffffff4444444444444444444444444ffffffffffffffff44444444ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff444444ffffffffffffffffff4444444444444444444444444ffffffffffffffffff444444ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff4444fffffffffffffffffffff44444444444444444444444fffffffffffffffffffff4444ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff444fffffffffffffffffffffff444444444444444444444fffffffffffffffffffffff444ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff44fffffffffffffffffffffffff4444444444444444444fffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff44ffffffffffffffffffffffffff44444444444444444ffffffffffffffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff44fffffffffffffff4444444ffff44444444444444444ffff4444444fffffffffffffff44ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff44fffffffffff44444444444444444444444444444444444444444444444fffffffffff44ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff44fffffffff444444444444444444444444444444444444444444444444444fffffffff44ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff444fffff44444444444444444444444444444444444444444444444444444444444fffff444fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff4444ff444444444444444444444444444444444444444444444444444444444444444ff4444fffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff444444444444444fffffffffff4444444444444444444444444fffffffffff444444444444444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4444444444444fffffffffffffff444444444444444444444fffffffffffffff4444444444444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff444444444444fffffffffffffffff4444444444444444444fffffffffffffffff444444444444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff44444444444fffffffffffffffffff44444444444444444fffffffffffffffffff44444444444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff4444444444fffffffffffffffffffff444444444444444fffffffffffffffffffff4444444444ffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffff4444444444444fffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffff44444444444fffffffffffffffffffffffff444444444fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffff44444444444fffffffffffffffffffffffff444444444fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff44444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff44444444fffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444ffffffffffffff1ffffffffffff444444444ffffffffffff1ffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444fffffffffffffffffffffffffff444444444ffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff44444444444fffffffffffffffffffffffff44444444444fffffffffffffffffffffffff44444444444fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff444444444444fffffffffffffffffffffffff44444444444fffffffffffffffffffffffff444444444444ffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff44444444444444444fffffffffffffffffffffff4444444444444fffffffffffffffffffffff44444444444444444ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff4444444444444444444fffffffffffffffffffff444444444444444fffffffffffffffffffff4444444444444444444fffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff444444444444444444444fffffffffffffffffff44444444444444444fffffffffffffffffff444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444444444444fffffffffffffffff4444444444444444444fffffffffffffffff4444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff44444444444444444444444fffffffffffffff444444444444444444444fffffffffffffff44444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444444444444444fffffffffff4444444444444444444444444fffffffffff4444444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff444444444444444444444444444555555544444444444fffffff444444444445555555444444444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444444444444445555555555555444444fffffffffff4444445555555555555444444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444444444444455555555555555555555fffffffffff5555555555555555555544444444444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444444455555555555555555555555555fffffffffff5555555555555555555555555544444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff444444444444444555555555555555555555555555555fffffff555555555555555555555555555555444444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444455555555555555555555555555555555554555555555555555555555555555555555544444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444444555555555555555555555555555555555554555555555555555555555555555555555554444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444445555555555555555555555555555555555554555555555555555555555555555555555555444444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444455555555555555555555555555555555555554555555555555555555555555555555555555544444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff44444444444555ff55555ff555555555555555555555555545555555555555555555555555ff55555ff55544444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff44444444444555ff55555ff555555555555555555555555545555555555555555555555555ff55555ff55544444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff4444444444455555555555555555555555555555555555554555555555555555555555555555555555555544444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff44444444445555555ff55555555555555555555555555555455555555555555555555555555555ff55555554444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffff44444444445555555ff55555555555555555555555555555455555555555555555555555555555ff55555554444444444ffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff444444445555555555555555555555555555555555555545555555555555555555555555555555555555544444444ffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff4444444555555555555555555555555555555555555554555555555555555555555555555555555555554444444fffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff44444445555555555555555555555555555555555555455555555555555555555555555555555555554444444ffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff4444455555555555555555555555555555555555554555555555555555555555555555555555555544444ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff44444555555555555555555555555555555555555455555555555555555555555555555555555544444fffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555554555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff555555555555ffffffff5555555555555fff5555555555555ffffffff555555555555ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff4555555555fffffffffffffffffffffffffffffffffffffffffffffffff5555555554ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffffffffffffffffffffff4444444ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level24`)
    music.setVolume(255)
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 5000, 255, 255, 9999, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(myEnemy)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile143`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 3746, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSong(assets.song`Vent theme`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile152`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
})
info.onScore(60, function () {
    music.stopAllSounds()
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    music.play(music.createSong(assets.song`Vent theme Night`), music.PlaybackMode.UntilDone)
    game.splash("CREDITS: Thanks for Playing! You can Play Mario the Last Castle if You want! It's not Finished but Oh well... FNAF Darkened Times 2 SOON... Game by Mako Hopkins. Characters By Scott Cawthon.")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile147`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 3746, 2756, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSong(assets.song`FNAF DARKEN TIMES NIGHT INSIDE`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile117`, function (sprite, location) {
    game.showLongText("BAHBAHBRRR!!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile112`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
info.onCountdownEnd(function () {
    info.changeScoreBy(10)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    mySprite = sprites.create(assets.image`Security Guard Looking at camera`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level26`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`FNAF Darkened Times Theme Outside`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    scene.cameraFollowSprite(mySprite)
})
function createEnemies () {
    for (let value of tiles.getTilesByType(assets.tile`myTile55`)) {
    	
    }
}
function holder () {
    myEnemy = sprites.create(img`
        .................
        ...22...2...22...
        ...232.222.232...
        ....2b22222b2....
        .....ccc2ff2.....
        ....22cc2ff22....
        .....223f322.....
        ...22223332222...
        ......21f12......
        ....2b32223b2....
        ....2.33ff3.2....
        ....2.2ff32.2....
        ...cc.22222.22...
        ...cc.eeeee.22...
        ...d..ee.ee..2...
        ...dd.ee.ee......
        .......b.b.......
        ......bb.bb......
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 100)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile111`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile43`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSong(assets.song`FNAF DARKENED TIMES THEME Inside`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level6`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile107`, function (sprite, location) {
    game.showLongText("DON'T TOUCH ME WATER! AND GET OUT OF THE WAY MATE! And Also,Leave the demon to his demons. Rest your own soul. There is nothing else... DO YOUR JOB!", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile151`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 3746, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSong(assets.song`Vent theme Night`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile148`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 3746, 2756, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSong(assets.song`FNAF DARKENED TIMES THEME Inside`), music.PlaybackMode.LoopingInBackground)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level2`)
    music.play(music.createSong(assets.song`FNAF Darkened Times Theme Outside`), music.PlaybackMode.LoopingInBackground)
    info.setLife(1)
    mySprite = sprites.create(assets.image`Security Guard Looking at camera`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile105`, function (sprite, location) {
    game.showLongText("Hey! WASSAP MAN!! There's Some Really Freaky Stuff MAN!!", DialogLayout.Bottom)
})
info.onLifeZero(function () {
    music.play(music.createSong(assets.song`GAME OVER Sound`), music.PlaybackMode.UntilDone)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
    effects.clearParticles(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile109`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile78`, function (sprite, location) {
    music.stopAllSounds()
    music.play(music.createSoundEffect(WaveShape.Noise, 3746, 2756, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    music.play(music.createSong(assets.song`Vent theme Night`), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile96`, function (sprite, location) {
    music.stopAllSounds()
    info.startCountdown(240)
    music.play(music.createSong(assets.song`FNAF DARKEN TIMES NIGHT INSIDE`), music.PlaybackMode.LoopingInBackground)
    tiles.setCurrentTilemap(tilemap`level30`)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    myEnemy = sprites.create(assets.image`freddy standing still`, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
    myEnemy.setBounceOnWall(true)
    myEnemy = sprites.create(img`
        . . . . . . 5 . . 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 f 5 5 f 5 5 . . . . 
        . . . . 5 5 f 5 5 f 5 5 . . . . 
        . . . . 5 5 4 4 4 4 5 5 . . . . 
        . . . . 5 5 f 1 f 1 5 5 . . . . 
        . . . . . 5 5 4 4 5 5 . . . . . 
        . . . . 5 b 1 1 1 1 b 5 . . . . 
        . . . . 5 . 1 1 1 1 . 5 . . . . 
        . . . . 5 . 5 1 1 5 . 5 . . . . 
        . . . . 5 . 5 5 5 5 . 5 . . . . 
        . . . . 5 . 5 . . 5 . 5 . . . . 
        . . . . . . b . . b . . . . . . 
        . . . . . . 4 . . 4 . . . . . . 
        . . . . d 4 d . . d 4 d . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
    myEnemy.setBounceOnWall(true)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . a a . a a . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . a a a a a . . . . . . 
        . . . . a f f a f f a . . . . . 
        . . . . a f f a f f a . . . . . 
        . . . . d d d c d d d . . . . . 
        . . . . . d d d d d . . . . . . 
        . . . . a b 2 2 2 b a . . . . . 
        . . . . a . 2 d 2 . a . . . . . 
        . . . . a . a d a . a . . . . . 
        . . . . a . a a a . a . . . . . 
        . . . . . . a . a . . . . . . . 
        . . . . . . b . b . . . . . . . 
        . . . . . a a . a a . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 60)
    myEnemy.setBounceOnWall(true)
    myEnemy = sprites.create(img`
        .................
        ...22...2...22...
        ...232.222.232...
        ....2b22222b2....
        .....ccc2ff2.....
        ....22cc2ff22....
        .....223f322.....
        ...22223332222...
        ......21f12......
        ....2b32223b2....
        ....2.33ff3.2....
        ....2.2ff32.2....
        ...cc.22222.22...
        ...cc.eeeee.22...
        ...d..ee.ee..2...
        ...dd.ee.ee......
        .......b.b.......
        ......bb.bb......
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 100)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.skillmap.islandTile7, function (sprite, location) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 120)
    music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.LoopingInBackground)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile110`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    game.splash("This Thing looks Old... I Remember Him... From my Childhood... Hope it doesn't wake up Like the others...")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile48`, function (sprite, location) {
    game.showLongText("WOW! THIS IS WHAT YE GET!!", DialogLayout.Center)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . e e e e e e e e . . . . . 
        . . . 2 2 2 2 2 2 2 2 . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . 2 2 2 2 2 2 . . . . . . 
        . . e e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . . . . e e e . . e . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    music.play(music.createSong(assets.song`Death scream`), music.PlaybackMode.UntilDone)
    mySprite.startEffect(effects.spray, 500)
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
music.play(music.createSong(assets.song`FNAFDT MENU THEME`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundImage(assets.image`Menu`)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f b b b b b b b b b b b f b f 
    f b b b b b b b b b b b f b f 
    f f b b b b b b b b b f b b f 
    f b f b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b f 
    f b b f f b b b b b b b b b f 
    f b b b f b b b b b b b b f f 
    f b b f b b b b b b b b b b f 
    f f f f f f f f f f f f f f f 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c c c c 
    . c . . . c . c . c c . c . c . 
    . c c c . c . c c c c c . . c . 
    . . . c . c . c . c c . c . c . 
    . c c c . c . c . c c . c . c . 
    . . . . . . . . . . . . . . . . 
    . c c c c c c c c c c c c c c . 
    . . . . . . . . . . . . . . . . 
    `)

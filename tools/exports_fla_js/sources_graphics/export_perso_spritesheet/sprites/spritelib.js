//EaselJS Spritesheet
if (!window.spriteLib) { window.spriteLib = {}; }
(function(scope) {
var spritesheetPath='sprites/Sprites.png';

// BasicFighter
var BasicFighter = function() {this.initialize();}
BasicFighter._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], 
frames:[
	[0, 0, 64, 64, 0, 0, 0],
	[64, 0, 64, 64, 0, 0, 0],
	[128, 0, 64, 64, 0, 0, 0],
	[192, 0, 64, 64, 0, 0, 0],
	[256, 0, 64, 64, 0, 0, 0],
	[0, 64, 64, 64, 0, 0, 0],
	[64, 64, 64, 64, 0, 0, 0],
	[128, 64, 64, 64, 0, 0, 0],
	[192, 64, 64, 64, 0, 0, 0],
	[256, 64, 64, 64, 0, 0, 0],],
animations: {
	stand:{ frames:[0, 0, 1, ], frequency:4, next:true},
	run:{ frames:[2, 3, ], frequency:4, next:true},
	attack:{ frames:[4, 5, ], frequency:4, next:true},
	hit:{ frames:[6, 7, ], frequency:4, next:true},
	dead:{ frames:[8, 9, ], frequency:4, next:true},}});
var BasicFighter_p = BasicFighter.prototype = new createjs.BitmapAnimation();
BasicFighter_p.BitmapAnimation_initialize = BasicFighter_p.initialize;
BasicFighter_p.initialize = function() {
	this.BitmapAnimation_initialize(BasicFighter._SpriteSheet);
	this.paused = false;
}
scope.BasicFighter = BasicFighter;

// EnemyFighter
var EnemyFighter = function() {this.initialize();}
EnemyFighter._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], 
frames:[
	[0, 128, 64, 64, 0, 0, 0],
	[64, 128, 64, 64, 0, 0, 0],
	[128, 128, 64, 64, 0, 0, 0],
	[192, 128, 64, 64, 0, 0, 0],
	[256, 128, 64, 64, 0, 0, 0],
	[0, 192, 64, 64, 0, 0, 0],
	[64, 192, 64, 64, 0, 0, 0],
	[128, 192, 64, 64, 0, 0, 0],
	[192, 192, 64, 64, 0, 0, 0],
	[256, 192, 64, 64, 0, 0, 0],],
animations: {
	stand:{ frames:[0, 0, 1, ], frequency:4, next:true},
	run:{ frames:[2, 3, ], frequency:4, next:true},
	attack:{ frames:[4, 5, ], frequency:4, next:true},
	hit:{ frames:[6, 7, ], frequency:4, next:true},
	dead:{ frames:[8, 9, ], frequency:4, next:true},}});
var EnemyFighter_p = EnemyFighter.prototype = new createjs.BitmapAnimation();
EnemyFighter_p.BitmapAnimation_initialize = EnemyFighter_p.initialize;
EnemyFighter_p.initialize = function() {
	this.BitmapAnimation_initialize(EnemyFighter._SpriteSheet);
	this.paused = false;
}
scope.EnemyFighter = EnemyFighter;
// Endofspritesdef
}(window.spriteLib));
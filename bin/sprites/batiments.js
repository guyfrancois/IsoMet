if (!window.spriteLib) { window.spriteLib = {}; }
(function(scope) {
var spritesheetPath = "sprites/batiments.png";

var Church = function() {
	this.initialize();
}
Church._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[0,0,167,234,0,87.1,190.55]]});
var Church_p = Church.prototype = new createjs.BitmapAnimation();
Church_p.BitmapAnimation_initialize = Church_p.initialize;
Church_p.initialize = function() {
	this.BitmapAnimation_initialize(Church._SpriteSheet);
	this.paused = false;
}
scope.Church = Church;

var Court = function() {
	this.initialize();
}
Court._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[167,0,167,173,0,83.15,124.9]]});
var Court_p = Court.prototype = new createjs.BitmapAnimation();
Court_p.BitmapAnimation_initialize = Court_p.initialize;
Court_p.initialize = function() {
	this.BitmapAnimation_initialize(Court._SpriteSheet);
	this.paused = false;
}
scope.Court = Court;

var Flag = function() {
	this.initialize();
}
Flag._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[277,173,31,43,0,16.35,42.2]]});
var Flag_p = Flag.prototype = new createjs.BitmapAnimation();
Flag_p.BitmapAnimation_initialize = Flag_p.initialize;
Flag_p.initialize = function() {
	this.BitmapAnimation_initialize(Flag._SpriteSheet);
	this.paused = false;
}
scope.Flag = Flag;

var Fountain = function() {
	this.initialize();
}
Fountain._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[287,379,84,52,0,41.2,25.9]]});
var Fountain_p = Fountain.prototype = new createjs.BitmapAnimation();
Fountain_p.BitmapAnimation_initialize = Fountain_p.initialize;
Fountain_p.initialize = function() {
	this.BitmapAnimation_initialize(Fountain._SpriteSheet);
	this.paused = false;
}
scope.Fountain = Fountain;

var House1 = function() {
	this.initialize();
}
House1._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[389,361,111,81,0,55.4,62.1]]});
var House1_p = House1.prototype = new createjs.BitmapAnimation();
House1_p.BitmapAnimation_initialize = House1_p.initialize;
House1_p.initialize = function() {
	this.BitmapAnimation_initialize(House1._SpriteSheet);
	this.paused = false;
}
scope.House1 = House1;

var House_White = function() {
	this.initialize();
}
House_White._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[389,280,112,81,0,55.4,40.1]]});
var House_White_p = House_White.prototype = new createjs.BitmapAnimation();
House_White_p.BitmapAnimation_initialize = House_White_p.initialize;
House_White_p.initialize = function() {
	this.BitmapAnimation_initialize(House_White._SpriteSheet);
	this.paused = false;
}
scope.House_White = House_White;

var Mine = function() {
	this.initialize();
}
Mine._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[296,280,93,99,0,45.75,49.95]]});
var Mine_p = Mine.prototype = new createjs.BitmapAnimation();
Mine_p.BitmapAnimation_initialize = Mine_p.initialize;
Mine_p.initialize = function() {
	this.BitmapAnimation_initialize(Mine._SpriteSheet);
	this.paused = false;
}
scope.Mine = Mine;

var MineLarge = function() {
	this.initialize();
}
MineLarge._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[110,277,93,102,0,45.75,50.8]]});
var MineLarge_p = MineLarge.prototype = new createjs.BitmapAnimation();
MineLarge_p.BitmapAnimation_initialize = MineLarge_p.initialize;
MineLarge_p.initialize = function() {
	this.BitmapAnimation_initialize(MineLarge._SpriteSheet);
	this.paused = false;
}
scope.MineLarge = MineLarge;

var MineMedium = function() {
	this.initialize();
}
MineMedium._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[203,277,93,101,0,45.75,50.8]]});
var MineMedium_p = MineMedium.prototype = new createjs.BitmapAnimation();
MineMedium_p.BitmapAnimation_initialize = MineMedium_p.initialize;
MineMedium_p.initialize = function() {
	this.BitmapAnimation_initialize(MineMedium._SpriteSheet);
	this.paused = false;
}
scope.MineMedium = MineMedium;

var Monster_Den = function() {
	this.initialize();
}
Monster_Den._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[444,161,64,46,0,31.7,45.05]]});
var Monster_Den_p = Monster_Den.prototype = new createjs.BitmapAnimation();
Monster_Den_p.BitmapAnimation_initialize = Monster_Den_p.initialize;
Monster_Den_p.initialize = function() {
	this.BitmapAnimation_initialize(Monster_Den._SpriteSheet);
	this.paused = false;
}
scope.Monster_Den = Monster_Den;

var Store_Extra_Large = function() {
	this.initialize();
}
Store_Extra_Large._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[334,161,110,119,0,54.4,117.35]]});
var Store_Extra_Large_p = Store_Extra_Large.prototype = new createjs.BitmapAnimation();
Store_Extra_Large_p.BitmapAnimation_initialize = Store_Extra_Large_p.initialize;
Store_Extra_Large_p.initialize = function() {
	this.BitmapAnimation_initialize(Store_Extra_Large._SpriteSheet);
	this.paused = false;
}
scope.Store_Extra_Large = Store_Extra_Large;

var Store_Large = function() {
	this.initialize();
}
Store_Large._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[167,173,110,104,0,54.4,102.95]]});
var Store_Large_p = Store_Large.prototype = new createjs.BitmapAnimation();
Store_Large_p.BitmapAnimation_initialize = Store_Large_p.initialize;
Store_Large_p.initialize = function() {
	this.BitmapAnimation_initialize(Store_Large._SpriteSheet);
	this.paused = false;
}
scope.Store_Large = Store_Large;

var Store_Medium = function() {
	this.initialize();
}
Store_Medium._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[0,234,110,87,0,54.4,85.65]]});
var Store_Medium_p = Store_Medium.prototype = new createjs.BitmapAnimation();
Store_Medium_p.BitmapAnimation_initialize = Store_Medium_p.initialize;
Store_Medium_p.initialize = function() {
	this.BitmapAnimation_initialize(Store_Medium._SpriteSheet);
	this.paused = false;
}
scope.Store_Medium = Store_Medium;

var Store_Small = function() {
	this.initialize();
}
Store_Small._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[83,379,110,67,0,54.4,66.65]]});
var Store_Small_p = Store_Small.prototype = new createjs.BitmapAnimation();
Store_Small_p.BitmapAnimation_initialize = Store_Small_p.initialize;
Store_Small_p.initialize = function() {
	this.BitmapAnimation_initialize(Store_Small._SpriteSheet);
	this.paused = false;
}
scope.Store_Small = Store_Small;

var Tower_Fountain = function() {
	this.initialize();
}
Tower_Fountain._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[334,0,153,161,0,76.2,115.2]]});
var Tower_Fountain_p = Tower_Fountain.prototype = new createjs.BitmapAnimation();
Tower_Fountain_p.BitmapAnimation_initialize = Tower_Fountain_p.initialize;
Tower_Fountain_p.initialize = function() {
	this.BitmapAnimation_initialize(Tower_Fountain._SpriteSheet);
	this.paused = false;
}
scope.Tower_Fountain = Tower_Fountain;

var Watch_Tower = function() {
	this.initialize();
}
Watch_Tower._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[203,378,84,95,0,41.2,67.2]]});
var Watch_Tower_p = Watch_Tower.prototype = new createjs.BitmapAnimation();
Watch_Tower_p.BitmapAnimation_initialize = Watch_Tower_p.initialize;
Watch_Tower_p.initialize = function() {
	this.BitmapAnimation_initialize(Watch_Tower._SpriteSheet);
	this.paused = false;
}
scope.Watch_Tower = Watch_Tower;

var Windmill = function() {
	this.initialize();
}
Windmill._SpriteSheet = new createjs.SpriteSheet({images: [spritesheetPath], frames: [[0,321,83,101,0,41.2,71.9]]});
var Windmill_p = Windmill.prototype = new createjs.BitmapAnimation();
Windmill_p.BitmapAnimation_initialize = Windmill_p.initialize;
Windmill_p.initialize = function() {
	this.BitmapAnimation_initialize(Windmill._SpriteSheet);
	this.paused = false;
}
scope.Windmill = Windmill;
}(window.spriteLib));


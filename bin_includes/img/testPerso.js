(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.testPerso = function() {
	this.initialize();

this.IDLE = new lib.perso_test();
	this.IDLE.setTransform(50,-38.8,1,1,0,0,0,0,-98.9);
	this.IDLE.gotoAndPlay("IDLE");
	
	this.W_D = new lib.perso_test();
	this.W_D.setTransform(100,-38.8,1,1,0,0,0,0,-98.9);
	this.W_D.gotoAndPlay("W_D");
	
	this.W_BD = new lib.perso_test();
	this.W_BD.setTransform(150,-38.8,1,1,0,0,0,0,-98.9);
	this.W_BD.gotoAndPlay("W_BD");
	
	this.W_TG = new lib.perso_test();
	this.W_TG.setTransform(200,-38.8,1,1,0,0,0,0,-98.9);
	this.W_TG.gotoAndPlay("W_TG");
	
	this.W_B = new lib.perso_test();
	this.W_B.setTransform(250,-38.8,1,1,0,0,0,0,-98.9);
	this.W_B.gotoAndPlay("W_B");
	
	this.W_H = new lib.perso_test();
	this.W_H.setTransform(300,-38.8,1,1,0,0,0,0,-98.9);
	this.W_H.gotoAndPlay("W_H");

	this.addChild(this.IDLE,this.W_D ,this.W_BD,this.W_TG,this.W_B,this.W_H);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(35.6,8.1,255.7,49.7);


// symbols:
(lib.perso_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,W_D:60,W_BD:120,W_TG:180,W_B:240,W_H:300},true);

	// timeline functions:
	this.frame_58 = function() {
		this.gotoAndPlay("IDLE");
	}
	this.frame_118 = function() {
		this.gotoAndPlay("W_D");
	}
	this.frame_178 = function() {
		this.gotoAndPlay("W_BD");
	}
	this.frame_238 = function() {
		this.gotoAndPlay("W_TG");
	}
	this.frame_298 = function() {
		this.gotoAndPlay("W_B");
	}
	this.frame_358 = function() {
		this.gotoAndPlay("W_H");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(60).call(this.frame_118).wait(60).call(this.frame_178).wait(60).call(this.frame_238).wait(60).call(this.frame_298).wait(60).call(this.frame_358).wait(1));

	// tt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AAjAjQgPAPgUAAQgUAAgOgPQgPgOAAgVQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOIAAAA").cp();
	this.shape.setTransform(-2,-46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AgxAAQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgUAAgOgPQgPgOAAgV").cp();
	this.shape_1.setTransform(-2,-46.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AAyAAQAAAVgPAOQgPAPgUAAQgUAAgOgPQgPgOAAgVQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATIAAAA").cp();
	this.shape_2.setTransform(-2,-45.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AAjAjQgPAPgUAAQgTAAgPgPQgPgOAAgVQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAVgPAOIAAAA").cp();
	this.shape_3.setTransform(-1.4,-47.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AgxAAQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgUAAgOgPQgPgPAAgU").cp();
	this.shape_4.setTransform(-1.8,-47);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AAjAjQgPAPgUAAQgUAAgOgPQgPgPAAgUQAAgTAPgPQAOgPAUAAQAUAAAPAPQAPAPAAATQAAAUgPAPIAAAA").cp();
	this.shape_5.setTransform(-2,-47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Calque 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AgoBBIBRg1IgghM");
	this.shape_6.setTransform(4.4,-32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AAFhBQASAoARAlQgoAbgnAa");
	this.shape_7.setTransform(4.8,-32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AAChBQATAnASAlQgnAcgmAb");
	this.shape_8.setTransform(5.2,-32.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AAAhBQATAnATAkQgmAdglAc");
	this.shape_9.setTransform(5.5,-32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AgChCQASAnAVAlQglAdgkAc");
	this.shape_10.setTransform(5.9,-32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AgGhCQAUAmAWAlQgkAdgjAe");
	this.shape_11.setTransform(6.3,-32.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AgJhDQAVAnAXAkQgjAegiAe");
	this.shape_12.setTransform(6.7,-32.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AgMhDQAWAmAYAkQgiAfghAf");
	this.shape_13.setTransform(7.1,-32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AgQhEQAYAnAZAkQghAfggAf");
	this.shape_14.setTransform(7.5,-32.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AgThFQAZAnAaAkQggAggfAf");
	this.shape_15.setTransform(7.9,-32.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(5,1,1).p("AgWhFQAZAmAcAkQgfAhgeAg");
	this.shape_16.setTransform(8.3,-32.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(5,1,1).p("AgahGQAbAnAdAjQgeAigdAh");
	this.shape_17.setTransform(8.6,-32.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AgchGQAcAmAdAkQgdAigbAh");
	this.shape_18.setTransform(9,-32.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AgYBIIA2hFIg8hK");
	this.shape_19.setTransform(9.2,-32.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AgchGQAcAmAdAjQgdAmgbAe");
	this.shape_20.setTransform(9,-32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AgahGQAbAmAcAjQgeAmgbAe");
	this.shape_21.setTransform(8.7,-32.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AgXhFQAZAlAcAjQgeAmgdAd");
	this.shape_22.setTransform(8.4,-32.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AgUhFQAYAlAbAjQgfAlgeAe");
	this.shape_23.setTransform(8,-32.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AgRhEQAXAkAaAjQggAlgfAd");
	this.shape_24.setTransform(7.7,-32.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AgOhEQAWAlAYAiQggAlgfAd");
	this.shape_25.setTransform(7.3,-32.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AgLhDQAVAkAXAiQghAlggAc");
	this.shape_26.setTransform(7,-32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AgIhDQAUAkAWAiQgiAlghAc");
	this.shape_27.setTransform(6.6,-32.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AgFhDQATAkAVAiQgjAlgiAc");
	this.shape_28.setTransform(6.3,-32.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AgChCQASAkATAhQgjAlgiAb");
	this.shape_29.setTransform(5.9,-32.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AAAhCQASAkASAhQgkAlgjAb");
	this.shape_30.setTransform(5.6,-32.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AAChBQASAjARAhQgkAkglAb");
	this.shape_31.setTransform(5.2,-32.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAFhBQAQAjARAhQglAkgmAb");
	this.shape_32.setTransform(4.9,-32.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAIhAQAPAiAPAhQglAkgmAa");
	this.shape_33.setTransform(4.5,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},240).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_19}]},30).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(60));

	// bd
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAZBIIg2hFIA7hK");
	this.shape_34.setTransform(-12.5,-32.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAehGQgeAmgdAkQAdAiAcAh");
	this.shape_35.setTransform(-12.4,-32.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAchGQgcAngdAjQAdAiAeAh");
	this.shape_36.setTransform(-12.2,-32.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAZhFQgaAmgcAkQAdAhAeAg");
	this.shape_37.setTransform(-11.9,-32.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAWhFQgZAngbAkQAeAgAfAg");
	this.shape_38.setTransform(-11.6,-32.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AAThEQgYAmgaAkQAfAgAgAf");
	this.shape_39.setTransform(-11.3,-32.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAQhEQgXAngZAkQAgAfAhAf");
	this.shape_40.setTransform(-11.1,-32.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AANhDQgWAmgYAkQAhAfAiAe");
	this.shape_41.setTransform(-10.8,-32.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAKhDQgVAngXAkQAiAeAjAe");
	this.shape_42.setTransform(-10.5,-32.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAHhDQgUAngWAlQAjAdAkAe");
	this.shape_43.setTransform(-10.2,-32.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAFhCQgTAngWAkQAkAeAlAc");
	this.shape_44.setTransform(-9.9,-32.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AAChCQgSAngVAlQAlAdAmAc");
	this.shape_45.setTransform(-9.6,-32.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AAAhBQgSAngUAlQAmAcAnAb");
	this.shape_46.setTransform(-9.3,-32.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AgChBQgSAngSAlQAmAcAnAb");
	this.shape_47.setTransform(-9,-32.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AgFhAQgRAngRAlQAnAbAoAa");
	this.shape_48.setTransform(-8.8,-32.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AApBBIhRg1IAghM");
	this.shape_49.setTransform(-8.5,-32.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AgFhAQgRAngRAkQArAfAkAX");
	this.shape_50.setTransform(-8.8,-32.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AgChBQgSAngSAkQApAfAkAZ");
	this.shape_51.setTransform(-9,-32.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAAhBQgSAmgTAkQAoAgAjAZ");
	this.shape_52.setTransform(-9.3,-32.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAChCQgSAmgTAjQAlAiAiAa");
	this.shape_53.setTransform(-9.6,-32.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAEhCQgSAlgUAjQAjAiAiAb");
	this.shape_54.setTransform(-9.9,-32.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAHhDQgTAlgVAjQAiAjAhAc");
	this.shape_55.setTransform(-10.2,-32.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAKhDQgUAkgWAiQAgAlAhAc");
	this.shape_56.setTransform(-10.5,-32.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AANhEQgVAkgXAiQAfAlAgAe");
	this.shape_57.setTransform(-10.7,-32.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAQhEQgWAjgXAiQAdAmAeAe");
	this.shape_58.setTransform(-11,-32.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAShFQgWAkgYAhQAcAnAdAf");
	this.shape_59.setTransform(-11.3,-32.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAVhFQgXAjgZAiQAbAmAcAg");
	this.shape_60.setTransform(-11.6,-32.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAYhGQgYAjgaAiQAZAnAcAh");
	this.shape_61.setTransform(-11.9,-32.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAahGQgaAigZAhQAXApAbAh");
	this.shape_62.setTransform(-12.1,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},254).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).wait(76));

	// c
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AhKhVICVAAIhKCrIhLir").cp();
	this.shape_63.setTransform(-1.9,-31.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AhKhVICVAAIhLCrIhKir").cp();
	this.shape_64.setTransform(-1.9,-31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[]},1).to({state:[]},120).to({state:[{t:this.shape_63}]},60).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_63}]},1).wait(1));

	// Calque 4
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AgoBBIBRg1IgghM");
	this.shape_65.setTransform(4.4,-32.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAFhBQASAoARAlQgoAbgnAa");
	this.shape_66.setTransform(4.8,-32.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AAChBQATAnASAlQgnAcgmAb");
	this.shape_67.setTransform(5.2,-32.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("AAAhBQATAnATAkQgmAdglAc");
	this.shape_68.setTransform(5.5,-32.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("AgChCQASAnAVAlQglAdgkAc");
	this.shape_69.setTransform(5.9,-32.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AgGhCQAUAmAWAlQgkAdgjAe");
	this.shape_70.setTransform(6.3,-32.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AgJhDQAVAnAXAkQgjAegiAe");
	this.shape_71.setTransform(6.7,-32.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AgMhDQAWAmAYAkQgiAfghAf");
	this.shape_72.setTransform(7.1,-32.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AgQhEQAYAnAZAkQghAfggAf");
	this.shape_73.setTransform(7.5,-32.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AgThFQAZAnAaAkQggAggfAf");
	this.shape_74.setTransform(7.9,-32.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AgWhFQAZAmAcAkQgfAhgeAg");
	this.shape_75.setTransform(8.3,-32.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AgahGQAbAnAdAjQgeAigdAh");
	this.shape_76.setTransform(8.6,-32.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AgchGQAcAmAdAkQgdAigbAh");
	this.shape_77.setTransform(9,-32.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AgYBIIA2hFIg8hK");
	this.shape_78.setTransform(9.2,-32.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AgchGQAcAmAdAjQgdAmgbAe");
	this.shape_79.setTransform(9,-32.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AgahGQAbAmAcAjQgeAmgbAe");
	this.shape_80.setTransform(8.7,-32.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AgXhFQAZAlAcAjQgeAmgdAd");
	this.shape_81.setTransform(8.4,-32.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AgUhFQAYAlAbAjQgfAlgeAe");
	this.shape_82.setTransform(8,-32.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AgRhEQAXAkAaAjQggAlgfAd");
	this.shape_83.setTransform(7.7,-32.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AgOhEQAWAlAYAiQggAlgfAd");
	this.shape_84.setTransform(7.3,-32.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AgLhDQAVAkAXAiQghAlggAc");
	this.shape_85.setTransform(7,-32.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AgIhDQAUAkAWAiQgiAlghAc");
	this.shape_86.setTransform(6.6,-32.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AgFhDQATAkAVAiQgjAlgiAc");
	this.shape_87.setTransform(6.3,-32.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AgChCQASAkATAhQgjAlgiAb");
	this.shape_88.setTransform(5.9,-32.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AAAhCQASAkASAhQgkAlgjAb");
	this.shape_89.setTransform(5.6,-32.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AAChBQASAjARAhQgkAkglAb");
	this.shape_90.setTransform(5.2,-32.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AAFhBQAQAjARAhQglAkgmAb");
	this.shape_91.setTransform(4.9,-32.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AAIhAQAPAiAPAhQglAkgmAa");
	this.shape_92.setTransform(4.5,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_65}]},300).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[]},1).to({state:[{t:this.shape_78}]},30).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_65}]},1).wait(1));

	// bd
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AAZBIIg2hFIA7hK");
	this.shape_93.setTransform(-12.5,-32.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AAehGQgeAmgdAkQAdAiAcAh");
	this.shape_94.setTransform(-12.4,-32.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AAchGQgcAngdAjQAdAiAeAh");
	this.shape_95.setTransform(-12.2,-32.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AAZhFQgaAmgcAkQAdAhAeAg");
	this.shape_96.setTransform(-11.9,-32.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AAWhFQgZAngbAkQAeAgAfAg");
	this.shape_97.setTransform(-11.6,-32.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AAThEQgYAmgaAkQAfAgAgAf");
	this.shape_98.setTransform(-11.3,-32.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AAQhEQgXAngZAkQAgAfAhAf");
	this.shape_99.setTransform(-11.1,-32.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AANhDQgWAmgYAkQAhAfAiAe");
	this.shape_100.setTransform(-10.8,-32.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AAKhDQgVAngXAkQAiAeAjAe");
	this.shape_101.setTransform(-10.5,-32.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AAHhDQgUAngWAlQAjAdAkAe");
	this.shape_102.setTransform(-10.2,-32.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AAFhCQgTAngWAkQAkAeAlAc");
	this.shape_103.setTransform(-9.9,-32.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AAChCQgSAngVAlQAlAdAmAc");
	this.shape_104.setTransform(-9.6,-32.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AAAhBQgSAngUAlQAmAcAnAb");
	this.shape_105.setTransform(-9.3,-32.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AgChBQgSAngSAlQAmAcAnAb");
	this.shape_106.setTransform(-9,-32.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AgFhAQgRAngRAlQAnAbAoAa");
	this.shape_107.setTransform(-8.8,-32.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AApBBIhRg1IAghM");
	this.shape_108.setTransform(-8.5,-32.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AgFhAQgRAngRAkQArAfAkAX");
	this.shape_109.setTransform(-8.8,-32.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AgChBQgSAngSAkQApAfAkAZ");
	this.shape_110.setTransform(-9,-32.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AAAhBQgSAmgTAkQAoAgAjAZ");
	this.shape_111.setTransform(-9.3,-32.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AAChCQgSAmgTAjQAlAiAiAa");
	this.shape_112.setTransform(-9.6,-32.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AAEhCQgSAlgUAjQAjAiAiAb");
	this.shape_113.setTransform(-9.9,-32.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AAHhDQgTAlgVAjQAiAjAhAc");
	this.shape_114.setTransform(-10.2,-32.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAKhDQgUAkgWAiQAgAlAhAc");
	this.shape_115.setTransform(-10.5,-32.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AANhEQgVAkgXAiQAfAlAgAe");
	this.shape_116.setTransform(-10.7,-32.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AAQhEQgWAjgXAiQAdAmAeAe");
	this.shape_117.setTransform(-11,-32.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AAShFQgWAkgYAhQAcAnAdAf");
	this.shape_118.setTransform(-11.3,-32.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AAVhFQgXAjgZAiQAbAmAcAg");
	this.shape_119.setTransform(-11.6,-32.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AAYhGQgYAjgaAiQAZAnAcAh");
	this.shape_120.setTransform(-11.9,-32.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AAahGQgaAigZAhQAXApAbAh");
	this.shape_121.setTransform(-12.1,-32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},300).to({state:[{t:this.shape_93}]},14).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_93}]},1).to({state:[]},1).wait(16));

	// bd
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AAYhSIgvBMIAXBZ");
	this.shape_122.setTransform(-11.9,-31.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AABBTIgYhYIAvhN");
	this.shape_123.setTransform(-11.9,-31.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AACBSIgahXIAxhM");
	this.shape_124.setTransform(-11.9,-31.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AADBSIgbhWIAxhN");
	this.shape_125.setTransform(-12,-31.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AAEBRIgchVIAxhM");
	this.shape_126.setTransform(-12,-31.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AAFBRIgehUIAzhN");
	this.shape_127.setTransform(-12,-32);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AAGBQIgfhTIAzhM");
	this.shape_128.setTransform(-12,-32);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAHBQIgghTIAzhM");
	this.shape_129.setTransform(-12.1,-32);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AAIBPIghhRIAzhM");
	this.shape_130.setTransform(-12.1,-32);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AAJBPIgihRIAzhM");
	this.shape_131.setTransform(-12.1,-32);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAKBPIgkhQIA1hN");
	this.shape_132.setTransform(-12.1,-32);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AALBOIglhPIA1hM");
	this.shape_133.setTransform(-12.1,-32);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAMBNIgmhNIA1hM");
	this.shape_134.setTransform(-12.2,-32);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AANBNIgohNIA3hM");
	this.shape_135.setTransform(-12.2,-32);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAOBMIgphMIA3hL");
	this.shape_136.setTransform(-12.2,-32);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AAPBMIgqhMIA3hL");
	this.shape_137.setTransform(-12.3,-32);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AAQBMIgrhMIA3hL");
	this.shape_138.setTransform(-12.3,-32);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AARBLIgthLIA5hK");
	this.shape_139.setTransform(-12.3,-32);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AASBLIguhLIA5hK");
	this.shape_140.setTransform(-12.3,-32);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AATBKIgvhKIA5hJ");
	this.shape_141.setTransform(-12.3,-32);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AATBKIgvhJIA5hK");
	this.shape_142.setTransform(-12.4,-32);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AAUBKIgwhJIA5hK");
	this.shape_143.setTransform(-12.4,-32);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAVBJIgyhHIA7hK");
	this.shape_144.setTransform(-12.4,-32);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AAWBJIgzhHIA7hK");
	this.shape_145.setTransform(-12.4,-32);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AAXBIIg0hGIA7hJ");
	this.shape_146.setTransform(-12.5,-32);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AAYBIIg1hFIA7hK");
	this.shape_147.setTransform(-12.5,-32);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AAZBHIg3hEIA9hJ");
	this.shape_148.setTransform(-12.5,-32);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AAaBHIg4hEIA9hJ");
	this.shape_149.setTransform(-12.5,-32.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(5,1,1).p("AAVBJIgxhIIA5hJ");
	this.shape_150.setTransform(-12.4,-32);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(5,1,1).p("AAQBLIgrhLIA3hK");
	this.shape_151.setTransform(-12.3,-32);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(5,1,1).p("AAOBNIgphNIA3hM");
	this.shape_152.setTransform(-12.2,-32);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(5,1,1).p("AAMBOIgmhOIA1hN");
	this.shape_153.setTransform(-12.2,-32);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(5,1,1).p("AAKBOIgkhPIA1hM");
	this.shape_154.setTransform(-12.1,-32);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(5,1,1).p("AAJBPIgjhRIA1hM");
	this.shape_155.setTransform(-12.1,-32);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(5,1,1).p("AAIBQIghhSIAzhN");
	this.shape_156.setTransform(-12.1,-32);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(5,1,1).p("AABBSIgZhXIAxhM");
	this.shape_157.setTransform(-11.9,-31.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(5,1,1).p("AAEBSQgLgsgOgrQAVgmAWgm");
	this.shape_158.setTransform(-11.5,-32);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(5,1,1).p("AAJBRQgNgrgPgqQATgmAUgm");
	this.shape_159.setTransform(-11.1,-32);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(5,1,1).p("AAOBQQgOgqgQgoQAQgnARgm");
	this.shape_160.setTransform(-10.7,-32.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(5,1,1).p("AARBPQgRgpgQgnQAQgnAOgm");
	this.shape_161.setTransform(-10.2,-32.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(5,1,1).p("AASBOQgSgogRgmQAOgnALgm");
	this.shape_162.setTransform(-9.4,-32.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(5,1,1).p("AATBNQgTgngSgmQALglAJgn");
	this.shape_163.setTransform(-8.7,-32.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(5,1,1).p("AAUBMQgUgmgTgmQAJgkAIgn");
	this.shape_164.setTransform(-8,-32.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(5,1,1).p("AAVBLQgVglgUglQAGgkAHgn");
	this.shape_165.setTransform(-7.2,-32.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(5,1,1).p("AAXBKQgXgkgVgkQAEgkAEgn");
	this.shape_166.setTransform(-6.5,-32.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgjQACgkACgn");
	this.shape_167.setTransform(-5.8,-32.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(5,1,1).p("AAZBIQgZgigXghQgBglAAgn");
	this.shape_168.setTransform(-5.1,-32.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(5,1,1).p("AAdBHQgbgggYghQgDglgDgn");
	this.shape_169.setTransform(-4.6,-32.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(5,1,1).p("AAgBGQgcgfgZggQgFglgFgn");
	this.shape_170.setTransform(-4.1,-32.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(5,1,1).p("AAkBFQgdgegbgfQgHglgIgn");
	this.shape_171.setTransform(-3.6,-32.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(5,1,1).p("AAnBEQgegdgcgeQgJglgKgn");
	this.shape_172.setTransform(-3.1,-32.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(5,1,1).p("AAqBDQgfgcgdgdQgLglgMgn");
	this.shape_173.setTransform(-2.6,-32.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(5,1,1).p("AAuBCQgggbgfgcQgOglgOgn");
	this.shape_174.setTransform(-2.1,-32.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(5,1,1).p("AAxBBQghgagggbQgQglgQgn");
	this.shape_175.setTransform(-1.6,-32.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(5,1,1).p("AA1BAQgjgZghgaQgSglgTgn");
	this.shape_176.setTransform(-1.1,-32.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(5,1,1).p("AA4A/QgkgYghgYQgVgmgVgn");
	this.shape_177.setTransform(-0.6,-33);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(5,1,1).p("AA8A+QglgXgjgXQgXgmgYgn");
	this.shape_178.setTransform(-0.1,-33);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(5,1,1).p("AA/A9QgmgWgkgWQgZgmgagn");
	this.shape_179.setTransform(0.3,-33.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(5,1,1).p("ABDA8QgogVglgVQgcgmgcgn");
	this.shape_180.setTransform(0.9,-33.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(5,1,1).p("ABGA7QgogUgngUQgegmgegn");
	this.shape_181.setTransform(1.4,-33.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(5,1,1).p("ABKA6QgqgTgogTQggglghgo");
	this.shape_182.setTransform(1.9,-33.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(5,1,1).p("ABNA5QgrgSgpgSQgiglgjgo");
	this.shape_183.setTransform(2.4,-33.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(5,1,1).p("ABQA4QgsgQgqgSQgkglglgo");
	this.shape_184.setTransform(2.9,-33.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(5,1,1).p("ABUA3QgtgPgrgQQgngmgogo");
	this.shape_185.setTransform(3.4,-33.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(5,1,1).p("ABXA2QgugOgsgPQgqgmgpgo");
	this.shape_186.setTransform(3.9,-33.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(5,1,1).p("Ahag0IBYBOIBdAb");
	this.shape_187.setTransform(4.4,-33.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(5,1,1).p("ABUA3QgtgPgsgRQgmglgogo");
	this.shape_188.setTransform(3.3,-33.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(5,1,1).p("ABQA4QgsgQgqgSQgkgmglgn");
	this.shape_189.setTransform(2.8,-33.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(5,1,1).p("ABMA5QgqgSgpgSQgigmgign");
	this.shape_190.setTransform(2.3,-33.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(5,1,1).p("ABJA6QgqgTgngTQgggmgggn");
	this.shape_191.setTransform(1.8,-33.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(5,1,1).p("ABFA7QgogUgmgUQgegmgdgn");
	this.shape_192.setTransform(1.3,-33.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(5,1,1).p("ABCA8QgngVglgVQgbgmgcgn");
	this.shape_193.setTransform(0.7,-33.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(5,1,1).p("AA+A+QgmgXgjgWQgZgmgZgo");
	this.shape_194.setTransform(0.2,-33.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(5,1,1).p("AA7A/QglgYgjgYQgWglgXgo");
	this.shape_195.setTransform(-0.2,-33);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(5,1,1).p("AA3BAQgjgZgigZQgUglgUgo");
	this.shape_196.setTransform(-0.7,-33);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(5,1,1).p("AAzBBQgigagggaQgRglgSgo");
	this.shape_197.setTransform(-1.3,-32.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(5,1,1).p("AAwBCQghgbgfgbQgPglgQgo");
	this.shape_198.setTransform(-1.8,-32.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(5,1,1).p("AAsBDQgfgcgegcQgNglgNgo");
	this.shape_199.setTransform(-2.3,-32.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(5,1,1).p("AApBEQgfgdgcgdQgLglgLgo");
	this.shape_200.setTransform(-2.8,-32.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(5,1,1).p("AAlBFQgdgegcgfQgIglgIgn");
	this.shape_201.setTransform(-3.3,-32.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(5,1,1).p("AAiBGQgdgfgaggQgFglgHgn");
	this.shape_202.setTransform(-3.9,-32.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(5,1,1).p("AAeBHQgbgggZghQgDglgEgn");
	this.shape_203.setTransform(-4.4,-32.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(5,1,1).p("AAbBIQgaghgYgiQgBglgCgn");
	this.shape_204.setTransform(-4.9,-32.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgiQABglABgn");
	this.shape_205.setTransform(-5.5,-32.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(5,1,1).p("AAXBKQgXgkgWgjQAEglADgn");
	this.shape_206.setTransform(-6.3,-32.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(5,1,1).p("AAWBLQgWglgVglQAGgkAGgn");
	this.shape_207.setTransform(-7,-32.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(5,1,1).p("AAUBMQgUgmgTgmQAIgkAIgn");
	this.shape_208.setTransform(-7.8,-32.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(5,1,1).p("AATBNQgTgngSgmQALglAIgn");
	this.shape_209.setTransform(-8.6,-32.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(5,1,1).p("AASBOQgSgogRgmQANgmALgn");
	this.shape_210.setTransform(-9.3,-32.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(5,1,1).p("AARBPQgRgpgQgnQAQgmANgn");
	this.shape_211.setTransform(-10.1,-32.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(5,1,1).p("AAOBQQgOgqgQgoQAQgmARgn");
	this.shape_212.setTransform(-10.7,-32.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(5,1,1).p("AAJBRQgNgrgPgpQATgnAUgm");
	this.shape_213.setTransform(-11.1,-32);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(5,1,1).p("AAFBSQgMgsgOgrQAVgmAWgm");
	this.shape_214.setTransform(-11.5,-32);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(5,1,1).p("AACBTQgLgtgNgrQAWgmAXgn");
	this.shape_215.setTransform(-11.7,-30.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(5,1,1).p("AAFBSQgMgsgOgqQAVgmAWgn");
	this.shape_216.setTransform(-11.5,-30.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(5,1,1).p("AAIBSQgNgsgPgpQAUgnAVgn");
	this.shape_217.setTransform(-11.3,-30.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(5,1,1).p("AALBRQgOgqgQgpQATgnAUgn");
	this.shape_218.setTransform(-11.1,-30.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(5,1,1).p("AANBRQgOgqgRgoQASgnATgo");
	this.shape_219.setTransform(-11,-30.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(5,1,1).p("AAQBQQgQgpgRgnQARgnASgo");
	this.shape_220.setTransform(-10.8,-30.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(5,1,1).p("AASBQQgSgogRgoQARgnAPgo");
	this.shape_221.setTransform(-10.5,-30.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(5,1,1).p("AASBPQgSgngRgoQAQgmANgo");
	this.shape_222.setTransform(-10.1,-30.9);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(5,1,1).p("AATBPQgTgngSgnQAPgmAMgp");
	this.shape_223.setTransform(-9.7,-31);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(5,1,1).p("AAUBOQgUgmgTgmQAOgmALgp");
	this.shape_224.setTransform(-9.4,-31);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(5,1,1).p("AAVBOQgVglgUgmQANgnAKgp");
	this.shape_225.setTransform(-9,-31.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(5,1,1).p("AAWBNQgWgkgVglQAMgnAJgp");
	this.shape_226.setTransform(-8.6,-31.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(5,1,1).p("AAWBNQgWgkgVgkQAKgnAKgq");
	this.shape_227.setTransform(-8.3,-31.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(5,1,1).p("AAXBMQgXgjgWgjQAJgnAJgq");
	this.shape_228.setTransform(-7.9,-31.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(5,1,1).p("AAYBMQgYgjgXgiQAIgoAIgq");
	this.shape_229.setTransform(-7.5,-31.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(5,1,1).p("AAZBLQgZghgYgiQAHgoAHgq");
	this.shape_230.setTransform(-7.1,-31.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(5,1,1).p("AAZBLQgZghgYghQAGgoAFgr");
	this.shape_231.setTransform(-6.8,-31.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(5,1,1).p("AAaBKQgagggZggQAFgpAEgq");
	this.shape_232.setTransform(-6.4,-31.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(5,1,1).p("AAbBKQgbgggagfQAEgpADgr");
	this.shape_233.setTransform(-6,-31.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(5,1,1).p("AAcBJQgcgegbgfQADgpACgr");
	this.shape_234.setTransform(-5.7,-31.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(5,1,1).p("AAdBJQgdgegcgeQACgpABgs");
	this.shape_235.setTransform(-5.3,-31.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(5,1,1).p("AAdBIQgdgdgcgdQAAgqAAgr");
	this.shape_236.setTransform(-4.9,-31.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(5,1,1).p("AAfBIQgegdgdgcQgBgqgBgs");
	this.shape_237.setTransform(-4.6,-31.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(5,1,1).p("AAhBHQgfgbgegcQgCgqgCgs");
	this.shape_238.setTransform(-4.4,-31.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(5,1,1).p("AAjBHQgggbgfgbQgDgqgDgt");
	this.shape_239.setTransform(-4.1,-31.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(5,1,1).p("AAlBGQghgagfgaQgEgrgFgs");
	this.shape_240.setTransform(-3.8,-31.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(5,1,1).p("AAnBGQgigZgggaQgFgrgGgt");
	this.shape_241.setTransform(-3.6,-31.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(5,1,1).p("AApBFQgjgYghgZQgGgrgHgt");
	this.shape_242.setTransform(-3.3,-31.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(5,1,1).p("AArBFQgkgYghgYQgIgrgIgu");
	this.shape_243.setTransform(-3.1,-32);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(5,1,1).p("AgshDIASBZIBHAu");
	this.shape_244.setTransform(-2.8,-32);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(5,1,1).p("AArBFQgkgYghgYQgIgsgIgt");
	this.shape_245.setTransform(-3.1,-32);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(5,1,1).p("AAnBGQgigagggZQgFgrgGgt");
	this.shape_246.setTransform(-3.6,-31.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(5,1,1).p("AAjBHQgggbgfgbQgCgrgEgs");
	this.shape_247.setTransform(-4.1,-31.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(5,1,1).p("AAfBIQgfgdgcgcQgBgqgBgs");
	this.shape_248.setTransform(-4.7,-31.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(5,1,1).p("AAdBIQgdgdgcgdQABgqAAgr");
	this.shape_249.setTransform(-5,-31.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(5,1,1).p("AAcBJQgcgegbgeQACgqABgr");
	this.shape_250.setTransform(-5.4,-31.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(5,1,1).p("AAcBJQgcgegbgfQADgpADgr");
	this.shape_251.setTransform(-5.8,-31.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(5,1,1).p("AAbBKQgbgggagfQAEgpAEgr");
	this.shape_252.setTransform(-6.2,-31.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(5,1,1).p("AAaBKQgagggZggQAFgpAFgq");
	this.shape_253.setTransform(-6.5,-31.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(5,1,1).p("AAZBLQgZghgYghQAGgpAGgq");
	this.shape_254.setTransform(-6.9,-31.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(5,1,1).p("AAYBLQgYghgXgiQAHgoAIgq");
	this.shape_255.setTransform(-7.3,-31.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(5,1,1).p("AAXBMQgXgjgWgjQAIgnAJgq");
	this.shape_256.setTransform(-7.7,-31.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(5,1,1).p("AAXBNQgXgkgWgkQAKgnAKgq");
	this.shape_257.setTransform(-8.1,-31.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(5,1,1).p("AAWBNQgWgkgVglQALgnAKgp");
	this.shape_258.setTransform(-8.5,-31.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(5,1,1).p("AAVBOQgVglgUgmQAMgmAKgq");
	this.shape_259.setTransform(-8.9,-31.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(5,1,1).p("AAUBOQgUgmgTgmQANgmALgp");
	this.shape_260.setTransform(-9.2,-31.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(5,1,1).p("AATBPQgTgngSgnQAOgmAMgp");
	this.shape_261.setTransform(-9.6,-31.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(5,1,1).p("AATBPQgTgngSgoQAQgmANgo");
	this.shape_262.setTransform(-10,-31);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(5,1,1).p("AASBQQgSgogRgoQARgmAPgp");
	this.shape_263.setTransform(-10.4,-31);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(5,1,1).p("AARBQQgRgpgQgnQAQgnARgo");
	this.shape_264.setTransform(-10.7,-30.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(5,1,1).p("AAOBRQgPgqgQgoQARgnASgo");
	this.shape_265.setTransform(-10.9,-30.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(5,1,1).p("AAIBSQgNgrgPgqQAUgmAVgo");
	this.shape_266.setTransform(-11.3,-30.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(5,1,1).p("AADBTQgMgtgNgrQAWgmAXgn");
	this.shape_267.setTransform(-11.7,-30.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(5,1,1).p("AgXhSIAvBMIgYBZ");
	this.shape_268.setTransform(-4.6,-30.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(5,1,1).p("AgBBTQALgtANgrQgXgmgWgn");
	this.shape_269.setTransform(-4.6,-30.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(5,1,1).p("AgEBSQAMgsAOgqQgWgmgVgn");
	this.shape_270.setTransform(-4.7,-30.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(5,1,1).p("AgHBSQANgsAPgpQgVgngUgn");
	this.shape_271.setTransform(-4.7,-30.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(5,1,1).p("AgKBRQAOgqAQgpQgUgngTgn");
	this.shape_272.setTransform(-4.8,-30.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(5,1,1).p("AgMBRQAOgqARgoQgTgngSgo");
	this.shape_273.setTransform(-4.9,-31);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(5,1,1).p("AgPBQQAPgpASgnQgSgngRgo");
	this.shape_274.setTransform(-4.9,-31);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(5,1,1).p("AgRBQQARgoASgoQgRgngPgo");
	this.shape_275.setTransform(-5.1,-31.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(5,1,1).p("AgRBPQARgnASgoQgPgmgOgo");
	this.shape_276.setTransform(-5.3,-31.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(5,1,1).p("AgSBPQASgnATgnQgOgmgNgp");
	this.shape_277.setTransform(-5.6,-31.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQATgmAUgmQgNgmgMgp");
	this.shape_278.setTransform(-5.8,-31.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(5,1,1).p("AgUBOQAUgmAVglQgNgngKgp");
	this.shape_279.setTransform(-6.1,-31.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(5,1,1).p("AgVBNQAVgkAWglQgMgngKgp");
	this.shape_280.setTransform(-6.3,-31.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(5,1,1).p("AgVBNQAVgkAWgkQgKgngKgq");
	this.shape_281.setTransform(-6.6,-31.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(5,1,1).p("AgWBMQAWgjAXgjQgJgngJgq");
	this.shape_282.setTransform(-6.8,-31.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(5,1,1).p("AgXBMQAXgjAYgiQgIgogIgq");
	this.shape_283.setTransform(-7.1,-31.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(5,1,1).p("AgYBLQAYghAZgiQgHgogHgq");
	this.shape_284.setTransform(-7.3,-31.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(5,1,1).p("AgYBLQAYghAZghQgFgogGgr");
	this.shape_285.setTransform(-7.6,-31.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(5,1,1).p("AgZBKQAZggAaggQgEgpgFgq");
	this.shape_286.setTransform(-7.8,-31.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(5,1,1).p("AgaBKQAagfAbggQgDgpgEgr");
	this.shape_287.setTransform(-8.1,-31.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAbgeAcgfQgCgpgDgr");
	this.shape_288.setTransform(-8.3,-31.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(5,1,1).p("AgcBJQAcgeAdgeQgBgpgCgs");
	this.shape_289.setTransform(-8.5,-31.7);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(5,1,1).p("AgcBIQAcgdAdgdQAAgqAAgr");
	this.shape_290.setTransform(-8.8,-31.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(5,1,1).p("AgeBIQAegdAdgcQABgqABgs");
	this.shape_291.setTransform(-8.9,-31.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(5,1,1).p("AggBHQAggbAdgcQACgqACgs");
	this.shape_292.setTransform(-9.1,-31.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAhgbAegbQADgqADgt");
	this.shape_293.setTransform(-9.2,-31.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(5,1,1).p("AgkBGQAhgaAfgaQAFgrAEgs");
	this.shape_294.setTransform(-9.4,-31.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(5,1,1).p("AgmBGQAigZAggaQAGgrAFgt");
	this.shape_295.setTransform(-9.5,-31.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(5,1,1).p("AgoBFQAjgYAhgZQAGgrAHgt");
	this.shape_296.setTransform(-9.6,-31.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(5,1,1).p("AgqBFQAkgYAhgYQAIgrAIgu");
	this.shape_297.setTransform(-9.8,-32);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(5,1,1).p("AAthDIgSBZIhHAu");
	this.shape_298.setTransform(-9.9,-32);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(5,1,1).p("AgqBFQAkgYAhgYQAIgsAIgt");
	this.shape_299.setTransform(-9.8,-32);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(5,1,1).p("AgmBGQAigaAggZQAGgrAFgt");
	this.shape_300.setTransform(-9.5,-31.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(5,1,1).p("AgkBGQAigaAegaQAFgrAEgs");
	this.shape_301.setTransform(-9.3,-31.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAhgbAegbQADgrADgs");
	this.shape_302.setTransform(-9.2,-31.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(5,1,1).p("AgcBIQAcgdAdgdQAAgqgBgr");
	this.shape_303.setTransform(-8.7,-31.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAbgeAcgeQgBgqgCgr");
	this.shape_304.setTransform(-8.5,-31.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAbgeAcgfQgDgpgDgr");
	this.shape_305.setTransform(-8.2,-31.6);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(5,1,1).p("AgaBKQAaggAbgfQgEgpgEgr");
	this.shape_306.setTransform(-8,-31.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(5,1,1).p("AgZBKQAZggAaggQgFgpgFgq");
	this.shape_307.setTransform(-7.7,-31.5);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(5,1,1).p("AgYBLQAYghAZghQgGgpgGgq");
	this.shape_308.setTransform(-7.4,-31.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(5,1,1).p("AgXBLQAXghAYgiQgHgogIgq");
	this.shape_309.setTransform(-7.2,-31.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(5,1,1).p("AgWBMQAWgjAXgjQgIgngJgq");
	this.shape_310.setTransform(-6.9,-31.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(5,1,1).p("AgWBNQAWgkAXgkQgKgngKgq");
	this.shape_311.setTransform(-6.7,-31.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(5,1,1).p("AgVBNQAVgkAWglQgLgngLgp");
	this.shape_312.setTransform(-6.4,-31.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(5,1,1).p("AgUBOQAUglAVgmQgMgmgKgq");
	this.shape_313.setTransform(-6.2,-31.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQATgmAUgmQgNgmgLgp");
	this.shape_314.setTransform(-5.9,-31.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(5,1,1).p("AgSBPQASgnATgnQgOgmgMgp");
	this.shape_315.setTransform(-5.7,-31.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(5,1,1).p("AgSBPQASgnATgoQgQgmgNgo");
	this.shape_316.setTransform(-5.4,-31.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(5,1,1).p("AgRBQQARgoASgoQgRgmgPgp");
	this.shape_317.setTransform(-5.1,-31.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(5,1,1).p("AgQBQQAQgpARgnQgRgngQgo");
	this.shape_318.setTransform(-4.9,-31);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(5,1,1).p("AgNBRQAPgqAQgoQgSgngRgo");
	this.shape_319.setTransform(-4.9,-31);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(5,1,1).p("AgHBSQANgrAPgqQgVgmgUgo");
	this.shape_320.setTransform(-4.8,-30.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(5,1,1).p("AgCBTQAMgtANgrQgXgmgWgn");
	this.shape_321.setTransform(-4.6,-30.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(5,1,1).p("AAZhEIgxA/IAdBK");
	this.shape_322.setTransform(-12,-33.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(5,1,1).p("AAHBFIgghKIAzg/");
	this.shape_323.setTransform(-12,-33.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(5,1,1).p("AAIBFIghhJIAzhA");
	this.shape_324.setTransform(-12.1,-33.2);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(5,1,1).p("AAKBFIgkhIIA1hB");
	this.shape_325.setTransform(-12.1,-33.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(5,1,1).p("AAMBGIgmhIIA1hD");
	this.shape_326.setTransform(-12.1,-33);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(5,1,1).p("AANBGIgnhHIA1hE");
	this.shape_327.setTransform(-12.2,-32.9);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(5,1,1).p("AAPBGIgqhGIA3hF");
	this.shape_328.setTransform(-12.2,-32.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(5,1,1).p("AAQBGIgrhGIA3hF");
	this.shape_329.setTransform(-12.3,-32.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(5,1,1).p("AASBGIguhGIA5hF");
	this.shape_330.setTransform(-12.3,-32.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(5,1,1).p("AATBGIgvhGIA5hF");
	this.shape_331.setTransform(-12.4,-32.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(5,1,1).p("AAVBHIgxhGIA5hH");
	this.shape_332.setTransform(-12.4,-32.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(5,1,1).p("AAXBHIg0hFIA7hI");
	this.shape_333.setTransform(-12.4,-32.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(5,1,1).p("AAYBHIg1hEIA7hJ");
	this.shape_334.setTransform(-12.5,-32.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(5,1,1).p("AAZBIIg2hFIA7hK");
	this.shape_335.setTransform(-12.5,-32.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(5,1,1).p("AAYBHIg1hFIA7hI");
	this.shape_336.setTransform(-12.5,-32.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(5,1,1).p("AAWBHIgzhFIA7hI");
	this.shape_337.setTransform(-12.4,-32.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(5,1,1).p("AAUBHIgwhHIA5hG");
	this.shape_338.setTransform(-12.4,-32.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(5,1,1).p("AASBHIguhHIA5hG");
	this.shape_339.setTransform(-12.3,-32.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(5,1,1).p("AARBHIgshHIA3hG");
	this.shape_340.setTransform(-12.3,-32.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(5,1,1).p("AAOBGIgphHIA3hE");
	this.shape_341.setTransform(-12.2,-32.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(5,1,1).p("AALBGIglhJIA1hC");
	this.shape_342.setTransform(-12.1,-33);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(5,1,1).p("AAJBGIgihJIAzhC");
	this.shape_343.setTransform(-12.1,-33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122}]}).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).to({state:[{t:this.shape_335}]},30).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).to({state:[{t:this.shape_335}]},30).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_322}]},1).wait(1));

	// jg
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(5,1,1).p("AgYhvIAxBkIAAB7");
	this.shape_344.setTransform(3,-14.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(5,1,1).p("AgYhvIAxBkIgBB7");
	this.shape_345.setTransform(3,-14.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBjIgBB6");
	this.shape_346.setTransform(3,-14.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBjIgCB6");
	this.shape_347.setTransform(3.1,-14.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBiIgCB7");
	this.shape_348.setTransform(3.1,-14.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBiIgDB7");
	this.shape_349.setTransform(3.2,-14.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(5,1,1).p("AgZhtIAzBhIgEB6");
	this.shape_350.setTransform(3.2,-14.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(5,1,1).p("AgZhtIAzBhIgFB6");
	this.shape_351.setTransform(3.3,-14.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(5,1,1).p("AgZhsIAzBgIgGB5");
	this.shape_352.setTransform(3.4,-14);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(5,1,1).p("AgZhsIAzBfIgGB6");
	this.shape_353.setTransform(3.4,-14);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(5,1,1).p("AgahsIA1BfIgIB6");
	this.shape_354.setTransform(3.5,-14);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(5,1,1).p("AgahrIA1BeIgIB5");
	this.shape_355.setTransform(3.5,-13.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(5,1,1).p("AgahrIA1BeIgJB5");
	this.shape_356.setTransform(3.6,-13.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(5,1,1).p("AgahrIA1BeIgKB5");
	this.shape_357.setTransform(3.7,-13.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(5,1,1).p("AgahqIA1BcIgKB5");
	this.shape_358.setTransform(3.7,-13.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(5,1,1).p("AgbhqIA3BcIgLB5");
	this.shape_359.setTransform(3.7,-13.8);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(5,1,1).p("AgbhqIA3BcIgMB5");
	this.shape_360.setTransform(3.8,-13.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(5,1,1).p("AgbhpIA3BbIgMB4");
	this.shape_361.setTransform(3.8,-13.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(5,1,1).p("AgbhpIA3BbIgNB4");
	this.shape_362.setTransform(3.9,-13.7);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(5,1,1).p("AgahsIA0BfIgGB6");
	this.shape_363.setTransform(3.4,-14);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(5,1,1).p("AgZhtIAzBhIgGB6");
	this.shape_364.setTransform(3.4,-14.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(5,1,1).p("AgWhwQAWAvAVAuQACBFgBA/");
	this.shape_365.setTransform(2.6,-14.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(5,1,1).p("AgUhwQAUAvAVAvQABBFgDA+");
	this.shape_366.setTransform(2.4,-14.1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(5,1,1).p("AgUhxQAUAwAVAvQgCBFgEA/");
	this.shape_367.setTransform(2.2,-14.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(5,1,1).p("AgThxQATAwAUAwQgDBEgGA/");
	this.shape_368.setTransform(2,-14);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(5,1,1).p("AgShyQASAxATAwQgFBFgGA/");
	this.shape_369.setTransform(1.8,-13.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(5,1,1).p("AgShyQASAxATAwQgHBGgIA+");
	this.shape_370.setTransform(1.6,-13.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(5,1,1).p("AgRhzQARAyASAxQgJBFgJA/");
	this.shape_371.setTransform(1.4,-13.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(5,1,1).p("AgQhzQAQAxARAyQgKBGgJA+");
	this.shape_372.setTransform(1.3,-13.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(5,1,1).p("AgQh0QAQAyARAzQgMBFgKA/");
	this.shape_373.setTransform(1.1,-13.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(5,1,1).p("AgPh0QAPAyAQAzQgOBGgLA+");
	this.shape_374.setTransform(0.9,-13.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(5,1,1).p("AgOh1QAOAzAPAzQgPBGgNA/");
	this.shape_375.setTransform(0.7,-13.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(5,1,1).p("AgMh1QANAzAPA0QgQBGgPA+");
	this.shape_376.setTransform(0.4,-13.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(5,1,1).p("AgJh2QAMA0APA0QgSBGgRA/");
	this.shape_377.setTransform(0,-13.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(5,1,1).p("AgGh2QAMA0ANA1QgTBGgSA+");
	this.shape_378.setTransform(-0.4,-13.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(5,1,1).p("AgDh3IAYBqIgpCF");
	this.shape_379.setTransform(-0.8,-13.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(5,1,1).p("AgVB3QAVhDAWhBQgOg2gKgz");
	this.shape_380.setTransform(-1.1,-13.1);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(5,1,1).p("AgVB3QAVhDAWhAQgMg2gKg0");
	this.shape_381.setTransform(-1.5,-13.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(5,1,1).p("AgWB2QAWhCAXhAQgMg2gLgz");
	this.shape_382.setTransform(-1.9,-13.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(5,1,1).p("AgXB2QAXhCAYhAQgMg1gLg0");
	this.shape_383.setTransform(-2.2,-13.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(5,1,1).p("AgYB1QAYhBAZg/QgMg2gLgz");
	this.shape_384.setTransform(-2.6,-13.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(5,1,1).p("AgYB1QAYhBAZg/QgLg1gKg0");
	this.shape_385.setTransform(-2.9,-13.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(5,1,1).p("AgZB0QAZhAAag+QgKg2gLgz");
	this.shape_386.setTransform(-3.3,-13.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(5,1,1).p("AgaB0QAahAAbg+QgKg1gLg0");
	this.shape_387.setTransform(-3.7,-13.7);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(5,1,1).p("AgbBzQAbg/Acg+QgKg1gKgz");
	this.shape_388.setTransform(-4,-13.8);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(5,1,1).p("AgbBzQAbg/Acg9QgJg1gKg0");
	this.shape_389.setTransform(-4.4,-13.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(5,1,1).p("AgcByQAcg+Adg9QgJg1gJgz");
	this.shape_390.setTransform(-4.7,-14);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(5,1,1).p("AgdByQAdg+Aeg9QgIg0gKg0");
	this.shape_391.setTransform(-5.1,-14.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(5,1,1).p("AgeBxQAeg9Afg8QgIg1gJgz");
	this.shape_392.setTransform(-5.5,-14.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(5,1,1).p("AgeBxQAeg9Afg8QgHg0gJg0");
	this.shape_393.setTransform(-5.8,-14.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(5,1,1).p("AAQhvIARBlIhBB6");
	this.shape_394.setTransform(-6.1,-14.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(5,1,1).p("AANhuQAKAzAKAxQgkBHgdAy");
	this.shape_395.setTransform(-5.8,-14.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(5,1,1).p("AAJhsQAMAxAMAxQgjBGgeAx");
	this.shape_396.setTransform(-5.4,-14.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(5,1,1).p("AAGhrQAOAxANAwQgiBFgfAx");
	this.shape_397.setTransform(-5.1,-14.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(5,1,1).p("AAChqQAQAxAPAvQghBEggAx");
	this.shape_398.setTransform(-4.7,-14.8);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(5,1,1).p("AAAhoQAQAvARAvQghBEggAv");
	this.shape_399.setTransform(-4.4,-15);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(5,1,1).p("AgChnQAQAvATAuQghBDggAv");
	this.shape_400.setTransform(-4.1,-15.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(5,1,1).p("AgGhlQATAuAUAtQghBCggAu");
	this.shape_401.setTransform(-3.7,-15.3);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(5,1,1).p("AgJhkQAUAtAWAtQggBBghAu");
	this.shape_402.setTransform(-3.4,-15.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(5,1,1).p("AgNhjQAWAtAYAsQgfBBgiAt");
	this.shape_403.setTransform(-3,-15.5);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(5,1,1).p("AgQhhQAYAsAZArQgeBAgjAs");
	this.shape_404.setTransform(-2.7,-15.7);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(5,1,1).p("AgUhgQAaArAbArQgdA/gkAs");
	this.shape_405.setTransform(-2.3,-15.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(5,1,1).p("AgXhfQAbArAdAqQgcA+glAs");
	this.shape_406.setTransform(-2,-15.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(5,1,1).p("AgbhdQAdAqAfApQgbA+gmAq");
	this.shape_407.setTransform(-1.6,-16.1);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(5,1,1).p("AgehcQAfApAgApQgaA9gnAq");
	this.shape_408.setTransform(-1.3,-16.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(5,1,1).p("AgphbIBTBjIhSBU");
	this.shape_409.setTransform(-0.2,-16.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(5,1,1).p("AgkhcQAkAuAlAtQgfAzglAr");
	this.shape_410.setTransform(-0.4,-16.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(5,1,1).p("AgjhdQAjAuAkAtQgcA1giAr");
	this.shape_411.setTransform(-0.1,-16.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(5,1,1).p("AgihfQAiAvAjAuQgaA1gfAt");
	this.shape_412.setTransform(0.1,-15.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(5,1,1).p("AghhgQAhAuAiAvQgYA3gcAt");
	this.shape_413.setTransform(0.3,-15.8);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(5,1,1).p("AgghiQAgAvAhAvQgVA4gZAv");
	this.shape_414.setTransform(0.6,-15.6);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(5,1,1).p("AgfhjQAfAvAgAvQgTA6gWAv");
	this.shape_415.setTransform(0.9,-15.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(5,1,1).p("AgehlQAeAwAfAwQgQA6gTAx");
	this.shape_416.setTransform(1.1,-15.3);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(5,1,1).p("AgdhmQAdAwAeAwQgOA7gQAy");
	this.shape_417.setTransform(1.4,-15.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(5,1,1).p("AgchoQAcAxAdAwQgMA9gPAz");
	this.shape_418.setTransform(1.6,-15);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(5,1,1).p("AgbhpQAbAxAcAwQgJA+gMA0");
	this.shape_419.setTransform(1.9,-14.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(5,1,1).p("AgahrQAaAxAbAxQgHBAgJA1");
	this.shape_420.setTransform(2.2,-14.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(5,1,1).p("AgZhsQAZAxAaAyQgEBAgGA2");
	this.shape_421.setTransform(2.4,-14.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(5,1,1).p("AgYhuQAYAyAZAyQgCBCgDA3");
	this.shape_422.setTransform(2.7,-14.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(5,1,1).p("AgWhvQAWAuAVAuQADBFgCA+");
	this.shape_423.setTransform(-0.8,-11.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(5,1,1).p("AgVhvQAVAuAVAuQABBFgCA+");
	this.shape_424.setTransform(-0.9,-11.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(5,1,1).p("AgUhuQAUAuAVAuQgBBEgDA9");
	this.shape_425.setTransform(-0.9,-11.4);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(5,1,1).p("AgThuQATAuAUAuQgCBEgEA9");
	this.shape_426.setTransform(-0.8,-11.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(5,1,1).p("AgThuQATAuAUAuQgEBEgFA9");
	this.shape_427.setTransform(-0.8,-11.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(5,1,1).p("AgShuQASAuATAuQgFBEgGA9");
	this.shape_428.setTransform(-0.8,-11.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(5,1,1).p("AgRhtQARAuASAtQgGBEgHA8");
	this.shape_429.setTransform(-0.8,-11);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(5,1,1).p("AgRhtQARAuASAtQgIBEgIA8");
	this.shape_430.setTransform(-0.8,-10.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(5,1,1).p("AgQhtQAQAuARAuQgJBDgIA8");
	this.shape_431.setTransform(-0.8,-10.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(5,1,1).p("AgQhtQAQAuARAuQgLBDgJA8");
	this.shape_432.setTransform(-0.8,-10.7);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(5,1,1).p("AgPhsQAPAtAQAuQgMBDgKA7");
	this.shape_433.setTransform(-0.7,-10.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(5,1,1).p("AgPhsQAPAuAPAtQgNBDgLA7");
	this.shape_434.setTransform(-0.7,-10.5);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(5,1,1).p("AgOhsQAOAuAPAtQgPBDgMA7");
	this.shape_435.setTransform(-0.7,-10.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(5,1,1).p("AgMhsQANAuAOAuQgPBCgOA7");
	this.shape_436.setTransform(-0.8,-10.3);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(5,1,1).p("AgKhrIAbBbIghB8");
	this.shape_437.setTransform(-1,-10.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(5,1,1).p("AgQBtQAQg9ARg7QgNgzgMgu");
	this.shape_438.setTransform(-1.3,-10.4);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(5,1,1).p("AgRBtQARg8ASg7QgMg0gMgu");
	this.shape_439.setTransform(-1.6,-10.5);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(5,1,1).p("AgRBuQARg9ASg7QgLg0gLgv");
	this.shape_440.setTransform(-1.9,-10.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(5,1,1).p("AgSBvQASg9ATg7QgLg1gKgw");
	this.shape_441.setTransform(-2.2,-10.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(5,1,1).p("AgTBvQATg8AUg8QgKg1gKgw");
	this.shape_442.setTransform(-2.5,-10.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(5,1,1).p("AgUBwQAUg9AVg7QgKg2gLgx");
	this.shape_443.setTransform(-2.8,-11);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(5,1,1).p("AgVBwQAVg8AWg8QgKg2gKgx");
	this.shape_444.setTransform(-3.1,-11.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(5,1,1).p("AgWBxQAWg9AXg7QgJg3gKgy");
	this.shape_445.setTransform(-3.4,-11.3);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(5,1,1).p("AgWByQAWg9AXg8QgIg3gJgz");
	this.shape_446.setTransform(-3.7,-11.4);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(5,1,1).p("AgXByQAXg9AYg7QgIg4gIgz");
	this.shape_447.setTransform(-4,-11.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(5,1,1).p("AgYBzQAYg9AZg8QgIg4gHg0");
	this.shape_448.setTransform(-4.2,-11.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(5,1,1).p("AgZBzQAZg9Aag7QgHg5gHg0");
	this.shape_449.setTransform(-4.5,-11.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(5,1,1).p("AgaB0QAag9Abg8QgHg5gGg1");
	this.shape_450.setTransform(-4.8,-12);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(5,1,1).p("AgaB0QAag9Abg7QgGg6gFg1");
	this.shape_451.setTransform(-5.1,-12.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(5,1,1).p("AASh0IAKBxIg3B4");
	this.shape_452.setTransform(-5.4,-12.3);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(5,1,1).p("AgbBzQAbg5Acg6QgEg6gGg4");
	this.shape_453.setTransform(-5.3,-12.4);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(5,1,1).p("AgcByQAcg5Adg4QgFg6gHg4");
	this.shape_454.setTransform(-5.2,-12.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(5,1,1).p("AgdBwQAdg3Aeg4QgHg5gHg3");
	this.shape_455.setTransform(-5,-12.7);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(5,1,1).p("AgeBuQAeg2Afg2QgIg5gIg2");
	this.shape_456.setTransform(-4.8,-12.8);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(5,1,1).p("AgfBsQAfg1Agg1QgJg4gKg1");
	this.shape_457.setTransform(-4.6,-13);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(5,1,1).p("AggBrQAgg0Ahg0QgKg4gLg1");
	this.shape_458.setTransform(-4.5,-13.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(5,1,1).p("AghBpQAhgzAigzQgLg2gMg1");
	this.shape_459.setTransform(-4.3,-13.3);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(5,1,1).p("AgiBnQAigxAjgyQgNg2gMg0");
	this.shape_460.setTransform(-4.1,-13.4);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(5,1,1).p("AgjBlQAjgwAkgxQgOg1gNgz");
	this.shape_461.setTransform(-3.9,-13.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(5,1,1).p("AgkBkQAkgwAlgvQgPg1gPgz");
	this.shape_462.setTransform(-3.7,-13.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(5,1,1).p("AglBiQAlguAmgvQgQg0gQgy");
	this.shape_463.setTransform(-3.6,-13.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(5,1,1).p("AgmBgQAmgtAngtQgSg0gQgx");
	this.shape_464.setTransform(-3.4,-14);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(5,1,1).p("AgnBeQAngsAogsQgTgzgRgw");
	this.shape_465.setTransform(-3.2,-14.1);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(5,1,1).p("AgoBdQAogrApgrQgUgygSgx");
	this.shape_466.setTransform(-3,-14.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(5,1,1).p("AAChaIAoBhIhTBU");
	this.shape_467.setTransform(-2.9,-14.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(5,1,1).p("AAAhbQASAxAUAwQgmArgmAr");
	this.shape_468.setTransform(-2.5,-14.2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(5,1,1).p("AgEhdQATAyAVAvQgkAtgjAt");
	this.shape_469.setTransform(-2.2,-14);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(5,1,1).p("AgIheQATAxAWAwQghAuggAu");
	this.shape_470.setTransform(-1.9,-13.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(5,1,1).p("AgLhgQATAyAWAvQgeAwgdAw");
	this.shape_471.setTransform(-1.5,-13.7);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(5,1,1).p("AgPhhQAUAxAWAwQgbAxgaAx");
	this.shape_472.setTransform(-1.2,-13.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(5,1,1).p("AgThjQAUAyAWAxQgXAxgXAz");
	this.shape_473.setTransform(-0.9,-13.3);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(5,1,1).p("AgVhkQAVAxAWAyQgVAygTA0");
	this.shape_474.setTransform(-0.7,-13.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").ss(5,1,1).p("AgVhmQAVAyAWAyQgSAzgQA2");
	this.shape_475.setTransform(-0.7,-12.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(5,1,1).p("AgWhnQAWAxAXAyQgPA1gNA3");
	this.shape_476.setTransform(-0.7,-12.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").ss(5,1,1).p("AgWhpQAWAyAXAyQgMA2gLA5");
	this.shape_477.setTransform(-0.7,-12.5);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(5,1,1).p("AgWhqQAWAxAXAyQgJA4gJA6");
	this.shape_478.setTransform(-0.7,-12.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").ss(5,1,1).p("AgXhsQAXAyAYAyQgGA5gGA8");
	this.shape_479.setTransform(-0.7,-12.1);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(5,1,1).p("AgXhtQAXAxAYAyQgDA7gDA9");
	this.shape_480.setTransform(-0.7,-11.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").ss(5,1,1).p("AAZh4IgwBkIgBCN");
	this.shape_481.setTransform(-4.3,-12.1);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(5,1,1).p("AAYh4QgYAygXAyQABBJAABE");
	this.shape_482.setTransform(-4.2,-12.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").ss(5,1,1).p("AAXh3QgXAygWAyQACBIABBD");
	this.shape_483.setTransform(-4.1,-12.3);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(5,1,1).p("AAWh2QgWAygVAyQADBHACBC");
	this.shape_484.setTransform(-4.1,-12.4);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").ss(5,1,1).p("AAVh2QgVAygUAyQADBHAEBC");
	this.shape_485.setTransform(-4,-12.5);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(5,1,1).p("AAUh1QgUAygTAyQAEBGAFBB");
	this.shape_486.setTransform(-4,-12.6);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(5,1,1).p("AAUh1QgUAygTAyQAGBGAGBB");
	this.shape_487.setTransform(-3.9,-12.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(5,1,1).p("AATh0QgTAygSAyQAHBFAHBA");
	this.shape_488.setTransform(-3.8,-12.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(5,1,1).p("AAShzQgSAygRAyQAIBEAIA/");
	this.shape_489.setTransform(-3.8,-12.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(5,1,1).p("AARhzQgRAygQAyQAJBEAHA/");
	this.shape_490.setTransform(-3.7,-13);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").ss(5,1,1).p("AAQhyQgQAygPAyQAKBDAIA+");
	this.shape_491.setTransform(-3.7,-13.1);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(5,1,1).p("AAPhyQgPAygOAyQALBDAJA+");
	this.shape_492.setTransform(-3.6,-13.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").ss(5,1,1).p("AAPhxQgPAygOAyQAMBCALA9");
	this.shape_493.setTransform(-3.5,-13.3);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(5,1,1).p("AAOhwQgOAygNAyQANBBAMA8");
	this.shape_494.setTransform(-3.5,-13.4);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").ss(5,1,1).p("AAMhwQgMAygNAyQANBBAOA8");
	this.shape_495.setTransform(-3.3,-13.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(5,1,1).p("AAKhvIgYBqIAeB1");
	this.shape_496.setTransform(-3.1,-13.6);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").ss(5,1,1).p("AAGhwQgJAsgLAtQAOBMAPA8");
	this.shape_497.setTransform(-2.8,-13.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(5,1,1).p("AAEhxQgJAtgKAtQAPBNAQA8");
	this.shape_498.setTransform(-2.6,-13.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").ss(5,1,1).p("AAChyQgIAugLAtQARBNASA9");
	this.shape_499.setTransform(-2.5,-13.4);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(5,1,1).p("AABhzQgJAugKAuQASBOATA9");
	this.shape_500.setTransform(-2.4,-13.4);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").ss(5,1,1).p("AAAhzQgJAugKAuQATBOAUA9");
	this.shape_501.setTransform(-2.3,-13.3);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(5,1,1).p("AgBh0QgKAvgKAuQAVBPAWA9");
	this.shape_502.setTransform(-2.1,-13.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").ss(5,1,1).p("AgDh1QgJAvgKAvQAXBPAWA+");
	this.shape_503.setTransform(-2,-13.2);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(5,1,1).p("AgEh2QgKAwgJAvQAYBPAXA/");
	this.shape_504.setTransform(-1.9,-13.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").ss(5,1,1).p("AgGh3QgJAwgKAwQAaBQAZA/");
	this.shape_505.setTransform(-1.8,-13.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(5,1,1).p("AgIh4QgJAxgJAwQAcBQAZBA");
	this.shape_506.setTransform(-1.6,-13);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(5,1,1).p("AgKh4QgIAxgKAwQAeBRAbA/");
	this.shape_507.setTransform(-1.5,-13);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(5,1,1).p("AgLh5QgJAxgJAyQAgBQAbBA");
	this.shape_508.setTransform(-1.4,-12.9);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").ss(5,1,1).p("AgNh6QgIAygJAyQAhBRAcBA");
	this.shape_509.setTransform(-1.3,-12.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(5,1,1).p("AgPh7QgIAzgJAyQAkBRAdBB");
	this.shape_510.setTransform(-1.1,-12.8);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").ss(5,1,1).p("AgRh8IgQBmIBDCT");
	this.shape_511.setTransform(-1,-12.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(5,1,1).p("AgOh6QgJAygJAyQAIASAHAPQAYA4AaA4");
	this.shape_512.setTransform(-1.2,-12.9);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").ss(5,1,1).p("AgMh3QgJAxgJAwQAGASAHAPQAXA3AaA2");
	this.shape_513.setTransform(-1.4,-13.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(5,1,1).p("AgJh1QgKAwgKAwQAFARAGAPQAXA2AZA1");
	this.shape_514.setTransform(-1.7,-13.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").ss(5,1,1).p("AgHhzQgKAvgLAvQAFARAEAPQAXA0AZA1");
	this.shape_515.setTransform(-1.9,-13.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(5,1,1).p("AgFhxQgLAugLAuQAEARADAOQAXA0AZA0");
	this.shape_516.setTransform(-2.1,-13.6);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").ss(5,1,1).p("AgChuQgMAtgLAsQACARADAOQAWAzAYAy");
	this.shape_517.setTransform(-2.3,-13.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(5,1,1).p("AAAhsQgMAsgMAsQABAQACAOQAWAyAYAx");
	this.shape_518.setTransform(-2.5,-13.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").ss(5,1,1).p("AAAhqQgKArgNArQABAQAAANQAWAxAYAx");
	this.shape_519.setTransform(-2.7,-14.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(5,1,1).p("AADhoQgLAqgNAqQgBAQAAANQAWAwAXAw");
	this.shape_520.setTransform(-3,-14.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").ss(5,1,1).p("AAGhmQgLApgOApQgBAQgCANQAWAvAXAv");
	this.shape_521.setTransform(-3.3,-14.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(5,1,1).p("AAKhjQgNAogOAnQgCAQgDANQAWAuAXAt");
	this.shape_522.setTransform(-3.6,-14.6);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").ss(5,1,1).p("AANhhQgNAngPAnQgDAPgDAMQAVAtAWAt");
	this.shape_523.setTransform(-4,-14.8);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(5,1,1).p("AAQhfQgPAmgNAmQgFAPgEAMQAVAsAWAs");
	this.shape_524.setTransform(-4.3,-14.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").ss(5,1,1).p("AAUhdQgQAlgOAlQgFAPgGAMQAVArAWAr");
	this.shape_525.setTransform(-4.6,-15.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(5,1,1).p("AAWhbIgrBjIAqBU");
	this.shape_526.setTransform(-4.8,-15.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").ss(5,1,1).p("AARBdQgSgrgUgrQAYg5ATgq");
	this.shape_527.setTransform(-4.8,-15);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(5,1,1).p("AAOBfQgRgsgTgsQAZg6AUgr");
	this.shape_528.setTransform(-4.7,-14.8);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").ss(5,1,1).p("AAKBhQgPgtgRguQAYg7AVgr");
	this.shape_529.setTransform(-4.7,-14.6);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(5,1,1).p("AAHBjQgOgugPgvQAYg8AVgs");
	this.shape_530.setTransform(-4.7,-14.4);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").ss(5,1,1).p("AADBlQgLgwgOgwQAYg8AVgt");
	this.shape_531.setTransform(-4.6,-14.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(5,1,1).p("AAABnQgKgxgMgxQAYg+AVgt");
	this.shape_532.setTransform(-4.6,-14);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").ss(5,1,1).p("AgCBpQgKgygKgyQAXg/AWgu");
	this.shape_533.setTransform(-4.5,-13.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(5,1,1).p("AgFBrQgJgzgJg0QAYg/AXgv");
	this.shape_534.setTransform(-4.5,-13.6);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").ss(5,1,1).p("AgJBtQgHg1gHg0QAYhBAXgv");
	this.shape_535.setTransform(-4.5,-13.4);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(5,1,1).p("AgMBvQgGg2gFg2QAYhBAXgw");
	this.shape_536.setTransform(-4.4,-13.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").ss(5,1,1).p("AgQBxQgDg3gEg3QAXhCAYgx");
	this.shape_537.setTransform(-4.4,-13);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(5,1,1).p("AgTByQgCg3gCg4QAXhEAYgw");
	this.shape_538.setTransform(-4.3,-12.8);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").ss(5,1,1).p("AgXB0QAAg5AAg5QAXhEAYgx");
	this.shape_539.setTransform(-4.3,-12.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(5,1,1).p("AAah1IgwBkIgDCH");
	this.shape_540.setTransform(-4.4,-12.4);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").ss(5,1,1).p("AgYheIAxBiIgSBb");
	this.shape_541.setTransform(3,-16);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(5,1,1).p("AgXhfIAvBhIgQBe");
	this.shape_542.setTransform(2.9,-15.8);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").ss(5,1,1).p("AgWhgIAtBgIgOBh");
	this.shape_543.setTransform(2.9,-15.6);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(5,1,1).p("AgVhhIArBhIgMBi");
	this.shape_544.setTransform(2.8,-15.4);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").ss(5,1,1).p("AgUhiIApBgIgKBl");
	this.shape_545.setTransform(2.8,-15.2);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(5,1,1).p("AgThjIAnBgIgJBn");
	this.shape_546.setTransform(2.7,-15.1);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").ss(5,1,1).p("AgShkIAlBfIgHBq");
	this.shape_547.setTransform(2.7,-14.9);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(5,1,1).p("AgRhlIAjBeIgFBt");
	this.shape_548.setTransform(2.6,-14.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").ss(5,1,1).p("AgQhmIAhBdIgDBw");
	this.shape_549.setTransform(2.6,-14.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(5,1,1).p("AgPhnIAfBcIgCBz");
	this.shape_550.setTransform(2.5,-14.3);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").ss(5,1,1).p("AgOhoIAdBbIAAB2");
	this.shape_551.setTransform(2.5,-14.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(5,1,1).p("AgOhpIAcBbIABB4");
	this.shape_552.setTransform(2.5,-14);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").ss(5,1,1).p("AgOhqIAaBaIADB7");
	this.shape_553.setTransform(2.5,-13.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(5,1,1).p("AgOhrIAYBZIAFB9");
	this.shape_554.setTransform(2.6,-13.6);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").ss(5,1,1).p("AgOhsIAZBaIAEB/");
	this.shape_555.setTransform(2.5,-13.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(5,1,1).p("AgOhtIAZBaIAECB");
	this.shape_556.setTransform(2.5,-13.5);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").ss(5,1,1).p("AgPhuIAbBbIAECC");
	this.shape_557.setTransform(2.5,-13.4);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(5,1,1).p("AgPhwIAbBcIAECF");
	this.shape_558.setTransform(2.5,-13.4);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").ss(5,1,1).p("AgPhxIAcBdIADCG");
	this.shape_559.setTransform(2.5,-13.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(5,1,1).p("AgPhyIAdBdIACCI");
	this.shape_560.setTransform(2.5,-13.3);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").ss(5,1,1).p("AgQhzIAeBeIADCJ");
	this.shape_561.setTransform(2.5,-13.2);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(5,1,1).p("AgQh1IAfBfIACCM");
	this.shape_562.setTransform(2.5,-13.2);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#000000").ss(5,1,1).p("AgQh2IAfBgIACCN");
	this.shape_563.setTransform(2.4,-13.1);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(5,1,1).p("AgQh3IAgBgIABCP");
	this.shape_564.setTransform(2.4,-13.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#000000").ss(5,1,1).p("AgQh4IAhBhIAACQ");
	this.shape_565.setTransform(2.4,-13);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").ss(5,1,1).p("AgRh6IAiBjIABCS");
	this.shape_566.setTransform(2.4,-12.9);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#000000").ss(5,1,1).p("AgRh7IAjBjIAACU");
	this.shape_567.setTransform(2.4,-12.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").ss(5,1,1).p("AgRh8IAjBkIAACV");
	this.shape_568.setTransform(2.4,-12.8);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#000000").ss(5,1,1).p("AgSh9IAlBkIgBCX");
	this.shape_569.setTransform(2.4,-12.8);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").ss(5,1,1).p("AgSh/IAlBmIgBCZ");
	this.shape_570.setTransform(2.4,-12.7);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#000000").ss(5,1,1).p("AgRh5IAiBiIABCR");
	this.shape_571.setTransform(2.4,-13);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").ss(5,1,1).p("AgQh4IAgBhIABCQ");
	this.shape_572.setTransform(2.4,-13);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#000000").ss(5,1,1).p("AgQh3IAgBhIABCO");
	this.shape_573.setTransform(2.4,-13.1);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").ss(5,1,1).p("AgQh0IAeBfIADCK");
	this.shape_574.setTransform(2.5,-13.2);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#000000").ss(5,1,1).p("AgPhzIAdBeIACCJ");
	this.shape_575.setTransform(2.5,-13.3);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").ss(5,1,1).p("AgPhwIAcBcIADCF");
	this.shape_576.setTransform(2.5,-13.4);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#000000").ss(5,1,1).p("AgPhvIAbBcIAECD");
	this.shape_577.setTransform(2.5,-13.4);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").ss(5,1,1).p("AgOhpIAbBaIACB5");
	this.shape_578.setTransform(2.5,-13.9);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#000000").ss(5,1,1).p("AgPhnIAfBbIgBB0");
	this.shape_579.setTransform(2.5,-14.2);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").ss(5,1,1).p("AgQhmIAhBcIgDBx");
	this.shape_580.setTransform(2.5,-14.4);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#000000").ss(5,1,1).p("AgThjIAnBfIgIBo");
	this.shape_581.setTransform(2.7,-15);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").ss(5,1,1).p("AgUhiIApBhIgLBk");
	this.shape_582.setTransform(2.8,-15.3);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#000000").ss(5,1,1).p("AgWhgIAtBhIgOBg");
	this.shape_583.setTransform(2.9,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_344}]}).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_541}]},1).wait(1));

	// c
	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AguhbIBdAfIgnCXIg2i2").cp();
	this.shape_584.setTransform(-2.7,-32.2);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AguhbIBdAfIgnCYIg2i3").cp();
	this.shape_585.setTransform(-2.7,-32.6);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AguhaIBdAeIgnCYIg2i2").cp();
	this.shape_586.setTransform(-2.7,-32.2);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("Ag9hRIB7gKIg7C3IhAit").cp();
	this.shape_587.setTransform(-2.1,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_584}]},60).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_587}]},1).to({state:[]},1).to({state:[]},60).wait(60));

	// bd
	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").ss(5,1,1).p("AgXhWIAvBKIgZBj");
	this.shape_588.setTransform(8,-31.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#000000").ss(5,1,1).p("AgWhVIAtBKIgXBh");
	this.shape_589.setTransform(7.9,-31.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").ss(5,1,1).p("AgVhVIArBKIgWBh");
	this.shape_590.setTransform(7.7,-31.6);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#000000").ss(5,1,1).p("AgUhUIApBKIgVBf");
	this.shape_591.setTransform(7.7,-31.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").ss(5,1,1).p("AgThUIAnBKIgTBf");
	this.shape_592.setTransform(7.6,-31.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#000000").ss(5,1,1).p("AgThUIAnBKIgSBf");
	this.shape_593.setTransform(7.5,-31.5);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").ss(5,1,1).p("AgShTIAlBJIgRBe");
	this.shape_594.setTransform(7.4,-31.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#000000").ss(5,1,1).p("AgRhTIAjBKIgPBd");
	this.shape_595.setTransform(7.3,-31.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#000000").ss(5,1,1).p("AgQhTIAhBKIgNBd");
	this.shape_596.setTransform(7.3,-31.5);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#000000").ss(5,1,1).p("AgPhSIAfBJIgLBc");
	this.shape_597.setTransform(7.2,-31.5);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#000000").ss(5,1,1).p("AgPhSIAfBJIgKBc");
	this.shape_598.setTransform(7.1,-31.5);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#000000").ss(5,1,1).p("AgOhSIAdBKIgJBb");
	this.shape_599.setTransform(7,-31.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#000000").ss(5,1,1).p("AgNhRIAbBJIgHBa");
	this.shape_600.setTransform(7,-31.5);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#000000").ss(5,1,1).p("AgMhRIAZBJIgFBa");
	this.shape_601.setTransform(6.9,-31.5);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#000000").ss(5,1,1).p("AgLhRIAXBJIgDBa");
	this.shape_602.setTransform(6.8,-31.5);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#000000").ss(5,1,1).p("AgLhRIAXBKIgCBZ");
	this.shape_603.setTransform(6.7,-31.5);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIAVBJIgBBY");
	this.shape_604.setTransform(6.6,-31.5);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIAUBJIABBY");
	this.shape_605.setTransform(6.6,-31.4);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIASBJIADBY");
	this.shape_606.setTransform(6.6,-31.4);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIAQBJIAFBW");
	this.shape_607.setTransform(6.6,-31.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIAPBJIAGBW");
	this.shape_608.setTransform(6.6,-31.4);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIANBJIAIBW");
	this.shape_609.setTransform(6.6,-31.4);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#000000").ss(5,1,1).p("AgKhOIAMBIIAJBV");
	this.shape_610.setTransform(6.6,-31.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#000000").ss(5,1,1).p("AgKhOIAKBJIALBU");
	this.shape_611.setTransform(6.6,-31.4);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAJBIIAMBT");
	this.shape_612.setTransform(6.6,-31.4);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAHBIIAOBT");
	this.shape_613.setTransform(6.6,-31.4);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAGBJIAPBS");
	this.shape_614.setTransform(6.6,-31.4);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAEBJIARBS");
	this.shape_615.setTransform(6.6,-31.4);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#000000").ss(5,1,1).p("AgKhOIALBJIAKBU");
	this.shape_616.setTransform(6.6,-31.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIAOBJIAHBW");
	this.shape_617.setTransform(6.6,-31.4);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIASBJIADBX");
	this.shape_618.setTransform(6.6,-31.4);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIATBJIACBY");
	this.shape_619.setTransform(6.6,-31.4);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIAVBJIAABY");
	this.shape_620.setTransform(6.6,-31.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#000000").ss(5,1,1).p("AgLhRIAXBKIgDBZ");
	this.shape_621.setTransform(6.8,-31.5);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#000000").ss(5,1,1).p("AgNhRIAbBJIgGBa");
	this.shape_622.setTransform(6.9,-31.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#000000").ss(5,1,1).p("AgNhSIAbBKIgHBb");
	this.shape_623.setTransform(7,-31.5);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#000000").ss(5,1,1).p("AgOhSIAdBJIgJBc");
	this.shape_624.setTransform(7.1,-31.5);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#000000").ss(5,1,1).p("AgQhTIAhBKIgMBd");
	this.shape_625.setTransform(7.2,-31.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#000000").ss(5,1,1).p("Ahag0IBYBOIBdAb");
	this.shape_626.setTransform(4.4,-33.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#000000").ss(5,1,1).p("ABXA2QgugOgsgPQgqgmgpgo");
	this.shape_627.setTransform(3.9,-33.5);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#000000").ss(5,1,1).p("ABUA3QgtgPgrgQQgngmgogo");
	this.shape_628.setTransform(3.4,-33.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#000000").ss(5,1,1).p("ABQA4QgsgQgqgSQgkglglgo");
	this.shape_629.setTransform(2.9,-33.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#000000").ss(5,1,1).p("ABNA5QgrgSgpgSQgiglgjgo");
	this.shape_630.setTransform(2.4,-33.3);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#000000").ss(5,1,1).p("ABKA6QgqgTgogTQggglghgo");
	this.shape_631.setTransform(1.9,-33.3);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#000000").ss(5,1,1).p("ABGA7QgogUgngUQgegmgegn");
	this.shape_632.setTransform(1.4,-33.2);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#000000").ss(5,1,1).p("ABDA8QgogVglgVQgcgmgcgn");
	this.shape_633.setTransform(0.9,-33.2);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#000000").ss(5,1,1).p("AA/A9QgmgWgkgWQgZgmgagn");
	this.shape_634.setTransform(0.3,-33.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#000000").ss(5,1,1).p("AA8A+QglgXgjgXQgXgmgYgn");
	this.shape_635.setTransform(-0.1,-33);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#000000").ss(5,1,1).p("AA4A/QgkgYghgYQgVgmgVgn");
	this.shape_636.setTransform(-0.6,-33);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#000000").ss(5,1,1).p("AA1BAQgjgZghgaQgSglgTgn");
	this.shape_637.setTransform(-1.1,-32.9);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#000000").ss(5,1,1).p("AAxBBQghgagggbQgQglgQgn");
	this.shape_638.setTransform(-1.6,-32.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#000000").ss(5,1,1).p("AAuBCQgggbgfgcQgOglgOgn");
	this.shape_639.setTransform(-2.1,-32.8);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#000000").ss(5,1,1).p("AAqBDQgfgcgdgdQgLglgMgn");
	this.shape_640.setTransform(-2.6,-32.8);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#000000").ss(5,1,1).p("AAnBEQgegdgcgeQgJglgKgn");
	this.shape_641.setTransform(-3.1,-32.7);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#000000").ss(5,1,1).p("AAkBFQgdgegbgfQgHglgIgn");
	this.shape_642.setTransform(-3.6,-32.7);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#000000").ss(5,1,1).p("AAgBGQgcgfgZggQgFglgFgn");
	this.shape_643.setTransform(-4.1,-32.6);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#000000").ss(5,1,1).p("AAdBHQgbgggYghQgDglgDgn");
	this.shape_644.setTransform(-4.6,-32.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#000000").ss(5,1,1).p("AAZBIQgZgigXghQgBglAAgn");
	this.shape_645.setTransform(-5.1,-32.5);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgjQADgkABgn");
	this.shape_646.setTransform(-5.8,-32.5);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#000000").ss(5,1,1).p("AAXBKQgXgkgWgkQAFgkAEgn");
	this.shape_647.setTransform(-6.5,-32.4);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#000000").ss(5,1,1).p("AAVBLQgVglgUglQAGgkAHgn");
	this.shape_648.setTransform(-7.2,-32.4);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#000000").ss(5,1,1).p("AAUBMQgUgmgTgmQAJgkAIgn");
	this.shape_649.setTransform(-8,-32.3);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#000000").ss(5,1,1).p("AATBNQgTgngSgmQALglAJgn");
	this.shape_650.setTransform(-8.7,-32.2);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#000000").ss(5,1,1).p("AASBOQgSgogRgmQAOgnALgm");
	this.shape_651.setTransform(-9.4,-32.2);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#000000").ss(5,1,1).p("AARBPQgRgpgQgnQAQgnAOgm");
	this.shape_652.setTransform(-10.2,-32.1);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#000000").ss(5,1,1).p("AAOBQQgOgqgQgoQAQgnARgm");
	this.shape_653.setTransform(-10.7,-32.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#000000").ss(5,1,1).p("AAJBRQgNgrgPgqQATgmAUgm");
	this.shape_654.setTransform(-11.1,-32);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#000000").ss(5,1,1).p("AAEBSQgLgsgOgrQAVgmAWgm");
	this.shape_655.setTransform(-11.5,-32);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#000000").ss(5,1,1).p("AAYhSIgvBMIAXBZ");
	this.shape_656.setTransform(-11.9,-31.9);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#000000").ss(5,1,1).p("AAFBSQgMgsgOgrQAVgmAWgm");
	this.shape_657.setTransform(-11.5,-32);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#000000").ss(5,1,1).p("AAJBRQgNgrgPgpQATgnAUgm");
	this.shape_658.setTransform(-11.1,-32);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#000000").ss(5,1,1).p("AAOBQQgOgqgQgoQAQgmARgn");
	this.shape_659.setTransform(-10.7,-32.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#000000").ss(5,1,1).p("AARBPQgRgpgQgnQAQgmANgn");
	this.shape_660.setTransform(-10.1,-32.1);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#000000").ss(5,1,1).p("AASBOQgSgogRgmQANgmALgn");
	this.shape_661.setTransform(-9.3,-32.2);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#000000").ss(5,1,1).p("AATBNQgTgngSgmQALglAIgn");
	this.shape_662.setTransform(-8.6,-32.3);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#000000").ss(5,1,1).p("AAUBMQgUgmgTgmQAIgkAIgn");
	this.shape_663.setTransform(-7.8,-32.3);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#000000").ss(5,1,1).p("AAWBLQgWglgVglQAGgkAGgn");
	this.shape_664.setTransform(-7,-32.4);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#000000").ss(5,1,1).p("AAXBKQgXgkgWgjQAEglADgn");
	this.shape_665.setTransform(-6.3,-32.4);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgiQABglABgn");
	this.shape_666.setTransform(-5.5,-32.5);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#000000").ss(5,1,1).p("AAbBIQgaghgYgiQgBglgCgn");
	this.shape_667.setTransform(-4.9,-32.5);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#000000").ss(5,1,1).p("AAeBHQgbgggZghQgDglgEgn");
	this.shape_668.setTransform(-4.4,-32.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#000000").ss(5,1,1).p("AAiBGQgdgfgaggQgFglgHgn");
	this.shape_669.setTransform(-3.9,-32.6);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#000000").ss(5,1,1).p("AAlBFQgdgegcgfQgIglgIgn");
	this.shape_670.setTransform(-3.3,-32.7);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#000000").ss(5,1,1).p("AApBEQgfgdgcgdQgLglgLgo");
	this.shape_671.setTransform(-2.8,-32.8);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#000000").ss(5,1,1).p("AAsBDQgfgcgegcQgNglgNgo");
	this.shape_672.setTransform(-2.3,-32.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#000000").ss(5,1,1).p("AAwBCQghgbgfgbQgPglgQgo");
	this.shape_673.setTransform(-1.8,-32.9);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#000000").ss(5,1,1).p("AAzBBQgigagggaQgRglgSgo");
	this.shape_674.setTransform(-1.3,-32.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#000000").ss(5,1,1).p("AA3BAQgjgZgigZQgUglgUgo");
	this.shape_675.setTransform(-0.7,-33);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#000000").ss(5,1,1).p("AA7A/QglgYgjgYQgWglgXgo");
	this.shape_676.setTransform(-0.2,-33);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("#000000").ss(5,1,1).p("AA+A+QgmgXgjgWQgZgmgZgo");
	this.shape_677.setTransform(0.2,-33.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#000000").ss(5,1,1).p("ABCA8QgngVglgVQgbgmgcgn");
	this.shape_678.setTransform(0.7,-33.1);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#000000").ss(5,1,1).p("ABFA7QgogUgmgUQgegmgdgn");
	this.shape_679.setTransform(1.3,-33.2);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#000000").ss(5,1,1).p("ABJA6QgqgTgngTQgggmgggn");
	this.shape_680.setTransform(1.8,-33.2);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#000000").ss(5,1,1).p("ABMA5QgqgSgpgSQgigmgign");
	this.shape_681.setTransform(2.3,-33.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#000000").ss(5,1,1).p("ABQA4QgsgQgqgSQgkgmglgn");
	this.shape_682.setTransform(2.8,-33.4);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#000000").ss(5,1,1).p("ABUA3QgtgPgsgRQgmglgogo");
	this.shape_683.setTransform(3.3,-33.4);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#000000").ss(5,1,1).p("Agwg7IAEBbIBdAc");
	this.shape_684.setTransform(8.6,-34.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#000000").ss(5,1,1).p("AAvA9QgugPgtgPQgBgsgBgv");
	this.shape_685.setTransform(8.4,-34.1);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#000000").ss(5,1,1).p("AAtA9QgtgPgrgQQgBgsAAgu");
	this.shape_686.setTransform(8.2,-34);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#000000").ss(5,1,1).p("AArA+QgrgRgqgRQAAgrABgu");
	this.shape_687.setTransform(7.9,-33.9);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#000000").ss(5,1,1).p("AAqA/QgqgSgpgSQABgrACgu");
	this.shape_688.setTransform(7.6,-33.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#000000").ss(5,1,1).p("AApBAQgpgTgogTQACgrADgu");
	this.shape_689.setTransform(7.3,-33.8);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#000000").ss(5,1,1).p("AAoBAQgogTgngVQADgrAEgs");
	this.shape_690.setTransform(7,-33.7);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#000000").ss(5,1,1).p("AAnBBQgngVgmgVQAEgrAFgs");
	this.shape_691.setTransform(6.7,-33.6);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#000000").ss(5,1,1).p("AAmBCQgmgWglgWQAGgrAFgs");
	this.shape_692.setTransform(6.5,-33.5);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#000000").ss(5,1,1).p("AAlBDQglgXgkgYQAHgqAGgs");
	this.shape_693.setTransform(6.2,-33.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#000000").ss(5,1,1).p("AAjBEQgjgZgigYQAHgqAGgs");
	this.shape_694.setTransform(5.9,-33.4);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#000000").ss(5,1,1).p("AAiBEQgigZghgZQAIgqAHgr");
	this.shape_695.setTransform(5.6,-33.3);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#000000").ss(5,1,1).p("AAhBFQghgagggbQAJgpAIgr");
	this.shape_696.setTransform(5.3,-33.2);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#000000").ss(5,1,1).p("AAgBGQgggbgfgcQAKgpAJgr");
	this.shape_697.setTransform(5,-33.1);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#000000").ss(5,1,1).p("AAfBHQgfgdgegcQALgpAKgr");
	this.shape_698.setTransform(4.7,-33);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#000000").ss(5,1,1).p("AAeBHQgegdgcgeQALgoALgr");
	this.shape_699.setTransform(4.5,-33);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#000000").ss(5,1,1).p("AAcBIQgcgegbgfQAMgoAMgq");
	this.shape_700.setTransform(4.2,-32.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#000000").ss(5,1,1).p("AAbBJQgbgggagfQANgoANgq");
	this.shape_701.setTransform(3.9,-32.8);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#000000").ss(5,1,1).p("AAaBKQgaghgZghQAOgnAMgq");
	this.shape_702.setTransform(3.6,-32.7);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#000000").ss(5,1,1).p("AAZBLQgZgigYgiQAPgnANgq");
	this.shape_703.setTransform(3.3,-32.6);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#000000").ss(5,1,1).p("AAYBLQgYgigXgjQAQgnAOgp");
	this.shape_704.setTransform(3,-32.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#000000").ss(5,1,1).p("AAXBMQgXgkgWgkQARgmAPgp");
	this.shape_705.setTransform(2.7,-32.5);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#000000").ss(5,1,1).p("AAVBNQgVglgUglQARgmAQgp");
	this.shape_706.setTransform(2.4,-32.4);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#000000").ss(5,1,1).p("AAUBOQgUgmgTgmQATgmAQgp");
	this.shape_707.setTransform(2.2,-32.3);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#000000").ss(5,1,1).p("AATBPQgTgogSgnQASglATgp");
	this.shape_708.setTransform(1.9,-32.2);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#000000").ss(5,1,1).p("AAQBPQgQgogTgnQATgnAUgn");
	this.shape_709.setTransform(1.8,-32.1);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#000000").ss(5,1,1).p("AANBQQgQgpgRgnQAUgoAVgn");
	this.shape_710.setTransform(1.7,-32.1);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#000000").ss(5,1,1).p("AAJBRQgOgqgQgpQAVgnAWgn");
	this.shape_711.setTransform(1.6,-32);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#000000").ss(5,1,1).p("AAGBSQgNgsgOgpQAVgnAWgn");
	this.shape_712.setTransform(1.5,-31.9);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#000000").ss(5,1,1).p("AADBSQgMgsgNgqQAWgnAXgm");
	this.shape_713.setTransform(1.5,-31.8);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#000000").ss(5,1,1).p("AAGBSQgMgsgPgpQAVgnAWgn");
	this.shape_714.setTransform(1.5,-31.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#000000").ss(5,1,1).p("AAKBRQgOgqgQgpQAUgmAVgo");
	this.shape_715.setTransform(1.6,-32);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#000000").ss(5,1,1).p("AANBQQgPgpgSgnQAUgnAVgo");
	this.shape_716.setTransform(1.7,-32.1);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#000000").ss(5,1,1).p("AAQBPQgQgogTgnQATgmAUgo");
	this.shape_717.setTransform(1.8,-32.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#000000").ss(5,1,1).p("AATBOQgTgmgSgnQASgmASgo");
	this.shape_718.setTransform(1.9,-32.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#000000").ss(5,1,1).p("AAUBOQgUgmgTgmQASgmAQgp");
	this.shape_719.setTransform(2.2,-32.3);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#000000").ss(5,1,1).p("AAWBNQgWglgVglQASgmAPgp");
	this.shape_720.setTransform(2.5,-32.4);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#000000").ss(5,1,1).p("AAXBMQgXgkgWgjQARgnAOgp");
	this.shape_721.setTransform(2.8,-32.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#000000").ss(5,1,1).p("AAYBLQgYgigXgjQAQgnANgp");
	this.shape_722.setTransform(3.1,-32.6);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#000000").ss(5,1,1).p("AAZBKQgZghgYgiQAOgnANgp");
	this.shape_723.setTransform(3.4,-32.7);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#000000").ss(5,1,1).p("AAaBKQgaghgZggQANgoAMgq");
	this.shape_724.setTransform(3.7,-32.7);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#000000").ss(5,1,1).p("AAcBJQgcgfgbggQANgoANgq");
	this.shape_725.setTransform(4,-32.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#000000").ss(5,1,1).p("AAdBIQgdgegcgeQAMgpAMgq");
	this.shape_726.setTransform(4.3,-32.9);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#000000").ss(5,1,1).p("AAeBHQgegdgdgdQALgoALgr");
	this.shape_727.setTransform(4.6,-33);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#000000").ss(5,1,1).p("AAfBGQgfgcgegcQAKgoAKgr");
	this.shape_728.setTransform(4.9,-33.1);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#000000").ss(5,1,1).p("AAhBFQghgagggbQAKgpAJgr");
	this.shape_729.setTransform(5.2,-33.2);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#000000").ss(5,1,1).p("AAiBFQgigaghgaQAJgpAIgs");
	this.shape_730.setTransform(5.5,-33.2);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#000000").ss(5,1,1).p("AAjBEQgjgZgigZQAHgpAIgs");
	this.shape_731.setTransform(5.8,-33.3);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#000000").ss(5,1,1).p("AAkBDQgkgXgjgYQAGgqAGgs");
	this.shape_732.setTransform(6.1,-33.4);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#000000").ss(5,1,1).p("AAlBCQglgWgkgXQAFgqAFgs");
	this.shape_733.setTransform(6.4,-33.5);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#000000").ss(5,1,1).p("AAnBBQgngVgmgVQAFgrAEgs");
	this.shape_734.setTransform(6.7,-33.6);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#000000").ss(5,1,1).p("AAoBBQgogVgngUQAEgrADgt");
	this.shape_735.setTransform(7,-33.7);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#000000").ss(5,1,1).p("AApBAQgpgTgogUQADgrACgt");
	this.shape_736.setTransform(7.3,-33.8);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#000000").ss(5,1,1).p("AAqA/QgqgSgpgSQACgsABgt");
	this.shape_737.setTransform(7.6,-33.8);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#000000").ss(5,1,1).p("AArA+QgrgRgqgRQAAgsABgt");
	this.shape_738.setTransform(7.9,-33.9);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#000000").ss(5,1,1).p("AAtA9QgtgPgrgRQgBgrAAgu");
	this.shape_739.setTransform(8.1,-34);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#000000").ss(5,1,1).p("AAthDIgSBZIhHAu");
	this.shape_740.setTransform(-0.4,-33.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#000000").ss(5,1,1).p("AgqBFQAkgYAhgYQAIgrAIgu");
	this.shape_741.setTransform(-0.2,-33.4);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#000000").ss(5,1,1).p("AgoBFQAjgYAhgZQAGgrAHgt");
	this.shape_742.setTransform(-0.1,-33.4);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#000000").ss(5,1,1).p("AgmBGQAigZAggaQAGgrAFgt");
	this.shape_743.setTransform(0,-33.3);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#000000").ss(5,1,1).p("AgkBGQAhgaAfgaQAFgrAEgs");
	this.shape_744.setTransform(0.2,-33.3);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAhgbAegbQADgqADgt");
	this.shape_745.setTransform(0.3,-33.2);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#000000").ss(5,1,1).p("AggBHQAggbAdgcQACgqACgs");
	this.shape_746.setTransform(0.5,-33.2);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#000000").ss(5,1,1).p("AgeBIQAegcAdgdQABgqABgs");
	this.shape_747.setTransform(0.6,-33.1);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#000000").ss(5,1,1).p("AgcBIQAcgdAdgdQAAgqAAgr");
	this.shape_748.setTransform(0.8,-33.1);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#000000").ss(5,1,1).p("AgcBJQAcgeAdgeQgBgpgCgs");
	this.shape_749.setTransform(1.1,-33);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAbgeAcgfQgCgpgDgr");
	this.shape_750.setTransform(1.4,-33);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#000000").ss(5,1,1).p("AgaBKQAagfAbggQgDgpgEgr");
	this.shape_751.setTransform(1.6,-32.9);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#000000").ss(5,1,1).p("AgZBKQAZggAaggQgEgpgFgq");
	this.shape_752.setTransform(1.9,-32.9);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#000000").ss(5,1,1).p("AgYBLQAYghAZghQgFgogGgr");
	this.shape_753.setTransform(2.2,-32.8);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#000000").ss(5,1,1).p("AgYBLQAYghAZgiQgHgogHgq");
	this.shape_754.setTransform(2.5,-32.8);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#000000").ss(5,1,1).p("AgXBMQAXgiAYgjQgIgogIgq");
	this.shape_755.setTransform(2.7,-32.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#000000").ss(5,1,1).p("AgWBMQAWgjAXgjQgJgngJgq");
	this.shape_756.setTransform(3,-32.6);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#000000").ss(5,1,1).p("AgVBNQAVgkAWgkQgKgngKgq");
	this.shape_757.setTransform(3.3,-32.6);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#000000").ss(5,1,1).p("AgUBNQAUgkAVglQgLgngKgp");
	this.shape_758.setTransform(3.6,-32.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#000000").ss(5,1,1).p("AgUBOQAUgmAVglQgNgngKgp");
	this.shape_759.setTransform(3.8,-32.5);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQATgmAUgmQgNgmgMgp");
	this.shape_760.setTransform(4.1,-32.4);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#000000").ss(5,1,1).p("AgSBPQASgnATgnQgOgmgNgp");
	this.shape_761.setTransform(4.4,-32.4);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#000000").ss(5,1,1).p("AgRBPQARgnASgoQgPgmgOgo");
	this.shape_762.setTransform(4.7,-32.3);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#000000").ss(5,1,1).p("AgRBQQARgoASgoQgRgngPgo");
	this.shape_763.setTransform(4.9,-32.3);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#000000").ss(5,1,1).p("AgPBQQAPgpASgnQgSgngRgo");
	this.shape_764.setTransform(5.1,-32.2);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#000000").ss(5,1,1).p("AgMBRQAOgqARgoQgTgngSgo");
	this.shape_765.setTransform(5.2,-32.2);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#000000").ss(5,1,1).p("AgKBRQAOgqAQgpQgUgngTgn");
	this.shape_766.setTransform(5.3,-32.1);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#000000").ss(5,1,1).p("AgHBSQANgrAPgqQgVgngUgn");
	this.shape_767.setTransform(5.4,-32.1);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#000000").ss(5,1,1).p("AgEBSQAMgsAOgqQgWgmgVgn");
	this.shape_768.setTransform(5.5,-32);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#000000").ss(5,1,1).p("AgBBTQALgtANgrQgXgmgWgn");
	this.shape_769.setTransform(5.5,-32);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#000000").ss(5,1,1).p("AgXhSIAvBMIgYBZ");
	this.shape_770.setTransform(5.6,-31.9);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#000000").ss(5,1,1).p("AgCBTQACgLADgLQAKgiAKggQgXgmgWgn");
	this.shape_771.setTransform(5.5,-32);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#000000").ss(5,1,1).p("AgEBSQADgKABgLQALghALggQgWgmgVgn");
	this.shape_772.setTransform(5.5,-32);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#000000").ss(5,1,1).p("AgHBSQADgLAEgKQAJghAMgfQgVgmgUgo");
	this.shape_773.setTransform(5.4,-32.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#000000").ss(5,1,1).p("AgKBRQAEgKAEgKQAKghAMgeQgUgngTgn");
	this.shape_774.setTransform(5.3,-32.1);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#000000").ss(5,1,1).p("AgNBRQAEgKAEgKQALggAMgeQgSgngRgo");
	this.shape_775.setTransform(5.2,-32.2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#000000").ss(5,1,1).p("AgQBQQAFgKAEgKQALgfANgdQgRgngQgo");
	this.shape_776.setTransform(5.1,-32.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#000000").ss(5,1,1).p("AgRBQQAFgKAEgKQAMgeAOgeQgRgmgPgp");
	this.shape_777.setTransform(4.9,-32.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#000000").ss(5,1,1).p("AgSBPQAFgJAFgKQAMgeAPgeQgQgmgNgo");
	this.shape_778.setTransform(4.6,-32.4);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#000000").ss(5,1,1).p("AgSBPQAEgKAFgJQANgdAPgeQgOgmgMgp");
	this.shape_779.setTransform(4.3,-32.4);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQAFgJAFgJQANgdAQgdQgNgmgLgp");
	this.shape_780.setTransform(4,-32.5);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#000000").ss(5,1,1).p("AgUBOQAFgJAGgJQAOgdAQgcQgMgmgKgq");
	this.shape_781.setTransform(3.7,-32.5);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#000000").ss(5,1,1).p("AgVBNQAGgJAFgIQAPgcARgcQgLgngLgp");
	this.shape_782.setTransform(3.4,-32.6);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#000000").ss(5,1,1).p("AgWBNQAGgJAGgJQAPgbASgbQgKgngKgq");
	this.shape_783.setTransform(3.2,-32.6);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#000000").ss(5,1,1).p("AgWBMQAFgIAGgJQAQgaASgbQgIgngJgq");
	this.shape_784.setTransform(2.9,-32.7);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#000000").ss(5,1,1).p("AgXBLQAGgIAGgIQAQgaATgZQgHgogIgq");
	this.shape_785.setTransform(2.6,-32.7);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#000000").ss(5,1,1).p("AgYBLQAGgIAHgIQARgZATgZQgGgpgGgq");
	this.shape_786.setTransform(2.3,-32.8);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#000000").ss(5,1,1).p("AgZBKQAHgHAGgIQASgZAUgYQgFgpgFgq");
	this.shape_787.setTransform(2,-32.8);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#000000").ss(5,1,1).p("AgaBKQAHgIAHgHQASgYAVgYQgEgpgEgr");
	this.shape_788.setTransform(1.7,-32.9);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAHgHAHgHQATgYAWgXQgDgpgDgr");
	this.shape_789.setTransform(1.5,-32.9);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAHgHAHgIQATgXAWgWQgBgqgCgr");
	this.shape_790.setTransform(1.2,-33);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#000000").ss(5,1,1).p("AgcBIQAHgHAHgHQAVgWAWgWQAAgqgBgr");
	this.shape_791.setTransform(0.9,-33);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#000000").ss(5,1,1).p("AgeBIQAIgHAHgHQAVgWAXgVQABgqABgs");
	this.shape_792.setTransform(0.7,-33.1);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#000000").ss(5,1,1).p("AggBHQAIgGAIgHQAVgVAYgVQACgqACgs");
	this.shape_793.setTransform(0.5,-33.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAIgHAIgGQAWgVAZgUQADgrADgs");
	this.shape_794.setTransform(0.3,-33.2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#000000").ss(5,1,1).p("AgkBGQAJgGAIgGQAWgUAZgUQAFgrAEgs");
	this.shape_795.setTransform(0.2,-33.3);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#000000").ss(5,1,1).p("AgmBGQAJgGAIgGQAXgUAagTQAGgrAFgt");
	this.shape_796.setTransform(0,-33.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#000000").ss(5,1,1).p("AgoBFQAJgGAJgFQAXgUAbgSQAGgrAHgt");
	this.shape_797.setTransform(-0.1,-33.4);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#000000").ss(5,1,1).p("AgqBFQAJgGAJgGQAYgSAbgSQAIgsAIgt");
	this.shape_798.setTransform(-0.2,-33.4);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#000000").ss(5,1,1).p("AAthDIgSBZIg1AjIgSAL");
	this.shape_799.setTransform(-0.4,-33.5);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#000000").ss(5,1,1).p("AgYBIIA2hFIg8hK");
	this.shape_800.setTransform(9.2,-32.8);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#000000").ss(5,1,1).p("AgdhGIA7BIIg1BF");
	this.shape_801.setTransform(9.1,-32.8);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#000000").ss(5,1,1).p("AgdhGIA7BIIgzBF");
	this.shape_802.setTransform(9,-32.8);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#000000").ss(5,1,1).p("AgchGIA5BHIgxBG");
	this.shape_803.setTransform(9,-32.8);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#000000").ss(5,1,1).p("AgchGIA5BGIgwBH");
	this.shape_804.setTransform(8.9,-32.8);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#000000").ss(5,1,1).p("AgchGIA5BGIguBH");
	this.shape_805.setTransform(8.9,-32.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#000000").ss(5,1,1).p("AgbhGIA3BGIgsBG");
	this.shape_806.setTransform(8.8,-32.8);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#000000").ss(5,1,1).p("AgbhFIA3BFIgrBG");
	this.shape_807.setTransform(8.7,-32.8);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#000000").ss(5,1,1).p("AgbhFIA3BEIgpBH");
	this.shape_808.setTransform(8.7,-32.7);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#000000").ss(5,1,1).p("AgahFIA1BEIgnBH");
	this.shape_809.setTransform(8.6,-32.7);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#000000").ss(5,1,1).p("AgahFIA1BDIgmBI");
	this.shape_810.setTransform(8.6,-32.7);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#000000").ss(5,1,1).p("AgahFIA1BCIglBJ");
	this.shape_811.setTransform(8.5,-32.7);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#000000").ss(5,1,1).p("AgZhFIAzBCIgiBJ");
	this.shape_812.setTransform(8.5,-32.7);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#000000").ss(5,1,1).p("AgZhEIAzBAIghBJ");
	this.shape_813.setTransform(8.4,-32.7);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#000000").ss(5,1,1).p("AgZhEIAzA/IggBK");
	this.shape_814.setTransform(8.3,-32.7);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#000000").ss(5,1,1).p("AgYhEIAxA+IgdBL");
	this.shape_815.setTransform(8.3,-32.7);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#000000").ss(5,1,1).p("AgahFIA1BDIglBI");
	this.shape_816.setTransform(8.5,-32.7);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#000000").ss(5,1,1).p("AgbhFIA3BFIgqBG");
	this.shape_817.setTransform(8.7,-32.8);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#000000").ss(5,1,1).p("AgbhFIA3BFIgsBG");
	this.shape_818.setTransform(8.8,-32.8);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#000000").ss(5,1,1).p("AgchGIA5BGIgvBH");
	this.shape_819.setTransform(8.9,-32.8);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#000000").ss(5,1,1).p("AgdhGIA7BHIgzBG");
	this.shape_820.setTransform(9,-32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_588}]}).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_688}]},1).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_737}]},1).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_782}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_786}]},1).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_788}]},1).to({state:[{t:this.shape_789}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_795}]},1).to({state:[{t:this.shape_796}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_799}]},1).to({state:[]},1).to({state:[{t:this.shape_800}]},14).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_807}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_800}]},1).to({state:[]},1).to({state:[]},16).to({state:[{t:this.shape_800}]},14).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_807}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_800}]},1).to({state:[]},1).wait(16));

	// jd
	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#000000").ss(5,1,1).p("AAZhvIgxBkIAAB7");
	this.shape_821.setTransform(-7,-14.3);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#000000").ss(5,1,1).p("AgXBwIAAh7IAvhk");
	this.shape_822.setTransform(-7,-14.3);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#000000").ss(5,1,1).p("AgXBwIABh7IAuhk");
	this.shape_823.setTransform(-7,-14.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIABh7IAuhi");
	this.shape_824.setTransform(-7,-14.2);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIACh7IAthi");
	this.shape_825.setTransform(-7,-14.2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIADh7IAshi");
	this.shape_826.setTransform(-7,-14.2);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIAEh7IArhi");
	this.shape_827.setTransform(-7,-14.2);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#000000").ss(5,1,1).p("AgXBuIAEh7IArhg");
	this.shape_828.setTransform(-7,-14.1);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#000000").ss(5,1,1).p("AgXBuIAFh7IAqhg");
	this.shape_829.setTransform(-7,-14.1);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#000000").ss(5,1,1).p("AgWBuIAFh7IAohg");
	this.shape_830.setTransform(-7.1,-14.1);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#000000").ss(5,1,1).p("AgWBuIAGh7IAnhg");
	this.shape_831.setTransform(-7.1,-14.1);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#000000").ss(5,1,1).p("AgWBtIAHh7IAmhe");
	this.shape_832.setTransform(-7.1,-14);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#000000").ss(5,1,1).p("AgWBtIAIh7IAlhe");
	this.shape_833.setTransform(-7.1,-14);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#000000").ss(5,1,1).p("AgWBtIAJh7IAkhe");
	this.shape_834.setTransform(-7.1,-14);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#000000").ss(5,1,1).p("AgWBsIAKh7IAjhc");
	this.shape_835.setTransform(-7.1,-13.9);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#000000").ss(5,1,1).p("AgWBsIALh7IAihc");
	this.shape_836.setTransform(-7.1,-13.9);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#000000").ss(5,1,1).p("AgVBsIALh7IAghc");
	this.shape_837.setTransform(-7.2,-13.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIAMh7IAfha");
	this.shape_838.setTransform(-7.2,-13.8);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIANh7IAeha");
	this.shape_839.setTransform(-7.2,-13.8);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIAOh7IAdha");
	this.shape_840.setTransform(-7.2,-13.8);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIAPh8IAchZ");
	this.shape_841.setTransform(-7.2,-13.8);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#000000").ss(5,1,1).p("AgVBsIAKh7IAhhc");
	this.shape_842.setTransform(-7.2,-13.9);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#000000").ss(5,1,1).p("AAQhvIARBlIhBB6");
	this.shape_843.setTransform(-6.1,-14.3);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#000000").ss(5,1,1).p("AANhuQAKAzAKAxQgkBHgdAy");
	this.shape_844.setTransform(-5.8,-14.4);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#000000").ss(5,1,1).p("AAJhsQAMAxAMAxQgjBGgeAx");
	this.shape_845.setTransform(-5.4,-14.6);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#000000").ss(5,1,1).p("AAGhrQAOAxANAwQgiBFgfAx");
	this.shape_846.setTransform(-5.1,-14.7);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#000000").ss(5,1,1).p("AAChqQAQAxAPAvQghBEggAx");
	this.shape_847.setTransform(-4.7,-14.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#000000").ss(5,1,1).p("AAAhoQAQAvARAvQghBEggAv");
	this.shape_848.setTransform(-4.4,-15);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#000000").ss(5,1,1).p("AgChnQAQAvATAuQghBDggAv");
	this.shape_849.setTransform(-4.1,-15.1);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#000000").ss(5,1,1).p("AgGhlQATAuAUAtQghBCggAu");
	this.shape_850.setTransform(-3.7,-15.3);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#000000").ss(5,1,1).p("AgJhkQAUAtAWAtQggBBghAu");
	this.shape_851.setTransform(-3.4,-15.4);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(5,1,1).p("AgNhjQAWAtAYAsQgfBBgiAt");
	this.shape_852.setTransform(-3,-15.5);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#000000").ss(5,1,1).p("AgQhhQAYAsAZArQgeBAgjAs");
	this.shape_853.setTransform(-2.7,-15.7);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#000000").ss(5,1,1).p("AgUhgQAaArAbArQgdA/gkAs");
	this.shape_854.setTransform(-2.3,-15.8);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#000000").ss(5,1,1).p("AgXhfQAbArAdAqQgcA+glAs");
	this.shape_855.setTransform(-2,-15.9);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#000000").ss(5,1,1).p("AgbhdQAdAqAfApQgbA+gmAq");
	this.shape_856.setTransform(-1.6,-16.1);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#000000").ss(5,1,1).p("AgehcQAfApAgApQgaA9gnAq");
	this.shape_857.setTransform(-1.3,-16.2);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#000000").ss(5,1,1).p("AgphbIBTBjIhSBU");
	this.shape_858.setTransform(-0.2,-16.4);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#000000").ss(5,1,1).p("AgkhcQAkAuAlAtQgfAzglAr");
	this.shape_859.setTransform(-0.4,-16.2);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#000000").ss(5,1,1).p("AgjhdQAjAuAkAuQgdA0giAr");
	this.shape_860.setTransform(-0.1,-16.1);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#000000").ss(5,1,1).p("AgihfQAiAvAjAuQgaA1ggAt");
	this.shape_861.setTransform(0,-15.9);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#000000").ss(5,1,1).p("AghhgQAhAvAiAuQgYA3gdAt");
	this.shape_862.setTransform(0.3,-15.8);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#000000").ss(5,1,1).p("AgghhQAgAvAhAuQgWA4gaAu");
	this.shape_863.setTransform(0.5,-15.7);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#000000").ss(5,1,1).p("AgfhjQAfAwAgAvQgTA4gYAw");
	this.shape_864.setTransform(0.7,-15.5);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#000000").ss(5,1,1).p("AgfhkQAfAwAgAvQgSA6gUAw");
	this.shape_865.setTransform(1,-15.4);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#000000").ss(5,1,1).p("AgehlQAeAvAfAwQgQA7gRAx");
	this.shape_866.setTransform(1.2,-15.3);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#000000").ss(5,1,1).p("AgdhnQAdAwAeAwQgNA9gRAy");
	this.shape_867.setTransform(1.5,-15.1);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#000000").ss(5,1,1).p("AgchoQAcAwAdAxQgLA9gOAz");
	this.shape_868.setTransform(1.7,-15);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#000000").ss(5,1,1).p("AgbhqQAbAxAcAxQgJA+gLA1");
	this.shape_869.setTransform(2,-14.8);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#000000").ss(5,1,1).p("AgahrQAaAxAbAxQgGBAgJA1");
	this.shape_870.setTransform(2.2,-14.7);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#000000").ss(5,1,1).p("AgZhsQAZAxAaAxQgEBBgGA2");
	this.shape_871.setTransform(2.5,-14.6);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#000000").ss(5,1,1).p("AgYhuQAYAyAZAyQgCBCgDA3");
	this.shape_872.setTransform(2.7,-14.4);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#000000").ss(5,1,1).p("AgYhvIAxBkIAAB7");
	this.shape_873.setTransform(3,-14.3);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#000000").ss(5,1,1).p("AgWhwQAWAvAVAuQACBFgBA/");
	this.shape_874.setTransform(2.6,-14.2);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#000000").ss(5,1,1).p("AgUhwQAUAvAVAvQABBFgDA+");
	this.shape_875.setTransform(2.4,-14.1);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#000000").ss(5,1,1).p("AgUhxQAUAwAVAvQgCBFgEA/");
	this.shape_876.setTransform(2.2,-14.1);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#000000").ss(5,1,1).p("AgThxQATAwAUAwQgDBEgGA/");
	this.shape_877.setTransform(2,-14);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#000000").ss(5,1,1).p("AgShyQASAxATAwQgFBFgGA/");
	this.shape_878.setTransform(1.8,-13.9);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#000000").ss(5,1,1).p("AgShyQASAxATAwQgHBGgIA+");
	this.shape_879.setTransform(1.6,-13.8);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#000000").ss(5,1,1).p("AgRhzQARAyASAxQgJBFgJA/");
	this.shape_880.setTransform(1.4,-13.7);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#000000").ss(5,1,1).p("AgQhzQAQAxARAyQgKBGgJA+");
	this.shape_881.setTransform(1.3,-13.6);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#000000").ss(5,1,1).p("AgQh0QAQAyARAzQgMBFgKA/");
	this.shape_882.setTransform(1.1,-13.6);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#000000").ss(5,1,1).p("AgPh0QAPAyAQAzQgOBGgLA+");
	this.shape_883.setTransform(0.9,-13.5);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#000000").ss(5,1,1).p("AgOh1QAOAzAPAzQgPBGgNA/");
	this.shape_884.setTransform(0.7,-13.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#000000").ss(5,1,1).p("AgMh1QANAzAPA0QgQBGgPA+");
	this.shape_885.setTransform(0.4,-13.3);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#000000").ss(5,1,1).p("AgJh2QAMA0APA0QgSBGgRA/");
	this.shape_886.setTransform(0,-13.2);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#000000").ss(5,1,1).p("AgGh2QAMA0ANA1QgTBGgSA+");
	this.shape_887.setTransform(-0.4,-13.1);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#000000").ss(5,1,1).p("AgDh3IAYBqIgpCF");
	this.shape_888.setTransform(-0.8,-13.1);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("#000000").ss(5,1,1).p("AgCh2QALA0ANA1QgWBDgVBB");
	this.shape_889.setTransform(-1.2,-13.1);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#000000").ss(5,1,1).p("AAAh2QAKA1AMA1QgWBCgVBB");
	this.shape_890.setTransform(-1.6,-13.2);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("#000000").ss(5,1,1).p("AAAh1QALA0AMA1QgXBCgWBA");
	this.shape_891.setTransform(-1.9,-13.3);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#000000").ss(5,1,1).p("AABh1QAMA1ALA1QgYBBgXBA");
	this.shape_892.setTransform(-2.3,-13.4);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("#000000").ss(5,1,1).p("AADh0QALA0ALA1QgZBBgYA/");
	this.shape_893.setTransform(-2.7,-13.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#000000").ss(5,1,1).p("AAFh0QAKA1AKA0QgZBBgYA/");
	this.shape_894.setTransform(-3.1,-13.6);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("#000000").ss(5,1,1).p("AAGhzQAKA0AKA1QgaBAgZA+");
	this.shape_895.setTransform(-3.5,-13.7);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#000000").ss(5,1,1).p("AAIhyQAJA0AKA0QgbA/gaA+");
	this.shape_896.setTransform(-3.9,-13.8);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("#000000").ss(5,1,1).p("AAJhyQAKA0AJA1QgcA+gbA+");
	this.shape_897.setTransform(-4.3,-13.9);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#000000").ss(5,1,1).p("AALhxQAJA0AIA0QgcA+gbA9");
	this.shape_898.setTransform(-4.7,-13.9);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("#000000").ss(5,1,1).p("AANhxQAIA0AIA0QgdA+gcA9");
	this.shape_899.setTransform(-5.1,-14);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#000000").ss(5,1,1).p("AAOhwQAIA0AIA0QgeA9gdA8");
	this.shape_900.setTransform(-5.5,-14.1);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("#000000").ss(5,1,1).p("AAQhwQAHA0AIA0QgfA9geA8");
	this.shape_901.setTransform(-5.9,-14.2);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#000000").ss(5,1,1).p("AAShvIAOBqIg/B1");
	this.shape_902.setTransform(-6.3,-14.3);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("#000000").ss(5,1,1).p("AAMhoIARBmIg5Br");
	this.shape_903.setTransform(-0.6,-12.4);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#000000").ss(5,1,1).p("AAKhnQAKAyAIAzQgcA0gbA2");
	this.shape_904.setTransform(-0.5,-12.5);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#000000").ss(5,1,1).p("AAJhnQAKAyAJAyQgcA1gbA2");
	this.shape_905.setTransform(-0.4,-12.6);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#000000").ss(5,1,1).p("AAHhnQALAyAKAyQgcA0gbA3");
	this.shape_906.setTransform(-0.2,-12.7);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("#000000").ss(5,1,1).p("AAFhmQALAxAMAxQgcA1gbA3");
	this.shape_907.setTransform(-0.1,-12.8);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#000000").ss(5,1,1).p("AADhmQAMAxAMAxQgbA1gaA2");
	this.shape_908.setTransform(0,-12.9);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#000000").ss(5,1,1).p("AABhmQANAxANAwQgbA1gaA3");
	this.shape_909.setTransform(0,-13);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#000000").ss(5,1,1).p("AAAhmQANAxAOAwQgbA1gaA3");
	this.shape_910.setTransform(0.1,-13);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("#000000").ss(5,1,1).p("AgBhmQANAxAOAvQgaA2gZA3");
	this.shape_911.setTransform(0.2,-13.1);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#000000").ss(5,1,1).p("AgChlQANAvAPAwQgaA1gZA3");
	this.shape_912.setTransform(0.3,-13.2);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#000000").ss(5,1,1).p("AgEhlQAOAvAQAwQgaA1gZA3");
	this.shape_913.setTransform(0.4,-13.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#000000").ss(5,1,1).p("AgGhlQAPAvARAvQgaA2gZA3");
	this.shape_914.setTransform(0.6,-13.4);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("#000000").ss(5,1,1).p("AgIhlQAQAvARAvQgZA1gYA4");
	this.shape_915.setTransform(0.7,-13.5);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#000000").ss(5,1,1).p("AgKhkQARAuASAuQgZA2gYA3");
	this.shape_916.setTransform(0.8,-13.6);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#000000").ss(5,1,1).p("AgMhkQASAuATAuQgZA2gYA3");
	this.shape_917.setTransform(0.9,-13.7);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#000000").ss(5,1,1).p("AgOhkIAnBbIgxBu");
	this.shape_918.setTransform(1,-13.8);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("#000000").ss(5,1,1).p("AgOhlQASAuAUAuQgYA3gXA4");
	this.shape_919.setTransform(1.2,-13.7);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#000000").ss(5,1,1).p("AgPhmQASAuAUAuQgXA4gWA5");
	this.shape_920.setTransform(1.3,-13.6);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("#000000").ss(5,1,1).p("AgRhnQATAvAUAuQgWA4gVA6");
	this.shape_921.setTransform(1.5,-13.5);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#000000").ss(5,1,1).p("AgShoQATAvAUAvQgVA4gUA7");
	this.shape_922.setTransform(1.6,-13.4);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#000000").ss(5,1,1).p("AgThpQATAvAUAvQgUA6gTA7");
	this.shape_923.setTransform(1.8,-13.4);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#000000").ss(5,1,1).p("AgThqQATAwAUAvQgUA6gSA8");
	this.shape_924.setTransform(1.9,-13.3);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#000000").ss(5,1,1).p("AgThrQATAwAUAvQgTA7gRA9");
	this.shape_925.setTransform(1.9,-13.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#000000").ss(5,1,1).p("AgThsQATAwAUAwQgSA8gQA9");
	this.shape_926.setTransform(2,-13.1);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("#000000").ss(5,1,1).p("AgThtQATAwAUAxQgRA8gQA+");
	this.shape_927.setTransform(2,-13);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#000000").ss(5,1,1).p("AgThuQATAxAUAwQgQA9gPA/");
	this.shape_928.setTransform(2.1,-12.9);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("#000000").ss(5,1,1).p("AgThvQATAxAUAxQgPA+gOA/");
	this.shape_929.setTransform(2.1,-12.9);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#000000").ss(5,1,1).p("AgUhwQAUAxAUAxQgPA/gNBA");
	this.shape_930.setTransform(2.2,-12.8);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("#000000").ss(5,1,1).p("AgUhxQAUAyAVAxQgPA/gMBB");
	this.shape_931.setTransform(2.3,-12.7);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#000000").ss(5,1,1).p("AgUhyQAUAyAVAyQgOA/gLBC");
	this.shape_932.setTransform(2.3,-12.6);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("#000000").ss(5,1,1).p("AgUhzIApBkIgXCD");
	this.shape_933.setTransform(2.4,-12.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#000000").ss(5,1,1).p("AgThzQATAyAUAyQgNBBgLBC");
	this.shape_934.setTransform(2.4,-12.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("#000000").ss(5,1,1).p("AgThzQATAyAUAyQgOBBgMBC");
	this.shape_935.setTransform(2.4,-12.4);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#000000").ss(5,1,1).p("AgSh0QASAzATAzQgOBAgMBD");
	this.shape_936.setTransform(2.4,-12.3);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("#000000").ss(5,1,1).p("AgSh0QASAzATAzQgPBAgNBD");
	this.shape_937.setTransform(2.4,-12.3);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#000000").ss(5,1,1).p("AgRh0QARAzASAzQgPBBgOBC");
	this.shape_938.setTransform(2.5,-12.2);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("#000000").ss(5,1,1).p("AgQh0QAQAzARAzQgPBBgPBC");
	this.shape_939.setTransform(2.5,-12.1);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#000000").ss(5,1,1).p("AgQh1QAQA0ARAzQgRBBgOBD");
	this.shape_940.setTransform(2.5,-12.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("#000000").ss(5,1,1).p("AgPh1QAPA0ARAzQgRBBgQBD");
	this.shape_941.setTransform(2.5,-12);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#000000").ss(5,1,1).p("AgNh1QAOAzAQA0QgRBBgQBD");
	this.shape_942.setTransform(2.4,-11.9);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("#000000").ss(5,1,1).p("AgMh2QAOA0AQA0QgSBCgRBD");
	this.shape_943.setTransform(2.3,-11.9);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#000000").ss(5,1,1).p("AgKh2QANA0APA1QgSBBgRBD");
	this.shape_944.setTransform(2.2,-11.8);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("#000000").ss(5,1,1).p("AgIh2QAMA0APA1QgTBBgSBD");
	this.shape_945.setTransform(2.1,-11.7);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#000000").ss(5,1,1).p("AgHh2QANA0AOA1QgUBBgTBD");
	this.shape_946.setTransform(2,-11.7);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("#000000").ss(5,1,1).p("AgFh3QAMA1ANA1QgUBBgTBE");
	this.shape_947.setTransform(1.9,-11.6);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#000000").ss(5,1,1).p("AgCh2QALA0ANA1QgWBBgVBD");
	this.shape_948.setTransform(1.6,-11.6);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("#000000").ss(5,1,1).p("AAAh2QAKA1AMA0QgWBBgVBD");
	this.shape_949.setTransform(1.4,-11.6);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#000000").ss(5,1,1).p("AAAh1QALA0AMA1QgXBAgWBC");
	this.shape_950.setTransform(1.2,-11.6);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("#000000").ss(5,1,1).p("AABh1QAMA1ALA0QgYBAgXBC");
	this.shape_951.setTransform(1,-11.6);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#000000").ss(5,1,1).p("AACh0QAMA0ALA0QgZBAgYBB");
	this.shape_952.setTransform(0.8,-11.6);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("#000000").ss(5,1,1).p("AAEh0QALA1ALAzQgaBAgZBB");
	this.shape_953.setTransform(0.6,-11.6);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#000000").ss(5,1,1).p("AAGhzQAKA0ALA0QgbA/gaBA");
	this.shape_954.setTransform(0.4,-11.6);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("#000000").ss(5,1,1).p("AAHhyQAKAzALA0QgcA+gbBA");
	this.shape_955.setTransform(0.2,-11.6);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#000000").ss(5,1,1).p("AAJhyQAKA0AJAzQgcA+gbBA");
	this.shape_956.setTransform(0,-11.6);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("#000000").ss(5,1,1).p("AAKhxQAKAzAJAzQgdA+gcA/");
	this.shape_957.setTransform(-0.1,-11.6);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#000000").ss(5,1,1).p("AAMhxQAJA0AJAzQgeA9gdA/");
	this.shape_958.setTransform(-0.4,-11.6);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().s("#000000").ss(5,1,1).p("AANhwQAJAzAJAzQgfA9geA+");
	this.shape_959.setTransform(-0.6,-11.6);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#000000").ss(5,1,1).p("AAPhwQAJA0AIAyQggA9gfA+");
	this.shape_960.setTransform(-0.8,-11.6);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("#000000").ss(5,1,1).p("AAQhvIARBmIhBB5");
	this.shape_961.setTransform(-1,-11.7);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#000000").ss(5,1,1).p("AgPhvIgRBmIBBB5");
	this.shape_962.setTransform(1.7,-12.7);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f().s("#000000").ss(5,1,1).p("AgNhuQgJAzgJAxQAkBHAbAy");
	this.shape_963.setTransform(1.4,-12.8);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#000000").ss(5,1,1).p("AgKhsQgKAxgKAxQAiBGAbAx");
	this.shape_964.setTransform(1.2,-12.9);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("#000000").ss(5,1,1).p("AgIhrQgKAxgLAwQAhBGAaAw");
	this.shape_965.setTransform(0.9,-13.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#000000").ss(5,1,1).p("AgGhqQgKAxgMAvQAfBFAaAw");
	this.shape_966.setTransform(0.6,-13.2);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("#000000").ss(5,1,1).p("AgDhoQgMAvgMAvQAdBEAaAv");
	this.shape_967.setTransform(0.4,-13.4);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#000000").ss(5,1,1).p("AgBhnQgMAvgMAuQAaBDAZAv");
	this.shape_968.setTransform(0.1,-13.5);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("#000000").ss(5,1,1).p("AAAhlQgLAtgNAuQAZBCAYAu");
	this.shape_969.setTransform(0,-13.7);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#000000").ss(5,1,1).p("AAChkQgMAtgNAtQAXBBAYAu");
	this.shape_970.setTransform(-0.3,-13.8);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("#000000").ss(5,1,1).p("AAEhjQgMAtgOAsQAWBBAXAt");
	this.shape_971.setTransform(-0.6,-14);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#000000").ss(5,1,1).p("AAHhhQgNArgPAsQAVBAAWAs");
	this.shape_972.setTransform(-0.8,-14.1);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("#000000").ss(5,1,1).p("AAJhgQgNArgQArQAUA/AVAs");
	this.shape_973.setTransform(-1.1,-14.3);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#000000").ss(5,1,1).p("AALhfQgOArgQAqQASA+AVAs");
	this.shape_974.setTransform(-1.3,-14.4);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("#000000").ss(5,1,1).p("AAOhdQgPApgRAqQAQA9AVAr");
	this.shape_975.setTransform(-1.6,-14.6);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#000000").ss(5,1,1).p("AAQhcQgQApgRApQAPA8AUAr");
	this.shape_976.setTransform(-1.8,-14.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("#000000").ss(5,1,1).p("AAWhbIgrBiIAqBV");
	this.shape_977.setTransform(-2.5,-14.9);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#000000").ss(5,1,1).p("AAUhcQgUAtgTAtQAQA0ATAr");
	this.shape_978.setTransform(-2.3,-14.8);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f().s("#000000").ss(5,1,1).p("AAUhdQgUAtgTAtQAPA1ARAs");
	this.shape_979.setTransform(-2.3,-14.7);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#000000").ss(5,1,1).p("AAVheQgVAtgUAuQAOA2AQAs");
	this.shape_980.setTransform(-2.4,-14.7);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f().s("#000000").ss(5,1,1).p("AAVhgQgVAugUAuQANA3AOAu");
	this.shape_981.setTransform(-2.4,-14.6);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f().s("#000000").ss(5,1,1).p("AAVhhQgVAugUAvQALA4ANAu");
	this.shape_982.setTransform(-2.5,-14.6);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f().s("#000000").ss(5,1,1).p("AAWhiQgWAugVAvQALA5AMAv");
	this.shape_983.setTransform(-2.5,-14.5);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f().s("#000000").ss(5,1,1).p("AAWhkQgWAvgVAwQAKA6ALAw");
	this.shape_984.setTransform(-2.5,-14.4);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f().s("#000000").ss(5,1,1).p("AAWhlQgWAwgVAvQAIA7ALAx");
	this.shape_985.setTransform(-2.6,-14.4);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f().s("#000000").ss(5,1,1).p("AAXhmQgXAwgWAvQAIA8AJAy");
	this.shape_986.setTransform(-2.6,-14.3);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f().s("#000000").ss(5,1,1).p("AAXhoQgXAxgWAwQAHA9AIAz");
	this.shape_987.setTransform(-2.7,-14.3);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f().s("#000000").ss(5,1,1).p("AAXhpQgXAxgWAwQAFA+AHA0");
	this.shape_988.setTransform(-2.7,-14.2);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f().s("#000000").ss(5,1,1).p("AAYhqQgYAxgXAxQAFA/AFA0");
	this.shape_989.setTransform(-2.8,-14.1);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#000000").ss(5,1,1).p("AAYhrQgYAxgXAxQAEBAADA1");
	this.shape_990.setTransform(-2.8,-14.1);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f().s("#000000").ss(5,1,1).p("AAYhtQgYAygXAyQACBBADA2");
	this.shape_991.setTransform(-2.9,-14);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#000000").ss(5,1,1).p("AAZhuIgxBkIADB5");
	this.shape_992.setTransform(-2.9,-14);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("#000000").ss(5,1,1).p("AAXhuQgXAxgWAxQABA+ACA9");
	this.shape_993.setTransform(-2.7,-13.9);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#000000").ss(5,1,1).p("AAWhuQgWAxgVAxQACA+ADA9");
	this.shape_994.setTransform(-2.6,-13.9);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().s("#000000").ss(5,1,1).p("AAVhuQgVAxgUAyQADA9ADA9");
	this.shape_995.setTransform(-2.5,-13.9);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#000000").ss(5,1,1).p("AAVhuQgVAxgUAyQAEA+AFA8");
	this.shape_996.setTransform(-2.4,-13.9);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#000000").ss(5,1,1).p("AAUhuQgUAygTAyQAFA9AGA8");
	this.shape_997.setTransform(-2.3,-13.8);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#000000").ss(5,1,1).p("AAThvQgTAzgSAyQAGA9AHA9");
	this.shape_998.setTransform(-2.1,-13.8);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("#000000").ss(5,1,1).p("AAShvQgSAzgRAzQAHA9AIA8");
	this.shape_999.setTransform(-2,-13.8);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#000000").ss(5,1,1).p("AAShvQgSAzgRAzQAJA9AIA8");
	this.shape_1000.setTransform(-1.9,-13.8);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#000000").ss(5,1,1).p("AARhvQgRAzgQA0QAKA8AIA8");
	this.shape_1001.setTransform(-1.8,-13.7);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#000000").ss(5,1,1).p("AAQhvQgQA0gPAzQALA9AIA7");
	this.shape_1002.setTransform(-1.7,-13.7);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("#000000").ss(5,1,1).p("AAPhvQgPA0gOA0QAMA8AJA7");
	this.shape_1003.setTransform(-1.6,-13.7);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#000000").ss(5,1,1).p("AAPhvQgPA0gOA0QANA8ALA7");
	this.shape_1004.setTransform(-1.5,-13.7);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("#000000").ss(5,1,1).p("AAOhvQgOA0gNA1QANA8ANA6");
	this.shape_1005.setTransform(-1.4,-13.6);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#000000").ss(5,1,1).p("AAMhvQgMA1gNA0QANA8AOA6");
	this.shape_1006.setTransform(-1.1,-13.6);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f().s("#000000").ss(5,1,1).p("AAKhvIgYBqIAeB1");
	this.shape_1007.setTransform(-0.9,-13.6);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#000000").ss(5,1,1).p("AAHhvQgKAxgMAxQAPBCAQA7");
	this.shape_1008.setTransform(-0.6,-13.5);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f().s("#000000").ss(5,1,1).p("AAFhvQgKAxgLAxQAQBCARA7");
	this.shape_1009.setTransform(-0.4,-13.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#000000").ss(5,1,1).p("AADhvQgJAxgLAyQARBBASA7");
	this.shape_1010.setTransform(-0.2,-13.4);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("#000000").ss(5,1,1).p("AABhvQgJAxgLAyQATBBAUA7");
	this.shape_1011.setTransform(0,-13.3);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#000000").ss(5,1,1).p("AAAhvQgJAygLAxQAUBBAVA7");
	this.shape_1012.setTransform(0.1,-13.2);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f().s("#000000").ss(5,1,1).p("AgBhvQgKAygKAxQAVBCAWA6");
	this.shape_1013.setTransform(0.2,-13.2);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#000000").ss(5,1,1).p("AgChvQgKAygLAyQAXBBAYA6");
	this.shape_1014.setTransform(0.4,-13.1);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().s("#000000").ss(5,1,1).p("AgEhvQgKAygKAyQAYBBAZA6");
	this.shape_1015.setTransform(0.6,-13);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#000000").ss(5,1,1).p("AgGhvQgJAygKAyQAaBBAZA6");
	this.shape_1016.setTransform(0.8,-13);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().s("#000000").ss(5,1,1).p("AgIhvQgJAygKAyQAcBBAbA6");
	this.shape_1017.setTransform(1,-12.9);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#000000").ss(5,1,1).p("AgKhvQgJAzgJAyQAdBAAcA6");
	this.shape_1018.setTransform(1.1,-12.8);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f().s("#000000").ss(5,1,1).p("AgMhvQgIAzgJAyQAeBAAdA6");
	this.shape_1019.setTransform(1.3,-12.8);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#000000").ss(5,1,1).p("AgNhvQgJAzgIAyQAgBAAdA6");
	this.shape_1020.setTransform(1.5,-12.7);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#000000").ss(5,1,1).p("AARh5IghBhIATCS");
	this.shape_1021.setTransform(-6.2,-13.4);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#000000").ss(5,1,1).p("AACB4IgRiPIAfhg");
	this.shape_1022.setTransform(-6.2,-13.4);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#000000").ss(5,1,1).p("AABB3IgQiNIAfhg");
	this.shape_1023.setTransform(-6.1,-13.4);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#000000").ss(5,1,1).p("AAAB2IgOiLIAdhg");
	this.shape_1024.setTransform(-6.1,-13.4);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#000000").ss(5,1,1).p("AAAB1IgNiJIAbhg");
	this.shape_1025.setTransform(-6.1,-13.5);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#000000").ss(5,1,1).p("AgBB0IgMiHIAbhg");
	this.shape_1026.setTransform(-6.1,-13.5);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#000000").ss(5,1,1).p("AgDBzIgJiFIAZhg");
	this.shape_1027.setTransform(-6.1,-13.5);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#000000").ss(5,1,1).p("AgEBxIgIiBIAZhg");
	this.shape_1028.setTransform(-6.1,-13.6);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#000000").ss(5,1,1).p("AgFBwIgGh/IAXhg");
	this.shape_1029.setTransform(-6,-13.6);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#000000").ss(5,1,1).p("AgHBvIgDh9IAVhg");
	this.shape_1030.setTransform(-6,-13.6);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#000000").ss(5,1,1).p("AgIBuIgCh7IAVhg");
	this.shape_1031.setTransform(-6,-13.7);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#000000").ss(5,1,1).p("AgJBtIAAh5IAThg");
	this.shape_1032.setTransform(-6,-13.7);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#000000").ss(5,1,1).p("AgKBsIACh3IAThg");
	this.shape_1033.setTransform(-6.1,-13.7);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#000000").ss(5,1,1).p("AgKBrIAEh1IARhg");
	this.shape_1034.setTransform(-6.2,-13.8);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("#000000").ss(5,1,1).p("AgKBqIADhzIAShg");
	this.shape_1035.setTransform(-6.1,-13.9);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#000000").ss(5,1,1).p("AgKBpIAChxIAThg");
	this.shape_1036.setTransform(-6.1,-14);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#000000").ss(5,1,1).p("AgKBpIABhxIAUhg");
	this.shape_1037.setTransform(-6,-14.1);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#000000").ss(5,1,1).p("AgKBoIAAhvIAVhg");
	this.shape_1038.setTransform(-6,-14.2);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#000000").ss(5,1,1).p("AgJBoIgChuIAXhh");
	this.shape_1039.setTransform(-6.1,-14.4);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#000000").ss(5,1,1).p("AgIBnIgDhsIAXhh");
	this.shape_1040.setTransform(-6.1,-14.5);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#000000").ss(5,1,1).p("AgIBnIgEhsIAZhh");
	this.shape_1041.setTransform(-6.1,-14.6);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#000000").ss(5,1,1).p("AgHBmIgGhqIAahh");
	this.shape_1042.setTransform(-6.1,-14.7);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#000000").ss(5,1,1).p("AgGBmIgHhpIAbhi");
	this.shape_1043.setTransform(-6.1,-14.9);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#000000").ss(5,1,1).p("AgGBlIgIhnIAdhi");
	this.shape_1044.setTransform(-6.2,-15);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#000000").ss(5,1,1).p("AgFBkIgJhmIAdhh");
	this.shape_1045.setTransform(-6.2,-15.1);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#000000").ss(5,1,1).p("AgEBkIgLhlIAfhi");
	this.shape_1046.setTransform(-6.2,-15.2);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#000000").ss(5,1,1).p("AgEBjIgLhjIAfhi");
	this.shape_1047.setTransform(-6.2,-15.4);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#000000").ss(5,1,1).p("AgDBjIgNhjIAhhi");
	this.shape_1048.setTransform(-6.3,-15.5);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("#000000").ss(5,1,1).p("AgDBiIgNhiIAhhh");
	this.shape_1049.setTransform(-6.3,-15.6);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#000000").ss(5,1,1).p("AAShhIgjBhIAPBi");
	this.shape_1050.setTransform(-6.3,-15.7);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#000000").ss(5,1,1).p("AgEBkIgLhkIAfhj");
	this.shape_1051.setTransform(-6.2,-15.3);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#000000").ss(5,1,1).p("AgFBkIgKhlIAfhi");
	this.shape_1052.setTransform(-6.2,-15.2);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#000000").ss(5,1,1).p("AgFBlIgJhnIAdhi");
	this.shape_1053.setTransform(-6.2,-15.1);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#000000").ss(5,1,1).p("AgGBlIgHhoIAbhh");
	this.shape_1054.setTransform(-6.2,-14.9);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("#000000").ss(5,1,1).p("AgHBmIgGhpIAbhi");
	this.shape_1055.setTransform(-6.1,-14.8);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#000000").ss(5,1,1).p("AgHBmIgFhqIAZhh");
	this.shape_1056.setTransform(-6.1,-14.7);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("#000000").ss(5,1,1).p("AgJBoIgBhvIAVhg");
	this.shape_1057.setTransform(-6,-14.3);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#000000").ss(5,1,1).p("AgKBpIAAhxIAVhg");
	this.shape_1058.setTransform(-6,-14.1);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("#000000").ss(5,1,1).p("AgKBsIADh3IAShg");
	this.shape_1059.setTransform(-6.1,-13.7);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#000000").ss(5,1,1).p("AgJBuIgBh7IAVhg");
	this.shape_1060.setTransform(-6,-13.7);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("#000000").ss(5,1,1).p("AgGBwIgFh/IAXhg");
	this.shape_1061.setTransform(-6,-13.6);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#000000").ss(5,1,1).p("AgFBxIgGiBIAXhg");
	this.shape_1062.setTransform(-6,-13.6);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("#000000").ss(5,1,1).p("AgEByIgIiDIAZhg");
	this.shape_1063.setTransform(-6.1,-13.6);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#000000").ss(5,1,1).p("AgDBzIgJiEIAZhh");
	this.shape_1064.setTransform(-6.1,-13.5);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("#000000").ss(5,1,1).p("AgCB0IgLiGIAbhh");
	this.shape_1065.setTransform(-6.1,-13.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#000000").ss(5,1,1).p("AAAB1IgNiIIAbhh");
	this.shape_1066.setTransform(-6.1,-13.5);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("#000000").ss(5,1,1).p("AAAB2IgOiKIAdhh");
	this.shape_1067.setTransform(-6.1,-13.5);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#000000").ss(5,1,1).p("AAAB3IgOiMIAdhh");
	this.shape_1068.setTransform(-6.1,-13.4);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#000000").ss(5,1,1).p("AABB4IgQiOIAfhh");
	this.shape_1069.setTransform(-6.1,-13.4);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#000000").ss(5,1,1).p("AACB5IgRiQIAfhh");
	this.shape_1070.setTransform(-6.2,-13.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_821}]}).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_842}]},1).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_835}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_843}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_845}]},1).to({state:[{t:this.shape_846}]},1).to({state:[{t:this.shape_847}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_853}]},1).to({state:[{t:this.shape_854}]},1).to({state:[{t:this.shape_855}]},1).to({state:[{t:this.shape_856}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_882}]},1).to({state:[{t:this.shape_883}]},1).to({state:[{t:this.shape_884}]},1).to({state:[{t:this.shape_885}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_890}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_896}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_898}]},1).to({state:[{t:this.shape_899}]},1).to({state:[{t:this.shape_900}]},1).to({state:[{t:this.shape_901}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_903}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_909}]},1).to({state:[{t:this.shape_910}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_912}]},1).to({state:[{t:this.shape_913}]},1).to({state:[{t:this.shape_914}]},1).to({state:[{t:this.shape_915}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_917}]},1).to({state:[{t:this.shape_918}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_924}]},1).to({state:[{t:this.shape_925}]},1).to({state:[{t:this.shape_926}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_930}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_933}]},1).to({state:[{t:this.shape_934}]},1).to({state:[{t:this.shape_935}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_937}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_941}]},1).to({state:[{t:this.shape_942}]},1).to({state:[{t:this.shape_943}]},1).to({state:[{t:this.shape_944}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_949}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_951}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_953}]},1).to({state:[{t:this.shape_954}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_956}]},1).to({state:[{t:this.shape_957}]},1).to({state:[{t:this.shape_958}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_968}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_971}]},1).to({state:[{t:this.shape_972}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_974}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_977}]},1).to({state:[{t:this.shape_978}]},1).to({state:[{t:this.shape_979}]},1).to({state:[{t:this.shape_980}]},1).to({state:[{t:this.shape_981}]},1).to({state:[{t:this.shape_982}]},1).to({state:[{t:this.shape_983}]},1).to({state:[{t:this.shape_984}]},1).to({state:[{t:this.shape_985}]},1).to({state:[{t:this.shape_986}]},1).to({state:[{t:this.shape_987}]},1).to({state:[{t:this.shape_988}]},1).to({state:[{t:this.shape_989}]},1).to({state:[{t:this.shape_990}]},1).to({state:[{t:this.shape_991}]},1).to({state:[{t:this.shape_992}]},1).to({state:[{t:this.shape_993}]},1).to({state:[{t:this.shape_994}]},1).to({state:[{t:this.shape_995}]},1).to({state:[{t:this.shape_996}]},1).to({state:[{t:this.shape_997}]},1).to({state:[{t:this.shape_998}]},1).to({state:[{t:this.shape_999}]},1).to({state:[{t:this.shape_1000}]},1).to({state:[{t:this.shape_1001}]},1).to({state:[{t:this.shape_1002}]},1).to({state:[{t:this.shape_1003}]},1).to({state:[{t:this.shape_1004}]},1).to({state:[{t:this.shape_1005}]},1).to({state:[{t:this.shape_1006}]},1).to({state:[{t:this.shape_1007}]},1).to({state:[{t:this.shape_1008}]},1).to({state:[{t:this.shape_1009}]},1).to({state:[{t:this.shape_1010}]},1).to({state:[{t:this.shape_1011}]},1).to({state:[{t:this.shape_1012}]},1).to({state:[{t:this.shape_1013}]},1).to({state:[{t:this.shape_1014}]},1).to({state:[{t:this.shape_1015}]},1).to({state:[{t:this.shape_1016}]},1).to({state:[{t:this.shape_1017}]},1).to({state:[{t:this.shape_1018}]},1).to({state:[{t:this.shape_1019}]},1).to({state:[{t:this.shape_1020}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_1021}]},1).to({state:[{t:this.shape_1022}]},1).to({state:[{t:this.shape_1023}]},1).to({state:[{t:this.shape_1024}]},1).to({state:[{t:this.shape_1025}]},1).to({state:[{t:this.shape_1026}]},1).to({state:[{t:this.shape_1027}]},1).to({state:[{t:this.shape_1028}]},1).to({state:[{t:this.shape_1029}]},1).to({state:[{t:this.shape_1030}]},1).to({state:[{t:this.shape_1031}]},1).to({state:[{t:this.shape_1032}]},1).to({state:[{t:this.shape_1033}]},1).to({state:[{t:this.shape_1034}]},1).to({state:[{t:this.shape_1035}]},1).to({state:[{t:this.shape_1036}]},1).to({state:[{t:this.shape_1037}]},1).to({state:[{t:this.shape_1038}]},1).to({state:[{t:this.shape_1039}]},1).to({state:[{t:this.shape_1040}]},1).to({state:[{t:this.shape_1041}]},1).to({state:[{t:this.shape_1042}]},1).to({state:[{t:this.shape_1043}]},1).to({state:[{t:this.shape_1044}]},1).to({state:[{t:this.shape_1045}]},1).to({state:[{t:this.shape_1046}]},1).to({state:[{t:this.shape_1047}]},1).to({state:[{t:this.shape_1048}]},1).to({state:[{t:this.shape_1049}]},1).to({state:[{t:this.shape_1050}]},1).to({state:[{t:this.shape_1049}]},1).to({state:[{t:this.shape_1048}]},1).to({state:[{t:this.shape_1051}]},1).to({state:[{t:this.shape_1052}]},1).to({state:[{t:this.shape_1053}]},1).to({state:[{t:this.shape_1054}]},1).to({state:[{t:this.shape_1055}]},1).to({state:[{t:this.shape_1056}]},1).to({state:[{t:this.shape_1041}]},1).to({state:[{t:this.shape_1039}]},1).to({state:[{t:this.shape_1057}]},1).to({state:[{t:this.shape_1058}]},1).to({state:[{t:this.shape_1036}]},1).to({state:[{t:this.shape_1035}]},1).to({state:[{t:this.shape_1034}]},1).to({state:[{t:this.shape_1059}]},1).to({state:[{t:this.shape_1032}]},1).to({state:[{t:this.shape_1060}]},1).to({state:[{t:this.shape_1030}]},1).to({state:[{t:this.shape_1061}]},1).to({state:[{t:this.shape_1062}]},1).to({state:[{t:this.shape_1063}]},1).to({state:[{t:this.shape_1064}]},1).to({state:[{t:this.shape_1065}]},1).to({state:[{t:this.shape_1066}]},1).to({state:[{t:this.shape_1067}]},1).to({state:[{t:this.shape_1068}]},1).to({state:[{t:this.shape_1069}]},1).to({state:[{t:this.shape_1070}]},1).to({state:[{t:this.shape_1021}]},1).to({state:[{t:this.shape_1021}]},1).to({state:[{t:this.shape_1022}]},1).to({state:[{t:this.shape_1023}]},1).to({state:[{t:this.shape_1024}]},1).to({state:[{t:this.shape_1025}]},1).to({state:[{t:this.shape_1026}]},1).to({state:[{t:this.shape_1027}]},1).to({state:[{t:this.shape_1028}]},1).to({state:[{t:this.shape_1029}]},1).to({state:[{t:this.shape_1030}]},1).to({state:[{t:this.shape_1031}]},1).to({state:[{t:this.shape_1032}]},1).to({state:[{t:this.shape_1033}]},1).to({state:[{t:this.shape_1034}]},1).to({state:[{t:this.shape_1035}]},1).to({state:[{t:this.shape_1036}]},1).to({state:[{t:this.shape_1037}]},1).to({state:[{t:this.shape_1038}]},1).to({state:[{t:this.shape_1039}]},1).to({state:[{t:this.shape_1040}]},1).to({state:[{t:this.shape_1041}]},1).to({state:[{t:this.shape_1042}]},1).to({state:[{t:this.shape_1043}]},1).to({state:[{t:this.shape_1044}]},1).to({state:[{t:this.shape_1045}]},1).to({state:[{t:this.shape_1046}]},1).to({state:[{t:this.shape_1047}]},1).to({state:[{t:this.shape_1048}]},1).to({state:[{t:this.shape_1049}]},1).to({state:[{t:this.shape_1050}]},1).to({state:[{t:this.shape_1049}]},1).to({state:[{t:this.shape_1048}]},1).to({state:[{t:this.shape_1051}]},1).to({state:[{t:this.shape_1052}]},1).to({state:[{t:this.shape_1053}]},1).to({state:[{t:this.shape_1054}]},1).to({state:[{t:this.shape_1055}]},1).to({state:[{t:this.shape_1056}]},1).to({state:[{t:this.shape_1041}]},1).to({state:[{t:this.shape_1039}]},1).to({state:[{t:this.shape_1057}]},1).to({state:[{t:this.shape_1058}]},1).to({state:[{t:this.shape_1036}]},1).to({state:[{t:this.shape_1035}]},1).to({state:[{t:this.shape_1034}]},1).to({state:[{t:this.shape_1059}]},1).to({state:[{t:this.shape_1032}]},1).to({state:[{t:this.shape_1060}]},1).to({state:[{t:this.shape_1030}]},1).to({state:[{t:this.shape_1061}]},1).to({state:[{t:this.shape_1062}]},1).to({state:[{t:this.shape_1063}]},1).to({state:[{t:this.shape_1064}]},1).to({state:[{t:this.shape_1065}]},1).to({state:[{t:this.shape_1066}]},1).to({state:[{t:this.shape_1067}]},1).to({state:[{t:this.shape_1068}]},1).to({state:[{t:this.shape_1069}]},1).to({state:[{t:this.shape_1070}]},1).to({state:[{t:this.shape_1021}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-51.8,26.2,48.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
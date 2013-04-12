(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.testPerso = function() {
	this.initialize();

	// Calque 1
	this.instance = new lib.perso_test();
	this.instance.setTransform(52.8,-25.9,1,1,0,0,180,0,-98.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(42.3,21,24.9,48.8);


// symbols:
(lib.perso_test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,W_D:60,W_BD:73,W_TG:86,W_B:99,W_H:112},true);

	// timeline functions:
	this.frame_58 = function() {
		this.gotoAndPlay("IDLE");
	}
	this.frame_71 = function() {
		this.gotoAndPlay("W_D");
	}
	this.frame_84 = function() {
		this.gotoAndPlay("W_BD");
	}
	this.frame_97 = function() {
		this.gotoAndPlay("W_TG");
	}
	this.frame_110 = function() {
		this.gotoAndPlay("W_B");
	}
	this.frame_123 = function() {
		this.gotoAndPlay("W_H");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(13).call(this.frame_71).wait(13).call(this.frame_84).wait(13).call(this.frame_97).wait(13).call(this.frame_110).wait(13).call(this.frame_123).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Calque 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AgoBBIBRg1IgghM");
	this.shape_6.setTransform(4.4,-32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(5,1,1).p("AgEhCQAUAnAVAkQglAegkAc");
	this.shape_7.setTransform(6.1,-32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("AgShEQAYAmAaAkQggAggfAf");
	this.shape_8.setTransform(7.7,-32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AgYBIIA2hFIg8hK");
	this.shape_9.setTransform(9.2,-32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("AgRhEQAXAkAaAjQggAlgfAd");
	this.shape_10.setTransform(7.7,-32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(5,1,1).p("AgChCQASAkATAhQgjAlgiAb");
	this.shape_11.setTransform(5.9,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},99).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},5).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(13));

	// bd
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AAZBIIg2hFIA7hK");
	this.shape_12.setTransform(-12.5,-32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(5,1,1).p("AAMhDQgWAmgYAlQAiAeAjAe");
	this.shape_13.setTransform(-10.6,-32.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(5,1,1).p("AApBBIhRg1IAghM");
	this.shape_14.setTransform(-8.5,-32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AAKhDQgUAkgWAiQAgAlAhAc");
	this.shape_15.setTransform(-10.5,-32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},103).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(17));

	// c
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AhKhVICVAAIhKCrIhLir").cp();
	this.shape_16.setTransform(-1.9,-31.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AhKhVICVAAIhLCrIhKir").cp();
	this.shape_17.setTransform(-1.9,-31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).to({state:[]},26).to({state:[{t:this.shape_16}]},13).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

	// Calque 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AgoBBIBRg1IgghM");
	this.shape_18.setTransform(4.4,-32.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(5,1,1).p("AgEhCQAUAnAVAkQglAegkAc");
	this.shape_19.setTransform(6.1,-32.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(5,1,1).p("AgShEQAYAmAaAkQggAggfAf");
	this.shape_20.setTransform(7.7,-32.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AgYBIIA2hFIg8hK");
	this.shape_21.setTransform(9.2,-32.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(5,1,1).p("AgRhEQAXAkAaAjQggAlgfAd");
	this.shape_22.setTransform(7.7,-32.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(5,1,1).p("AgChCQASAkATAhQgjAlgiAb");
	this.shape_23.setTransform(5.9,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},112).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},5).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

	// bd
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AAZBIIg2hFIA7hK");
	this.shape_24.setTransform(-12.5,-32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(5,1,1).p("AAMhDQgWAmgYAlQAiAeAjAe");
	this.shape_25.setTransform(-10.6,-32.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(5,1,1).p("AApBBIhRg1IAghM");
	this.shape_26.setTransform(-8.5,-32.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AAKhDQgUAkgWAiQAgAlAhAc");
	this.shape_27.setTransform(-10.5,-32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},112).to({state:[{t:this.shape_24}]},4).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(4));

	// bd
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(5,1,1).p("AAYhSIgvBMIAXBZ");
	this.shape_28.setTransform(-11.9,-31.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(5,1,1).p("AABBTIgYhYIAvhN");
	this.shape_29.setTransform(-11.9,-31.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AACBSIgahXIAxhM");
	this.shape_30.setTransform(-11.9,-31.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(5,1,1).p("AADBSIgbhWIAxhN");
	this.shape_31.setTransform(-12,-31.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(5,1,1).p("AAEBRIgchVIAxhM");
	this.shape_32.setTransform(-12,-31.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AAFBRIgehUIAzhN");
	this.shape_33.setTransform(-12,-32);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(5,1,1).p("AAGBQIgfhTIAzhM");
	this.shape_34.setTransform(-12,-32);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5,1,1).p("AAHBQIgghTIAzhM");
	this.shape_35.setTransform(-12.1,-32);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AAIBPIghhRIAzhM");
	this.shape_36.setTransform(-12.1,-32);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(5,1,1).p("AAJBPIgihRIAzhM");
	this.shape_37.setTransform(-12.1,-32);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(5,1,1).p("AAKBPIgkhQIA1hN");
	this.shape_38.setTransform(-12.1,-32);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("AALBOIglhPIA1hM");
	this.shape_39.setTransform(-12.1,-32);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5,1,1).p("AAMBNIgmhNIA1hM");
	this.shape_40.setTransform(-12.2,-32);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(5,1,1).p("AANBNIgohNIA3hM");
	this.shape_41.setTransform(-12.2,-32);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("AAOBMIgphMIA3hL");
	this.shape_42.setTransform(-12.2,-32);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(5,1,1).p("AAPBMIgqhMIA3hL");
	this.shape_43.setTransform(-12.3,-32);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(5,1,1).p("AAQBMIgrhMIA3hL");
	this.shape_44.setTransform(-12.3,-32);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AARBLIgthLIA5hK");
	this.shape_45.setTransform(-12.3,-32);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(5,1,1).p("AASBLIguhLIA5hK");
	this.shape_46.setTransform(-12.3,-32);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(5,1,1).p("AATBKIgvhKIA5hJ");
	this.shape_47.setTransform(-12.3,-32);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AATBKIgvhJIA5hK");
	this.shape_48.setTransform(-12.4,-32);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(5,1,1).p("AAUBKIgwhJIA5hK");
	this.shape_49.setTransform(-12.4,-32);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(5,1,1).p("AAVBJIgyhHIA7hK");
	this.shape_50.setTransform(-12.4,-32);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AAWBJIgzhHIA7hK");
	this.shape_51.setTransform(-12.4,-32);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(5,1,1).p("AAXBIIg0hGIA7hJ");
	this.shape_52.setTransform(-12.5,-32);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(5,1,1).p("AAYBIIg1hFIA7hK");
	this.shape_53.setTransform(-12.5,-32);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AAZBHIg3hEIA9hJ");
	this.shape_54.setTransform(-12.5,-32);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(5,1,1).p("AAaBHIg4hEIA9hJ");
	this.shape_55.setTransform(-12.5,-32.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(5,1,1).p("AAVBJIgxhIIA5hJ");
	this.shape_56.setTransform(-12.4,-32);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("AAQBLIgrhLIA3hK");
	this.shape_57.setTransform(-12.3,-32);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(5,1,1).p("AAOBNIgphNIA3hM");
	this.shape_58.setTransform(-12.2,-32);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(5,1,1).p("AAMBOIgmhOIA1hN");
	this.shape_59.setTransform(-12.2,-32);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(5,1,1).p("AAKBOIgkhPIA1hM");
	this.shape_60.setTransform(-12.1,-32);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(5,1,1).p("AAJBPIgjhRIA1hM");
	this.shape_61.setTransform(-12.1,-32);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(5,1,1).p("AAIBQIghhSIAzhN");
	this.shape_62.setTransform(-12.1,-32);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(5,1,1).p("AABBSIgZhXIAxhM");
	this.shape_63.setTransform(-11.9,-31.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(5,1,1).p("AASBOQgSgogRgmQAOgnALgm");
	this.shape_64.setTransform(-9.4,-32.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgjQACgkACgn");
	this.shape_65.setTransform(-5.8,-32.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(5,1,1).p("AAnBEQgegdgcgeQgJglgKgn");
	this.shape_66.setTransform(-3.1,-32.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(5,1,1).p("AA4A/QgkgYghgYQgVgmgVgn");
	this.shape_67.setTransform(-0.6,-33);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(5,1,1).p("ABKA6QgqgTgogTQggglghgo");
	this.shape_68.setTransform(1.9,-33.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(5,1,1).p("Ahag0IBYBOIBdAb");
	this.shape_69.setTransform(4.4,-33.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgjQADgkABgn");
	this.shape_70.setTransform(-5.8,-32.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(5,1,1).p("AANBRQgOgqgRgoQASgnATgo");
	this.shape_71.setTransform(-11,-30.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(5,1,1).p("AAUBOQgUgmgTgmQAOgmALgp");
	this.shape_72.setTransform(-9.4,-31);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(5,1,1).p("AAYBMQgYgjgXgiQAIgoAIgq");
	this.shape_73.setTransform(-7.5,-31.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(5,1,1).p("AAcBJQgcgegbgfQADgpACgr");
	this.shape_74.setTransform(-5.7,-31.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(5,1,1).p("AAjBHQgggbgfgbQgDgqgDgt");
	this.shape_75.setTransform(-4.1,-31.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(5,1,1).p("AgshDIASBZIBHAu");
	this.shape_76.setTransform(-2.8,-32);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(5,1,1).p("AgXhSIAvBMIgYBZ");
	this.shape_77.setTransform(-4.6,-30.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(5,1,1).p("AgMBRQAOgqARgoQgTgngSgo");
	this.shape_78.setTransform(-4.9,-31);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQATgmAUgmQgNgmgMgp");
	this.shape_79.setTransform(-5.8,-31.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(5,1,1).p("AgXBMQAXgjAYgiQgIgogIgq");
	this.shape_80.setTransform(-7.1,-31.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAbgeAcgfQgCgpgDgr");
	this.shape_81.setTransform(-8.3,-31.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAhgbAegbQADgqADgt");
	this.shape_82.setTransform(-9.2,-31.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(5,1,1).p("AAthDIgSBZIhHAu");
	this.shape_83.setTransform(-9.9,-32);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(5,1,1).p("AAZhEIgxA/IAdBK");
	this.shape_84.setTransform(-12,-33.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(5,1,1).p("AAMBGIgmhIIA1hD");
	this.shape_85.setTransform(-12.2,-32.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(5,1,1).p("AATBGIgvhGIA5hF");
	this.shape_86.setTransform(-12.3,-32.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(5,1,1).p("AAZBIIg2hFIA7hK");
	this.shape_87.setTransform(-12.5,-32.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(5,1,1).p("AASBHIguhHIA5hG");
	this.shape_88.setTransform(-12.3,-32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28}]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_55}]},1).to({state:[]},1).to({state:[{t:this.shape_87}]},5).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_55}]},1).to({state:[]},1).to({state:[{t:this.shape_87}]},5).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_84}]},1).wait(1));

	// jg
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(5,1,1).p("AgYhvIAxBkIAAB7");
	this.shape_89.setTransform(3,-14.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(5,1,1).p("AgYhvIAxBkIgBB7");
	this.shape_90.setTransform(3,-14.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBjIgBB6");
	this.shape_91.setTransform(3,-14.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBjIgCB6");
	this.shape_92.setTransform(3.1,-14.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBiIgCB7");
	this.shape_93.setTransform(3.1,-14.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(5,1,1).p("AgYhuIAxBiIgDB7");
	this.shape_94.setTransform(3.2,-14.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(5,1,1).p("AgZhtIAzBhIgEB6");
	this.shape_95.setTransform(3.2,-14.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(5,1,1).p("AgZhtIAzBhIgFB6");
	this.shape_96.setTransform(3.3,-14.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(5,1,1).p("AgZhsIAzBgIgGB5");
	this.shape_97.setTransform(3.4,-14);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(5,1,1).p("AgZhsIAzBfIgGB6");
	this.shape_98.setTransform(3.4,-14);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(5,1,1).p("AgahsIA1BfIgIB6");
	this.shape_99.setTransform(3.5,-14);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(5,1,1).p("AgahrIA1BeIgIB5");
	this.shape_100.setTransform(3.5,-13.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(5,1,1).p("AgahrIA1BeIgJB5");
	this.shape_101.setTransform(3.6,-13.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(5,1,1).p("AgahrIA1BeIgKB5");
	this.shape_102.setTransform(3.7,-13.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(5,1,1).p("AgahqIA1BcIgKB5");
	this.shape_103.setTransform(3.7,-13.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(5,1,1).p("AgbhqIA3BcIgLB5");
	this.shape_104.setTransform(3.7,-13.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(5,1,1).p("AgbhqIA3BcIgMB5");
	this.shape_105.setTransform(3.8,-13.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(5,1,1).p("AgbhpIA3BbIgMB4");
	this.shape_106.setTransform(3.8,-13.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(5,1,1).p("AgbhpIA3BbIgNB4");
	this.shape_107.setTransform(3.9,-13.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(5,1,1).p("AgahsIA0BfIgGB6");
	this.shape_108.setTransform(3.4,-14);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(5,1,1).p("AgZhtIAzBhIgGB6");
	this.shape_109.setTransform(3.4,-14.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(5,1,1).p("AgShyQASAxATAwQgFBFgGA/");
	this.shape_110.setTransform(1.8,-13.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(5,1,1).p("AgPh0QAPAyAQAzQgOBGgLA+");
	this.shape_111.setTransform(0.9,-13.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(5,1,1).p("AgDh3IAYBqIgpCF");
	this.shape_112.setTransform(-0.8,-13.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(5,1,1).p("AgYB1QAYhBAZg/QgMg2gLgz");
	this.shape_113.setTransform(-2.6,-13.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(5,1,1).p("AgbBzQAbg/Acg9QgJg1gKg0");
	this.shape_114.setTransform(-4.4,-13.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(5,1,1).p("AAQhvIARBlIhBB6");
	this.shape_115.setTransform(-6.1,-14.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(5,1,1).p("AAAhoQAQAvARAvQghBEggAv");
	this.shape_116.setTransform(-4.4,-15);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(5,1,1).p("AgQhhQAYAsAZArQgeBAgjAs");
	this.shape_117.setTransform(-2.7,-15.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(5,1,1).p("AgphbIBTBjIhSBU");
	this.shape_118.setTransform(-0.2,-16.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(5,1,1).p("AgghhQAgAvAhAuQgWA4gaAu");
	this.shape_119.setTransform(0.5,-15.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(5,1,1).p("AgchoQAcAwAdAxQgLA9gOAz");
	this.shape_120.setTransform(1.7,-15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(5,1,1).p("AgThuQATAuAUAuQgEBEgFA9");
	this.shape_121.setTransform(-0.8,-11.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(5,1,1).p("AgQhtQAQAuARAuQgLBDgJA8");
	this.shape_122.setTransform(-0.8,-10.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(5,1,1).p("AgKhrIAbBbIghB8");
	this.shape_123.setTransform(-1,-10.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(5,1,1).p("AgTBvQATg8AUg8QgKg1gKgw");
	this.shape_124.setTransform(-2.5,-10.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(5,1,1).p("AgXByQAXg9AYg7QgIg4gIgz");
	this.shape_125.setTransform(-4,-11.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(5,1,1).p("AASh0IAKBxIg3B4");
	this.shape_126.setTransform(-5.4,-12.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(5,1,1).p("AgfBsQAfg1Agg1QgJg4gKg1");
	this.shape_127.setTransform(-4.6,-13);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(5,1,1).p("AgkBkQAkgwAlgvQgPg1gPgz");
	this.shape_128.setTransform(-3.7,-13.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(5,1,1).p("AAChaIAoBhIhTBU");
	this.shape_129.setTransform(-2.9,-14.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(5,1,1).p("AgOhhQAUAyAWAwQgcAwgbAx");
	this.shape_130.setTransform(-1.3,-13.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(5,1,1).p("AgWhoQAWAyAXAyQgOA1gMA4");
	this.shape_131.setTransform(-0.7,-12.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(5,1,1).p("AAZh4IgwBkIgBCN");
	this.shape_132.setTransform(-4.3,-12.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(5,1,1).p("AAUh1QgUAygTAyQAEBGAFBB");
	this.shape_133.setTransform(-4,-12.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(5,1,1).p("AAQhyQgQAygPAyQAKBDAIA+");
	this.shape_134.setTransform(-3.7,-13.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(5,1,1).p("AAKhvIgYBqIAeB1");
	this.shape_135.setTransform(-3.1,-13.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(5,1,1).p("AAAhzQgJAugKAuQATBOAUA9");
	this.shape_136.setTransform(-2.3,-13.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(5,1,1).p("AgIh4QgJAxgJAwQAcBQAZBA");
	this.shape_137.setTransform(-1.6,-13);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(5,1,1).p("AgRh8IgQBmIBDCT");
	this.shape_138.setTransform(-1,-12.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(5,1,1).p("AgFhxQgLAugLAuQAEARADAOQAXA0AZA0");
	this.shape_139.setTransform(-2.1,-13.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(5,1,1).p("AAGhmQgLApgOApQgBAQgCANQAWAvAXAv");
	this.shape_140.setTransform(-3.3,-14.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(5,1,1).p("AAWhbIgrBjIAqBU");
	this.shape_141.setTransform(-4.8,-15.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(5,1,1).p("AAEBkQgMgvgOgvQAYg9AVgs");
	this.shape_142.setTransform(-4.6,-14.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(5,1,1).p("AgKBtQgGg0gHg1QAYhBAXgv");
	this.shape_143.setTransform(-4.4,-13.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(5,1,1).p("AAah1IgwBkIgDCH");
	this.shape_144.setTransform(-4.4,-12.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(5,1,1).p("AgYheIAxBiIgSBb");
	this.shape_145.setTransform(3,-16);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(5,1,1).p("AgUhiIApBgIgKBl");
	this.shape_146.setTransform(2.7,-15.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(5,1,1).p("AgQhmIAhBcIgDBx");
	this.shape_147.setTransform(2.5,-14.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(5,1,1).p("AgOhrIAYBZIAFB9");
	this.shape_148.setTransform(2.6,-13.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(5,1,1).p("AgPhxIAcBdIADCG");
	this.shape_149.setTransform(2.5,-13.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(5,1,1).p("AgQh4IAgBhIABCQ");
	this.shape_150.setTransform(2.4,-13);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(5,1,1).p("AgSh/IAlBmIgBCZ");
	this.shape_151.setTransform(2.4,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89}]}).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_145}]},1).wait(1));

	// c
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AguhbIBdAfIgnCXIg2i2").cp();
	this.shape_152.setTransform(-2.7,-32.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AguhbIBdAfIgnCYIg2i3").cp();
	this.shape_153.setTransform(-2.7,-32.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("AguhaIBdAeIgnCYIg2i2").cp();
	this.shape_154.setTransform(-2.7,-32.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F3B58B").s("#000000").ss(1,1,1).p("Ag9hRIB7gKIg7C3IhAit").cp();
	this.shape_155.setTransform(-2.1,-32.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_152}]},60).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_155}]},1).to({state:[]},1).to({state:[]},13).wait(13));

	// bd
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(5,1,1).p("AgXhWIAvBKIgZBj");
	this.shape_156.setTransform(8,-31.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(5,1,1).p("AgWhVIAtBKIgXBh");
	this.shape_157.setTransform(7.9,-31.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(5,1,1).p("AgVhVIArBKIgWBh");
	this.shape_158.setTransform(7.7,-31.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(5,1,1).p("AgUhUIApBKIgVBf");
	this.shape_159.setTransform(7.7,-31.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(5,1,1).p("AgThUIAnBKIgTBf");
	this.shape_160.setTransform(7.6,-31.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(5,1,1).p("AgThUIAnBKIgSBf");
	this.shape_161.setTransform(7.5,-31.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(5,1,1).p("AgShTIAlBJIgRBe");
	this.shape_162.setTransform(7.4,-31.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(5,1,1).p("AgRhTIAjBKIgPBd");
	this.shape_163.setTransform(7.3,-31.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(5,1,1).p("AgQhTIAhBKIgNBd");
	this.shape_164.setTransform(7.3,-31.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(5,1,1).p("AgPhSIAfBJIgLBc");
	this.shape_165.setTransform(7.2,-31.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(5,1,1).p("AgPhSIAfBJIgKBc");
	this.shape_166.setTransform(7.1,-31.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(5,1,1).p("AgOhSIAdBKIgJBb");
	this.shape_167.setTransform(7,-31.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(5,1,1).p("AgNhRIAbBJIgHBa");
	this.shape_168.setTransform(7,-31.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(5,1,1).p("AgMhRIAZBJIgFBa");
	this.shape_169.setTransform(6.9,-31.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(5,1,1).p("AgLhRIAXBJIgDBa");
	this.shape_170.setTransform(6.8,-31.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(5,1,1).p("AgLhRIAXBKIgCBZ");
	this.shape_171.setTransform(6.7,-31.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIAVBJIgBBY");
	this.shape_172.setTransform(6.6,-31.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIAUBJIABBY");
	this.shape_173.setTransform(6.6,-31.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIASBJIADBY");
	this.shape_174.setTransform(6.6,-31.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIAQBJIAFBW");
	this.shape_175.setTransform(6.6,-31.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIAPBJIAGBW");
	this.shape_176.setTransform(6.6,-31.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIANBJIAIBW");
	this.shape_177.setTransform(6.6,-31.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(5,1,1).p("AgKhOIAMBIIAJBV");
	this.shape_178.setTransform(6.6,-31.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(5,1,1).p("AgKhOIAKBJIALBU");
	this.shape_179.setTransform(6.6,-31.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAJBIIAMBT");
	this.shape_180.setTransform(6.6,-31.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAHBIIAOBT");
	this.shape_181.setTransform(6.6,-31.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAGBJIAPBS");
	this.shape_182.setTransform(6.6,-31.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(5,1,1).p("AgKhNIAEBJIARBS");
	this.shape_183.setTransform(6.6,-31.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(5,1,1).p("AgKhOIALBJIAKBU");
	this.shape_184.setTransform(6.6,-31.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(5,1,1).p("AgKhPIAOBJIAHBW");
	this.shape_185.setTransform(6.6,-31.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIASBJIADBX");
	this.shape_186.setTransform(6.6,-31.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIATBJIACBY");
	this.shape_187.setTransform(6.6,-31.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(5,1,1).p("AgKhQIAVBJIAABY");
	this.shape_188.setTransform(6.6,-31.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(5,1,1).p("AgLhRIAXBKIgDBZ");
	this.shape_189.setTransform(6.8,-31.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(5,1,1).p("AgNhRIAbBJIgGBa");
	this.shape_190.setTransform(6.9,-31.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(5,1,1).p("AgNhSIAbBKIgHBb");
	this.shape_191.setTransform(7,-31.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(5,1,1).p("AgOhSIAdBJIgJBc");
	this.shape_192.setTransform(7.1,-31.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(5,1,1).p("AgQhTIAhBKIgMBd");
	this.shape_193.setTransform(7.2,-31.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(5,1,1).p("Ahag0IBYBOIBdAb");
	this.shape_194.setTransform(4.4,-33.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(5,1,1).p("ABKA6QgqgTgogTQggglghgo");
	this.shape_195.setTransform(1.9,-33.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(5,1,1).p("AA4A/QgkgYghgYQgVgmgVgn");
	this.shape_196.setTransform(-0.6,-33);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(5,1,1).p("AAnBEQgegdgcgeQgJglgKgn");
	this.shape_197.setTransform(-3.1,-32.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgjQADgkABgn");
	this.shape_198.setTransform(-5.8,-32.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(5,1,1).p("AASBOQgSgogRgmQAOgnALgm");
	this.shape_199.setTransform(-9.4,-32.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(5,1,1).p("AAYhSIgvBMIAXBZ");
	this.shape_200.setTransform(-11.9,-31.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(5,1,1).p("AAYBJQgYgjgXgjQACgkACgn");
	this.shape_201.setTransform(-5.8,-32.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(5,1,1).p("Agwg7IAEBbIBdAc");
	this.shape_202.setTransform(8.6,-34.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(5,1,1).p("AApBAQgpgTgogTQACgrADgu");
	this.shape_203.setTransform(7.3,-33.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(5,1,1).p("AAjBEQgjgZgigYQAHgqAHgs");
	this.shape_204.setTransform(5.9,-33.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(5,1,1).p("AAeBHQgegdgcgeQALgoALgr");
	this.shape_205.setTransform(4.5,-33);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(5,1,1).p("AAYBLQgYgigXgjQAQgnAOgp");
	this.shape_206.setTransform(3,-32.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(5,1,1).p("AAQBPQgQgogTgnQATgnAUgn");
	this.shape_207.setTransform(1.8,-32.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(5,1,1).p("AAthDIgSBZIhHAu");
	this.shape_208.setTransform(-0.4,-33.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAhgbAegbQADgqADgt");
	this.shape_209.setTransform(0.3,-33.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAbgeAcgfQgCgpgDgr");
	this.shape_210.setTransform(1.4,-33);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(5,1,1).p("AgXBMQAXgiAYgjQgIgogIgq");
	this.shape_211.setTransform(2.7,-32.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQATgmAUgmQgNgmgMgp");
	this.shape_212.setTransform(4.1,-32.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(5,1,1).p("AgMBRQAOgqARgoQgTgngSgo");
	this.shape_213.setTransform(5.2,-32.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(5,1,1).p("AgXhSIAvBMIgYBZ");
	this.shape_214.setTransform(5.6,-31.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(5,1,1).p("AgMBRQAEgKAEgKQAKggANgeQgTgngSgo");
	this.shape_215.setTransform(5.2,-32.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(5,1,1).p("AgTBOQAFgJAFgJQANgdAQgdQgNgmgMgp");
	this.shape_216.setTransform(4.1,-32.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(5,1,1).p("AgXBMQAGgIAGgJQAQgaATgaQgIgogIgq");
	this.shape_217.setTransform(2.7,-32.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(5,1,1).p("AgbBJQAHgHAHgHQATgYAWgXQgCgpgDgr");
	this.shape_218.setTransform(1.4,-33);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(5,1,1).p("AgiBHQAIgHAIgGQAWgVAZgUQADgqADgt");
	this.shape_219.setTransform(0.3,-33.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(5,1,1).p("AAthDIgSBZIg1AjIgSAL");
	this.shape_220.setTransform(-0.4,-33.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(5,1,1).p("AgYBIIA2hFIg8hK");
	this.shape_221.setTransform(9.2,-32.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(5,1,1).p("AgbhFIA3BFIgqBG");
	this.shape_222.setTransform(8.7,-32.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(5,1,1).p("AgYhEIAxA+IgdBL");
	this.shape_223.setTransform(8.3,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156}]}).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[]},1).to({state:[{t:this.shape_221}]},4).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_221}]},1).to({state:[]},1).to({state:[]},4).to({state:[{t:this.shape_221}]},4).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_221}]},1).to({state:[]},1).wait(4));

	// jd
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(5,1,1).p("AAZhvIgxBkIAAB7");
	this.shape_224.setTransform(-7,-14.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(5,1,1).p("AgXBwIAAh7IAvhk");
	this.shape_225.setTransform(-7,-14.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(5,1,1).p("AgXBwIABh7IAuhk");
	this.shape_226.setTransform(-7,-14.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIABh7IAuhi");
	this.shape_227.setTransform(-7,-14.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIACh7IAthi");
	this.shape_228.setTransform(-7,-14.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIADh7IAshi");
	this.shape_229.setTransform(-7,-14.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(5,1,1).p("AgXBvIAEh7IArhi");
	this.shape_230.setTransform(-7,-14.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(5,1,1).p("AgXBuIAEh7IArhg");
	this.shape_231.setTransform(-7,-14.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(5,1,1).p("AgXBuIAFh7IAqhg");
	this.shape_232.setTransform(-7,-14.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(5,1,1).p("AgWBuIAFh7IAohg");
	this.shape_233.setTransform(-7.1,-14.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(5,1,1).p("AgWBuIAGh7IAnhg");
	this.shape_234.setTransform(-7.1,-14.1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(5,1,1).p("AgWBtIAHh7IAmhe");
	this.shape_235.setTransform(-7.1,-14);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(5,1,1).p("AgWBtIAIh7IAlhe");
	this.shape_236.setTransform(-7.1,-14);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(5,1,1).p("AgWBtIAJh7IAkhe");
	this.shape_237.setTransform(-7.1,-14);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(5,1,1).p("AgWBsIAKh7IAjhc");
	this.shape_238.setTransform(-7.1,-13.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(5,1,1).p("AgWBsIALh7IAihc");
	this.shape_239.setTransform(-7.1,-13.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(5,1,1).p("AgVBsIALh7IAghc");
	this.shape_240.setTransform(-7.2,-13.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIAMh7IAfha");
	this.shape_241.setTransform(-7.2,-13.8);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIANh7IAeha");
	this.shape_242.setTransform(-7.2,-13.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIAOh7IAdha");
	this.shape_243.setTransform(-7.2,-13.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(5,1,1).p("AgVBrIAPh8IAchZ");
	this.shape_244.setTransform(-7.2,-13.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(5,1,1).p("AgVBsIAKh7IAhhc");
	this.shape_245.setTransform(-7.2,-13.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(5,1,1).p("AAQhvIARBlIhBB6");
	this.shape_246.setTransform(-6.1,-14.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(5,1,1).p("AAAhoQAQAvARAvQghBEggAv");
	this.shape_247.setTransform(-4.4,-15);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(5,1,1).p("AgQhhQAYAsAZArQgeBAgjAs");
	this.shape_248.setTransform(-2.7,-15.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(5,1,1).p("AgphbIBTBjIhSBU");
	this.shape_249.setTransform(-0.2,-16.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(5,1,1).p("AgghhQAgAvAhAuQgWA4gaAu");
	this.shape_250.setTransform(0.5,-15.7);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(5,1,1).p("AgchoQAcAwAdAxQgLA9gOAz");
	this.shape_251.setTransform(1.7,-15);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(5,1,1).p("AgYhvIAxBkIAAB7");
	this.shape_252.setTransform(3,-14.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(5,1,1).p("AgShyQASAxATAwQgFBFgGA/");
	this.shape_253.setTransform(1.8,-13.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(5,1,1).p("AgPh0QAPAyAQAzQgOBGgLA+");
	this.shape_254.setTransform(0.9,-13.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(5,1,1).p("AgDh3IAYBqIgpCF");
	this.shape_255.setTransform(-0.8,-13.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(5,1,1).p("AACh0QALA0ALA1QgYBBgXA/");
	this.shape_256.setTransform(-2.6,-13.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(5,1,1).p("AAKhyQAJA1AJA0QgcA+gbA+");
	this.shape_257.setTransform(-4.4,-13.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(5,1,1).p("AAShvIAOBqIg/B1");
	this.shape_258.setTransform(-6.3,-14.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(5,1,1).p("AAMhoIARBmIg5Br");
	this.shape_259.setTransform(-0.6,-12.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(5,1,1).p("AADhmQAMAxAMAxQgbA1gaA2");
	this.shape_260.setTransform(0,-12.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(5,1,1).p("AgEhlQAOAvAQAwQgaA1gZA3");
	this.shape_261.setTransform(0.4,-13.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(5,1,1).p("AgOhkIAnBbIgxBu");
	this.shape_262.setTransform(1,-13.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(5,1,1).p("AgThpQATAvAUAvQgUA6gTA7");
	this.shape_263.setTransform(1.8,-13.4);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(5,1,1).p("AgThuQATAxAUAwQgQA9gPA/");
	this.shape_264.setTransform(2.1,-12.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(5,1,1).p("AgUhzIApBkIgXCD");
	this.shape_265.setTransform(2.4,-12.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(5,1,1).p("AgRh0QARAzASAzQgPBBgOBC");
	this.shape_266.setTransform(2.5,-12.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(5,1,1).p("AgMh2QAOA0AQA0QgSBCgRBD");
	this.shape_267.setTransform(2.3,-11.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(5,1,1).p("AACh0QALA0AMA0QgZBAgYBB");
	this.shape_268.setTransform(0.9,-11.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(5,1,1).p("AAJhyQAKA0AKAzQgdA+gcBA");
	this.shape_269.setTransform(0,-11.6);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(5,1,1).p("AAQhvIARBmIhBB5");
	this.shape_270.setTransform(-1,-11.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(5,1,1).p("AgPhvIgRBmIBBB5");
	this.shape_271.setTransform(1.7,-12.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(5,1,1).p("AgDhoQgMAvgMAvQAdBEAaAv");
	this.shape_272.setTransform(0.4,-13.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(5,1,1).p("AAHhhQgNArgPAsQAVBAAWAs");
	this.shape_273.setTransform(-0.8,-14.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(5,1,1).p("AAWhbIgrBiIAqBV");
	this.shape_274.setTransform(-2.5,-14.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(5,1,1).p("AAVhhQgVAugUAvQALA4AOAu");
	this.shape_275.setTransform(-2.5,-14.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(5,1,1).p("AAXhoQgXAxgWAwQAHA9AIAz");
	this.shape_276.setTransform(-2.7,-14.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(5,1,1).p("AAZhuIgxBkIADB5");
	this.shape_277.setTransform(-2.9,-14);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(5,1,1).p("AAUhuQgUAygTAyQAFA9AGA8");
	this.shape_278.setTransform(-2.3,-13.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(5,1,1).p("AAQhvQgQA0gPAzQALA9AIA7");
	this.shape_279.setTransform(-1.7,-13.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(5,1,1).p("AAKhvIgYBqIAeB1");
	this.shape_280.setTransform(-0.9,-13.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(5,1,1).p("AAAhvQgJAygLAxQAUBBAVA7");
	this.shape_281.setTransform(0,-13.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(5,1,1).p("AgHhvQgJAygKAyQAbBBAaA6");
	this.shape_282.setTransform(0.8,-13);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(5,1,1).p("AARh5IghBhIATCS");
	this.shape_283.setTransform(-6.2,-13.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(5,1,1).p("AAAB1IgNiIIAbhh");
	this.shape_284.setTransform(-6.1,-13.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(5,1,1).p("AgGBwIgFh/IAXhg");
	this.shape_285.setTransform(-6,-13.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(5,1,1).p("AgKBrIAEh1IARhg");
	this.shape_286.setTransform(-6.2,-13.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(5,1,1).p("AgJBoIgChuIAXhh");
	this.shape_287.setTransform(-6.1,-14.4);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(5,1,1).p("AgFBlIgJhnIAdhi");
	this.shape_288.setTransform(-6.2,-15.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(5,1,1).p("AAShhIgjBhIAPBi");
	this.shape_289.setTransform(-6.3,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_224}]}).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_283}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.6,-51.8,26.2,48.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
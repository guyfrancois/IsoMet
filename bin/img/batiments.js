(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.batiments = function() {
	this.initialize();

	// Calque 1
	this.Tower_Fountain = new lib.TowerFountain();
	this.Tower_Fountain.setTransform(220.5,372.6);

	this.House1 = new lib.House1();
	this.House1.setTransform(55.4,69.7);

	this.Flag = new lib.Flag();
	this.Flag.setTransform(494.4,313.8,1,1,0,0,0,0,-20.7);

	this.Fountain = new lib.Fountain();
	this.Fountain.setTransform(500,376.6,1,1,0,0,0,0,-0.2);

	this.Monster_Den = new lib.MonsterDen();
	this.Monster_Den.setTransform(317.8,263.8,1,1,0,0,0,0,-22.5);

	this.Windmill = new lib.Windmill();
	this.Windmill.setTransform(404.5,373.8);

	this.Watch_Tower = new lib.WatchTower();
	this.Watch_Tower.setTransform(322.1,374.5);

	this.Church = new lib.Church();
	this.Church.setTransform(72.4,370.6);

	this.Court = new lib.Court();
	this.Court.setTransform(446.9,233.2);

	this.Store_Large = new lib.StoreLarge();
	this.Store_Large.setTransform(165.3,138.1,1,1,0,0,0,0,-51.2);

	this.Store_Extra_Large = new lib.StoreExtraLarge();
	this.Store_Extra_Large.setTransform(293.2,176.9,1,1,0,0,0,0,-58.4);

	this.Store_Medium = new lib.StoreMedium();
	this.Store_Medium.setTransform(58.2,136.6,1,1,0,0,0,0,-42.5);

	this.Store_Small = new lib.StoreSmall();
	this.Store_Small.setTransform(172.7,221.7,1,1,0,0,0,0,-33);

	this.MineLarge = new lib.MineLarge();
	this.MineLarge.setTransform(495.4,58.3,1,1,0,0,0,0,-0.1);

	this.MineMedium = new lib.MineMedium();
	this.MineMedium.setTransform(395.4,53.9,1,1,0,0,0,0,-0.1);

	this.Mine = new lib.Mine();
	this.Mine.setTransform(286.4,48.8,1,1,0,0,0,0,-0.2);

	this.House_White = new lib.HouseWhite();
	this.House_White.setTransform(171.7,47.7);

	this.addChild(this.House_White,this.Mine,this.MineMedium,this.MineLarge,this.Store_Small,this.Store_Medium,this.Store_Extra_Large,this.Store_Large,this.Court,this.Church,this.Watch_Tower,this.Windmill,this.Monster_Den,this.Fountain,this.Flag,this.House1,this.Tower_Fountain);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,0,555.9,417.2);


// symbols:
(lib.fagnon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Calque 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,1],0,-8.3,0,6.9).s().p("AAjgbQgZgLgpgXQhIgagXAKQAQAeADAoQADAwgWAoQAxgqA/ADQAlACAigLQAtgQAZgkQgwAMgsgUIAAAA").cp();
	this.shape.setTransform(12.7,8.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,1],0.2,-8.3,0.2,6.9).s().p("AACgkQgRgUgOgFQhIgagXAKQAQAeADAoQADAwgWAoQAxgqA/ADQAsAPAZAGQAtAMAXgiQguALgsgyQgMgLgVgbIAAAA").cp();
	this.shape_1.setTransform(12.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},5).to({state:[{t:this.shape}]},7).wait(1));

	// Calque 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#BF302F","#C73434","#DE4243","#EC4A4D","#F14D50","#E53737","#F93B3B"],[0,0.027,0.133,0.235,0.322,0.714,1],-11.8,0,13,-0.1).s().p("AAjgbQgZgLgpgXQhIgagXAKQAQAeADAoQADAwgWAoQAxgqA/ADQAlACAigLQAtgQAZgkQgwAMgsgUIAAAA").cp();
	this.shape_2.setTransform(12.7,8.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#BF302F","#C73434","#DE4243","#EC4A4D","#F14D50","#E53737","#F93B3B"],[0,0.027,0.133,0.235,0.322,0.714,1],-11.7,0,13.1,-0.1).s().p("AABgkQgRgUgOgFQhIgagXAKQAQAeADAoQADAwgWAoQAxgqA/ADQAsAOAaAGQAuAKAXgiQguALgtgwQgMgLgWgaIAAAA").cp();
	this.shape_3.setTransform(12.6,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_2}]},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.4,16.3);


(lib.WatchTower = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F5F0DC").s().p("AAXAAQAAAFgXAAQgWAAAAgFQAAgBAHgBQAHgCAIAAQAJAAAHACQAHABAAABIAAAA").cp();
	this.shape_4.setTransform(0.4,-20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CACACA").s().p("AAAg6QgtAAggAhQghAfAAAuIAAAHQADgrAggcQAhgfAqAAQArAAAhAfQAgAcADArIAAgHQAAgughgfQggghguAAIAAAA").cp();
	this.shape_5.setTransform(0.3,-15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#3A3A37","#363633","#2D2C29"],[0.353,0.678,1],0,1,0,0,1,3.1).s().p("AgVgVQAJgJAMAAQAMAAAKAJQAJAKAAALQAAANgJAJQgKAJgMAAQgLAAgKgJQgJgJAAgNQAAgLAJgKIAAAA").cp();
	this.shape_6.setTransform(0,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.263,0.459,1],0,-15.4,0,15.6).s().p("AgzAUQAdAIAWAAQAhAAAqgQIALgoIirAAIAKAoIAYAI").cp();
	this.shape_7.setTransform(0.1,18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.165,0.831,1],-8.5,0,8.7,0).s().p("AgzAUQAdAIAWAAQAhAAAqgQIALgoIirAAIAKAoIAYAI").cp();
	this.shape_8.setTransform(0.1,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#807D74").s().p("AgzAUQAdAIAWAAQAhAAAqgQIALgoIirAAIAKAoIAYAI").cp();
	this.shape_9.setTransform(0.1,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#68655E").s().p("Ag1AdQAdAHAWAAQAhAAAqgPIAMg4IipABIAHA3IAYAI").cp();
	this.shape_10.setTransform(0.3,19.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#7F6A24").ss(2,0,0,4).p("AgzhAQAXgTAcAAQAaAAAYAWQAaAWAAAbIAABgIiXAAIAAhgQAAgeAYgWIAAAA").cp();
	this.shape_11.setTransform(0,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.459,1],0,-8.4,0,8.6).s().p("AgzhAQAXgTAcAAQAaAAAYAWQAaAWAAAbIAABgIiXAAIAAhgQAAgeAYgWIAAAA").cp();
	this.shape_12.setTransform(0,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-7.5,0,7.6,0).s().p("AgzhAQAXgTAcAAQAaAAAYAWQAaAWAAAbIAABgIiXAAIAAhgQAAgeAYgWIAAAA").cp();
	this.shape_13.setTransform(0,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#944240").s().p("AgzhAQAXgTAcAAQAaAAAYAWQAaAWAAAbIAABgIiXAAIAAhgQAAgeAYgWIAAAA").cp();
	this.shape_14.setTransform(0,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A78D3B").ss(1,0,0,4).p("AhQAoQAAgmAagSQAWgSAgAAQAbAAAaAVQAcAVAAAg");
	this.shape_15.setTransform(0,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#78766D","rgba(125,122,113,0.424)","rgba(128,125,116,0)"],[0.792,0.945,1],0,-2.8,0,0,-2.8,21.8).s().p("AicggQBhAgA7AAQA8AABhggQAkgMAMgBQARgBAAAPQAAAfhBAXQhBAYhcAAQhbAAhBgYQhCgXAAgfQAAgPASABQAMABAkAMIAAAA").cp();
	this.shape_16.setTransform(0.5,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#858585","#242424"],[0,1],0.2,-0.9,-0.3,1.5).s().p("AANgGIgaAAIgJANIAsAAIgJgN").cp();
	this.shape_17.setTransform(0.2,-24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#545454","#242424","#262626","#4B4B4B"],[0,0.275,0.757,1],2.3,0,-2.2,0).s().p("AAWgrIgsAAIAABWIAsAAIAAhW").cp();
	this.shape_18.setTransform(0.2,-27.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#858585","#242424"],[0,1],0.1,-0.8,-0.2,0.7).s().p("AARABIgQgIIgQACIAAANIAggH").cp();
	this.shape_19.setTransform(9.9,-25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#545454","#242424"],[0,0.529],1.7,0,-1.6,0).s().p("AgPAvIAggHIAAhWIggAHIAABW").cp();
	this.shape_20.setTransform(9.9,-28.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#858585","#242424"],[0,1],0,0.7,0.3,-0.8).s().p("AgQABIAQgIIAQACIABANIghgH").cp();
	this.shape_21.setTransform(-9.4,-25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#545454","#242424"],[0,0.529],-1.6,0,1.7,0).s().p("AARAvIghgHIAAhWIAhAHIAABW").cp();
	this.shape_22.setTransform(-9.4,-28.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EADFB7").s().p("AAXAAQAAACgXAAQgWAAAAgCQAAgBAWAAQAXAAAAABIAAAA").cp();
	this.shape_23.setTransform(0.6,-48.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C1B797").s().p("ACNAZQgCgVgngNQgpgQg7AAQg6AAgpAQQgoANgBAWQACgTApgMQArgPA2AAQA3AAArAPQApAMACASIAAAA").cp();
	this.shape_24.setTransform(0.3,-60);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C1B797").s().p("ADIgjQgCAeg4ATQg7AWhTAAQhTAAg6gWQg4gTgCgeQACAaA7ASQA8AUBOAAQBPAAA8gUQA7gSACgaIAAAA").cp();
	this.shape_25.setTransform(0.3,-52.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0.62,0.976],0,0.4,0,0,0.4,14.3).s().p("AAAgoQgxAAgnAMQgnAMgJAQQAJARAnAMQAnAMAxAAQAzAAAmgMQAmgLAKgSQgKgQgmgMQgmgMgzAAIAAAA").cp();
	this.shape_26.setTransform(0.3,-55.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#99958A").s().p("AAAgoQgxAAgnAMQgnAMgJAQQAJARAnAMQAnAMAxAAQAzAAAmgMQAmgLAKgSQgKgQgmgMQgmgMgzAAIAAAA").cp();
	this.shape_27.setTransform(0.3,-55.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(0,0,0,0.247)","rgba(128,125,116,0)"],[0.506,1],0,0.5,0,0,0.5,16.7).s().p("ACNgDQAAgVgpgOQgqgPg6AAQg5AAgpAPQgqAOAAAVIAAAGQAAAWAqAPQApAOA5AAQA6AAAqgOQApgPAAgWIAAgG").cp();
	this.shape_28.setTransform(0.3,-56.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6F6A64").s().p("ACNgDQAAgVgpgOQgqgPg6AAQg5AAgpAPQgqAOAAAVIAAAGQAAAWAqAPQApAOA5AAQA6AAAqgOQApgPAAgWIAAgG").cp();
	this.shape_29.setTransform(0.3,-56.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AAA69A").s().p("ADHAAQAAAdg6AVQg7AVhSAAQhRAAg7gVQg6gVAAgdQAAgcA6gVQA7gVBRAAQBSAAA7AVQA6AVAAAcIAAAA").cp();
	this.shape_30.setTransform(0.3,-56.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-10.1,0,10.2).s().p("ADJAdQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeIAAg5QAAgeA7gVQA7gVBSAAQBTAAA7AVQA7AVAAAeIAAA5").cp();
	this.shape_31.setTransform(0.3,-53.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,4.2,0,0,4.2,11.6).s().p("ADJAdQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeIAAg5QAAgeA7gVQA7gVBSAAQBTAAA7AVQA7AVAAAeIAAA5").cp();
	this.shape_32.setTransform(0.3,-53.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EADFB7").s().p("AATAAQAAABgTAAQgSAAAAgBQAAAAASAAQATAAAAAAIAAAA").cp();
	this.shape_33.setTransform(0.6,-43.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C1B797").s().p("AB1AVQgBgSghgKQgigNgxAAQgwAAgiANQghAKgBASQABgQAjgJQAjgMAtAAQAuAAAkAMQAiAJABAQIAAAA").cp();
	this.shape_34.setTransform(0.4,-53);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C1B797").s().p("ACmgdQgBAZgvAQQgwAShGAAQhFAAgwgSQgvgQgBgZQABAWAxAOQAyARBBAAQBBAAAzgRQAwgOACgWIAAAA").cp();
	this.shape_35.setTransform(0.4,-46.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.4)"],[0.62,0.976],0,0.3,0,0,0.3,11.9).s().p("AAAghQgpAAggAKQggAKgIANQAIAOAgAKQAgAKApAAQAqAAAggKQAggKAIgOQgIgNgggKQghgKgpAAIAAAA").cp();
	this.shape_36.setTransform(0.4,-48.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#99958A").s().p("AAAghQgpAAggAKQggAKgIANQAIAOAgAKQAgAKApAAQAqAAAggKQAggKAIgOQgIgNgggKQghgKgpAAIAAAA").cp();
	this.shape_37.setTransform(0.4,-48.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(0,0,0,0.247)","rgba(128,125,116,0)"],[0.506,1],0.1,0.5,0,0.1,0.5,13.9).s().p("AB1gCQAAgRgigNQgjgMgwAAQgvAAgiAMQgjANAAARIAAAFQAAASAjAMQAiAMAvAAQAwAAAjgMQAigMAAgSIAAgF").cp();
	this.shape_38.setTransform(0.4,-50.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6F6A64").s().p("AB1gCQAAgRgigNQgjgMgwAAQgvAAgiAMQgjANAAARIAAAFQAAASAjAMQAiAMAvAAQAwAAAjgMQAigMAAgSIAAgF").cp();
	this.shape_39.setTransform(0.4,-50.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A39F93").s().p("ACmAAQAAAYgxASQgxARhEAAQhDAAgxgRQgxgSAAgYQAAgXAxgSQAxgRBDAAQBEAAAxARQAxASAAAXIAAAA").cp();
	this.shape_40.setTransform(0.4,-49.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(98,96,90,0)","#737069"],[0,1],0,-8.4,0,8.5).s().p("ACoAYQAAAZgxASQgxARhGAAQhEAAgxgRQgxgSAAgZIAAgvQAAgZAxgSQAxgRBEAAQBFAAAyARQAxASAAAZIAAAv").cp();
	this.shape_41.setTransform(0.4,-47.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#31302E","#353431","#41403C","#484742"],[0.353,0.604,0.882,1],0,3.4,0,0,3.4,9.7).s().p("ACoAYQAAAZgxASQgxARhGAAQhEAAgxgRQgxgSAAgZIAAgvQAAgZAxgSQAxgRBEAAQBFAAAyARQAxASAAAZIAAAv").cp();
	this.shape_42.setTransform(0.4,-47.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1.1,0,1.3,0).s().p("AAMASIgXgQIAAgSIAXAPIAAAT").cp();
	this.shape_43.setTransform(-12.7,-9.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1.5,0,1.7,0).s().p("AAQAKIgfAAIAAgTIAfAAIAAAT").cp();
	this.shape_44.setTransform(-11.2,-0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1.5,0,1.7,0).s().p("AAQgBIAAATIgfgQIAAgTIAfAQ").cp();
	this.shape_45.setTransform(-11.1,-19);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-0.7,0,0.9,0).s().p("AAIACIgPAQIAAgTIAPgQIAAAT").cp();
	this.shape_46.setTransform(16.8,3.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-0.7,0,0.9,0).s().p("AAIACIgPAQIAAgTIAPgQIAAAT").cp();
	this.shape_47.setTransform(14.7,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1.6,0,1.7,0).s().p("AARAGIghAIIAAgTIAhgIIAAAT").cp();
	this.shape_48.setTransform(9.4,-7.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.3,0,2.5,0).s().p("AgXgFIAvgIIAAATIgvAIIAAgT").cp();
	this.shape_49.setTransform(7.2,-16.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.2,0,2.3,0).s().p("AAXgJIAAATIgsAAIAAgTIAsAA").cp();
	this.shape_50.setTransform(-3,-17.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.3,0,2.5,0).s().p("AAZAKIgxAAIAAgTIAxAAIAAAT").cp();
	this.shape_51.setTransform(3.4,-10.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1.8,0,2,0).s().p("AATAOIglgIIAAgTIAlAIIAAAT").cp();
	this.shape_52.setTransform(-6.6,-10.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4B4945").s("#3F3F3F").ss(1,0,0,4).p("ACYAMQAAAWgtAQQgtAQg+AAQg+AAgsgQQgtgQAAgWIAAgWQAAgXAtgQQAsgQA+AAQA+AAAtAQQAtAQAAAXIAAAW").cp();
	this.shape_53.setTransform(0.5,-42.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BEB184").ss(1,0,0,4).p("ACVgcQAAAWgsAOQgsAQg9AAQg9AAgrgQQgsgOAAgW");
	this.shape_54.setTransform(0.5,-37.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4A3F19").s().p("AAAAbQg9AAgrgQQgsgOAAgXIEpAAQAAAXgsAOQgsAQg9AAIAAAA").cp();
	this.shape_55.setTransform(0.5,-37.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-28.2,0,28).s().p("ACYkWQgPDKAhCSQAJAnAQAwQAMAlAAAKQAAAgg9AVQg8AWhWAAQhVAAg8gVQg9gWAAggQAAgLANgsQARg8AIgoQAiiegQioQAEAUAoAPQAtAQA9AAQA+AAAtgRQAqgPADgUIAAAA").cp();
	this.shape_56.setTransform(0.4,-13.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,11.2,0,0,11.2,14.7).s().p("ACYkWQgPDKAhCSQAJAnAQAwQAMAlAAAKQAAAgg9AVQg8AWhWAAQhVAAg8gVQg9gWAAggQAAgLANgsQARg8AIgoQAiiegQioQAEAUAoAPQAtAQA9AAQA+AAAtgRQAqgPADgUIAAAA").cp();
	this.shape_57.setTransform(0.4,-13.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#484143").ss(1,0,0,4).p("AANgGIgaAAIgJANIAsAAIgJgN").cp();
	this.shape_58.setTransform(0.2,-24);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#484143").ss(1,0,0,4).p("AAWgrIgsAAIAABWIAsAAIAAhW").cp();
	this.shape_59.setTransform(0.2,-27.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#484143").ss(1,0,0,4).p("AANAAIgOgIIgSADIAAANIAggI").cp();
	this.shape_60.setTransform(9.8,-24.8,1,1,0,0,0,-0.4,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#484143").ss(1,0,0,4).p("AgPAvIAggHIAAhWIggAHIAABW").cp();
	this.shape_61.setTransform(9.9,-28.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#484143").ss(1,0,0,4).p("AgMAAIAPgIIARADIABANIghgI").cp();
	this.shape_62.setTransform(-9.2,-24.8,1,1,0,0,0,0.5,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#484143").ss(1,0,0,4).p("AARAvIghgHIAAhWIAhAHIAABW").cp();
	this.shape_63.setTransform(-9.4,-28.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAACgFAAQgEAAAAgCQAAgBAEAAQAFAAAAABIAAAA").cp();
	this.shape_64.setTransform(0.6,-62.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#484143").ss(1,0,0,4).p("AAXAAQAAACgXAAQgWAAAAgCQAAgBAWAAQAXAAAAABIAAAA").cp();
	this.shape_65.setTransform(0.6,-48.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#484143").ss(1,0,0,4).p("ACNASQgBgUgogPQgogPg8AAQg5AAgpAPQgoAPgBAUQABgSAqgNQAqgOA2AAQA4AAAqAOQAqANABASIAAAA").cp();
	this.shape_66.setTransform(0.3,-59.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#484143").ss(1,0,0,4).p("ADIgbQgCAcg4AVQg6AWhUAAQhSAAg6gWQg5gVgBgdQACAbA7ASQA8AUBNAAQBPAAA8gUQA7gSACgaIAAAA").cp();
	this.shape_67.setTransform(0.3,-52.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#484143").ss(1,0,0,4).p("AAAgoQgxAAgnAMQgmAMgJAQQAJARAmAMQAnAMAxAAQAzAAAmgMQAngLAJgSQgJgQgngMQgmgMgzAAIAAAA").cp();
	this.shape_68.setTransform(0.3,-55.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#484143").ss(1,0,0,4).p("AAAgoQgxAAgnAMQgmAMgJAQQAJARAmAMQAnAMAxAAQAzAAAmgMQAngLAJgSQgJgQgngMQgmgMgzAAIAAAA").cp();
	this.shape_69.setTransform(0.3,-55.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#484143").ss(1,0,0,4).p("AAAgoQgxAAgnAMQgmAMgJAQQAJARAmAMQAnAMAxAAQAzAAAmgMQAngLAJgSQgJgQgngMQgmgMgzAAIAAAA").cp();
	this.shape_70.setTransform(0.3,-55.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#484143").ss(1,0,0,4).p("ACNgDQAAgVgpgOQgqgPg6AAQg5AAgpAPQgqAOAAAVIAAAGQAAAWAqAPQApAOA5AAQA6AAAqgOQApgPAAgWIAAgG").cp();
	this.shape_71.setTransform(0.3,-56.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#484143").ss(1,0,0,4).p("ACNgDQAAgVgpgOQgqgPg6AAQg5AAgpAPQgqAOAAAVIAAAGQAAAWAqAPQApAOA5AAQA6AAAqgOQApgPAAgWIAAgG").cp();
	this.shape_72.setTransform(0.3,-56.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#484143").ss(1,0,0,4).p("ACNgDQAAgVgpgOQgqgPg6AAQg5AAgpAPQgqAOAAAVIAAAGQAAAWAqAPQApAOA5AAQA6AAAqgOQApgPAAgWIAAgG").cp();
	this.shape_73.setTransform(0.3,-56.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#484143").ss(1,0,0,4).p("ADHAAQAAAdg6AVQg7AVhSAAQhRAAg7gVQg6gVAAgdQAAgcA6gVQA7gVBRAAQBSAAA7AVQA6AVAAAcIAAAA").cp();
	this.shape_74.setTransform(0.3,-56.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#484143").ss(1,0,0,4).p("ADJAdQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeIAAg5QAAgeA7gVQA7gVBSAAQBTAAA7AVQA7AVAAAeIAAA5").cp();
	this.shape_75.setTransform(0.3,-53.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#484143").ss(1,0,0,4).p("ADJAdQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeIAAg5QAAgeA7gVQA7gVBSAAQBTAAA7AVQA7AVAAAeIAAA5").cp();
	this.shape_76.setTransform(0.3,-53.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#484143").ss(1,0,0,4).p("ADJAdQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeIAAg5QAAgeA7gVQA7gVBSAAQBTAAA7AVQA7AVAAAeIAAA5").cp();
	this.shape_77.setTransform(0.3,-53.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#484143").ss(1,0,0,4).p("AAEAAQAAABgEAAQgDAAAAgBQAAAAADAAQAEAAAAAAIAAAA").cp();
	this.shape_78.setTransform(0.6,-54.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#484143").ss(1,0,0,4).p("AATAAQAAABgTAAQgSAAAAgBQAAAAASAAQATAAAAAAIAAAA").cp();
	this.shape_79.setTransform(0.6,-43.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#484143").ss(1,0,0,4).p("AB2AOQgBgQghgNQgigNgxAAQgwAAgiANQghANgBAPQABgNAjgMQAjgMAtAAQAuAAAkAMQAiAMABAOIAAAA").cp();
	this.shape_80.setTransform(0.3,-52.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#484143").ss(1,0,0,4).p("ACngVQgCAXguARQgxAThGAAQhEAAgxgTQgugRgCgYQACAWAxAPQAyARBAAAQBCAAAygRQAxgPACgVIAAAA").cp();
	this.shape_81.setTransform(0.3,-47.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#484143").ss(1,0,0,4).p("AAAghQgpAAggAKQggAKgIANQAIAOAgAKQAgAKApAAQAqAAAggKQAggKAIgOQgIgNgggKQghgKgpAAIAAAA").cp();
	this.shape_82.setTransform(0.4,-48.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#484143").ss(1,0,0,4).p("AAAghQgpAAggAKQggAKgIANQAIAOAgAKQAgAKApAAQAqAAAggKQAggKAIgOQgIgNgggKQghgKgpAAIAAAA").cp();
	this.shape_83.setTransform(0.4,-48.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#484143").ss(1,0,0,4).p("AAAghQgpAAggAKQggAKgIANQAIAOAgAKQAgAKApAAQAqAAAggKQAggKAIgOQgIgNgggKQghgKgpAAIAAAA").cp();
	this.shape_84.setTransform(0.4,-48.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#484143").ss(1,0,0,4).p("AB1gCQAAgRgigNQgjgMgwAAQgvAAgiAMQgjANAAARIAAAFQAAASAjAMQAiAMAvAAQAwAAAjgMQAigMAAgSIAAgF").cp();
	this.shape_85.setTransform(0.4,-50.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#484143").ss(1,0,0,4).p("AB1gCQAAgRgigNQgjgMgwAAQgvAAgiAMQgjANAAARIAAAFQAAASAjAMQAiAMAvAAQAwAAAjgMQAigMAAgSIAAgF").cp();
	this.shape_86.setTransform(0.4,-50.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#484143").ss(1,0,0,4).p("AB1gCQAAgRgigNQgjgMgwAAQgvAAgiAMQgjANAAARIAAAFQAAASAjAMQAiAMAvAAQAwAAAjgMQAigMAAgSIAAgF").cp();
	this.shape_87.setTransform(0.4,-50.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#484143").ss(1,0,0,4).p("ACmAAQAAAYgxASQgxARhEAAQhDAAgxgRQgxgSAAgYQAAgXAxgSQAxgRBDAAQBEAAAxARQAxASAAAXIAAAA").cp();
	this.shape_88.setTransform(0.4,-49.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#484143").ss(1,0,0,4).p("ACoAYQAAAZgxASQgxARhGAAQhEAAgxgRQgxgSAAgZIAAgvQAAgZAxgSQAxgRBEAAQBFAAAyARQAxASAAAZIAAAv").cp();
	this.shape_89.setTransform(0.4,-47.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#484143").ss(1,0,0,4).p("ACoAYQAAAZgxASQgxARhGAAQhEAAgxgRQgxgSAAgZIAAgvQAAgZAxgSQAxgRBEAAQBFAAAyARQAxASAAAZIAAAv").cp();
	this.shape_90.setTransform(0.4,-47.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#484143").ss(1,0,0,4).p("ACoAYQAAAZgxASQgxARhGAAQhEAAgxgRQgxgSAAgZIAAgvQAAgZAxgSQAxgRBEAAQBFAAAyARQAxASAAAZIAAAv").cp();
	this.shape_91.setTransform(0.4,-47.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#484143").ss(1,0,0,4).p("AAMARIgXgPIAAgTIAXAQIAAAS").cp();
	this.shape_92.setTransform(-12.6,-9.9,1,1,0,0,0,0,-0.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#484143").ss(1,0,0,4).p("AAQAKIgfAAIAAgTIAfAAIAAAT").cp();
	this.shape_93.setTransform(-11.2,-0.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#484143").ss(1,0,0,4).p("AAQgBIAAATIgfgQIAAgTIAfAQ").cp();
	this.shape_94.setTransform(-11.1,-19);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#484143").ss(1,0,0,4).p("AAIACIgPAQIAAgTIAPgQIAAAT").cp();
	this.shape_95.setTransform(16.8,3.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#484143").ss(1,0,0,4).p("AAIACIgPAQIAAgTIAPgQIAAAT").cp();
	this.shape_96.setTransform(14.7,-1.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#484143").ss(1,0,0,4).p("AgMgBIAZgQIAAATIgZAQIAAgT").cp();
	this.shape_97.setTransform(13,-16.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#484143").ss(1,0,0,4).p("AARAGIghAIIAAgTIAhgIIAAAT").cp();
	this.shape_98.setTransform(9.4,-7.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#484143").ss(1,0,0,4).p("AgXgFIAvgIIAAATIgvAIIAAgT").cp();
	this.shape_99.setTransform(7.2,-16.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#484143").ss(1,0,0,4).p("AgXgFIAvgIIAAATIgvAIIAAgT").cp();
	this.shape_100.setTransform(7.2,-16.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#484143").ss(1,0,0,4).p("AAXgJIAAATIgsAAIAAgTIAsAA").cp();
	this.shape_101.setTransform(-3,-17.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#484143").ss(1,0,0,4).p("AAXgJIAAATIgsAAIAAgTIAsAA").cp();
	this.shape_102.setTransform(-3,-17.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#484143").ss(1,0,0,4).p("AgYgJIAxAAIAAATIgxAAIAAgT").cp();
	this.shape_103.setTransform(-0.9,-13.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#484143").ss(1,0,0,4).p("AgYgJIAxAAIAAATIgxAAIAAgT").cp();
	this.shape_104.setTransform(-0.9,-13.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#484143").ss(1,0,0,4).p("AAZAKIgxAAIAAgTIAxAAIAAAT").cp();
	this.shape_105.setTransform(3.4,-10.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#484143").ss(1,0,0,4).p("AAZAKIgxAAIAAgTIAxAAIAAAT").cp();
	this.shape_106.setTransform(3.4,-10.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#484143").ss(1,0,0,4).p("AgXgJIAvAAIAAATIgvAAIAAgT").cp();
	this.shape_107.setTransform(-2.4,-7.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#484143").ss(1,0,0,4).p("AgXgJIAvAAIAAATIgvAAIAAgT").cp();
	this.shape_108.setTransform(-2.4,-7.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#484143").ss(1,0,0,4).p("AATAOIglgIIAAgTIAlAIIAAAT").cp();
	this.shape_109.setTransform(-6.6,-10.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#484143").ss(1,0,0,4).p("AATAOIglgIIAAgTIAlAIIAAAT").cp();
	this.shape_110.setTransform(-6.6,-10.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#484143").ss(1,0,0,4).p("AAQAOIgfgIIAAgTIAfAIIAAAT").cp();
	this.shape_111.setTransform(-7.7,-14.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#484143").ss(1,0,0,4).p("ACYAMQAAAWgtAQQgtAQg+AAQg+AAgsgQQgtgQAAgWIAAgWQAAgXAtgQQAsgQA+AAQA+AAAtAQQAtAQAAAXIAAAW").cp();
	this.shape_112.setTransform(0.5,-42.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#484143").ss(1,0,0,4).p("ACVgcQAAAWgsAOQgsAQg9AAQg9AAgrgQQgsgOAAgW");
	this.shape_113.setTransform(0.5,-37.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#484143").ss(1,0,0,4).p("AiWkZQAAACAAACQAEAUAoAPQAtAQA9AAQA+AAAtgRQAqgPADgUQAAgBAAgCACYkWQgPDKAhCSQAJAnAQAwQAMAlAAAKQAAAgg9AVQg8AWhWAAQhVAAg8gVQg9gWAAggQAAgLANgsQARg8AIgoQAiiegQio");
	this.shape_114.setTransform(0.4,-13.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#484143").ss(1,0,0,4).p("AiWkZQAAACAAACQAEAUAoAPQAtAQA9AAQA+AAAtgRQAqgPADgUQAAgBAAgCACYkWQgPDKAhCSQAJAnAQAwQAMAlAAAKQAAAgg9AVQg8AWhWAAQhVAAg8gVQg9gWAAggQAAgLANgsQARg8AIgoQAiiegQio");
	this.shape_115.setTransform(0.4,-13.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#484143").ss(1,0,0,4).p("AiWkZQAAACAAACQAEAUAoAPQAtAQA9AAQA+AAAtgRQAqgPADgUQAAgBAAgCACYkWQgPDKAhCSQAJAnAQAwQAMAlAAAKQAAAgg9AVQg8AWhWAAQhVAAg8gVQg9gWAAggQAAgLANgsQARg8AIgoQAiiegQio");
	this.shape_116.setTransform(0.4,-13.7);

	this.addChild(this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.1,-67.1,82.5,94.5);


(lib.TowerFountain = function() {
	this.initialize();

	// Layer 1
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D6CFBB").s().p("AB7gWQgBARghANQglAPg0AAQgzAAglgPQghgMgBgSQABAOAlAJQAlALAvAAQAwAAAlgLQAlgJABgOIAAAA").cp();
	this.shape_117.setTransform(-1.8,-87.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C1B797").s().p("AIahhQgFBSiXA3QicA7jiAAQjhAAicg7QiYg3gEhTQAFBICfA0QCiA3DTAAQDVAACig3QCdg0AGhHIAAAA").cp();
	this.shape_118.setTransform(-1.8,11.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#76746B","rgba(123,120,111,0.694)","rgba(133,130,120,0)"],[0.804,0.906,1],-0.1,-9.8,0,-0.1,-9.8,55.3).s().p("AIfhlQgrAsiDAtQirA3jGAAQjHAAilg1QiBgqgxgxQAABVCfA7QCfA8DgAAQDhAACfg8QCfg7AAhVIAAAA").cp();
	this.shape_119.setTransform(-1.5,21.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#2D2D2A","#3A3837","#454241","#484445"],[0,0.278,0.627,1],0,-6.3,0,6.3).s().p("AA/gNQgEAng7AkQgzgigJgkQgIghAXgOQAPgJAOAHQALAFAFAOQAFgNAMgFQAOgHAOAIQAWALgEAfIAAAA").cp();
	this.shape_120.setTransform(-2,-100.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#AAAA9D","#7B7373"],[0,1],0,-11.1,0,11.1).s().p("ABnhIQALAWgDAaQgHBFhoA/Qhbg7gQhBQgOg5ApgZQAbgQAYAMQATAKAKAYQAJgWAVgJQAYgMAaANQAOAHAJATIAAAA").cp();
	this.shape_121.setTransform(-2,-100.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A39F93").s().p("AB6AAQAAASgkANQgkANgyAAQgxAAgkgNQgkgNAAgSQAAgRAkgNQAkgNAxAAQAyAAAkANQAkANAAARIAAAA").cp();
	this.shape_122.setTransform(-1.8,-90.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-6.3,0,6.5).s().p("AB7ATQAAASgkANQgkANgzAAQgyAAgkgNQgkgNAAgSIAAglQAAgTAkgNQAkgNAyAAQAzAAAkANQAkANAAATIAAAl").cp();
	this.shape_123.setTransform(-1.9,-88.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.6,0,0,2.6,7.2).s().p("AB7ATQAAASgkANQgkANgzAAQgyAAgkgNQgkgNAAgSIAAglQAAgTAkgNQAkgNAyAAQAzAAAkANQAkANAAATIAAAl").cp();
	this.shape_124.setTransform(-1.9,-88.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#AEAEAE","#E6E5D8","#B5B6B6","#E8E9D6","#AEAEAE"],[0,0.247,0.518,0.745,1],-11.9,0,10.3,0).s().p("ABwgnIAAAnQgBAagYAXQgVAThCAoQg/gpgUgUQgagYgCgbIAAglQACgnAcgSQAcgQAYAMQATAKAKAYQAJgWAVgKQAYgLAaANQALAGAJAPQAKARACAVIAAAA").cp();
	this.shape_125.setTransform(-2,-103.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AALAAQAAADgDADQgEACgEAAQgEAAgDgCQgDgDAAgDQAAgHAKAAQALAAAAAHIAAAA").cp();
	this.shape_126.setTransform(25.2,-3.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,2).s().p("AAAgOQAIAAAGAEQAGAFAAAFQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAIAAAA").cp();
	this.shape_127.setTransform(39,-1.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AALAAQAAADgDADQgDACgFAAQgEAAgCgCQgEgDAAgDQAAgCAEgDQACgCAEAAQAFAAADACQADADAAACIAAAA").cp();
	this.shape_128.setTransform(-37.6,-0.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AALAAQAAADgDADQgDACgFAAQgEAAgCgCQgEgDAAgDQAAgCAEgDQACgCAEAAQAFAAADACQADADAAACIAAAA").cp();
	this.shape_129.setTransform(-45.3,-2.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,2).s().p("AAAgOQAIAAAGAEQAGAFAAAFQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAIAAAA").cp();
	this.shape_130.setTransform(-41.8,0.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.6).s().p("AAQAAQAAAEgFAEQgFAEgGAAQgFAAgFgEQgFgDAAgFQAAgEAFgDQAFgEAFAAQAGAAAFAEQAFADAAAEIAAAA").cp();
	this.shape_131.setTransform(-31.9,-6.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,2).s().p("AAPgJQAGAEAAAFQAAAGgGAFQgHAEgIAAQgHAAgHgEQgGgFAAgGQAAgFAGgEQAHgFAHAAQAIAAAHAFIAAAA").cp();
	this.shape_132.setTransform(-38.3,-4.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,2).s().p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_133.setTransform(-32.2,-1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.2).s().p("AAMAAQAAAEgDADQgEACgFAAQgEAAgDgCQgEgDAAgEQAAgCAEgDQADgDAEAAQAFAAAEADQADADAAACIAAAA").cp();
	this.shape_134.setTransform(29.8,4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,2).s().p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_135.setTransform(37.8,3.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,2).s().p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_136.setTransform(31.9,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B0AC9E").s().p("ACaAAQAAgWgtgQQgugQg/AAQg+AAguAQQgtAQAAAWQAAAWAtARQAuAQA+AAQA/AAAugQQAtgRAAgWIAAAA").cp();
	this.shape_137.setTransform(-1.8,-85.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(155,152,140,0)","#8A847D"],[0,1],0,-43.4,0,43.5).s().p("ACZmwIBDMSQAAAhhBAXQhAAXhbAAQhaAAhAgXQhBgXAAghIBDsSQAAAXAtAQQAtAQA+AAQA/AAAsgQQAugQAAgXIAAAA").cp();
	this.shape_138.setTransform(-1.9,-42.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,17.6,0,0,17.6,18.7).s().p("ACZmwIBDMSQAAAhhBAXQhAAXhbAAQhaAAhAgXQhBgXAAghIBDsSQAAAXAtAQQAtAQA+AAQA/AAAsgQQAugQAAgXIAAAA").cp();
	this.shape_139.setTransform(-1.9,-42.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#A39F93").s().p("ADvAAQAAAjhGAaQhGAZhjAAQhiAAhGgZQhGgaAAgjQAAgiBGgZQBHgaBhAAQBjAABGAaQBGAZAAAiIAAAA").cp();
	this.shape_140.setTransform(-1.8,-5.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-10.4,0,10.6).s().p("ADygRIAAAjQAAAkhHAZQhHAahkAAQhjAAhHgaQhHgZAAgkIAAgjQAAgkBHgaQBHgZBjAAQBkAABHAZQBHAaAAAkIAAAA").cp();
	this.shape_141.setTransform(-1.9,-3.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,4.3,0,0,4.3,13.8).s().p("ADygRIAAAjQAAAkhHAZQhHAahkAAQhjAAhHgaQhHgZAAgkIAAgjQAAgkBHgaQBHgZBjAAQBkAABHAZQBHAaAAAkIAAAA").cp();
	this.shape_142.setTransform(-1.9,-3.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#8586D1","rgba(133,134,209,0)"],[0,1],0,2.2,0,13.7).s().p("ADmA4QAAAghEAWQhDAWhfAAQheAAhDgWQhEgWAAggIgMhlQAAgkBHgZQBHgaBjAAQBkAABHAaQBHAZAAAkIgMBl").cp();
	this.shape_143.setTransform(-1.9,2.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)","rgba(0,0,0,0.149)"],[0.561,0.886,1],0,0,0,0,0,48.3).s().p("AHlAAQAABIiOAzQiOAzjJAAQjHAAiPgzQiOgzAAhIQAAhHCOgzQCPgzDHAAQDJAACOAzQCOAzAABHIAAAA").cp();
	this.shape_144.setTransform(-1.8,-0.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#86ACE0").s().p("AHlAAQAABIiOAzQiOAzjJAAQjHAAiPgzQiOgzAAhIQAAhHCOgzQCPgzDHAAQDJAACOAzQCOAzAABHIAAAA").cp();
	this.shape_145.setTransform(-1.8,-0.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A39F93").s().p("AIZAAQAABPidA5QieA4jeAAQjdAAidg4Qieg5AAhPQAAhPCeg4QCdg4DdAAQDfAACdA4QCdA4AABPIAAAA").cp();
	this.shape_146.setTransform(-1.8,0.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-23.6,0,23.8).s().p("AIeApQAABRifA5QifA5jgAAQjfAAifg5Qifg5AAhRIAAhRQAAhRCfg5QCfg5DfAAQDgAACfA5QCfA5AABRIAABR").cp();
	this.shape_147.setTransform(-1.9,4.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.2,9.6,0,-0.2,9.6,31).s().p("AIeApQAABRifA5QifA5jgAAQjfAAifg5Qifg5AAhRIAAhRQAAhRCfg5QCfg5DfAAQDgAACfA5QCfA5AABRIAABR").cp();
	this.shape_148.setTransform(-1.9,4.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#443D3F").ss(1,1,1).p("AA/gNQgEAng7AkQgzgigJgkQgIghAXgOQAPgJAOAHQALAFAFAOQAFgNAMgFQAOgHAOAIQAWALgEAfIAAAA").cp();
	this.shape_149.setTransform(-2,-100.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#443D3F").ss(1,1,1).p("ABnhIQALAWgDAaQgHBFhoA/Qhbg7gQhBQgOg5ApgZQAbgQAYAMQATAKAKAYQAJgWAVgJQAYgMAaANQAOAHAJATIAAAA").cp();
	this.shape_150.setTransform(-2,-100.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#443D3F").ss(1,1,1).p("AB2AAQAAARgjANQgjAMgwAAQgwAAgigMQgjgNAAgRQAAgQAjgNQAigMAwAAQAwAAAjAMQAjANAAAQIAAAA").cp();
	this.shape_151.setTransform(-1.8,-90.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#443D3F").ss(1,1,1).p("AB6AAQAAASgkANQgkANgyAAQgxAAgkgNQgkgNAAgSQAAgRAkgNQAkgNAxAAQAyAAAkANQAkANAAARIAAAA").cp();
	this.shape_152.setTransform(-1.8,-90.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#443D3F").ss(1,1,1).p("AB7ATQAAASgkANQgkANgzAAQgyAAgkgNQgkgNAAgSIAAglQAAgTAkgNQAkgNAyAAQAzAAAkANQAkANAAATIAAAl").cp();
	this.shape_153.setTransform(-1.9,-88.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#443D3F").ss(1,1,1).p("AB7ATQAAASgkANQgkANgzAAQgyAAgkgNQgkgNAAgSIAAglQAAgTAkgNQAkgNAyAAQAzAAAkANQAkANAAATIAAAl").cp();
	this.shape_154.setTransform(-1.9,-88.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#443D3F").ss(1,1,1).p("AB7ATQAAASgkANQgkANgzAAQgyAAgkgNQgkgNAAgSIAAglQAAgTAkgNQAkgNAyAAQAzAAAkANQAkANAAATIAAAl").cp();
	this.shape_155.setTransform(-1.9,-88.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#443D3F").ss(1,1,1).p("ABwgnIAAAnQgBAagYAXQgVAThCAoQg/gpgUgUQgagYgCgbIAAglQACgnAcgSQAcgQAYAMQATAKAKAYQAJgWAVgKQAYgLAaANQALAGAJAPQAKARACAVIAAAA").cp();
	this.shape_156.setTransform(-2,-103.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDADQgEACgEAAQgEAAgDgCQgDgDAAgDQAAgHAKAAQALAAAAAHIAAAA").cp();
	this.shape_157.setTransform(25.2,-3.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#443D3F").ss(1,1,1).p("AAAgOQAIAAAGAEQAGAFAAAFQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAIAAAA").cp();
	this.shape_158.setTransform(39,-1.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#443D3F").ss(1,1,1).p("AAAgJQAFAAAFADQAEADAAADQAAAEgEADQgFADgFAAQgEAAgFgDQgDgDAAgEQAAgDADgDQAFgDAEAAIAAAA").cp();
	this.shape_159.setTransform(-40.6,5.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#443D3F").ss(1,1,1).p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_160.setTransform(-35.2,4.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDADQgDACgFAAQgEAAgCgCQgEgDAAgDQAAgCAEgDQACgCAEAAQAFAAADACQADADAAACIAAAA").cp();
	this.shape_161.setTransform(-37.6,-0.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#443D3F").ss(1,1,1).p("AAKAAQAAADgDADQgDACgEAAQgDAAgDgCQgEgDAAgDQAAgCAEgCQADgDADAAQAEAAADADQADACAAACIAAAA").cp();
	this.shape_162.setTransform(-12.6,13.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDACQgEADgEAAQgKAAAAgIQAAgCAEgCQADgDADAAQAEAAAEADQADACAAACIAAAA").cp();
	this.shape_163.setTransform(-33.6,9.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDACQgEADgEAAQgDAAgDgDQgDgCAAgDQAAgCADgDQADgCADAAQAEAAAEACQADADAAACIAAAA").cp();
	this.shape_164.setTransform(-27.5,6.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDACQgEADgEAAQgDAAgDgDQgDgCAAgDQAAgCADgCQADgDADAAQAEAAAEADQADACAAACIAAAA").cp();
	this.shape_165.setTransform(19.6,9.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgCQADgDADAAQAEAAAEADQADACAAACIAAAA").cp();
	this.shape_166.setTransform(23.5,-12.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#443D3F").ss(1,1,1).p("AAKAAQAAADgDACQgDADgEAAQgDAAgDgDQgEgCAAgDQAAgCAEgCQADgDADAAQAEAAADADQADACAAACIAAAA").cp();
	this.shape_167.setTransform(28.1,-7.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgDAAgDgDQgDgCAAgDQAAgCADgCQADgDADAAQAEAAAEADQADACAAACIAAAA").cp();
	this.shape_168.setTransform(24.7,2.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgCQADgDADAAQAEAAADADQAEACAAACIAAAA").cp();
	this.shape_169.setTransform(43.3,1.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgDAAgDgDQgEgCAAgDQAAgHAKAAQALAAAAAHIAAAA").cp();
	this.shape_170.setTransform(41.2,-6.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDACQgEADgEAAQgDAAgDgDQgDgCAAgDQAAgHAJAAQALAAAAAHIAAAA").cp();
	this.shape_171.setTransform(-27.6,-6.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#443D3F").ss(1,1,1).p("AAPAAQAAAFgFADQgEADgGAAQgFAAgFgDQgEgDAAgFQAAgDAEgEQAFgDAFAAQAGAAAEADQAFAEAAADIAAAA").cp();
	this.shape_172.setTransform(33.2,-5.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#443D3F").ss(1,1,1).p("AAPAAQAAAEgEAEQgFADgGAAQgFAAgFgDQgEgEAAgEQAAgEAEgDQAFgDAFAAQAGAAAFADQAEADAAAEIAAAA").cp();
	this.shape_173.setTransform(-27.4,-10.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#443D3F").ss(1,1,1).p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_174.setTransform(-36.6,-9.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDADQgDACgFAAQgEAAgCgCQgEgDAAgDQAAgCAEgDQACgCAEAAQAFAAADACQADADAAACIAAAA").cp();
	this.shape_175.setTransform(-45.3,-2.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#443D3F").ss(1,1,1).p("AAAgOQAIAAAGAEQAGAFAAAFQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAIAAAA").cp();
	this.shape_176.setTransform(-41.8,0.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#443D3F").ss(1,1,1).p("AAQAAQAAAEgFAEQgFAEgGAAQgFAAgFgEQgFgDAAgFQAAgEAFgDQAFgEAFAAQAGAAAFAEQAFADAAAEIAAAA").cp();
	this.shape_177.setTransform(-31.9,-6.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#443D3F").ss(1,1,1).p("AAPgJQAGAEAAAFQAAAGgGAFQgHAEgIAAQgHAAgHgEQgGgFAAgGQAAgFAGgEQAHgFAHAAQAIAAAHAFIAAAA").cp();
	this.shape_178.setTransform(-38.3,-4.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#443D3F").ss(1,1,1).p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_179.setTransform(-32.2,-1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#443D3F").ss(1,1,1).p("AAMAAQAAAEgDADQgEACgFAAQgEAAgDgCQgEgDAAgEQAAgCAEgDQADgDAEAAQAFAAAEADQADADAAACIAAAA").cp();
	this.shape_180.setTransform(29.8,4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#443D3F").ss(1,1,1).p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_181.setTransform(37.8,3.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#443D3F").ss(1,1,1).p("AAUAAQAAAGgGAFQgGAEgIAAQgHAAgGgEQgGgFAAgGQAAgFAGgFQAGgEAHAAQAIAAAGAEQAGAFAAAFIAAAA").cp();
	this.shape_182.setTransform(31.9,0);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#443D3F").ss(1,1,1).p("ACaAAQAAgWgtgQQgugQg/AAQg+AAguAQQgtAQAAAWQAAAWAtARQAuAQA+AAQA/AAAugQQAtgRAAgWIAAAA").cp();
	this.shape_183.setTransform(-1.8,-85.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#443D3F").ss(1,1,1).p("ACZmwIBDMSQAAAhhBAXQhAAXhbAAQhaAAhAgXQhBgXAAghIBDsSQAAAXAtAQQAtAQA+AAQA/AAAsgQQAugQAAgXIAAAA").cp();
	this.shape_184.setTransform(-1.9,-42.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#443D3F").ss(1,1,1).p("ACZmwIBDMSQAAAhhBAXQhAAXhbAAQhaAAhAgXQhBgXAAghIBDsSQAAAXAtAQQAtAQA+AAQA/AAAsgQQAugQAAgXIAAAA").cp();
	this.shape_185.setTransform(-1.9,-42.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#443D3F").ss(1,1,1).p("ACZmwIBDMSQAAAhhBAXQhAAXhbAAQhaAAhAgXQhBgXAAghIBDsSQAAAXAtAQQAtAQA+AAQA/AAAsgQQAugQAAgXIAAAA").cp();
	this.shape_186.setTransform(-1.9,-42.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#443D3F").ss(1,1,1).p("ADJAAQAAAmg7AbQg7AbhTAAQhSAAg7gbQg7gbAAgmQAAglA7gbQA7gbBSAAQBTAAA7AbQA7AbAAAlIAAAA").cp();
	this.shape_187.setTransform(-1.9,-6.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#443D3F").ss(1,1,1).p("ADJAAQAAAmg7AbQg7AbhTAAQhSAAg7gbQg7gbAAgmQAAglA7gbQA7gbBSAAQBTAAA7AbQA7AbAAAlIAAAA").cp();
	this.shape_188.setTransform(-1.9,-6.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#443D3F").ss(1,1,1).p("ADvAAQAAAjhGAaQhGAZhjAAQhiAAhGgZQhGgaAAgjQAAgiBGgZQBHgaBhAAQBjAABGAaQBGAZAAAiIAAAA").cp();
	this.shape_189.setTransform(-1.8,-5.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#443D3F").ss(1,1,1).p("ADygRIAAAjQAAAkhHAZQhHAahkAAQhjAAhHgaQhHgZAAgkIAAgjQAAgkBHgaQBHgZBjAAQBkAABHAZQBHAaAAAkIAAAA").cp();
	this.shape_190.setTransform(-1.9,-3.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#443D3F").ss(1,1,1).p("ADygRIAAAjQAAAkhHAZQhHAahkAAQhjAAhHgaQhHgZAAgkIAAgjQAAgkBHgaQBHgZBjAAQBkAABHAZQBHAaAAAkIAAAA").cp();
	this.shape_191.setTransform(-1.9,-3.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#443D3F").ss(1,1,1).p("ADygRIAAAjQAAAkhHAZQhHAahkAAQhjAAhHgaQhHgZAAgkIAAgjQAAgkBHgaQBHgZBjAAQBkAABHAZQBHAaAAAkIAAAA").cp();
	this.shape_192.setTransform(-1.9,-3.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#443D3F").ss(1,1,1).p("ADmA4QAAAghEAWQhDAWhfAAQheAAhDgWQhEgWAAggIgMhlQAAgkBHgZQBHgaBjAAQBkAABHAaQBHAZAAAkIgMBl").cp();
	this.shape_193.setTransform(-1.9,2.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#443D3F").ss(1,1,1).p("AHlAAQAABIiOAzQiOAzjJAAQjHAAiPgzQiOgzAAhIQAAhHCOgzQCPgzDHAAQDJAACOAzQCOAzAABHIAAAA").cp();
	this.shape_194.setTransform(-1.8,-0.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#443D3F").ss(1,1,1).p("AHlAAQAABIiOAzQiOAzjJAAQjHAAiPgzQiOgzAAhIQAAhHCOgzQCPgzDHAAQDJAACOAzQCOAzAABHIAAAA").cp();
	this.shape_195.setTransform(-1.8,-0.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#443D3F").ss(1,1,1).p("AHlAAQAABIiOAzQiOAzjJAAQjHAAiPgzQiOgzAAhIQAAhHCOgzQCPgzDHAAQDJAACOAzQCOAzAABHIAAAA").cp();
	this.shape_196.setTransform(-1.8,-0.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#443D3F").ss(1,1,1).p("AIZAAQAABPidA5QieA4jeAAQjdAAidg4Qieg5AAhPQAAhPCeg4QCdg4DdAAQDfAACdA4QCdA4AABPIAAAA").cp();
	this.shape_197.setTransform(-1.8,0.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#443D3F").ss(1,1,1).p("AIeApQAABRifA5QifA5jgAAQjfAAifg5Qifg5AAhRIAAhRQAAhRCfg5QCfg5DfAAQDgAACfA5QCfA5AABRIAABR").cp();
	this.shape_198.setTransform(-1.9,4.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#443D3F").ss(1,1,1).p("AIeApQAABRifA5QifA5jgAAQjfAAifg5Qifg5AAhRIAAhRQAAhRCfg5QCfg5DfAAQDgAACfA5QCfA5AABRIAABR").cp();
	this.shape_199.setTransform(-1.9,4.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#443D3F").ss(1,1,1).p("AIeApQAABRifA5QifA5jgAAQjfAAifg5Qifg5AAhRIAAhRQAAhRCfg5QCfg5DfAAQDgAACfA5QCfA5AABRIAABR").cp();
	this.shape_200.setTransform(-1.9,4.4);

	this.addChild(this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.1,-114.1,152.5,158.9);


(lib.StoreSmall = function() {
	this.initialize();

	// Layer 1
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.9,-5.9,0.4,1.1).s().p("AAPABIgdAMIAAgOIAdgLIAAAN").cp();
	this.shape_201.setTransform(27.6,-51.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.7,-5.2,0.6,1.8).s().p("AAHANIgNAFIAAgdIANgGIAAAe").cp();
	this.shape_202.setTransform(25.3,-51.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1,-3.1,1.3,3.9).s().p("AAHAEIgNAGIAAgOIANgFIAAAN").cp();
	this.shape_203.setTransform(26.8,-54.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-0.8,-2.4,1.5,4.6).s().p("AAHANIgNAFIAAgdIANgGIAAAe").cp();
	this.shape_204.setTransform(25.3,-55);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#2D5A1A","#1A4215"],[0,1],0,-0.3,2.3,6.7).s().p("AgWAQIAtgQIAAgPIgtAPIAAAQ").cp();
	this.shape_205.setTransform(26.9,-57.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-2.1,-6.6,0.2,0.4).s().p("AAPACIgdALIAAgNIAdgMIAAAO").cp();
	this.shape_206.setTransform(3.6,-43);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.9,-5.8,0.4,1.2).s().p("AAHAMIgNAGIAAgdIANgGIAAAd").cp();
	this.shape_207.setTransform(6,-44.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.1,-3.7,1.2,3.3).s().p("AAPABIgdAMIAAgOIAdgLIAAAN").cp();
	this.shape_208.setTransform(5.2,-46.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-0.5,-1.8,1.8,5.2).s().p("AAIAVIgPAFIAAgtIAPgGIAAAu").cp();
	this.shape_209.setTransform(22.7,-54.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1,-3.3,1.3,3.7).s().p("AAIgpIAABNIgPAGIAAhNIAPgG").cp();
	this.shape_210.setTransform(19.6,-52.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.7,-5.2,0.6,1.8).s().p("AgLgKIAJAbIAOgFIgKgcIgNAG").cp();
	this.shape_211.setTransform(22.2,-50.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1,-3.3,1.3,3.7).s().p("AgGAKIANgGIAAgNIgNAGIAAAN").cp();
	this.shape_212.setTransform(21.1,-52.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-0.1,-0.4,2.2,6.6).s().p("AgGAKIANgFIAAgOIgNAGIAAAN").cp();
	this.shape_213.setTransform(21.1,-55.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.1,-3.4,1.2,3.6).s().p("AAIgpIAABNIgPAGIAAhNIAPgG").cp();
	this.shape_214.setTransform(17,-51.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.1,-3.4,1.2,3.6).s().p("AAHgpIAABNIgOAGIAAhNIAOgG").cp();
	this.shape_215.setTransform(13.9,-50);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1.3,-4.3,1,2.7).s().p("AAHghIAAA9IgNAGIAAg9IANgG").cp();
	this.shape_216.setTransform(9.9,-47.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-1,-3.1,1.3,3.9).s().p("AAHAMIgNAGIAAgdIANgGIAAAd").cp();
	this.shape_217.setTransform(2.8,-46.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-2,-6.2,0.3,0.8).s().p("AgGALIANgGIAAgPIgNAGIAAAP").cp();
	this.shape_218.setTransform(15.4,-47.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-0.1,-0.6,2.2,6.4).s().p("AgGAKIANgFIAAgPIgNAGIAAAO").cp();
	this.shape_219.setTransform(15.4,-53.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-0.2,-0.8,2.1,6.2).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_220.setTransform(9.9,-51.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#2D5A1A","#1A4215"],[0,1],-0.2,-0.9,2.1,6.1).s().p("AgWABIAAAPIAtgQIAAgPIgtAQ").cp();
	this.shape_221.setTransform(4.4,-49.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],0.3,-0.4,-0.1,0.6).s().p("AgTgNIAAANIAnAOIAAgOIgngN").cp();
	this.shape_222.setTransform(-28.3,-19.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#6B7764","rgba(115,128,107,0.608)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.937,1],0.4,-0.7,-0.2,0.8).s().p("AgbgTIAAATIA2AUIAAgUIg2gT").cp();
	this.shape_223.setTransform(-35.5,-21.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],1.2,-2.8,-1.1,2.8).s().p("AhhhHIAABCIDDBNIAAhGIjDhJ").cp();
	this.shape_224.setTransform(-11.5,-18.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B19454").s().p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_225.setTransform(-26,-25.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_226.setTransform(-28.3,-22);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_227.setTransform(-23.9,-22);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#B19454").s().p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_228.setTransform(-31.8,-33.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_229.setTransform(-34.1,-30.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.9,0.7,2).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_230.setTransform(-29.8,-30.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B19454").s().p("AgDAXIg6gXIBBgWIA6AWIhBAX").cp();
	this.shape_231.setTransform(-31.8,-28.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#937044","#6C5E35"],[0.125,1],1.1,-2.8,-0.9,2.9).s().p("AgbgqIAAA+IA4AXIAAg+Ig4gX").cp();
	this.shape_232.setTransform(-35.1,-24.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.8,-2.6,0.9,3).s().p("AAhgqIAAA+IhBAXIAAg9IBBgY").cp();
	this.shape_233.setTransform(-28.9,-24.4);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.4,-1.3,0.6,1.5).s().p("Ag4AmIgugTICfg4IAuATIifA4").cp();
	this.shape_234.setTransform(23.8,-16.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-2,0,2.2,0).s().p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_235.setTransform(15.8,-13.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.3,-0.7,-0.2,0.8).s().p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_236.setTransform(15.8,-13.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.2,-0.8,0.3,1).s().p("ABQgjIAAAQIifA4IAAgQICfg4").cp();
	this.shape_237.setTransform(26.1,-15.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.7,-2.1,0.8,2.2).s().p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_238.setTransform(17.9,-19.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-3,0,3.4,0).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_239.setTransform(5.9,-14.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.5,-1.1,-0.3,1.3).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_240.setTransform(5.9,-14.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.3,-1.3,0.5,1.5).s().p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_241.setTransform(21.3,-17.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#9A8D5B").s().p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_242.setTransform(15.2,-34.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_243.setTransform(13.3,-26.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_244.setTransform(-10.4,-25.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXA2IgtgSIAAhPQAAgQAWAIQAXAJAAASIAABO").cp();
	this.shape_245.setTransform(-10.4,-29.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_246.setTransform(-22.9,-29.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXA2IgtgSIAAhPQAAgQAWAIQAXAJAAASIAABO").cp();
	this.shape_247.setTransform(-22.9,-33.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_248.setTransform(-15.8,-41);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_249.setTransform(14.8,-41.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#43503D"],[0,0.004,0.02,0.035,0.055,0.082,0.125,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADZIEVBxIAAjZIkVhx").cp();
	this.shape_250.setTransform(-15.5,-29.3);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#433E2A").s().p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_251.setTransform(15.4,-27.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.231,0.635,1],-0.1,-7,0.1,5.9).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_252.setTransform(15.4,-28.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.22,0.761,1],-4.2,0.1,4,0).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_253.setTransform(15.4,-28.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4E7C20").s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_254.setTransform(15.4,-28.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#7A7049").s().p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_255.setTransform(15.4,-28.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_256.setTransform(14.5,-29.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#FBFED2","rgba(251,254,210,0)"],[0,0.6],-17.4,0,17.5,0).s().p("ACvg1IlIB0IgVgJIFIh0IAVAJ").cp();
	this.shape_257.setTransform(13.8,-59.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B8CAAE").s().p("ACvg1IlIB0IgVgJIFIh0IAVAJ").cp();
	this.shape_258.setTransform(13.8,-59.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.lf(["rgba(251,254,210,0.42)","rgba(251,254,210,0)"],[0,0.325],2.6,-7,-2.4,7.2).s().p("AgJhUIAACgIATAJIAAigIgTgJ").cp();
	this.shape_259.setTransform(-2.6,-45.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],2.6,-7,-2.4,7.2).s().p("AgJhUIAACgIATAJIAAigIgTgJ").cp();
	this.shape_260.setTransform(-2.6,-45.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.lf(["#667C5B","#56694F"],[0.125,1],-2.2,-7.3,2.5,7.7).s().p("ACkAWIlHB1IAAifIFHh2IAACg").cp();
	this.shape_261.setTransform(14.8,-50.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_262.setTransform(10.7,-52.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBXIg7AW").cp();
	this.shape_263.setTransform(0.4,-48.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#BEB47D").s().p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_264.setTransform(-9.2,-44.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_265.setTransform(0.6,-48.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#A4B39A").s().p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_266.setTransform(29.1,-32.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_267.setTransform(25.9,-28.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.7,-2.6,0.9,2.8).s().p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_268.setTransform(31.9,-28.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_269.setTransform(-26,-25.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_270.setTransform(-28.3,-22);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_271.setTransform(-23.9,-22);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_272.setTransform(-31.8,-33.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_273.setTransform(-34.1,-30.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_274.setTransform(-29.8,-30.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAXIg6gXIBBgWIA6AWIhBAX").cp();
	this.shape_275.setTransform(-31.8,-28.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgqIAAA+IA4AXIAAg+Ig4gX").cp();
	this.shape_276.setTransform(-35.1,-24.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#4B4445").ss(1,1,1).p("AAhgqIAAA+IhBAXIAAg9IBBgY").cp();
	this.shape_277.setTransform(-28.9,-24.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#4B4445").ss(1,1,1).p("Ag4AmIgugTICfg4IAuATIifA4").cp();
	this.shape_278.setTransform(23.8,-16.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_279.setTransform(15.8,-13.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_280.setTransform(15.8,-13.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_281.setTransform(15.8,-13.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#4B4445").ss(1,1,1).p("ABQgjIAAAQIifA4IAAgQICfg4").cp();
	this.shape_282.setTransform(26.1,-15.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#4B4445").ss(1,1,1).p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_283.setTransform(17.9,-19.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_284.setTransform(5.9,-14.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_285.setTransform(5.9,-14.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_286.setTransform(5.9,-14.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#4B4445").ss(1,1,1).p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_287.setTransform(21.3,-17.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#4B4445").ss(1,1,1).p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_288.setTransform(15.2,-34.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#4B4445").ss(1,1,1).p("AAJAAQAAAEgDACQgDADgDAAQgDAAgDgDQgCgCAAgEQAAgIAIAAQADAAADADQADADAAACIAAAA").cp();
	this.shape_289.setTransform(13.4,-27);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#4B4445").ss(1,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_290.setTransform(13.3,-26.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_291.setTransform(-10.4,-25.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhPQAAgQAWAIQAXAJAAASIAABO").cp();
	this.shape_292.setTransform(-10.4,-29.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_293.setTransform(-22.9,-29.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhPQAAgQAWAIQAXAJAAASIAABO").cp();
	this.shape_294.setTransform(-22.9,-33.6);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_295.setTransform(-15.8,-41);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_296.setTransform(14.8,-41.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADZIEVBxIAAjZIkVhx").cp();
	this.shape_297.setTransform(-15.5,-29.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#4B4445").ss(1,1,1).p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_298.setTransform(15.4,-27.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_299.setTransform(15.4,-28.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_300.setTransform(15.4,-28.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_301.setTransform(15.4,-28.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_302.setTransform(15.4,-28.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#4B4445").ss(1,1,1).p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_303.setTransform(15.4,-28.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_304.setTransform(14.5,-29.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#4B4445").ss(1,1,1).p("ACvg1IlIB0IgVgJIFIh0IAVAJ").cp();
	this.shape_305.setTransform(13.8,-59.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#4B4445").ss(1,1,1).p("ACvg1IlIB0IgVgJIFIh0IAVAJ").cp();
	this.shape_306.setTransform(13.8,-59.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#4B4445").ss(1,1,1).p("ACvg1IlIB0IgVgJIFIh0IAVAJ").cp();
	this.shape_307.setTransform(13.8,-59.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#4B4445").ss(1,1,1).p("AgJhUIAACgIATAJIAAigIgTgJ").cp();
	this.shape_308.setTransform(-2.6,-45.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#4B4445").ss(1,1,1).p("AgJhUIAACgIATAJIAAigIgTgJ").cp();
	this.shape_309.setTransform(-2.6,-45.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#4B4445").ss(1,1,1).p("AgJhUIAACgIATAJIAAigIgTgJ").cp();
	this.shape_310.setTransform(-2.6,-45.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#4B4445").ss(1,1,1).p("ACkAWIlHB1IAAifIFHh2IAACg").cp();
	this.shape_311.setTransform(14.8,-50.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_312.setTransform(10.7,-52.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBXIg7AW").cp();
	this.shape_313.setTransform(0.4,-48.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#4B4445").ss(1,1,1).p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_314.setTransform(-9.2,-44.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_315.setTransform(0.6,-48.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_316.setTransform(29.1,-32.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_317.setTransform(25.9,-28.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#4B4445").ss(1,1,1).p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_318.setTransform(31.9,-28.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.rf(["#32680B","rgba(50,104,11,0.796)","rgba(50,104,11,0)"],[0,0.09,1],0,0,0,0,0,26.9).s().p("AAAhqQBvAABPAfQBOAgAAArQAAAshOAfQhPAghvAAQhuAAhPggQhOgfAAgsQAAgrBOggQBPgfBuAAIAAAA").cp();
	this.shape_319.setTransform(27.6,-27);

	this.addChild(this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-65.6,108.9,65.7);


(lib.StoreMedium = function() {
	this.initialize();

	// Layer 1
	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#75A560","#75A560"],[0,1],-1.9,-5.8,0.4,1.2).s().p("AAPACIgdALIAAgNIAdgMIAAAO").cp();
	this.shape_320.setTransform(29.1,-54.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#75A560","#75A560"],[0,1],-1.6,-5.2,0.7,1.8).s().p("AAHAMIgNAGIAAgdIANgGIAAAd").cp();
	this.shape_321.setTransform(26.7,-54.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["#75A560","#75A560"],[0,1],-0.9,-3.1,1.4,3.9).s().p("AAIAFIgPAFIAAgNIAPgGIAAAO").cp();
	this.shape_322.setTransform(28.3,-57.8);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#75A560","#75A560"],[0,1],-0.7,-2.4,1.6,4.6).s().p("AAHAMIgNAGIAAgdIANgGIAAAd").cp();
	this.shape_323.setTransform(26.7,-58);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#75A560","#75A560"],[0,1],0,-0.2,2.3,6.8).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_324.setTransform(28.3,-60.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#75A560","#75A560"],[0,1],-2.1,-6.6,0.2,0.4).s().p("AAPABIgdAMIAAgOIAdgLIAAAN").cp();
	this.shape_325.setTransform(5.1,-46);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#75A560","#75A560"],[0,1],-1.9,-5.8,0.4,1.2).s().p("AgGgLIANgGIAAAdIgNAGIAAgd").cp();
	this.shape_326.setTransform(7.5,-47.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#75A560","#75A560"],[0,1],-1.2,-3.7,1.1,3.3).s().p("AAPACIgdALIAAgNIAdgMIAAAO").cp();
	this.shape_327.setTransform(6.7,-49.7);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#75A560","#75A560"],[0,1],-0.5,-1.8,1.8,5.2).s().p("AAHAUIgNAGIAAgtIANgGIAAAt").cp();
	this.shape_328.setTransform(24.2,-57.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#75A560","#75A560"],[0,1],-1,-3.3,1.3,3.7).s().p("AAHAkIgNAGIAAhNIANgGIAABN").cp();
	this.shape_329.setTransform(21,-55.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["#75A560","#75A560"],[0,1],-1.6,-5.2,0.7,1.8).s().p("AgBARIANgGIgJgbIgOAFIAKAc").cp();
	this.shape_330.setTransform(23.7,-53.8);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#75A560","#75A560"],[0,1],-1,-3.3,1.3,3.7).s().p("AgHAKIAOgGIAAgNIgOAFIAAAO").cp();
	this.shape_331.setTransform(22.6,-55.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#75A560","#75A560"],[0,1],-0.1,-0.4,2.2,6.6).s().p("AgHAKIAOgGIAAgNIgOAFIAAAO").cp();
	this.shape_332.setTransform(22.6,-58.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#75A560","#75A560"],[0,1],-1.1,-3.4,1.2,3.6).s().p("AAHAkIgNAGIAAhNIANgGIAABN").cp();
	this.shape_333.setTransform(18.5,-54.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#75A560","#75A560"],[0,1],-1.1,-3.4,1.2,3.6).s().p("AAHgpIAABNIgNAGIAAhNIANgG").cp();
	this.shape_334.setTransform(15.3,-52.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#75A560","#75A560"],[0,1],-1.4,-4.3,0.9,2.7).s().p("AAIghIAAA9IgOAGIAAg9IAOgG").cp();
	this.shape_335.setTransform(11.4,-50.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["#75A560","#75A560"],[0,1],-1,-3.1,1.3,3.9).s().p("AAHgRIAAAdIgNAGIAAgdIANgG").cp();
	this.shape_336.setTransform(4.3,-49.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#75A560","#75A560"],[0,1],-2,-6.2,0.3,0.8).s().p("AgGgDIAAANIAOgFIAAgOIgOAG").cp();
	this.shape_337.setTransform(16.9,-50.4);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#75A560","#75A560"],[0,1],-0.1,-0.6,2.2,6.4).s().p("AgGAKIAOgFIAAgOIgOAGIAAAN").cp();
	this.shape_338.setTransform(16.9,-56.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#75A560","#75A560"],[0,1],-0.2,-0.8,2.1,6.2).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_339.setTransform(11.4,-54.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.lf(["#75A560","#75A560"],[0,1],-0.3,-0.9,2,6.1).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_340.setTransform(5.9,-52.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],0.3,-0.4,-0.1,0.6).s().p("AgTgOIAAAOIAnAPIAAgOIgngP").cp();
	this.shape_341.setTransform(-28.3,-19.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#6B7764","rgba(115,128,107,0.608)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.937,1],0.4,-0.7,-0.2,0.8).s().p("AgbgTIAAATIA2AUIAAgUIg2gT").cp();
	this.shape_342.setTransform(-35.5,-21.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],1.2,-2.6,-1,2.7).s().p("AgbgtIAABAIA2AbIABhDIg3gY").cp();
	this.shape_343.setTransform(-12.6,-13.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#B19454").s().p("AgBAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_344.setTransform(-9,-23.9);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_345.setTransform(-11.3,-20.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_346.setTransform(-6.9,-20.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#FBFED2","rgba(251,254,210,0)"],[0,0.6],-16.5,0,16.7,0).s().p("AiRA7IgUgIIE3huIAUAIIk3Bu").cp();
	this.shape_347.setTransform(16.1,-61.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#B8CAAE").s().p("AiRA7IgUgIIE3huIAUAIIk3Bu").cp();
	this.shape_348.setTransform(16.1,-61.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["rgba(251,254,210,0.42)","rgba(251,254,210,0)"],[0,0.325],2.5,-6.7,-2.3,6.8).s().p("AAKhIIgTgIIAACYIATAIIAAiY").cp();
	this.shape_349.setTransform(0.5,-48.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],2.5,-6.7,-2.3,6.8).s().p("AAKhIIgTgIIAACYIATAIIAAiY").cp();
	this.shape_350.setTransform(0.5,-48.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#46553F","#313B2E"],[0.125,1],-1.9,-6.3,2.2,6.9).s().p("ACVh7IAACMIkpBrIAAiLIEphs").cp();
	this.shape_351.setTransform(17.1,-53.5);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.lf(["#667C5B","#56694F"],[0.125,1],-2.1,-6.8,2.4,7.4).s().p("ACciDIAACXIk3BwIAAiXIE3hw").cp();
	this.shape_352.setTransform(17.1,-53.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#B19454").s().p("AgCAWIg5gWIA/gVIA4AVIg+AW").cp();
	this.shape_353.setTransform(-9.2,-19.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.lf(["#937044","#6C5E35"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA3AWIAAg7Ig3gW").cp();
	this.shape_354.setTransform(-12.4,-14.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.7,-2.5,0.9,2.8).s().p("AAggoIAAA7Ig+AWIAAg6IA+gX").cp();
	this.shape_355.setTransform(-6.4,-15);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#B19454").s().p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_356.setTransform(-26,-25.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_357.setTransform(-28.3,-22);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_358.setTransform(-23.9,-22);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#B19454").s().p("AgDAXIg6gXIBBgWIA6AWIhBAX").cp();
	this.shape_359.setTransform(-31.8,-28.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#937044","#6C5E35"],[0.125,1],1.1,-2.8,-0.9,2.9).s().p("AgbgqIAAA+IA4AXIAAg9Ig4gY").cp();
	this.shape_360.setTransform(-35.1,-24.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.8,-2.7,0.9,2.9).s().p("AAhgqIAAA+IhBAXIAAg9IBBgY").cp();
	this.shape_361.setTransform(-28.9,-24.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.4,-1.3,0.6,1.5).s().p("Ag4AmIgugSICfg5IAuASIifA5").cp();
	this.shape_362.setTransform(23.8,-17);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-2,0,2.2,0).s().p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_363.setTransform(15.8,-13.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.3,-0.7,-0.2,0.8).s().p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_364.setTransform(15.8,-13.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.2,-0.8,0.3,1).s().p("ABQgkIAAARIifA4IAAgRICfg4").cp();
	this.shape_365.setTransform(26.1,-15.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.7,-2.1,0.8,2.2).s().p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_366.setTransform(17.9,-19.9);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-3,0,3.4,0).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_367.setTransform(5.9,-14.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.5,-1.1,-0.3,1.3).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_368.setTransform(5.9,-14.3);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.3,-1.3,0.5,1.5).s().p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_369.setTransform(21.3,-17.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#9A8D5B").s().p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_370.setTransform(15.2,-34.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_371.setTransform(13.3,-26.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#979797","#F9FE19"],[0,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_372.setTransform(-10.4,-47.8);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#979797","#EDF421","#F9FE19"],[0,0.541,1],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_373.setTransform(-10.4,-51.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_374.setTransform(-22.9,-52.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXA2IgtgSIAAhPQAAgQAWAJQAXAIAAASIAABO").cp();
	this.shape_375.setTransform(-22.9,-56.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_376.setTransform(-10.4,-25.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0.1,2.4,0.1).s().p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_377.setTransform(-10.4,-29.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_378.setTransform(-22.9,-29.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXA2IgtgSIAAhPQAAgQAWAIQAXAJAAASIAABO").cp();
	this.shape_379.setTransform(-22.9,-33.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_380.setTransform(-15.8,-65.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_381.setTransform(14.8,-65.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#5A6D53"],[0.043,0.047,0.067,0.09,0.118,0.149,0.208,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADaIEVBxIAAjaIkVhx").cp();
	this.shape_382.setTransform(-15.5,-53.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.7,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_383.setTransform(14.5,-54);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_384.setTransform(10.7,-76.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_385.setTransform(0.4,-73);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#BEB47D").s().p("AhQg2IDcBYIg7AVIjchYIA7gV").cp();
	this.shape_386.setTransform(-9.2,-69.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_387.setTransform(0.6,-72.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_388.setTransform(-15.8,-41);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_389.setTransform(14.8,-41.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.lf(["#323B2E","#3F483A","#505B4A","#5D6856","#64705D","#66725F","#43503D"],[0,0.02,0.059,0.102,0.157,0.251,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADaIEVBxIAAjaIkVhx").cp();
	this.shape_390.setTransform(-15.5,-29.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#433E2A").s().p("AAZhJQAHAGAAANIAABeIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_391.setTransform(15.4,-27.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.231,0.635,1],-0.1,-7,0.1,5.9).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_392.setTransform(15.4,-28.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.22,0.761,1],-4.2,0.1,4,0).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_393.setTransform(15.4,-28.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#4E7C20").s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_394.setTransform(15.4,-28.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#7A7049").s().p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_395.setTransform(15.4,-28.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.7,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_396.setTransform(14.5,-29.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_397.setTransform(10.7,-52.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_398.setTransform(0.4,-48.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#BEB47D").s().p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_399.setTransform(-9.2,-44.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_400.setTransform(0.6,-48.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#A4B39A").s().p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_401.setTransform(29.1,-32.5);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_402.setTransform(25.9,-28.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.7,-2.6,0.9,2.8).s().p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_403.setTransform(31.9,-28.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#4B4445").ss(1,1,1).p("AgBAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_404.setTransform(-9,-23.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_405.setTransform(-11.3,-20.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_406.setTransform(-6.9,-20.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA7IgUgIIE3huIAUAIIk3Bu").cp();
	this.shape_407.setTransform(16.1,-61.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA7IgUgIIE3huIAUAIIk3Bu").cp();
	this.shape_408.setTransform(16.1,-61.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA7IgUgIIE3huIAUAIIk3Bu").cp();
	this.shape_409.setTransform(16.1,-61.5);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhIIgTgIIAACYIATAIIAAiY").cp();
	this.shape_410.setTransform(0.5,-48.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhIIgTgIIAACYIATAIIAAiY").cp();
	this.shape_411.setTransform(0.5,-48.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhIIgTgIIAACYIATAIIAAiY").cp();
	this.shape_412.setTransform(0.5,-48.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#4B4445").ss(1,1,1).p("ACVh7IAACMIkpBrIAAiLIEphs").cp();
	this.shape_413.setTransform(17.1,-53.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#4B4445").ss(1,1,1).p("ACciDIAACXIk3BwIAAiXIE3hw").cp();
	this.shape_414.setTransform(17.1,-53.5);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAWIg5gWIA/gVIA4AVIg+AW").cp();
	this.shape_415.setTransform(-9.2,-19.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA3AWIAAg7Ig3gW").cp();
	this.shape_416.setTransform(-12.4,-14.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#4B4445").ss(1,1,1).p("AAggoIAAA7Ig+AWIAAg6IA+gX").cp();
	this.shape_417.setTransform(-6.4,-15);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_418.setTransform(-26,-25.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_419.setTransform(-28.3,-22);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_420.setTransform(-23.9,-22);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAXIg6gXIBBgWIA6AWIhBAX").cp();
	this.shape_421.setTransform(-31.8,-28.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgqIAAA+IA4AXIAAg9Ig4gY").cp();
	this.shape_422.setTransform(-35.1,-24.4);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#4B4445").ss(1,1,1).p("AAhgqIAAA+IhBAXIAAg9IBBgY").cp();
	this.shape_423.setTransform(-28.9,-24.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#4B4445").ss(1,1,1).p("Ag4AmIgugSICfg5IAuASIifA5").cp();
	this.shape_424.setTransform(23.8,-17);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_425.setTransform(15.8,-13.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_426.setTransform(15.8,-13.2);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_427.setTransform(15.8,-13.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#4B4445").ss(1,1,1).p("ABQgkIAAARIifA4IAAgRICfg4").cp();
	this.shape_428.setTransform(26.1,-15.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#4B4445").ss(1,1,1).p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_429.setTransform(17.9,-19.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_430.setTransform(5.9,-14.3);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_431.setTransform(5.9,-14.3);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_432.setTransform(5.9,-14.3);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#4B4445").ss(1,1,1).p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_433.setTransform(21.3,-17.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#4B4445").ss(1,1,1).p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_434.setTransform(15.2,-34.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#4B4445").ss(1,1,1).p("AAJAAQAAAEgDACQgDADgDAAQgDAAgDgDQgCgCAAgEQAAgIAIAAQADAAADADQADADAAACIAAAA").cp();
	this.shape_435.setTransform(13.4,-27);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#4B4445").ss(1,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_436.setTransform(13.3,-26.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_437.setTransform(-10.4,-47.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_438.setTransform(-10.4,-51.8);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_439.setTransform(-22.9,-52.2);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhPQAAgQAWAJQAXAIAAASIAABO").cp();
	this.shape_440.setTransform(-22.9,-56.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_441.setTransform(-10.4,-25.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_442.setTransform(-10.4,-29.2);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_443.setTransform(-22.9,-29.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhPQAAgQAWAIQAXAJAAASIAABO").cp();
	this.shape_444.setTransform(-22.9,-33.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_445.setTransform(-15.8,-65.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_446.setTransform(14.8,-65.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADaIEVBxIAAjaIkVhx").cp();
	this.shape_447.setTransform(-15.5,-53.8);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_448.setTransform(14.5,-54);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_449.setTransform(10.7,-76.7);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_450.setTransform(0.4,-73);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#4B4445").ss(1,1,1).p("AhQg2IDcBYIg7AVIjchYIA7gV").cp();
	this.shape_451.setTransform(-9.2,-69.4);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_452.setTransform(0.6,-72.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_453.setTransform(-15.8,-41);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_454.setTransform(14.8,-41.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADaIEVBxIAAjaIkVhx").cp();
	this.shape_455.setTransform(-15.5,-29.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#4B4445").ss(1,1,1).p("AAZhJQAHAGAAANIAABeIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_456.setTransform(15.4,-27.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_457.setTransform(15.4,-28.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_458.setTransform(15.4,-28.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_459.setTransform(15.4,-28.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_460.setTransform(15.4,-28.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#4B4445").ss(1,1,1).p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_461.setTransform(15.4,-28.7);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_462.setTransform(14.5,-29.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_463.setTransform(10.7,-52.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_464.setTransform(0.4,-48.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#4B4445").ss(1,1,1).p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_465.setTransform(-9.2,-44.9);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_466.setTransform(0.6,-48.4);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_467.setTransform(29.1,-32.5);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_468.setTransform(25.9,-28.3);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#4B4445").ss(1,1,1).p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_469.setTransform(31.9,-28.3);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.rf(["#32680B","rgba(50,104,11,0.796)","rgba(50,104,11,0)"],[0,0.09,1],0,0,0,0,0,26.9).s().p("AAAhqQBvAABPAfQBOAgAAArQAAAshOAfQhPAghvAAQhuAAhPggQhOgfAAgsQAAgrBOggQBPgfBuAAIAAAA").cp();
	this.shape_470.setTransform(27.6,-27);

	this.addChild(this.shape_470,this.shape_469,this.shape_468,this.shape_467,this.shape_466,this.shape_465,this.shape_464,this.shape_463,this.shape_462,this.shape_461,this.shape_460,this.shape_459,this.shape_458,this.shape_457,this.shape_456,this.shape_455,this.shape_454,this.shape_453,this.shape_452,this.shape_451,this.shape_450,this.shape_449,this.shape_448,this.shape_447,this.shape_446,this.shape_445,this.shape_444,this.shape_443,this.shape_442,this.shape_441,this.shape_440,this.shape_439,this.shape_438,this.shape_437,this.shape_436,this.shape_435,this.shape_434,this.shape_433,this.shape_432,this.shape_431,this.shape_430,this.shape_429,this.shape_428,this.shape_427,this.shape_426,this.shape_425,this.shape_424,this.shape_423,this.shape_422,this.shape_421,this.shape_420,this.shape_419,this.shape_418,this.shape_417,this.shape_416,this.shape_415,this.shape_414,this.shape_413,this.shape_412,this.shape_411,this.shape_410,this.shape_409,this.shape_408,this.shape_407,this.shape_406,this.shape_405,this.shape_404,this.shape_403,this.shape_402,this.shape_401,this.shape_400,this.shape_399,this.shape_398,this.shape_397,this.shape_396,this.shape_395,this.shape_394,this.shape_393,this.shape_392,this.shape_391,this.shape_390,this.shape_389,this.shape_388,this.shape_387,this.shape_386,this.shape_385,this.shape_384,this.shape_383,this.shape_382,this.shape_381,this.shape_380,this.shape_379,this.shape_378,this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-84.6,108.9,84.7);


(lib.StoreLarge = function() {
	this.initialize();

	// Layer 1
	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.lf(["#989249","#8E7236"],[0,1],-1.9,-5.9,0.4,1.1).s().p("AAPACIgdALIAAgOIAdgLIAAAO").cp();
	this.shape_471.setTransform(29.1,-54.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.lf(["#989249","#8E7236"],[0,1],-1.6,-5.2,0.7,1.8).s().p("AAHAMIgNAGIAAgeIANgFIAAAd").cp();
	this.shape_472.setTransform(26.7,-54.8);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.lf(["#989249","#8E7236"],[0,1],-0.9,-3.1,1.4,3.9).s().p("AAIAFIgPAGIAAgPIAPgGIAAAP").cp();
	this.shape_473.setTransform(28.3,-57.8);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.lf(["#989249","#8E7236"],[0,1],-0.7,-2.4,1.6,4.6).s().p("AAHAMIgNAGIAAgeIANgFIAAAd").cp();
	this.shape_474.setTransform(26.7,-58);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.lf(["#989249","#8E7236"],[0,1],0,-0.2,2.3,6.8).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_475.setTransform(28.3,-60.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.lf(["#989249","#8E7236"],[0,1],-2.1,-6.6,0.2,0.4).s().p("AAPACIgdALIAAgNIAdgMIAAAO").cp();
	this.shape_476.setTransform(5.1,-46);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.lf(["#989249","#8E7236"],[0,1],-1.9,-5.8,0.4,1.2).s().p("AgGgLIANgGIAAAdIgNAGIAAgd").cp();
	this.shape_477.setTransform(7.5,-47.6);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.lf(["#989249","#8E7236"],[0,1],-1.2,-3.7,1.1,3.3).s().p("AAPACIgdALIAAgNIAdgMIAAAO").cp();
	this.shape_478.setTransform(6.7,-49.7);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.lf(["#989249","#8E7236"],[0,1],-0.5,-1.8,1.8,5.2).s().p("AAHAVIgNAFIAAgtIANgGIAAAu").cp();
	this.shape_479.setTransform(24.2,-57.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.lf(["#989249","#8E7236"],[0,1],-1,-3.3,1.3,3.7).s().p("AAHAkIgNAGIAAhNIANgGIAABN").cp();
	this.shape_480.setTransform(21,-55);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.lf(["#989249","#8E7236"],[0,1],-1.6,-5.2,0.7,1.8).s().p("AgBARIANgGIgJgbIgOAGIAKAb").cp();
	this.shape_481.setTransform(23.7,-53.8);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.lf(["#989249","#8E7236"],[0,1],-1,-3.3,1.3,3.7).s().p("AgHAKIAOgGIAAgNIgOAFIAAAO").cp();
	this.shape_482.setTransform(22.6,-55.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.lf(["#989249","#8E7236"],[0,1],-0.1,-0.4,2.2,6.6).s().p("AgHAKIAOgGIAAgNIgOAGIAAAN").cp();
	this.shape_483.setTransform(22.6,-58.8);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.lf(["#989249","#8E7236"],[0,1],-1.1,-3.4,1.2,3.6).s().p("AAHAkIgNAGIAAhNIANgGIAABN").cp();
	this.shape_484.setTransform(18.5,-54.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.lf(["#989249","#8E7236"],[0,1],-1.1,-3.4,1.2,3.6).s().p("AAHgpIAABNIgNAGIAAhNIANgG").cp();
	this.shape_485.setTransform(15.3,-52.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.lf(["#989249","#8E7236"],[0,1],-1.4,-4.3,0.9,2.7).s().p("AAIghIAAA9IgOAGIAAg9IAOgG").cp();
	this.shape_486.setTransform(11.4,-50.7);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.lf(["#989249","#8E7236"],[0,1],-1,-3.1,1.3,3.9).s().p("AAHgRIAAAdIgNAGIAAgdIANgG").cp();
	this.shape_487.setTransform(4.3,-49.6);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.lf(["#989249","#8E7236"],[0,1],-2,-6.2,0.3,0.8).s().p("AgGgDIAAANIAOgFIAAgOIgOAG").cp();
	this.shape_488.setTransform(16.9,-50.4);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.lf(["#989249","#8E7236"],[0,1],-0.1,-0.6,2.2,6.4).s().p("AgGAKIAOgFIAAgOIgOAGIAAAN").cp();
	this.shape_489.setTransform(16.9,-56.7);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.lf(["#989249","#8E7236"],[0,1],-0.2,-0.8,2.1,6.2).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_490.setTransform(11.4,-54.6);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.lf(["#989249","#8E7236"],[0,1],-0.3,-0.9,2,6.1).s().p("AgWAQIAtgQIAAgPIgtAQIAAAP").cp();
	this.shape_491.setTransform(5.9,-52.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],0.3,-0.4,-0.1,0.6).s().p("AgTgNIAAANIAnAOIAAgOIgngN").cp();
	this.shape_492.setTransform(-28.3,-19.6);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],1.2,-2.6,-1,2.7).s().p("AgbgtIAABBIA2AaIABhDIg3gY").cp();
	this.shape_493.setTransform(-12.6,-13.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#B19454").s().p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_494.setTransform(-9,-23.9);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_495.setTransform(-11.3,-20.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_496.setTransform(-7,-20.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.lf(["#FBFED2","rgba(251,254,210,0)"],[0,0.6],-16.5,0,16.7,0).s().p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_497.setTransform(16.1,-61.5);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#B8CAAE").s().p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_498.setTransform(16.1,-61.5);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.lf(["rgba(251,254,210,0.42)","rgba(251,254,210,0)"],[0,0.325],2.5,-6.7,-2.3,6.8).s().p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_499.setTransform(0.5,-48.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],2.5,-6.7,-2.3,6.8).s().p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_500.setTransform(0.5,-48.2);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.lf(["#46553F","#313B2E"],[0.125,1],-1.9,-6.3,2.2,6.9).s().p("ACVh7IAACMIkpBrIAAiLIEphs").cp();
	this.shape_501.setTransform(17.1,-53.5);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.lf(["#667C5B","#56694F"],[0.125,1],-2.1,-6.8,2.4,7.4).s().p("ACciDIAACYIk3BvIAAiXIE3hw").cp();
	this.shape_502.setTransform(17.1,-53.5);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#B19454").s().p("AgCAWIg5gWIA/gVIA4AVIg+AW").cp();
	this.shape_503.setTransform(-9.2,-19.1);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.lf(["#937044","#6C5E35"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA3AWIAAg7Ig3gW").cp();
	this.shape_504.setTransform(-12.4,-14.9);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.7,-2.5,0.9,2.8).s().p("AAggoIAAA7Ig+AWIAAg6IA+gX").cp();
	this.shape_505.setTransform(-6.4,-15);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#B19454").s().p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_506.setTransform(-26,-25.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_507.setTransform(-28.3,-22);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_508.setTransform(-23.9,-22);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.4,-1.3,0.6,1.5).s().p("Ag4AmIgugSICfg5IAuATIifA4").cp();
	this.shape_509.setTransform(23.8,-17);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-2,0,2.2,0).s().p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_510.setTransform(15.8,-13.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.3,-0.7,-0.2,0.8).s().p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_511.setTransform(15.8,-13.2);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.2,-0.8,0.3,1).s().p("ABQgjIAAAQIifA4IAAgRICfg3").cp();
	this.shape_512.setTransform(26.1,-15.2);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.7,-2.1,0.8,2.2).s().p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_513.setTransform(17.9,-19.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-3,0,3.4,0).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_514.setTransform(5.9,-14.3);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.5,-1.1,-0.3,1.3).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_515.setTransform(5.9,-14.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.3,-1.3,0.5,1.5).s().p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_516.setTransform(21.3,-17.3);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#9A8D5B").s().p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_517.setTransform(15.2,-34.7);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_518.setTransform(13.3,-26.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.lf(["#979797","#F9FE19"],[0,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_519.setTransform(-17.7,-75);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.lf(["#979797","#EDF421","#F9FE19"],[0,0.541,1],-2.2,0,2.4,0).s().p("AAXA2IgtgSIAAhPQAAgQAWAJQAXAIAAASIAABO").cp();
	this.shape_520.setTransform(-17.7,-79);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.lf(["#979797","#F9FE19"],[0,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_521.setTransform(-7.2,-46.3);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.lf(["#979797","#EDF421","#F9FE19"],[0,0.541,1],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_522.setTransform(-7.2,-50.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0.1,-1,-0.5,0.6).s().p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_523.setTransform(18,-75.4);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.lf(["#545454","#242424"],[0,0.529],2.4,0,-2.2,0).s().p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_524.setTransform(18,-79.4);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0.1,-1,-0.5,0.6).s().p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_525.setTransform(6.5,-71.1);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.lf(["#545454","#242424"],[0,0.529],2.4,0,-2.2,0).s().p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_526.setTransform(6.5,-75.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAVgLIAYAJIAAASIgtgQ").cp();
	this.shape_527.setTransform(-7.8,-71.1);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0.1,2.4,0.1).s().p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_528.setTransform(-7.8,-75.1);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AAXgEIAAASIgtgQIAVgLIAYAJ").cp();
	this.shape_529.setTransform(-15.8,-49.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_530.setTransform(-15.8,-53.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_531.setTransform(-23.9,-53);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0.1,2.4,0.1).s().p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_532.setTransform(-23.9,-57);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#37502C").s().p("Ahxg3IAAAUIDjBbIAAgVIjjha").cp();
	this.shape_533.setTransform(-12.6,-86.6);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#334B29").s().p("ACEgkIkHBdIAAgVIEHhcIAAAU").cp();
	this.shape_534.setTransform(12,-86.8);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#5A6D53"],[0.043,0.047,0.067,0.09,0.118,0.149,0.208,1],3,-8,-2.8,8.3).s().p("AhviEIAACuIDfBaIAAiuIjfha").cp();
	this.shape_535.setTransform(-12.3,-77.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-2.4,-7.7,2.7,8.3).s().p("ACBApIkBBdIAAiuIEBhdIAACu").cp();
	this.shape_536.setTransform(11.7,-77.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#BEB47D").s().p("ABBAsIiwhGIAwgRICvBGIgvAR").cp();
	this.shape_537.setTransform(5.1,-94.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#BEB47D").s().p("ACRggIjtBWIg0gVIDthWIA0AV").cp();
	this.shape_538.setTransform(8.3,-89.5);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#BEB47D").s().p("ACRggIjtBWIg0gVIDthWIA0AV").cp();
	this.shape_539.setTransform(-6.9,-95.8);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#BEB47D").s().p("ABBAsIiwhGIAvgRICwBGIgvAR").cp();
	this.shape_540.setTransform(-5,-90.7);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#AA9C75").s().p("AD1AAIkFBdIjkhcIEFhcIDkBb").cp();
	this.shape_541.setTransform(0.6,-92.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_542.setTransform(-15.8,-65.5);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_543.setTransform(14.8,-65.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#5A6D53"],[0.043,0.047,0.067,0.09,0.118,0.149,0.208,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADaIEVBxIAAjaIkVhx").cp();
	this.shape_544.setTransform(-15.5,-53.8);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_545.setTransform(14.5,-54);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_546.setTransform(10.7,-76.7);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_547.setTransform(0.4,-73);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#BEB47D").s().p("AhQg2IDcBYIg7AVIjchYIA7gV").cp();
	this.shape_548.setTransform(-9.2,-69.4);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_549.setTransform(0.6,-72.9);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_550.setTransform(-15.8,-41);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_551.setTransform(14.8,-41.2);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.lf(["#323B2E","#3F483A","#505B4A","#5D6856","#64705D","#66725F","#43503D"],[0,0.02,0.059,0.102,0.157,0.251,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADZIEVBxIAAjZIkVhx").cp();
	this.shape_552.setTransform(-15.5,-29.3);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#433E2A").s().p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_553.setTransform(15.4,-27.7);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.231,0.635,1],-0.1,-7,0.1,5.9).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_554.setTransform(15.4,-28.2);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.22,0.761,1],-4.2,0.1,4,0).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_555.setTransform(15.4,-28.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#7B5C1F").s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_556.setTransform(15.4,-28.2);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#7A7049").s().p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_557.setTransform(15.4,-28.7);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_558.setTransform(14.5,-29.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_559.setTransform(10.7,-52.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_560.setTransform(0.4,-48.5);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#B19454").s().p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_561.setTransform(28.3,-37.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAAqIAnARIAAgrIgngQ").cp();
	this.shape_562.setTransform(26,-34.5);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_563.setTransform(30.4,-34.5);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#BEB47D").s().p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_564.setTransform(-9.2,-44.9);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_565.setTransform(0.6,-48.4);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#A4B39A").s().p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_566.setTransform(29.1,-32.5);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_567.setTransform(25.9,-28.3);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.7,-2.6,0.9,2.8).s().p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_568.setTransform(31.9,-28.3);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_569.setTransform(-9,-23.9);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_570.setTransform(-11.3,-20.8);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_571.setTransform(-7,-20.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_572.setTransform(16.1,-61.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_573.setTransform(16.1,-61.5);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_574.setTransform(16.1,-61.5);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_575.setTransform(0.5,-48.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_576.setTransform(0.5,-48.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_577.setTransform(0.5,-48.2);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#4B4445").ss(1,1,1).p("ACVh7IAACMIkpBrIAAiLIEphs").cp();
	this.shape_578.setTransform(17.1,-53.5);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#4B4445").ss(1,1,1).p("ACciDIAACYIk3BvIAAiXIE3hw").cp();
	this.shape_579.setTransform(17.1,-53.5);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAWIg5gWIA/gVIA4AVIg+AW").cp();
	this.shape_580.setTransform(-9.2,-19.1);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA3AWIAAg7Ig3gW").cp();
	this.shape_581.setTransform(-12.4,-14.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#4B4445").ss(1,1,1).p("AAggoIAAA7Ig+AWIAAg6IA+gX").cp();
	this.shape_582.setTransform(-6.4,-15);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_583.setTransform(-26,-25.1);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_584.setTransform(-28.3,-22);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_585.setTransform(-23.9,-22);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#4B4445").ss(1,1,1).p("Ag4AmIgugSICfg5IAuATIifA4").cp();
	this.shape_586.setTransform(23.8,-17);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_587.setTransform(15.8,-13.2);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_588.setTransform(15.8,-13.2);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgRIgrgQ").cp();
	this.shape_589.setTransform(15.8,-13.2);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#4B4445").ss(1,1,1).p("ABQgjIAAAQIifA4IAAgRICfg3").cp();
	this.shape_590.setTransform(26.1,-15.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#4B4445").ss(1,1,1).p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_591.setTransform(17.9,-19.9);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_592.setTransform(5.9,-14.3);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_593.setTransform(5.9,-14.3);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_594.setTransform(5.9,-14.3);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#4B4445").ss(1,1,1).p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_595.setTransform(21.3,-17.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#4B4445").ss(1,1,1).p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_596.setTransform(15.2,-34.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#4B4445").ss(1,1,1).p("AAJAAQAAAEgDACQgDADgDAAQgDAAgDgDQgCgCAAgEQAAgIAIAAQADAAADADQADADAAACIAAAA").cp();
	this.shape_597.setTransform(13.4,-27);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#4B4445").ss(1,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_598.setTransform(13.3,-26.9);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_599.setTransform(-17.7,-75);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhPQAAgQAWAJQAXAIAAASIAABO").cp();
	this.shape_600.setTransform(-17.7,-79);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_601.setTransform(-7.2,-46.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_602.setTransform(-7.2,-50.3);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_603.setTransform(18,-75.4);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#4B4445").ss(1,1,1).p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_604.setTransform(18,-79.4);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_605.setTransform(6.5,-71.1);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#4B4445").ss(1,1,1).p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_606.setTransform(6.5,-75.1);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAVgLIAYAJIAAASIgtgQ").cp();
	this.shape_607.setTransform(-7.8,-71.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_608.setTransform(-7.8,-75.1);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgEIAAASIgtgQIAVgLIAYAJ").cp();
	this.shape_609.setTransform(-15.8,-49.5);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_610.setTransform(-15.8,-53.5);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_611.setTransform(-23.9,-53);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_612.setTransform(-23.9,-57);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#4B4445").ss(1,1,1).p("Ahxg3IAAAUIDjBbIAAgVIjjha").cp();
	this.shape_613.setTransform(-12.6,-86.6);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#4B4445").ss(1,1,1).p("ACEg4IAAAUIkHBdIAAgV");
	this.shape_614.setTransform(12,-86.8);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#4B4445").ss(1,1,1).p("AhviEIAACuIDfBaIAAiuIjfha").cp();
	this.shape_615.setTransform(-12.3,-77.3);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#4B4445").ss(1,1,1).p("ACBApIkBBdIAAiuIEBhdIAACu").cp();
	this.shape_616.setTransform(11.7,-77.4);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#4B4445").ss(1,1,1).p("ABBAsIiwhGIAwgRICvBGIgvAR").cp();
	this.shape_617.setTransform(5.1,-94.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#4B4445").ss(1,1,1).p("ACRggIjtBWIg0gVIDthWIA0AV").cp();
	this.shape_618.setTransform(8.3,-89.5);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#4B4445").ss(1,1,1).p("ACRggIjtBWIg0gVIDthWIA0AV").cp();
	this.shape_619.setTransform(-6.9,-95.8);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#4B4445").ss(1,1,1).p("ABBAsIiwhGIAvgRICwBGIgvAR").cp();
	this.shape_620.setTransform(-5,-90.7);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#4B4445").ss(1,1,1).p("AD1AAIkFBdIjkhcIEFhcIDkBb").cp();
	this.shape_621.setTransform(0.6,-92.6);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_622.setTransform(-15.8,-65.5);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_623.setTransform(14.8,-65.7);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADaIEVBxIAAjaIkVhx").cp();
	this.shape_624.setTransform(-15.5,-53.8);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_625.setTransform(14.5,-54);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_626.setTransform(10.7,-76.7);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_627.setTransform(0.4,-73);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#4B4445").ss(1,1,1).p("AhQg2IDcBYIg7AVIjchYIA7gV").cp();
	this.shape_628.setTransform(-9.2,-69.4);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_629.setTransform(0.6,-72.9);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_630.setTransform(-15.8,-41);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_631.setTransform(14.8,-41.2);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADZIEVBxIAAjZIkVhx").cp();
	this.shape_632.setTransform(-15.5,-29.3);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#4B4445").ss(1,1,1).p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_633.setTransform(15.4,-27.7);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_634.setTransform(15.4,-28.2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_635.setTransform(15.4,-28.2);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_636.setTransform(15.4,-28.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_637.setTransform(15.4,-28.2);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#4B4445").ss(1,1,1).p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_638.setTransform(15.4,-28.7);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_639.setTransform(14.5,-29.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_640.setTransform(10.7,-52.2);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_641.setTransform(0.4,-48.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_642.setTransform(28.3,-37.6);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAAqIAnARIAAgrIgngQ").cp();
	this.shape_643.setTransform(26,-34.5);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_644.setTransform(30.4,-34.5);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#4B4445").ss(1,1,1).p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_645.setTransform(-9.2,-44.9);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_646.setTransform(0.6,-48.4);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_647.setTransform(29.1,-32.5);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_648.setTransform(25.9,-28.3);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#4B4445").ss(1,1,1).p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_649.setTransform(31.9,-28.3);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.rf(["#32680B","rgba(50,104,11,0.796)","rgba(50,104,11,0)"],[0,0.09,1],0,0,0,0,0,26.9).s().p("AAAhqQBvAABPAfQBOAgAAArQAAAshOAfQhPAghvAAQhuAAhPggQhOgfAAgsQAAgrBOggQBPgfBuAAIAAAA").cp();
	this.shape_650.setTransform(27.6,-27);

	this.addChild(this.shape_650,this.shape_649,this.shape_648,this.shape_647,this.shape_646,this.shape_645,this.shape_644,this.shape_643,this.shape_642,this.shape_641,this.shape_640,this.shape_639,this.shape_638,this.shape_637,this.shape_636,this.shape_635,this.shape_634,this.shape_633,this.shape_632,this.shape_631,this.shape_630,this.shape_629,this.shape_628,this.shape_627,this.shape_626,this.shape_625,this.shape_624,this.shape_623,this.shape_622,this.shape_621,this.shape_620,this.shape_619,this.shape_618,this.shape_617,this.shape_616,this.shape_615,this.shape_614,this.shape_613,this.shape_612,this.shape_611,this.shape_610,this.shape_609,this.shape_608,this.shape_607,this.shape_606,this.shape_605,this.shape_604,this.shape_603,this.shape_602,this.shape_601,this.shape_600,this.shape_599,this.shape_598,this.shape_597,this.shape_596,this.shape_595,this.shape_594,this.shape_593,this.shape_592,this.shape_591,this.shape_590,this.shape_589,this.shape_588,this.shape_587,this.shape_586,this.shape_585,this.shape_584,this.shape_583,this.shape_582,this.shape_581,this.shape_580,this.shape_579,this.shape_578,this.shape_577,this.shape_576,this.shape_575,this.shape_574,this.shape_573,this.shape_572,this.shape_571,this.shape_570,this.shape_569,this.shape_568,this.shape_567,this.shape_566,this.shape_565,this.shape_564,this.shape_563,this.shape_562,this.shape_561,this.shape_560,this.shape_559,this.shape_558,this.shape_557,this.shape_556,this.shape_555,this.shape_554,this.shape_553,this.shape_552,this.shape_551,this.shape_550,this.shape_549,this.shape_548,this.shape_547,this.shape_546,this.shape_545,this.shape_544,this.shape_543,this.shape_542,this.shape_541,this.shape_540,this.shape_539,this.shape_538,this.shape_537,this.shape_536,this.shape_535,this.shape_534,this.shape_533,this.shape_532,this.shape_531,this.shape_530,this.shape_529,this.shape_528,this.shape_527,this.shape_526,this.shape_525,this.shape_524,this.shape_523,this.shape_522,this.shape_521,this.shape_520,this.shape_519,this.shape_518,this.shape_517,this.shape_516,this.shape_515,this.shape_514,this.shape_513,this.shape_512,this.shape_511,this.shape_510,this.shape_509,this.shape_508,this.shape_507,this.shape_506,this.shape_505,this.shape_504,this.shape_503,this.shape_502,this.shape_501,this.shape_500,this.shape_499,this.shape_498,this.shape_497,this.shape_496,this.shape_495,this.shape_494,this.shape_493,this.shape_492,this.shape_491,this.shape_490,this.shape_489,this.shape_488,this.shape_487,this.shape_486,this.shape_485,this.shape_484,this.shape_483,this.shape_482,this.shape_481,this.shape_480,this.shape_479,this.shape_478,this.shape_477,this.shape_476,this.shape_475,this.shape_474,this.shape_473,this.shape_472,this.shape_471);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-101.9,108.9,102);


(lib.StoreExtraLarge = function() {
	this.initialize();

	// Layer 1
	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.6,-4.9,0.3,1).s().p("AANABIgZAKIAAgMIAZgJIAAAL").cp();
	this.shape_651.setTransform(27.8,-54.3);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.4,-4.4,0.5,1.6).s().p("AAGAKIgLAFIAAgYIALgFIAAAY").cp();
	this.shape_652.setTransform(25.8,-54.2);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.8,-2.6,1.1,3.3).s().p("AAGAEIgLAFIAAgMIALgFIAAAM").cp();
	this.shape_653.setTransform(27.1,-56.7);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.6,-2.1,1.3,3.9).s().p("AAGAKIgLAFIAAgYIALgFIAAAY").cp();
	this.shape_654.setTransform(25.8,-56.9);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.lf(["#D9D165","#C7BF5E"],[0,1],0,-0.2,1.9,5.7).s().p("AgTAOIAngOIAAgNIgnANIAAAO").cp();
	this.shape_655.setTransform(27.1,-59.4);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.8,-5.6,0.1,0.4).s().p("AANABIgZAKIAAgLIAZgKIAAAL").cp();
	this.shape_656.setTransform(7.5,-46.8);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.5,-4.9,0.4,1.1).s().p("AgFgJIALgFIAAAYIgLAFIAAgY").cp();
	this.shape_657.setTransform(9.5,-48.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1,-3.1,0.9,2.8).s().p("AANABIgZAKIAAgLIAZgKIAAAL").cp();
	this.shape_658.setTransform(8.9,-50);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.4,-1.5,1.5,4.5).s().p("AAGARIgLAFIAAgmIALgFIAAAm").cp();
	this.shape_659.setTransform(23.6,-56.8);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.9,-2.7,1,3.2).s().p("AAGAeIgLAFIAAhAIALgFIAABA").cp();
	this.shape_660.setTransform(21,-54.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.4,-4.4,0.5,1.5).s().p("AgBAPIALgFIgIgYIgLAFIAIAY").cp();
	this.shape_661.setTransform(23.2,-53.4);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.8,-2.8,1.1,3.2).s().p("AgFAJIALgFIAAgMIgLAFIAAAM").cp();
	this.shape_662.setTransform(22.3,-54.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.lf(["#D9D165","#C7BF5E"],[0,1],0,-0.3,1.9,5.6).s().p("AgFAJIALgFIAAgLIgLAFIAAAL").cp();
	this.shape_663.setTransform(22.3,-57.6);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.9,-2.8,1,3.1).s().p("AAGAfIgLAEIAAhAIALgFIAABB").cp();
	this.shape_664.setTransform(18.8,-53.7);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.9,-2.9,1,3).s().p("AAGAeIgLAFIAAhAIALgFIAABA").cp();
	this.shape_665.setTransform(16.2,-52.7);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.1,-3.6,0.8,2.3).s().p("AAGgbIAAAyIgLAFIAAgyIALgF").cp();
	this.shape_666.setTransform(12.8,-50.8);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.8,-2.6,1.1,3.3).s().p("AAGgOIAAAYIgLAFIAAgYIALgF").cp();
	this.shape_667.setTransform(6.9,-49.9);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-1.6,-5.2,0.3,0.7).s().p("AgFAIIALgFIAAgKIgLAFIAAAK").cp();
	this.shape_668.setTransform(17.5,-50.5);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.1,-0.5,1.8,5.4).s().p("AgFAIIALgFIAAgKIgLAFIAAAK").cp();
	this.shape_669.setTransform(17.5,-55.8);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.1,-0.7,1.8,5.3).s().p("AgTAOIAngOIAAgNIgnANIAAAO").cp();
	this.shape_670.setTransform(12.9,-54.1);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.lf(["#D9D165","#C7BF5E"],[0,1],-0.2,-0.8,1.7,5.1).s().p("AgSAOIAmgOIAAgMIgmANIAAAN").cp();
	this.shape_671.setTransform(8.2,-52.4);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],0.3,-0.4,-0.1,0.6).s().p("AgTgNIAAANIAnAOIAAgOIgngN").cp();
	this.shape_672.setTransform(-28.3,-19.6);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#6B7764","rgba(115,128,107,0.608)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.937,1],0.4,-0.7,-0.2,0.8).s().p("AgbgTIAAATIA2AUIAAgUIg2gT").cp();
	this.shape_673.setTransform(-35.5,-21.6);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],1.2,-2.6,-1,2.7).s().p("AgbgtIAABBIA2AaIABhDIg3gY").cp();
	this.shape_674.setTransform(-12.6,-13.9);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#B19454").s().p("AgCAQIgpgQIAugPIApAPIguAQ").cp();
	this.shape_675.setTransform(-31.7,-33.9);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_676.setTransform(-34.1,-30.8);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_677.setTransform(-29.7,-30.9);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#B19454").s().p("AgBAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_678.setTransform(-9,-23.9);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_679.setTransform(-11.3,-20.8);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_680.setTransform(-6.9,-20.9);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.lf(["#FBFED2","rgba(251,254,210,0)"],[0,0.6],-16.5,0,16.7,0).s().p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_681.setTransform(16.1,-61.5);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#B8CAAE").s().p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_682.setTransform(16.1,-61.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.lf(["rgba(251,254,210,0.42)","rgba(251,254,210,0)"],[0,0.325],2.5,-6.7,-2.3,6.8).s().p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_683.setTransform(0.5,-48.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],2.5,-6.7,-2.3,6.8).s().p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_684.setTransform(0.5,-48.2);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.lf(["#BA6B20","#96571B"],[0.125,1],-1.8,-5.8,2,6.3).s().p("ACPhzIAAB/IkdBoIAAh+IEdhp").cp();
	this.shape_685.setTransform(17.2,-53.5);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.lf(["#EDD958","#BDAD48"],[0.125,1],-2.1,-6.8,2.4,7.4).s().p("ACciDIAACYIk3BvIAAiXIE3hw").cp();
	this.shape_686.setTransform(17.1,-53.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#B19454").s().p("AgCAWIg5gWIA/gVIA4AVIg+AW").cp();
	this.shape_687.setTransform(-9.2,-19.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.lf(["#937044","#6C5E35"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA3AWIAAg7Ig3gW").cp();
	this.shape_688.setTransform(-12.4,-14.9);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.7,-2.5,0.9,2.8).s().p("AAggoIAAA7Ig+AWIAAg6IA+gX").cp();
	this.shape_689.setTransform(-6.4,-15);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#B19454").s().p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_690.setTransform(-26,-25.1);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_691.setTransform(-28.3,-22);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_692.setTransform(-23.9,-22);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#B19454").s().p("AgDAXIg6gXIBBgWIA6AWIhBAX").cp();
	this.shape_693.setTransform(-31.8,-28.7);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.lf(["#937044","#6C5E35"],[0.125,1],1.1,-2.8,-0.9,2.9).s().p("AgbgqIAAA+IA4AXIAAg+Ig4gX").cp();
	this.shape_694.setTransform(-35.1,-24.3);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.8,-2.6,0.9,3).s().p("AAhgqIAAA+IhBAXIAAg9IBBgY").cp();
	this.shape_695.setTransform(-28.9,-24.4);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.4,-1.3,0.6,1.5).s().p("Ag4AmIgugTICfg4IAuATIifA4").cp();
	this.shape_696.setTransform(23.8,-16.9);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-2,0,2.2,0).s().p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_697.setTransform(15.8,-13.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.3,-0.7,-0.2,0.8).s().p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_698.setTransform(15.8,-13.2);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.2,-0.8,0.3,1).s().p("ABQgjIAAAQIifA4IAAgQICfg4").cp();
	this.shape_699.setTransform(26.1,-15.2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.lf(["#4F4E48","#62625A","#77796E","#878A7D","#909485","#939788"],[0,0.106,0.259,0.42,0.592,0.804],-0.7,-2.1,0.8,2.2).s().p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_700.setTransform(17.9,-19.9);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.lf(["rgba(0,0,0,0.349)","rgba(0,0,0,0)"],[0,0.227],-3,0,3.4,0).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_701.setTransform(5.9,-14.3);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],0.5,-1.1,-0.3,1.3).s().p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_702.setTransform(5.9,-14.3);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.3,-1.3,0.5,1.5).s().p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_703.setTransform(21.3,-17.3);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#9A8D5B").s().p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_704.setTransform(15.2,-34.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_705.setTransform(13.3,-26.9);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.lf(["#979797","#F9FE19"],[0,1],0,-1,-0.6,0.6).s().p("AAXgCIgWgMIgXAKIAAATIAtgR").cp();
	this.shape_706.setTransform(9.3,-92.7);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.lf(["#979797","#EDF421","#F9FE19"],[0,0.541,1],2.4,0,-2.2,0).s().p("AgWgYIAABOIAtgSIAAhPQAAgQgXAIQgWAJAAASIAAAA").cp();
	this.shape_707.setTransform(9.3,-96.6);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.lf(["#979797","#F9FE19"],[0,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_708.setTransform(-17.7,-75);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.lf(["#979797","#EDF421","#F9FE19"],[0,0.541,1],-2.2,0,2.4,0).s().p("AAXA2IgtgSIAAhPQAAgQAWAJQAXAIAAASIAABO").cp();
	this.shape_709.setTransform(-17.7,-79);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.lf(["#979797","#F9FE19"],[0,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_710.setTransform(-7.2,-46.3);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.lf(["#979797","#EDF421","#F9FE19"],[0,0.541,1],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_711.setTransform(-7.2,-50.3);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0.1,-1,-0.5,0.6).s().p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_712.setTransform(18,-75.4);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.lf(["#545454","#242424"],[0,0.529],2.4,0,-2.2,0).s().p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_713.setTransform(18,-79.4);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0.1,-1,-0.5,0.6).s().p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_714.setTransform(6.5,-71.1);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.lf(["#545454","#242424"],[0,0.529],2.4,0,-2.2,0).s().p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_715.setTransform(6.5,-75.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAVgLIAYAJIAAASIgtgQ").cp();
	this.shape_716.setTransform(-10.5,-92.5);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_717.setTransform(-10.5,-96.5);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAVgLIAYAJIAAASIgtgQ").cp();
	this.shape_718.setTransform(-7.8,-71.1);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0.1,2.4,0.1).s().p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_719.setTransform(-7.8,-75.1);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AAXgEIAAASIgtgQIAVgLIAYAJ").cp();
	this.shape_720.setTransform(-15.8,-49.5);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_721.setTransform(-15.8,-53.5);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_722.setTransform(-23.9,-53);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0.1,2.4,0.1).s().p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_723.setTransform(-23.9,-57);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#37502C").s().p("AhagsIAAARIC1BIIAAgRIi1hI").cp();
	this.shape_724.setTransform(-10,-104);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#334B29").s().p("ABqgcIjTBKIAAgRIDThKIAAAR").cp();
	this.shape_725.setTransform(9.7,-104.1);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#5A6D53"],[0.043,0.047,0.067,0.09,0.118,0.149,0.208,1],2.4,-6.4,-2.2,6.6).s().p("AhZhpIAACLICzBIIAAiLIizhI").cp();
	this.shape_726.setTransform(-9.8,-96.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-1.9,-6.2,2.2,6.7).s().p("ABnAhIjNBKIAAiLIDNhKIAACL").cp();
	this.shape_727.setTransform(9.5,-96.6);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#BEB47D").s().p("AAzAjIiMg4IAmgNICNA4IgnAN").cp();
	this.shape_728.setTransform(7.1,-111.2);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#BEB47D").s().p("AA0AjIiNg3IAmgOICNA4IgmAN").cp();
	this.shape_729.setTransform(0.5,-108.8);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#BEB47D").s().p("AgzgiICNA3IgmAOIiNg4IAmgN").cp();
	this.shape_730.setTransform(-5.7,-106.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#AA9C75").s().p("ADFAAIjSBKIi3hKIDRhJIC4BJ").cp();
	this.shape_731.setTransform(0.6,-108.8);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#37502C").s().p("Ahxg3IAAAUIDjBbIAAgVIjjha").cp();
	this.shape_732.setTransform(-12.6,-86.6);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#334B29").s().p("ACEgkIkHBdIAAgVIEHhcIAAAU").cp();
	this.shape_733.setTransform(12,-86.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#5A6D53"],[0.043,0.047,0.067,0.09,0.118,0.149,0.208,1],3,-8,-2.8,8.3).s().p("AhviEIAACuIDfBaIAAiuIjfha").cp();
	this.shape_734.setTransform(-12.3,-77.3);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-2.4,-7.7,2.7,8.3).s().p("ACBApIkBBdIAAiuIEBhdIAACu").cp();
	this.shape_735.setTransform(11.7,-77.4);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#BEB47D").s().p("ABBAsIiwhFIAwgRICvBFIgvAR").cp();
	this.shape_736.setTransform(8.7,-95.6);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#BEB47D").s().p("ABBArIiwhFIAvgRICwBGIgvAQ").cp();
	this.shape_737.setTransform(0.4,-92.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#BEB47D").s().p("AhAgrICwBGIgvARIiwhGIAvgR").cp();
	this.shape_738.setTransform(-7.2,-89.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#AA9C75").s().p("AD1AAIkFBdIjkhcIEFhcIDkBb").cp();
	this.shape_739.setTransform(0.6,-92.6);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_740.setTransform(-15.8,-65.5);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_741.setTransform(14.8,-65.7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#5A6D53"],[0.043,0.047,0.067,0.09,0.118,0.149,0.208,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADZIEVByIAAjaIkVhx").cp();
	this.shape_742.setTransform(-15.5,-53.8);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_743.setTransform(14.5,-54);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_744.setTransform(10.7,-76.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#BEB47D").s().p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_745.setTransform(0.4,-73);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#BEB47D").s().p("AhQg2IDcBYIg7AVIjchYIA7gV").cp();
	this.shape_746.setTransform(-9.2,-69.4);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_747.setTransform(0.6,-72.9);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#37502C").s().p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_748.setTransform(-15.8,-41);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_749.setTransform(14.8,-41.2);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.lf(["#323B2E","#3F483A","#505B4A","#5D6856","#64705D","#66725F","#43503D"],[0,0.02,0.059,0.102,0.157,0.251,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADZIEVBxIAAjZIkVhx").cp();
	this.shape_750.setTransform(-15.5,-29.3);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#433E2A").s().p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_751.setTransform(15.4,-27.7);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.231,0.635,1],-0.1,-7,0.1,5.9).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_752.setTransform(15.4,-28.2);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.22,0.761,1],-4.2,0.1,4,0).s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_753.setTransform(15.4,-28.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#7B5C1F").s().p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_754.setTransform(15.4,-28.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#7A7049").s().p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_755.setTransform(15.4,-28.7);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_756.setTransform(14.5,-29.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_757.setTransform(10.7,-52.2);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#BEB47D").s().p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_758.setTransform(0.4,-48.5);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#B19454").s().p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_759.setTransform(28.3,-37.6);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.lf(["#937044","#6C5E35"],[0.125,1],0.8,-1.9,-0.6,2.1).s().p("AgTgdIAAAqIAnARIAAgrIgngQ").cp();
	this.shape_760.setTransform(26,-34.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.lf(["#7B5F33","#575042"],[0.125,1],-0.5,-1.8,0.7,2.1).s().p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_761.setTransform(30.4,-34.5);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#BEB47D").s().p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_762.setTransform(-9.2,-44.9);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#AA9C75").s().p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_763.setTransform(0.6,-48.4);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#A4B39A").s().p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_764.setTransform(29.1,-32.5);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_765.setTransform(25.9,-28.3);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.7,-2.6,0.9,2.8).s().p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_766.setTransform(31.9,-28.3);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgpgQIAugPIApAPIguAQ").cp();
	this.shape_767.setTransform(-31.7,-33.9);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_768.setTransform(-34.1,-30.8);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_769.setTransform(-29.7,-30.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#4B4445").ss(1,1,1).p("AgBAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_770.setTransform(-9,-23.9);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_771.setTransform(-11.3,-20.8);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_772.setTransform(-6.9,-20.9);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_773.setTransform(16.1,-61.5);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_774.setTransform(16.1,-61.5);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#4B4445").ss(1,1,1).p("AiRA8IgUgIIE3hvIAUAIIk3Bv").cp();
	this.shape_775.setTransform(16.1,-61.5);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_776.setTransform(0.5,-48.2);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_777.setTransform(0.5,-48.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#4B4445").ss(1,1,1).p("AAKhHIgTgIIAACXIATAIIAAiX").cp();
	this.shape_778.setTransform(0.5,-48.2);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#4B4445").ss(1,1,1).p("ACPhzIAAB/IkdBoIAAh+IEdhp").cp();
	this.shape_779.setTransform(17.2,-53.5);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#4B4445").ss(1,1,1).p("ACciDIAACYIk3BvIAAiXIE3hw").cp();
	this.shape_780.setTransform(17.1,-53.5);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAWIg5gWIA/gVIA4AVIg+AW").cp();
	this.shape_781.setTransform(-9.2,-19.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA3AWIAAg7Ig3gW").cp();
	this.shape_782.setTransform(-12.4,-14.9);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#4B4445").ss(1,1,1).p("AAggoIAAA7Ig+AWIAAg6IA+gX").cp();
	this.shape_783.setTransform(-6.4,-15);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgpgQIAtgPIApAPIgtAQ").cp();
	this.shape_784.setTransform(-26,-25.1);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAArIAnAQIAAgrIgngQ").cp();
	this.shape_785.setTransform(-28.3,-22);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_786.setTransform(-23.9,-22);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAXIg6gXIBBgWIA6AWIhBAX").cp();
	this.shape_787.setTransform(-31.8,-28.7);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgqIAAA+IA4AXIAAg+Ig4gX").cp();
	this.shape_788.setTransform(-35.1,-24.3);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#4B4445").ss(1,1,1).p("AAhgqIAAA+IhBAXIAAg9IBBgY").cp();
	this.shape_789.setTransform(-28.9,-24.4);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#4B4445").ss(1,1,1).p("Ag4AmIgugTICfg4IAuATIifA4").cp();
	this.shape_790.setTransform(23.8,-16.9);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_791.setTransform(15.8,-13.2);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_792.setTransform(15.8,-13.2);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#4B4445").ss(1,1,1).p("AgVgQIAAAQIArARIAAgQIgrgR").cp();
	this.shape_793.setTransform(15.8,-13.2);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#4B4445").ss(1,1,1).p("ABQgjIAAAQIifA4IAAgQICfg4").cp();
	this.shape_794.setTransform(26.1,-15.2);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#4B4445").ss(1,1,1).p("AhVA5IhEgcIDvhVIBEAcIjvBV").cp();
	this.shape_795.setTransform(17.9,-19.9);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_796.setTransform(5.9,-14.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_797.setTransform(5.9,-14.3);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#4B4445").ss(1,1,1).p("AgggZIAAAZIBCAaIAAgaIhCgZ").cp();
	this.shape_798.setTransform(5.9,-14.3);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#4B4445").ss(1,1,1).p("AB4g2IAAAZIjvBUIAAgYIDvhV").cp();
	this.shape_799.setTransform(21.3,-17.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#4B4445").ss(1,1,1).p("AgzAkQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANQgRASABAfIAAAA").cp();
	this.shape_800.setTransform(15.2,-34.7);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#4B4445").ss(1,1,1).p("AAJAAQAAAEgDACQgDADgDAAQgDAAgDgDQgCgCAAgEQAAgIAIAAQADAAADADQADADAAACIAAAA").cp();
	this.shape_801.setTransform(13.4,-27);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#4B4445").ss(1,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgEAAgFgFQgFgEAAgGQAAgFAFgEQAFgFAEAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_802.setTransform(13.3,-26.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgCIgWgMIgXAKIAAATIAtgR").cp();
	this.shape_803.setTransform(9.3,-92.7);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgYIAABOIAtgSIAAhPQAAgQgXAIQgWAJAAASIAAAA").cp();
	this.shape_804.setTransform(9.3,-96.6);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_805.setTransform(-17.7,-75);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhPQAAgQAWAJQAXAIAAASIAABO").cp();
	this.shape_806.setTransform(-17.7,-79);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_807.setTransform(-7.2,-46.3);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_808.setTransform(-7.2,-50.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_809.setTransform(18,-75.4);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#4B4445").ss(1,1,1).p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_810.setTransform(18,-79.4);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgCIgWgLIgXAJIAAASIAtgQ").cp();
	this.shape_811.setTransform(6.5,-71.1);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#4B4445").ss(1,1,1).p("AgWA2IAtgSIAAhPQAAgQgXAJQgWAIAAASIAABO").cp();
	this.shape_812.setTransform(6.5,-75.1);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAVgLIAYAJIAAASIgtgQ").cp();
	this.shape_813.setTransform(-10.5,-92.5);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_814.setTransform(-10.5,-96.5);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAVgLIAYAJIAAASIgtgQ").cp();
	this.shape_815.setTransform(-7.8,-71.1);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_816.setTransform(-7.8,-75.1);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgEIAAASIgtgQIAVgLIAYAJ").cp();
	this.shape_817.setTransform(-15.8,-49.5);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAJQAXAIAAASIAAAA").cp();
	this.shape_818.setTransform(-15.8,-53.5);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAJIAAASIgtgQ").cp();
	this.shape_819.setTransform(-23.9,-53);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#4B4445").ss(1,1,1).p("AAXA2IgtgSIAAhOQAAgQAWAIQAXAIAAASIAABO").cp();
	this.shape_820.setTransform(-23.9,-57);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#4B4445").ss(1,1,1).p("AhagsIAAARIC1BIIAAgRIi1hI").cp();
	this.shape_821.setTransform(-10,-104);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#4B4445").ss(1,1,1).p("ABqgtIAAARIjTBKIAAgR");
	this.shape_822.setTransform(9.7,-104.1);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#4B4445").ss(1,1,1).p("AhZhpIAACLICzBIIAAiLIizhI").cp();
	this.shape_823.setTransform(-9.8,-96.5);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#4B4445").ss(1,1,1).p("ABnAhIjNBKIAAiLIDNhKIAACL").cp();
	this.shape_824.setTransform(9.5,-96.6);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#4B4445").ss(1,1,1).p("AAzAjIiMg4IAmgNICNA4IgnAN").cp();
	this.shape_825.setTransform(7.1,-111.2);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#4B4445").ss(1,1,1).p("AA0AjIiNg3IAmgOICNA4IgmAN").cp();
	this.shape_826.setTransform(0.5,-108.8);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#4B4445").ss(1,1,1).p("AgzgiICNA3IgmAOIiNg4IAmgN").cp();
	this.shape_827.setTransform(-5.7,-106.5);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#4B4445").ss(1,1,1).p("ADFAAIjSBKIi3hKIDRhJIC4BJ").cp();
	this.shape_828.setTransform(0.6,-108.8);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#4B4445").ss(1,1,1).p("Ahxg3IAAAUIDjBbIAAgVIjjha").cp();
	this.shape_829.setTransform(-12.6,-86.6);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#4B4445").ss(1,1,1).p("ACEg4IAAAUIkHBdIAAgV");
	this.shape_830.setTransform(12,-86.8);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#4B4445").ss(1,1,1).p("AhviEIAACuIDfBaIAAiuIjfha").cp();
	this.shape_831.setTransform(-12.3,-77.3);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#4B4445").ss(1,1,1).p("ACBApIkBBdIAAiuIEBhdIAACu").cp();
	this.shape_832.setTransform(11.7,-77.4);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#4B4445").ss(1,1,1).p("ABBAsIiwhFIAwgRICvBFIgvAR").cp();
	this.shape_833.setTransform(8.7,-95.6);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#4B4445").ss(1,1,1).p("ABBArIiwhFIAvgRICwBGIgvAQ").cp();
	this.shape_834.setTransform(0.4,-92.6);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#4B4445").ss(1,1,1).p("AhAgrICwBGIgvARIiwhGIAvgR").cp();
	this.shape_835.setTransform(-7.2,-89.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#4B4445").ss(1,1,1).p("AD1AAIkFBdIjkhcIEFhcIDkBb").cp();
	this.shape_836.setTransform(0.6,-92.6);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_837.setTransform(-15.8,-65.5);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_838.setTransform(14.8,-65.7);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADZIEVByIAAjaIkVhx").cp();
	this.shape_839.setTransform(-15.5,-53.8);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_840.setTransform(14.5,-54);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_841.setTransform(10.7,-76.7);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchYIA7gVIDcBYIg7AV").cp();
	this.shape_842.setTransform(0.4,-73);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#4B4445").ss(1,1,1).p("AhQg2IDcBYIg7AVIjchYIA7gV").cp();
	this.shape_843.setTransform(-9.2,-69.4);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_844.setTransform(0.6,-72.9);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#4B4445").ss(1,1,1).p("AiNhFIAAAZIEbByIAAgaIkbhx").cp();
	this.shape_845.setTransform(-15.8,-41);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_846.setTransform(14.8,-41.2);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADZIEVBxIAAjZIkVhx").cp();
	this.shape_847.setTransform(-15.5,-29.3);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#4B4445").ss(1,1,1).p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_848.setTransform(15.4,-27.7);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_849.setTransform(15.4,-28.2);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_850.setTransform(15.4,-28.2);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_851.setTransform(15.4,-28.2);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAgmAngOQAQgGAMAGQAMAGAAARIAAAA").cp();
	this.shape_852.setTransform(15.4,-28.2);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#4B4445").ss(1,1,1).p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_853.setTransform(15.4,-28.7);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_854.setTransform(14.5,-29.5);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_855.setTransform(10.7,-52.2);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#4B4445").ss(1,1,1).p("ABRA3IjchXIA7gWIDcBYIg7AV").cp();
	this.shape_856.setTransform(0.4,-48.5);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#4B4445").ss(1,1,1).p("AgCAQIgogQIAtgPIAoAPIgtAQ").cp();
	this.shape_857.setTransform(28.3,-37.6);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#4B4445").ss(1,1,1).p("AgTgdIAAAqIAnARIAAgrIgngQ").cp();
	this.shape_858.setTransform(26,-34.5);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgdIAAArIgtAQIAAgqIAtgR").cp();
	this.shape_859.setTransform(30.4,-34.5);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#4B4445").ss(1,1,1).p("AiLggIA7gWIDcBYIg7AVIjchX").cp();
	this.shape_860.setTransform(-9.2,-44.9);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#4B4445").ss(1,1,1).p("AEyAAIlGB0IkdhzIFGh0IEdBz").cp();
	this.shape_861.setTransform(0.6,-48.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_862.setTransform(29.1,-32.5);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#4B4445").ss(1,1,1).p("AgbgoIAAA7IA2AWIAAg7Ig2gW").cp();
	this.shape_863.setTransform(25.9,-28.3);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#4B4445").ss(1,1,1).p("AAggpIAAA8Ig/AWIAAg7IA/gX").cp();
	this.shape_864.setTransform(31.9,-28.3);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.rf(["#32680B","rgba(50,104,11,0.796)","rgba(50,104,11,0)"],[0,0.09,1],0,0,0,0,0,26.9).s().p("AAAhqQBvAABPAfQBOAgAAArQAAAshOAfQhPAghvAAQhuAAhPggQhOgfAAgsQAAgrBOggQBPgfBuAAIAAAA").cp();
	this.shape_865.setTransform(27.6,-27);

	this.addChild(this.shape_865,this.shape_864,this.shape_863,this.shape_862,this.shape_861,this.shape_860,this.shape_859,this.shape_858,this.shape_857,this.shape_856,this.shape_855,this.shape_854,this.shape_853,this.shape_852,this.shape_851,this.shape_850,this.shape_849,this.shape_848,this.shape_847,this.shape_846,this.shape_845,this.shape_844,this.shape_843,this.shape_842,this.shape_841,this.shape_840,this.shape_839,this.shape_838,this.shape_837,this.shape_836,this.shape_835,this.shape_834,this.shape_833,this.shape_832,this.shape_831,this.shape_830,this.shape_829,this.shape_828,this.shape_827,this.shape_826,this.shape_825,this.shape_824,this.shape_823,this.shape_822,this.shape_821,this.shape_820,this.shape_819,this.shape_818,this.shape_817,this.shape_816,this.shape_815,this.shape_814,this.shape_813,this.shape_812,this.shape_811,this.shape_810,this.shape_809,this.shape_808,this.shape_807,this.shape_806,this.shape_805,this.shape_804,this.shape_803,this.shape_802,this.shape_801,this.shape_800,this.shape_799,this.shape_798,this.shape_797,this.shape_796,this.shape_795,this.shape_794,this.shape_793,this.shape_792,this.shape_791,this.shape_790,this.shape_789,this.shape_788,this.shape_787,this.shape_786,this.shape_785,this.shape_784,this.shape_783,this.shape_782,this.shape_781,this.shape_780,this.shape_779,this.shape_778,this.shape_777,this.shape_776,this.shape_775,this.shape_774,this.shape_773,this.shape_772,this.shape_771,this.shape_770,this.shape_769,this.shape_768,this.shape_767,this.shape_766,this.shape_765,this.shape_764,this.shape_763,this.shape_762,this.shape_761,this.shape_760,this.shape_759,this.shape_758,this.shape_757,this.shape_756,this.shape_755,this.shape_754,this.shape_753,this.shape_752,this.shape_751,this.shape_750,this.shape_749,this.shape_748,this.shape_747,this.shape_746,this.shape_745,this.shape_744,this.shape_743,this.shape_742,this.shape_741,this.shape_740,this.shape_739,this.shape_738,this.shape_737,this.shape_736,this.shape_735,this.shape_734,this.shape_733,this.shape_732,this.shape_731,this.shape_730,this.shape_729,this.shape_728,this.shape_727,this.shape_726,this.shape_725,this.shape_724,this.shape_723,this.shape_722,this.shape_721,this.shape_720,this.shape_719,this.shape_718,this.shape_717,this.shape_716,this.shape_715,this.shape_714,this.shape_713,this.shape_712,this.shape_711,this.shape_710,this.shape_709,this.shape_708,this.shape_707,this.shape_706,this.shape_705,this.shape_704,this.shape_703,this.shape_702,this.shape_701,this.shape_700,this.shape_699,this.shape_698,this.shape_697,this.shape_696,this.shape_695,this.shape_694,this.shape_693,this.shape_692,this.shape_691,this.shape_690,this.shape_689,this.shape_688,this.shape_687,this.shape_686,this.shape_685,this.shape_684,this.shape_683,this.shape_682,this.shape_681,this.shape_680,this.shape_679,this.shape_678,this.shape_677,this.shape_676,this.shape_675,this.shape_674,this.shape_673,this.shape_672,this.shape_671,this.shape_670,this.shape_669,this.shape_668,this.shape_667,this.shape_666,this.shape_665,this.shape_664,this.shape_663,this.shape_662,this.shape_661,this.shape_660,this.shape_659,this.shape_658,this.shape_657,this.shape_656,this.shape_655,this.shape_654,this.shape_653,this.shape_652,this.shape_651);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.3,-116.3,108.9,116.4);


(lib.MonsterDen = function() {
	this.initialize();

	// Layer 1
	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.lf(["#685A3F","#000000"],[0,1],0,4.7,0.1,-3.6).s().p("ABaAlQgtAIgwAAQgaAAg8gIQgDgVAKgTQATgpA+AAQA8AAAVAkQAFAIAFAlIAAAA").cp();
	this.shape_866.setTransform(0.2,-9.2);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.lf(["#807D74","#000000"],[0,1],-8.4,-328.4,0,5).s().p("ABaBIQgnAHg2AAQgaAAg8gHQgDgmAKgkQAThMA+AAQA8AAAVBCQAFAPAFBFIAAAA").cp();
	this.shape_867.setTransform(0.2,-12.6);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#363636").s().p("ABbBPQgqAIgzAAQgaAAg8gIQgIgqAHgoQAOhUBLABQBJABAQBIQAIAkgGA4IAAAA").cp();
	this.shape_868.setTransform(0.1,-13.4);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.rf(["#89AA5F","rgba(132,161,96,0.612)","rgba(124,147,97,0)"],[0,0.333,1],0.5,-14.9,0,0.5,-14.9,21.7).s().p("ADvBBQAJAzhGAeQhCAdhoAAQhoAAg/gZQhHgcgHg5QgMhcBMhKQBKhJBjAAQBfAABCBIQA8BCASBlIAAAA").cp();
	this.shape_869.setTransform(0,-22.2);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.lf(["#8EB96C","#87B26A","#658D5F","#587F5A","#547956","#48674A","#425E44"],[0,0.051,0.353,0.514,0.678,0.902,1],0,-17,0.2,17.4).s().p("ADvBBQAJAzhGAeQhCAdhoAAQhoAAg/gZQhHgcgHg5QgMhcBMhKQBKhJBjAAQBfAABCBIQA8BCASBlIAAAA").cp();
	this.shape_870.setTransform(0,-22.2);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#364224").ss(1,0,0,4).p("AiZChQgugMgXgkQgMgSgDgPQgOhcBNhLQBLhJBjAAQBhAABDBHQA/BEANBlQACANgIARQgRAhg4AR");
	this.shape_871.setTransform(0,-23.7);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.455,0.914],-0.2,6.5,0,-0.2,6.5,27.7).s().p("AEFAHQAABmhEAvQg/Arh/AAQh9AAhDgvQhHgzAAhlQAAjHEDAAQB8AABEA0QBGA1AABlIAAAA").cp();
	this.shape_872.setTransform(-0.1,-25);

	this.addChild(this.shape_872,this.shape_871,this.shape_870,this.shape_869,this.shape_868,this.shape_867,this.shape_866);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-45,63.5,45.1);


(lib.MineMedium = function() {
	this.initialize();

	// Layer 1
	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("rgba(0,0,0,0.349)").s().p("AACBMIgDAAIAAiXIADAAIAACX").cp();
	this.shape_873.setTransform(-4.9,31);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#B99C41").s().p("AA4gDQgYgWghAAQghgBgXAVQgOAKgNAaQABgVAUgVQAYgdAjACQAlABAbAYQAaAWgCAfQgIgcgUgPIAAAA").cp();
	this.shape_874.setTransform(-4.7,25.3);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.lf(["#988137","#73612C"],[0,1],0.1,-7.9,0,8.1).s().p("AAzgtQgXgZgcABQgeAAgXAVQgRAQgCAMQgBAKgDBbIgJAAQAAhZACgLQABgPASgUQAZgbAkABQAkAAAdAcQAXAYAAASQgBARACBKIgKAAIgEhaQgBgQgUgUIAAAA").cp();
	this.shape_875.setTransform(-4.7,30.4);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.263,0.459,1],0,-15.4,0,15.6).s().p("ABWgbIirAAIAKAoQAnAPAkAAQAhAAAqgPIALgo").cp();
	this.shape_876.setTransform(-4.7,41.5);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.165,0.831,1],-8.5,0,8.7,0).s().p("ABWgbIirAAIAKAoQAnAPAkAAQAhAAAqgPIALgo").cp();
	this.shape_877.setTransform(-4.7,41.5);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#807D74").s().p("ABWgbIirAAIAKAoQAnAPAkAAQAhAAAqgPIALgo").cp();
	this.shape_878.setTransform(-4.7,41.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#68655E").s().p("ABVgjIipABIAHA2QAnAQAkAAQAiAAAqgQIALg3").cp();
	this.shape_879.setTransform(-4.6,42.3);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.486,1],0,-8.4,0,8.6).s().p("ABMBUIiXAAIAAhgQAAgfAYgVQAXgTAcAAQAaAAAYAVQAaAWAAAcIAABg").cp();
	this.shape_880.setTransform(-4.8,31.8);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-7.5,0,7.6,0).s().p("ABMBUIiXAAIAAhgQAAgfAYgVQAXgTAcAAQAaAAAYAVQAaAWAAAcIAABg").cp();
	this.shape_881.setTransform(-4.8,31.8);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#445F94").s().p("ABMBUIiXAAIAAhgQAAgfAYgVQAXgTAcAAQAaAAAYAVQAaAWAAAcIAABg").cp();
	this.shape_882.setTransform(-4.8,31.8);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.lf(["#8C7328","#735F22","#584A1C"],[0.298,0.541,0.847],0,-8.4,0,8.2).s().p("ACRAgQAAAWgrAPQgqAPg8AAQg7AAgqgPQgrgPAAgWQAAg3A2ghQAsgbAuAAQAuAAAtAeQA2AiAAAzIAAAA").cp();
	this.shape_883.setTransform(-4.2,-12.1);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#4F431A").s().p("ACNALQAAAVgpAPQgqAOg6AAQg5AAgpgOQgqgPAAgVIAAgUQAAgVAqgPQApgPA5AAQA6AAAqAPQApAPAAAVIAAAU").cp();
	this.shape_884.setTransform(-4.2,-6.8);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.rf(["#78766D","rgba(125,122,113,0.424)","rgba(128,125,116,0)"],[0.792,0.945,1],0,-2.1,0,0,-2.1,14.2).s().p("AB7ADQAAAZgHADQgIADhDAAQhCAAgxgSQgwgQAAgYQAAgRAwAQQBJAYAqAAQAsAAAfgJQAGgCABACQAAACAAALIAAAA").cp();
	this.shape_885.setTransform(-8.2,35.6);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_886.setTransform(19.7,20.6);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_887.setTransform(18.3,21.7);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-6.8,0,0.2,-6.8,9.4).s().p("AA5g2QACACAEACQAEACABACIAIALQACADACAJQACAEAFAHQABAFACAHQABAEgBAIQABAJAAAEQAAABAAAFQAAAFgBACQgCAFgEAHQgDADgHAFQgEACgGAHQgEACgJAAQgIAFgEABQAAAAgNACQgCAAgLAAQgIACgEAAIgLABIgZgGQgIgCgEgCIgMgFIgKgHQgCgDgGgHQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgKACgDQAGgHACgEIAIgLQACgCAIgGIAKgJQALgGABgBQAEgBAJgCQAIgDAEgBIAZgBIAMAEIAMAGIAUAP").cp();
	this.shape_888.setTransform(18.2,27.7);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-7.7,0.1,8).s().p("AA5g2QACACAEACQAEACABACIAIALQACADACAJQACAEAFAHQABAFACAHQABAEgBAIQABAJAAAEQAAABAAAFQAAAFgBACQgCAFgEAHQgDADgHAFQgEACgGAHQgEACgJAAQgIAFgEABQAAAAgNACQgCAAgLAAQgIACgEAAIgLABIgZgGQgIgCgEgCIgMgFIgKgHQgCgDgGgHQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgKACgDQAGgHACgEIAIgLQACgCAIgGIAKgJQALgGABgBQAEgBAJgCQAIgDAEgBIAZgBIAMAEIAMAGIAUAP").cp();
	this.shape_889.setTransform(18.2,27.7);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#C1B797").s().p("AA6gGQgBAHgRAFQgRAGgXgBQgYgBgRgHQgQgEAAgJQABAHAQAFQASAGAWABQAWABASgFQARgFABgGIAAAA").cp();
	this.shape_890.setTransform(19,-46.6);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#363431").s().p("AAuABQgBAHgNAEQgOAFgSgBQgSgBgNgFQgOgGABgFQAAgGANgFQAOgEARABQATABAOAFQANAFAAAFIAAAA").cp();
	this.shape_891.setTransform(19,-47.5);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#B0AB9E").s().p("AA6ACQAAAIgRAGQgSAGgXgBQgYgBgQgHQgSgHABgHQAAgIARgGQASgFAWABQAZABAQAGQARAHAAAHIAAAA").cp();
	this.shape_892.setTransform(19,-47.6);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.3,-5,0,5.1).s().p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_893.setTransform(18.8,-44.6);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.1,0,0,2.1,4.4).s().p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_894.setTransform(18.8,-44.6);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#EADFB7").s().p("AAJAAQgFABgEgBQgIAAAAAAQAAAAAIAAIAJAA").cp();
	this.shape_895.setTransform(19.4,-42.9);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#C1B797").s().p("AAugJQgBAJgKAFQgOAJgVgBQgVgBgNgKQgLgGAAgIQAAAHAMAGQAOAJATABQAUABAOgIQALgFABgIIAAAA").cp();
	this.shape_896.setTransform(19.2,-44.1);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#363431").s().p("AAlgBQgBAFgJAGQgLAHgQAAQgQgBgLgIQgJgHAAgFQABgFALgEQALgDANAAQAPABALAEQALAFAAAFIAAAA").cp();
	this.shape_897.setTransform(19.2,-44.9);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#B0AB9E").s().p("AAvgBQgBAGgLAIQgOAIgVgBQgUAAgOgKQgMgIAAgHQABgHAOgEQAOgEARAAQAUABANAGQAOAFAAAHIAAAA").cp();
	this.shape_898.setTransform(19.2,-44.9);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.lf(["rgba(128,125,116,0)","#595752"],[0,1],0.3,-4.2,0,4.4).s().p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_899.setTransform(19.1,-42.7);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.rf(["#A5A195","#A19D91","#939085","#7E7B71","#605E57","#4E4C46"],[0.353,0.478,0.62,0.769,0.922,1],0,1.7,0,0,1.7,3.6).s().p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_900.setTransform(19.1,-42.7);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#EADFB7").s().p("AALAAQAAABgLAAIgKgBQAAAAAKAAQALAAAAAAIAAAA").cp();
	this.shape_901.setTransform(18.8,-37.6);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#C1B797").s().p("ABHgGQgBAIgVAHQgVAGgcgBQgegBgUgJQgTgGgBgLQABAJAUAGQAVAIAcACQAbABAVgGQAVgGACgHIAAAA").cp();
	this.shape_902.setTransform(18.7,-38.9);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#D2634C").s().p("ABHADQgBALgVAGQgVAGgcgBQgegBgUgJQgVgIABgJQAAgLAVgGQAWgHAbACQAeABAVAJQAUAIAAAJIAAAA").cp();
	this.shape_903.setTransform(18.7,-40);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.lf(["rgba(128,125,116,0)","#5C2918"],[0,1],0.3,-5.3,-0.1,5.4).s().p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_904.setTransform(18.6,-37.3);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.rf(["#DC7436","#D77034","#C9662E","#B35525","#943F18","#8F3B16"],[0.353,0.49,0.643,0.808,0.973,1],0,2.2,0,0,2.2,4.4).s().p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_905.setTransform(18.6,-37.3);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#EADFB7").s().p("AAIAAQAAABgIgBQgHAAAAAAQAAAAAHAAIAIAA").cp();
	this.shape_906.setTransform(17.9,-34.5);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#C1B797").s().p("AA1gGQgBAGgOAFQgRAGgVgBQgWgBgPgGQgPgEAAgIQAAAHAQADQAPAGAVABQAUABARgFQAPgEABgGIAAAA").cp();
	this.shape_907.setTransform(17.8,-35.5);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#464540").s().p("AAlABQgBAFgKAEQgLADgPAAQgOgBgLgEQgLgEABgEQAAgFALgEQALgDANAAQAQABAKAEQALAEAAAEIAAAA").cp();
	this.shape_908.setTransform(17.8,-36.4);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#B0AB9E").s().p("AA2ABQAAAJgQAFQgRAFgVgBQgWgBgPgGQgQgGAAgHQABgIAQgFQAQgFAUABQAXABAPAGQAQAGAAAGIAAAA").cp();
	this.shape_909.setTransform(17.8,-36.4);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.rf(["#000000","rgba(0,0,0,0.796)","rgba(0,0,0,0)"],[0.137,0.216,1],-0.2,-3.8,0,-0.2,-3.8,15.2).s().p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_910.setTransform(17.9,-31);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.lf(["#484642","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","#737069"],[0.082,0.11,0.141,0.173,0.204,1],0.3,-6.7,-0.1,7).s().p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_911.setTransform(17.9,-31);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.8,0,0,2.8,3.8).s().p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_912.setTransform(17.9,-31);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#EADFB7").s().p("AAKAAQAAABgKAAIgJgBQAAAAAJAAQAKAAAAAAIAAAA").cp();
	this.shape_913.setTransform(17.8,-23.3);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#C1B797").s().p("AgtADQgSgFAAgKQAAAJATAFQATAHAZABQAZABATgFQATgFABgHQgBAIgSAGQgTAGgagCQgagBgTgIIAAAA").cp();
	this.shape_914.setTransform(17.7,-24.5);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#B0AB9E").s().p("ABAADQAAAKgTAFQgUAGgZgBQgagBgTgIQgTgIABgHQAAgKATgGQAUgGAZABQAbACASAHQATAIgBAIIAAAA").cp();
	this.shape_915.setTransform(17.7,-25.6);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.3,-4.7,-0.1,4.9).s().p("ABCgVIgCAxQgBAKgTAFQgTAGgagBQgbgBgTgIQgTgIABgKIACgwQABgJATgGQAUgGAZABQAbABATAIQATAHgBAKIAAAA").cp();
	this.shape_916.setTransform(17.5,-23.1);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2,0,0,2,4).s().p("ABCgVIgCAxQgBAKgTAFQgTAGgagBQgbgBgTgIQgTgIABgKIACgwQABgJATgGQAUgGAZABQAbABATAIQATAHgBAKIAAAA").cp();
	this.shape_917.setTransform(17.5,-23.1);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAUANIgnAAIAAgZIAnAAIAAAZ").cp();
	this.shape_918.setTransform(-18.9,20.4);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAUAXIgogUIAAgZIAoAUIAAAZ").cp();
	this.shape_919.setTransform(-18.8,16.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.lf(["rgba(94,91,85,0)","#5E5B55","#5E5B55","rgba(94,91,85,0)"],[0.008,0.165,0.882,0.992],-1,0,1.2,0).s().p("AAMAIIgWAJIAAgYIAWgKIAAAZ").cp();
	this.shape_920.setTransform(9.7,27.9);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_921.setTransform(-12.4,31);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_922.setTransform(-8.6,18.2);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-11.5,0,11.2).s().p("AAAhyQA+AAA+AoQBKAvAABHQAAAeg6AVQg6AUhSAAQhRAAg6gUQg6gVAAgeQAAhLBKguQA7glBAAAIAAAA").cp();
	this.shape_923.setTransform(-4,0.1);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ADBAOQAAAdg5AUQg4AVhQAAQhPAAg4gVQg5gUAAgdIAAgbQAAgdA5gUQA4gVBPAAQBQAAA4AVQA5AUAAAdIAAAb").cp();
	this.shape_924.setTransform(-4,7.2);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#BEB184").ss(1,0,0,4).p("AC9gkQAAAdg3ASQg4AVhOAAQhNAAg4gVQg3gSAAgd");
	this.shape_925.setTransform(-4,13.4);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#4A3F19").s().p("ACGAOQg4AUhOAAQhNAAg4gUQg3gSAAgdIF5AAQAAAdg3ASIAAAA").cp();
	this.shape_926.setTransform(-4,13.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-14.5,0,14.2).s().p("AB2CBQgxAMhFAAQhFAAgvgMQgxgNAAgTQAAgCgGgoQgJg5gLiKQAEAaA0ASQA5AVBOAAQBPAAA5gVQAzgSAFgZQgMBygKBPQgDAaAAARQAAATgxANIAAAA").cp();
	this.shape_927.setTransform(-4.1,22.2);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,5.7,0,0,5.7,11.7).s().p("AB2CBQgxAMhFAAQhFAAgvgMQgxgNAAgTQAAgCgGgoQgJg5gLiKQAEAaA0ASQA5AVBOAAQBPAAA5gVQAzgSAFgZQgMBygKBPQgDAaAAARQAAATgxANIAAAA").cp();
	this.shape_928.setTransform(-4.1,22.2);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#363531").s().p("AAWAAQABAHgXABQgIAAgGgCQgHgCAAgEQAAgBAHgCQAGgDAIAAQAJgBAGADQAHACAAACIAAAA").cp();
	this.shape_929.setTransform(9.2,-41.3);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#B0AB9E").s().p("AAfAAQABADgKAEQgJADgNABQgLAAgKgDQgJgDAAgFQAAgDAJgDQAJgEAMAAQAMgBAKAEQAJADAAAEIAAAA").cp();
	this.shape_930.setTransform(9.2,-41.3);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-4.5,0.2,4.7).s().p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_931.setTransform(9.3,-37.8);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.9,0,0,1.9,2.4).s().p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_932.setTransform(9.3,-37.8);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.lf(["rgba(72,70,66,0.71)","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","rgba(0,0,0,0.71)"],[0.082,0.11,0.141,0.173,0.204,1],0.4,-11.1,-0.3,11.3).s().p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAJgQAFQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_933.setTransform(17,-13.5);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.rf(["#6A6760","#65635C","#595750","#46453F"],[0.353,0.557,0.784,1],-0.1,4.6,0,-0.1,4.6,4.8).s().p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAJgQAFQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_934.setTransform(17,-13.5);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#89836D").s().p("AhWgPQABAMAaAHQAaAJAhAAQAiAAAagJQAagHABgMQgBAOgYAHQgaAKgkAAQgjAAgZgKQgZgHgBgOIAAAA").cp();
	this.shape_935.setTransform(15.9,-2.7);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#78756D").s().p("ABXAAQAAAMgaAKQgZAJgkAAQgjAAgZgJQgagKAAgMQAAgLAagKQAZgJAjAAQAkAAAZAJQAaAJAAAMIAAAA").cp();
	this.shape_936.setTransform(16,-4.2);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-4.8,0,4.9).s().p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_937.setTransform(16,-2.5);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2,0,0,2,5.1).s().p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_938.setTransform(16,-2.5);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#EADFB7").s().p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_939.setTransform(-4.1,9.9);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#C1B797").s().p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_940.setTransform(-4.6,7.1);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#B0AB9E").s().p("AClAAQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARQAwASAAAXIAAAA").cp();
	this.shape_941.setTransform(-4.6,4.2);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-9.1,0,9.3).s().p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_942.setTransform(-4.6,7.3);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3.7,0,0,3.7,9.7).s().p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_943.setTransform(-4.6,7.3);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#EADFB7").s().p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_944.setTransform(13.2,6.2);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#C1B797").s().p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_945.setTransform(12.7,3.4);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#B0AB9E").s().p("AB1gpQAwASAAAXQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARIAAAA").cp();
	this.shape_946.setTransform(12.7,0.5);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-9.1,0,9.3).s().p("AB2hJQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_947.setTransform(12.7,3.6);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3.7,0,0,3.7,9.7).s().p("AB2hJQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_948.setTransform(12.7,3.6);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#363431").s().p("AAhAAQAAAEgKADQgKAEgNAAQgMABgKgEQgKgDAAgFQAAgDAKgDQAJgEANgBQANAAAKAEQAKADAAAEIAAAA").cp();
	this.shape_949.setTransform(-24.5,-21.2);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#B0AB9E").s().p("AAqAAQAAAFgMAFQgNAEgRABQgQAAgMgEQgNgEAAgHQAAgEAMgFQANgEAQgBQARAAAMAEQANAEAAAGIAAAA").cp();
	this.shape_950.setTransform(-24.5,-21.2);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-3.6,0.1,3.7).s().p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_951.setTransform(-24.4,-19.1);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.5,0,0,1.5,3.2).s().p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_952.setTransform(-24.4,-19.1);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#363431").s().p("AAagCQAAADgGAFQgHAFgNABQgKAAgIgFQgHgFAAgDQAAgEAIgDQAHgDAKAAQALAAAHACQAIADAAAEIAAAA").cp();
	this.shape_953.setTransform(-24.2,-19.3);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#B0AB9E").s().p("AAigCQAAAEgIAGQgKAGgPABQgOAAgKgGQgJgGAAgEQgBgFAKgDQAKgEANgBQANAAAKADQAKAEABAFIAAAA").cp();
	this.shape_954.setTransform(-24.2,-19.3);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.lf(["rgba(128,125,116,0)","rgba(0,0,0,0.537)"],[0,1],0,-3,0,3.2).s().p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_955.setTransform(-24.3,-17.7);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.3,0,0,1.3,2.5).s().p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_956.setTransform(-24.3,-17.7);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#EADFB7").s().p("AAIAAIgIAAQgHAAAAAAQAAAAAHAAQAIAAAAAAIAAAA").cp();
	this.shape_957.setTransform(-24.2,-14);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#C1B797").s().p("Ag2gFQACAFAQAFQAQAEAUgBQAWAAARgHQAPgEABgHQgBAIgPAFQgPAGgYABQgVABgQgFQgPgFgCgGIAAAA").cp();
	this.shape_958.setTransform(-24.4,-15);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#D2634C").s().p("AA3gBQAAAHgPAGQgRAHgXAAQgVABgQgFQgRgFAAgIQgBgGAQgHQAQgHAXgBQAVAAARAFQARAFAAAIIAAAA").cp();
	this.shape_959.setTransform(-24.4,-15.9);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.lf(["rgba(128,125,116,0)","#5C2918"],[0,1],0,-4,0.2,4.2).s().p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_960.setTransform(-24.3,-13.8);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.rf(["#DC7436","#D77034","#C9662E","#B35525","#943F18","#8F3B16"],[0.353,0.49,0.643,0.808,0.973,1],0,1.7,0,0,1.7,3.4).s().p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_961.setTransform(-24.3,-13.8);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#464540").s().p("AAaAAQAAADgIADQgHADgLAAQgJAAgIgCQgIgDAAgEQgBgCAIgDQAIgDAKAAQAKAAAIACQAIADAAADIAAAA").cp();
	this.shape_962.setTransform(-24.6,-12);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#B0AB9E").s().p("AAnAAQAAAEgMAFQgLAEgQABQgOAAgMgEQgMgEAAgGQAAgDALgFQAMgEAPgBQAPAAAMAEQAMAEAAAFIAAAA").cp();
	this.shape_963.setTransform(-24.6,-12);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.rf(["#000000","rgba(0,0,0,0.918)","rgba(0,0,0,0)"],[0,0.035,0.965],0,-3.2,0,0,-3.2,7.3).s().p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_964.setTransform(-24.3,-7.1);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.lf(["#484642","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","#737069"],[0.082,0.11,0.141,0.173,0.204,1],0,-5.9,0.2,6.1).s().p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_965.setTransform(-24.3,-7.1);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.4,0,0,2.4,3).s().p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_966.setTransform(-24.3,-7.1);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#EADFB7").s().p("AAHAAIgHAAIgGAAIAGAAQAHAAAAAAIAAAA").cp();
	this.shape_967.setTransform(-24,-0.5);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#C1B797").s().p("AgtgGQAAAGAOACQAOAFARAAQASgBAOgEQAOgDAAgGQAAAHgNADQgOAFgTAAQgSABgOgFQgNgEAAgGIAAAA").cp();
	this.shape_968.setTransform(-24.1,-1.3);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#B0AB9E").s().p("AAuAAQABAGgOAFQgOAFgTAAQgSABgNgFQgOgFAAgHQgBgFAOgFQAOgFASAAQATgBAOAFQANAFAAAGIAAAA").cp();
	this.shape_969.setTransform(-24.1,-2.1);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-3.4,0.1,3.6).s().p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgSAAgNgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_970.setTransform(-24.1,-0.3);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.4,0,0,1.4,2.9).s().p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgSAAgNgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_971.setTransform(-24.1,-0.3);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-11.7,0,11.4).s().p("ADJAtQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeQAAhNBLguQA8gmBBAAQA/AAA/ApQBLAwAABIIAAAA").cp();
	this.shape_972.setTransform(14,12.3);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ADEAPQAAAdg6AVQg5AUhRAAQhQAAg5gUQg6gVAAgdIAAgdQAAgdA6gVQA5gUBQAAQBRAAA5AUQA6AVAAAdIAAAd").cp();
	this.shape_973.setTransform(14,19.6);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-7.1,0,6.9).s().p("AB6AbQAAASgkANQgkANgyAAQgyAAgkgNQgkgNAAgSQAAguAugcQAlgXAnAAQAmAAAnAZQAtAdAAArIAAAA").cp();
	this.shape_974.setTransform(24.9,10.8);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("AB3AJQAAARgjANQgjANgxAAQgwAAgjgNQgjgNAAgRIAAgRQAAgSAjgMQAjgNAwAAQAxAAAjANQAjAMAAASIAAAR").cp();
	this.shape_975.setTransform(24.9,15.3);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#B0AB9E").s().p("AAnAAQAAAEgMAFQgLAEgQABQgPAAgLgEQgMgEAAgFQAAgEALgFQAMgEAPgBQAPAAAMAEQALAEABAFIAAAA").cp();
	this.shape_976.setTransform(9.4,-34.1);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.lf(["rgba(128,125,116,0)","#000000"],[0,1],-0.4,-19.2,0.6,19.4).s().p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_977.setTransform(9.9,-16.3);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.rf(["#726E66","#6D6A63","#605D57","#4B4945","#3D3B38"],[0.353,0.518,0.702,0.894,1],0.2,7.8,0,0.2,7.8,6.7).s().p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_978.setTransform(9.9,-16.3);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_979.setTransform(-22.1,19.5);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_980.setTransform(-23.2,20.3);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.2,0,0.1,-5.2,7.4).s().p("ABEgNQABAEACAJQABABAAAJQABAIgBAFQgCALAAABQgDAFgGAFQgCACgJAEQgDACgIAFQgEABgJgBQAAAAgGACQgEACgCAAIgXgBQgFgBgIAAQgIgBgEgBQgGgDgFgEQgDgCgGgGQgIgIAAgCQgFgIgBgDIgDgMQAAgHAAgEQABgDADgKQABgEAFgHQAEgFAEgFQAFgGADgDIALgIQAJgFACgBQAJgBAEAAQAJgCACAAQAEAAAIACQAIABAEABIALAFIAKAIQAIAIABABIAHALQAFAJABACIAAAA").cp();
	this.shape_981.setTransform(-23.3,25.1);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-5.9,0.1,6.3).s().p("ABEgNQABAEACAJQABABAAAJQABAIgBAFQgCALAAABQgDAFgGAFQgCACgJAEQgDACgIAFQgEABgJgBQAAAAgGACQgEACgCAAIgXgBQgFgBgIAAQgIgBgEgBQgGgDgFgEQgDgCgGgGQgIgIAAgCQgFgIgBgDIgDgMQAAgHAAgEQABgDADgKQABgEAFgHQAEgFAEgFQAFgGADgDIALgIQAJgFACgBQAJgBAEAAQAJgCACAAQAEAAAIACQAIABAEABIALAFIAKAIQAIAIABABIAHALQAFAJABACIAAAA").cp();
	this.shape_982.setTransform(-23.3,25.1);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#EADFB7").s().p("AAVAAQAAACgVAAQgUAAAAgCQAAgBAUAAQAVAAAAABIAAAA").cp();
	this.shape_983.setTransform(-18.9,6.7);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#C1B797").s().p("ABaAGQAngLABgRQgBATglAMQgmAPg2AAQg1AAgmgPQglgMgBgUQABASAmALQAnANAzAAQAzAAAngNIAAAA").cp();
	this.shape_984.setTransform(-19.3,4.5);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#B0AB9E").s().p("ABdggQAmAOAAASQAAATgmAOQgnAOg2AAQg1AAgmgOQgngOAAgTQAAgSAngOQAmgOA1AAQA2AAAnAOIAAAA").cp();
	this.shape_985.setTransform(-19.3,2.2);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-7.2,0,7.3).s().p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_986.setTransform(-19.3,4.7);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3,0,0,3,7.7).s().p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_987.setTransform(-19.3,4.7);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-9.3,0,9).s().p("ACfAkQAAAXgvARQgvARhBAAQhBAAgugRQgvgRAAgXQAAg9A7glQAwgeAzAAQAyAAAxAgQA8AnAAA5IAAAA").cp();
	this.shape_988.setTransform(-19.3,11.6);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ACbAMQAAAXgtAQQguAQhAAAQg/AAgugQQgtgQAAgXIAAgXQAAgXAtgQQAugQA/AAQBAAAAuAQQAtAQAAAXIAAAX").cp();
	this.shape_989.setTransform(-19.2,17.3);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f().s("#484143").ss(1,1,1).p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgHAHAAQAIAAAAAHIAAAA").cp();
	this.shape_990.setTransform(16.9,23.2);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_991.setTransform(19.7,20.6);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_992.setTransform(18.3,21.7);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_993.setTransform(23.1,24.8);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_994.setTransform(23,23.7);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_995.setTransform(22,22.8);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_996.setTransform(20.7,21.8);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAACgCACQgCACgCAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_997.setTransform(14.9,22.4);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_998.setTransform(16.3,21.9);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAACgCACQgCACgCAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_999.setTransform(12.2,24.5);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1000.setTransform(13.5,23.3);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1001.setTransform(11.8,26.8);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgBACgCQACgCABAAQAGAAAAAFIAAAA").cp();
	this.shape_1002.setTransform(17,25.1);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1003.setTransform(15.3,24);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1004.setTransform(14.4,25.5);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1005.setTransform(14.5,21.8);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAFgGAAQgFAAAAgFQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1006.setTransform(20.4,25.2);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1007.setTransform(19.1,24.4);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1008.setTransform(20,23.4);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1009.setTransform(18.7,22.4);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1010.setTransform(15.7,34.8);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1011.setTransform(15.8,31.9);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1012.setTransform(11.5,32.2);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1013.setTransform(17.5,34.3);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1014.setTransform(16.8,35.2);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1015.setTransform(18.9,34.7);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1016.setTransform(26.1,31.9);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1017.setTransform(20.7,33.4);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1018.setTransform(16.3,33.8);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1019.setTransform(17.2,32.2);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1020.setTransform(12.8,33);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1021.setTransform(24.5,31.5);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgBACgCQACgCABAAQACAAACACQACACAAABIAAAA").cp();
	this.shape_1022.setTransform(13.9,31.5);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1023.setTransform(24.3,33.3);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1024.setTransform(23.3,34);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1025.setTransform(21.4,34.9);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1026.setTransform(22.1,33.6);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1027.setTransform(19.2,33.8);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1028.setTransform(20,35);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1029.setTransform(13.8,34.3);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1030.setTransform(15.1,33.2);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQACAAACACQACACAAABIAAAA").cp();
	this.shape_1031.setTransform(16.6,26.9);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f().s("#484143").ss(1,1,1).p("AA5g2QACACAEACQAEACABACIAIALQACADACAJQACAEAFAHQABAFACAHQABAEgBAIQABAJAAAEQAAABAAAFQAAAFgBACQgCAFgEAHQgDADgHAFQgEACgGAHQgEACgJAAQgIAFgEABQAAAAgNACQgCAAgLAAQgIACgEAAIgLABIgZgGQgIgCgEgCIgMgFIgKgHQgCgDgGgHQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgKACgDQAGgHACgEIAIgLQACgCAIgGIAKgJQALgGABgBQAEgBAJgCQAIgDAEgBIAZgBIAMAEIAMAGIAUAP").cp();
	this.shape_1032.setTransform(18.2,27.7);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f().s("#484143").ss(1,1,1).p("AA5g2QACACAEACQAEACABACIAIALQACADACAJQACAEAFAHQABAFACAHQABAEgBAIQABAJAAAEQAAABAAAFQAAAFgBACQgCAFgEAHQgDADgHAFQgEACgGAHQgEACgJAAQgIAFgEABQAAAAgNACQgCAAgLAAQgIACgEAAIgLABIgZgGQgIgCgEgCIgMgFIgKgHQgCgDgGgHQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgKACgDQAGgHACgEIAIgLQACgCAIgGIAKgJQALgGABgBQAEgBAJgCQAIgDAEgBIAZgBIAMAEIAMAGIAUAP").cp();
	this.shape_1033.setTransform(18.2,27.7);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f().s("#484143").ss(1,1,1).p("AA5g2QACACAEACQAEACABACIAIALQACADACAJQACAEAFAHQABAFACAHQABAEgBAIQABAJAAAEQAAABAAAFQAAAFgBACQgCAFgEAHQgDADgHAFQgEACgGAHQgEACgJAAQgIAFgEABQAAAAgNACQgCAAgLAAQgIACgEAAIgLABIgZgGQgIgCgEgCIgMgFIgKgHQgCgDgGgHQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgKACgDQAGgHACgEIAIgLQACgCAIgGIAKgJQALgGABgBQAEgBAJgCQAIgDAEgBIAZgBIAMAEIAMAGIAUAP").cp();
	this.shape_1034.setTransform(18.2,27.7);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f().s("#484143").ss(1,1,1).p("AAJAAQAAABgJAAQgIgBAAAAQAAAAAIAAIAJAA").cp();
	this.shape_1035.setTransform(19.1,-45.6);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f().s("#484143").ss(1,1,1).p("AA6gGQgBAHgRAFQgRAGgXgBQgYgBgRgHQgQgEAAgJQABAHAQAFQASAGAWABQAWABASgFQARgFABgGIAAAA").cp();
	this.shape_1036.setTransform(19,-46.6);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f().s("#484143").ss(1,1,1).p("AAuABQgBAHgNAEQgOAFgSgBQgSgBgNgFQgOgGABgFQAAgGANgFQAOgEARABQATABAOAFQANAFAAAFIAAAA").cp();
	this.shape_1037.setTransform(19,-47.5);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f().s("#484143").ss(1,1,1).p("AA6ACQAAAIgRAGQgSAGgXgBQgYgBgQgHQgSgHABgHQAAgIARgGQASgFAWABQAZABAQAGQARAHAAAHIAAAA").cp();
	this.shape_1038.setTransform(19,-47.6);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f().s("#484143").ss(1,1,1).p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1039.setTransform(18.8,-44.6);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f().s("#484143").ss(1,1,1).p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1040.setTransform(18.8,-44.6);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f().s("#484143").ss(1,1,1).p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1041.setTransform(18.8,-44.6);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f().s("#484143").ss(1,1,1).p("AAJAAQgFABgEgBQgIAAAAAAQAAAAAIAAIAJAA").cp();
	this.shape_1042.setTransform(19.4,-42.9);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f().s("#484143").ss(1,1,1).p("AAugJQgBAJgKAFQgOAJgVgBQgVgBgNgKQgLgGAAgIQAAAHAMAGQAOAJATABQAUABAOgIQALgFABgIIAAAA").cp();
	this.shape_1043.setTransform(19.2,-44.1);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f().s("#484143").ss(1,1,1).p("AAlgBQgBAFgJAGQgLAHgQAAQgQgBgLgIQgJgHAAgFQABgFALgEQALgDANAAQAPABALAEQALAFAAAFIAAAA").cp();
	this.shape_1044.setTransform(19.2,-44.9);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f().s("#484143").ss(1,1,1).p("AAvgBQgBAGgLAIQgOAIgVgBQgUAAgOgKQgMgIAAgHQABgHAOgEQAOgEARAAQAUABANAGQAOAFAAAHIAAAA").cp();
	this.shape_1045.setTransform(19.2,-44.9);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f().s("#484143").ss(1,1,1).p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1046.setTransform(19.1,-42.7);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f().s("#484143").ss(1,1,1).p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1047.setTransform(19.1,-42.7);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f().s("#484143").ss(1,1,1).p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1048.setTransform(19.1,-42.7);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f().s("#484143").ss(1,1,1).p("ABDAAQAAAMgUAIQgTAJgcAAQgaAAgUgJQgUgIAAgMQAAgLAUgJQAUgIAaAAQAcAAATAIQAUAJAAALIAAAA").cp();
	this.shape_1049.setTransform(18.3,-40.5);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f().s("#484143").ss(1,1,1).p("AALAAQAAABgLAAIgKgBQAAAAAKAAQALAAAAAAIAAAA").cp();
	this.shape_1050.setTransform(18.8,-37.6);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f().s("#484143").ss(1,1,1).p("ABHgGQgBAIgVAHQgVAGgcgBQgegBgUgJQgTgGgBgLQABAJAUAGQAVAIAcACQAbABAVgGQAVgGACgHIAAAA").cp();
	this.shape_1051.setTransform(18.7,-38.9);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f().s("#484143").ss(1,1,1).p("ABHADQgBALgVAGQgVAGgcgBQgegBgUgJQgVgIABgJQAAgLAVgGQAWgHAbACQAeABAVAJQAUAIAAAJIAAAA").cp();
	this.shape_1052.setTransform(18.7,-40);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f().s("#484143").ss(1,1,1).p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1053.setTransform(18.6,-37.3);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f().s("#484143").ss(1,1,1).p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1054.setTransform(18.6,-37.3);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f().s("#484143").ss(1,1,1).p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1055.setTransform(18.6,-37.3);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f().s("#484143").ss(1,1,1).p("AAIAAQAAABgIgBQgHAAAAAAQAAAAAHAAIAIAA").cp();
	this.shape_1056.setTransform(17.9,-34.5);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f().s("#484143").ss(1,1,1).p("AA1gGQgBAGgOAFQgRAGgVgBQgWgBgPgGQgPgEAAgIQAAAHAQADQAPAGAVABQAUABARgFQAPgEABgGIAAAA").cp();
	this.shape_1057.setTransform(17.8,-35.5);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f().s("#484143").ss(1,1,1).p("AAlABQgBAFgKAEQgLADgPAAQgOgBgLgEQgLgEABgEQAAgFALgEQALgDANAAQAQABAKAEQALAEAAAEIAAAA").cp();
	this.shape_1058.setTransform(17.8,-36.4);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f().s("#484143").ss(1,1,1).p("AA2ABQAAAJgQAFQgRAFgVgBQgWgBgPgGQgQgGAAgHQABgIAQgFQAQgFAUABQAXABAPAGQAQAGAAAGIAAAA").cp();
	this.shape_1059.setTransform(17.8,-36.4);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1060.setTransform(17.9,-31);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1061.setTransform(17.9,-31);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1062.setTransform(17.9,-31);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1063.setTransform(17.9,-31);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAABgKAAIgJgBQAAAAAJAAQAKAAAAAAIAAAA").cp();
	this.shape_1064.setTransform(17.8,-23.3);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f().s("#484143").ss(1,1,1).p("AgtADQgSgFAAgKQAAAJATAFQATAHAZABQAZABATgFQATgFABgHQgBAIgSAGQgTAGgagCQgagBgTgIIAAAA").cp();
	this.shape_1065.setTransform(17.7,-24.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f().s("#484143").ss(1,1,1).p("ABAADQAAAKgTAFQgUAGgZgBQgagBgTgIQgTgIABgHQAAgKATgGQAUgGAZABQAbACASAHQATAIgBAIIAAAA").cp();
	this.shape_1066.setTransform(17.7,-25.6);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f().s("#484143").ss(1,1,1).p("ABCgVIgCAxQgBAKgTAFQgTAGgagBQgbgBgTgIQgTgIABgKIACgwQABgJATgGQAUgGAZABQAbABATAIQATAHgBAKIAAAA").cp();
	this.shape_1067.setTransform(17.5,-23.1);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f().s("#484143").ss(1,1,1).p("ABCgVIgCAxQgBAKgTAFQgTAGgagBQgbgBgTgIQgTgIABgKIACgwQABgJATgGQAUgGAZABQAbABATAIQATAHgBAKIAAAA").cp();
	this.shape_1068.setTransform(17.5,-23.1);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f().s("#484143").ss(1,1,1).p("ABCgVIgCAxQgBAKgTAFQgTAGgagBQgbgBgTgIQgTgIABgKIACgwQABgJATgGQAUgGAZABQAbABATAIQATAHgBAKIAAAA").cp();
	this.shape_1069.setTransform(17.5,-23.1);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgGAGgHQAGgGAHAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1070.setTransform(11.3,5);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1071.setTransform(4.3,6.9);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgHgGAAgIQAAgGAHgHQAGgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1072.setTransform(-17,6.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgGAGgHQAGgGAHAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1073.setTransform(-11.5,7.3);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1074.setTransform(-4.4,7.4);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f().s("#484143").ss(1,1,1).p("AATAAQAAAIgGAFQgFAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAGAGAAAHIAAAA").cp();
	this.shape_1075.setTransform(1.9,2.7);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgGAGgHQAHgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1076.setTransform(-4.7,1.4);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f().s("#484143").ss(1,1,1).p("AAPgEQACAGgCAHQgCAHgHACQgGADgFgEQgGgEgDgIQgDgGADgHQACgHAGgDQAGgCAFAEQAHAEADAIIAAAA").cp();
	this.shape_1077.setTransform(8.7,-4.4);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f().s("#484143").ss(1,1,1).p("AAPgEQACAGgCAHQgCAHgHACQgGADgFgEQgGgEgDgIQgDgGADgHQACgHAHgCQAFgCAFADQAHAEADAIIAAAA").cp();
	this.shape_1078.setTransform(8,0.4);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f().s("#484143").ss(1,1,1).p("AAJAFQgEAHgFAEQgFADgEgCQgDgCAAgHQAAgHAEgFQAEgHAEgDQAGgEAEACQAEADgBAGQAAAHgEAFIAAAA").cp();
	this.shape_1079.setTransform(-18.7,-4.7);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f().s("#484143").ss(1,1,1).p("AANgLQAEAIgBAGQgCAIgGAEQgFAFgFgBQgHgBgDgGQgEgHACgGQABgJAGgFQAGgEAEABQAHABADAGIAAAA").cp();
	this.shape_1080.setTransform(-17.8,0.7);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f().s("#484143").ss(1,1,1).p("AAOgKQADAGgBAGQgCAJgFAEQgGAFgFgBQgHgBgDgHQgEgGACgGQABgIAGgFQAGgFAEABQAHABAEAHIAAAA").cp();
	this.shape_1081.setTransform(-12.7,1.1);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f().s("#484143").ss(1,1,1).p("AARADQgCAIgGAFQgHAFgFgCQgHgBgEgHQgDgHABgGQACgIAGgFQAGgEAFABQAHABAEAHQAEAHgBAGIAAAA").cp();
	this.shape_1082.setTransform(-13.6,-6.8);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgGgGAAgIQAAgHAGgGQAFgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1083.setTransform(-5.5,-8.1);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAFQgGAHgIAAQgGAAgHgHQgGgFAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1084.setTransform(0.2,-8);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f().s("#484143").ss(1,1,1).p("AASAAQAAAHgGAHQgFAGgHAAQgGAAgGgGQgFgHAAgHQAAgGAFgHQAGgGAGAAQAHAAAFAGQAGAHAAAGIAAAA").cp();
	this.shape_1085.setTransform(3.8,-4.5);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1086.setTransform(-0.8,-2.7);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgHgGAAgIQAAgHAHgGQAFgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1087.setTransform(-8.5,-3.1);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f().s("#484143").ss(1,1,1).p("AAUANIgnAAIAAgZIAnAAIAAAZ").cp();
	this.shape_1088.setTransform(-18.9,20.4);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f().s("#484143").ss(1,1,1).p("AAUAXIgogUIAAgZIAoAUIAAAZ").cp();
	this.shape_1089.setTransform(-18.8,16.8);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f().s("#484143").ss(1,1,1).p("AgKAIIAWAKIAAgZIgWgKIAAAZ").cp();
	this.shape_1090.setTransform(-16.3,31.9);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f().s("#484143").ss(1,1,1).p("AgKAIIAVAKIAAgYIgVgKIAAAY").cp();
	this.shape_1091.setTransform(-18.5,27.4);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f().s("#484143").ss(1,1,1).p("AgKAIIAVAJIAAgYIgVgKIAAAZ").cp();
	this.shape_1092.setTransform(-18.6,17.6);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f().s("#484143").ss(1,1,1).p("AAMAIIgWAJIAAgYIAWgKIAAAZ").cp();
	this.shape_1093.setTransform(9.7,27.9);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1094.setTransform(-12.4,31);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1095.setTransform(-12.4,31);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1096.setTransform(-8.6,18.2);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1097.setTransform(-8.6,18.2);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f().s("#484143").ss(1,1,1).p("AAAhyQA+AAA+AoQBKAvAABHQAAAeg6AVQg6AUhSAAQhRAAg6gUQg6gVAAgeQAAhLBKguQA7glBAAAIAAAA").cp();
	this.shape_1098.setTransform(-4,0.1);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f().s("#484143").ss(1,1,1).p("ADBAOQAAAdg5AUQg4AVhQAAQhPAAg4gVQg5gUAAgdIAAgbQAAgdA5gUQA4gVBPAAQBQAAA4AVQA5AUAAAdIAAAb").cp();
	this.shape_1099.setTransform(-4,7.2);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f().s("#484143").ss(1,1,1).p("AC9ghQAAAdg3ASQg4AUhOAAQhNAAg4gUQg3gSAAgd");
	this.shape_1100.setTransform(-4,13.2);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f().s("#484143").ss(1,1,1).p("ADBiOQAAADgBADQgNBxgJBQQgDAaAAARQAAASgxANQgxAMhFAAQhFAAgwgMQgxgMAAgTQAAgCgGgoQgIg6gLiKQgBgCAAgCAi/iKQAEAaA0ATQA5AUBOAAQBPAAA5gVQAygSAGgY");
	this.shape_1101.setTransform(-4.1,22);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f().s("#484143").ss(1,1,1).p("ADBiOQAAADgBADQgNBxgJBQQgDAaAAARQAAASgxANQgxAMhFAAQhFAAgwgMQgxgMAAgTQAAgCgGgoQgIg6gLiKQgBgCAAgCAi/iKQAEAaA0ATQA5AUBOAAQBPAAA5gVQAygSAGgY");
	this.shape_1102.setTransform(-4.1,22);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f().s("#484143").ss(1,1,1).p("ADBiOQAAADgBADQgNBxgJBQQgDAaAAARQAAASgxANQgxAMhFAAQhFAAgwgMQgxgMAAgTQAAgCgGgoQgIg6gLiKQgBgCAAgCAi/iKQAEAaA0ATQA5AUBOAAQBPAAA5gVQAygSAGgY");
	this.shape_1103.setTransform(-4.1,22);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f().s("#484143").ss(1,1,1).p("AAFAAIgFAAQgEAAAAAAIAEAAQAFAAAAAAIAAAA").cp();
	this.shape_1104.setTransform(9.3,-40.2);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f().s("#484143").ss(1,1,1).p("AAfgFQAAAFgJACQgJADgNABQgLAAgKgDQgJgDAAgDQAAADAKACQAJADALAAQAMgBAKgDQAJgCAAgEIAAAA").cp();
	this.shape_1105.setTransform(9.2,-40.8);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f().s("#484143").ss(1,1,1).p("AAWAAQABAHgXABQgIAAgGgCQgHgCAAgEQAAgBAHgCQAGgDAIAAQAJgBAGADQAHACAAACIAAAA").cp();
	this.shape_1106.setTransform(9.2,-41.3);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f().s("#484143").ss(1,1,1).p("AAfAAQABADgKAEQgJADgNABQgLAAgKgDQgJgDAAgFQAAgDAJgDQAJgEAMAAQAMgBAKAEQAJADAAAEIAAAA").cp();
	this.shape_1107.setTransform(9.2,-41.3);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f().s("#484143").ss(1,1,1).p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1108.setTransform(9.3,-37.8);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f().s("#484143").ss(1,1,1).p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1109.setTransform(9.3,-37.8);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f().s("#484143").ss(1,1,1).p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1110.setTransform(9.3,-37.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f().s("#484143").ss(1,1,1).p("AAkAAQAAAFgLAEQgKADgPAAQgOAAgKgDQgMgEAAgFQAAgEAMgEQAKgDAOAAQAPAAAKADQALAEAAAEIAAAA").cp();
	this.shape_1111.setTransform(9.5,-33.9);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f().s("#484143").ss(1,1,1).p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAJgQAFQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1112.setTransform(17,-13.5);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f().s("#484143").ss(1,1,1).p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAJgQAFQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1113.setTransform(17,-13.5);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f().s("#484143").ss(1,1,1).p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAJgQAFQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1114.setTransform(17,-13.5);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f().s("#484143").ss(1,1,1).p("ABKh1QAeAQAAAqQgCBPgcA4QgdA5gqAAQgpABgfg4Qggg3gBhOQgChEAggIQAUgFA1AIQAygBAXAMIAAAA").cp();
	this.shape_1115.setTransform(12.5,7.3);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f().s("#484143").ss(1,1,1).p("AhWgPQABAMAaAHQAaAJAhAAQAiAAAagJQAagHABgMQgBAOgYAHQgaAKgkAAQgjAAgZgKQgZgHgBgOIAAAA").cp();
	this.shape_1116.setTransform(15.9,-2.7);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f().s("#484143").ss(1,1,1).p("ABXAAQAAAMgaAKQgZAJgkAAQgjAAgZgJQgagKAAgMQAAgLAagKQAZgJAjAAQAkAAAZAJQAaAJAAAMIAAAA").cp();
	this.shape_1117.setTransform(16,-4.2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f().s("#484143").ss(1,1,1).p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1118.setTransform(16,-2.5);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f().s("#484143").ss(1,1,1).p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1119.setTransform(16,-2.5);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f().s("#484143").ss(1,1,1).p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1120.setTransform(16,-2.5);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f().s("#484143").ss(1,1,1).p("AA4gaQAYAMAAAOQAAAPgYAMQgXALghAAQggAAgXgLQgYgMAAgPQAAgOAYgMQAXgLAgAAQAhAAAXALIAAAA").cp();
	this.shape_1121.setTransform(-23.6,1.7);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f().s("#484143").ss(1,1,1).p("ABbAAQAAASgbANQgaAMgmAAQgkAAgbgMQgbgNAAgSQAAgRAbgMQAbgNAkAAQAmAAAaANQAbAMAAARIAAAA").cp();
	this.shape_1122.setTransform(18.7,-0.3);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f().s("#484143").ss(1,1,1).p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1123.setTransform(-4.1,9.9);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f().s("#484143").ss(1,1,1).p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_1124.setTransform(-4.6,7.1);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f().s("#484143").ss(1,1,1).p("AClAAQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARQAwASAAAXIAAAA").cp();
	this.shape_1125.setTransform(-4.6,4.2);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f().s("#484143").ss(1,1,1).p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1126.setTransform(-4.6,7.3);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f().s("#484143").ss(1,1,1).p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1127.setTransform(-4.6,7.3);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f().s("#484143").ss(1,1,1).p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1128.setTransform(-4.6,7.3);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f().s("#484143").ss(1,1,1).p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1129.setTransform(13.2,6.2);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f().s("#484143").ss(1,1,1).p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_1130.setTransform(12.7,3.4);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f().s("#484143").ss(1,1,1).p("AB1gpQAwASAAAXQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARIAAAA").cp();
	this.shape_1131.setTransform(12.7,0.5);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f().s("#484143").ss(1,1,1).p("AB2hJQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1132.setTransform(12.7,3.6);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f().s("#484143").ss(1,1,1).p("AB2hJQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1133.setTransform(12.7,3.6);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f().s("#484143").ss(1,1,1).p("AB2hJQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1134.setTransform(12.7,3.6);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f().s("#484143").ss(1,1,1).p("ACfAAQAAAegvAWQguAWhCAAQhBAAgugWQgvgWAAgeQAAgeAvgVQAugWBBAAQBCAAAuAWQAvAVAAAeIAAAA").cp();
	this.shape_1135.setTransform(14.9,7.6);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAAgGAAIgFAAQgBAAAGAAIAGAA").cp();
	this.shape_1136.setTransform(-24.3,-19.8);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f().s("#484143").ss(1,1,1).p("AAqgHQgBAHgLACQgMAFgSABQgQAAgMgEQgMgEAAgFQAAAFANADQAMAEAPgBQARAAAMgFQAMgCABgGIAAAA").cp();
	this.shape_1137.setTransform(-24.5,-20.5);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f().s("#484143").ss(1,1,1).p("AAhAAQAAAEgKADQgKAEgNAAQgMABgKgEQgKgDAAgFQAAgDAKgDQAJgEANgBQANAAAKAEQAKADAAAEIAAAA").cp();
	this.shape_1138.setTransform(-24.5,-21.2);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f().s("#484143").ss(1,1,1).p("AAqAAQAAAFgMAFQgNAEgRABQgQAAgMgEQgNgEAAgHQAAgEAMgFQANgEAQgBQARAAAMAEQANAEAAAGIAAAA").cp();
	this.shape_1139.setTransform(-24.5,-21.2);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f().s("#484143").ss(1,1,1).p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1140.setTransform(-24.4,-19.1);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f().s("#484143").ss(1,1,1).p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1141.setTransform(-24.4,-19.1);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f().s("#484143").ss(1,1,1).p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1142.setTransform(-24.4,-19.1);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f().s("#484143").ss(1,1,1).p("AAGAAIgGAAIgFAAIAFAAIAGAA").cp();
	this.shape_1143.setTransform(-24,-17.9);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f().s("#484143").ss(1,1,1).p("AAhgIQAAAGgHADQgKAHgQABQgNAAgLgGQgIgEAAgGQAAAFAJAEQAKAGANgBQAPAAAKgGQAIgDAAgGIAAAA").cp();
	this.shape_1144.setTransform(-24.2,-18.7);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f().s("#484143").ss(1,1,1).p("AAagCQAAADgGAFQgHAFgNABQgKAAgIgFQgHgFAAgDQAAgEAIgDQAHgDAKAAQALAAAHACQAIADAAAEIAAAA").cp();
	this.shape_1145.setTransform(-24.2,-19.3);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f().s("#484143").ss(1,1,1).p("AAigCQAAAEgIAGQgKAGgPABQgOAAgKgGQgJgGAAgEQgBgFAKgDQAKgEANgBQANAAAKADQAKAEABAFIAAAA").cp();
	this.shape_1146.setTransform(-24.2,-19.3);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f().s("#484143").ss(1,1,1).p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1147.setTransform(-24.3,-17.7);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f().s("#484143").ss(1,1,1).p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1148.setTransform(-24.3,-17.7);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f().s("#484143").ss(1,1,1).p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1149.setTransform(-24.3,-17.7);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f().s("#484143").ss(1,1,1).p("AAIAAIgIAAQgHAAAAAAQAAAAAHAAQAIAAAAAAIAAAA").cp();
	this.shape_1150.setTransform(-24.2,-14);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f().s("#484143").ss(1,1,1).p("Ag2gFQACAFAQAFQAQAEAUgBQAWAAARgHQAPgEABgHQgBAIgPAFQgPAGgYABQgVABgQgFQgPgFgCgGIAAAA").cp();
	this.shape_1151.setTransform(-24.4,-15);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f().s("#484143").ss(1,1,1).p("AA3gBQAAAHgPAGQgRAHgXAAQgVABgQgFQgRgFAAgIQgBgGAQgHQAQgHAXgBQAVAAARAFQARAFAAAIIAAAA").cp();
	this.shape_1152.setTransform(-24.4,-15.9);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f().s("#484143").ss(1,1,1).p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1153.setTransform(-24.3,-13.8);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f().s("#484143").ss(1,1,1).p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1154.setTransform(-24.3,-13.8);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f().s("#484143").ss(1,1,1).p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1155.setTransform(-24.3,-13.8);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f().s("#484143").ss(1,1,1).p("AAwgBQABAHgOAHQgOAHgVABQgSABgOgFQgPgGAAgIQgBgHAOgHQAOgIAUgBQASgBAPAGQAOAFABAJIAAAA").cp();
	this.shape_1156.setTransform(-24.6,-16.1);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f().s("#484143").ss(1,1,1).p("AAGAAIgGAAIgFAAQAAAAAFAAIAGAA").cp();
	this.shape_1157.setTransform(-24.5,-10.7);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f().s("#484143").ss(1,1,1).p("AAmgGQABAGgMACQgLAFgQAAQgPABgLgFQgLgDgBgEQABAEALACQAMAEAOAAQAPgBAMgEQALgCAAgFIAAAA").cp();
	this.shape_1158.setTransform(-24.6,-11.4);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f().s("#484143").ss(1,1,1).p("AAaAAQAAADgIADQgHADgLAAQgJAAgIgCQgIgDAAgEQgBgCAIgDQAIgDAKAAQAKAAAIACQAIADAAADIAAAA").cp();
	this.shape_1159.setTransform(-24.6,-12);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f().s("#484143").ss(1,1,1).p("AAnAAQAAAEgMAFQgLAEgQABQgOAAgMgEQgMgEAAgGQAAgDALgFQAMgEAPgBQAPAAAMAEQAMAEAAAFIAAAA").cp();
	this.shape_1160.setTransform(-24.6,-12);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_1161.setTransform(-24.3,-7.1);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_1162.setTransform(-24.3,-7.1);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_1163.setTransform(-24.3,-7.1);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOAAgMgEQgMgEAAgFIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAEQgLAFgRAAIAAAA").cp();
	this.shape_1164.setTransform(-24.3,-7.1);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f().s("#484143").ss(1,1,1).p("AAHAAIgHAAIgGAAIAGAAQAHAAAAAAIAAAA").cp();
	this.shape_1165.setTransform(-24,-0.5);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f().s("#484143").ss(1,1,1).p("AgtgGQAAAGAOACQAOAFARAAQASgBAOgEQAOgDAAgGQAAAHgNADQgOAFgTAAQgSABgOgFQgNgEAAgGIAAAA").cp();
	this.shape_1166.setTransform(-24.1,-1.3);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f().s("#484143").ss(1,1,1).p("AAuAAQABAGgOAFQgOAFgTAAQgSABgNgFQgOgFAAgHQgBgFAOgFQAOgFASAAQATgBAOAFQANAFAAAGIAAAA").cp();
	this.shape_1167.setTransform(-24.1,-2.1);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f().s("#484143").ss(1,1,1).p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgSAAgNgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1168.setTransform(-24.1,-0.3);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f().s("#484143").ss(1,1,1).p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgSAAgNgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1169.setTransform(-24.1,-0.3);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f().s("#484143").ss(1,1,1).p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgSAAgNgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1170.setTransform(-24.1,-0.3);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f().s("#484143").ss(1,1,1).p("ADJAtQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeQAAhNBLguQA8gmBBAAQA/AAA/ApQBLAwAABIIAAAA").cp();
	this.shape_1171.setTransform(14,12.3);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f().s("#484143").ss(1,1,1).p("ADEAPQAAAdg6AVQg5AUhRAAQhQAAg5gUQg6gVAAgdIAAgdQAAgdA6gVQA5gUBQAAQBRAAA5AUQA6AVAAAdIAAAd").cp();
	this.shape_1172.setTransform(14,19.6);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f().s("#484143").ss(1,1,1).p("AB6AbQAAASgkANQgkANgyAAQgyAAgkgNQgkgNAAgSQAAguAugcQAlgXAnAAQAmAAAnAZQAtAdAAArIAAAA").cp();
	this.shape_1173.setTransform(24.9,10.8);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f().s("#484143").ss(1,1,1).p("AB3AJQAAARgjANQgjANgxAAQgwAAgjgNQgjgNAAgRIAAgRQAAgSAjgMQAjgNAwAAQAxAAAjANQAjAMAAASIAAAR").cp();
	this.shape_1174.setTransform(24.9,15.3);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f().s("#484143").ss(1,1,1).p("AgFAAQAAAAAFAAIAGAAIgLAA").cp();
	this.shape_1175.setTransform(9.5,-32.8);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f().s("#484143").ss(1,1,1).p("AgmgFQABAFAMADQAMADANAAQAPgBAMgEQALgCABgFQgBAFgKADQgMAFgQAAQgOABgMgEQgLgEgBgFIAAAA").cp();
	this.shape_1176.setTransform(9.3,-33.5);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f().s("#484143").ss(1,1,1).p("AAnAAQAAAEgMAFQgLAEgQABQgPAAgLgEQgMgEAAgFQAAgEALgFQAMgEAPgBQAPAAAMAEQALAEABAFIAAAA").cp();
	this.shape_1177.setTransform(9.4,-34.1);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f().s("#484143").ss(1,1,1).p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1178.setTransform(9.9,-16.3);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f().s("#484143").ss(1,1,1).p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1179.setTransform(9.9,-16.3);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f().s("#484143").ss(1,1,1).p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1180.setTransform(9.9,-16.3);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1181.setTransform(-24.3,21.5);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1182.setTransform(-22.1,19.5);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1183.setTransform(-23.2,20.3);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1184.setTransform(-19.4,22.8);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1185.setTransform(-19.5,21.9);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1186.setTransform(-20.3,21.2);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1187.setTransform(-21.3,20.5);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1188.setTransform(-25.8,20.9);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1189.setTransform(-24.8,20.5);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1190.setTransform(-28,22.6);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1191.setTransform(-27,21.6);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1192.setTransform(-28.3,24.4);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1193.setTransform(-24.2,23);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1194.setTransform(-25.6,22.2);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1195.setTransform(-26.3,23.4);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1196.setTransform(-26.2,20.5);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1197.setTransform(-21.5,23.1);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1198.setTransform(-22.5,22.5);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1199.setTransform(-21.9,21.8);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1200.setTransform(-22.9,21);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1201.setTransform(-25.3,30.7);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1202.setTransform(-25.1,28.4);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1203.setTransform(-28.5,28.6);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1204.setTransform(-23.8,30.3);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1205.setTransform(-22.7,30.6);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1206.setTransform(-17,28.4);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1207.setTransform(-21.3,29.6);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1208.setTransform(-24.7,29.9);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1209.setTransform(-24.1,28.7);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1210.setTransform(-27.5,29.3);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1211.setTransform(-18.3,28.1);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1212.setTransform(-26.7,28.1);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1213.setTransform(-18.4,29.5);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1214.setTransform(-19.2,30.1);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1215.setTransform(-20.7,30.8);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1216.setTransform(-20.2,29.8);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1217.setTransform(-22.5,29.9);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1218.setTransform(-21.8,30.9);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1219.setTransform(-26.7,30.3);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1220.setTransform(-25.7,29.4);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1221.setTransform(-24.5,24.5);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f().s("#484143").ss(1,1,1).p("ABEgNQABAEACAJQABABAAAJQABAIgBAFQgCALAAABQgDAFgGAFQgCACgJAEQgDACgIAFQgEABgJgBQAAAAgGACQgEACgCAAIgXgBQgFgBgIAAQgIgBgEgBQgGgDgFgEQgDgCgGgGQgIgIAAgCQgFgIgBgDIgDgMQAAgHAAgEQABgDADgKQABgEAFgHQAEgFAEgFQAFgGADgDIALgIQAJgFACgBQAJgBAEAAQAJgCACAAQAEAAAIACQAIABAEABIALAFIAKAIQAIAIABABIAHALQAFAJABACIAAAA").cp();
	this.shape_1222.setTransform(-23.3,25.1);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f().s("#484143").ss(1,1,1).p("ABEgNQABAEACAJQABABAAAJQABAIgBAFQgCALAAABQgDAFgGAFQgCACgJAEQgDACgIAFQgEABgJgBQAAAAgGACQgEACgCAAIgXgBQgFgBgIAAQgIgBgEgBQgGgDgFgEQgDgCgGgGQgIgIAAgCQgFgIgBgDIgDgMQAAgHAAgEQABgDADgKQABgEAFgHQAEgFAEgFQAFgGADgDIALgIQAJgFACgBQAJgBAEAAQAJgCACAAQAEAAAIACQAIABAEABIALAFIAKAIQAIAIABABIAHALQAFAJABACIAAAA").cp();
	this.shape_1223.setTransform(-23.3,25.1);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f().s("#484143").ss(1,1,1).p("ABEgNQABAEACAJQABABAAAJQABAIgBAFQgCALAAABQgDAFgGAFQgCACgJAEQgDACgIAFQgEABgJgBQAAAAgGACQgEACgCAAIgXgBQgFgBgIAAQgIgBgEgBQgGgDgFgEQgDgCgGgGQgIgIAAgCQgFgIgBgDIgDgMQAAgHAAgEQABgDADgKQABgEAFgHQAEgFAEgFQAFgGADgDIALgIQAJgFACgBQAJgBAEAAQAJgCACAAQAEAAAIACQAIABAEABIALAFIAKAIQAIAIABABIAHALQAFAJABACIAAAA").cp();
	this.shape_1224.setTransform(-23.3,25.1);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f().s("#484143").ss(1,1,1).p("AAVAAQAAACgVAAQgUAAAAgCQAAgBAUAAQAVAAAAABIAAAA").cp();
	this.shape_1225.setTransform(-18.9,6.7);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f().s("#484143").ss(1,1,1).p("ABaAGQAngLABgRQgBATglAMQgmAPg2AAQg1AAgmgPQglgMgBgUQABASAmALQAnANAzAAQAzAAAngNIAAAA").cp();
	this.shape_1226.setTransform(-19.3,4.5);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f().s("#484143").ss(1,1,1).p("ABdggQAmAOAAASQAAATgmAOQgnAOg2AAQg1AAgmgOQgngOAAgTQAAgSAngOQAmgOA1AAQA2AAAnAOIAAAA").cp();
	this.shape_1227.setTransform(-19.3,2.2);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f().s("#484143").ss(1,1,1).p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1228.setTransform(-19.3,4.7);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f().s("#484143").ss(1,1,1).p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1229.setTransform(-19.3,4.7);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f().s("#484143").ss(1,1,1).p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1230.setTransform(-19.3,4.7);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f().s("#484143").ss(1,1,1).p("AB+AAQAAAYglARQgmASgzAAQgzAAglgSQglgRAAgYQAAgXAlgRQAlgSAzAAQAzAAAmASQAlARAAAXIAAAA").cp();
	this.shape_1231.setTransform(-18.4,7);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f().s("#484143").ss(1,1,1).p("ACfAAQAAAfgvAVQguAWhCAAQhBAAgugWQgvgVAAgfQAAgdAvgWQAugWBBAAQBCAAAuAWQAvAWAAAdIAAAA").cp();
	this.shape_1232.setTransform(-16.4,7.6);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f().s("#484143").ss(1,1,1).p("ACfAkQAAAXgvARQgvARhBAAQhBAAgugRQgvgRAAgXQAAg9A7glQAwgeAzAAQAyAAAxAgQA8AnAAA5IAAAA").cp();
	this.shape_1233.setTransform(-19.3,11.6);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f().s("#484143").ss(1,1,1).p("ACbAMQAAAXgtAQQguAQhAAAQg/AAgugQQgtgQAAgXIAAgXQAAgXAtgQQAugQA/AAQBAAAAuAQQAtAQAAAXIAAAX").cp();
	this.shape_1234.setTransform(-19.2,17.3);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.lf(["#6C5A20","#52451B"],[0,1],0,-0.8,0,0.7).s().p("AATAJIglAAIAAgRIAlAAIAAAR").cp();
	this.shape_1235.setTransform(8.2,-32.7);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0,0,0,0,0,21.8).s().p("AAAi3QBcAABBA2QBBA2AABLQAABMhBA1QhBA3hcAAQhbAAhBg3QhBg1AAhMQAAhLBBg2QBBg2BbAAIAAAA").cp();
	this.shape_1236.setTransform(-4.1,3.5);

	this.addChild(this.shape_1236,this.shape_1235,this.shape_1234,this.shape_1233,this.shape_1232,this.shape_1231,this.shape_1230,this.shape_1229,this.shape_1228,this.shape_1227,this.shape_1226,this.shape_1225,this.shape_1224,this.shape_1223,this.shape_1222,this.shape_1221,this.shape_1220,this.shape_1219,this.shape_1218,this.shape_1217,this.shape_1216,this.shape_1215,this.shape_1214,this.shape_1213,this.shape_1212,this.shape_1211,this.shape_1210,this.shape_1209,this.shape_1208,this.shape_1207,this.shape_1206,this.shape_1205,this.shape_1204,this.shape_1203,this.shape_1202,this.shape_1201,this.shape_1200,this.shape_1199,this.shape_1198,this.shape_1197,this.shape_1196,this.shape_1195,this.shape_1194,this.shape_1193,this.shape_1192,this.shape_1191,this.shape_1190,this.shape_1189,this.shape_1188,this.shape_1187,this.shape_1186,this.shape_1185,this.shape_1184,this.shape_1183,this.shape_1182,this.shape_1181,this.shape_1180,this.shape_1179,this.shape_1178,this.shape_1177,this.shape_1176,this.shape_1175,this.shape_1174,this.shape_1173,this.shape_1172,this.shape_1171,this.shape_1170,this.shape_1169,this.shape_1168,this.shape_1167,this.shape_1166,this.shape_1165,this.shape_1164,this.shape_1163,this.shape_1162,this.shape_1161,this.shape_1160,this.shape_1159,this.shape_1158,this.shape_1157,this.shape_1156,this.shape_1155,this.shape_1154,this.shape_1153,this.shape_1152,this.shape_1151,this.shape_1150,this.shape_1149,this.shape_1148,this.shape_1147,this.shape_1146,this.shape_1145,this.shape_1144,this.shape_1143,this.shape_1142,this.shape_1141,this.shape_1140,this.shape_1139,this.shape_1138,this.shape_1137,this.shape_1136,this.shape_1135,this.shape_1134,this.shape_1133,this.shape_1132,this.shape_1131,this.shape_1130,this.shape_1129,this.shape_1128,this.shape_1127,this.shape_1126,this.shape_1125,this.shape_1124,this.shape_1123,this.shape_1122,this.shape_1121,this.shape_1120,this.shape_1119,this.shape_1118,this.shape_1117,this.shape_1116,this.shape_1115,this.shape_1114,this.shape_1113,this.shape_1112,this.shape_1111,this.shape_1110,this.shape_1109,this.shape_1108,this.shape_1107,this.shape_1106,this.shape_1105,this.shape_1104,this.shape_1103,this.shape_1102,this.shape_1101,this.shape_1100,this.shape_1099,this.shape_1098,this.shape_1097,this.shape_1096,this.shape_1095,this.shape_1094,this.shape_1093,this.shape_1092,this.shape_1091,this.shape_1090,this.shape_1089,this.shape_1088,this.shape_1087,this.shape_1086,this.shape_1085,this.shape_1084,this.shape_1083,this.shape_1082,this.shape_1081,this.shape_1080,this.shape_1079,this.shape_1078,this.shape_1077,this.shape_1076,this.shape_1075,this.shape_1074,this.shape_1073,this.shape_1072,this.shape_1071,this.shape_1070,this.shape_1069,this.shape_1068,this.shape_1067,this.shape_1066,this.shape_1065,this.shape_1064,this.shape_1063,this.shape_1062,this.shape_1061,this.shape_1060,this.shape_1059,this.shape_1058,this.shape_1057,this.shape_1056,this.shape_1055,this.shape_1054,this.shape_1053,this.shape_1052,this.shape_1051,this.shape_1050,this.shape_1049,this.shape_1048,this.shape_1047,this.shape_1046,this.shape_1045,this.shape_1044,this.shape_1043,this.shape_1042,this.shape_1041,this.shape_1040,this.shape_1039,this.shape_1038,this.shape_1037,this.shape_1036,this.shape_1035,this.shape_1034,this.shape_1033,this.shape_1032,this.shape_1031,this.shape_1030,this.shape_1029,this.shape_1028,this.shape_1027,this.shape_1026,this.shape_1025,this.shape_1024,this.shape_1023,this.shape_1022,this.shape_1021,this.shape_1020,this.shape_1019,this.shape_1018,this.shape_1017,this.shape_1016,this.shape_1015,this.shape_1014,this.shape_1013,this.shape_1012,this.shape_1011,this.shape_1010,this.shape_1009,this.shape_1008,this.shape_1007,this.shape_1006,this.shape_1005,this.shape_1004,this.shape_1003,this.shape_1002,this.shape_1001,this.shape_1000,this.shape_999,this.shape_998,this.shape_997,this.shape_996,this.shape_995,this.shape_994,this.shape_993,this.shape_992,this.shape_991,this.shape_990,this.shape_989,this.shape_988,this.shape_987,this.shape_986,this.shape_985,this.shape_984,this.shape_983,this.shape_982,this.shape_981,this.shape_980,this.shape_979,this.shape_978,this.shape_977,this.shape_976,this.shape_975,this.shape_974,this.shape_973,this.shape_972,this.shape_971,this.shape_970,this.shape_969,this.shape_968,this.shape_967,this.shape_966,this.shape_965,this.shape_964,this.shape_963,this.shape_962,this.shape_961,this.shape_960,this.shape_959,this.shape_958,this.shape_957,this.shape_956,this.shape_955,this.shape_954,this.shape_953,this.shape_952,this.shape_951,this.shape_950,this.shape_949,this.shape_948,this.shape_947,this.shape_946,this.shape_945,this.shape_944,this.shape_943,this.shape_942,this.shape_941,this.shape_940,this.shape_939,this.shape_938,this.shape_937,this.shape_936,this.shape_935,this.shape_934,this.shape_933,this.shape_932,this.shape_931,this.shape_930,this.shape_929,this.shape_928,this.shape_927,this.shape_926,this.shape_925,this.shape_924,this.shape_923,this.shape_922,this.shape_921,this.shape_920,this.shape_919,this.shape_918,this.shape_917,this.shape_916,this.shape_915,this.shape_914,this.shape_913,this.shape_912,this.shape_911,this.shape_910,this.shape_909,this.shape_908,this.shape_907,this.shape_906,this.shape_905,this.shape_904,this.shape_903,this.shape_902,this.shape_901,this.shape_900,this.shape_899,this.shape_898,this.shape_897,this.shape_896,this.shape_895,this.shape_894,this.shape_893,this.shape_892,this.shape_891,this.shape_890,this.shape_889,this.shape_888,this.shape_887,this.shape_886,this.shape_885,this.shape_884,this.shape_883,this.shape_882,this.shape_881,this.shape_880,this.shape_879,this.shape_878,this.shape_877,this.shape_876,this.shape_875,this.shape_874,this.shape_873);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.7,-49.7,91.6,99.7);


(lib.MineLarge = function() {
	this.initialize();

	// Layer 1
	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("rgba(0,0,0,0.349)").s().p("AADBMIgEAAIAAiXIAEAAIAACX").cp();
	this.shape_1237.setTransform(-4.1,30.7);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#B99C41").s().p("AA4gDQgYgWggAAQgigBgWAVQgOAKgOAaQABgVAUgVQAYgdAjACQAmABAaAYQAaAWgCAfQgJgcgTgPIAAAA").cp();
	this.shape_1238.setTransform(-3.9,24.9);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.lf(["#988137","#73612C"],[0,1],0.1,-7.9,0.1,8.1).s().p("AA0gtQgYgZgcABQgeAAgXAVQgSAQgBAMQgCAKgCBbIgJAAQAAhZABgKQACgQASgUQAZgbAkABQAlAAAcAcQAYAYgBASQgBARACBKIgKAAIgEhaQgBgQgTgUIAAAA").cp();
	this.shape_1239.setTransform(-3.9,30.1);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.263,0.459,1],0,-15.4,0,15.6).s().p("ABWgbIirAAIAKAoQAnAPAkAAQAiAAAqgPIAKgo").cp();
	this.shape_1240.setTransform(-3.9,41.2);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.165,0.831,1],-8.5,0,8.7,0).s().p("ABWgbIirAAIAKAoQAnAPAkAAQAiAAAqgPIAKgo").cp();
	this.shape_1241.setTransform(-3.9,41.2);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#807D74").s().p("ABWgbIirAAIAKAoQAnAPAkAAQAiAAAqgPIAKgo").cp();
	this.shape_1242.setTransform(-3.9,41.2);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#68655E").s().p("ABUgjIinABIAGA3QAnAPAkAAQAiAAAqgPIAKg4").cp();
	this.shape_1243.setTransform(-3.7,41.9);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.486,1],0,-8.4,0,8.6).s().p("ABMBUIiXAAIAAhgQAAgeAYgWQAXgTAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_1244.setTransform(-3.9,31.5);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-7.5,0,7.6,0).s().p("ABMBUIiXAAIAAhgQAAgeAYgWQAXgTAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_1245.setTransform(-3.9,31.5);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#445F94").s().p("ABMBUIiXAAIAAhgQAAgeAYgWQAXgTAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_1246.setTransform(-3.9,31.5);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.rf(["#78766D","rgba(125,122,113,0.424)","rgba(128,125,116,0)"],[0.792,0.945,1],0,-2.1,0,0,-2.1,14.2).s().p("AB7ADQAAAZgHADQgIADhDAAQhCAAgxgSQgwgQAAgYQAAgRAwAQQBJAYAqAAQAsAAAfgJQAGgCABACQAAACAAALIAAAA").cp();
	this.shape_1247.setTransform(-8.2,35.6);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#C1B797").s().p("AA6gGQgBAHgRAFQgRAGgXgBQgYgBgRgHQgQgEAAgJQABAHAQAFQASAGAWABQAWABASgFQARgFABgGIAAAA").cp();
	this.shape_1248.setTransform(19,-46.6);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#363431").s().p("AAuABQgBAHgNAEQgOAFgSgBQgSgBgNgFQgOgGABgFQAAgGANgFQAOgEARABQATABAOAFQANAFAAAFIAAAA").cp();
	this.shape_1249.setTransform(19,-47.5);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#B0AB9E").s().p("AA6ACQAAAIgRAGQgSAGgXgBQgYgBgQgHQgSgHABgHQAAgIARgGQASgFAWABQAZABAQAGQARAHAAAHIAAAA").cp();
	this.shape_1250.setTransform(19,-47.6);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.3,-5,0,5.1).s().p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1251.setTransform(18.8,-44.6);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.1,0,0,2.1,4.4).s().p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1252.setTransform(18.8,-44.6);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#EADFB7").s().p("AAJAAQgFABgEgBQgIAAAAAAQAAAAAIAAIAJAA").cp();
	this.shape_1253.setTransform(19.4,-42.9);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#C1B797").s().p("AAugJQgBAJgKAFQgOAJgVgBQgVgBgNgKQgLgGAAgIQAAAHAMAGQAOAJATABQAUABAOgIQALgFABgIIAAAA").cp();
	this.shape_1254.setTransform(19.2,-44.1);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#363431").s().p("AAlgBQgBAFgJAGQgLAHgQAAQgQgBgLgIQgJgHAAgFQABgFALgEQALgDANAAQAPABALAEQALAFAAAFIAAAA").cp();
	this.shape_1255.setTransform(19.2,-44.9);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#B0AB9E").s().p("AAvgBQgBAGgLAIQgOAIgVgBQgUAAgOgKQgMgIAAgHQABgHAOgEQAOgEARAAQAUABANAGQAOAFAAAHIAAAA").cp();
	this.shape_1256.setTransform(19.2,-44.9);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.lf(["rgba(128,125,116,0)","#595752"],[0,1],0.3,-4.2,0,4.4).s().p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1257.setTransform(19.1,-42.7);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.rf(["#A5A195","#A19D91","#939085","#7E7B71","#605E57","#4E4C46"],[0.353,0.478,0.62,0.769,0.922,1],0,1.7,0,0,1.7,3.6).s().p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1258.setTransform(19.1,-42.7);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#EADFB7").s().p("AALAAQAAABgLAAIgKgBQAAAAAKAAQALAAAAAAIAAAA").cp();
	this.shape_1259.setTransform(18.8,-37.6);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#C1B797").s().p("ABHgGQgBAIgVAHQgVAGgcgBQgegBgUgJQgTgGgBgLQABAJAUAGQAVAIAcACQAbABAVgGQAVgGACgHIAAAA").cp();
	this.shape_1260.setTransform(18.7,-38.9);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#D2634C").s().p("ABHADQgBALgVAGQgVAGgcgBQgegBgUgJQgVgIABgJQAAgLAVgGQAWgHAbACQAeABAVAJQAUAIAAAJIAAAA").cp();
	this.shape_1261.setTransform(18.7,-40);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.lf(["rgba(128,125,116,0)","#5C2918"],[0,1],0.3,-5.3,-0.1,5.4).s().p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1262.setTransform(18.6,-37.3);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.rf(["#DC7436","#D77034","#C9662E","#B35525","#943F18","#8F3B16"],[0.353,0.49,0.643,0.808,0.973,1],0,2.2,0,0,2.2,4.4).s().p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1263.setTransform(18.6,-37.3);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#EADFB7").s().p("AAIAAQAAABgIgBQgHAAAAAAQAAAAAHAAIAIAA").cp();
	this.shape_1264.setTransform(17.9,-34.5);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#C1B797").s().p("AA1gGQgBAGgOAFQgRAGgVgBQgWgBgPgGQgPgEAAgIQAAAHAQADQAPAGAVABQAUABARgFQAPgEABgGIAAAA").cp();
	this.shape_1265.setTransform(17.8,-35.5);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#464540").s().p("AAlABQgBAFgKAEQgLADgPAAQgOgBgLgEQgLgEABgEQAAgFALgEQALgDANAAQAQABAKAEQALAEAAAEIAAAA").cp();
	this.shape_1266.setTransform(17.8,-36.4);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#B0AB9E").s().p("AA2ABQAAAJgQAFQgRAFgVgBQgWgBgPgGQgQgGAAgHQABgIAQgFQAQgFAUABQAXABAPAGQAQAGAAAGIAAAA").cp();
	this.shape_1267.setTransform(17.8,-36.4);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.rf(["#000000","rgba(0,0,0,0.796)","rgba(0,0,0,0)"],[0.137,0.216,1],-0.2,-3.8,0,-0.2,-3.8,15.2).s().p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1268.setTransform(17.9,-31);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.lf(["#484642","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","#737069"],[0.082,0.11,0.141,0.173,0.204,1],0.3,-6.7,-0.1,7).s().p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1269.setTransform(17.9,-31);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.8,0,0,2.8,3.8).s().p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1270.setTransform(17.9,-31);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.lf(["#A7892E","#8E7528","#736022"],[0.298,0.541,0.847],0,-12.5,0,12.1).s().p("ABqBWQAAAQgfALQggALgrAAQgqAAgggLQgfgLAAgQQAAgwAnhPQAphTAZAAQAZAAAqBUQAnBRAAAtIAAAA").cp();
	this.shape_1271.setTransform(-4.5,-29.5);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#60511F").s().p("ABnAHQAAAQgeALQgeALgrAAQgqAAgegLQgegLAAgQIAAgOQAAgPAegLQAegLAqAAQArAAAeALQAeALAAAPIAAAO").cp();
	this.shape_1272.setTransform(-4.5,-19.3);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.lf(["#8C7328","#735F22","#584A1C"],[0.298,0.541,0.847],0,-8.4,0,8.2).s().p("ACRAgQAAAWgrAPQgqAPg8AAQg7AAgqgPQgrgPAAgWQAAg2A2giQAsgbAuAAQAtAAAuAdQA2AjAAAzIAAAA").cp();
	this.shape_1273.setTransform(-4.1,-13.7);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#4F431A").s().p("ACNAKQAAAWgpAPQgqAOg6AAQg5AAgpgOQgqgPAAgWIAAgTQAAgVAqgPQApgPA5AAQA6AAAqAPQApAPAAAVIAAAT").cp();
	this.shape_1274.setTransform(-4,-8.4);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#EADFB7").s().p("AALAAQAAABgLAAIgKgBQAAAAAKAAQALAAAAAAIAAAA").cp();
	this.shape_1275.setTransform(17.4,-23.3);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#C1B797").s().p("AgyAEQgTgGgBgLQABAJAUAGQAVAIAcACQAbABAVgGQAVgGACgHQgBAIgVAHQgVAGgcgBQgegBgUgJIAAAA").cp();
	this.shape_1276.setTransform(17.3,-24.7);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#D2634C").s().p("ABHADQgBALgVAGQgVAGgcgBQgegBgUgJQgVgIABgJQAAgLAVgGQAWgHAbACQAeABAVAJQAVAIgBAJIAAAA").cp();
	this.shape_1277.setTransform(17.3,-25.8);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.lf(["rgba(128,125,116,0)","#5C2918"],[0,1],0.3,-5.3,-0.1,5.4).s().p("ABJgXIgCA1QgBALgWAHQgVAHgcgCQgegCgVgIQgUgIAAgMIADg1QAAgLAWgGQAVgHAcACQAeABAVAJQAVAIgBALIAAAA").cp();
	this.shape_1278.setTransform(17.1,-23.1);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.rf(["#DC7436","#D77034","#C9662E","#B35525","#943F18","#8F3B16"],[0.353,0.49,0.643,0.808,0.973,1],0,2.2,0,0,2.2,4.4).s().p("ABJgXIgCA1QgBALgWAHQgVAHgcgCQgegCgVgIQgUgIAAgMIADg1QAAgLAWgGQAVgHAcACQAeABAVAJQAVAIgBALIAAAA").cp();
	this.shape_1279.setTransform(17.1,-23.1);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-11.5,0,11.2).s().p("AAAhyQA+AAA+AoQBKAvAABHQAAAeg6AVQg6AUhSAAQhRAAg6gUQg6gVAAgeQAAhLBKguQA7glBAAAIAAAA").cp();
	this.shape_1280.setTransform(-4,0.1);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ADBAOQAAAdg5AUQg4AVhQAAQhPAAg4gVQg5gUAAgdIAAgbQAAgdA5gUQA4gVBPAAQBQAAA4AVQA5AUAAAdIAAAb").cp();
	this.shape_1281.setTransform(-4,7.2);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAUANIgnAAIAAgZIAnAAIAAAZ").cp();
	this.shape_1282.setTransform(-18.9,20.4);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAUAXIgogUIAAgZIAoAUIAAAZ").cp();
	this.shape_1283.setTransform(-18.8,16.8);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.lf(["rgba(94,91,85,0)","#5E5B55","#5E5B55","rgba(94,91,85,0)"],[0.008,0.165,0.882,0.992],1.2,0,-1,0).s().p("AgKAIIAVAKIAAgYIgVgKIAAAY").cp();
	this.shape_1284.setTransform(-18.5,27.4);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.lf(["rgba(94,91,85,0)","#5E5B55","#5E5B55","rgba(94,91,85,0)"],[0.008,0.165,0.882,0.992],-1,0,1.2,0).s().p("AAMAIIgWAJIAAgYIAWgKIAAAZ").cp();
	this.shape_1285.setTransform(9.7,27.9);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1286.setTransform(-12.4,31);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1287.setTransform(-8.6,18.2);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f().s("#BEB184").ss(1,0,0,4).p("AC9gkQAAAdg3ASQg4AVhOAAQhNAAg4gVQg3gSAAgd");
	this.shape_1288.setTransform(-4,13.4);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#4A3F19").s().p("ACGAOQg4AUhOAAQhNAAg4gUQg3gSAAgdIF5AAQAAAdg3ASIAAAA").cp();
	this.shape_1289.setTransform(-4,13.2);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-14.5,0,14.2).s().p("AB2CBQgxAMhFAAQhFAAgvgMQgxgNAAgTQAAgCgGgoQgJg5gLiKQAEAaA0ASQA5AVBOAAQBPAAA5gVQAzgSAFgZQgMBygKBPQgDAaAAARQAAATgxANIAAAA").cp();
	this.shape_1290.setTransform(-4.1,22.2);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,5.7,0,0,5.7,11.7).s().p("AB2CBQgxAMhFAAQhFAAgvgMQgxgNAAgTQAAgCgGgoQgJg5gLiKQAEAaA0ASQA5AVBOAAQBPAAA5gVQAzgSAFgZQgMBygKBPQgDAaAAARQAAATgxANIAAAA").cp();
	this.shape_1291.setTransform(-4.1,22.2);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#363531").s().p("AAWAAQABAHgXABQgIAAgGgCQgHgCAAgEQAAgFAVgBQAJgBAGADQAHACAAACIAAAA").cp();
	this.shape_1292.setTransform(9.2,-41.3);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#B0AB9E").s().p("AAfAAQABADgKAEQgJADgNABQgLAAgKgDQgJgDAAgFQAAgDAJgDQAJgEAMAAQAMgBAKAEQAJADAAAEIAAAA").cp();
	this.shape_1293.setTransform(9.2,-41.3);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-4.5,0.2,4.7).s().p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1294.setTransform(9.3,-37.8);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.9,0,0,1.9,2.4).s().p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1295.setTransform(9.3,-37.8);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.lf(["rgba(72,70,66,0.71)","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","rgba(0,0,0,0.71)"],[0.082,0.11,0.141,0.173,0.204,1],0.4,-11.1,-0.3,11.3).s().p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAIgQAGQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1296.setTransform(17,-13.5);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.rf(["#6A6760","#65635C","#595750","#46453F"],[0.353,0.557,0.784,1],-0.1,4.6,0,-0.1,4.6,4.8).s().p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAIgQAGQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1297.setTransform(17,-13.5);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#89836D").s().p("AhWgPQABAMAaAHQAaAJAhAAQAiAAAagJQAagHABgMQgBAOgYAHQgaAKgkAAQgjAAgZgKQgZgHgBgOIAAAA").cp();
	this.shape_1298.setTransform(15.9,-2.7);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#78756D").s().p("ABXAAQAAAMgaAKQgZAJgkAAQgjAAgZgJQgagKAAgMQAAgLAagKQAZgJAjAAQAkAAAZAJQAaAJAAAMIAAAA").cp();
	this.shape_1299.setTransform(16,-4.2);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-4.7,0,4.9).s().p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1300.setTransform(16,-2.5);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2,0,0,2,5.1).s().p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1301.setTransform(16,-2.5);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#EADFB7").s().p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1302.setTransform(-4.1,9.9);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#C1B797").s().p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_1303.setTransform(-4.6,7.1);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#B0AB9E").s().p("AClAAQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARQAwASAAAXIAAAA").cp();
	this.shape_1304.setTransform(-4.6,4.2);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-9.1,0,9.3).s().p("AAAhbQBFAAAxASQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgxgSQgxgSAAgZIAAg+QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1305.setTransform(-4.6,7.3);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3.7,0,0,3.7,9.7).s().p("AAAhbQBFAAAxASQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgxgSQgxgSAAgZIAAg+QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1306.setTransform(-4.6,7.3);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#EADFB7").s().p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1307.setTransform(13.2,6.2);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#C1B797").s().p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_1308.setTransform(12.7,3.4);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#B0AB9E").s().p("AB1gpQAwASAAAXQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARIAAAA").cp();
	this.shape_1309.setTransform(12.7,0.5);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-9.1,0,9.3).s().p("AB2hJQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgwgSQgygSAAgZIAAg+QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1310.setTransform(12.7,3.6);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3.7,0,0,3.7,9.7).s().p("AB2hJQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgwgSQgygSAAgZIAAg+QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1311.setTransform(12.7,3.6);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#363431").s().p("AAhAAQAAAEgKADQgKAEgNAAQgMABgKgEQgKgDAAgFQAAgDAKgDQAJgEANgBQANAAAKAEQAKADAAAEIAAAA").cp();
	this.shape_1312.setTransform(-24.5,-21.2);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#B0AB9E").s().p("AAqAAQAAAFgMAFQgNAEgRABQgQAAgMgEQgNgEAAgHQAAgEAMgFQANgEAQgBQARAAAMAEQANAEAAAGIAAAA").cp();
	this.shape_1313.setTransform(-24.5,-21.2);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-3.6,0.1,3.7).s().p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1314.setTransform(-24.4,-19.1);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.5,0,0,1.5,3.2).s().p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1315.setTransform(-24.4,-19.1);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#363431").s().p("AAagCQAAADgGAFQgHAFgNABQgKAAgIgFQgHgFAAgDQAAgEAIgDQAHgDAKAAQALAAAHACQAIADAAAEIAAAA").cp();
	this.shape_1316.setTransform(-24.2,-19.3);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#B0AB9E").s().p("AAigCQAAAEgIAGQgKAGgPABQgOAAgKgGQgJgGAAgEQgBgFAKgDQAKgEANgBQANAAAKADQAKAEABAFIAAAA").cp();
	this.shape_1317.setTransform(-24.2,-19.3);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.lf(["rgba(128,125,116,0)","rgba(0,0,0,0.537)"],[0,1],0,-3,0,3.2).s().p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1318.setTransform(-24.3,-17.7);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.3,0,0,1.3,2.5).s().p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1319.setTransform(-24.3,-17.7);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#EADFB7").s().p("AAIAAIgIAAQgHAAAAAAQAAAAAHAAQAIAAAAAAIAAAA").cp();
	this.shape_1320.setTransform(-24.2,-14);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#C1B797").s().p("Ag2gFQACAFAQAFQAQAEAUgBQAWAAARgHQAPgEABgHQgBAIgPAFQgPAGgYABQgVABgQgFQgPgFgCgGIAAAA").cp();
	this.shape_1321.setTransform(-24.4,-15);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#D2634C").s().p("AA3gBQAAAHgPAGQgRAHgXAAQgVABgQgFQgRgFAAgIQgBgGAQgHQAQgHAXgBQAVAAARAFQARAFAAAIIAAAA").cp();
	this.shape_1322.setTransform(-24.4,-15.9);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.lf(["rgba(128,125,116,0)","#5C2918"],[0,1],0,-4,0.2,4.2).s().p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1323.setTransform(-24.3,-13.8);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.rf(["#DC7436","#D77034","#C9662E","#B35525","#943F18","#8F3B16"],[0.353,0.49,0.643,0.808,0.973,1],0,1.7,0,0,1.7,3.4).s().p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1324.setTransform(-24.3,-13.8);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#C1B797").s().p("AglgHQABAGAKADQAMAHAPAAQAQgBALgHQAJgEABgGQgBAHgIAEQgLAIgRAAQgQABgMgHQgJgEgBgHIAAAA").cp();
	this.shape_1325.setTransform(-24.2,-13.5);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#363431").s().p("AAdgCQABADgHAGQgJAGgOAAQgMABgJgGQgIgFAAgEQAAgFAJgDQAJgDALAAQAMgBAIADQAJADAAAFIAAAA").cp();
	this.shape_1326.setTransform(-24.2,-14.1);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#B0AB9E").s().p("AAmgCQAAAFgJAGQgLAHgSABQgPAAgMgHQgKgGAAgFQAAgFALgFQALgEAPAAQAPgBALAEQALAEABAGIAAAA").cp();
	this.shape_1327.setTransform(-24.2,-14.1);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.lf(["rgba(128,125,116,0)","rgba(0,0,0,0.537)"],[0,1],0,-3.4,0,3.6).s().p("AAAAjQgSABgOgFQgOgFAAgHIAHgmQAAgGALgEQAMgEAQgBQANAAAMAEQALAEABAFIAKAmQAAAHgOAGQgNAFgUAAIAAAA").cp();
	this.shape_1328.setTransform(-24.3,-12.3);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.5,0,0,1.5,2.8).s().p("AAAAjQgSABgOgFQgOgFAAgHIAHgmQAAgGALgEQAMgEAQgBQANAAAMAEQALAEABAFIAKAmQAAAHgOAGQgNAFgUAAIAAAA").cp();
	this.shape_1329.setTransform(-24.3,-12.3);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#974939").s().p("AA3gBQAAAHgPAGQgRAHgXAAQgVABgQgFQgRgFAAgIQgBgGAQgHQAQgHAXgBQAVAAARAFQARAFAAAIIAAAA").cp();
	this.shape_1330.setTransform(-24.4,-10.1);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.lf(["rgba(128,125,116,0)","#5C2918"],[0,1],0,-4,0.2,4.1).s().p("AACApQgSABgOgFQgOgFAAgIIgKgpQgBgIAQgHQARgHAWgBQAWAAARAFQAQAFABAIIgHAqQAAAIgOAGQgNAGgUABIAAAA").cp();
	this.shape_1331.setTransform(-24.4,-8.1);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.rf(["#884219","#8C3E17","#8F3B16"],[0.353,0.831,1],0.1,1.7,0,0.1,1.7,3.4).s().p("AACApQgSABgOgFQgOgFAAgIIgKgpQgBgIAQgHQARgHAWgBQAWAAARAFQAQAFABAIIgHAqQAAAIgOAGQgNAGgUABIAAAA").cp();
	this.shape_1332.setTransform(-24.4,-8.1);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#464540").s().p("AAaAAQAAADgIADQgHADgLAAQgJAAgIgCQgIgDAAgEQgBgCAIgDQAIgDAKAAQAKAAAIACQAIADAAADIAAAA").cp();
	this.shape_1333.setTransform(-24.6,-12);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#B0AB9E").s().p("AAnAAQAAAEgMAFQgLAEgQABQgOAAgMgEQgMgEAAgGQAAgDALgFQAMgEAPgBQAPAAAMAEQAMAEAAAFIAAAA").cp();
	this.shape_1334.setTransform(-24.6,-12);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.rf(["#000000","rgba(0,0,0,0.918)","rgba(0,0,0,0)"],[0,0.035,0.965],0,-3.2,0,0,-3.2,7.3).s().p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1335.setTransform(-24.3,-7.1);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.lf(["rgba(72,70,66,0.627)","rgba(68,67,63,0.941)","rgba(42,41,39,0.529)","rgba(24,24,23,0.235)","rgba(12,12,11,0.059)","rgba(0,0,0,0)","rgba(0,0,0,0.627)"],[0.082,0.086,0.118,0.145,0.176,0.204,1],0,-5.9,0.2,6.1).s().p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1336.setTransform(-24.3,-7.1);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.5,0,0,2.5,3).s().p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1337.setTransform(-24.3,-7.1);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#EADFB7").s().p("AAHAAIgHAAIgGAAIAGAAQAHAAAAAAIAAAA").cp();
	this.shape_1338.setTransform(-24,-0.5);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#C1B797").s().p("AgtgGQAAAGAOACQAOAFARAAQASgBAOgEQAOgDAAgGQAAAHgNADQgOAFgTAAQgSABgOgFQgNgEAAgGIAAAA").cp();
	this.shape_1339.setTransform(-24.1,-1.3);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#B0AB9E").s().p("AAuAAQABAGgOAFQgOAFgTAAQgSABgNgFQgOgFAAgHQgBgFAOgFQAOgFASAAQATgBAOAFQANAFAAAGIAAAA").cp();
	this.shape_1340.setTransform(-24.1,-2.1);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-3.4,0.1,3.6).s().p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgRAAgOgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1341.setTransform(-24.1,-0.3);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.4,0,0,1.4,2.9).s().p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgRAAgOgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1342.setTransform(-24.1,-0.3);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#C1B797").s().p("AAUAEQgJADgLgBQgMgBgJgEQgIgBAAgFQAAAEAJABQAJAEALABQALABAJgDQAJgCABgCQgBADgJACIAAAA").cp();
	this.shape_1343.setTransform(29.9,-21.5);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#3F3D3A").s().p("AAVABQAAADgHACQgGACgIgBQgUgBAAgGQAAgDAHgCQAGgCAHABQAJABAGACQAHADgBABIAAAA").cp();
	this.shape_1344.setTransform(29.9,-22);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#8A867C").s().p("AAdABQgBAFgIADQgJACgLgBQgLgBgJgEQgIgEAAgCQABgEAIgCQAJgDAKABQAMABAJAEQAIADAAACIAAAA").cp();
	this.shape_1345.setTransform(29.9,-22);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.lf(["rgba(128,125,116,0)","rgba(0,0,0,0.4)"],[0,1],1.1,-14.8,-1,15).s().p("AApiGIgVESQAAAEgKADQgJACgLgBQgMAAgJgEQgJgEAAgFIAVkSQAAgEAJgDQAKgCAKAAQANABAJAEQAJAEAAAFIAAAA").cp();
	this.shape_1346.setTransform(28.9,-8.2);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.rf(["#716F66","#6D6B63","#605E57","#4F4E48"],[0.353,0.561,0.796,1],-0.3,6,0,-0.3,6,5.2).s().p("AApiGIgVESQAAAEgKADQgJACgLgBQgMAAgJgEQgJgEAAgFIAVkSQAAgEAJgDQAKgCAKAAQANABAJAEQAJAEAAAFIAAAA").cp();
	this.shape_1347.setTransform(28.9,-8.2);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-11.7,0,11.4).s().p("ADJAtQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeQAAhNBLgvQA9glBAAAQA/AAA/AoQBLAxAABIIAAAA").cp();
	this.shape_1348.setTransform(14,12.3);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ADEAPQAAAdg6AVQg5AUhRAAQhQAAg5gUQg6gVAAgdIAAgdQAAgdA6gVQA5gUBQAAQBRAAA5AUQA6AVAAAdIAAAd").cp();
	this.shape_1349.setTransform(14,19.6);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-7.1,0,6.9).s().p("AB6AbQAAASgkANQgkANgyAAQgyAAgkgNQgkgNAAgSQAAguAugcQAlgXAnAAQAmAAAnAZQAtAdAAArIAAAA").cp();
	this.shape_1350.setTransform(24.9,10.8);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("AB3AJQAAARgjANQgjANgxAAQgwAAgjgNQgjgNAAgRIAAgRQAAgSAjgMQAjgNAwAAQAxAAAjANQAjAMAAASIAAAR").cp();
	this.shape_1351.setTransform(24.9,15.3);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#B0AB9E").s().p("AAnAAQAAAEgMAFQgLAEgQABQgPAAgLgEQgMgEAAgFQAAgEALgFQAMgEAPgBQAPAAAMAEQALAEABAFIAAAA").cp();
	this.shape_1352.setTransform(9.4,-34.1);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.lf(["rgba(128,125,116,0)","#000000"],[0,1],-0.4,-19.2,0.6,19.4).s().p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1353.setTransform(9.9,-16.3);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.rf(["#726E66","#6D6A63","#605D57","#4B4945","#3D3B38"],[0.353,0.518,0.702,0.894,1],0.2,7.8,0,0.2,7.8,6.7).s().p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1354.setTransform(9.9,-16.3);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#EADFB7").s().p("AAVAAQAAACgVAAQgUAAAAgCQAAgBAUAAQAVAAAAABIAAAA").cp();
	this.shape_1355.setTransform(-18.9,6.7);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#C1B797").s().p("ABaAGQAngLABgRQgBATglAMQgmAPg2AAQg1AAgmgPQglgMgBgUQABASAmALQAnANAzAAQAzAAAngNIAAAA").cp();
	this.shape_1356.setTransform(-19.3,4.5);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#B0AB9E").s().p("ABdggQAmAOAAASQAAATgmAOQgnAOg2AAQg1AAgmgOQgngOAAgTQAAgSAngOQAmgOA1AAQA2AAAnAOIAAAA").cp();
	this.shape_1357.setTransform(-19.3,2.2);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-7.2,0,7.3).s().p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1358.setTransform(-19.3,4.7);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3,0,0,3,7.7).s().p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1359.setTransform(-19.3,4.7);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-9.3,0,9).s().p("ACfAkQAAAXgvARQgvARhBAAQhBAAgugRQgvgRAAgXQAAg9A7glQAwgeAzAAQAyAAAxAgQA8AnAAA5IAAAA").cp();
	this.shape_1360.setTransform(-19.3,11.6);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ACbAMQAAAXgtAQQguAQhAAAQg/AAgugQQgtgQAAgXIAAgXQAAgXAtgQQAugQA/AAQBAAAAuAQQAtAQAAAXIAAAX").cp();
	this.shape_1361.setTransform(-19.2,17.3);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f().s("#484143").ss(1,1,1).p("AAJAAQAAABgJAAQgIgBAAAAQAAAAAIAAIAJAA").cp();
	this.shape_1362.setTransform(19.1,-45.6);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f().s("#484143").ss(1,1,1).p("AA6gGQgBAHgRAFQgRAGgXgBQgYgBgRgHQgQgEAAgJQABAHAQAFQASAGAWABQAWABASgFQARgFABgGIAAAA").cp();
	this.shape_1363.setTransform(19,-46.6);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f().s("#484143").ss(1,1,1).p("AAuABQgBAHgNAEQgOAFgSgBQgSgBgNgFQgOgGABgFQAAgGANgFQAOgEARABQATABAOAFQANAFAAAFIAAAA").cp();
	this.shape_1364.setTransform(19,-47.5);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f().s("#484143").ss(1,1,1).p("AA6ACQAAAIgRAGQgSAGgXgBQgYgBgQgHQgSgHABgHQAAgIARgGQASgFAWABQAZABAQAGQARAHAAAHIAAAA").cp();
	this.shape_1365.setTransform(19,-47.6);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f().s("#484143").ss(1,1,1).p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1366.setTransform(18.8,-44.6);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f().s("#484143").ss(1,1,1).p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1367.setTransform(18.8,-44.6);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f().s("#484143").ss(1,1,1).p("ABIAcQgBAKgVAHQgWAHgcgBQgdgBgVgJQgVgIAAgLIAPg0QABgJARgGQASgFAWABQAZABARAGQARAHAAAJIALA2").cp();
	this.shape_1368.setTransform(18.8,-44.6);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f().s("#484143").ss(1,1,1).p("AAJAAQgFABgEgBQgIAAAAAAQAAAAAIAAIAJAA").cp();
	this.shape_1369.setTransform(19.4,-42.9);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f().s("#484143").ss(1,1,1).p("AAugJQgBAJgKAFQgOAJgVgBQgVgBgNgKQgLgGAAgIQAAAHAMAGQAOAJATABQAUABAOgIQALgFABgIIAAAA").cp();
	this.shape_1370.setTransform(19.2,-44.1);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f().s("#484143").ss(1,1,1).p("AAlgBQgBAFgJAGQgLAHgQAAQgQgBgLgIQgJgHAAgFQABgFALgEQALgDANAAQAPABALAEQALAFAAAFIAAAA").cp();
	this.shape_1371.setTransform(19.2,-44.9);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f().s("#484143").ss(1,1,1).p("AAvgBQgBAGgLAIQgOAIgVgBQgUAAgOgKQgMgIAAgHQABgHAOgEQAOgEARAAQAUABANAGQAOAFAAAHIAAAA").cp();
	this.shape_1372.setTransform(19.2,-44.9);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f().s("#484143").ss(1,1,1).p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1373.setTransform(19.1,-42.7);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f().s("#484143").ss(1,1,1).p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1374.setTransform(19.1,-42.7);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f().s("#484143").ss(1,1,1).p("AA6AYQgBAJgRAFQgRAGgXgBQgXgBgRgHQgRgHABgIIALgvQABgHAOgEQAOgFASABQATABAOAFQAOAGgBAHIAKAv").cp();
	this.shape_1375.setTransform(19.1,-42.7);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f().s("#484143").ss(1,1,1).p("ABDAAQAAAMgUAIQgTAJgcAAQgaAAgUgJQgUgIAAgMQAAgLAUgJQAUgIAaAAQAcAAATAIQAUAJAAALIAAAA").cp();
	this.shape_1376.setTransform(18.3,-40.5);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f().s("#484143").ss(1,1,1).p("AALAAQAAABgLAAIgKgBQAAAAAKAAQALAAAAAAIAAAA").cp();
	this.shape_1377.setTransform(18.8,-37.6);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f().s("#484143").ss(1,1,1).p("ABHgGQgBAIgVAHQgVAGgcgBQgegBgUgJQgTgGgBgLQABAJAUAGQAVAIAcACQAbABAVgGQAVgGACgHIAAAA").cp();
	this.shape_1378.setTransform(18.7,-38.9);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f().s("#484143").ss(1,1,1).p("ABHADQgBALgVAGQgVAGgcgBQgegBgUgJQgVgIABgJQAAgLAVgGQAWgHAbACQAeABAVAJQAUAIAAAJIAAAA").cp();
	this.shape_1379.setTransform(18.7,-40);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f().s("#484143").ss(1,1,1).p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1380.setTransform(18.6,-37.3);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f().s("#484143").ss(1,1,1).p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1381.setTransform(18.6,-37.3);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f().s("#484143").ss(1,1,1).p("ABGAfQAAAKgWAHQgVAHgcgCQgegCgVgIQgVgIABgMIACg1QABgLAVgGQAWgHAcACQAeABAVAJQAVAIgBALIgDA2").cp();
	this.shape_1382.setTransform(18.6,-37.3);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f().s("#484143").ss(1,1,1).p("AAIAAQAAABgIgBQgHAAAAAAQAAAAAHAAIAIAA").cp();
	this.shape_1383.setTransform(17.9,-34.5);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f().s("#484143").ss(1,1,1).p("AA1gGQgBAGgOAFQgRAGgVgBQgWgBgPgGQgPgEAAgIQAAAHAQADQAPAGAVABQAUABARgFQAPgEABgGIAAAA").cp();
	this.shape_1384.setTransform(17.8,-35.5);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f().s("#484143").ss(1,1,1).p("AAlABQgBAFgKAEQgLADgPAAQgOgBgLgEQgLgEABgEQAAgFALgEQALgDANAAQAQABAKAEQALAEAAAEIAAAA").cp();
	this.shape_1385.setTransform(17.8,-36.4);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f().s("#484143").ss(1,1,1).p("AA2ABQAAAJgQAFQgRAFgVgBQgWgBgPgGQgQgGAAgHQABgIAQgFQAQgFAUABQAXABAPAGQAQAGAAAGIAAAA").cp();
	this.shape_1386.setTransform(17.8,-36.4);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1387.setTransform(17.9,-31);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1388.setTransform(17.9,-31);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1389.setTransform(17.9,-31);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f().s("#484143").ss(1,1,1).p("AA1AyQAAAIgRAGQgQAFgVgBQgWAAgQgHQgQgGAAgJIAEhgQAAgIAQgFQAQgFAVAAQAXABAQAGQAQAHgBAIIgDBg").cp();
	this.shape_1390.setTransform(17.9,-31);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1391.setTransform(3.7,-20.5);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1392.setTransform(0,-19.5);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1393.setTransform(-11.4,-19.8);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1394.setTransform(-8.5,-19.3);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1395.setTransform(-4.6,-19.2);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1396.setTransform(-1.2,-21.8);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1397.setTransform(-4.8,-22.5);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f().s("#484143").ss(1,1,1).p("AAIgBQABACgBAEQgBAEgEABQgGACgDgJQgCgDABgDQACgEADgBQACgCADACQADADACAEIAAAA").cp();
	this.shape_1398.setTransform(2.3,-25.7);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f().s("#484143").ss(1,1,1).p("AAIgBQABACgBAEQgBAEgEABQgDABgCgCQgDgCgCgEQgBgDABgDQABgEAEgBQACgCADACQADADACAEIAAAA").cp();
	this.shape_1399.setTransform(2,-23);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f().s("#484143").ss(1,1,1).p("AAFACQgFAKgEgDQgFgDAFgIQAEgIAFACQAFADgFAHIAAAA").cp();
	this.shape_1400.setTransform(-12.3,-25.8);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f().s("#484143").ss(1,1,1).p("AAIABQAAAEgEADQgDADgBgBQgEgBgCgDQgCgEABgCQACgLAGACQAEABACADQACAEgBACIAAAA").cp();
	this.shape_1401.setTransform(-11.9,-22.8);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f().s("#484143").ss(1,1,1).p("AAIABQgBAEgDADQgDADgCgBQgDgBgCgDQgCgEABgCQABgFADgCQADgDABABQAEABACADQACAEgBACIAAAA").cp();
	this.shape_1402.setTransform(-9.1,-22.6);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f().s("#484143").ss(1,1,1).p("AAJABQgBAEgDADQgEADgCgBQgDgBgCgEQgCgDAAgDQABgEAEgCQADgDACABQAJACgCAIIAAAA").cp();
	this.shape_1403.setTransform(-9.6,-26.9);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1404.setTransform(-5.2,-27.6);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1405.setTransform(-2.2,-27.6);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgCAAgEgDQgDgDAAgEQAAgDADgDQAEgDACAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1406.setTransform(-0.2,-25.7);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1407.setTransform(-2.7,-24.7);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f().s("#484143").ss(1,1,1).p("AAKAAQAAAEgDADQgDADgEAAQgDAAgDgDQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADIAAAA").cp();
	this.shape_1408.setTransform(-6.8,-24.9);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f().s("#484143").ss(1,1,1).p("ABqBWQAAAQgfALQggALgrAAQgqAAgggLQgfgLAAgQQAAgwAnhPQAphTAZAAQAZAAAqBUQAnBRAAAtIAAAA").cp();
	this.shape_1409.setTransform(-4.5,-29.5);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f().s("#484143").ss(1,1,1).p("ABnAHQAAAQgeALQgeALgrAAQgqAAgegLQgegLAAgQIAAgOQAAgPAegLQAegLAqAAQArAAAeALQAeALAAAPIAAAO").cp();
	this.shape_1410.setTransform(-4.5,-19.3);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f().s("#484143").ss(1,1,1).p("ABrAAQAAASggANQgfANgsAAQgrAAgfgNQgggNAAgSQAAgRAggOQAfgNArAAQAsAAAfANQAgAOAAARIAAAA").cp();
	this.shape_1411.setTransform(-4.5,-17.6);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgEAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAEIAAAA").cp();
	this.shape_1412.setTransform(7.1,-10);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAFgEAFQgEAEgGAAQgFAAgEgEQgEgFAAgFQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEIAAAA").cp();
	this.shape_1413.setTransform(2,-8.7);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAFgEAFQgEAEgGAAQgFAAgEgEQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAA").cp();
	this.shape_1414.setTransform(-13.5,-9.1);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgEAAgEgEQgFgEAAgGQAAgEAFgFQAEgEAEAAQAGAAAEAEQAEAFAAAEIAAAA").cp();
	this.shape_1415.setTransform(-9.5,-8.4);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgEAAgFgEQgEgEAAgGQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFIAAAA").cp();
	this.shape_1416.setTransform(-4.3,-8.3);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgEAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAEIAAAA").cp();
	this.shape_1417.setTransform(0.3,-11.8);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEIAAAA").cp();
	this.shape_1418.setTransform(-4.5,-12.7);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f().s("#484143").ss(1,1,1).p("AAKgCQACADgBAGQgCAFgEABQgFACgDgDQgFgDgBgFQgCgEABgFQACgFAEgCQAEgCAEADQAFADABAGIAAAA").cp();
	this.shape_1419.setTransform(5.3,-17);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f().s("#484143").ss(1,1,1).p("AAKgDQACAEgBAFQgCAFgEACQgFACgDgDQgFgDgCgGQgBgDABgGQACgFAEgBQAEgCAEADQAFADABAFIAAAA").cp();
	this.shape_1420.setTransform(4.8,-13.4);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f().s("#484143").ss(1,1,1).p("AAGAEQgDAFgDACQgDADgDgCQgDgCAAgEQAAgFAEgDQADgFACgDQAEgDADACQAHAEgIALIAAAA").cp();
	this.shape_1421.setTransform(-14.7,-17.2);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f().s("#484143").ss(1,1,1).p("AALACQgBAGgEADQgEAEgDgBQgFgBgDgFQgCgFABgEQABgFAEgEQAEgDADAAQAFABADAFQACAFgBAEIAAAA").cp();
	this.shape_1422.setTransform(-14.1,-13.2);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f().s("#484143").ss(1,1,1).p("AALABQgBAGgEAEQgEAEgDgBQgFgBgDgFQgCgFABgEQABgGAEgDQAEgEADABQAFABADAFQACAFgBADIAAAA").cp();
	this.shape_1423.setTransform(-10.4,-12.9);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f().s("#484143").ss(1,1,1).p("AAMACQgBAGgEADQgFAEgDgBQgFgBgDgFQgDgFABgEQABgGAFgEQAEgDAEABQAFABACAFQADAFgBAEIAAAA").cp();
	this.shape_1424.setTransform(-11.1,-18.7);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgFAAgEgEQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAA").cp();
	this.shape_1425.setTransform(-5.1,-19.7);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAFgEAFQgEAEgGAAQgFAAgEgEQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFIAAAA").cp();
	this.shape_1426.setTransform(-0.9,-19.6);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f().s("#484143").ss(1,1,1).p("AANAAQAAAGgEAEQgEAEgFAAQgEAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAEAAQAFAAAEAEQAEAFAAAEIAAAA").cp();
	this.shape_1427.setTransform(1.7,-17);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgEAAgEgEQgFgEAAgGQAAgFAFgEQAEgEAEAAQAGAAAEAEQAEAEAAAFIAAAA").cp();
	this.shape_1428.setTransform(-1.7,-15.7);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f().s("#484143").ss(1,1,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgEAAgFgEQgEgEAAgGQAAgEAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAEIAAAA").cp();
	this.shape_1429.setTransform(-7.3,-16);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f().s("#484143").ss(1,1,1).p("ACRAgQAAAWgrAPQgqAPg8AAQg7AAgqgPQgrgPAAgWQAAg2A2giQAsgbAuAAQAtAAAuAdQA2AjAAAzIAAAA").cp();
	this.shape_1430.setTransform(-4.1,-13.7);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f().s("#484143").ss(1,1,1).p("ACNAKQAAAWgpAPQgqAOg6AAQg5AAgpgOQgqgPAAgWIAAgTQAAgVAqgPQApgPA5AAQA6AAAqAPQApAPAAAVIAAAT").cp();
	this.shape_1431.setTransform(-4,-8.4);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f().s("#484143").ss(1,1,1).p("AALAAQAAABgLAAIgKgBQAAAAAKAAQALAAAAAAIAAAA").cp();
	this.shape_1432.setTransform(17.4,-23.3);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f().s("#484143").ss(1,1,1).p("AgyAEQgTgGgBgLQABAJAUAGQAVAIAcACQAbABAVgGQAVgGACgHQgBAIgVAHQgVAGgcgBQgegBgUgJIAAAA").cp();
	this.shape_1433.setTransform(17.3,-24.7);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f().s("#484143").ss(1,1,1).p("ABHADQgBALgVAGQgVAGgcgBQgegBgUgJQgVgIABgJQAAgLAVgGQAWgHAbACQAeABAVAJQAVAIgBAJIAAAA").cp();
	this.shape_1434.setTransform(17.3,-25.8);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f().s("#484143").ss(1,1,1).p("ABJgXIgCA1QgBALgWAHQgVAHgcgCQgegCgVgIQgUgIAAgMIADg1QAAgLAWgGQAVgHAcACQAeABAVAJQAVAIgBALIAAAA").cp();
	this.shape_1435.setTransform(17.1,-23.1);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f().s("#484143").ss(1,1,1).p("ABJgXIgCA1QgBALgWAHQgVAHgcgCQgegCgVgIQgUgIAAgMIADg1QAAgLAWgGQAVgHAcACQAeABAVAJQAVAIgBALIAAAA").cp();
	this.shape_1436.setTransform(17.1,-23.1);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f().s("#484143").ss(1,1,1).p("ABJgXIgCA1QgBALgWAHQgVAHgcgCQgegCgVgIQgUgIAAgMIADg1QAAgLAWgGQAVgHAcACQAeABAVAJQAVAIgBALIAAAA").cp();
	this.shape_1437.setTransform(17.1,-23.1);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f().s("#484143").ss(1,1,1).p("ACQAAQAAAZgqASQgqARg8AAQg6AAgrgRQgqgSAAgZQAAgYAqgSQArgRA6AAQA7AAArARQAqASAAAYIAAAA").cp();
	this.shape_1438.setTransform(-4.5,-6.1);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgGAGgHQAGgGAHAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1439.setTransform(11.3,5);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1440.setTransform(4.3,6.9);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgHgGAAgIQAAgGAHgHQAGgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1441.setTransform(-17,6.3);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgGAGgHQAGgGAHAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1442.setTransform(-11.5,7.3);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1443.setTransform(-4.4,7.4);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f().s("#484143").ss(1,1,1).p("AATAAQAAAIgGAFQgFAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAGAGAAAHIAAAA").cp();
	this.shape_1444.setTransform(1.9,2.7);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgGAGgHQAHgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1445.setTransform(-4.7,1.4);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f().s("#484143").ss(1,1,1).p("AAPgEQACAGgCAHQgCAHgHACQgGADgFgEQgGgEgDgIQgDgGADgHQACgHAGgDQAGgCAFAEQAHAEADAIIAAAA").cp();
	this.shape_1446.setTransform(8.7,-4.4);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f().s("#484143").ss(1,1,1).p("AAPgEQACAGgCAHQgCAHgHACQgGADgFgEQgGgEgDgIQgDgGADgHQACgHAHgCQAFgCAFADQAHAEADAIIAAAA").cp();
	this.shape_1447.setTransform(8,0.4);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f().s("#484143").ss(1,1,1).p("AAJAFQgEAHgFAEQgFADgEgCQgDgCAAgHQAAgHAEgFQAEgHAEgDQAGgEAEACQAEADgBAGQAAAHgEAFIAAAA").cp();
	this.shape_1448.setTransform(-18.7,-4.7);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f().s("#484143").ss(1,1,1).p("AANgLQAEAIgBAGQgCAIgGAEQgFAFgFgBQgHgBgDgGQgEgHACgGQABgJAGgFQAGgEAEABQAHABADAGIAAAA").cp();
	this.shape_1449.setTransform(-17.8,0.7);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f().s("#484143").ss(1,1,1).p("AAOgKQADAGgBAGQgCAJgFAEQgGAFgFgBQgHgBgDgHQgEgGACgGQABgIAGgFQAGgFAEABQAHABAEAHIAAAA").cp();
	this.shape_1450.setTransform(-12.7,1.1);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f().s("#484143").ss(1,1,1).p("AARADQgCAIgGAFQgHAFgFgCQgHgBgEgHQgDgHABgGQACgIAGgFQAGgEAFABQAHABAEAHQAEAHgBAGIAAAA").cp();
	this.shape_1451.setTransform(-13.6,-6.8);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgGgGAAgIQAAgHAGgGQAFgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1452.setTransform(-5.5,-8.1);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAFQgGAHgIAAQgGAAgHgHQgGgFAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1453.setTransform(0.2,-8);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f().s("#484143").ss(1,1,1).p("AASAAQAAAHgGAHQgFAGgHAAQgGAAgGgGQgFgHAAgHQAAgGAFgHQAGgGAGAAQAHAAAFAGQAGAHAAAGIAAAA").cp();
	this.shape_1454.setTransform(3.8,-4.5);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1455.setTransform(-0.8,-2.7);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f().s("#484143").ss(1,1,1).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgHgGAAgIQAAgHAHgGQAFgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1456.setTransform(-8.5,-3.1);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f().s("#484143").ss(1,1,1).p("AAAhyQA+AAA+AoQBKAvAABHQAAAeg6AVQg6AUhSAAQhRAAg6gUQg6gVAAgeQAAhLBKguQA7glBAAAIAAAA").cp();
	this.shape_1457.setTransform(-4,0.1);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f().s("#484143").ss(1,1,1).p("ADBAOQAAAdg5AUQg4AVhQAAQhPAAg4gVQg5gUAAgdIAAgbQAAgdA5gUQA4gVBPAAQBQAAA4AVQA5AUAAAdIAAAb").cp();
	this.shape_1458.setTransform(-4,7.2);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f().s("#484143").ss(1,1,1).p("AAUANIgnAAIAAgZIAnAAIAAAZ").cp();
	this.shape_1459.setTransform(-18.9,20.4);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f().s("#484143").ss(1,1,1).p("AAUAXIgogUIAAgZIAoAUIAAAZ").cp();
	this.shape_1460.setTransform(-18.8,16.8);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f().s("#484143").ss(1,1,1).p("AgKAIIAVAKIAAgYIgVgKIAAAY").cp();
	this.shape_1461.setTransform(-18.5,27.4);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f().s("#484143").ss(1,1,1).p("AgKAIIAVAJIAAgYIgVgKIAAAZ").cp();
	this.shape_1462.setTransform(-18.6,17.6);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f().s("#484143").ss(1,1,1).p("AAMAIIgWAJIAAgYIAWgKIAAAZ").cp();
	this.shape_1463.setTransform(9.7,27.9);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1464.setTransform(-12.4,31);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1465.setTransform(-12.4,31);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1466.setTransform(-8.6,18.2);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f().s("#484143").ss(1,1,1).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1467.setTransform(-8.6,18.2);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f().s("#484143").ss(1,1,1).p("AC9ghQAAAdg3ASQg4AUhOAAQhNAAg4gUQg3gSAAgd");
	this.shape_1468.setTransform(-4,13.2);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f().s("#484143").ss(1,1,1).p("ADBiOQAAADgBADQgNBxgJBQQgDAaAAARQAAASgxANQgxAMhFAAQhFAAgwgMQgxgMAAgTQAAgCgGgoQgIg6gLiKQgBgCAAgCAi/iKQAEAaA0ATQA5AUBOAAQBPAAA5gVQAygSAGgY");
	this.shape_1469.setTransform(-4.1,22);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f().s("#484143").ss(1,1,1).p("ADBiOQAAADgBADQgNBxgJBQQgDAaAAARQAAASgxANQgxAMhFAAQhFAAgwgMQgxgMAAgTQAAgCgGgoQgIg6gLiKQgBgCAAgCAi/iKQAEAaA0ATQA5AUBOAAQBPAAA5gVQAygSAGgY");
	this.shape_1470.setTransform(-4.1,22);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f().s("#484143").ss(1,1,1).p("ADBiOQAAADgBADQgNBxgJBQQgDAaAAARQAAASgxANQgxAMhFAAQhFAAgwgMQgxgMAAgTQAAgCgGgoQgIg6gLiKQgBgCAAgCAi/iKQAEAaA0ATQA5AUBOAAQBPAAA5gVQAygSAGgY");
	this.shape_1471.setTransform(-4.1,22);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f().s("#484143").ss(1,1,1).p("AAFAAIgFAAQgEAAAAAAIAEAAQAFAAAAAAIAAAA").cp();
	this.shape_1472.setTransform(9.3,-40.2);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f().s("#484143").ss(1,1,1).p("AAfgFQAAAFgJACQgJADgNABQgLAAgKgDQgJgDAAgDQAAADAKACQAJADALAAQAMgBAKgDQAJgCAAgEIAAAA").cp();
	this.shape_1473.setTransform(9.2,-40.8);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f().s("#484143").ss(1,1,1).p("AAWAAQABAHgXABQgIAAgGgCQgHgCAAgEQAAgFAVgBQAJgBAGADQAHACAAACIAAAA").cp();
	this.shape_1474.setTransform(9.2,-41.3);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f().s("#484143").ss(1,1,1).p("AAfAAQABADgKAEQgJADgNABQgLAAgKgDQgJgDAAgFQAAgDAJgDQAJgEAMAAQAMgBAKAEQAJADAAAEIAAAA").cp();
	this.shape_1475.setTransform(9.2,-41.3);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f().s("#484143").ss(1,1,1).p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1476.setTransform(9.3,-37.8);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f().s("#484143").ss(1,1,1).p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1477.setTransform(9.3,-37.8);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f().s("#484143").ss(1,1,1).p("AAfgiIACBEQAAAFgJADQgKAEgNAAQgLABgKgEQgJgDgBgEIgChEQAAgFAKgEQAJgDANgBQAMAAAJADQAKADAAAFIAAAA").cp();
	this.shape_1478.setTransform(9.3,-37.8);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f().s("#484143").ss(1,1,1).p("AAkAAQAAAFgLAEQgKADgPAAQgOAAgKgDQgMgEAAgFQAAgEAMgEQAKgDAOAAQAPAAAKADQALAEAAAEIAAAA").cp();
	this.shape_1479.setTransform(9.5,-33.9);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f().s("#484143").ss(1,1,1).p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAIgQAGQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1480.setTransform(17,-13.5);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f().s("#484143").ss(1,1,1).p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAIgQAGQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1481.setTransform(17,-13.5);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f().s("#484143").ss(1,1,1).p("AgrBpQgQgHAAgIIALi3QAAgJARgFQAQgFAVABQAWABAQAGQAQAHAAAIIgKC3QgBAIgQAGQgRAFgUgBQgXgBgQgGIAAAA").cp();
	this.shape_1482.setTransform(17,-13.5);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f().s("#484143").ss(1,1,1).p("ABKh1QAeAQAAAqQgCBPgcA4QgdA5gqAAQgpABgfg4Qggg3gBhOQgChEAggIQAUgFA1AIQAygBAXAMIAAAA").cp();
	this.shape_1483.setTransform(12.5,7.3);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f().s("#484143").ss(1,1,1).p("AhWgPQABAMAaAHQAaAJAhAAQAiAAAagJQAagHABgMQgBAOgYAHQgaAKgkAAQgjAAgZgKQgZgHgBgOIAAAA").cp();
	this.shape_1484.setTransform(15.9,-2.7);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f().s("#484143").ss(1,1,1).p("ABXAAQAAAMgaAKQgZAJgkAAQgjAAgZgJQgagKAAgMQAAgLAagKQAZgJAjAAQAkAAAZAJQAaAJAAAMIAAAA").cp();
	this.shape_1485.setTransform(16,-4.2);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f().s("#484143").ss(1,1,1).p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1486.setTransform(16,-2.5);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f().s("#484143").ss(1,1,1).p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1487.setTransform(16,-2.5);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f().s("#484143").ss(1,1,1).p("ABYAQQAAANgaAKQgaAJgkAAQgjAAgagJQgagKAAgNIAAggQAAgNAagJQAagJAjAAQAkAAAaAJQAaAJAAANIAAAg").cp();
	this.shape_1488.setTransform(16,-2.5);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f().s("#484143").ss(1,1,1).p("AA4gaQAYAMAAAOQAAAPgYAMQgXALghAAQggAAgXgLQgYgMAAgPQAAgOAYgMQAXgLAgAAQAhAAAXALIAAAA").cp();
	this.shape_1489.setTransform(-23.6,1.7);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f().s("#484143").ss(1,1,1).p("ABbAAQAAASgbAMQgbANglAAQgkAAgbgNQgbgMAAgSQAAgRAbgMQAbgNAkAAQAlAAAbANQAbAMAAARIAAAA").cp();
	this.shape_1490.setTransform(19.2,-0.6);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f().s("#484143").ss(1,1,1).p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1491.setTransform(-4.1,9.9);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f().s("#484143").ss(1,1,1).p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_1492.setTransform(-4.6,7.1);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f().s("#484143").ss(1,1,1).p("AClAAQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARQAwASAAAXIAAAA").cp();
	this.shape_1493.setTransform(-4.6,4.2);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f().s("#484143").ss(1,1,1).p("AAAhbQBFAAAxASQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgxgSQgxgSAAgZIAAg+QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1494.setTransform(-4.6,7.3);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f().s("#484143").ss(1,1,1).p("AAAhbQBFAAAxASQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgxgSQgxgSAAgZIAAg+QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1495.setTransform(-4.6,7.3);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f().s("#484143").ss(1,1,1).p("AAAhbQBFAAAxASQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgxgSQgxgSAAgZIAAg+QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1496.setTransform(-4.6,7.3);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f().s("#484143").ss(1,1,1).p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1497.setTransform(13.2,6.2);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f().s("#484143").ss(1,1,1).p("AClgdQgCAaguAPQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAPQAyAQBAAAQBBAAAygQQAwgPACgWIAAAA").cp();
	this.shape_1498.setTransform(12.7,3.4);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f().s("#484143").ss(1,1,1).p("AB1gpQAwASAAAXQAAAYgwASQgxARhEAAQhDAAgxgRQgwgSAAgYQAAgXAwgSQAxgRBDAAQBEAAAxARIAAAA").cp();
	this.shape_1499.setTransform(12.7,0.5);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f().s("#484143").ss(1,1,1).p("AB2hJQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgwgSQgygSAAgZIAAg+QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1500.setTransform(12.7,3.6);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f().s("#484143").ss(1,1,1).p("AB2hJQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgwgSQgygSAAgZIAAg+QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1501.setTransform(12.7,3.6);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f().s("#484143").ss(1,1,1).p("AB2hJQAxARAAAZIAAA+QAAAZgxASQgxAShFAAQhEAAgwgSQgygSAAgZIAAg+QAAgZAygRQAwgSBEAAQBFAAAxASIAAAA").cp();
	this.shape_1502.setTransform(12.7,3.6);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f().s("#484143").ss(1,1,1).p("ACfAAQAAAfguAVQgwAWhBAAQhBAAgugWQgvgVAAgfQAAgdAvgWQAugWBBAAQBBAAAwAWQAuAWAAAdIAAAA").cp();
	this.shape_1503.setTransform(15.1,6.6);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f().s("#484143").ss(1,1,1).p("AAGAAQAAAAgGAAIgFAAQgBAAAGAAIAGAA").cp();
	this.shape_1504.setTransform(-24.3,-19.8);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f().s("#484143").ss(1,1,1).p("AAqgHQgBAHgLACQgMAFgSABQgQAAgMgEQgMgEAAgFQAAAFANADQAMAEAPgBQARAAAMgFQAMgCABgGIAAAA").cp();
	this.shape_1505.setTransform(-24.5,-20.5);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f().s("#484143").ss(1,1,1).p("AAhAAQAAAEgKADQgKAEgNAAQgMABgKgEQgKgDAAgFQAAgDAKgDQAJgEANgBQANAAAKAEQAKADAAAEIAAAA").cp();
	this.shape_1506.setTransform(-24.5,-21.2);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f().s("#484143").ss(1,1,1).p("AAqAAQAAAFgMAFQgNAEgRABQgQAAgMgEQgNgEAAgHQAAgEAMgFQANgEAQgBQARAAAMAEQANAEAAAGIAAAA").cp();
	this.shape_1507.setTransform(-24.5,-21.2);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f().s("#484143").ss(1,1,1).p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1508.setTransform(-24.4,-19.1);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f().s("#484143").ss(1,1,1).p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1509.setTransform(-24.4,-19.1);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f().s("#484143").ss(1,1,1).p("AAAAlQgUAAgPgFQgPgFgBgIIAJgmQAAgGAMgFQANgFARAAQAQgBANAFQAMAEABAGIAKAmQAAAIgPAGQgPAFgWABIAAAA").cp();
	this.shape_1510.setTransform(-24.4,-19.1);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f().s("#484143").ss(1,1,1).p("AAGAAIgGAAIgFAAIAFAAIAGAA").cp();
	this.shape_1511.setTransform(-24,-17.9);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f().s("#484143").ss(1,1,1).p("AAhgIQAAAGgHADQgKAHgQABQgNAAgLgGQgIgEAAgGQAAAFAJAEQAKAGANgBQAPAAAKgGQAIgDAAgGIAAAA").cp();
	this.shape_1512.setTransform(-24.2,-18.7);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f().s("#484143").ss(1,1,1).p("AAagCQAAADgGAFQgHAFgNABQgKAAgIgFQgHgFAAgDQAAgEAIgDQAHgDAKAAQALAAAHACQAIADAAAEIAAAA").cp();
	this.shape_1513.setTransform(-24.2,-19.3);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f().s("#484143").ss(1,1,1).p("AAigCQAAAEgIAGQgKAGgPABQgOAAgKgGQgJgGAAgEQgBgFAKgDQAKgEANgBQANAAAKADQAKAEABAFIAAAA").cp();
	this.shape_1514.setTransform(-24.2,-19.3);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f().s("#484143").ss(1,1,1).p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1515.setTransform(-24.3,-17.7);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f().s("#484143").ss(1,1,1).p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1516.setTransform(-24.3,-17.7);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f().s("#484143").ss(1,1,1).p("AAAAfQgQABgMgFQgNgEAAgGIAHgiQgBgFAKgEQALgEAOAAQAMAAAKADQAKAEAAAFIAJAhQAAAGgLAFQgNAFgRAAIAAAA").cp();
	this.shape_1517.setTransform(-24.3,-17.7);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f().s("#484143").ss(1,1,1).p("AAIAAIgIAAQgHAAAAAAQAAAAAHAAQAIAAAAAAIAAAA").cp();
	this.shape_1518.setTransform(-24.2,-14);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f().s("#484143").ss(1,1,1).p("Ag2gFQACAFAQAFQAQAEAUgBQAWAAARgHQAPgEABgHQgBAIgPAFQgPAGgYABQgVABgQgFQgPgFgCgGIAAAA").cp();
	this.shape_1519.setTransform(-24.4,-15);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f().s("#484143").ss(1,1,1).p("AA3gBQAAAHgPAGQgRAHgXAAQgVABgQgFQgRgFAAgIQgBgGAQgHQAQgHAXgBQAVAAARAFQARAFAAAIIAAAA").cp();
	this.shape_1520.setTransform(-24.4,-15.9);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f().s("#484143").ss(1,1,1).p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1521.setTransform(-24.3,-13.8);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f().s("#484143").ss(1,1,1).p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1522.setTransform(-24.3,-13.8);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f().s("#484143").ss(1,1,1).p("AglAlQgQgFgBgJIgBgpQgBgIAQgHQARgGAXgBQAVgBARAFQAQAGABAIIABApQABAIgQAHQgQAGgYABQgVABgRgFIAAAA").cp();
	this.shape_1523.setTransform(-24.3,-13.8);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f().s("#484143").ss(1,1,1).p("AAwgBQABAHgOAHQgOAHgVABQgSABgOgFQgPgGAAgIQgBgHAOgHQAOgIAUgBQASgBAPAGQAOAFABAJIAAAA").cp();
	this.shape_1524.setTransform(-24.6,-16.1);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f().s("#484143").ss(1,1,1).p("AAHAAIgHAAQgFABgBgBQADAAADAAIAHAA").cp();
	this.shape_1525.setTransform(-24,-12.4);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f().s("#484143").ss(1,1,1).p("AglgHQABAGAKADQAMAHAPAAQAQgBALgHQAJgEABgGQgBAHgIAEQgLAIgRAAQgQABgMgHQgJgEgBgHIAAAA").cp();
	this.shape_1526.setTransform(-24.2,-13.5);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f().s("#484143").ss(1,1,1).p("AAdgCQABADgHAGQgJAGgOAAQgMABgJgGQgIgFAAgEQAAgFAJgDQAJgDALAAQAMgBAIADQAJADAAAFIAAAA").cp();
	this.shape_1527.setTransform(-24.2,-14.1);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f().s("#484143").ss(1,1,1).p("AAmgCQAAAFgJAGQgLAHgSABQgPAAgMgHQgKgGAAgFQAAgFALgFQALgEAPAAQAPgBALAEQALAEABAGIAAAA").cp();
	this.shape_1528.setTransform(-24.2,-14.1);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f().s("#484143").ss(1,1,1).p("AAAAjQgSABgOgFQgOgFAAgHIAHgmQAAgGALgEQAMgEAQgBQANAAAMAEQALAEABAFIAKAmQAAAHgOAGQgNAFgUAAIAAAA").cp();
	this.shape_1529.setTransform(-24.3,-12.3);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f().s("#484143").ss(1,1,1).p("AAAAjQgSABgOgFQgOgFAAgHIAHgmQAAgGALgEQAMgEAQgBQANAAAMAEQALAEABAFIAKAmQAAAHgOAGQgNAFgUAAIAAAA").cp();
	this.shape_1530.setTransform(-24.3,-12.3);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f().s("#484143").ss(1,1,1).p("AAAAjQgSABgOgFQgOgFAAgHIAHgmQAAgGALgEQAMgEAQgBQANAAAMAEQALAEABAFIAKAmQAAAHgOAGQgNAFgUAAIAAAA").cp();
	this.shape_1531.setTransform(-24.3,-12.3);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f().s("#484143").ss(1,1,1).p("AA3gBQAAAHgPAGQgRAHgXAAQgVABgQgFQgRgFAAgIQgBgGAQgHQAQgHAXgBQAVAAARAFQARAFAAAIIAAAA").cp();
	this.shape_1532.setTransform(-24.4,-10.1);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f().s("#484143").ss(1,1,1).p("AACApQgSABgOgFQgOgFAAgIIgKgpQgBgIAQgHQARgHAWgBQAWAAARAFQAQAFABAIIgHAqQAAAIgOAGQgNAGgUABIAAAA").cp();
	this.shape_1533.setTransform(-24.4,-8.1);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f().s("#484143").ss(1,1,1).p("AACApQgSABgOgFQgOgFAAgIIgKgpQgBgIAQgHQARgHAWgBQAWAAARAFQAQAFABAIIgHAqQAAAIgOAGQgNAGgUABIAAAA").cp();
	this.shape_1534.setTransform(-24.4,-8.1);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f().s("#484143").ss(1,1,1).p("AACApQgSABgOgFQgOgFAAgIIgKgpQgBgIAQgHQARgHAWgBQAWAAARAFQAQAFABAIIgHAqQAAAIgOAGQgNAGgUABIAAAA").cp();
	this.shape_1535.setTransform(-24.4,-8.1);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f().s("#484143").ss(1,1,1).p("AAGAAIgGAAIgFAAQAAAAAFAAIAGAA").cp();
	this.shape_1536.setTransform(-24.5,-10.7);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f().s("#484143").ss(1,1,1).p("AAmgGQABAGgMACQgLAFgQAAQgPABgLgFQgLgDgBgEQABAEALACQAMAEAOAAQAPgBAMgEQALgCAAgFIAAAA").cp();
	this.shape_1537.setTransform(-24.6,-11.4);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f().s("#484143").ss(1,1,1).p("AAaAAQAAADgIADQgHADgLAAQgJAAgIgCQgIgDAAgEQgBgCAIgDQAIgDAKAAQAKAAAIACQAIADAAADIAAAA").cp();
	this.shape_1538.setTransform(-24.6,-12);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f().s("#484143").ss(1,1,1).p("AAnAAQAAAEgMAFQgLAEgQABQgOAAgMgEQgMgEAAgGQAAgDALgFQAMgEAPgBQAPAAAMAEQAMAEAAAFIAAAA").cp();
	this.shape_1539.setTransform(-24.6,-12);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1540.setTransform(-24.3,-7.1);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1541.setTransform(-24.3,-7.1);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1542.setTransform(-24.3,-7.1);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f().s("#484143").ss(1,1,1).p("AABA8QgOABgMgEQgMgEAAgGIgDhbQAAgGAMgFQALgEAQAAQAPgBAMAEQALAEAAAGIAEBbQAAAGgMAFQgLAEgRAAIAAAA").cp();
	this.shape_1543.setTransform(-24.3,-7.1);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f().s("#484143").ss(1,1,1).p("AAHAAIgHAAIgGAAIAGAAQAHAAAAAAIAAAA").cp();
	this.shape_1544.setTransform(-24,-0.5);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f().s("#484143").ss(1,1,1).p("AgtgGQAAAGAOACQAOAFARAAQASgBAOgEQAOgDAAgGQAAAHgNADQgOAFgTAAQgSABgOgFQgNgEAAgGIAAAA").cp();
	this.shape_1545.setTransform(-24.1,-1.3);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f().s("#484143").ss(1,1,1).p("AAuAAQABAGgOAFQgOAFgTAAQgSABgNgFQgOgFAAgHQgBgFAOgFQAOgFASAAQATgBAOAFQANAFAAAGIAAAA").cp();
	this.shape_1546.setTransform(-24.1,-2.1);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f().s("#484143").ss(1,1,1).p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgRAAgOgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1547.setTransform(-24.1,-0.3);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f().s("#484143").ss(1,1,1).p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgRAAgOgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1548.setTransform(-24.1,-0.3);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f().s("#484143").ss(1,1,1).p("AAvgRIAAAiQAAAHgNAFQgOAFgUABQgRAAgOgFQgOgFgBgHIAAgiQAAgHAOgGQAOgFASAAQATAAAOAFQAOAFAAAHIAAAA").cp();
	this.shape_1549.setTransform(-24.1,-0.3);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f().s("#484143").ss(1,1,1).p("AAFAAQAAAAgFAAIgEAAQAAAAAEAAIAFAA").cp();
	this.shape_1550.setTransform(29.9,-20.9);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f().s("#484143").ss(1,1,1).p("AAUAEQgJADgLgBQgMgBgJgEQgIgBAAgFQAAAEAJABQAJAEALABQALABAJgDQAJgCABgCQgBADgJACIAAAA").cp();
	this.shape_1551.setTransform(29.9,-21.5);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f().s("#484143").ss(1,1,1).p("AAVABQAAADgHACQgGACgIgBQgUgBAAgGQAAgDAHgCQAGgCAHABQAJABAGACQAHADgBABIAAAA").cp();
	this.shape_1552.setTransform(29.9,-22);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f().s("#484143").ss(1,1,1).p("AAdABQgBAFgIADQgJACgLgBQgLgBgJgEQgIgEAAgCQABgEAIgCQAJgDAKABQAMABAJAEQAIADAAACIAAAA").cp();
	this.shape_1553.setTransform(29.9,-22);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f().s("#484143").ss(1,1,1).p("AApiGIgVESQAAAEgKADQgJACgLgBQgMAAgJgEQgJgEAAgFIAVkSQAAgEAJgDQAKgCAKAAQANABAJAEQAJAEAAAFIAAAA").cp();
	this.shape_1554.setTransform(28.9,-8.2);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f().s("#484143").ss(1,1,1).p("AApiGIgVESQAAAEgKADQgJACgLgBQgMAAgJgEQgJgEAAgFIAVkSQAAgEAJgDQAKgCAKAAQANABAJAEQAJAEAAAFIAAAA").cp();
	this.shape_1555.setTransform(28.9,-8.2);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f().s("#484143").ss(1,1,1).p("AApiGIgVESQAAAEgKADQgJACgLgBQgMAAgJgEQgJgEAAgFIAVkSQAAgEAJgDQAKgCAKAAQANABAJAEQAJAEAAAFIAAAA").cp();
	this.shape_1556.setTransform(28.9,-8.2);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f().s("#484143").ss(1,1,1).p("ADJAtQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeQAAhNBLgvQA9glBAAAQA/AAA/AoQBLAxAABIIAAAA").cp();
	this.shape_1557.setTransform(14,12.3);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f().s("#484143").ss(1,1,1).p("ADEAPQAAAdg6AVQg5AUhRAAQhQAAg5gUQg6gVAAgdIAAgdQAAgdA6gVQA5gUBQAAQBRAAA5AUQA6AVAAAdIAAAd").cp();
	this.shape_1558.setTransform(14,19.6);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f().s("#484143").ss(1,1,1).p("AB6AbQAAASgkANQgkANgyAAQgyAAgkgNQgkgNAAgSQAAguAugcQAlgXAnAAQAmAAAnAZQAtAdAAArIAAAA").cp();
	this.shape_1559.setTransform(24.9,10.8);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f().s("#484143").ss(1,1,1).p("AB3AJQAAARgjANQgjANgxAAQgwAAgjgNQgjgNAAgRIAAgRQAAgSAjgMQAjgNAwAAQAxAAAjANQAjAMAAASIAAAR").cp();
	this.shape_1560.setTransform(24.9,15.3);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f().s("#484143").ss(1,1,1).p("AgFAAQAAAAAFAAIAGAAIgLAA").cp();
	this.shape_1561.setTransform(9.5,-32.8);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f().s("#484143").ss(1,1,1).p("AgmgFQABAFAMADQAMADANAAQAPgBAMgEQALgCABgFQgBAFgKADQgMAFgQAAQgOABgMgEQgLgEgBgFIAAAA").cp();
	this.shape_1562.setTransform(9.3,-33.5);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f().s("#484143").ss(1,1,1).p("AAnAAQAAAEgMAFQgLAEgQABQgPAAgLgEQgMgEAAgFQAAgEALgFQAMgEAPgBQAPAAAMAEQALAEABAFIAAAA").cp();
	this.shape_1563.setTransform(9.4,-34.1);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f().s("#484143").ss(1,1,1).p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1564.setTransform(9.9,-16.3);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f().s("#484143").ss(1,1,1).p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1565.setTransform(9.9,-16.3);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f().s("#484143").ss(1,1,1).p("AAiiyIAKFjQAAAGgLAEQgMAFgQAAQgPABgLgEQgMgEAAgGIgKljQgBgGAMgFQALgEARgBQAOAAAMAEQAMAEAAAGIAAAA").cp();
	this.shape_1566.setTransform(9.9,-16.3);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f().s("#484143").ss(1,1,1).p("AAVAAQAAACgVAAQgUAAAAgCQAAgBAUAAQAVAAAAABIAAAA").cp();
	this.shape_1567.setTransform(-18.9,6.7);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f().s("#484143").ss(1,1,1).p("ABaAGQAngLABgRQgBATglAMQgmAPg2AAQg1AAgmgPQglgMgBgUQABASAmALQAnANAzAAQAzAAAngNIAAAA").cp();
	this.shape_1568.setTransform(-19.3,4.5);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f().s("#484143").ss(1,1,1).p("ABdggQAmAOAAASQAAATgmAOQgnAOg2AAQg1AAgmgOQgngOAAgTQAAgSAngOQAmgOA1AAQA2AAAnAOIAAAA").cp();
	this.shape_1569.setTransform(-19.3,2.2);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f().s("#484143").ss(1,1,1).p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1570.setTransform(-19.3,4.7);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f().s("#484143").ss(1,1,1).p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1571.setTransform(-19.3,4.7);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f().s("#484143").ss(1,1,1).p("ABdg5QAnANAAAUIAAAxQAAAUgnAOQgnAOg2AAQg1AAgngOQgngOAAgUIAAgxQAAgUAngNQAngOA1AAQA3AAAmAOIAAAA").cp();
	this.shape_1572.setTransform(-19.3,4.7);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f().s("#484143").ss(1,1,1).p("AB+AAQAAAYglARQgmASgzAAQgzAAglgSQglgRAAgYQAAgXAlgRQAlgSAzAAQAzAAAmASQAlARAAAXIAAAA").cp();
	this.shape_1573.setTransform(-18.4,7);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f().s("#484143").ss(1,1,1).p("ACfAAQAAAfgvAVQguAWhCAAQhBAAgugWQgvgVAAgfQAAgdAvgWQAugWBBAAQBCAAAuAWQAvAWAAAdIAAAA").cp();
	this.shape_1574.setTransform(-16.4,7.6);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f().s("#484143").ss(1,1,1).p("ACfAkQAAAXgvARQgvARhBAAQhBAAgugRQgvgRAAgXQAAg9A7glQAwgeAzAAQAyAAAxAgQA8AnAAA5IAAAA").cp();
	this.shape_1575.setTransform(-19.3,11.6);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f().s("#484143").ss(1,1,1).p("ACbAMQAAAXgtAQQguAQhAAAQg/AAgugQQgtgQAAgXIAAgXQAAgXAtgQQAugQA/AAQBAAAAuAQQAtAQAAAXIAAAX").cp();
	this.shape_1576.setTransform(-19.2,17.3);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.lf(["#6C5A20","#52451B"],[0,1],0,-0.8,0,0.7).s().p("AATAJIglAAIAAgRIAlAAIAAAR").cp();
	this.shape_1577.setTransform(8.2,-32.7);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0,0,0,0,0,21.8).s().p("AAAi3QBcAABBA2QBBA2AABLQAABMhBA1QhBA3hcAAQhbAAhBg3QhBg1AAhMQAAhLBBg2QBBg2BbAAIAAAA").cp();
	this.shape_1578.setTransform(-4.1,3.5);

	this.addChild(this.shape_1578,this.shape_1577,this.shape_1576,this.shape_1575,this.shape_1574,this.shape_1573,this.shape_1572,this.shape_1571,this.shape_1570,this.shape_1569,this.shape_1568,this.shape_1567,this.shape_1566,this.shape_1565,this.shape_1564,this.shape_1563,this.shape_1562,this.shape_1561,this.shape_1560,this.shape_1559,this.shape_1558,this.shape_1557,this.shape_1556,this.shape_1555,this.shape_1554,this.shape_1553,this.shape_1552,this.shape_1551,this.shape_1550,this.shape_1549,this.shape_1548,this.shape_1547,this.shape_1546,this.shape_1545,this.shape_1544,this.shape_1543,this.shape_1542,this.shape_1541,this.shape_1540,this.shape_1539,this.shape_1538,this.shape_1537,this.shape_1536,this.shape_1535,this.shape_1534,this.shape_1533,this.shape_1532,this.shape_1531,this.shape_1530,this.shape_1529,this.shape_1528,this.shape_1527,this.shape_1526,this.shape_1525,this.shape_1524,this.shape_1523,this.shape_1522,this.shape_1521,this.shape_1520,this.shape_1519,this.shape_1518,this.shape_1517,this.shape_1516,this.shape_1515,this.shape_1514,this.shape_1513,this.shape_1512,this.shape_1511,this.shape_1510,this.shape_1509,this.shape_1508,this.shape_1507,this.shape_1506,this.shape_1505,this.shape_1504,this.shape_1503,this.shape_1502,this.shape_1501,this.shape_1500,this.shape_1499,this.shape_1498,this.shape_1497,this.shape_1496,this.shape_1495,this.shape_1494,this.shape_1493,this.shape_1492,this.shape_1491,this.shape_1490,this.shape_1489,this.shape_1488,this.shape_1487,this.shape_1486,this.shape_1485,this.shape_1484,this.shape_1483,this.shape_1482,this.shape_1481,this.shape_1480,this.shape_1479,this.shape_1478,this.shape_1477,this.shape_1476,this.shape_1475,this.shape_1474,this.shape_1473,this.shape_1472,this.shape_1471,this.shape_1470,this.shape_1469,this.shape_1468,this.shape_1467,this.shape_1466,this.shape_1465,this.shape_1464,this.shape_1463,this.shape_1462,this.shape_1461,this.shape_1460,this.shape_1459,this.shape_1458,this.shape_1457,this.shape_1456,this.shape_1455,this.shape_1454,this.shape_1453,this.shape_1452,this.shape_1451,this.shape_1450,this.shape_1449,this.shape_1448,this.shape_1447,this.shape_1446,this.shape_1445,this.shape_1444,this.shape_1443,this.shape_1442,this.shape_1441,this.shape_1440,this.shape_1439,this.shape_1438,this.shape_1437,this.shape_1436,this.shape_1435,this.shape_1434,this.shape_1433,this.shape_1432,this.shape_1431,this.shape_1430,this.shape_1429,this.shape_1428,this.shape_1427,this.shape_1426,this.shape_1425,this.shape_1424,this.shape_1423,this.shape_1422,this.shape_1421,this.shape_1420,this.shape_1419,this.shape_1418,this.shape_1417,this.shape_1416,this.shape_1415,this.shape_1414,this.shape_1413,this.shape_1412,this.shape_1411,this.shape_1410,this.shape_1409,this.shape_1408,this.shape_1407,this.shape_1406,this.shape_1405,this.shape_1404,this.shape_1403,this.shape_1402,this.shape_1401,this.shape_1400,this.shape_1399,this.shape_1398,this.shape_1397,this.shape_1396,this.shape_1395,this.shape_1394,this.shape_1393,this.shape_1392,this.shape_1391,this.shape_1390,this.shape_1389,this.shape_1388,this.shape_1387,this.shape_1386,this.shape_1385,this.shape_1384,this.shape_1383,this.shape_1382,this.shape_1381,this.shape_1380,this.shape_1379,this.shape_1378,this.shape_1377,this.shape_1376,this.shape_1375,this.shape_1374,this.shape_1373,this.shape_1372,this.shape_1371,this.shape_1370,this.shape_1369,this.shape_1368,this.shape_1367,this.shape_1366,this.shape_1365,this.shape_1364,this.shape_1363,this.shape_1362,this.shape_1361,this.shape_1360,this.shape_1359,this.shape_1358,this.shape_1357,this.shape_1356,this.shape_1355,this.shape_1354,this.shape_1353,this.shape_1352,this.shape_1351,this.shape_1350,this.shape_1349,this.shape_1348,this.shape_1347,this.shape_1346,this.shape_1345,this.shape_1344,this.shape_1343,this.shape_1342,this.shape_1341,this.shape_1340,this.shape_1339,this.shape_1338,this.shape_1337,this.shape_1336,this.shape_1335,this.shape_1334,this.shape_1333,this.shape_1332,this.shape_1331,this.shape_1330,this.shape_1329,this.shape_1328,this.shape_1327,this.shape_1326,this.shape_1325,this.shape_1324,this.shape_1323,this.shape_1322,this.shape_1321,this.shape_1320,this.shape_1319,this.shape_1318,this.shape_1317,this.shape_1316,this.shape_1315,this.shape_1314,this.shape_1313,this.shape_1312,this.shape_1311,this.shape_1310,this.shape_1309,this.shape_1308,this.shape_1307,this.shape_1306,this.shape_1305,this.shape_1304,this.shape_1303,this.shape_1302,this.shape_1301,this.shape_1300,this.shape_1299,this.shape_1298,this.shape_1297,this.shape_1296,this.shape_1295,this.shape_1294,this.shape_1293,this.shape_1292,this.shape_1291,this.shape_1290,this.shape_1289,this.shape_1288,this.shape_1287,this.shape_1286,this.shape_1285,this.shape_1284,this.shape_1283,this.shape_1282,this.shape_1281,this.shape_1280,this.shape_1279,this.shape_1278,this.shape_1277,this.shape_1276,this.shape_1275,this.shape_1274,this.shape_1273,this.shape_1272,this.shape_1271,this.shape_1270,this.shape_1269,this.shape_1268,this.shape_1267,this.shape_1266,this.shape_1265,this.shape_1264,this.shape_1263,this.shape_1262,this.shape_1261,this.shape_1260,this.shape_1259,this.shape_1258,this.shape_1257,this.shape_1256,this.shape_1255,this.shape_1254,this.shape_1253,this.shape_1252,this.shape_1251,this.shape_1250,this.shape_1249,this.shape_1248,this.shape_1247,this.shape_1246,this.shape_1245,this.shape_1244,this.shape_1243,this.shape_1242,this.shape_1241,this.shape_1240,this.shape_1239,this.shape_1238,this.shape_1237);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.7,-49.7,91.6,99.7);


(lib.Mine = function() {
	this.initialize();

	// Layer 1
	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("rgba(0,0,0,0.349)").s().p("AACBMIgDAAIAAiXIADAAIAACX").cp();
	this.shape_1579.setTransform(-4.6,29.9);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#B99C41").s().p("AA4gDQgYgVgggBQgiAAgWAUQgOAKgOAaQABgUAUgVQAYgdAjABQAmABAaAYQAaAWgCAfQgJgcgTgPIAAAA").cp();
	this.shape_1580.setTransform(-4.4,24.1);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.lf(["#988137","#73612C"],[0,1],0.1,-7.9,0.1,8.1).s().p("AA0gtQgYgYgcAAQgeAAgXAVQgSAQgBAMQgCAKgCBbIgJAAQAAhZABgKQADgQARgTQAZgcAkABQAlAAAcAcQAYAYgBASQgBARACBKIgKABIgEhbQgBgPgTgVIAAAA").cp();
	this.shape_1581.setTransform(-4.4,29.3);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.263,0.459,1],0,-15.4,0,15.6).s().p("ABWgbIirAAIAKAnQAnAQAkAAQAiAAAqgQIAKgn").cp();
	this.shape_1582.setTransform(-4.4,40.4);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.165,0.831,1],-8.5,0,8.7,0).s().p("ABWgbIirAAIAKAnQAnAQAkAAQAiAAAqgQIAKgn").cp();
	this.shape_1583.setTransform(-4.4,40.4);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#807D74").s().p("ABWgbIirAAIAKAnQAnAQAkAAQAiAAAqgQIAKgn").cp();
	this.shape_1584.setTransform(-4.4,40.4);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#68655E").s().p("ABUgkIinACIAGA2QAnAQAkAAQAiAAAqgQIAKg4").cp();
	this.shape_1585.setTransform(-4.2,41.2);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.486,1],0,-8.4,0,8.6).s().p("ABMBUIiXAAIAAhfQAAgfAYgVQAXgUAcAAQAaAAAYAWQAaAWAAAcIAABf").cp();
	this.shape_1586.setTransform(-4.4,30.7);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-7.5,0,7.6,0).s().p("ABMBUIiXAAIAAhfQAAgfAYgVQAXgUAcAAQAaAAAYAWQAaAWAAAcIAABf").cp();
	this.shape_1587.setTransform(-4.4,30.7);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#445F94").s().p("ABMBUIiXAAIAAhfQAAgfAYgVQAXgUAcAAQAaAAAYAWQAaAWAAAcIAABf").cp();
	this.shape_1588.setTransform(-4.4,30.7);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.rf(["#78766D","rgba(125,122,113,0.424)","rgba(128,125,116,0)"],[0.792,0.945,1],0,-2.2,0,0,-2.2,14.2).s().p("AB7ADQAAAZgHACQgHADhEAAQhCAAgxgRQgwgQAAgYQAAgRAwAQQBJAYAqAAQArAAAggKQAGgBABACQAAACAAALIAAAA").cp();
	this.shape_1589.setTransform(-8.2,34.7);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1590.setTransform(11.9,25.8);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1591.setTransform(10.8,26.6);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.3,0,0.1,-5.3,7.4).s().p("AA+gZIAFAMIAEAMQABACgBAJQACAFgBAHQgCALAAACQgDAFgGAFQAAAAgLAGQgHAFgEABQgJAAgEABQgIADgEABIgkgCQgLgDgBAAQgCgBgJgFQgCgBgHgIQgGgFgDgEIgFgLQgBgCgCgKQgBgFABgHQABgDADgJQAEgHACgEIAIgKQAGgHACgCIAKgIQAJgFADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADACQAEACAGAGIAJAJIAHAK").cp();
	this.shape_1592.setTransform(11.4,32.5);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.lf(["#639D30","#5E9336","#5B8D33","#537B2D","#465F23","#455D22"],[0,0.514,0.631,0.796,0.984,1],0,-6,0.1,6.2).s().p("AA+gZIAFAMIAEAMQABACgBAJQACAFgBAHQgCALAAACQgDAFgGAFQAAAAgLAGQgHAFgEABQgJAAgEABQgIADgEABIgkgCQgLgDgBAAQgCgBgJgFQgCgBgHgIQgGgFgDgEIgFgLQgBgCgCgKQgBgFABgHQABgDADgJQAEgHACgEIAIgKQAGgHACgCIAKgIQAJgFADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADACQAEACAGAGIAJAJIAHAK").cp();
	this.shape_1593.setTransform(11.4,32.5);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1594.setTransform(19.7,19.7);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1595.setTransform(18.3,20.8);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-6.8,0,0.2,-6.8,9.4).s().p("AA5g2QADADAIAFIAIALQACADACAJQACAEAFAHQAAABADALQABADgBAJQABAJAAAEQAAABAAAGQAAAEgBACQgCAGgEAFQgBABgJAIQgEADgGAGQgCABgFAAQgEAAgCABQgIAFgEABIgaACQgIACgEAAQgHABgEAAIgNgDQgIgDgEgBQgIgBgEgBQgIgDgEgDQgDgCgHgFQgFgHgDgDQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgJACgEQAGgHACgEQAFgIADgDIAUgRIAMgHIAZgHQAHgBAFAAIANAAQACABAKADQAFABAHAFIAUAP").cp();
	this.shape_1596.setTransform(18.2,26.8);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-7.7,0.1,8).s().p("AA5g2QADADAIAFIAIALQACADACAJQACAEAFAHQAAABADALQABADgBAJQABAJAAAEQAAABAAAGQAAAEgBACQgCAGgEAFQgBABgJAIQgEADgGAGQgCABgFAAQgEAAgCABQgIAFgEABIgaACQgIACgEAAQgHABgEAAIgNgDQgIgDgEgBQgIgBgEgBQgIgDgEgDQgDgCgHgFQgFgHgDgDQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgJACgEQAGgHACgEQAFgIADgDIAUgRIAMgHIAZgHQAHgBAFAAIANAAQACABAKADQAFABAHAFIAUAP").cp();
	this.shape_1597.setTransform(18.2,26.8);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#EADFB7").s().p("AAGAAIgGAAIgFAAIAFAAQAGAAAAAAIAAAA").cp();
	this.shape_1598.setTransform(21.5,-45.8);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#363431").s().p("AAhABQAAAFgKADQgKADgNAAQgNgBgJgDQgKgEAAgEQAAgEAKgEQAKgDAMABQAOABAJADQAKAEAAADIAAAA").cp();
	this.shape_1599.setTransform(21.4,-47.3);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#B0AB9E").s().p("AAqABQgBAGgMAEQgNAEgQgBQgRAAgMgFQgMgFAAgEQAAgHANgEQANgDAPAAQARABANAFQAMAFAAAEIAAAA").cp();
	this.shape_1600.setTransform(21.4,-47.3);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.2,-3.6,0,3.7).s().p("AA0ATQgBAIgPAFQgPAFgVgBQgVAAgPgHQgPgGAAgIIALglQAAgHANgEQANgDAPAAQASABANAFQAMAFAAAGIAIAm").cp();
	this.shape_1601.setTransform(21.3,-45.1);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.5,0,0,1.5,3.2).s().p("AA0ATQgBAIgPAFQgPAFgVgBQgVAAgPgHQgPgGAAgIIALglQAAgHANgEQANgDAPAAQASABANAFQAMAFAAAGIAIAm").cp();
	this.shape_1602.setTransform(21.3,-45.1);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#EADFB7").s().p("AAGAAQgDAAgDAAIgFAAIAFAAQAGAAAAAAIAAAA").cp();
	this.shape_1603.setTransform(21.7,-43.9);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#C1B797").s().p("AAZADQAHgDABgGQAAAGgIAEQgKAGgPgBQgPAAgKgHQgHgEgBgGQABAFAIAEQAKAGAOABQAOAAALgFIAAAA").cp();
	this.shape_1604.setTransform(21.6,-44.8);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#363431").s().p("AAaAAQAAADgGAEQgIAGgMgBQgKAAgIgGQgHgFAAgDQAAgEAIgCQAIgDAJAAQALABAIADQAIADgBAEIAAAA").cp();
	this.shape_1605.setTransform(21.6,-45.4);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#B0AB9E").s().p("AAiAAQgBAEgIAFQgKAGgPAAQgOgBgKgHQgJgGABgEQAAgFAKgDQAKgDAMAAQAOABAKAEQAKAEAAAFIAAAA").cp();
	this.shape_1606.setTransform(21.6,-45.4);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.2,-3,0,3.2).s().p("AApASQAAAGgMAEQgNAEgQgBQgRAAgMgFQgLgFAAgHIAIghQAAgFAKgDQALgDAMAAQAOABAKAEQAKAEAAAFIAGAi").cp();
	this.shape_1607.setTransform(21.5,-43.8);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.3,0,0,1.3,2.6).s().p("AApASQAAAGgMAEQgNAEgQgBQgRAAgMgFQgLgFAAgHIAIghQAAgFAKgDQALgDAMAAQAOABAKAEQAKAEAAAFIAGAi").cp();
	this.shape_1608.setTransform(21.5,-43.8);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#EADFB7").s().p("AAIAAQgEABgEgBQgHAAAAAAQAAAAAHAAQAIAAAAAAIAAAA").cp();
	this.shape_1609.setTransform(21.3,-40.1);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#C1B797").s().p("AAzgFQgBAGgPAFQgPAFgUgBQgWgBgOgHQgOgDAAgIQAAAHAPADQAPAGAUABQATABAPgFQAQgEABgFIAAAA").cp();
	this.shape_1610.setTransform(21.2,-41);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#B0AB9E").s().p("AAzACQAAAIgPAFQgQAEgUgBQgVAAgPgHQgPgGABgGQAAgIAQgFQAPgEATABQAWABAPAGQAPAGgBAGIAAAA").cp();
	this.shape_1611.setTransform(21.2,-41.9);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.2,-3.7,0,3.9).s().p("AAzAWQgBAIgPAFQgQAEgTgBQgWgBgPgGQgPgGAAgIIACgmQABgIAPgFQAQgEATABQAWABAPAGQAPAGAAAIIgCAm").cp();
	this.shape_1612.setTransform(21.1,-39.9);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.6,0,0,1.6,3.2).s().p("AAzAWQgBAIgPAFQgQAEgTgBQgWgBgPgGQgPgGAAgIIACgmQABgIAPgFQAQgEATABQAWABAPAGQAPAGAAAIIgCAm").cp();
	this.shape_1613.setTransform(21.1,-39.9);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#464540").s().p("AAaABQAAAEgIACQgIADgKgBQgKAAgIgDQgHgDAAgDQAAgDAIgDQAIgDAJABQALABAIADQAIADgBACIAAAA").cp();
	this.shape_1614.setTransform(20.8,-38.1);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#B0AB9E").s().p("AAnABQAAAGgMAEQgMADgPAAQgPgBgMgFQgLgEAAgEQABgGALgDQAMgEAOABQAQAAAMAFQALAEAAAEIAAAA").cp();
	this.shape_1615.setTransform(20.8,-38.1);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.lf(["#484642","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","#737069"],[0.082,0.11,0.141,0.173,0.204,1],0.3,-5.9,-0.1,6.1).s().p("AAmAvQAAAGgMAEQgMAEgOgBQgRAAgLgFQgMgFABgFIAChbQAAgGAMgEQAMgEAOABQARABALAEQAMAFgBAFIgCBb").cp();
	this.shape_1616.setTransform(20.8,-33.2);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.5,0,0,2.5,3).s().p("AAmAvQAAAGgMAEQgMAEgOgBQgRAAgLgFQgMgFABgFIAChbQAAgGAMgEQAMgEAOABQARABALAEQAMAFgBAFIgCBb").cp();
	this.shape_1617.setTransform(20.8,-33.2);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#C1B797").s().p("AAgAEQANgDABgFQgBAGgNAEQgNAEgTgBQgTgBgNgGQgOgDABgIQAAAHAOADQANAGASAAQARABAPgEIAAAA").cp();
	this.shape_1618.setTransform(20.6,-27.5);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#B0AB9E").s().p("AAuABQAAAHgOAFQgOAEgSgBQgTgBgNgFQgOgGAAgFQABgHAOgEQAOgEARAAQATABAOAGQAOAGgBAEIAAAA").cp();
	this.shape_1619.setTransform(20.7,-28.2);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0.2,-3.4,0,3.6).s().p("AAigbQAOAGAAAHIgCAiQgBAHgOAEQgOAFgRgBQgUgBgNgGQgOgGAAgHIACgiQAAgHAOgEQAOgEASAAQAUABANAGIAAAA").cp();
	this.shape_1620.setTransform(20.6,-26.4);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.4,0,0,1.4,2.9).s().p("AAigbQAOAGAAAHIgCAiQgBAHgOAEQgOAFgRgBQgUgBgNgGQgOgGAAgHIACgiQAAgHAOgEQAOgEASAAQAUABANAGIAAAA").cp();
	this.shape_1621.setTransform(20.6,-26.4);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAUANIgnAAIAAgZIAnAAIAAAZ").cp();
	this.shape_1622.setTransform(-18.9,19.6);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAUAXIgogUIAAgYIAoAUIAAAY").cp();
	this.shape_1623.setTransform(-18.8,15.9);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.lf(["rgba(94,91,85,0)","#5E5B55","#5E5B55","rgba(94,91,85,0)"],[0.008,0.165,0.882,0.992],1.2,0,-1,0).s().p("AgKAIIAVAKIAAgZIgVgKIAAAZ").cp();
	this.shape_1624.setTransform(-18.5,26.6);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.lf(["rgba(94,91,85,0)","#5E5B55","#5E5B55","rgba(94,91,85,0)"],[0.008,0.165,0.882,0.992],-1,0,1.2,0).s().p("AAMAIIgWAKIAAgZIAWgKIAAAZ").cp();
	this.shape_1625.setTransform(9.7,27);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1626.setTransform(-12.4,30.1);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1627.setTransform(-8.6,17.3);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-11.5,0,11.2).s().p("AAAhyQA+AAA+AoQBKAwAABGQAAAeg6AUQg7AVhRAAQhRAAg6gVQg6gUAAgeQAAhLBKguQA7glBAAAIAAAA").cp();
	this.shape_1628.setTransform(-4,-0.7);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("AAAhTQBPAAA5AUQA5AVAAAcIAAAcQAAAdg5AUQg4AVhQAAQhPAAg4gVQg5gUAAgdIAAgcQAAgcA5gVQA5gUBOAAIAAAA").cp();
	this.shape_1629.setTransform(-4,6.4);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f().s("#BEB184").ss(1,0,0,4).p("AC9gkQAAAdg3ASQg4AVhOAAQhNAAg4gVQg3gSAAgd");
	this.shape_1630.setTransform(-4,12.6);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#4A3F19").s().p("ACGAOQg4AUhOAAQhNAAg4gUQg3gSAAgdIF5AAQAAAdg3ASIAAAA").cp();
	this.shape_1631.setTransform(-4,12.3);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-14.5,0,14.2).s().p("AB2CBQgxAMhFAAQhEAAgwgMQgxgNAAgTQAAgCgGgoQgJg5gLiKQAEAaA0ASQA5AVBOAAQBPAAA5gVQAzgSAFgZQgMBygKBQQgDAZAAARQAAATgxANIAAAA").cp();
	this.shape_1632.setTransform(-4.1,21.4);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,5.6,0,0,5.6,11.7).s().p("AB2CBQgxAMhFAAQhEAAgwgMQgxgNAAgTQAAgCgGgoQgJg5gLiKQAEAaA0ASQA5AVBOAAQBPAAA5gVQAzgSAFgZQgMBygKBQQgDAZAAARQAAATgxANIAAAA").cp();
	this.shape_1633.setTransform(-4.1,21.4);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#363531").s().p("AAWAAQAAACgGADQgHACgJABQgIAAgGgCQgHgCAAgEQAAgBAHgDQAGgCAIAAQAIgBAHADQAHACAAACIAAAA").cp();
	this.shape_1634.setTransform(9.2,-42.2);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#B0AB9E").s().p("AAfAAQABADgKAEQgJAEgNAAQgLABgKgEQgJgDAAgEQAAgDAJgEQAJgDAMgBQANAAAJADQAJADAAAEIAAAA").cp();
	this.shape_1635.setTransform(9.2,-42.2);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-4.5,0.2,4.7).s().p("AAfgjIACBFQAAAEgJAEQgKADgNABQgLAAgKgDQgJgDgBgFIgChEQAAgFAKgDQAJgEANAAQALgBAKAEQAKADAAAEIAAAA").cp();
	this.shape_1636.setTransform(9.3,-38.7);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.9,0,0,1.9,2.4).s().p("AAfgjIACBFQAAAEgJAEQgKADgNABQgLAAgKgDQgJgDgBgFIgChEQAAgFAKgDQAJgEANAAQALgBAKAEQAKADAAAEIAAAA").cp();
	this.shape_1637.setTransform(9.3,-38.7);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#C1B797").s().p("AAAAHQgPAAgLgFQgLgCAAgGQAAAFALACQAMAEAOABQAPABAMgEQAJgDACgCQgCADgJADQgLAEgQgBIAAAA").cp();
	this.shape_1638.setTransform(20.5,-38);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#464540").s().p("AAaABQAAAEgIACQgIADgKgBQgJAAgIgDQgIgDAAgDQAAgDAIgDQAIgDAJABQALAAAIADQAIAEgBACIAAAA").cp();
	this.shape_1639.setTransform(20.5,-38.6);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#B0AB9E").s().p("AAnABQAAAGgMAEQgMADgPAAQgPgBgLgFQgMgEAAgEQABgGALgDQAMgEAOAAQARABALAFQALAEAAAEIAAAA").cp();
	this.shape_1640.setTransform(20.5,-38.6);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.lf(["#484642","rgba(92,90,84,0.639)","rgba(112,109,101,0.282)","rgba(124,121,112,0.071)","rgba(128,125,116,0)","#4E4B46"],[0.082,0.11,0.141,0.173,0.204,1],0.5,-13.2,-0.3,13.4).s().p("AAjh+QALAEAAAGIgNDsQgBAGgLADQgMAEgPgBQgQAAgLgFQgMgEAAgGIAOjsQAAgGAMgDQALgEAPABQAQAAAMAFIAAAA").cp();
	this.shape_1641.setTransform(19.9,-14.8);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.rf(["#6A6760","#65635C","#595750","#46453F"],[0.353,0.557,0.784,1],-0.1,5.4,0,-0.1,5.4,4.9).s().p("AAjh+QALAEAAAGIgNDsQgBAGgLADQgMAEgPgBQgQAAgLgFQgMgEAAgGIAOjsQAAgGAMgDQALgEAPABQAQAAAMAFIAAAA").cp();
	this.shape_1642.setTransform(19.9,-14.8);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#89836D").s().p("Ag4gJQABAHAQAEQARAGAWAAQAXAAARgGQAQgEABgHQgBAJgPAEQgRAGgYAAQgXAAgRgGQgQgEAAgJIAAAA").cp();
	this.shape_1643.setTransform(19,-1.8);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#78756D").s().p("AA6AAQAAAIgRAGQgRAGgYAAQgWAAgSgGQgQgGAAgIQAAgHAQgGQASgGAWAAQAYAAARAGQARAGAAAHIAAAA").cp();
	this.shape_1644.setTransform(19,-2.8);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-3.1,0,3.3).s().p("AA6AKQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIAAgUQAAgJARgGQARgGAXAAQAYAAARAGQARAGAAAJIAAAU").cp();
	this.shape_1645.setTransform(19,-1.8);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,1.3,0,0,1.3,3.4).s().p("AA6AKQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIAAgUQAAgJARgGQARgGAXAAQAYAAARAGQARAGAAAJIAAAU").cp();
	this.shape_1646.setTransform(19,-1.8);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#EADFB7").s().p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1647.setTransform(-4.1,9);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#C1B797").s().p("AClgdQgCAZguAQQgwAShFAAQhEAAgwgSQgugQgCgZQACAWAwAOQAyARBAAAQBBAAAygRQAwgOACgWIAAAA").cp();
	this.shape_1648.setTransform(-4.6,6.2);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#B0AB9E").s().p("AAAg6QBEAAAxASQAwARAAAXQAAAYgwARQgxAShEAAQhDAAgxgSQgwgRAAgYQAAgXAwgRQAxgSBDAAIAAAA").cp();
	this.shape_1649.setTransform(-4.6,3.3);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-9.1,0,9.3).s().p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1650.setTransform(-4.6,6.4);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3.8,0,0,3.8,9.7).s().p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1651.setTransform(-4.6,6.4);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#EADFB7").s().p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1652.setTransform(13.2,5.3);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#C1B797").s().p("AAAAeQhEAAgwgSQgugQgCgZQACAWAwAOQAyARBAAAQBBAAAygRQAwgOACgWQgCAZguAQQgwAShFAAIAAAA").cp();
	this.shape_1653.setTransform(12.7,2.5);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#B0AB9E").s().p("AClAAQAAAYgwARQgxAShEAAQhDAAgxgSQgwgRAAgYQAAgXAwgRQAxgSBDAAQBEAAAxASQAwARAAAXIAAAA").cp();
	this.shape_1654.setTransform(12.7,-0.3);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-9.1,0,9.3).s().p("ACngfIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASQAxARAAAZIAAAA").cp();
	this.shape_1655.setTransform(12.7,2.7);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,3.8,0,0,3.8,9.7).s().p("ACngfIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASQAxARAAAZIAAAA").cp();
	this.shape_1656.setTransform(12.7,2.7);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-11.7,0,11.4).s().p("ADJAtQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeQAAhMBLgvQA9gmBAAAQA/AAA/ApQBLAwAABIIAAAA").cp();
	this.shape_1657.setTransform(14,11.4);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ADEAPQAAAdg6AVQg5AUhRAAQhQAAg5gUQg6gVAAgdIAAgdQAAgdA6gVQA5gUBQAAQBRAAA5AUQA6AVAAAdIAAAd").cp();
	this.shape_1658.setTransform(14,18.7);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#B0AB9E").s().p("AAnAAQAAAEgMAEQgLAFgQAAQgPABgLgEQgMgEAAgGQAAgDALgFQAMgEAPgBQAPAAAMAEQALADABAGIAAAA").cp();
	this.shape_1659.setTransform(9.4,-35);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.lf(["rgba(128,125,116,0)","#000000"],[0,1],-0.4,-19.2,0.6,19.4).s().p("AAiizIAKFkQAAAGgLAFQgMAEgQABQgPAAgLgEQgMgDAAgGIgKlkQgBgGAMgEQALgFARAAQAOgBAMAEQAMADAAAGIAAAA").cp();
	this.shape_1660.setTransform(9.9,-17.2);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.rf(["#726E66","#6D6A63","#605D57","#4B4945","#3D3B38"],[0.353,0.518,0.702,0.894,1],0.2,7.9,0,0.2,7.9,6.7).s().p("AAiizIAKFkQAAAGgLAFQgMAEgQABQgPAAgLgEQgMgDAAgGIgKlkQgBgGAMgEQALgFARAAQAOgBAMAEQAMADAAAGIAAAA").cp();
	this.shape_1661.setTransform(9.9,-17.2);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1662.setTransform(-22.1,18.6);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1663.setTransform(-23.2,19.5);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.2,0,0.1,-5.2,7.4).s().p("ABHgBQABACAAAJQABAIgBAEQgCAMAAABQgDAGgGAEQgDADgIADQgDACgIAFQgCABgEgBQgFAAgCABQgEAAgIADIgNAAQAAAAgKgBQgLAAgCgBQgEgBgIgBQgEgCgHgFQgDgCgGgGQgIgIAAgBQgFgJgBgDIgDgMQAAgGAAgGQABgCADgKQABgDAFgHQADgFAFgFQAHgKABAAIALgIQAKgFABAAQAJgCAEAAQAIgCADAAIAYAEQAJAEACABQACACAIAGQAFAFAEAFIAHAKQACAEAEAHIADAM").cp();
	this.shape_1664.setTransform(-23.3,24.2);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-6,0.1,6.2).s().p("ABHgBQABACAAAJQABAIgBAEQgCAMAAABQgDAGgGAEQgDADgIADQgDACgIAFQgCABgEgBQgFAAgCABQgEAAgIADIgNAAQAAAAgKgBQgLAAgCgBQgEgBgIgBQgEgCgHgFQgDgCgGgGQgIgIAAgBQgFgJgBgDIgDgMQAAgGAAgGQABgCADgKQABgDAFgHQADgFAFgFQAHgKABAAIALgIQAKgFABAAQAJgCAEAAQAIgCADAAIAYAEQAJAEACABQACACAIAGQAFAFAEAFIAHAKQACAEAEAHIADAM").cp();
	this.shape_1665.setTransform(-23.3,24.2);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f().s("#484143").ss(1,0,0,4).p("AAHAAQAAAGgHAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAHAAAAAFIAAAA").cp();
	this.shape_1666.setTransform(9.7,27.8);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1667.setTransform(11.9,25.8);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1668.setTransform(10.8,26.6);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1669.setTransform(14.6,29.1);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1670.setTransform(14.5,28.2);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1671.setTransform(13.7,27.5);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1672.setTransform(12.7,26.8);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1673.setTransform(8.1,27.2);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1674.setTransform(9.2,26.8);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1675.setTransform(6,28.9);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1676.setTransform(7,27.9);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1677.setTransform(5.7,30.7);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1678.setTransform(9.8,29.3);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1679.setTransform(8.4,28.5);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1680.setTransform(7.7,29.7);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1681.setTransform(7.8,26.8);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1682.setTransform(12.5,29.4);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1683.setTransform(11.4,28.8);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1684.setTransform(12.1,28.1);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1685.setTransform(11.1,27.3);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1686.setTransform(8.7,37);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1687.setTransform(8.8,34.7);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1688.setTransform(5.4,34.9);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1689.setTransform(10.2,36.6);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1690.setTransform(9.6,37.3);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1691.setTransform(11.3,36.9);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1692.setTransform(16.9,34.7);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1693.setTransform(12.7,35.9);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1694.setTransform(9.2,36.2);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1695.setTransform(9.9,35);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1696.setTransform(6.4,35.6);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgDAAAAgFQAAgEADAAQAFAAAAAEIAAAA").cp();
	this.shape_1697.setTransform(15.7,34.4);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1698.setTransform(7.3,34.4);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1699.setTransform(11.4,37.7);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1700.setTransform(15.5,35.8);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1701.setTransform(14.7,36.4);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1702.setTransform(13.3,37.1);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1703.setTransform(13.8,36.1);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1704.setTransform(11.5,36.2);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1705.setTransform(12.1,37.2);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgDAAAAgFQAAgEADAAQAFAAAAAEIAAAA").cp();
	this.shape_1706.setTransform(7.2,36.6);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgDAAAAgEQAAgDADAAQAFAAAAADIAAAA").cp();
	this.shape_1707.setTransform(8.2,35.7);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1708.setTransform(9.5,30.8);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f().s("#484143").ss(1,0,0,4).p("AA+gZIAFAMIAEAMQABACgBAIQACAGgBAHQgCALAAACQgDAEgGAFQAAABgLAGQgHAFgEABQgJAAgEABQgIADgEABIgkgCQgLgDgBAAQgCgBgJgFQgCgBgHgIQgGgFgDgEIgFgLQgBgCgCgLQgBgEABgHQABgDADgJQAEgHACgEIAIgKQAGgHACgCIAKgIQAJgFADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADACQAEACAGAGIAJAJIAHAK").cp();
	this.shape_1709.setTransform(11.4,32.5);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f().s("#484143").ss(1,0,0,4).p("AA+gZIAFAMIAEAMQABACgBAIQACAGgBAHQgCALAAACQgDAEgGAFQAAABgLAGQgHAFgEABQgJAAgEABQgIADgEABIgkgCQgLgDgBAAQgCgBgJgFQgCgBgHgIQgGgFgDgEIgFgLQgBgCgCgLQgBgEABgHQABgDADgJQAEgHACgEIAIgKQAGgHACgCIAKgIQAJgFADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADACQAEACAGAGIAJAJIAHAK").cp();
	this.shape_1710.setTransform(11.4,32.5);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f().s("#484143").ss(1,0,0,4).p("AA+gZIAFAMIAEAMQABACgBAIQACAGgBAHQgCALAAACQgDAEgGAFQAAABgLAGQgHAFgEABQgJAAgEABQgIADgEABIgkgCQgLgDgBAAQgCgBgJgFQgCgBgHgIQgGgFgDgEIgFgLQgBgCgCgLQgBgEABgHQABgDADgJQAEgHACgEIAIgKQAGgHACgCIAKgIQAJgFADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADACQAEACAGAGIAJAJIAHAK").cp();
	this.shape_1711.setTransform(11.4,32.5);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f().s("#484143").ss(1,0,0,4).p("AAIAAQAAADgCADQgDACgDAAQgHAAAAgIQAAgCACgDQADgCACAAQADAAADACQACADAAACIAAAA").cp();
	this.shape_1712.setTransform(16.9,22.3);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1713.setTransform(19.7,19.7);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1714.setTransform(18.3,20.8);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQACAAACACQACACAAABIAAAA").cp();
	this.shape_1715.setTransform(23.1,23.9);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1716.setTransform(23,22.8);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1717.setTransform(22,21.9);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1718.setTransform(20.7,20.9);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1719.setTransform(14.9,21.5);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1720.setTransform(16.3,21);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1721.setTransform(12.2,23.6);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1722.setTransform(13.5,22.4);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1723.setTransform(11.8,26);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1724.setTransform(17,24.2);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQACAAACACQACACAAABIAAAA").cp();
	this.shape_1725.setTransform(15.3,23.2);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1726.setTransform(14.4,24.7);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1727.setTransform(14.5,21);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1728.setTransform(20.4,24.3);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1729.setTransform(19.1,23.5);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1730.setTransform(20,22.6);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgBACgCQACgCABAAQACAAACACQACACAAABIAAAA").cp();
	this.shape_1731.setTransform(18.7,21.6);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1732.setTransform(15.7,33.9);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1733.setTransform(15.8,31);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1734.setTransform(11.5,31.3);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1735.setTransform(17.5,33.4);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1736.setTransform(16.8,34.3);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1737.setTransform(18.9,33.9);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAACgCACQgCACgCAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1738.setTransform(26.1,31);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1739.setTransform(20.7,32.6);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1740.setTransform(16.3,32.9);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1741.setTransform(17.2,31.4);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1742.setTransform(12.8,32.1);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1743.setTransform(24.5,30.6);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1744.setTransform(13.9,30.7);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAACgCACQgCACgCAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1745.setTransform(24.3,32.4);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1746.setTransform(23.3,33.2);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1747.setTransform(21.4,34.1);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1748.setTransform(22.1,32.7);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1749.setTransform(19.2,32.9);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1750.setTransform(20,34.1);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1751.setTransform(13.8,33.4);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1752.setTransform(15.1,32.3);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1753.setTransform(16.6,26.1);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.f().s("#484143").ss(1,0,0,4).p("AA5g2QADADAIAFIAIALQACADACAJQACAEAFAHQAAABADALQABADgBAJQABAJAAAEQAAABAAAGQAAAEgBACQgCAGgEAFQgBABgJAIQgEADgGAGQgCABgFAAQgEAAgCABQgIAFgEABIgaACQgIACgEAAQgHABgEAAIgNgDQgIgDgEgBQgIgBgEgBQgIgDgEgDQgDgCgHgFQgFgHgDgDQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgJACgEQAGgHACgEQAFgIADgDIAUgRIAMgHIAZgHQAHgBAFAAIANAAQACABAKADQAFABAHAFIAUAP").cp();
	this.shape_1754.setTransform(18.2,26.8);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.f().s("#484143").ss(1,0,0,4).p("AA5g2QADADAIAFIAIALQACADACAJQACAEAFAHQAAABADALQABADgBAJQABAJAAAEQAAABAAAGQAAAEgBACQgCAGgEAFQgBABgJAIQgEADgGAGQgCABgFAAQgEAAgCABQgIAFgEABIgaACQgIACgEAAQgHABgEAAIgNgDQgIgDgEgBQgIgBgEgBQgIgDgEgDQgDgCgHgFQgFgHgDgDQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgJACgEQAGgHACgEQAFgIADgDIAUgRIAMgHIAZgHQAHgBAFAAIANAAQACABAKADQAFABAHAFIAUAP").cp();
	this.shape_1755.setTransform(18.2,26.8);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.f().s("#484143").ss(1,0,0,4).p("AA5g2QADADAIAFIAIALQACADACAJQACAEAFAHQAAABADALQABADgBAJQABAJAAAEQAAABAAAGQAAAEgBACQgCAGgEAFQgBABgJAIQgEADgGAGQgCABgFAAQgEAAgCABQgIAFgEABIgaACQgIACgEAAQgHABgEAAIgNgDQgIgDgEgBQgIgBgEgBQgIgDgEgDQgDgCgHgFQgFgHgDgDQgDgIgCgEQgCgIgCgEIgCgMQgCgJAAgDQAAgIABgEQACgJACgEQAGgHACgEQAFgIADgDIAUgRIAMgHIAZgHQAHgBAFAAIANAAQACABAKADQAFABAHAFIAUAP").cp();
	this.shape_1756.setTransform(18.2,26.8);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f().s("#484143").ss(1,0,0,4).p("AAOAAIgHAAIgHAAIAHAAQAHAAAAAAIAAAA").cp();
	this.shape_1757.setTransform(20.7,-45.8);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f().s("#484143").ss(1,0,0,4).p("AAqACQgBAGgMAEQgMAEgRgBQgQAAgMgFQgMgFAAgFQAAAEAMAFQANAFAPAAQAQABANgEQAMgEABgFIAAAA").cp();
	this.shape_1758.setTransform(21.4,-47.4);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f().s("#484143").ss(1,0,0,4).p("AAhABQAAAFgKADQgKADgNAAQgNgBgJgDQgKgEAAgEQAAgEAKgEQAKgDAMABQAOABAJADQAKAEAAADIAAAA").cp();
	this.shape_1759.setTransform(21.4,-47.3);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.f().s("#484143").ss(1,0,0,4).p("AAqABQgBAGgMAEQgNAEgQgBQgRAAgMgFQgMgFAAgEQAAgHANgEQANgDAPAAQARABANAFQAMAFAAAEIAAAA").cp();
	this.shape_1760.setTransform(21.4,-47.3);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.f().s("#484143").ss(1,0,0,4).p("AA0ATQgBAIgPAFQgPAFgVgBQgVAAgPgHQgPgGAAgIIALglQAAgHANgEQANgDAPAAQASABANAFQAMAFAAAGIAIAm").cp();
	this.shape_1761.setTransform(21.3,-45.1);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.f().s("#484143").ss(1,0,0,4).p("AA0ATQgBAIgPAFQgPAFgVgBQgVAAgPgHQgPgGAAgIIALglQAAgHANgEQANgDAPAAQASABANAFQAMAFAAAGIAIAm").cp();
	this.shape_1762.setTransform(21.3,-45.1);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.f().s("#484143").ss(1,0,0,4).p("AA0ATQgBAIgPAFQgPAFgVgBQgVAAgPgHQgPgGAAgIIALglQAAgHANgEQANgDAPAAQASABANAFQAMAFAAAGIAIAm").cp();
	this.shape_1763.setTransform(21.3,-45.1);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.f().s("#484143").ss(1,0,0,4).p("AAOAAQgDAAgEAAIgGAAIAGAAQAHAAAAAAIAAAA").cp();
	this.shape_1764.setTransform(21,-43.9);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.f().s("#484143").ss(1,0,0,4).p("AAYAKQAIgEABgGQgBAGgIAFQgKAGgOAAQgPgBgKgHQgIgFAAgEQAAADAJAFQAKAHAOAAQANABALgGIAAAA").cp();
	this.shape_1765.setTransform(21.7,-45.6);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.f().s("#484143").ss(1,0,0,4).p("AAaAAQAAADgGAEQgIAGgMgBQgKAAgIgGQgHgFAAgDQAAgEAIgCQAIgDAJAAQALABAIADQAIADgBAEIAAAA").cp();
	this.shape_1766.setTransform(21.6,-45.4);

	this.shape_1767 = new cjs.Shape();
	this.shape_1767.graphics.f().s("#484143").ss(1,0,0,4).p("AAiAAQgBAEgIAFQgKAGgPAAQgOgBgKgHQgJgGABgEQAAgFAKgDQAKgDAMAAQAOABAKAEQAKAEAAAFIAAAA").cp();
	this.shape_1767.setTransform(21.6,-45.4);

	this.shape_1768 = new cjs.Shape();
	this.shape_1768.graphics.f().s("#484143").ss(1,0,0,4).p("AApASQAAAGgMAEQgNAEgQgBQgRAAgMgFQgLgFAAgHIAIghQAAgFAKgDQALgDAMAAQAOABAKAEQAKAEAAAFIAGAi").cp();
	this.shape_1768.setTransform(21.5,-43.8);

	this.shape_1769 = new cjs.Shape();
	this.shape_1769.graphics.f().s("#484143").ss(1,0,0,4).p("AApASQAAAGgMAEQgNAEgQgBQgRAAgMgFQgLgFAAgHIAIghQAAgFAKgDQALgDAMAAQAOABAKAEQAKAEAAAFIAGAi").cp();
	this.shape_1769.setTransform(21.5,-43.8);

	this.shape_1770 = new cjs.Shape();
	this.shape_1770.graphics.f().s("#484143").ss(1,0,0,4).p("AApASQAAAGgMAEQgNAEgQgBQgRAAgMgFQgLgFAAgHIAIghQAAgFAKgDQALgDAMAAQAOABAKAEQAKAEAAAFIAGAi").cp();
	this.shape_1770.setTransform(21.5,-43.8);

	this.shape_1771 = new cjs.Shape();
	this.shape_1771.graphics.f().s("#484143").ss(1,0,0,4).p("AAwAAQAAAIgOAHQgOAGgUAAQgTAAgOgGQgOgHAAgIQAAgHAOgHQAOgGATAAQATAAAPAGQAOAHAAAHIAAAA").cp();
	this.shape_1771.setTransform(21,-42.2);

	this.shape_1772 = new cjs.Shape();
	this.shape_1772.graphics.f().s("#484143").ss(1,0,0,4).p("AAIAAQgEABgEgBQgHAAAAAAQAAAAAHAAQAIAAAAAAIAAAA").cp();
	this.shape_1772.setTransform(21.3,-40.1);

	this.shape_1773 = new cjs.Shape();
	this.shape_1773.graphics.f().s("#484143").ss(1,0,0,4).p("AAzABQAAAIgPAFQgQAFgUgBQgVgBgPgHQgNgGgBgFQABAEAOAGQAPAGAUABQATABAQgFQAQgEAAgHIAAAA").cp();
	this.shape_1773.setTransform(21.2,-41.8);

	this.shape_1774 = new cjs.Shape();
	this.shape_1774.graphics.f().s("#484143").ss(1,0,0,4).p("AAzACQAAAIgPAFQgQAEgUgBQgVAAgPgHQgPgGABgGQAAgIAQgFQAPgEATABQAWABAPAGQAPAGgBAGIAAAA").cp();
	this.shape_1774.setTransform(21.2,-41.9);

	this.shape_1775 = new cjs.Shape();
	this.shape_1775.graphics.f().s("#484143").ss(1,0,0,4).p("AAzAWQgBAIgPAFQgQAEgTgBQgWgBgPgGQgPgGAAgIIACgmQABgIAPgFQAQgEATABQAWABAPAGQAPAGAAAIIgCAm").cp();
	this.shape_1775.setTransform(21.1,-39.9);

	this.shape_1776 = new cjs.Shape();
	this.shape_1776.graphics.f().s("#484143").ss(1,0,0,4).p("AAzAWQgBAIgPAFQgQAEgTgBQgWgBgPgGQgPgGAAgIIACgmQABgIAPgFQAQgEATABQAWABAPAGQAPAGAAAIIgCAm").cp();
	this.shape_1776.setTransform(21.1,-39.9);

	this.shape_1777 = new cjs.Shape();
	this.shape_1777.graphics.f().s("#484143").ss(1,0,0,4).p("AAzAWQgBAIgPAFQgQAEgTgBQgWgBgPgGQgPgGAAgIIACgmQABgIAPgFQAQgEATABQAWABAPAGQAPAGAAAIIgCAm").cp();
	this.shape_1777.setTransform(21.1,-39.9);

	this.shape_1778 = new cjs.Shape();
	this.shape_1778.graphics.f().s("#484143").ss(1,0,0,4).p("AAAAAIgGAAQgGAAAAAAIAMAA").cp();
	this.shape_1778.setTransform(20.7,-36.7,1,1,0,0,0,-0.9,0);

	this.shape_1779 = new cjs.Shape();
	this.shape_1779.graphics.f().s("#484143").ss(1,0,0,4).p("AAaALQALgEABgFQgBAGgLAEQgLAEgPgBQgQAAgLgFQgLgFAAgFQAAAEALAFQAMAEAPABQAOABAMgEIAAAA").cp();
	this.shape_1779.setTransform(20.8,-38.3);

	this.shape_1780 = new cjs.Shape();
	this.shape_1780.graphics.f().s("#484143").ss(1,0,0,4).p("AAaABQAAAEgIACQgIADgKgBQgKAAgIgDQgHgDAAgDQAAgDAIgDQAIgDAJABQALABAIADQAIADgBACIAAAA").cp();
	this.shape_1780.setTransform(20.8,-38.1);

	this.shape_1781 = new cjs.Shape();
	this.shape_1781.graphics.f().s("#484143").ss(1,0,0,4).p("AAnABQAAAGgMAEQgMADgPAAQgPgBgMgFQgLgEAAgEQABgGALgDQAMgEAOABQAQAAAMAFQALAEAAAEIAAAA").cp();
	this.shape_1781.setTransform(20.8,-38.1);

	this.shape_1782 = new cjs.Shape();
	this.shape_1782.graphics.f().s("#484143").ss(1,0,0,4).p("AAmAvQAAAGgMAEQgMAEgOgBQgRAAgLgFQgMgFABgFIAChbQAAgGAMgEQAMgEAOABQARABALAEQAMAFgBAFIgCBb").cp();
	this.shape_1782.setTransform(20.8,-33.2);

	this.shape_1783 = new cjs.Shape();
	this.shape_1783.graphics.f().s("#484143").ss(1,0,0,4).p("AAmAvQAAAGgMAEQgMAEgOgBQgRAAgLgFQgMgFABgFIAChbQAAgGAMgEQAMgEAOABQARABALAEQAMAFgBAFIgCBb").cp();
	this.shape_1783.setTransform(20.8,-33.2);

	this.shape_1784 = new cjs.Shape();
	this.shape_1784.graphics.f().s("#484143").ss(1,0,0,4).p("AAmAvQAAAGgMAEQgMAEgOgBQgRAAgLgFQgMgFABgFIAChbQAAgGAMgEQAMgEAOABQARABALAEQAMAFgBAFIgCBb").cp();
	this.shape_1784.setTransform(20.8,-33.2);

	this.shape_1785 = new cjs.Shape();
	this.shape_1785.graphics.f().s("#484143").ss(1,0,0,4).p("AAHAAIgHAAIgGAAIAGAAIAHAA").cp();
	this.shape_1785.setTransform(19.8,-26.5,1,1,0,0,0,-0.9,0);

	this.shape_1786 = new cjs.Shape();
	this.shape_1786.graphics.f().s("#484143").ss(1,0,0,4).p("AAfAMQANgEABgGQgBAHgNAEQgNAFgSgBQgUgBgNgGQgOgGABgFQAAAEAOAGQANAFATABQAQABAPgEIAAAA").cp();
	this.shape_1786.setTransform(20.7,-28.2);

	this.shape_1787 = new cjs.Shape();
	this.shape_1787.graphics.f().s("#484143").ss(1,0,0,4).p("AAuABQAAAHgOAFQgOAEgSgBQgTgBgNgFQgOgGAAgFQABgHAOgEQAOgEARAAQATABAOAGQAOAGgBAEIAAAA").cp();
	this.shape_1787.setTransform(20.7,-28.2);

	this.shape_1788 = new cjs.Shape();
	this.shape_1788.graphics.f().s("#484143").ss(1,0,0,4).p("AAigbQAOAGAAAHIgCAiQgBAHgOAEQgOAFgRgBQgUgBgNgGQgOgGAAgHIACgiQAAgHAOgEQAOgEASAAQAUABANAGIAAAA").cp();
	this.shape_1788.setTransform(20.6,-26.4);

	this.shape_1789 = new cjs.Shape();
	this.shape_1789.graphics.f().s("#484143").ss(1,0,0,4).p("AAigbQAOAGAAAHIgCAiQgBAHgOAEQgOAFgRgBQgUgBgNgGQgOgGAAgHIACgiQAAgHAOgEQAOgEASAAQAUABANAGIAAAA").cp();
	this.shape_1789.setTransform(20.6,-26.4);

	this.shape_1790 = new cjs.Shape();
	this.shape_1790.graphics.f().s("#484143").ss(1,0,0,4).p("AAigbQAOAGAAAHIgCAiQgBAHgOAEQgOAFgRgBQgUgBgNgGQgOgGAAgHIACgiQAAgHAOgEQAOgEASAAQAUABANAGIAAAA").cp();
	this.shape_1790.setTransform(20.6,-26.4);

	this.shape_1791 = new cjs.Shape();
	this.shape_1791.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAFQgGAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1791.setTransform(11.3,4.2);

	this.shape_1792 = new cjs.Shape();
	this.shape_1792.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgGAGgHQAHgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1792.setTransform(4.3,6);

	this.shape_1793 = new cjs.Shape();
	this.shape_1793.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAFQgGAHgIAAQgGAAgGgHQgHgFAAgIQAAgHAHgGQAGgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1793.setTransform(-17,5.4);

	this.shape_1794 = new cjs.Shape();
	this.shape_1794.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAFQgGAGgIAAQgHAAgGgGQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1794.setTransform(-11.5,6.4);

	this.shape_1795 = new cjs.Shape();
	this.shape_1795.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgGAGgHQAHgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1795.setTransform(-4.4,6.5);

	this.shape_1796 = new cjs.Shape();
	this.shape_1796.graphics.f().s("#484143").ss(1,0,0,4).p("AATAAQAAAIgGAGQgFAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAGAGAAAHIAAAA").cp();
	this.shape_1796.setTransform(1.9,1.8);

	this.shape_1797 = new cjs.Shape();
	this.shape_1797.graphics.f().s("#484143").ss(1,0,0,4).p("AAOgNQAGAGAAAHQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGIAAAA").cp();
	this.shape_1797.setTransform(-4.7,0.5);

	this.shape_1798 = new cjs.Shape();
	this.shape_1798.graphics.f().s("#484143").ss(1,0,0,4).p("AAPgEQACAGgCAHQgCAHgHACQgGADgFgEQgGgEgDgIQgDgGADgHQACgHAGgCQAGgCAFADQAHAEADAIIAAAA").cp();
	this.shape_1798.setTransform(8.7,-5.3);

	this.shape_1799 = new cjs.Shape();
	this.shape_1799.graphics.f().s("#484143").ss(1,0,0,4).p("AAPgEQACAGgCAHQgCAHgHACQgGADgFgEQgGgEgDgIQgDgGADgHQACgHAHgCQAFgCAFADQAHAEADAIIAAAA").cp();
	this.shape_1799.setTransform(8,-0.4);

	this.shape_1800 = new cjs.Shape();
	this.shape_1800.graphics.f().s("#484143").ss(1,0,0,4).p("AAJAFQgEAHgFADQgFAEgEgCQgDgCAAgHQAAgHAEgFQAEgHAEgEQAGgDAEACQAEADgBAGQAAAHgEAFIAAAA").cp();
	this.shape_1800.setTransform(-18.7,-5.5);

	this.shape_1801 = new cjs.Shape();
	this.shape_1801.graphics.f().s("#484143").ss(1,0,0,4).p("AANgKQAEAGgBAGQgCAIgGAFQgFAFgFgBQgHgBgDgGQgEgHACgGQABgJAGgEQAGgFAEABQAHABADAHIAAAA").cp();
	this.shape_1801.setTransform(-17.8,-0.1);

	this.shape_1802 = new cjs.Shape();
	this.shape_1802.graphics.f().s("#484143").ss(1,0,0,4).p("AAOgLQADAHgBAGQgCAJgFAEQgGAFgFgBQgHgBgDgHQgEgGACgHQABgIAGgEQAGgFAEABQAHABAEAGIAAAA").cp();
	this.shape_1802.setTransform(-12.7,0.2);

	this.shape_1803 = new cjs.Shape();
	this.shape_1803.graphics.f().s("#484143").ss(1,0,0,4).p("AARADQgCAIgGAFQgHAEgFgBQgHgBgEgHQgDgHABgGQACgIAGgFQAGgFAFACQAHABAEAHQAEAHgBAGIAAAA").cp();
	this.shape_1803.setTransform(-13.6,-7.6);

	this.shape_1804 = new cjs.Shape();
	this.shape_1804.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgGgGAAgIQAAgGAGgGQAGgHAGAAQAIAAAGAHQAGAGAAAGIAAAA").cp();
	this.shape_1804.setTransform(-5.5,-9);

	this.shape_1805 = new cjs.Shape();
	this.shape_1805.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgHgGQgGgGAAgIQAAgHAGgGQAHgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1805.setTransform(0.2,-8.9);

	this.shape_1806 = new cjs.Shape();
	this.shape_1806.graphics.f().s("#484143").ss(1,0,0,4).p("AASAAQAAAIgGAGQgFAGgHAAQgGAAgGgGQgFgGAAgIQAAgGAFgGQAGgHAGAAQAHAAAFAHQAGAGAAAGIAAAA").cp();
	this.shape_1806.setTransform(3.8,-5.3);

	this.shape_1807 = new cjs.Shape();
	this.shape_1807.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAFQgGAGgIAAQgHAAgGgGQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_1807.setTransform(-0.8,-3.5);

	this.shape_1808 = new cjs.Shape();
	this.shape_1808.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgHgGAAgIQAAgGAHgHQAGgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_1808.setTransform(-8.5,-4);

	this.shape_1809 = new cjs.Shape();
	this.shape_1809.graphics.f().s("#484143").ss(1,0,0,4).p("AAUANIgnAAIAAgZIAnAAIAAAZ").cp();
	this.shape_1809.setTransform(-18.9,19.6);

	this.shape_1810 = new cjs.Shape();
	this.shape_1810.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAXIgogUIAAgYIAoAUIAAAY").cp();
	this.shape_1810.setTransform(-18.8,15.8,1,1,0,0,0,0,-0.1);

	this.shape_1811 = new cjs.Shape();
	this.shape_1811.graphics.f().s("#484143").ss(1,0,0,4).p("AgKAHIAVAKIAAgYIgVgKIAAAY").cp();
	this.shape_1811.setTransform(-18.5,26.6);

	this.shape_1812 = new cjs.Shape();
	this.shape_1812.graphics.f().s("#484143").ss(1,0,0,4).p("AgKAHIAVAKIAAgYIgVgKIAAAY").cp();
	this.shape_1812.setTransform(-18.6,16.8);

	this.shape_1813 = new cjs.Shape();
	this.shape_1813.graphics.f().s("#484143").ss(1,0,0,4).p("AAMAHIgWAKIAAgYIAWgKIAAAY").cp();
	this.shape_1813.setTransform(9.7,27);

	this.shape_1814 = new cjs.Shape();
	this.shape_1814.graphics.f().s("#484143").ss(1,0,0,4).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1814.setTransform(-12.4,30.1);

	this.shape_1815 = new cjs.Shape();
	this.shape_1815.graphics.f().s("#484143").ss(1,0,0,4).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1815.setTransform(-12.4,30.1);

	this.shape_1816 = new cjs.Shape();
	this.shape_1816.graphics.f().s("#484143").ss(1,0,0,4).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1816.setTransform(-8.6,17.3);

	this.shape_1817 = new cjs.Shape();
	this.shape_1817.graphics.f().s("#484143").ss(1,0,0,4).p("AAdANIg5AAIAAgZIA5AAIAAAZ").cp();
	this.shape_1817.setTransform(-8.6,17.3);

	this.shape_1818 = new cjs.Shape();
	this.shape_1818.graphics.f().s("#484143").ss(1,0,0,4).p("AAAhyQA+AAA+AoQBKAwAABGQAAAeg6AUQg7AVhRAAQhRAAg6gVQg6gUAAgeQAAhLBKguQA7glBAAAIAAAA").cp();
	this.shape_1818.setTransform(-4,-0.7);

	this.shape_1819 = new cjs.Shape();
	this.shape_1819.graphics.f().s("#484143").ss(1,0,0,4).p("AAAhTQBPAAA5AUQA5AVAAAcIAAAcQAAAdg5AUQg4AVhQAAQhPAAg4gVQg5gUAAgdIAAgcQAAgcA5gVQA5gUBOAAIAAAA").cp();
	this.shape_1819.setTransform(-4,6.4);

	this.shape_1820 = new cjs.Shape();
	this.shape_1820.graphics.f().s("#484143").ss(1,0,0,4).p("AC9gkQAAAdg3ASQg4AVhOAAQhNAAg4gVQg3gSAAgd");
	this.shape_1820.setTransform(-4,12.6);

	this.shape_1821 = new cjs.Shape();
	this.shape_1821.graphics.f().s("#484143").ss(1,0,0,4).p("ADBiRQAAAEgBACQgNBygJBQQgDAZAAARQAAATgxANQgxAMhFAAQhFAAgwgMQgxgNAAgTQAAgCgGgoQgIg5gLiKQgBgCAAgDAi/iMQAEAaA0ASQA5AVBOAAQBPAAA5gVQAygSAGgZ");
	this.shape_1821.setTransform(-4.1,21.4);

	this.shape_1822 = new cjs.Shape();
	this.shape_1822.graphics.f().s("#484143").ss(1,0,0,4).p("ADBiRQAAAEgBACQgNBygJBQQgDAZAAARQAAATgxANQgxAMhFAAQhFAAgwgMQgxgNAAgTQAAgCgGgoQgIg5gLiKQgBgCAAgDAi/iMQAEAaA0ASQA5AVBOAAQBPAAA5gVQAygSAGgZ");
	this.shape_1822.setTransform(-4.1,21.4);

	this.shape_1823 = new cjs.Shape();
	this.shape_1823.graphics.f().s("#484143").ss(1,0,0,4).p("ADBiRQAAAEgBACQgNBygJBQQgDAZAAARQAAATgxANQgxAMhFAAQhFAAgwgMQgxgNAAgTQAAgCgGgoQgIg5gLiKQgBgCAAgDAi/iMQAEAaA0ASQA5AVBOAAQBPAAA5gVQAygSAGgZ");
	this.shape_1823.setTransform(-4.1,21.4);

	this.shape_1824 = new cjs.Shape();
	this.shape_1824.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAAgFAAIgEAAQAAAAAEAAQACAAADAAIAAAA").cp();
	this.shape_1824.setTransform(9.3,-41.1);

	this.shape_1825 = new cjs.Shape();
	this.shape_1825.graphics.f().s("#484143").ss(1,0,0,4).p("AAgAAQAAAFgJAEQgJADgNABQgLAAgKgDQgJgEAAgEQAAAEAKADQAJADALgBQAMAAAKgDQAJgEAAgEIAAAA").cp();
	this.shape_1825.setTransform(9.1,-42.3);

	this.shape_1826 = new cjs.Shape();
	this.shape_1826.graphics.f().s("#484143").ss(1,0,0,4).p("AAWAAQAAACgGADQgHACgJABQgIAAgGgCQgHgCAAgEQAAgBAHgDQAGgCAIAAQAIgBAHADQAHACAAACIAAAA").cp();
	this.shape_1826.setTransform(9.2,-42.2);

	this.shape_1827 = new cjs.Shape();
	this.shape_1827.graphics.f().s("#484143").ss(1,0,0,4).p("AAfAAQABADgKAEQgJAEgNAAQgLABgKgEQgJgDAAgEQAAgDAJgEQAJgDAMgBQANAAAJADQAJADAAAEIAAAA").cp();
	this.shape_1827.setTransform(9.2,-42.2);

	this.shape_1828 = new cjs.Shape();
	this.shape_1828.graphics.f().s("#484143").ss(1,0,0,4).p("AAfgjIACBFQAAAEgJAEQgKADgNABQgLAAgKgDQgJgDgBgFIgChEQAAgFAKgDQAJgEANAAQALgBAKAEQAKADAAAEIAAAA").cp();
	this.shape_1828.setTransform(9.3,-38.7);

	this.shape_1829 = new cjs.Shape();
	this.shape_1829.graphics.f().s("#484143").ss(1,0,0,4).p("AAfgjIACBFQAAAEgJAEQgKADgNABQgLAAgKgDQgJgDgBgFIgChEQAAgFAKgDQAJgEANAAQALgBAKAEQAKADAAAEIAAAA").cp();
	this.shape_1829.setTransform(9.3,-38.7);

	this.shape_1830 = new cjs.Shape();
	this.shape_1830.graphics.f().s("#484143").ss(1,0,0,4).p("AAfgjIACBFQAAAEgJAEQgKADgNABQgLAAgKgDQgJgDgBgFIgChEQAAgFAKgDQAJgEANAAQALgBAKAEQAKADAAAEIAAAA").cp();
	this.shape_1830.setTransform(9.3,-38.7);

	this.shape_1831 = new cjs.Shape();
	this.shape_1831.graphics.f().s("#484143").ss(1,0,0,4).p("AAkAAQAAAFgLADQgKAEgPAAQgOAAgKgEQgMgDAAgFQAAgEAMgEQAKgEAOAAQAPAAAKAEQALAEAAAEIAAAA").cp();
	this.shape_1831.setTransform(9.5,-34.8);

	this.shape_1832 = new cjs.Shape();
	this.shape_1832.graphics.f().s("#484143").ss(1,0,0,4).p("AAAAAIgGAAQgHAAAAAAIANAA").cp();
	this.shape_1832.setTransform(20.5,-37.2,1,1,0,0,0,-0.9,0);

	this.shape_1833 = new cjs.Shape();
	this.shape_1833.graphics.f().s("#484143").ss(1,0,0,4).p("AgCAPQgQgBgLgFQgLgEAAgFQAAAEALAEQAMAFAPAAQAOABAMgEQAJgCACgFQgBAGgKACQgLAEgPAAIAAAA").cp();
	this.shape_1833.setTransform(20.8,-38.7);

	this.shape_1834 = new cjs.Shape();
	this.shape_1834.graphics.f().s("#484143").ss(1,0,0,4).p("AAaABQAAAEgIACQgIADgKgBQgJAAgIgDQgIgDAAgDQAAgDAIgDQAIgDAJABQALAAAIADQAIAEgBACIAAAA").cp();
	this.shape_1834.setTransform(20.5,-38.6);

	this.shape_1835 = new cjs.Shape();
	this.shape_1835.graphics.f().s("#484143").ss(1,0,0,4).p("AAnABQAAAGgMAEQgMADgPAAQgPgBgLgFQgMgEAAgEQABgGALgDQAMgEAOAAQARABALAFQALAEAAAEIAAAA").cp();
	this.shape_1835.setTransform(20.5,-38.6);

	this.shape_1836 = new cjs.Shape();
	this.shape_1836.graphics.f().s("#484143").ss(1,0,0,4).p("AAjh+QALAEAAAGIgNDsQgBAGgLADQgMAEgPgBQgQAAgLgFQgMgEAAgGIAOjsQAAgGAMgDQALgEAPABQAQAAAMAFIAAAA").cp();
	this.shape_1836.setTransform(19.9,-14.8);

	this.shape_1837 = new cjs.Shape();
	this.shape_1837.graphics.f().s("#484143").ss(1,0,0,4).p("AAjh+QALAEAAAGIgNDsQgBAGgLADQgMAEgPgBQgQAAgLgFQgMgEAAgGIAOjsQAAgGAMgDQALgEAPABQAQAAAMAFIAAAA").cp();
	this.shape_1837.setTransform(19.9,-14.8);

	this.shape_1838 = new cjs.Shape();
	this.shape_1838.graphics.f().s("#484143").ss(1,0,0,4).p("AAjh+QALAEAAAGIgNDsQgBAGgLADQgMAEgPgBQgQAAgLgFQgMgEAAgGIAOjsQAAgGAMgDQALgEAPABQAQAAAMAFIAAAA").cp();
	this.shape_1838.setTransform(19.9,-14.8);

	this.shape_1839 = new cjs.Shape();
	this.shape_1839.graphics.f().s("#484143").ss(1,0,0,4).p("ABKh0QAeAQAAAqQgCBPgcA3QgdA5gqABQgpABgfg4Qggg4gBhNQgChEAggIQAUgFA1AHQAygBAXANIAAAA").cp();
	this.shape_1839.setTransform(12.5,6.4);

	this.shape_1840 = new cjs.Shape();
	this.shape_1840.graphics.f().s("#484143").ss(1,0,0,4).p("Ag5gCQABAGARAGQARAGAWAAQAWAAARgGQARgGAAgGQAAAIgQAFQgRAHgXAAQgYAAgQgHQgQgFgBgIIAAAA").cp();
	this.shape_1840.setTransform(19,-2.6);

	this.shape_1841 = new cjs.Shape();
	this.shape_1841.graphics.f().s("#484143").ss(1,0,0,4).p("AA6AAQAAAIgRAGQgRAGgYAAQgWAAgSgGQgQgGAAgIQAAgHAQgGQASgGAWAAQAYAAARAGQARAGAAAHIAAAA").cp();
	this.shape_1841.setTransform(19,-2.8);

	this.shape_1842 = new cjs.Shape();
	this.shape_1842.graphics.f().s("#484143").ss(1,0,0,4).p("AA6AKQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIAAgUQAAgJARgGQARgGAXAAQAYAAARAGQARAGAAAJIAAAU").cp();
	this.shape_1842.setTransform(19,-1.8);

	this.shape_1843 = new cjs.Shape();
	this.shape_1843.graphics.f().s("#484143").ss(1,0,0,4).p("AA6AKQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIAAgUQAAgJARgGQARgGAXAAQAYAAARAGQARAGAAAJIAAAU").cp();
	this.shape_1843.setTransform(19,-1.8);

	this.shape_1844 = new cjs.Shape();
	this.shape_1844.graphics.f().s("#484143").ss(1,0,0,4).p("AA6AKQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIAAgUQAAgJARgGQARgGAXAAQAYAAARAGQARAGAAAJIAAAU").cp();
	this.shape_1844.setTransform(19,-1.8);

	this.shape_1845 = new cjs.Shape();
	this.shape_1845.graphics.f().s("#484143").ss(1,0,0,4).p("ABbAAQAAARgbANQgbANglAAQgkAAgbgNQgbgNAAgRQAAgRAbgMQAbgNAkAAQAlAAAbANQAbAMAAARIAAAA").cp();
	this.shape_1845.setTransform(19.2,-1.5);

	this.shape_1846 = new cjs.Shape();
	this.shape_1846.graphics.f().s("#484143").ss(1,0,0,4).p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1846.setTransform(-4.1,9);

	this.shape_1847 = new cjs.Shape();
	this.shape_1847.graphics.f().s("#484143").ss(1,0,0,4).p("AClgVQgBAXgvARQgvAShGAAQhDAAgwgSQgvgRgBgXQACAVAwAPQAyARA/AAQBCAAAxgRQAwgPACgVIAAAA").cp();
	this.shape_1847.setTransform(-4.7,5.5);

	this.shape_1848 = new cjs.Shape();
	this.shape_1848.graphics.f().s("#484143").ss(1,0,0,4).p("AAAg6QBEAAAxASQAwARAAAXQAAAYgwARQgxAShEAAQhDAAgxgSQgwgRAAgYQAAgXAwgRQAxgSBDAAIAAAA").cp();
	this.shape_1848.setTransform(-4.6,3.3);

	this.shape_1849 = new cjs.Shape();
	this.shape_1849.graphics.f().s("#484143").ss(1,0,0,4).p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1849.setTransform(-4.6,6.4);

	this.shape_1850 = new cjs.Shape();
	this.shape_1850.graphics.f().s("#484143").ss(1,0,0,4).p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1850.setTransform(-4.6,6.4);

	this.shape_1851 = new cjs.Shape();
	this.shape_1851.graphics.f().s("#484143").ss(1,0,0,4).p("AAAhbQBFAAAxASQAxARAAAZIAAA/QAAAZgxARQgxAShFAAQhEAAgxgSQgxgRAAgZIAAg/QAAgYAxgSQAxgSBEAAIAAAA").cp();
	this.shape_1851.setTransform(-4.6,6.4);

	this.shape_1852 = new cjs.Shape();
	this.shape_1852.graphics.f().s("#484143").ss(1,0,0,4).p("AAaAAQAAACgaAAQgZAAAAgCQAAgBAZAAQAaAAAAABIAAAA").cp();
	this.shape_1852.setTransform(13.2,5.3);

	this.shape_1853 = new cjs.Shape();
	this.shape_1853.graphics.f().s("#484143").ss(1,0,0,4).p("AAAAlQhEAAgwgSQgugRgCgXQACAVAwAPQAyARBAAAQBAAAAygRQAxgPABgVQgBAXgvARQgvAShFAAIAAAA").cp();
	this.shape_1853.setTransform(12.7,1.7);

	this.shape_1854 = new cjs.Shape();
	this.shape_1854.graphics.f().s("#484143").ss(1,0,0,4).p("AClAAQAAAYgwARQgxAShEAAQhDAAgxgSQgwgRAAgYQAAgXAwgRQAxgSBDAAQBEAAAxASQAwARAAAXIAAAA").cp();
	this.shape_1854.setTransform(12.7,-0.3);

	this.shape_1855 = new cjs.Shape();
	this.shape_1855.graphics.f().s("#484143").ss(1,0,0,4).p("ACngfIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASQAxARAAAZIAAAA").cp();
	this.shape_1855.setTransform(12.7,2.7);

	this.shape_1856 = new cjs.Shape();
	this.shape_1856.graphics.f().s("#484143").ss(1,0,0,4).p("ACngfIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASQAxARAAAZIAAAA").cp();
	this.shape_1856.setTransform(12.7,2.7);

	this.shape_1857 = new cjs.Shape();
	this.shape_1857.graphics.f().s("#484143").ss(1,0,0,4).p("ACngfIAAA/QAAAZgxARQgxAShFAAQhEAAgwgSQgygRAAgZIAAg/QAAgZAygRQAwgSBEAAQBFAAAxASQAxARAAAZIAAAA").cp();
	this.shape_1857.setTransform(12.7,2.7);

	this.shape_1858 = new cjs.Shape();
	this.shape_1858.graphics.f().s("#484143").ss(1,0,0,4).p("ACXAAQAAAegtAWQgsAWg+AAQg+AAgsgWQgsgWAAgeQAAgdAsgWQAsgWA+AAQA+AAAsAWQAtAWAAAdIAAAA").cp();
	this.shape_1858.setTransform(14.3,5.7);

	this.shape_1859 = new cjs.Shape();
	this.shape_1859.graphics.f().s("#484143").ss(1,0,0,4).p("ADJAtQAAAeg7AVQg7AVhTAAQhSAAg7gVQg7gVAAgeQAAhMBLgvQA9gmBAAAQA/AAA/ApQBLAwAABIIAAAA").cp();
	this.shape_1859.setTransform(14,11.4);

	this.shape_1860 = new cjs.Shape();
	this.shape_1860.graphics.f().s("#484143").ss(1,0,0,4).p("ADEAPQAAAdg6AVQg5AUhRAAQhQAAg5gUQg6gVAAgdIAAgdQAAgdA6gVQA5gUBQAAQBRAAA5AUQA6AVAAAdIAAAd").cp();
	this.shape_1860.setTransform(14,18.7);

	this.shape_1861 = new cjs.Shape();
	this.shape_1861.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAIgGAAIgFAAIAFAAIAGAA").cp();
	this.shape_1861.setTransform(8.6,-33.6,1,1,0,0,0,-0.9,0);

	this.shape_1862 = new cjs.Shape();
	this.shape_1862.graphics.f().s("#484143").ss(1,0,0,4).p("AgmACQABAFALADQAMAEAOAAQAPgBAMgEQALgEAAgFQAAAGgLAEQgLAEgQABQgPAAgLgEQgLgEgBgFIAAAA").cp();
	this.shape_1862.setTransform(9.4,-35.1);

	this.shape_1863 = new cjs.Shape();
	this.shape_1863.graphics.f().s("#484143").ss(1,0,0,4).p("AAnAAQAAAEgMAEQgLAFgQAAQgPABgLgEQgMgEAAgGQAAgDALgFQAMgEAPgBQAPAAAMAEQALADABAGIAAAA").cp();
	this.shape_1863.setTransform(9.4,-35);

	this.shape_1864 = new cjs.Shape();
	this.shape_1864.graphics.f().s("#484143").ss(1,0,0,4).p("AAiizIAKFkQAAAGgLAFQgMAEgQABQgPAAgLgEQgMgDAAgGIgKlkQgBgGAMgEQALgFARAAQAOgBAMAEQAMADAAAGIAAAA").cp();
	this.shape_1864.setTransform(9.9,-17.2);

	this.shape_1865 = new cjs.Shape();
	this.shape_1865.graphics.f().s("#484143").ss(1,0,0,4).p("AAiizIAKFkQAAAGgLAFQgMAEgQABQgPAAgLgEQgMgDAAgGIgKlkQgBgGAMgEQALgFARAAQAOgBAMAEQAMADAAAGIAAAA").cp();
	this.shape_1865.setTransform(9.9,-17.2);

	this.shape_1866 = new cjs.Shape();
	this.shape_1866.graphics.f().s("#484143").ss(1,0,0,4).p("AAiizIAKFkQAAAGgLAFQgMAEgQABQgPAAgLgEQgMgDAAgGIgKlkQgBgGAMgEQALgFARAAQAOgBAMAEQAMADAAAGIAAAA").cp();
	this.shape_1866.setTransform(9.9,-17.2);

	this.shape_1867 = new cjs.Shape();
	this.shape_1867.graphics.f().s("#484143").ss(1,0,0,4).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_1867.setTransform(-24.3,20.6);

	this.shape_1868 = new cjs.Shape();
	this.shape_1868.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1868.setTransform(-22.1,18.6);

	this.shape_1869 = new cjs.Shape();
	this.shape_1869.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1869.setTransform(-23.2,19.5);

	this.shape_1870 = new cjs.Shape();
	this.shape_1870.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1870.setTransform(-19.4,21.9);

	this.shape_1871 = new cjs.Shape();
	this.shape_1871.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1871.setTransform(-19.5,21.1);

	this.shape_1872 = new cjs.Shape();
	this.shape_1872.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1872.setTransform(-20.3,20.3);

	this.shape_1873 = new cjs.Shape();
	this.shape_1873.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1873.setTransform(-21.3,19.6);

	this.shape_1874 = new cjs.Shape();
	this.shape_1874.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1874.setTransform(-25.8,20);

	this.shape_1875 = new cjs.Shape();
	this.shape_1875.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1875.setTransform(-24.8,19.7);

	this.shape_1876 = new cjs.Shape();
	this.shape_1876.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1876.setTransform(-28,21.7);

	this.shape_1877 = new cjs.Shape();
	this.shape_1877.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1877.setTransform(-27,20.8);

	this.shape_1878 = new cjs.Shape();
	this.shape_1878.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1878.setTransform(-28.3,23.5);

	this.shape_1879 = new cjs.Shape();
	this.shape_1879.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1879.setTransform(-24.2,22.2);

	this.shape_1880 = new cjs.Shape();
	this.shape_1880.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1880.setTransform(-25.6,21.3);

	this.shape_1881 = new cjs.Shape();
	this.shape_1881.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1881.setTransform(-26.3,22.5);

	this.shape_1882 = new cjs.Shape();
	this.shape_1882.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1882.setTransform(-26.2,19.6);

	this.shape_1883 = new cjs.Shape();
	this.shape_1883.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1883.setTransform(-21.5,22.3);

	this.shape_1884 = new cjs.Shape();
	this.shape_1884.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1884.setTransform(-22.5,21.6);

	this.shape_1885 = new cjs.Shape();
	this.shape_1885.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1885.setTransform(-21.9,20.9);

	this.shape_1886 = new cjs.Shape();
	this.shape_1886.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1886.setTransform(-22.9,20.1);

	this.shape_1887 = new cjs.Shape();
	this.shape_1887.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1887.setTransform(-25.3,29.8);

	this.shape_1888 = new cjs.Shape();
	this.shape_1888.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1888.setTransform(-25.1,27.5);

	this.shape_1889 = new cjs.Shape();
	this.shape_1889.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1889.setTransform(-28.5,27.8);

	this.shape_1890 = new cjs.Shape();
	this.shape_1890.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1890.setTransform(-23.8,29.4);

	this.shape_1891 = new cjs.Shape();
	this.shape_1891.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1891.setTransform(-22.7,29.8);

	this.shape_1892 = new cjs.Shape();
	this.shape_1892.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1892.setTransform(-17,27.5);

	this.shape_1893 = new cjs.Shape();
	this.shape_1893.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1893.setTransform(-21.3,28.8);

	this.shape_1894 = new cjs.Shape();
	this.shape_1894.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1894.setTransform(-24.7,29);

	this.shape_1895 = new cjs.Shape();
	this.shape_1895.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1895.setTransform(-24.1,27.8);

	this.shape_1896 = new cjs.Shape();
	this.shape_1896.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1896.setTransform(-27.5,28.4);

	this.shape_1897 = new cjs.Shape();
	this.shape_1897.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1897.setTransform(-18.3,27.2);

	this.shape_1898 = new cjs.Shape();
	this.shape_1898.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1898.setTransform(-26.7,27.2);

	this.shape_1899 = new cjs.Shape();
	this.shape_1899.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1899.setTransform(-18.4,28.6);

	this.shape_1900 = new cjs.Shape();
	this.shape_1900.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1900.setTransform(-19.2,29.2);

	this.shape_1901 = new cjs.Shape();
	this.shape_1901.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1901.setTransform(-20.7,29.9);

	this.shape_1902 = new cjs.Shape();
	this.shape_1902.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1902.setTransform(-20.2,28.9);

	this.shape_1903 = new cjs.Shape();
	this.shape_1903.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1903.setTransform(-22.5,29);

	this.shape_1904 = new cjs.Shape();
	this.shape_1904.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1904.setTransform(-21.8,30);

	this.shape_1905 = new cjs.Shape();
	this.shape_1905.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1905.setTransform(-26.7,29.4);

	this.shape_1906 = new cjs.Shape();
	this.shape_1906.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1906.setTransform(-25.7,28.6);

	this.shape_1907 = new cjs.Shape();
	this.shape_1907.graphics.f().s("#484143").ss(1,0,0,4).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1907.setTransform(-24.5,23.6);

	this.shape_1908 = new cjs.Shape();
	this.shape_1908.graphics.f().s("#484143").ss(1,0,0,4).p("ABHgBQABACAAAJQABAIgBAEQgCAMAAABQgDAGgGAEQgDADgIADQgDACgIAFQgCABgEgBQgFAAgCABQgEAAgIADIgNAAQAAAAgKgBQgLAAgCgBQgEgBgIgBQgEgCgHgFQgDgCgGgGQgIgIAAgBQgFgJgBgDIgDgMQAAgGAAgGQABgCADgKQABgDAFgHQADgFAFgFQAHgKABAAIALgIQAKgFABAAQAJgCAEAAQAIgCADAAIAYAEQAJAEACABQACACAIAGQAFAFAEAFIAHAKQACAEAEAHIADAM").cp();
	this.shape_1908.setTransform(-23.3,24.2);

	this.shape_1909 = new cjs.Shape();
	this.shape_1909.graphics.f().s("#484143").ss(1,0,0,4).p("ABHgBQABACAAAJQABAIgBAEQgCAMAAABQgDAGgGAEQgDADgIADQgDACgIAFQgCABgEgBQgFAAgCABQgEAAgIADIgNAAQAAAAgKgBQgLAAgCgBQgEgBgIgBQgEgCgHgFQgDgCgGgGQgIgIAAgBQgFgJgBgDIgDgMQAAgGAAgGQABgCADgKQABgDAFgHQADgFAFgFQAHgKABAAIALgIQAKgFABAAQAJgCAEAAQAIgCADAAIAYAEQAJAEACABQACACAIAGQAFAFAEAFIAHAKQACAEAEAHIADAM").cp();
	this.shape_1909.setTransform(-23.3,24.2);

	this.shape_1910 = new cjs.Shape();
	this.shape_1910.graphics.f().s("#484143").ss(1,0,0,4).p("ABHgBQABACAAAJQABAIgBAEQgCAMAAABQgDAGgGAEQgDADgIADQgDACgIAFQgCABgEgBQgFAAgCABQgEAAgIADIgNAAQAAAAgKgBQgLAAgCgBQgEgBgIgBQgEgCgHgFQgDgCgGgGQgIgIAAgBQgFgJgBgDIgDgMQAAgGAAgGQABgCADgKQABgDAFgHQADgFAFgFQAHgKABAAIALgIQAKgFABAAQAJgCAEAAQAIgCADAAIAYAEQAJAEACABQACACAIAGQAFAFAEAFIAHAKQACAEAEAHIADAM").cp();
	this.shape_1910.setTransform(-23.3,24.2);

	this.shape_1911 = new cjs.Shape();
	this.shape_1911.graphics.lf(["#6C5A20","#52451B"],[0,1],0,-0.8,0,0.7).s().p("AATAJIglAAIAAgRIAlAAIAAAR").cp();
	this.shape_1911.setTransform(8.2,-33.6);

	this.shape_1912 = new cjs.Shape();
	this.shape_1912.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0,0,0,0,0,21.8).s().p("AAAi3QBcAABBA2QBBA2AABLQAABMhBA2QhBA2hcAAQhbAAhBg2QhBg2AAhMQAAhLBBg2QBBg2BbAAIAAAA").cp();
	this.shape_1912.setTransform(-4.1,2.6);

	this.addChild(this.shape_1912,this.shape_1911,this.shape_1910,this.shape_1909,this.shape_1908,this.shape_1907,this.shape_1906,this.shape_1905,this.shape_1904,this.shape_1903,this.shape_1902,this.shape_1901,this.shape_1900,this.shape_1899,this.shape_1898,this.shape_1897,this.shape_1896,this.shape_1895,this.shape_1894,this.shape_1893,this.shape_1892,this.shape_1891,this.shape_1890,this.shape_1889,this.shape_1888,this.shape_1887,this.shape_1886,this.shape_1885,this.shape_1884,this.shape_1883,this.shape_1882,this.shape_1881,this.shape_1880,this.shape_1879,this.shape_1878,this.shape_1877,this.shape_1876,this.shape_1875,this.shape_1874,this.shape_1873,this.shape_1872,this.shape_1871,this.shape_1870,this.shape_1869,this.shape_1868,this.shape_1867,this.shape_1866,this.shape_1865,this.shape_1864,this.shape_1863,this.shape_1862,this.shape_1861,this.shape_1860,this.shape_1859,this.shape_1858,this.shape_1857,this.shape_1856,this.shape_1855,this.shape_1854,this.shape_1853,this.shape_1852,this.shape_1851,this.shape_1850,this.shape_1849,this.shape_1848,this.shape_1847,this.shape_1846,this.shape_1845,this.shape_1844,this.shape_1843,this.shape_1842,this.shape_1841,this.shape_1840,this.shape_1839,this.shape_1838,this.shape_1837,this.shape_1836,this.shape_1835,this.shape_1834,this.shape_1833,this.shape_1832,this.shape_1831,this.shape_1830,this.shape_1829,this.shape_1828,this.shape_1827,this.shape_1826,this.shape_1825,this.shape_1824,this.shape_1823,this.shape_1822,this.shape_1821,this.shape_1820,this.shape_1819,this.shape_1818,this.shape_1817,this.shape_1816,this.shape_1815,this.shape_1814,this.shape_1813,this.shape_1812,this.shape_1811,this.shape_1810,this.shape_1809,this.shape_1808,this.shape_1807,this.shape_1806,this.shape_1805,this.shape_1804,this.shape_1803,this.shape_1802,this.shape_1801,this.shape_1800,this.shape_1799,this.shape_1798,this.shape_1797,this.shape_1796,this.shape_1795,this.shape_1794,this.shape_1793,this.shape_1792,this.shape_1791,this.shape_1790,this.shape_1789,this.shape_1788,this.shape_1787,this.shape_1786,this.shape_1785,this.shape_1784,this.shape_1783,this.shape_1782,this.shape_1781,this.shape_1780,this.shape_1779,this.shape_1778,this.shape_1777,this.shape_1776,this.shape_1775,this.shape_1774,this.shape_1773,this.shape_1772,this.shape_1771,this.shape_1770,this.shape_1769,this.shape_1768,this.shape_1767,this.shape_1766,this.shape_1765,this.shape_1764,this.shape_1763,this.shape_1762,this.shape_1761,this.shape_1760,this.shape_1759,this.shape_1758,this.shape_1757,this.shape_1756,this.shape_1755,this.shape_1754,this.shape_1753,this.shape_1752,this.shape_1751,this.shape_1750,this.shape_1749,this.shape_1748,this.shape_1747,this.shape_1746,this.shape_1745,this.shape_1744,this.shape_1743,this.shape_1742,this.shape_1741,this.shape_1740,this.shape_1739,this.shape_1738,this.shape_1737,this.shape_1736,this.shape_1735,this.shape_1734,this.shape_1733,this.shape_1732,this.shape_1731,this.shape_1730,this.shape_1729,this.shape_1728,this.shape_1727,this.shape_1726,this.shape_1725,this.shape_1724,this.shape_1723,this.shape_1722,this.shape_1721,this.shape_1720,this.shape_1719,this.shape_1718,this.shape_1717,this.shape_1716,this.shape_1715,this.shape_1714,this.shape_1713,this.shape_1712,this.shape_1711,this.shape_1710,this.shape_1709,this.shape_1708,this.shape_1707,this.shape_1706,this.shape_1705,this.shape_1704,this.shape_1703,this.shape_1702,this.shape_1701,this.shape_1700,this.shape_1699,this.shape_1698,this.shape_1697,this.shape_1696,this.shape_1695,this.shape_1694,this.shape_1693,this.shape_1692,this.shape_1691,this.shape_1690,this.shape_1689,this.shape_1688,this.shape_1687,this.shape_1686,this.shape_1685,this.shape_1684,this.shape_1683,this.shape_1682,this.shape_1681,this.shape_1680,this.shape_1679,this.shape_1678,this.shape_1677,this.shape_1676,this.shape_1675,this.shape_1674,this.shape_1673,this.shape_1672,this.shape_1671,this.shape_1670,this.shape_1669,this.shape_1668,this.shape_1667,this.shape_1666,this.shape_1665,this.shape_1664,this.shape_1663,this.shape_1662,this.shape_1661,this.shape_1660,this.shape_1659,this.shape_1658,this.shape_1657,this.shape_1656,this.shape_1655,this.shape_1654,this.shape_1653,this.shape_1652,this.shape_1651,this.shape_1650,this.shape_1649,this.shape_1648,this.shape_1647,this.shape_1646,this.shape_1645,this.shape_1644,this.shape_1643,this.shape_1642,this.shape_1641,this.shape_1640,this.shape_1639,this.shape_1638,this.shape_1637,this.shape_1636,this.shape_1635,this.shape_1634,this.shape_1633,this.shape_1632,this.shape_1631,this.shape_1630,this.shape_1629,this.shape_1628,this.shape_1627,this.shape_1626,this.shape_1625,this.shape_1624,this.shape_1623,this.shape_1622,this.shape_1621,this.shape_1620,this.shape_1619,this.shape_1618,this.shape_1617,this.shape_1616,this.shape_1615,this.shape_1614,this.shape_1613,this.shape_1612,this.shape_1611,this.shape_1610,this.shape_1609,this.shape_1608,this.shape_1607,this.shape_1606,this.shape_1605,this.shape_1604,this.shape_1603,this.shape_1602,this.shape_1601,this.shape_1600,this.shape_1599,this.shape_1598,this.shape_1597,this.shape_1596,this.shape_1595,this.shape_1594,this.shape_1593,this.shape_1592,this.shape_1591,this.shape_1590,this.shape_1589,this.shape_1588,this.shape_1587,this.shape_1586,this.shape_1585,this.shape_1584,this.shape_1583,this.shape_1582,this.shape_1581,this.shape_1580,this.shape_1579);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.7,-48.9,91.6,98);


(lib.IconWood = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9.4,13.1);


(lib.House1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1913 = new cjs.Shape();
	this.shape_1913.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],0,-1.9,-1.6,2.2).s().p("AA+A1IAWgpIinhAIAAAxICRA4").cp();
	this.shape_1913.setTransform(-22,-4.7);

	this.shape_1914 = new cjs.Shape();
	this.shape_1914.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.3).s().p("AACAAQAAADgCAAQgCAAAAgDQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1914.setTransform(-0.1,4.8);

	this.shape_1915 = new cjs.Shape();
	this.shape_1915.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.3).s().p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1915.setTransform(-0.8,5.3);

	this.shape_1916 = new cjs.Shape();
	this.shape_1916.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-3,0,0.1,-3,4.4).s().p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_1916.setTransform(-0.8,8);

	this.shape_1917 = new cjs.Shape();
	this.shape_1917.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-3.5,0.1,3.7).s().p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_1917.setTransform(-0.8,8);

	this.shape_1918 = new cjs.Shape();
	this.shape_1918.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1918.setTransform(-7.4,-3.7);

	this.shape_1919 = new cjs.Shape();
	this.shape_1919.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1919.setTransform(-8.5,-2.9);

	this.shape_1920 = new cjs.Shape();
	this.shape_1920.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.3,0,0.1,-5.3,7.4).s().p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgCAEgKQAEgHACgEIAAAA").cp();
	this.shape_1920.setTransform(-8.6,1.8);

	this.shape_1921 = new cjs.Shape();
	this.shape_1921.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-6,0.1,6.2).s().p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgCAEgKQAEgHACgEIAAAA").cp();
	this.shape_1921.setTransform(-8.6,1.8);

	this.shape_1922 = new cjs.Shape();
	this.shape_1922.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_1922.setTransform(4.2,-1.4);

	this.shape_1923 = new cjs.Shape();
	this.shape_1923.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_1923.setTransform(3.3,-0.7);

	this.shape_1924 = new cjs.Shape();
	this.shape_1924.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-4.2,0,0.1,-4.2,5.9).s().p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgEgBgJgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgFABgGQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_1924.setTransform(3.2,3.1);

	this.shape_1925 = new cjs.Shape();
	this.shape_1925.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-4.7,0.1,5).s().p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgEgBgJgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgFABgGQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_1925.setTransform(3.2,3.1);

	this.shape_1926 = new cjs.Shape();
	this.shape_1926.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_1926.setTransform(31.9,-12.7);

	this.shape_1927 = new cjs.Shape();
	this.shape_1927.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_1927.setTransform(30.8,-11.9);

	this.shape_1928 = new cjs.Shape();
	this.shape_1928.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.3,0,0.1,-5.3,7.4).s().p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_1928.setTransform(30.6,-7.1);

	this.shape_1929 = new cjs.Shape();
	this.shape_1929.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-6,0.1,6.2).s().p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_1929.setTransform(30.6,-7.1);

	this.shape_1930 = new cjs.Shape();
	this.shape_1930.graphics.f("#9A8D5B").s().p("AgjgNQgRASABAfQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANIAAAA").cp();
	this.shape_1930.setTransform(14.2,-14.1);

	this.shape_1931 = new cjs.Shape();
	this.shape_1931.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AAPAAQAAAGgFAEQgEAFgGAAQgFAAgEgFQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_1931.setTransform(12.3,-6.3);

	this.shape_1932 = new cjs.Shape();
	this.shape_1932.graphics.lf(["rgba(180,154,68,0)","#B6A56A","#6C5A20"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_1932.setTransform(13.3,-44.7);

	this.shape_1933 = new cjs.Shape();
	this.shape_1933.graphics.lf(["rgba(180,154,68,0)","#B6A56A","#6C5A20"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_1933.setTransform(5.8,-41.5);

	this.shape_1934 = new cjs.Shape();
	this.shape_1934.graphics.lf(["rgba(180,154,68,0)","#B6A56A","#6C5A20"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_1934.setTransform(-1.9,-38.4);

	this.shape_1935 = new cjs.Shape();
	this.shape_1935.graphics.lf(["rgba(180,154,68,0)","#B6A56A","#6C5A20"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_1935.setTransform(-9.3,-35.5);

	this.shape_1936 = new cjs.Shape();
	this.shape_1936.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_1936.setTransform(-11.4,-7.5);

	this.shape_1937 = new cjs.Shape();
	this.shape_1937.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_1937.setTransform(-11.4,-11.5);

	this.shape_1938 = new cjs.Shape();
	this.shape_1938.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AAXgEIAAASIgtgQIAWgLIAXAJ").cp();
	this.shape_1938.setTransform(-23.9,-11.9);

	this.shape_1939 = new cjs.Shape();
	this.shape_1939.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_1939.setTransform(-23.9,-15.9);

	this.shape_1940 = new cjs.Shape();
	this.shape_1940.graphics.f("#37502C").s().p("ACOAsIkbhxIAAAZIEbByIAAga").cp();
	this.shape_1940.setTransform(-16.8,-23.4);

	this.shape_1941 = new cjs.Shape();
	this.shape_1941.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_1941.setTransform(13.8,-23.5);

	this.shape_1942 = new cjs.Shape();
	this.shape_1942.graphics.lf(["#394434","#3F4B3B","#566350","#687661","#74836D","#7C8B74","#7E8D76","#43503D"],[0,0.004,0.02,0.035,0.055,0.082,0.125,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADZIEVByIAAjaIkVhx").cp();
	this.shape_1942.setTransform(-16.5,-11.7);

	this.shape_1943 = new cjs.Shape();
	this.shape_1943.graphics.f("#433E2A").s().p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_1943.setTransform(14.4,-7.1);

	this.shape_1944 = new cjs.Shape();
	this.shape_1944.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.231,0.635,1],-0.1,-6.9,0.1,6).s().p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_1944.setTransform(14.4,-7.6);

	this.shape_1945 = new cjs.Shape();
	this.shape_1945.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.22,0.761,1],-4.2,0.1,4,0).s().p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_1945.setTransform(14.4,-7.6);

	this.shape_1946 = new cjs.Shape();
	this.shape_1946.graphics.f("#7B4B1E").s().p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_1946.setTransform(14.4,-7.6);

	this.shape_1947 = new cjs.Shape();
	this.shape_1947.graphics.f("#7A7049").s().p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_1947.setTransform(14.4,-8);

	this.shape_1948 = new cjs.Shape();
	this.shape_1948.graphics.lf(["#394434","#3E4A39","#485742","#4F5F47","#506148","#43503D"],[0,0.008,0.035,0.067,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_1948.setTransform(13.5,-11.8);

	this.shape_1949 = new cjs.Shape();
	this.shape_1949.graphics.f("#4D582F").s().p("AhugSIDdBaIh6iPIhjA1").cp();
	this.shape_1949.setTransform(-17.6,-27.7);

	this.shape_1950 = new cjs.Shape();
	this.shape_1950.graphics.f("#37502C").s().p("AiNgUIEbBxIici5Ih/BI").cp();
	this.shape_1950.setTransform(-16.8,-28.3);

	this.shape_1951 = new cjs.Shape();
	this.shape_1951.graphics.lf(["#D7B951","#D3B550","#C7AB4B","#B49A44","#B49A44","#6C5A20"],[0,0.016,0.027,0.043,0.043,1],-3.8,-10.8,4,10.6).s().p("AhUCYIFHh2Iiei4IlHB1ICeC5").cp();
	this.shape_1951.setTransform(5.9,-34.2);

	this.shape_1952 = new cjs.Shape();
	this.shape_1952.graphics.f("#40463E").s().p("AgBAOIgkgOIAogNIAjANIgnAO").cp();
	this.shape_1952.setTransform(0,-58.7);

	this.shape_1953 = new cjs.Shape();
	this.shape_1953.graphics.f("#A4B39A").s().p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_1953.setTransform(0,-58.7);

	this.shape_1954 = new cjs.Shape();
	this.shape_1954.graphics.lf(["#7E8D76","#5B6D53"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgagpIAAA8IA1AWIAAg7Ig1gX").cp();
	this.shape_1954.setTransform(-3.2,-54.5);

	this.shape_1955 = new cjs.Shape();
	this.shape_1955.graphics.lf(["#667C5B","#56694F"],[0.125,1],-0.7,-2.6,0.9,2.8).s().p("AAggpIAAA8Ig/AXIAAg8IA/gX").cp();
	this.shape_1955.setTransform(2.7,-54.6);

	this.shape_1956 = new cjs.Shape();
	this.shape_1956.graphics.f("#9DAB94").s().p("AgFAiIhTgiIBeghIBTAhIheAi").cp();
	this.shape_1956.setTransform(0,-52.6);

	this.shape_1957 = new cjs.Shape();
	this.shape_1957.graphics.lf(["#7E8D76","#43503D"],[0.125,1],2.7,-7.3,-2.6,7.5).s().p("AgohjIAAClIBRAiIAAilIhRgi").cp();
	this.shape_1957.setTransform(-4.8,-42.6);

	this.shape_1958 = new cjs.Shape();
	this.shape_1958.graphics.lf(["#506148","#43503D"],[0.125,1],-2.2,-7,2.4,7.6).s().p("AAwhjIAAClIhfAiIAAikIBfgj").cp();
	this.shape_1958.setTransform(4.1,-42.7);

	this.shape_1959 = new cjs.Shape();
	this.shape_1959.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_1959.setTransform(30.8,-21.2);

	this.shape_1960 = new cjs.Shape();
	this.shape_1960.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_1960.setTransform(29.8,-20.4);

	this.shape_1961 = new cjs.Shape();
	this.shape_1961.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-4.9,0,0.1,-4.9,6.8).s().p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgGADgHIAHgLQACgEAHgGQACgCAJgFIAMgGQAIgEAEgBQAFAAAGgBQALAAACAAQACAAAKAGQAHACAFAEQADACAGAHIAIAJ").cp();
	this.shape_1961.setTransform(29.6,-16);

	this.shape_1962 = new cjs.Shape();
	this.shape_1962.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-5.5,0.1,5.8).s().p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgGADgHIAHgLQACgEAHgGQACgCAJgFIAMgGQAIgEAEgBQAFAAAGgBQALAAACAAQACAAAKAGQAHACAFAEQADACAGAHIAIAJ").cp();
	this.shape_1962.setTransform(29.6,-16);

	this.shape_1963 = new cjs.Shape();
	this.shape_1963.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_1963.setTransform(-1.4,5.9);

	this.shape_1964 = new cjs.Shape();
	this.shape_1964.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAADgCAAQgCAAAAgDQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1964.setTransform(-0.1,4.8);

	this.shape_1965 = new cjs.Shape();
	this.shape_1965.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1965.setTransform(-0.8,5.3);

	this.shape_1966 = new cjs.Shape();
	this.shape_1966.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1966.setTransform(1.4,6.7);

	this.shape_1967 = new cjs.Shape();
	this.shape_1967.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1967.setTransform(1.4,6.2);

	this.shape_1968 = new cjs.Shape();
	this.shape_1968.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAADgCAAQgBAAAAgDQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1968.setTransform(0.9,5.8);

	this.shape_1969 = new cjs.Shape();
	this.shape_1969.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1969.setTransform(0.3,5.3);

	this.shape_1970 = new cjs.Shape();
	this.shape_1970.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1970.setTransform(-2.3,5.6);

	this.shape_1971 = new cjs.Shape();
	this.shape_1971.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1971.setTransform(-1.7,5.4);

	this.shape_1972 = new cjs.Shape();
	this.shape_1972.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgCACAAQACAAAAACIAAAA").cp();
	this.shape_1972.setTransform(-3.6,6.6);

	this.shape_1973 = new cjs.Shape();
	this.shape_1973.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1973.setTransform(-3,6);

	this.shape_1974 = new cjs.Shape();
	this.shape_1974.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1974.setTransform(-3.8,7.7);

	this.shape_1975 = new cjs.Shape();
	this.shape_1975.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1975.setTransform(-1.4,6.8);

	this.shape_1976 = new cjs.Shape();
	this.shape_1976.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1976.setTransform(-2.2,6.4);

	this.shape_1977 = new cjs.Shape();
	this.shape_1977.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgCABAAQACAAAAACIAAAA").cp();
	this.shape_1977.setTransform(-2.6,7.1);

	this.shape_1978 = new cjs.Shape();
	this.shape_1978.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1978.setTransform(-2.5,5.3);

	this.shape_1979 = new cjs.Shape();
	this.shape_1979.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1979.setTransform(0.1,6.9);

	this.shape_1980 = new cjs.Shape();
	this.shape_1980.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1980.setTransform(-0.4,6.5);

	this.shape_1981 = new cjs.Shape();
	this.shape_1981.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1981.setTransform(0,6.1);

	this.shape_1982 = new cjs.Shape();
	this.shape_1982.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1982.setTransform(-0.6,5.6);

	this.shape_1983 = new cjs.Shape();
	this.shape_1983.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1983.setTransform(-2,11.3);

	this.shape_1984 = new cjs.Shape();
	this.shape_1984.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1984.setTransform(-1.9,10);

	this.shape_1985 = new cjs.Shape();
	this.shape_1985.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1985.setTransform(-3.9,10.1);

	this.shape_1986 = new cjs.Shape();
	this.shape_1986.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1986.setTransform(-1.1,11.1);

	this.shape_1987 = new cjs.Shape();
	this.shape_1987.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1987.setTransform(-1.5,11.5);

	this.shape_1988 = new cjs.Shape();
	this.shape_1988.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1988.setTransform(-0.5,11.3);

	this.shape_1989 = new cjs.Shape();
	this.shape_1989.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1989.setTransform(2.8,10);

	this.shape_1990 = new cjs.Shape();
	this.shape_1990.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1990.setTransform(0.3,10.7);

	this.shape_1991 = new cjs.Shape();
	this.shape_1991.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1991.setTransform(-1.7,10.9);

	this.shape_1992 = new cjs.Shape();
	this.shape_1992.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1992.setTransform(-1.3,10.1);

	this.shape_1993 = new cjs.Shape();
	this.shape_1993.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1993.setTransform(-3.3,10.5);

	this.shape_1994 = new cjs.Shape();
	this.shape_1994.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgCACAAQACAAAAACIAAAA").cp();
	this.shape_1994.setTransform(2,9.8);

	this.shape_1995 = new cjs.Shape();
	this.shape_1995.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgCABAAQACAAAAACIAAAA").cp();
	this.shape_1995.setTransform(-2.8,9.8);

	this.shape_1996 = new cjs.Shape();
	this.shape_1996.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_1996.setTransform(-0.4,10.7);

	this.shape_1997 = new cjs.Shape();
	this.shape_1997.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1997.setTransform(1.9,10.6);

	this.shape_1998 = new cjs.Shape();
	this.shape_1998.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_1998.setTransform(1.5,11);

	this.shape_1999 = new cjs.Shape();
	this.shape_1999.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_1999.setTransform(0.6,11.4);

	this.shape_2000 = new cjs.Shape();
	this.shape_2000.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2000.setTransform(0.9,10.8);

	this.shape_2001 = new cjs.Shape();
	this.shape_2001.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2001.setTransform(-0.4,10.9);

	this.shape_2002 = new cjs.Shape();
	this.shape_2002.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2002.setTransform(0,11.4);

	this.shape_2003 = new cjs.Shape();
	this.shape_2003.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2003.setTransform(-2.9,11.1);

	this.shape_2004 = new cjs.Shape();
	this.shape_2004.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2004.setTransform(-2.3,10.6);

	this.shape_2005 = new cjs.Shape();
	this.shape_2005.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2005.setTransform(-1.5,7.7);

	this.shape_2006 = new cjs.Shape();
	this.shape_2006.graphics.f().s("#4B4445").ss(1,1,1).p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2006.setTransform(-0.8,8);

	this.shape_2007 = new cjs.Shape();
	this.shape_2007.graphics.f().s("#4B4445").ss(1,1,1).p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2007.setTransform(-0.8,8);

	this.shape_2008 = new cjs.Shape();
	this.shape_2008.graphics.f().s("#4B4445").ss(1,1,1).p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2008.setTransform(-0.8,8);

	this.shape_2009 = new cjs.Shape();
	this.shape_2009.graphics.f().s("#4B4445").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2009.setTransform(-9.6,-1.7);

	this.shape_2010 = new cjs.Shape();
	this.shape_2010.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2010.setTransform(-7.4,-3.7);

	this.shape_2011 = new cjs.Shape();
	this.shape_2011.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2011.setTransform(-8.5,-2.9);

	this.shape_2012 = new cjs.Shape();
	this.shape_2012.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2012.setTransform(-4.8,-0.4);

	this.shape_2013 = new cjs.Shape();
	this.shape_2013.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2013.setTransform(-4.8,-1.3);

	this.shape_2014 = new cjs.Shape();
	this.shape_2014.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2014.setTransform(-5.6,-2);

	this.shape_2015 = new cjs.Shape();
	this.shape_2015.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2015.setTransform(-6.7,-2.8);

	this.shape_2016 = new cjs.Shape();
	this.shape_2016.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2016.setTransform(-11.2,-2.3);

	this.shape_2017 = new cjs.Shape();
	this.shape_2017.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2017.setTransform(-10.1,-2.7);

	this.shape_2018 = new cjs.Shape();
	this.shape_2018.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2018.setTransform(-13.4,-0.7);

	this.shape_2019 = new cjs.Shape();
	this.shape_2019.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2019.setTransform(-12.3,-1.6);

	this.shape_2020 = new cjs.Shape();
	this.shape_2020.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2020.setTransform(-13.6,1.1);

	this.shape_2021 = new cjs.Shape();
	this.shape_2021.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2021.setTransform(-9.5,-0.2);

	this.shape_2022 = new cjs.Shape();
	this.shape_2022.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2022.setTransform(-10.9,-1);

	this.shape_2023 = new cjs.Shape();
	this.shape_2023.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2023.setTransform(-11.6,0.1);

	this.shape_2024 = new cjs.Shape();
	this.shape_2024.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2024.setTransform(-11.5,-2.7);

	this.shape_2025 = new cjs.Shape();
	this.shape_2025.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2025.setTransform(-6.9,-0.1);

	this.shape_2026 = new cjs.Shape();
	this.shape_2026.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2026.setTransform(-7.9,-0.7);

	this.shape_2027 = new cjs.Shape();
	this.shape_2027.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2027.setTransform(-7.2,-1.5);

	this.shape_2028 = new cjs.Shape();
	this.shape_2028.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2028.setTransform(-8.2,-2.3);

	this.shape_2029 = new cjs.Shape();
	this.shape_2029.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2029.setTransform(-10.6,7.4);

	this.shape_2030 = new cjs.Shape();
	this.shape_2030.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2030.setTransform(-10.5,5.1);

	this.shape_2031 = new cjs.Shape();
	this.shape_2031.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2031.setTransform(-13.9,5.3);

	this.shape_2032 = new cjs.Shape();
	this.shape_2032.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2032.setTransform(-9.2,7);

	this.shape_2033 = new cjs.Shape();
	this.shape_2033.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2033.setTransform(-9.7,7.7);

	this.shape_2034 = new cjs.Shape();
	this.shape_2034.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2034.setTransform(-8,7.4);

	this.shape_2035 = new cjs.Shape();
	this.shape_2035.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2035.setTransform(-2.4,5.1);

	this.shape_2036 = new cjs.Shape();
	this.shape_2036.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2036.setTransform(-6.6,6.4);

	this.shape_2037 = new cjs.Shape();
	this.shape_2037.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2037.setTransform(-10.1,6.6);

	this.shape_2038 = new cjs.Shape();
	this.shape_2038.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2038.setTransform(-9.4,5.4);

	this.shape_2039 = new cjs.Shape();
	this.shape_2039.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2039.setTransform(-12.9,6);

	this.shape_2040 = new cjs.Shape();
	this.shape_2040.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2040.setTransform(-3.6,4.8);

	this.shape_2041 = new cjs.Shape();
	this.shape_2041.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2041.setTransform(-12,4.8);

	this.shape_2042 = new cjs.Shape();
	this.shape_2042.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2042.setTransform(-7.9,7.1);

	this.shape_2043 = new cjs.Shape();
	this.shape_2043.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2043.setTransform(-3.8,6.2);

	this.shape_2044 = new cjs.Shape();
	this.shape_2044.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2044.setTransform(-4.6,6.8);

	this.shape_2045 = new cjs.Shape();
	this.shape_2045.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2045.setTransform(-6,7.5);

	this.shape_2046 = new cjs.Shape();
	this.shape_2046.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2046.setTransform(-5.5,6.5);

	this.shape_2047 = new cjs.Shape();
	this.shape_2047.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2047.setTransform(-7.8,6.6);

	this.shape_2048 = new cjs.Shape();
	this.shape_2048.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2048.setTransform(-7.2,7.6);

	this.shape_2049 = new cjs.Shape();
	this.shape_2049.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2049.setTransform(-12.1,7);

	this.shape_2050 = new cjs.Shape();
	this.shape_2050.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2050.setTransform(-11.1,6.2);

	this.shape_2051 = new cjs.Shape();
	this.shape_2051.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2051.setTransform(-9.8,1.2);

	this.shape_2052 = new cjs.Shape();
	this.shape_2052.graphics.f().s("#4B4445").ss(1,1,1).p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgCAEgKQAEgHACgEIAAAA").cp();
	this.shape_2052.setTransform(-8.6,1.8);

	this.shape_2053 = new cjs.Shape();
	this.shape_2053.graphics.f().s("#4B4445").ss(1,1,1).p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgCAEgKQAEgHACgEIAAAA").cp();
	this.shape_2053.setTransform(-8.6,1.8);

	this.shape_2054 = new cjs.Shape();
	this.shape_2054.graphics.f().s("#4B4445").ss(1,1,1).p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgCAEgKQAEgHACgEIAAAA").cp();
	this.shape_2054.setTransform(-8.6,1.8);

	this.shape_2055 = new cjs.Shape();
	this.shape_2055.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2055.setTransform(2.4,0.2);

	this.shape_2056 = new cjs.Shape();
	this.shape_2056.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2056.setTransform(4.2,-1.4);

	this.shape_2057 = new cjs.Shape();
	this.shape_2057.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2057.setTransform(3.3,-0.7);

	this.shape_2058 = new cjs.Shape();
	this.shape_2058.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgDAAAAgEQAAgCADAAQADAAAAACIAAAA").cp();
	this.shape_2058.setTransform(6.3,1.2);

	this.shape_2059 = new cjs.Shape();
	this.shape_2059.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2059.setTransform(6.3,0.5);

	this.shape_2060 = new cjs.Shape();
	this.shape_2060.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2060.setTransform(5.6,0);

	this.shape_2061 = new cjs.Shape();
	this.shape_2061.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2061.setTransform(4.8,-0.6);

	this.shape_2062 = new cjs.Shape();
	this.shape_2062.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2062.setTransform(1.1,-0.2);

	this.shape_2063 = new cjs.Shape();
	this.shape_2063.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2063.setTransform(2,-0.5);

	this.shape_2064 = new cjs.Shape();
	this.shape_2064.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2064.setTransform(-0.6,1);

	this.shape_2065 = new cjs.Shape();
	this.shape_2065.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2065.setTransform(0.2,0.3);

	this.shape_2066 = new cjs.Shape();
	this.shape_2066.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2066.setTransform(-0.8,2.5);

	this.shape_2067 = new cjs.Shape();
	this.shape_2067.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2067.setTransform(2.4,1.4);

	this.shape_2068 = new cjs.Shape();
	this.shape_2068.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2068.setTransform(1.3,0.8);

	this.shape_2069 = new cjs.Shape();
	this.shape_2069.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2069.setTransform(0.8,1.7);

	this.shape_2070 = new cjs.Shape();
	this.shape_2070.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2070.setTransform(0.8,-0.6);

	this.shape_2071 = new cjs.Shape();
	this.shape_2071.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2071.setTransform(4.6,1.5);

	this.shape_2072 = new cjs.Shape();
	this.shape_2072.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2072.setTransform(3.8,1);

	this.shape_2073 = new cjs.Shape();
	this.shape_2073.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2073.setTransform(4.3,0.4);

	this.shape_2074 = new cjs.Shape();
	this.shape_2074.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2074.setTransform(3.5,-0.2);

	this.shape_2075 = new cjs.Shape();
	this.shape_2075.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2075.setTransform(1.6,7.6);

	this.shape_2076 = new cjs.Shape();
	this.shape_2076.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2076.setTransform(1.7,5.7);

	this.shape_2077 = new cjs.Shape();
	this.shape_2077.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2077.setTransform(-1,5.9);

	this.shape_2078 = new cjs.Shape();
	this.shape_2078.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2078.setTransform(2.8,7.3);

	this.shape_2079 = new cjs.Shape();
	this.shape_2079.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2079.setTransform(2.3,7.9);

	this.shape_2080 = new cjs.Shape();
	this.shape_2080.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2080.setTransform(3.7,7.5);

	this.shape_2081 = new cjs.Shape();
	this.shape_2081.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2081.setTransform(8.2,5.7);

	this.shape_2082 = new cjs.Shape();
	this.shape_2082.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2082.setTransform(4.8,6.7);

	this.shape_2083 = new cjs.Shape();
	this.shape_2083.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2083.setTransform(2,6.9);

	this.shape_2084 = new cjs.Shape();
	this.shape_2084.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgDAAAAgDQAAgDADAAQADAAAAADIAAAA").cp();
	this.shape_2084.setTransform(2.6,6);

	this.shape_2085 = new cjs.Shape();
	this.shape_2085.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2085.setTransform(-0.2,6.4);

	this.shape_2086 = new cjs.Shape();
	this.shape_2086.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2086.setTransform(7.2,5.5);

	this.shape_2087 = new cjs.Shape();
	this.shape_2087.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2087.setTransform(0.5,5.5);

	this.shape_2088 = new cjs.Shape();
	this.shape_2088.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2088.setTransform(3.8,7.3);

	this.shape_2089 = new cjs.Shape();
	this.shape_2089.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2089.setTransform(7.1,6.6);

	this.shape_2090 = new cjs.Shape();
	this.shape_2090.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2090.setTransform(6.5,7.1);

	this.shape_2091 = new cjs.Shape();
	this.shape_2091.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2091.setTransform(5.3,7.7);

	this.shape_2092 = new cjs.Shape();
	this.shape_2092.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2092.setTransform(5.7,6.8);

	this.shape_2093 = new cjs.Shape();
	this.shape_2093.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2093.setTransform(3.9,7);

	this.shape_2094 = new cjs.Shape();
	this.shape_2094.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2094.setTransform(4.4,7.7);

	this.shape_2095 = new cjs.Shape();
	this.shape_2095.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgCAAAAgEQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2095.setTransform(0.4,7.3);

	this.shape_2096 = new cjs.Shape();
	this.shape_2096.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2096.setTransform(1.2,6.6);

	this.shape_2097 = new cjs.Shape();
	this.shape_2097.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2097.setTransform(2.2,2.6);

	this.shape_2098 = new cjs.Shape();
	this.shape_2098.graphics.f().s("#4B4445").ss(1,1,1).p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgEgBgJgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgFABgGQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2098.setTransform(3.2,3.1);

	this.shape_2099 = new cjs.Shape();
	this.shape_2099.graphics.f().s("#4B4445").ss(1,1,1).p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgEgBgJgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgFABgGQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2099.setTransform(3.2,3.1);

	this.shape_2100 = new cjs.Shape();
	this.shape_2100.graphics.f().s("#4B4445").ss(1,1,1).p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgEgBgJgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgFABgGQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2100.setTransform(3.2,3.1);

	this.shape_2101 = new cjs.Shape();
	this.shape_2101.graphics.f().s("#4B4445").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2101.setTransform(29.7,-10.7);

	this.shape_2102 = new cjs.Shape();
	this.shape_2102.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2102.setTransform(31.9,-12.7);

	this.shape_2103 = new cjs.Shape();
	this.shape_2103.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2103.setTransform(30.8,-11.9);

	this.shape_2104 = new cjs.Shape();
	this.shape_2104.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2104.setTransform(34.6,-9.4);

	this.shape_2105 = new cjs.Shape();
	this.shape_2105.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2105.setTransform(34.5,-10.3);

	this.shape_2106 = new cjs.Shape();
	this.shape_2106.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2106.setTransform(33.7,-11);

	this.shape_2107 = new cjs.Shape();
	this.shape_2107.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2107.setTransform(32.7,-11.8);

	this.shape_2108 = new cjs.Shape();
	this.shape_2108.graphics.f().s("#4B4445").ss(1,1,1).p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFIAAAA").cp();
	this.shape_2108.setTransform(28.1,-11.3);

	this.shape_2109 = new cjs.Shape();
	this.shape_2109.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2109.setTransform(29.2,-11.7);

	this.shape_2110 = new cjs.Shape();
	this.shape_2110.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2110.setTransform(26,-9.7);

	this.shape_2111 = new cjs.Shape();
	this.shape_2111.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2111.setTransform(27,-10.6);

	this.shape_2112 = new cjs.Shape();
	this.shape_2112.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2112.setTransform(25.7,-7.8);

	this.shape_2113 = new cjs.Shape();
	this.shape_2113.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2113.setTransform(29.8,-9.2);

	this.shape_2114 = new cjs.Shape();
	this.shape_2114.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2114.setTransform(28.4,-10);

	this.shape_2115 = new cjs.Shape();
	this.shape_2115.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2115.setTransform(27.7,-8.8);

	this.shape_2116 = new cjs.Shape();
	this.shape_2116.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2116.setTransform(27.8,-11.7);

	this.shape_2117 = new cjs.Shape();
	this.shape_2117.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2117.setTransform(32.5,-9.1);

	this.shape_2118 = new cjs.Shape();
	this.shape_2118.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2118.setTransform(31.4,-9.7);

	this.shape_2119 = new cjs.Shape();
	this.shape_2119.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2119.setTransform(32.1,-10.5);

	this.shape_2120 = new cjs.Shape();
	this.shape_2120.graphics.f().s("#4B4445").ss(1,1,1).p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFIAAAA").cp();
	this.shape_2120.setTransform(31.1,-11.3);

	this.shape_2121 = new cjs.Shape();
	this.shape_2121.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2121.setTransform(28.7,-1.5);

	this.shape_2122 = new cjs.Shape();
	this.shape_2122.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2122.setTransform(28.8,-3.8);

	this.shape_2123 = new cjs.Shape();
	this.shape_2123.graphics.f().s("#4B4445").ss(1,1,1).p("AAAgDQAFAAAAADQAAAEgFAAQgEAAAAgEQAAgDAEAAIAAAA").cp();
	this.shape_2123.setTransform(25.5,-3.6);

	this.shape_2124 = new cjs.Shape();
	this.shape_2124.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2124.setTransform(30.2,-1.9);

	this.shape_2125 = new cjs.Shape();
	this.shape_2125.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2125.setTransform(29.6,-1.2);

	this.shape_2126 = new cjs.Shape();
	this.shape_2126.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2126.setTransform(31.3,-1.6);

	this.shape_2127 = new cjs.Shape();
	this.shape_2127.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2127.setTransform(36.9,-3.8);

	this.shape_2128 = new cjs.Shape();
	this.shape_2128.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2128.setTransform(32.7,-2.6);

	this.shape_2129 = new cjs.Shape();
	this.shape_2129.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2129.setTransform(29.2,-2.3);

	this.shape_2130 = new cjs.Shape();
	this.shape_2130.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2130.setTransform(29.9,-3.5);

	this.shape_2131 = new cjs.Shape();
	this.shape_2131.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2131.setTransform(26.4,-2.9);

	this.shape_2132 = new cjs.Shape();
	this.shape_2132.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2132.setTransform(35.7,-4.1);

	this.shape_2133 = new cjs.Shape();
	this.shape_2133.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2133.setTransform(27.3,-4.1);

	this.shape_2134 = new cjs.Shape();
	this.shape_2134.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2134.setTransform(31.4,-0.9);

	this.shape_2135 = new cjs.Shape();
	this.shape_2135.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2135.setTransform(35.5,-2.7);

	this.shape_2136 = new cjs.Shape();
	this.shape_2136.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2136.setTransform(34.7,-2.1);

	this.shape_2137 = new cjs.Shape();
	this.shape_2137.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2137.setTransform(33.3,-1.4);

	this.shape_2138 = new cjs.Shape();
	this.shape_2138.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2138.setTransform(33.8,-2.4);

	this.shape_2139 = new cjs.Shape();
	this.shape_2139.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2139.setTransform(31.5,-2.3);

	this.shape_2140 = new cjs.Shape();
	this.shape_2140.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2140.setTransform(32.1,-1.4);

	this.shape_2141 = new cjs.Shape();
	this.shape_2141.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2141.setTransform(27.2,-1.9);

	this.shape_2142 = new cjs.Shape();
	this.shape_2142.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2142.setTransform(28.2,-2.8);

	this.shape_2143 = new cjs.Shape();
	this.shape_2143.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2143.setTransform(29.5,-7.7);

	this.shape_2144 = new cjs.Shape();
	this.shape_2144.graphics.f().s("#4B4445").ss(1,1,1).p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2144.setTransform(30.6,-7.1);

	this.shape_2145 = new cjs.Shape();
	this.shape_2145.graphics.f().s("#4B4445").ss(1,1,1).p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2145.setTransform(30.6,-7.1);

	this.shape_2146 = new cjs.Shape();
	this.shape_2146.graphics.f().s("#4B4445").ss(1,1,1).p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2146.setTransform(30.6,-7.1);

	this.shape_2147 = new cjs.Shape();
	this.shape_2147.graphics.f().s("#4B4445").ss(1,1,1).p("AgjgNQgRASABAfQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANIAAAA").cp();
	this.shape_2147.setTransform(14.2,-14.1);

	this.shape_2148 = new cjs.Shape();
	this.shape_2148.graphics.f().s("#4B4445").ss(1,1,1).p("AAJAAQAAADgDADQgCADgEAAQgIAAAAgJQAAgIAIAAQAEAAACACQADADAAADIAAAA").cp();
	this.shape_2148.setTransform(12.4,-6.3);

	this.shape_2149 = new cjs.Shape();
	this.shape_2149.graphics.f().s("#4B4445").ss(1,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgFAAgEgFQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_2149.setTransform(12.3,-6.3);

	this.shape_2150 = new cjs.Shape();
	this.shape_2150.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2150.setTransform(-0.6,-23.7);

	this.shape_2151 = new cjs.Shape();
	this.shape_2151.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2151.setTransform(7.5,-26.4);

	this.shape_2152 = new cjs.Shape();
	this.shape_2152.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2152.setTransform(23.7,-32.7);

	this.shape_2153 = new cjs.Shape();
	this.shape_2153.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAmIg2AXIghgp");
	this.shape_2153.setTransform(16.6,-29.8);

	this.shape_2154 = new cjs.Shape();
	this.shape_2154.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2154.setTransform(16.2,-37.7);

	this.shape_2155 = new cjs.Shape();
	this.shape_2155.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2155.setTransform(7.5,-33.9);

	this.shape_2156 = new cjs.Shape();
	this.shape_2156.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2156.setTransform(13.3,-44.7);

	this.shape_2157 = new cjs.Shape();
	this.shape_2157.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2157.setTransform(5.8,-41.5);

	this.shape_2158 = new cjs.Shape();
	this.shape_2158.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2158.setTransform(-1.5,-30.6);

	this.shape_2159 = new cjs.Shape();
	this.shape_2159.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2159.setTransform(-1.9,-38.4);

	this.shape_2160 = new cjs.Shape();
	this.shape_2160.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2160.setTransform(-9.3,-35.5);

	this.shape_2161 = new cjs.Shape();
	this.shape_2161.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_2161.setTransform(-11.4,-7.5);

	this.shape_2162 = new cjs.Shape();
	this.shape_2162.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_2162.setTransform(-11.4,-11.5);

	this.shape_2163 = new cjs.Shape();
	this.shape_2163.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgEIAAASIgtgQIAWgLIAXAJ").cp();
	this.shape_2163.setTransform(-23.9,-11.9);

	this.shape_2164 = new cjs.Shape();
	this.shape_2164.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_2164.setTransform(-23.9,-15.9);

	this.shape_2165 = new cjs.Shape();
	this.shape_2165.graphics.f().s("#4B4445").ss(1,1,1).p("ACOAsIkbhxIAAAZIEbByIAAga").cp();
	this.shape_2165.setTransform(-16.8,-23.4);

	this.shape_2166 = new cjs.Shape();
	this.shape_2166.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_2166.setTransform(13.8,-23.5);

	this.shape_2167 = new cjs.Shape();
	this.shape_2167.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADZIEVByIAAjaIkVhx").cp();
	this.shape_2167.setTransform(-16.5,-11.7);

	this.shape_2168 = new cjs.Shape();
	this.shape_2168.graphics.f().s("#4B4445").ss(1,1,1).p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_2168.setTransform(14.4,-7.1);

	this.shape_2169 = new cjs.Shape();
	this.shape_2169.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2169.setTransform(14.4,-7.6);

	this.shape_2170 = new cjs.Shape();
	this.shape_2170.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2170.setTransform(14.4,-7.6);

	this.shape_2171 = new cjs.Shape();
	this.shape_2171.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2171.setTransform(14.4,-7.6);

	this.shape_2172 = new cjs.Shape();
	this.shape_2172.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2172.setTransform(14.4,-7.6);

	this.shape_2173 = new cjs.Shape();
	this.shape_2173.graphics.f().s("#4B4445").ss(1,1,1).p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_2173.setTransform(14.4,-8);

	this.shape_2174 = new cjs.Shape();
	this.shape_2174.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_2174.setTransform(13.5,-11.8);

	this.shape_2175 = new cjs.Shape();
	this.shape_2175.graphics.f().s("#4B4445").ss(1,1,1).p("AhugSIDdBaIh6iPIhjA1").cp();
	this.shape_2175.setTransform(-17.6,-27.7);

	this.shape_2176 = new cjs.Shape();
	this.shape_2176.graphics.f().s("#4B4445").ss(1,1,1).p("AiNgUIEbBxIici5Ih/BI").cp();
	this.shape_2176.setTransform(-16.8,-28.3);

	this.shape_2177 = new cjs.Shape();
	this.shape_2177.graphics.f().s("#4B4445").ss(1,1,1).p("AhUCYIFHh2Iiei4IlHB1ICeC5").cp();
	this.shape_2177.setTransform(5.9,-34.2);

	this.shape_2178 = new cjs.Shape();
	this.shape_2178.graphics.f().s("#4B4445").ss(1,1,1).p("AgBAOIgkgOIAogNIAjANIgnAO").cp();
	this.shape_2178.setTransform(0,-58.7);

	this.shape_2179 = new cjs.Shape();
	this.shape_2179.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_2179.setTransform(0,-58.7);

	this.shape_2180 = new cjs.Shape();
	this.shape_2180.graphics.f().s("#4B4445").ss(1,1,1).p("AgagpIAAA8IA1AWIAAg7Ig1gX").cp();
	this.shape_2180.setTransform(-3.2,-54.5);

	this.shape_2181 = new cjs.Shape();
	this.shape_2181.graphics.f().s("#4B4445").ss(1,1,1).p("AAggpIAAA8Ig/AXIAAg8IA/gX").cp();
	this.shape_2181.setTransform(2.7,-54.6);

	this.shape_2182 = new cjs.Shape();
	this.shape_2182.graphics.f().s("#4B4445").ss(1,1,1).p("AgFAiIhTgiIBeghIBTAhIheAi").cp();
	this.shape_2182.setTransform(0,-52.6);

	this.shape_2183 = new cjs.Shape();
	this.shape_2183.graphics.f().s("#4B4445").ss(1,1,1).p("AgohjIAAClIBRAiIAAilIhRgi").cp();
	this.shape_2183.setTransform(-4.8,-42.6);

	this.shape_2184 = new cjs.Shape();
	this.shape_2184.graphics.f().s("#4B4445").ss(1,1,1).p("AAwhjIAAClIhfAiIAAikIBfgj").cp();
	this.shape_2184.setTransform(4.1,-42.7);

	this.shape_2185 = new cjs.Shape();
	this.shape_2185.graphics.f().s("#4B4445").ss(1,1,1).p("AAGAAQAAAGgGAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2185.setTransform(28.7,-19.3);

	this.shape_2186 = new cjs.Shape();
	this.shape_2186.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2186.setTransform(30.8,-21.2);

	this.shape_2187 = new cjs.Shape();
	this.shape_2187.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2187.setTransform(29.8,-20.4);

	this.shape_2188 = new cjs.Shape();
	this.shape_2188.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2188.setTransform(33.3,-18.1);

	this.shape_2189 = new cjs.Shape();
	this.shape_2189.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2189.setTransform(33.2,-18.9);

	this.shape_2190 = new cjs.Shape();
	this.shape_2190.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2190.setTransform(32.4,-19.6);

	this.shape_2191 = new cjs.Shape();
	this.shape_2191.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2191.setTransform(31.5,-20.3);

	this.shape_2192 = new cjs.Shape();
	this.shape_2192.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2192.setTransform(27.3,-19.8);

	this.shape_2193 = new cjs.Shape();
	this.shape_2193.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2193.setTransform(28.3,-20.2);

	this.shape_2194 = new cjs.Shape();
	this.shape_2194.graphics.f().s("#4B4445").ss(1,1,1).p("AAAgDQAEAAAAADQAAAEgEAAQgDAAAAgEQAAgDADAAIAAAA").cp();
	this.shape_2194.setTransform(25.3,-18.3);

	this.shape_2195 = new cjs.Shape();
	this.shape_2195.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2195.setTransform(26.2,-19.2);

	this.shape_2196 = new cjs.Shape();
	this.shape_2196.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2196.setTransform(25,-16.6);

	this.shape_2197 = new cjs.Shape();
	this.shape_2197.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2197.setTransform(28.8,-17.9);

	this.shape_2198 = new cjs.Shape();
	this.shape_2198.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2198.setTransform(27.5,-18.6);

	this.shape_2199 = new cjs.Shape();
	this.shape_2199.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2199.setTransform(26.9,-17.5);

	this.shape_2200 = new cjs.Shape();
	this.shape_2200.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2200.setTransform(27,-20.2);

	this.shape_2201 = new cjs.Shape();
	this.shape_2201.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2201.setTransform(31.3,-17.8);

	this.shape_2202 = new cjs.Shape();
	this.shape_2202.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2202.setTransform(30.4,-18.4);

	this.shape_2203 = new cjs.Shape();
	this.shape_2203.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2203.setTransform(31,-19.1);

	this.shape_2204 = new cjs.Shape();
	this.shape_2204.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2204.setTransform(30,-19.8);

	this.shape_2205 = new cjs.Shape();
	this.shape_2205.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2205.setTransform(27.9,-10.8);

	this.shape_2206 = new cjs.Shape();
	this.shape_2206.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2206.setTransform(28,-12.9);

	this.shape_2207 = new cjs.Shape();
	this.shape_2207.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2207.setTransform(24.8,-12.7);

	this.shape_2208 = new cjs.Shape();
	this.shape_2208.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2208.setTransform(29.2,-11.2);

	this.shape_2209 = new cjs.Shape();
	this.shape_2209.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2209.setTransform(28.7,-10.5);

	this.shape_2210 = new cjs.Shape();
	this.shape_2210.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2210.setTransform(30.2,-10.9);

	this.shape_2211 = new cjs.Shape();
	this.shape_2211.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2211.setTransform(35.4,-13);

	this.shape_2212 = new cjs.Shape();
	this.shape_2212.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2212.setTransform(31.5,-11.8);

	this.shape_2213 = new cjs.Shape();
	this.shape_2213.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2213.setTransform(28.3,-11.6);

	this.shape_2214 = new cjs.Shape();
	this.shape_2214.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2214.setTransform(29,-12.7);

	this.shape_2215 = new cjs.Shape();
	this.shape_2215.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2215.setTransform(25.7,-12.1);

	this.shape_2216 = new cjs.Shape();
	this.shape_2216.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2216.setTransform(34.3,-13.2);

	this.shape_2217 = new cjs.Shape();
	this.shape_2217.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2217.setTransform(26.5,-13.2);

	this.shape_2218 = new cjs.Shape();
	this.shape_2218.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2218.setTransform(30.4,-10.2);

	this.shape_2219 = new cjs.Shape();
	this.shape_2219.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2219.setTransform(34.2,-11.9);

	this.shape_2220 = new cjs.Shape();
	this.shape_2220.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2220.setTransform(33.4,-11.4);

	this.shape_2221 = new cjs.Shape();
	this.shape_2221.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2221.setTransform(32.1,-10.7);

	this.shape_2222 = new cjs.Shape();
	this.shape_2222.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2222.setTransform(32.5,-11.7);

	this.shape_2223 = new cjs.Shape();
	this.shape_2223.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2223.setTransform(30.4,-11.5);

	this.shape_2224 = new cjs.Shape();
	this.shape_2224.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2224.setTransform(31,-10.7);

	this.shape_2225 = new cjs.Shape();
	this.shape_2225.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2225.setTransform(26.5,-11.2);

	this.shape_2226 = new cjs.Shape();
	this.shape_2226.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2226.setTransform(27.4,-12);

	this.shape_2227 = new cjs.Shape();
	this.shape_2227.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2227.setTransform(28.6,-16.5);

	this.shape_2228 = new cjs.Shape();
	this.shape_2228.graphics.f().s("#4B4445").ss(1,1,1).p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgGADgHIAHgLQACgEAHgGQACgCAJgFIAMgGQAIgEAEgBQAFAAAGgBQALAAACAAQACAAAKAGQAHACAFAEQADACAGAHIAIAJ").cp();
	this.shape_2228.setTransform(29.6,-16);

	this.shape_2229 = new cjs.Shape();
	this.shape_2229.graphics.f().s("#4B4445").ss(1,1,1).p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgGADgHIAHgLQACgEAHgGQACgCAJgFIAMgGQAIgEAEgBQAFAAAGgBQALAAACAAQACAAAKAGQAHACAFAEQADACAGAHIAIAJ").cp();
	this.shape_2229.setTransform(29.6,-16);

	this.shape_2230 = new cjs.Shape();
	this.shape_2230.graphics.f().s("#4B4445").ss(1,1,1).p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgGADgHIAHgLQACgEAHgGQACgCAJgFIAMgGQAIgEAEgBQAFAAAGgBQALAAACAAQACAAAKAGQAHACAFAEQADACAGAHIAIAJ").cp();
	this.shape_2230.setTransform(29.6,-16);

	this.shape_2231 = new cjs.Shape();
	this.shape_2231.graphics.rf(["#32680B","rgba(50,104,11,0.796)","rgba(50,104,11,0)"],[0,0.09,1],0,0,0,0,0,26.9).s().p("AC+hKQBOAfAAArQAAAshOAfQhQAghuAAQhuAAhPggQhOgfAAgsQAAgrBOgfQBPggBuAAQBuAABQAgIAAAA").cp();
	this.shape_2231.setTransform(28.6,-8.7);

	this.addChild(this.shape_2231,this.shape_2230,this.shape_2229,this.shape_2228,this.shape_2227,this.shape_2226,this.shape_2225,this.shape_2224,this.shape_2223,this.shape_2222,this.shape_2221,this.shape_2220,this.shape_2219,this.shape_2218,this.shape_2217,this.shape_2216,this.shape_2215,this.shape_2214,this.shape_2213,this.shape_2212,this.shape_2211,this.shape_2210,this.shape_2209,this.shape_2208,this.shape_2207,this.shape_2206,this.shape_2205,this.shape_2204,this.shape_2203,this.shape_2202,this.shape_2201,this.shape_2200,this.shape_2199,this.shape_2198,this.shape_2197,this.shape_2196,this.shape_2195,this.shape_2194,this.shape_2193,this.shape_2192,this.shape_2191,this.shape_2190,this.shape_2189,this.shape_2188,this.shape_2187,this.shape_2186,this.shape_2185,this.shape_2184,this.shape_2183,this.shape_2182,this.shape_2181,this.shape_2180,this.shape_2179,this.shape_2178,this.shape_2177,this.shape_2176,this.shape_2175,this.shape_2174,this.shape_2173,this.shape_2172,this.shape_2171,this.shape_2170,this.shape_2169,this.shape_2168,this.shape_2167,this.shape_2166,this.shape_2165,this.shape_2164,this.shape_2163,this.shape_2162,this.shape_2161,this.shape_2160,this.shape_2159,this.shape_2158,this.shape_2157,this.shape_2156,this.shape_2155,this.shape_2154,this.shape_2153,this.shape_2152,this.shape_2151,this.shape_2150,this.shape_2149,this.shape_2148,this.shape_2147,this.shape_2146,this.shape_2145,this.shape_2144,this.shape_2143,this.shape_2142,this.shape_2141,this.shape_2140,this.shape_2139,this.shape_2138,this.shape_2137,this.shape_2136,this.shape_2135,this.shape_2134,this.shape_2133,this.shape_2132,this.shape_2131,this.shape_2130,this.shape_2129,this.shape_2128,this.shape_2127,this.shape_2126,this.shape_2125,this.shape_2124,this.shape_2123,this.shape_2122,this.shape_2121,this.shape_2120,this.shape_2119,this.shape_2118,this.shape_2117,this.shape_2116,this.shape_2115,this.shape_2114,this.shape_2113,this.shape_2112,this.shape_2111,this.shape_2110,this.shape_2109,this.shape_2108,this.shape_2107,this.shape_2106,this.shape_2105,this.shape_2104,this.shape_2103,this.shape_2102,this.shape_2101,this.shape_2100,this.shape_2099,this.shape_2098,this.shape_2097,this.shape_2096,this.shape_2095,this.shape_2094,this.shape_2093,this.shape_2092,this.shape_2091,this.shape_2090,this.shape_2089,this.shape_2088,this.shape_2087,this.shape_2086,this.shape_2085,this.shape_2084,this.shape_2083,this.shape_2082,this.shape_2081,this.shape_2080,this.shape_2079,this.shape_2078,this.shape_2077,this.shape_2076,this.shape_2075,this.shape_2074,this.shape_2073,this.shape_2072,this.shape_2071,this.shape_2070,this.shape_2069,this.shape_2068,this.shape_2067,this.shape_2066,this.shape_2065,this.shape_2064,this.shape_2063,this.shape_2062,this.shape_2061,this.shape_2060,this.shape_2059,this.shape_2058,this.shape_2057,this.shape_2056,this.shape_2055,this.shape_2054,this.shape_2053,this.shape_2052,this.shape_2051,this.shape_2050,this.shape_2049,this.shape_2048,this.shape_2047,this.shape_2046,this.shape_2045,this.shape_2044,this.shape_2043,this.shape_2042,this.shape_2041,this.shape_2040,this.shape_2039,this.shape_2038,this.shape_2037,this.shape_2036,this.shape_2035,this.shape_2034,this.shape_2033,this.shape_2032,this.shape_2031,this.shape_2030,this.shape_2029,this.shape_2028,this.shape_2027,this.shape_2026,this.shape_2025,this.shape_2024,this.shape_2023,this.shape_2022,this.shape_2021,this.shape_2020,this.shape_2019,this.shape_2018,this.shape_2017,this.shape_2016,this.shape_2015,this.shape_2014,this.shape_2013,this.shape_2012,this.shape_2011,this.shape_2010,this.shape_2009,this.shape_2008,this.shape_2007,this.shape_2006,this.shape_2005,this.shape_2004,this.shape_2003,this.shape_2002,this.shape_2001,this.shape_2000,this.shape_1999,this.shape_1998,this.shape_1997,this.shape_1996,this.shape_1995,this.shape_1994,this.shape_1993,this.shape_1992,this.shape_1991,this.shape_1990,this.shape_1989,this.shape_1988,this.shape_1987,this.shape_1986,this.shape_1985,this.shape_1984,this.shape_1983,this.shape_1982,this.shape_1981,this.shape_1980,this.shape_1979,this.shape_1978,this.shape_1977,this.shape_1976,this.shape_1975,this.shape_1974,this.shape_1973,this.shape_1972,this.shape_1971,this.shape_1970,this.shape_1969,this.shape_1968,this.shape_1967,this.shape_1966,this.shape_1965,this.shape_1964,this.shape_1963,this.shape_1962,this.shape_1961,this.shape_1960,this.shape_1959,this.shape_1958,this.shape_1957,this.shape_1956,this.shape_1955,this.shape_1954,this.shape_1953,this.shape_1952,this.shape_1951,this.shape_1950,this.shape_1949,this.shape_1948,this.shape_1947,this.shape_1946,this.shape_1945,this.shape_1944,this.shape_1943,this.shape_1942,this.shape_1941,this.shape_1940,this.shape_1939,this.shape_1938,this.shape_1937,this.shape_1936,this.shape_1935,this.shape_1934,this.shape_1933,this.shape_1932,this.shape_1931,this.shape_1930,this.shape_1929,this.shape_1928,this.shape_1927,this.shape_1926,this.shape_1925,this.shape_1924,this.shape_1923,this.shape_1922,this.shape_1921,this.shape_1920,this.shape_1919,this.shape_1918,this.shape_1917,this.shape_1916,this.shape_1915,this.shape_1914,this.shape_1913);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.3,-61,110.9,78.8);


(lib.HouseWhite = function() {
	this.initialize();

	// Layer 1
	this.shape_2232 = new cjs.Shape();
	this.shape_2232.graphics.lf(["rgba(126,141,118,0)","rgba(122,137,114,0.098)","rgba(111,124,104,0.396)","rgba(93,103,87,0.89)","#596354","#596354","rgba(97,107,90,0.796)","rgba(117,131,109,0.243)","rgba(126,141,118,0)"],[0,0.2,0.42,0.643,0.686,0.875,0.914,0.976,1],0,-1.9,-1.6,2.2).s().p("AA+A1IAWgpIinhAIAAAxICRA4").cp();
	this.shape_2232.setTransform(-22,17.3);

	this.shape_2233 = new cjs.Shape();
	this.shape_2233.graphics.rf(["#D2B9BF","#D5BDC3","#E4D4D9","#EFE7E9","#F7F4F5","#FCFBFC","#FEFEFE"],[0.216,0.227,0.31,0.404,0.522,0.671,1],0,0,0,0,0,2.1).s().p("AAUgIQADAHgDAGQgEAIgJAEQgHAEgIgDQgIgCgDgHQgDgHADgGQAEgHAJgEQAHgEAIACQAIACADAHIAAAA").cp();
	this.shape_2233.setTransform(-12.4,19.7);

	this.shape_2234 = new cjs.Shape();
	this.shape_2234.graphics.rf(["#D2B9BF","#D5BDC3","#E4D4D9","#EFE7E9","#F7F4F5","#FCFBFC","#FEFEFE"],[0.216,0.227,0.31,0.404,0.522,0.671,1],0,0,0,0,0,2.1).s().p("AAXAAQAAAHgHAGQgGAFgKAAQgIAAgHgFQgHgGAAgHQAAgGAHgFQAHgFAIAAQAKAAAGAFQAHAFAAAGIAAAA").cp();
	this.shape_2234.setTransform(2.5,21.2);

	this.shape_2235 = new cjs.Shape();
	this.shape_2235.graphics.rf(["#D2B9BF","#D5BDC3","#E4D4D9","#EFE7E9","#F7F4F5","#FCFBFC","#FEFEFE"],[0.216,0.227,0.31,0.404,0.522,0.671,1],0,0,0,0,0,2.2).s().p("AAWAGQgDAJgIADQgJAEgHgCQgJgEgFgIQgEgHACgHQADgIAIgEQAJgEAHADQAJADAFAIQAEAIgCAGIAAAA").cp();
	this.shape_2235.setTransform(32.8,3.1);

	this.shape_2236 = new cjs.Shape();
	this.shape_2236.graphics.rf(["#D2B9BF","#D5BDC3","#E4D4D9","#EFE7E9","#F7F4F5","#FCFBFC","#FEFEFE"],[0.216,0.227,0.31,0.404,0.522,0.671,1],0,0,0,0,0,2.2).s().p("AAXAAQAAAIgHAGQgGAGgKAAQgIAAgHgGQgHgGAAgIQAAgHAHgGQAHgGAIAAQAKAAAGAGQAHAGAAAHIAAAA").cp();
	this.shape_2236.setTransform(29.2,10.3);

	this.shape_2237 = new cjs.Shape();
	this.shape_2237.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.3).s().p("AACAAQAAADgCAAQgCAAAAgDQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2237.setTransform(-0.1,26.8);

	this.shape_2238 = new cjs.Shape();
	this.shape_2238.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.3).s().p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2238.setTransform(-0.8,27.3);

	this.shape_2239 = new cjs.Shape();
	this.shape_2239.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-3,0,0.1,-3,4.4).s().p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2239.setTransform(-0.8,30);

	this.shape_2240 = new cjs.Shape();
	this.shape_2240.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-3.5,0.1,3.7).s().p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2240.setTransform(-0.8,30);

	this.shape_2241 = new cjs.Shape();
	this.shape_2241.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2241.setTransform(-7.4,18.2);

	this.shape_2242 = new cjs.Shape();
	this.shape_2242.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2242.setTransform(-8.5,19.1);

	this.shape_2243 = new cjs.Shape();
	this.shape_2243.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.3,0,0.1,-5.3,7.4).s().p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgBAEgLQAEgHACgEIAAAA").cp();
	this.shape_2243.setTransform(-8.6,23.8);

	this.shape_2244 = new cjs.Shape();
	this.shape_2244.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-6,0.1,6.2).s().p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgBAEgLQAEgHACgEIAAAA").cp();
	this.shape_2244.setTransform(-8.6,23.8);

	this.shape_2245 = new cjs.Shape();
	this.shape_2245.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2245.setTransform(4.2,20.6);

	this.shape_2246 = new cjs.Shape();
	this.shape_2246.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2246.setTransform(3.3,21.3);

	this.shape_2247 = new cjs.Shape();
	this.shape_2247.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-4.2,0,0.1,-4.2,5.9).s().p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgFgBgIgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgGABgFQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2247.setTransform(3.2,25.1);

	this.shape_2248 = new cjs.Shape();
	this.shape_2248.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-4.7,0.1,5).s().p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgFgBgIgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgGABgFQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2248.setTransform(3.2,25.1);

	this.shape_2249 = new cjs.Shape();
	this.shape_2249.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2249.setTransform(31.9,9.2);

	this.shape_2250 = new cjs.Shape();
	this.shape_2250.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.5).s().p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2250.setTransform(30.8,10.1);

	this.shape_2251 = new cjs.Shape();
	this.shape_2251.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-5.3,0,0.1,-5.3,7.4).s().p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2251.setTransform(30.6,14.8);

	this.shape_2252 = new cjs.Shape();
	this.shape_2252.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-6,0.1,6.2).s().p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2252.setTransform(30.6,14.8);

	this.shape_2253 = new cjs.Shape();
	this.shape_2253.graphics.f("#D3D7DC").s().p("AgjgNQgRASABAfQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANIAAAA").cp();
	this.shape_2253.setTransform(14.2,7.8);

	this.shape_2254 = new cjs.Shape();
	this.shape_2254.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0.1,0.1,0,0.1,0.1,1.3).s().p("AAPAAQAAAGgFAEQgEAFgGAAQgFAAgEgFQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_2254.setTransform(12.3,15.7);

	this.shape_2255 = new cjs.Shape();
	this.shape_2255.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2255.setTransform(-0.6,-1.7);

	this.shape_2256 = new cjs.Shape();
	this.shape_2256.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2256.setTransform(7.5,-4.4);

	this.shape_2257 = new cjs.Shape();
	this.shape_2257.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2257.setTransform(23.7,-10.7);

	this.shape_2258 = new cjs.Shape();
	this.shape_2258.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.3).s().p("AAMgeIAgAmIg2AXIghgpIA3gU").cp();
	this.shape_2258.setTransform(16.6,-7.8);

	this.shape_2259 = new cjs.Shape();
	this.shape_2259.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2259.setTransform(16.2,-15.7);

	this.shape_2260 = new cjs.Shape();
	this.shape_2260.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2260.setTransform(7.5,-11.9);

	this.shape_2261 = new cjs.Shape();
	this.shape_2261.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2261.setTransform(13.3,-22.7);

	this.shape_2262 = new cjs.Shape();
	this.shape_2262.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2262.setTransform(5.8,-19.5);

	this.shape_2263 = new cjs.Shape();
	this.shape_2263.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2263.setTransform(-1.5,-8.6);

	this.shape_2264 = new cjs.Shape();
	this.shape_2264.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2264.setTransform(-1.9,-16.4);

	this.shape_2265 = new cjs.Shape();
	this.shape_2265.graphics.lf(["rgba(180,154,68,0)","#C76337","#6D2E1F"],[0,0.91,1],-0.7,-2.2,0.9,2.4).s().p("AAMgeIAgAnIg2AWIghgoIA3gV").cp();
	this.shape_2265.setTransform(-9.3,-13.5);

	this.shape_2266 = new cjs.Shape();
	this.shape_2266.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_2266.setTransform(-11.4,14.4);

	this.shape_2267 = new cjs.Shape();
	this.shape_2267.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_2267.setTransform(-11.4,10.4);

	this.shape_2268 = new cjs.Shape();
	this.shape_2268.graphics.lf(["#787979","#5A5A5A","#3C3C3C","#2A2A2A","#242424"],[0,0.259,0.565,0.824,1],0,0.6,0.7,-1).s().p("AAXgEIAAASIgtgQIAWgLIAXAJ").cp();
	this.shape_2268.setTransform(-23.9,10);

	this.shape_2269 = new cjs.Shape();
	this.shape_2269.graphics.lf(["#545454","#242424"],[0,0.529],-2.2,0,2.4,0).s().p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_2269.setTransform(-23.9,6);

	this.shape_2270 = new cjs.Shape();
	this.shape_2270.graphics.f("#918FA3").s().p("ACOAsIkbhxIAAAZIEbByIAAga").cp();
	this.shape_2270.setTransform(-16.8,-1.4);

	this.shape_2271 = new cjs.Shape();
	this.shape_2271.graphics.f("#334B29").s().p("ACkgtIlHB0IAAgaIFHhzIAAAZ").cp();
	this.shape_2271.setTransform(13.8,-1.5);

	this.shape_2272 = new cjs.Shape();
	this.shape_2272.graphics.lf(["#394434","#4D584B","#707B73","#909B98","#ABB6B7","#C2CDD0","#D3DEE5","#E0EBF3","#E7F2FB","#E9F4FE","#B6BDC5"],[0,0.004,0.016,0.024,0.035,0.047,0.059,0.075,0.094,0.125,1],3.7,-10.1,-3.5,10.2).s().p("AiKilIAADZIEVByIAAjaIkVhx").cp();
	this.shape_2272.setTransform(-16.5,10.3);

	this.shape_2273 = new cjs.Shape();
	this.shape_2273.graphics.f("#433E2A").s().p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_2273.setTransform(14.4,14.8);

	this.shape_2274 = new cjs.Shape();
	this.shape_2274.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.231,0.635,1],-0.1,-6.9,0.1,6).s().p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2274.setTransform(14.4,14.3);

	this.shape_2275 = new cjs.Shape();
	this.shape_2275.graphics.lf(["rgba(0,0,0,0.388)","rgba(0,0,0,0.055)","rgba(0,0,0,0)","rgba(0,0,0,0.388)"],[0,0.22,0.761,1],-4.2,0.1,4,0).s().p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2275.setTransform(14.4,14.3);

	this.shape_2276 = new cjs.Shape();
	this.shape_2276.graphics.f("#CA5F70").s().p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2276.setTransform(14.4,14.3);

	this.shape_2277 = new cjs.Shape();
	this.shape_2277.graphics.f("#9CA1AE").s().p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_2277.setTransform(14.4,13.9);

	this.shape_2278 = new cjs.Shape();
	this.shape_2278.graphics.lf(["#394434","#555D54","#6F7471","#85888A","#96979D","#A2A2AB","#A9A8B3","#ABAAB6","#82828A"],[0,0.012,0.024,0.035,0.051,0.067,0.09,0.125,1],-3,-9.6,3.4,10.4).s().p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_2278.setTransform(13.5,10.1);

	this.shape_2279 = new cjs.Shape();
	this.shape_2279.graphics.f("#C3C6D2").s().p("AhugSIDdBaIh6iPIhjA1").cp();
	this.shape_2279.setTransform(-17.6,-5.7);

	this.shape_2280 = new cjs.Shape();
	this.shape_2280.graphics.f("#918FA3").s().p("AiNgUIEbBxIici5Ih/BI").cp();
	this.shape_2280.setTransform(-16.8,-6.3);

	this.shape_2281 = new cjs.Shape();
	this.shape_2281.graphics.lf(["#D96B50","#D5684F","#C9604A","#B65343","#B65343","#924F27"],[0,0.016,0.027,0.043,0.043,1],-3.8,-10.8,4,10.6).s().p("AhUCYIFHh2Iiei4IlHB1ICeC5").cp();
	this.shape_2281.setTransform(5.9,-12.2);

	this.shape_2282 = new cjs.Shape();
	this.shape_2282.graphics.f("#40463E").s().p("AgBAOIgkgOIAogNIAjANIgnAO").cp();
	this.shape_2282.setTransform(0,-36.7);

	this.shape_2283 = new cjs.Shape();
	this.shape_2283.graphics.f("#CC7852").s().p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_2283.setTransform(0,-36.7);

	this.shape_2284 = new cjs.Shape();
	this.shape_2284.graphics.lf(["#AB5340","#834032"],[0.125,1],1,-2.7,-0.9,2.8).s().p("AgagpIAAA8IA1AWIAAg7Ig1gX").cp();
	this.shape_2284.setTransform(-3.2,-32.5);

	this.shape_2285 = new cjs.Shape();
	this.shape_2285.graphics.lf(["#8D4636","#522B22"],[0.125,1],-0.7,-2.6,0.9,2.8).s().p("AAggpIAAA8Ig/AXIAAg8IA/gX").cp();
	this.shape_2285.setTransform(2.7,-32.6);

	this.shape_2286 = new cjs.Shape();
	this.shape_2286.graphics.f("#AA6546").s().p("AgFAiIhTgiIBeghIBTAhIheAi").cp();
	this.shape_2286.setTransform(0,-30.6);

	this.shape_2287 = new cjs.Shape();
	this.shape_2287.graphics.lf(["#8D4636","#522B22"],[0.125,1],2.7,-7.3,-2.6,7.5).s().p("AgohjIAAClIBRAiIAAilIhRgi").cp();
	this.shape_2287.setTransform(-4.8,-20.6);

	this.shape_2288 = new cjs.Shape();
	this.shape_2288.graphics.lf(["#612625","#612625"],[0.125,1],-2.2,-7,2.4,7.6).s().p("AAwhjIAAClIhfAiIAAikIBfgj").cp();
	this.shape_2288.setTransform(4.1,-20.7);

	this.shape_2289 = new cjs.Shape();
	this.shape_2289.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2289.setTransform(30.8,0.8);

	this.shape_2290 = new cjs.Shape();
	this.shape_2290.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.4).s().p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2290.setTransform(29.8,1.6);

	this.shape_2291 = new cjs.Shape();
	this.shape_2291.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.1,-4.9,0,0.1,-4.9,6.8).s().p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgFADgIIAHgLQACgEAHgGQACgCAJgFQAEgDAIgDQAIgEAEgBQAFAAAGgBQALAAACAAQAFABAHAEIAMAHQADACAGAHIAIAJ").cp();
	this.shape_2291.setTransform(29.6,6);

	this.shape_2292 = new cjs.Shape();
	this.shape_2292.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-5.5,0.1,5.8).s().p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgFADgIIAHgLQACgEAHgGQACgCAJgFQAEgDAIgDQAIgEAEgBQAFAAAGgBQALAAACAAQAFABAHAEIAMAHQADACAGAHIAIAJ").cp();
	this.shape_2292.setTransform(29.6,6);

	this.shape_2293 = new cjs.Shape();
	this.shape_2293.graphics.f().s("#4B4445").ss(1,1,1).p("AATAAQAAAIgFAFQgGAGgIAAQgHAAgFgGQgGgGAAgHQAAgGAGgHQAFgFAHAAQAIAAAGAFQAFAHAAAGIAAAA").cp();
	this.shape_2293.setTransform(-1.3,28.6);

	this.shape_2294 = new cjs.Shape();
	this.shape_2294.graphics.f().s("#4B4445").ss(1,1,1).p("AASAAQAAAHgFAGQgGAGgHAAQgHAAgFgGQgFgGAAgHQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFAAAHIAAAA").cp();
	this.shape_2294.setTransform(-12.5,25.5);

	this.shape_2295 = new cjs.Shape();
	this.shape_2295.graphics.f().s("#4B4445").ss(1,1,1).p("AAXAAQAAAJgHAHQgGAHgKAAQgIAAgHgHQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAHAAAIIAAAA").cp();
	this.shape_2295.setTransform(-6.7,23.3);

	this.shape_2296 = new cjs.Shape();
	this.shape_2296.graphics.f().s("#4B4445").ss(1,1,1).p("AAUgIQADAHgDAGQgEAIgJAEQgHAEgIgDQgIgCgDgHQgDgHADgGQAEgHAJgEQAHgEAIACQAIACADAHIAAAA").cp();
	this.shape_2296.setTransform(-12.4,19.7);

	this.shape_2297 = new cjs.Shape();
	this.shape_2297.graphics.f().s("#4B4445").ss(1,1,1).p("AAXAAQAAAHgHAGQgGAFgKAAQgIAAgHgFQgHgGAAgHQAAgGAHgFQAHgFAIAAQAKAAAGAFQAHAFAAAGIAAAA").cp();
	this.shape_2297.setTransform(2.5,21.2);

	this.shape_2298 = new cjs.Shape();
	this.shape_2298.graphics.f().s("#4B4445").ss(1,1,1).p("AAWAGQgDAJgIADQgJAEgHgCQgJgEgFgIQgEgHACgHQADgIAIgEQAJgEAHADQAJADAFAIQAEAIgCAGIAAAA").cp();
	this.shape_2298.setTransform(32.8,3.1);

	this.shape_2299 = new cjs.Shape();
	this.shape_2299.graphics.f().s("#4B4445").ss(1,1,1).p("AATAFQgCAHgHADQgHADgGgCQgIgCgFgHQgEgHACgFQADgGAHgDQAHgDAGACQAIACAEAHQAEAGgCAFIAAAA").cp();
	this.shape_2299.setTransform(28.2,15.7);

	this.shape_2300 = new cjs.Shape();
	this.shape_2300.graphics.f().s("#4B4445").ss(1,1,1).p("AAVgIQAEAIgEAGQgEAIgJAEQgIAEgIgCQgJgDgDgIQgEgIAEgGQADgIAJgEQAIgEAIACQAJADAEAIIAAAA").cp();
	this.shape_2300.setTransform(34.5,14.7);

	this.shape_2301 = new cjs.Shape();
	this.shape_2301.graphics.f().s("#4B4445").ss(1,1,1).p("AAXAAQAAAIgHAGQgGAGgKAAQgIAAgHgGQgHgGAAgIQAAgHAHgGQAHgGAIAAQAKAAAGAGQAHAGAAAHIAAAA").cp();
	this.shape_2301.setTransform(29.2,10.3);

	this.shape_2302 = new cjs.Shape();
	this.shape_2302.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2302.setTransform(-1.4,27.9);

	this.shape_2303 = new cjs.Shape();
	this.shape_2303.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAADgCAAQgCAAAAgDQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2303.setTransform(-0.1,26.8);

	this.shape_2304 = new cjs.Shape();
	this.shape_2304.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2304.setTransform(-0.8,27.3);

	this.shape_2305 = new cjs.Shape();
	this.shape_2305.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2305.setTransform(1.4,28.7);

	this.shape_2306 = new cjs.Shape();
	this.shape_2306.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2306.setTransform(1.4,28.2);

	this.shape_2307 = new cjs.Shape();
	this.shape_2307.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAADgCAAQgBAAAAgDQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2307.setTransform(0.9,27.8);

	this.shape_2308 = new cjs.Shape();
	this.shape_2308.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2308.setTransform(0.3,27.3);

	this.shape_2309 = new cjs.Shape();
	this.shape_2309.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2309.setTransform(-2.3,27.6);

	this.shape_2310 = new cjs.Shape();
	this.shape_2310.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2310.setTransform(-1.7,27.4);

	this.shape_2311 = new cjs.Shape();
	this.shape_2311.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgCACAAQACAAAAACIAAAA").cp();
	this.shape_2311.setTransform(-3.6,28.6);

	this.shape_2312 = new cjs.Shape();
	this.shape_2312.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2312.setTransform(-3,28);

	this.shape_2313 = new cjs.Shape();
	this.shape_2313.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2313.setTransform(-3.8,29.7);

	this.shape_2314 = new cjs.Shape();
	this.shape_2314.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2314.setTransform(-1.4,28.8);

	this.shape_2315 = new cjs.Shape();
	this.shape_2315.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2315.setTransform(-2.2,28.4);

	this.shape_2316 = new cjs.Shape();
	this.shape_2316.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgCABAAQACAAAAACIAAAA").cp();
	this.shape_2316.setTransform(-2.6,29.1);

	this.shape_2317 = new cjs.Shape();
	this.shape_2317.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2317.setTransform(-2.5,27.3);

	this.shape_2318 = new cjs.Shape();
	this.shape_2318.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2318.setTransform(0.1,28.9);

	this.shape_2319 = new cjs.Shape();
	this.shape_2319.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2319.setTransform(-0.4,28.5);

	this.shape_2320 = new cjs.Shape();
	this.shape_2320.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2320.setTransform(0,28.1);

	this.shape_2321 = new cjs.Shape();
	this.shape_2321.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2321.setTransform(-0.6,27.6);

	this.shape_2322 = new cjs.Shape();
	this.shape_2322.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2322.setTransform(-2,33.3);

	this.shape_2323 = new cjs.Shape();
	this.shape_2323.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2323.setTransform(-1.9,32);

	this.shape_2324 = new cjs.Shape();
	this.shape_2324.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2324.setTransform(-3.9,32.1);

	this.shape_2325 = new cjs.Shape();
	this.shape_2325.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2325.setTransform(-1.1,33.1);

	this.shape_2326 = new cjs.Shape();
	this.shape_2326.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgBAAAAgDQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2326.setTransform(-1.5,33.5);

	this.shape_2327 = new cjs.Shape();
	this.shape_2327.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2327.setTransform(-0.5,33.3);

	this.shape_2328 = new cjs.Shape();
	this.shape_2328.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2328.setTransform(2.8,32);

	this.shape_2329 = new cjs.Shape();
	this.shape_2329.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2329.setTransform(0.3,32.7);

	this.shape_2330 = new cjs.Shape();
	this.shape_2330.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2330.setTransform(-1.7,32.9);

	this.shape_2331 = new cjs.Shape();
	this.shape_2331.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2331.setTransform(-1.3,32.1);

	this.shape_2332 = new cjs.Shape();
	this.shape_2332.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2332.setTransform(-3.3,32.5);

	this.shape_2333 = new cjs.Shape();
	this.shape_2333.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgCACAAQACAAAAACIAAAA").cp();
	this.shape_2333.setTransform(2,31.8);

	this.shape_2334 = new cjs.Shape();
	this.shape_2334.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgCABAAQACAAAAACIAAAA").cp();
	this.shape_2334.setTransform(-2.8,31.8);

	this.shape_2335 = new cjs.Shape();
	this.shape_2335.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2335.setTransform(-0.4,32.7);

	this.shape_2336 = new cjs.Shape();
	this.shape_2336.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2336.setTransform(1.9,32.6);

	this.shape_2337 = new cjs.Shape();
	this.shape_2337.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2337.setTransform(1.5,33);

	this.shape_2338 = new cjs.Shape();
	this.shape_2338.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2338.setTransform(0.6,33.4);

	this.shape_2339 = new cjs.Shape();
	this.shape_2339.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2339.setTransform(0.9,32.8);

	this.shape_2340 = new cjs.Shape();
	this.shape_2340.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2340.setTransform(-0.4,32.9);

	this.shape_2341 = new cjs.Shape();
	this.shape_2341.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2341.setTransform(0,33.4);

	this.shape_2342 = new cjs.Shape();
	this.shape_2342.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgCAAAAgCQAAgBACAAQACAAAAABIAAAA").cp();
	this.shape_2342.setTransform(-2.9,33.1);

	this.shape_2343 = new cjs.Shape();
	this.shape_2343.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAACgDAAQgBAAAAgCQAAgBABAAQADAAAAABIAAAA").cp();
	this.shape_2343.setTransform(-2.3,32.6);

	this.shape_2344 = new cjs.Shape();
	this.shape_2344.graphics.f().s("#4B4445").ss(1,1,1).p("AACAAQAAACgCAAQgBAAAAgCQAAgBABAAQACAAAAABIAAAA").cp();
	this.shape_2344.setTransform(-1.5,29.7);

	this.shape_2345 = new cjs.Shape();
	this.shape_2345.graphics.f().s("#4B4445").ss(1,1,1).p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2345.setTransform(-0.8,30);

	this.shape_2346 = new cjs.Shape();
	this.shape_2346.graphics.f().s("#4B4445").ss(1,1,1).p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2346.setTransform(-0.8,30);

	this.shape_2347 = new cjs.Shape();
	this.shape_2347.graphics.f().s("#4B4445").ss(1,1,1).p("AgogGQAEgJACgDQADgEAHgFQAEgDAJgDQAIgDADAAQAIAAAFACQAFACAHAFQADACAFAIQADAEADAIQACAFABAGQAAAFgBAGQgEAIgCACQgFAEgGACQgEABgIABIgMACQAAAAgMgDQgLgCgDgCQgFgDgFgIQgCgEgCgKQgBgFABgGIAAAA").cp();
	this.shape_2347.setTransform(-0.8,30);

	this.shape_2348 = new cjs.Shape();
	this.shape_2348.graphics.f().s("#4B4445").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2348.setTransform(-9.6,20.2);

	this.shape_2349 = new cjs.Shape();
	this.shape_2349.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2349.setTransform(-7.4,18.2);

	this.shape_2350 = new cjs.Shape();
	this.shape_2350.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2350.setTransform(-8.5,19.1);

	this.shape_2351 = new cjs.Shape();
	this.shape_2351.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2351.setTransform(-4.8,21.5);

	this.shape_2352 = new cjs.Shape();
	this.shape_2352.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2352.setTransform(-4.8,20.6);

	this.shape_2353 = new cjs.Shape();
	this.shape_2353.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2353.setTransform(-5.6,19.9);

	this.shape_2354 = new cjs.Shape();
	this.shape_2354.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2354.setTransform(-6.7,19.2);

	this.shape_2355 = new cjs.Shape();
	this.shape_2355.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2355.setTransform(-11.2,19.6);

	this.shape_2356 = new cjs.Shape();
	this.shape_2356.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2356.setTransform(-10.1,19.3);

	this.shape_2357 = new cjs.Shape();
	this.shape_2357.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2357.setTransform(-13.4,21.3);

	this.shape_2358 = new cjs.Shape();
	this.shape_2358.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2358.setTransform(-12.3,20.3);

	this.shape_2359 = new cjs.Shape();
	this.shape_2359.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2359.setTransform(-13.6,23.1);

	this.shape_2360 = new cjs.Shape();
	this.shape_2360.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2360.setTransform(-9.5,21.8);

	this.shape_2361 = new cjs.Shape();
	this.shape_2361.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2361.setTransform(-10.9,20.9);

	this.shape_2362 = new cjs.Shape();
	this.shape_2362.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2362.setTransform(-11.6,22.1);

	this.shape_2363 = new cjs.Shape();
	this.shape_2363.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2363.setTransform(-11.5,19.2);

	this.shape_2364 = new cjs.Shape();
	this.shape_2364.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2364.setTransform(-6.9,21.9);

	this.shape_2365 = new cjs.Shape();
	this.shape_2365.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2365.setTransform(-7.9,21.2);

	this.shape_2366 = new cjs.Shape();
	this.shape_2366.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2366.setTransform(-7.2,20.5);

	this.shape_2367 = new cjs.Shape();
	this.shape_2367.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2367.setTransform(-8.2,19.7);

	this.shape_2368 = new cjs.Shape();
	this.shape_2368.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2368.setTransform(-10.6,29.4);

	this.shape_2369 = new cjs.Shape();
	this.shape_2369.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2369.setTransform(-10.5,27.1);

	this.shape_2370 = new cjs.Shape();
	this.shape_2370.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2370.setTransform(-13.9,27.3);

	this.shape_2371 = new cjs.Shape();
	this.shape_2371.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2371.setTransform(-9.2,29);

	this.shape_2372 = new cjs.Shape();
	this.shape_2372.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2372.setTransform(-9.7,29.7);

	this.shape_2373 = new cjs.Shape();
	this.shape_2373.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2373.setTransform(-8,29.4);

	this.shape_2374 = new cjs.Shape();
	this.shape_2374.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2374.setTransform(-2.4,27.1);

	this.shape_2375 = new cjs.Shape();
	this.shape_2375.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2375.setTransform(-6.6,28.4);

	this.shape_2376 = new cjs.Shape();
	this.shape_2376.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2376.setTransform(-10.1,28.6);

	this.shape_2377 = new cjs.Shape();
	this.shape_2377.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2377.setTransform(-9.4,27.4);

	this.shape_2378 = new cjs.Shape();
	this.shape_2378.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2378.setTransform(-12.9,28);

	this.shape_2379 = new cjs.Shape();
	this.shape_2379.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2379.setTransform(-3.6,26.8);

	this.shape_2380 = new cjs.Shape();
	this.shape_2380.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2380.setTransform(-12,26.8);

	this.shape_2381 = new cjs.Shape();
	this.shape_2381.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2381.setTransform(-7.9,29.1);

	this.shape_2382 = new cjs.Shape();
	this.shape_2382.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2382.setTransform(-3.8,28.2);

	this.shape_2383 = new cjs.Shape();
	this.shape_2383.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2383.setTransform(-4.6,28.8);

	this.shape_2384 = new cjs.Shape();
	this.shape_2384.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2384.setTransform(-6,29.5);

	this.shape_2385 = new cjs.Shape();
	this.shape_2385.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2385.setTransform(-5.5,28.5);

	this.shape_2386 = new cjs.Shape();
	this.shape_2386.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2386.setTransform(-7.8,28.6);

	this.shape_2387 = new cjs.Shape();
	this.shape_2387.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2387.setTransform(-7.2,29.6);

	this.shape_2388 = new cjs.Shape();
	this.shape_2388.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2388.setTransform(-12.1,29);

	this.shape_2389 = new cjs.Shape();
	this.shape_2389.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2389.setTransform(-11.1,28.2);

	this.shape_2390 = new cjs.Shape();
	this.shape_2390.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2390.setTransform(-9.8,23.2);

	this.shape_2391 = new cjs.Shape();
	this.shape_2391.graphics.f().s("#4B4445").ss(1,1,1).p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgBAEgLQAEgHACgEIAAAA").cp();
	this.shape_2391.setTransform(-8.6,23.8);

	this.shape_2392 = new cjs.Shape();
	this.shape_2392.graphics.f().s("#4B4445").ss(1,1,1).p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgBAEgLQAEgHACgEIAAAA").cp();
	this.shape_2392.setTransform(-8.6,23.8);

	this.shape_2393 = new cjs.Shape();
	this.shape_2393.graphics.f().s("#4B4445").ss(1,1,1).p("Ag9gZQACgEAFgGIAJgJIAKgIQAHgEAFgCQAEgCAIAAQAHgBAEAAIAMABQAFABAHACQAIADAEACQAEADAGAFIAIAJIAIAKIAFAMIADAMQABACAAAIQABAJAAAEQgBAEgCAJQgDAGgFAEQgCABgJAFQgHAFgEABQgJAAgEABQgIADgFABIgMAAQgBAAgKgCIgMAAIgMgDQgCgBgJgFQgCgBgHgIQgIgHgBgCQgFgIAAgDQgDgGAAgHIAAgLQAAgBAEgLQAEgHACgEIAAAA").cp();
	this.shape_2393.setTransform(-8.6,23.8);

	this.shape_2394 = new cjs.Shape();
	this.shape_2394.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2394.setTransform(2.4,22.2);

	this.shape_2395 = new cjs.Shape();
	this.shape_2395.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2395.setTransform(4.2,20.6);

	this.shape_2396 = new cjs.Shape();
	this.shape_2396.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2396.setTransform(3.3,21.3);

	this.shape_2397 = new cjs.Shape();
	this.shape_2397.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgDAAAAgEQAAgCADAAQADAAAAACIAAAA").cp();
	this.shape_2397.setTransform(6.3,23.2);

	this.shape_2398 = new cjs.Shape();
	this.shape_2398.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2398.setTransform(6.3,22.5);

	this.shape_2399 = new cjs.Shape();
	this.shape_2399.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2399.setTransform(5.6,21.9);

	this.shape_2400 = new cjs.Shape();
	this.shape_2400.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2400.setTransform(4.8,21.4);

	this.shape_2401 = new cjs.Shape();
	this.shape_2401.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2401.setTransform(1.1,21.7);

	this.shape_2402 = new cjs.Shape();
	this.shape_2402.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2402.setTransform(2,21.4);

	this.shape_2403 = new cjs.Shape();
	this.shape_2403.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2403.setTransform(-0.6,23);

	this.shape_2404 = new cjs.Shape();
	this.shape_2404.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2404.setTransform(0.2,22.3);

	this.shape_2405 = new cjs.Shape();
	this.shape_2405.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2405.setTransform(-0.8,24.5);

	this.shape_2406 = new cjs.Shape();
	this.shape_2406.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2406.setTransform(2.4,23.4);

	this.shape_2407 = new cjs.Shape();
	this.shape_2407.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2407.setTransform(1.3,22.8);

	this.shape_2408 = new cjs.Shape();
	this.shape_2408.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2408.setTransform(0.8,23.7);

	this.shape_2409 = new cjs.Shape();
	this.shape_2409.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2409.setTransform(0.8,21.4);

	this.shape_2410 = new cjs.Shape();
	this.shape_2410.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2410.setTransform(4.6,23.5);

	this.shape_2411 = new cjs.Shape();
	this.shape_2411.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2411.setTransform(3.8,23);

	this.shape_2412 = new cjs.Shape();
	this.shape_2412.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2412.setTransform(4.3,22.4);

	this.shape_2413 = new cjs.Shape();
	this.shape_2413.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2413.setTransform(3.5,21.7);

	this.shape_2414 = new cjs.Shape();
	this.shape_2414.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2414.setTransform(1.6,29.6);

	this.shape_2415 = new cjs.Shape();
	this.shape_2415.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2415.setTransform(1.7,27.7);

	this.shape_2416 = new cjs.Shape();
	this.shape_2416.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2416.setTransform(-1,27.9);

	this.shape_2417 = new cjs.Shape();
	this.shape_2417.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2417.setTransform(2.8,29.3);

	this.shape_2418 = new cjs.Shape();
	this.shape_2418.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2418.setTransform(2.3,29.9);

	this.shape_2419 = new cjs.Shape();
	this.shape_2419.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2419.setTransform(3.7,29.5);

	this.shape_2420 = new cjs.Shape();
	this.shape_2420.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2420.setTransform(8.2,27.7);

	this.shape_2421 = new cjs.Shape();
	this.shape_2421.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2421.setTransform(4.8,28.7);

	this.shape_2422 = new cjs.Shape();
	this.shape_2422.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2422.setTransform(2,28.9);

	this.shape_2423 = new cjs.Shape();
	this.shape_2423.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgDAAAAgDQAAgDADAAQADAAAAADIAAAA").cp();
	this.shape_2423.setTransform(2.6,28);

	this.shape_2424 = new cjs.Shape();
	this.shape_2424.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2424.setTransform(-0.2,28.4);

	this.shape_2425 = new cjs.Shape();
	this.shape_2425.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2425.setTransform(7.2,27.5);

	this.shape_2426 = new cjs.Shape();
	this.shape_2426.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2426.setTransform(0.5,27.5);

	this.shape_2427 = new cjs.Shape();
	this.shape_2427.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2427.setTransform(3.8,29.3);

	this.shape_2428 = new cjs.Shape();
	this.shape_2428.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgDAAAAgDQAAgCADAAQAEAAAAACIAAAA").cp();
	this.shape_2428.setTransform(7.1,28.6);

	this.shape_2429 = new cjs.Shape();
	this.shape_2429.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2429.setTransform(6.5,29.1);

	this.shape_2430 = new cjs.Shape();
	this.shape_2430.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAAEgDAAQgCAAAAgEQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2430.setTransform(5.3,29.7);

	this.shape_2431 = new cjs.Shape();
	this.shape_2431.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAADgEAAQgCAAAAgDQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2431.setTransform(5.7,28.8);

	this.shape_2432 = new cjs.Shape();
	this.shape_2432.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2432.setTransform(3.9,29);

	this.shape_2433 = new cjs.Shape();
	this.shape_2433.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2433.setTransform(4.4,29.7);

	this.shape_2434 = new cjs.Shape();
	this.shape_2434.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgCAAAAgEQAAgCACAAQAEAAAAACIAAAA").cp();
	this.shape_2434.setTransform(0.4,29.3);

	this.shape_2435 = new cjs.Shape();
	this.shape_2435.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgDACAAQADAAAAADIAAAA").cp();
	this.shape_2435.setTransform(1.2,28.6);

	this.shape_2436 = new cjs.Shape();
	this.shape_2436.graphics.f().s("#4B4445").ss(1,1,1).p("AADAAQAAADgDAAQgCAAAAgDQAAgCACAAQADAAAAACIAAAA").cp();
	this.shape_2436.setTransform(2.2,24.6);

	this.shape_2437 = new cjs.Shape();
	this.shape_2437.graphics.f().s("#4B4445").ss(1,1,1).p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgFgBgIgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgGABgFQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2437.setTransform(3.2,25.1);

	this.shape_2438 = new cjs.Shape();
	this.shape_2438.graphics.f().s("#4B4445").ss(1,1,1).p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgFgBgIgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgGABgFQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2438.setTransform(3.2,25.1);

	this.shape_2439 = new cjs.Shape();
	this.shape_2439.graphics.f().s("#4B4445").ss(1,1,1).p("AAjgkQAHAEADAFQACADADAIQAEAIABAEIACALQABAIgBAFQgEAMgBABQgFAFgHAEQAAAAgNAEQgIADgFABQgJgCgFAAQgHACgEgBQgFgBgIgDQgFAAgHgFQgHgEgDgEQgGgGgCgGQgCgFgBgIQAAgGABgFQABgJACgEQAEgIADgEQAEgFAGgEQAHgEAFgCQAFgDAIgBQAEgBAHAAQAGAAAGACQAIACAFACQAIAEACADIAAAA").cp();
	this.shape_2439.setTransform(3.2,25.1);

	this.shape_2440 = new cjs.Shape();
	this.shape_2440.graphics.f().s("#4B4445").ss(1,1,1).p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2440.setTransform(29.7,11.2);

	this.shape_2441 = new cjs.Shape();
	this.shape_2441.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2441.setTransform(31.9,9.2);

	this.shape_2442 = new cjs.Shape();
	this.shape_2442.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2442.setTransform(30.8,10.1);

	this.shape_2443 = new cjs.Shape();
	this.shape_2443.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2443.setTransform(34.6,12.5);

	this.shape_2444 = new cjs.Shape();
	this.shape_2444.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2444.setTransform(34.5,11.6);

	this.shape_2445 = new cjs.Shape();
	this.shape_2445.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2445.setTransform(33.7,10.9);

	this.shape_2446 = new cjs.Shape();
	this.shape_2446.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2446.setTransform(32.7,10.2);

	this.shape_2447 = new cjs.Shape();
	this.shape_2447.graphics.f().s("#4B4445").ss(1,1,1).p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFIAAAA").cp();
	this.shape_2447.setTransform(28.1,10.6);

	this.shape_2448 = new cjs.Shape();
	this.shape_2448.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2448.setTransform(29.2,10.3);

	this.shape_2449 = new cjs.Shape();
	this.shape_2449.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2449.setTransform(26,12.3);

	this.shape_2450 = new cjs.Shape();
	this.shape_2450.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2450.setTransform(27,11.3);

	this.shape_2451 = new cjs.Shape();
	this.shape_2451.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2451.setTransform(25.7,14.1);

	this.shape_2452 = new cjs.Shape();
	this.shape_2452.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2452.setTransform(29.8,12.8);

	this.shape_2453 = new cjs.Shape();
	this.shape_2453.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2453.setTransform(28.4,11.9);

	this.shape_2454 = new cjs.Shape();
	this.shape_2454.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2454.setTransform(27.7,13.1);

	this.shape_2455 = new cjs.Shape();
	this.shape_2455.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2455.setTransform(27.8,10.2);

	this.shape_2456 = new cjs.Shape();
	this.shape_2456.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2456.setTransform(32.5,12.9);

	this.shape_2457 = new cjs.Shape();
	this.shape_2457.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2457.setTransform(31.4,12.2);

	this.shape_2458 = new cjs.Shape();
	this.shape_2458.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2458.setTransform(32.1,11.5);

	this.shape_2459 = new cjs.Shape();
	this.shape_2459.graphics.f().s("#4B4445").ss(1,1,1).p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFIAAAA").cp();
	this.shape_2459.setTransform(31.1,10.7);

	this.shape_2460 = new cjs.Shape();
	this.shape_2460.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2460.setTransform(28.7,20.4);

	this.shape_2461 = new cjs.Shape();
	this.shape_2461.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2461.setTransform(28.8,18.1);

	this.shape_2462 = new cjs.Shape();
	this.shape_2462.graphics.f().s("#4B4445").ss(1,1,1).p("AAAgDQAFAAAAADQAAAEgFAAQgEAAAAgEQAAgDAEAAIAAAA").cp();
	this.shape_2462.setTransform(25.5,18.3);

	this.shape_2463 = new cjs.Shape();
	this.shape_2463.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2463.setTransform(30.2,20);

	this.shape_2464 = new cjs.Shape();
	this.shape_2464.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2464.setTransform(29.6,20.7);

	this.shape_2465 = new cjs.Shape();
	this.shape_2465.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2465.setTransform(31.3,20.4);

	this.shape_2466 = new cjs.Shape();
	this.shape_2466.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2466.setTransform(36.9,18.1);

	this.shape_2467 = new cjs.Shape();
	this.shape_2467.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2467.setTransform(32.7,19.4);

	this.shape_2468 = new cjs.Shape();
	this.shape_2468.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2468.setTransform(29.2,19.6);

	this.shape_2469 = new cjs.Shape();
	this.shape_2469.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2469.setTransform(29.9,18.4);

	this.shape_2470 = new cjs.Shape();
	this.shape_2470.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2470.setTransform(26.4,19);

	this.shape_2471 = new cjs.Shape();
	this.shape_2471.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2471.setTransform(35.7,17.8);

	this.shape_2472 = new cjs.Shape();
	this.shape_2472.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2472.setTransform(27.3,17.8);

	this.shape_2473 = new cjs.Shape();
	this.shape_2473.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2473.setTransform(31.4,21.1);

	this.shape_2474 = new cjs.Shape();
	this.shape_2474.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2474.setTransform(35.5,19.2);

	this.shape_2475 = new cjs.Shape();
	this.shape_2475.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2475.setTransform(34.7,19.8);

	this.shape_2476 = new cjs.Shape();
	this.shape_2476.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2476.setTransform(33.3,20.5);

	this.shape_2477 = new cjs.Shape();
	this.shape_2477.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2477.setTransform(33.8,19.5);

	this.shape_2478 = new cjs.Shape();
	this.shape_2478.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2478.setTransform(31.5,19.6);

	this.shape_2479 = new cjs.Shape();
	this.shape_2479.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2479.setTransform(32.1,20.6);

	this.shape_2480 = new cjs.Shape();
	this.shape_2480.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2480.setTransform(27.2,20);

	this.shape_2481 = new cjs.Shape();
	this.shape_2481.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2481.setTransform(28.2,19.2);

	this.shape_2482 = new cjs.Shape();
	this.shape_2482.graphics.f().s("#4B4445").ss(1,1,1).p("AAFAAQAAAFgFAAQgEAAAAgFQAAgEAEAAQAFAAAAAEIAAAA").cp();
	this.shape_2482.setTransform(29.5,14.2);

	this.shape_2483 = new cjs.Shape();
	this.shape_2483.graphics.f().s("#4B4445").ss(1,1,1).p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2483.setTransform(30.6,14.8);

	this.shape_2484 = new cjs.Shape();
	this.shape_2484.graphics.f().s("#4B4445").ss(1,1,1).p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2484.setTransform(30.6,14.8);

	this.shape_2485 = new cjs.Shape();
	this.shape_2485.graphics.f().s("#4B4445").ss(1,1,1).p("AAugsIAJAJIANAWIADAMQABACAAAJQABAGgBAGQgCALAAACQgDAFgGAFQAAAAgLAGQgDACgCACQgEACgCABQgJAAgEAAQgIAEgEAAIgkgCQgLgCgBgBQgCAAgJgGQgCgBgHgHQgGgGgCgEQgGgKAAgBIgDgMQgBgEABgHQABgEADgJQAEgHACgEIAIgKQAGgHACgCQAEgCAGgFQAJgGADgBIANgCQAGgBAEAAQABAAAMABQAEABAIACQAIADADADQAEABAGAGIAAAA").cp();
	this.shape_2485.setTransform(30.6,14.8);

	this.shape_2486 = new cjs.Shape();
	this.shape_2486.graphics.f().s("#4B4445").ss(1,1,1).p("AgjgNQgRASABAfQAEgeAigVQAkgaAdAfQgIgSgYgFQgTgEgLAFQgPAGgKANIAAAA").cp();
	this.shape_2486.setTransform(14.2,7.8);

	this.shape_2487 = new cjs.Shape();
	this.shape_2487.graphics.f().s("#4B4445").ss(1,1,1).p("AAJAAQAAADgDADQgCADgEAAQgIAAAAgJQAAgIAIAAQAEAAACACQADADAAADIAAAA").cp();
	this.shape_2487.setTransform(12.4,15.6);

	this.shape_2488 = new cjs.Shape();
	this.shape_2488.graphics.f().s("#4B4445").ss(1,1,1).p("AAPAAQAAAGgFAEQgEAFgGAAQgFAAgEgFQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFIAAAA").cp();
	this.shape_2488.setTransform(12.3,15.7);

	this.shape_2489 = new cjs.Shape();
	this.shape_2489.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2489.setTransform(-0.6,-1.7);

	this.shape_2490 = new cjs.Shape();
	this.shape_2490.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2490.setTransform(7.5,-4.4);

	this.shape_2491 = new cjs.Shape();
	this.shape_2491.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2491.setTransform(23.7,-10.7);

	this.shape_2492 = new cjs.Shape();
	this.shape_2492.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAmIg2AXIghgp");
	this.shape_2492.setTransform(16.6,-7.8);

	this.shape_2493 = new cjs.Shape();
	this.shape_2493.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2493.setTransform(16.2,-15.7);

	this.shape_2494 = new cjs.Shape();
	this.shape_2494.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2494.setTransform(7.5,-11.9);

	this.shape_2495 = new cjs.Shape();
	this.shape_2495.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2495.setTransform(13.3,-22.7);

	this.shape_2496 = new cjs.Shape();
	this.shape_2496.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2496.setTransform(5.8,-19.5);

	this.shape_2497 = new cjs.Shape();
	this.shape_2497.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2497.setTransform(-1.5,-8.6);

	this.shape_2498 = new cjs.Shape();
	this.shape_2498.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2498.setTransform(-1.9,-16.4);

	this.shape_2499 = new cjs.Shape();
	this.shape_2499.graphics.f().s("#4B4445").ss(1,1,1).p("AAMgeIAgAnIg2AWIghgo");
	this.shape_2499.setTransform(-9.3,-13.5);

	this.shape_2500 = new cjs.Shape();
	this.shape_2500.graphics.f().s("#4B4445").ss(1,1,1).p("AgWgCIAWgLIAXAIIAAATIgtgQ").cp();
	this.shape_2500.setTransform(-11.4,14.4);

	this.shape_2501 = new cjs.Shape();
	this.shape_2501.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_2501.setTransform(-11.4,10.4);

	this.shape_2502 = new cjs.Shape();
	this.shape_2502.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgEIAAASIgtgQIAWgLIAXAJ").cp();
	this.shape_2502.setTransform(-23.9,10);

	this.shape_2503 = new cjs.Shape();
	this.shape_2503.graphics.f().s("#4B4445").ss(1,1,1).p("AAXgYIAABOIgtgSIAAhPQAAgQAWAIQAXAJAAASIAAAA").cp();
	this.shape_2503.setTransform(-23.9,6);

	this.shape_2504 = new cjs.Shape();
	this.shape_2504.graphics.f().s("#4B4445").ss(1,1,1).p("ACOAsIkbhxIAAAZIEbByIAAga").cp();
	this.shape_2504.setTransform(-16.8,-1.4);

	this.shape_2505 = new cjs.Shape();
	this.shape_2505.graphics.f().s("#4B4445").ss(1,1,1).p("ACkhGIAAAZIlHB0IAAga");
	this.shape_2505.setTransform(13.8,-1.5);

	this.shape_2506 = new cjs.Shape();
	this.shape_2506.graphics.f().s("#4B4445").ss(1,1,1).p("AiKilIAADZIEVByIAAjaIkVhx").cp();
	this.shape_2506.setTransform(-16.5,10.3);

	this.shape_2507 = new cjs.Shape();
	this.shape_2507.graphics.f().s("#4B4445").ss(1,1,1).p("AAZhJQAHAGAAAOIAABdIhHAaIAAAIIBPgdIAAheQAAgTgPgFIAAAA").cp();
	this.shape_2507.setTransform(14.4,14.8);

	this.shape_2508 = new cjs.Shape();
	this.shape_2508.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2508.setTransform(14.4,14.3);

	this.shape_2509 = new cjs.Shape();
	this.shape_2509.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2509.setTransform(14.4,14.3);

	this.shape_2510 = new cjs.Shape();
	this.shape_2510.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2510.setTransform(14.4,14.3);

	this.shape_2511 = new cjs.Shape();
	this.shape_2511.graphics.f().s("#4B4445").ss(1,1,1).p("AAogsIAABWIhPAdIAAhWQAAglAngOQAogOAAAkIAAAA").cp();
	this.shape_2511.setTransform(14.4,14.3);

	this.shape_2512 = new cjs.Shape();
	this.shape_2512.graphics.f().s("#4B4445").ss(1,1,1).p("AA3g1IAABmIhtAoIAAhnQAAgzA2gTQAWgHAPAHQASAIAAAXIAAAA").cp();
	this.shape_2512.setTransform(14.4,13.9);

	this.shape_2513 = new cjs.Shape();
	this.shape_2513.graphics.f().s("#4B4445").ss(1,1,1).p("AChAzIlBB0IAAjaIFBhzIAADZ").cp();
	this.shape_2513.setTransform(13.5,10.1);

	this.shape_2514 = new cjs.Shape();
	this.shape_2514.graphics.f().s("#4B4445").ss(1,1,1).p("AhugSIDdBaIh6iPIhjA1").cp();
	this.shape_2514.setTransform(-17.6,-5.7);

	this.shape_2515 = new cjs.Shape();
	this.shape_2515.graphics.f().s("#4B4445").ss(1,1,1).p("AiNgUIEbBxIici5Ih/BI").cp();
	this.shape_2515.setTransform(-16.8,-6.3);

	this.shape_2516 = new cjs.Shape();
	this.shape_2516.graphics.f().s("#4B4445").ss(1,1,1).p("AhUCYIFHh2Iiei4IlHB1ICeC5").cp();
	this.shape_2516.setTransform(5.9,-12.2);

	this.shape_2517 = new cjs.Shape();
	this.shape_2517.graphics.f().s("#4B4445").ss(1,1,1).p("AgBAOIgkgOIAogNIAjANIgnAO").cp();
	this.shape_2517.setTransform(0,-36.7);

	this.shape_2518 = new cjs.Shape();
	this.shape_2518.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAWIg4gWIA/gVIA4AVIg/AW").cp();
	this.shape_2518.setTransform(0,-36.7);

	this.shape_2519 = new cjs.Shape();
	this.shape_2519.graphics.f().s("#4B4445").ss(1,1,1).p("AgagpIAAA8IA1AWIAAg7Ig1gX").cp();
	this.shape_2519.setTransform(-3.2,-32.5);

	this.shape_2520 = new cjs.Shape();
	this.shape_2520.graphics.f().s("#4B4445").ss(1,1,1).p("AAggpIAAA8Ig/AXIAAg8IA/gX").cp();
	this.shape_2520.setTransform(2.7,-32.6);

	this.shape_2521 = new cjs.Shape();
	this.shape_2521.graphics.f().s("#4B4445").ss(1,1,1).p("AgFAiIhTgiIBeghIBTAhIheAi").cp();
	this.shape_2521.setTransform(0,-30.6);

	this.shape_2522 = new cjs.Shape();
	this.shape_2522.graphics.f().s("#4B4445").ss(1,1,1).p("AgohjIAAClIBRAiIAAilIhRgi").cp();
	this.shape_2522.setTransform(-4.8,-20.6);

	this.shape_2523 = new cjs.Shape();
	this.shape_2523.graphics.f().s("#4B4445").ss(1,1,1).p("AAwhjIAAClIhfAiIAAikIBfgj").cp();
	this.shape_2523.setTransform(4.1,-20.7);

	this.shape_2524 = new cjs.Shape();
	this.shape_2524.graphics.f().s("#4B4445").ss(1,1,1).p("AAGAAQAAAGgGAAQgBAAgCgCQgCgCAAgCQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2524.setTransform(28.7,2.6);

	this.shape_2525 = new cjs.Shape();
	this.shape_2525.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2525.setTransform(30.8,0.8);

	this.shape_2526 = new cjs.Shape();
	this.shape_2526.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2526.setTransform(29.8,1.6);

	this.shape_2527 = new cjs.Shape();
	this.shape_2527.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2527.setTransform(33.3,3.9);

	this.shape_2528 = new cjs.Shape();
	this.shape_2528.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2528.setTransform(33.2,3);

	this.shape_2529 = new cjs.Shape();
	this.shape_2529.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2529.setTransform(32.4,2.4);

	this.shape_2530 = new cjs.Shape();
	this.shape_2530.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2530.setTransform(31.5,1.7);

	this.shape_2531 = new cjs.Shape();
	this.shape_2531.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2531.setTransform(27.3,2.1);

	this.shape_2532 = new cjs.Shape();
	this.shape_2532.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2532.setTransform(28.3,1.8);

	this.shape_2533 = new cjs.Shape();
	this.shape_2533.graphics.f().s("#4B4445").ss(1,1,1).p("AAAgDQAEAAAAADQAAAEgEAAQgDAAAAgEQAAgDADAAIAAAA").cp();
	this.shape_2533.setTransform(25.3,3.6);

	this.shape_2534 = new cjs.Shape();
	this.shape_2534.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2534.setTransform(26.2,2.8);

	this.shape_2535 = new cjs.Shape();
	this.shape_2535.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2535.setTransform(25,5.3);

	this.shape_2536 = new cjs.Shape();
	this.shape_2536.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2536.setTransform(28.8,4.1);

	this.shape_2537 = new cjs.Shape();
	this.shape_2537.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2537.setTransform(27.5,3.3);

	this.shape_2538 = new cjs.Shape();
	this.shape_2538.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2538.setTransform(26.9,4.4);

	this.shape_2539 = new cjs.Shape();
	this.shape_2539.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2539.setTransform(27,1.7);

	this.shape_2540 = new cjs.Shape();
	this.shape_2540.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2540.setTransform(31.3,4.1);

	this.shape_2541 = new cjs.Shape();
	this.shape_2541.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2541.setTransform(30.4,3.6);

	this.shape_2542 = new cjs.Shape();
	this.shape_2542.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2542.setTransform(31,2.9);

	this.shape_2543 = new cjs.Shape();
	this.shape_2543.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2543.setTransform(30,2.1);

	this.shape_2544 = new cjs.Shape();
	this.shape_2544.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2544.setTransform(27.9,11.1);

	this.shape_2545 = new cjs.Shape();
	this.shape_2545.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2545.setTransform(28,9);

	this.shape_2546 = new cjs.Shape();
	this.shape_2546.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2546.setTransform(24.8,9.2);

	this.shape_2547 = new cjs.Shape();
	this.shape_2547.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2547.setTransform(29.2,10.7);

	this.shape_2548 = new cjs.Shape();
	this.shape_2548.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2548.setTransform(28.7,11.4);

	this.shape_2549 = new cjs.Shape();
	this.shape_2549.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2549.setTransform(30.2,11.1);

	this.shape_2550 = new cjs.Shape();
	this.shape_2550.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2550.setTransform(35.4,9);

	this.shape_2551 = new cjs.Shape();
	this.shape_2551.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2551.setTransform(31.5,10.2);

	this.shape_2552 = new cjs.Shape();
	this.shape_2552.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2552.setTransform(28.3,10.4);

	this.shape_2553 = new cjs.Shape();
	this.shape_2553.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2553.setTransform(29,9.3);

	this.shape_2554 = new cjs.Shape();
	this.shape_2554.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2554.setTransform(25.7,9.8);

	this.shape_2555 = new cjs.Shape();
	this.shape_2555.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2555.setTransform(34.3,8.7);

	this.shape_2556 = new cjs.Shape();
	this.shape_2556.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2556.setTransform(26.5,8.8);

	this.shape_2557 = new cjs.Shape();
	this.shape_2557.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2557.setTransform(30.4,11.7);

	this.shape_2558 = new cjs.Shape();
	this.shape_2558.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2558.setTransform(34.2,10);

	this.shape_2559 = new cjs.Shape();
	this.shape_2559.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2559.setTransform(33.4,10.6);

	this.shape_2560 = new cjs.Shape();
	this.shape_2560.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2560.setTransform(32.1,11.2);

	this.shape_2561 = new cjs.Shape();
	this.shape_2561.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2561.setTransform(32.5,10.3);

	this.shape_2562 = new cjs.Shape();
	this.shape_2562.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2562.setTransform(30.4,10.4);

	this.shape_2563 = new cjs.Shape();
	this.shape_2563.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2563.setTransform(31,11.3);

	this.shape_2564 = new cjs.Shape();
	this.shape_2564.graphics.f().s("#4B4445").ss(1,1,1).p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEIAAAA").cp();
	this.shape_2564.setTransform(26.5,10.7);

	this.shape_2565 = new cjs.Shape();
	this.shape_2565.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2565.setTransform(27.4,10);

	this.shape_2566 = new cjs.Shape();
	this.shape_2566.graphics.f().s("#4B4445").ss(1,1,1).p("AAEAAQAAAEgEAAQgDAAAAgEQAAgDADAAQAEAAAAADIAAAA").cp();
	this.shape_2566.setTransform(28.6,5.4);

	this.shape_2567 = new cjs.Shape();
	this.shape_2567.graphics.f().s("#4B4445").ss(1,1,1).p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgFADgIIAHgLQACgEAHgGQACgCAJgFQAEgDAIgDQAIgEAEgBQAFAAAGgBQALAAACAAQAFABAHAEIAMAHQADACAGAHIAIAJ").cp();
	this.shape_2567.setTransform(29.6,6);

	this.shape_2568 = new cjs.Shape();
	this.shape_2568.graphics.f().s("#4B4445").ss(1,1,1).p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgFADgIIAHgLQACgEAHgGQACgCAJgFQAEgDAIgDQAIgEAEgBQAFAAAGgBQALAAACAAQAFABAHAEIAMAHQADACAGAHIAIAJ").cp();
	this.shape_2568.setTransform(29.6,6);

	this.shape_2569 = new cjs.Shape();
	this.shape_2569.graphics.f().s("#4B4445").ss(1,1,1).p("AA2gaQAGAJABADQACAEACAIQABACAAAJQABAIgBAFQgBAKgDADQgBADgIAHQgIADgFACQgIAFgEABQgCAAgFAAQgFgBgCAAQgJADgEAAIgLgBQgBAAgMgDQgLgDgCgBQgJgEgCgCQgDgCgGgIQgBgCgEgLQgDgIgBgEQgBgIAAgEQABgFADgIIAHgLQACgEAHgGQACgCAJgFQAEgDAIgDQAIgEAEgBQAFAAAGgBQALAAACAAQAFABAHAEIAMAHQADACAGAHIAIAJ").cp();
	this.shape_2569.setTransform(29.6,6);

	this.shape_2570 = new cjs.Shape();
	this.shape_2570.graphics.rf(["#32680B","rgba(50,104,11,0.796)","rgba(50,104,11,0)"],[0,0.09,1],0,0,0,0,0,26.9).s().p("AC+hKQBOAfAAArQAAAshOAfQhQAghuAAQhuAAhPggQhOgfAAgsQAAgrBOgfQBPggBuAAQBuAABQAgIAAAA").cp();
	this.shape_2570.setTransform(28.6,13.2);

	this.addChild(this.shape_2570,this.shape_2569,this.shape_2568,this.shape_2567,this.shape_2566,this.shape_2565,this.shape_2564,this.shape_2563,this.shape_2562,this.shape_2561,this.shape_2560,this.shape_2559,this.shape_2558,this.shape_2557,this.shape_2556,this.shape_2555,this.shape_2554,this.shape_2553,this.shape_2552,this.shape_2551,this.shape_2550,this.shape_2549,this.shape_2548,this.shape_2547,this.shape_2546,this.shape_2545,this.shape_2544,this.shape_2543,this.shape_2542,this.shape_2541,this.shape_2540,this.shape_2539,this.shape_2538,this.shape_2537,this.shape_2536,this.shape_2535,this.shape_2534,this.shape_2533,this.shape_2532,this.shape_2531,this.shape_2530,this.shape_2529,this.shape_2528,this.shape_2527,this.shape_2526,this.shape_2525,this.shape_2524,this.shape_2523,this.shape_2522,this.shape_2521,this.shape_2520,this.shape_2519,this.shape_2518,this.shape_2517,this.shape_2516,this.shape_2515,this.shape_2514,this.shape_2513,this.shape_2512,this.shape_2511,this.shape_2510,this.shape_2509,this.shape_2508,this.shape_2507,this.shape_2506,this.shape_2505,this.shape_2504,this.shape_2503,this.shape_2502,this.shape_2501,this.shape_2500,this.shape_2499,this.shape_2498,this.shape_2497,this.shape_2496,this.shape_2495,this.shape_2494,this.shape_2493,this.shape_2492,this.shape_2491,this.shape_2490,this.shape_2489,this.shape_2488,this.shape_2487,this.shape_2486,this.shape_2485,this.shape_2484,this.shape_2483,this.shape_2482,this.shape_2481,this.shape_2480,this.shape_2479,this.shape_2478,this.shape_2477,this.shape_2476,this.shape_2475,this.shape_2474,this.shape_2473,this.shape_2472,this.shape_2471,this.shape_2470,this.shape_2469,this.shape_2468,this.shape_2467,this.shape_2466,this.shape_2465,this.shape_2464,this.shape_2463,this.shape_2462,this.shape_2461,this.shape_2460,this.shape_2459,this.shape_2458,this.shape_2457,this.shape_2456,this.shape_2455,this.shape_2454,this.shape_2453,this.shape_2452,this.shape_2451,this.shape_2450,this.shape_2449,this.shape_2448,this.shape_2447,this.shape_2446,this.shape_2445,this.shape_2444,this.shape_2443,this.shape_2442,this.shape_2441,this.shape_2440,this.shape_2439,this.shape_2438,this.shape_2437,this.shape_2436,this.shape_2435,this.shape_2434,this.shape_2433,this.shape_2432,this.shape_2431,this.shape_2430,this.shape_2429,this.shape_2428,this.shape_2427,this.shape_2426,this.shape_2425,this.shape_2424,this.shape_2423,this.shape_2422,this.shape_2421,this.shape_2420,this.shape_2419,this.shape_2418,this.shape_2417,this.shape_2416,this.shape_2415,this.shape_2414,this.shape_2413,this.shape_2412,this.shape_2411,this.shape_2410,this.shape_2409,this.shape_2408,this.shape_2407,this.shape_2406,this.shape_2405,this.shape_2404,this.shape_2403,this.shape_2402,this.shape_2401,this.shape_2400,this.shape_2399,this.shape_2398,this.shape_2397,this.shape_2396,this.shape_2395,this.shape_2394,this.shape_2393,this.shape_2392,this.shape_2391,this.shape_2390,this.shape_2389,this.shape_2388,this.shape_2387,this.shape_2386,this.shape_2385,this.shape_2384,this.shape_2383,this.shape_2382,this.shape_2381,this.shape_2380,this.shape_2379,this.shape_2378,this.shape_2377,this.shape_2376,this.shape_2375,this.shape_2374,this.shape_2373,this.shape_2372,this.shape_2371,this.shape_2370,this.shape_2369,this.shape_2368,this.shape_2367,this.shape_2366,this.shape_2365,this.shape_2364,this.shape_2363,this.shape_2362,this.shape_2361,this.shape_2360,this.shape_2359,this.shape_2358,this.shape_2357,this.shape_2356,this.shape_2355,this.shape_2354,this.shape_2353,this.shape_2352,this.shape_2351,this.shape_2350,this.shape_2349,this.shape_2348,this.shape_2347,this.shape_2346,this.shape_2345,this.shape_2344,this.shape_2343,this.shape_2342,this.shape_2341,this.shape_2340,this.shape_2339,this.shape_2338,this.shape_2337,this.shape_2336,this.shape_2335,this.shape_2334,this.shape_2333,this.shape_2332,this.shape_2331,this.shape_2330,this.shape_2329,this.shape_2328,this.shape_2327,this.shape_2326,this.shape_2325,this.shape_2324,this.shape_2323,this.shape_2322,this.shape_2321,this.shape_2320,this.shape_2319,this.shape_2318,this.shape_2317,this.shape_2316,this.shape_2315,this.shape_2314,this.shape_2313,this.shape_2312,this.shape_2311,this.shape_2310,this.shape_2309,this.shape_2308,this.shape_2307,this.shape_2306,this.shape_2305,this.shape_2304,this.shape_2303,this.shape_2302,this.shape_2301,this.shape_2300,this.shape_2299,this.shape_2298,this.shape_2297,this.shape_2296,this.shape_2295,this.shape_2294,this.shape_2293,this.shape_2292,this.shape_2291,this.shape_2290,this.shape_2289,this.shape_2288,this.shape_2287,this.shape_2286,this.shape_2285,this.shape_2284,this.shape_2283,this.shape_2282,this.shape_2281,this.shape_2280,this.shape_2279,this.shape_2278,this.shape_2277,this.shape_2276,this.shape_2275,this.shape_2274,this.shape_2273,this.shape_2272,this.shape_2271,this.shape_2270,this.shape_2269,this.shape_2268,this.shape_2267,this.shape_2266,this.shape_2265,this.shape_2264,this.shape_2263,this.shape_2262,this.shape_2261,this.shape_2260,this.shape_2259,this.shape_2258,this.shape_2257,this.shape_2256,this.shape_2255,this.shape_2254,this.shape_2253,this.shape_2252,this.shape_2251,this.shape_2250,this.shape_2249,this.shape_2248,this.shape_2247,this.shape_2246,this.shape_2245,this.shape_2244,this.shape_2243,this.shape_2242,this.shape_2241,this.shape_2240,this.shape_2239,this.shape_2238,this.shape_2237,this.shape_2236,this.shape_2235,this.shape_2234,this.shape_2233,this.shape_2232);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.3,-39,110.9,78.8);


(lib.Fountain = function() {
	this.initialize();

	// Layer 1
	this.shape_2571 = new cjs.Shape();
	this.shape_2571.graphics.f("#D6CFBB").s().p("AAogGQAAAFgLADQgNAFgQAAQgQAAgMgFQgLgCAAgGQAAAEAMACQAMADAPAAQAPAAANgDQAMgCAAgEIAAAA").cp();
	this.shape_2571.setTransform(-1,-22.5);

	this.shape_2572 = new cjs.Shape();
	this.shape_2572.graphics.f("#C1B797").s().p("AEjg0QgDAthSAdQhUAfh6AAQh5AAhUgfQhSgegDgsQADAmBWAcQBXAdByAAQBzAABXgdQBWgbADgnIAAAA").cp();
	this.shape_2572.setTransform(-0.9,6.9);

	this.shape_2573 = new cjs.Shape();
	this.shape_2573.graphics.rf(["#76746B","rgba(123,120,111,0.694)","rgba(133,130,120,0)"],[0.804,0.906,1],0,-5.2,0,0,-5.2,29.9).s().p("AElg2QgXAYhHAYQhcAdhrAAQhrAAhZgbQhGgXgagbQAAAuBWAfQBWAgB4AAQB5AABWggQBWgfAAguIAAAA").cp();
	this.shape_2573.setTransform(-0.7,12.5);

	this.shape_2574 = new cjs.Shape();
	this.shape_2574.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAEgGAAQgFAAAAgEQAAgDAFAAQAGAAAAADIAAAA").cp();
	this.shape_2574.setTransform(13.6,-1);

	this.shape_2575 = new cjs.Shape();
	this.shape_2575.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AAHgFQAEADAAACQAAAIgLAAQgKAAAAgIQAAgCAEgDQADgCADAAQAEAAADACIAAAA").cp();
	this.shape_2575.setTransform(21.1,0.1);

	this.shape_2576 = new cjs.Shape();
	this.shape_2576.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgDAFAAQAGAAAAADQAAAEgGAAQgFAAAAgEIAAAA").cp();
	this.shape_2576.setTransform(-20.3,0.4);

	this.shape_2577 = new cjs.Shape();
	this.shape_2577.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAEgGAAQgFAAAAgEQAAgDAFAAQAGAAAAADIAAAA").cp();
	this.shape_2577.setTransform(-24.4,-0.7);

	this.shape_2578 = new cjs.Shape();
	this.shape_2578.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgDQADgCADAAQAEAAADACQAEADAAACIAAAA").cp();
	this.shape_2578.setTransform(-22.5,1.3);

	this.shape_2579 = new cjs.Shape();
	this.shape_2579.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,0.8).s().p("AAIAAQAAACgCACQgDACgDAAQgHAAAAgGQAAgFAHAAQADAAADACQACACAAABIAAAA").cp();
	this.shape_2579.setTransform(-17.2,-2.9);

	this.shape_2580 = new cjs.Shape();
	this.shape_2580.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgCQADgDADAAQAEAAAEADQADACAAACIAAAA").cp();
	this.shape_2580.setTransform(-20.7,-1.6);

	this.shape_2581 = new cjs.Shape();
	this.shape_2581.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AAHgFQAEADAAACQAAADgEADQgDACgEAAQgDAAgDgCQgEgDAAgDQAAgCAEgDQADgCADAAQAEAAADACIAAAA").cp();
	this.shape_2581.setTransform(-17.3,0.2);

	this.shape_2582 = new cjs.Shape();
	this.shape_2582.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,0.7).s().p("AAGAAQAAAFgGAAQgFAAAAgFQAAgEAFAAQAGAAAAAEIAAAA").cp();
	this.shape_2582.setTransform(16.1,2.9);

	this.shape_2583 = new cjs.Shape();
	this.shape_2583.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AALAAQAAADgDADQgEACgEAAQgDAAgDgCQgEgDAAgDQAAgHAKAAQALAAAAAHIAAAA").cp();
	this.shape_2583.setTransform(20.4,2.9);

	this.shape_2584 = new cjs.Shape();
	this.shape_2584.graphics.rf(["#FEFEFE","rgba(254,254,254,0.957)","rgba(254,254,254,0)"],[0.475,0.486,1],0,0,0,0,0,1.1).s().p("AgKAAQAAgHAKAAQALAAAAAHQAAADgDADQgEACgEAAQgDAAgDgCQgEgDAAgDIAAAA").cp();
	this.shape_2584.setTransform(17.3,0.8);

	this.shape_2585 = new cjs.Shape();
	this.shape_2585.graphics.f("#B0AC9E").s().p("AAoAAQAAgFgMgEQgMgEgQAAQgPAAgMAEQgMAEAAAFQAAAFAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgFIAAAA").cp();
	this.shape_2585.setTransform(-0.9,-23.4);

	this.shape_2586 = new cjs.Shape();
	this.shape_2586.graphics.lf(["rgba(155,152,140,0)","#8A847D"],[0,1],0,-11.4,0,11.5).s().p("AA6BdQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIASjPQAAAGAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgGIASDP").cp();
	this.shape_2586.setTransform(-1,-11.9);

	this.shape_2587 = new cjs.Shape();
	this.shape_2587.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,4.7,0,0,4.7,4.9).s().p("AA6BdQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIASjPQAAAGAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgGIASDP").cp();
	this.shape_2587.setTransform(-1,-11.9);

	this.shape_2588 = new cjs.Shape();
	this.shape_2588.graphics.f("#A39F93").s().p("ACBAAQAAATgmAOQgmANg1AAQg0AAgmgNQgmgOAAgTQAAgSAmgOQAlgNA1AAQA1AAAmANQAmAOAAASIAAAA").cp();
	this.shape_2588.setTransform(-0.9,-2.2);

	this.shape_2589 = new cjs.Shape();
	this.shape_2589.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-5.6,0,5.8).s().p("ACDAKQAAATgnAOQgmAOg2AAQg1AAgmgOQgngOAAgTIAAgTQAAgTAngOQAmgOA1AAQA2AAAmAOQAnAOAAATIAAAT").cp();
	this.shape_2589.setTransform(-1,-1.2);

	this.shape_2590 = new cjs.Shape();
	this.shape_2590.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,2.3,0,0,2.3,7.5).s().p("ACDAKQAAATgnAOQgmAOg2AAQg1AAgmgOQgngOAAgTIAAgTQAAgTAngOQAmgOA1AAQA2AAAmAOQAnAOAAATIAAAT").cp();
	this.shape_2590.setTransform(-1,-1.2);

	this.shape_2591 = new cjs.Shape();
	this.shape_2591.graphics.lf(["#8586D1","rgba(133,134,209,0)"],[0,1],0,1,0,5.9).s().p("ACDgJIAAATQAAATgnAOQgmANg2AAQg1AAgmgNQgngOAAgTIAAgTQAAgTAngOQAmgNA1AAQA2AAAmANQAnAOAAATIAAAA").cp();
	this.shape_2591.setTransform(-1,0.6);

	this.shape_2592 = new cjs.Shape();
	this.shape_2592.graphics.rf(["rgba(0,0,0,0)","rgba(0,0,0,0.102)","rgba(0,0,0,0.149)"],[0.561,0.886,1],0,0,0,0,0,26.1).s().p("AAAhdQBtAABMAcQBNAbAAAmQAAAmhNAcQhNAchsAAQhrAAhNgcQhNgcAAgmQAAgmBNgbQBMgcBsAAIAAAA").cp();
	this.shape_2592.setTransform(-0.9,0.7);

	this.shape_2593 = new cjs.Shape();
	this.shape_2593.graphics.f("#86ACE0").s().p("AAAhdQBtAABMAcQBNAbAAAmQAAAmhNAcQhNAchsAAQhrAAhNgcQhNgcAAgmQAAgmBNgbQBMgcBsAAIAAAA").cp();
	this.shape_2593.setTransform(-0.9,0.7);

	this.shape_2594 = new cjs.Shape();
	this.shape_2594.graphics.f("#A39F93").s().p("AAAhnQB4AABVAfQBVAfAAApQAAArhVAeQhVAfh4AAQh3AAhVgfQhVgeAAgrQAAgpBVgfQBVgfB3AAIAAAA").cp();
	this.shape_2594.setTransform(-0.9,1.1);

	this.shape_2595 = new cjs.Shape();
	this.shape_2595.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-12.7,0,12.9).s().p("AAAh+QB5AABWAfQBWAeAAAsIAAArQAAAshWAfQhWAeh5AAQh4AAhWgeQhWgfAAgsIAAgrQAAgsBWgeQBWgfB4AAIAAAA").cp();
	this.shape_2595.setTransform(-0.9,3.2);

	this.shape_2596 = new cjs.Shape();
	this.shape_2596.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.1,5.2,0,-0.1,5.2,16.8).s().p("AAAh+QB5AABWAfQBWAeAAAsIAAArQAAAshWAfQhWAeh5AAQh4AAhWgeQhWgfAAgsIAAgrQAAgsBWgeQBWgfB4AAIAAAA").cp();
	this.shape_2596.setTransform(-0.9,3.2);

	this.shape_2597 = new cjs.Shape();
	this.shape_2597.graphics.f().s("#443D3F").ss(1,1,1).p("AAGAAQAAAEgGAAQgFAAAAgEQAAgDAFAAQAGAAAAADIAAAA").cp();
	this.shape_2597.setTransform(13.6,-1);

	this.shape_2598 = new cjs.Shape();
	this.shape_2598.graphics.f().s("#443D3F").ss(1,1,1).p("AAHgFQAEADAAACQAAAIgLAAQgKAAAAgIQAAgCAEgDQADgCADAAQAEAAADACIAAAA").cp();
	this.shape_2598.setTransform(21.1,0.1);

	this.shape_2599 = new cjs.Shape();
	this.shape_2599.graphics.f().s("#443D3F").ss(1,1,1).p("AAHAAQAAAFgHAAQgGAAAAgFQAAgEAGAAQAHAAAAAEIAAAA").cp();
	this.shape_2599.setTransform(-21.9,4);

	this.shape_2600 = new cjs.Shape();
	this.shape_2600.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgDQADgCADAAQAEAAAEACQADADAAACIAAAA").cp();
	this.shape_2600.setTransform(-19,3);

	this.shape_2601 = new cjs.Shape();
	this.shape_2601.graphics.f().s("#443D3F").ss(1,1,1).p("AgFAAQAAgDAFAAQAGAAAAADQAAAEgGAAQgFAAAAgEIAAAA").cp();
	this.shape_2601.setTransform(-20.3,0.4);

	this.shape_2602 = new cjs.Shape();
	this.shape_2602.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgFAAAAgEQAAgDAFAAQAFAAAAADIAAAA").cp();
	this.shape_2602.setTransform(-6.8,8.2);

	this.shape_2603 = new cjs.Shape();
	this.shape_2603.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2603.setTransform(-18.1,6.1);

	this.shape_2604 = new cjs.Shape();
	this.shape_2604.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2604.setTransform(-14.8,4.5);

	this.shape_2605 = new cjs.Shape();
	this.shape_2605.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2605.setTransform(10.6,6);

	this.shape_2606 = new cjs.Shape();
	this.shape_2606.graphics.f().s("#443D3F").ss(1,1,1).p("AAGAAQAAAEgGAAQgEAAAAgEQAAgDAEAAQAGAAAAADIAAAA").cp();
	this.shape_2606.setTransform(12.7,-6);

	this.shape_2607 = new cjs.Shape();
	this.shape_2607.graphics.f().s("#443D3F").ss(1,1,1).p("AAGAAQAAAEgGAAQgEAAAAgEQAAgDAEAAQAGAAAAADIAAAA").cp();
	this.shape_2607.setTransform(15.2,-3.3);

	this.shape_2608 = new cjs.Shape();
	this.shape_2608.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2608.setTransform(13.4,2.4);

	this.shape_2609 = new cjs.Shape();
	this.shape_2609.graphics.f().s("#443D3F").ss(1,1,1).p("AAGAAQAAAEgGAAQgEAAAAgEQAAgDAEAAQAGAAAAADIAAAA").cp();
	this.shape_2609.setTransform(23.4,1.8);

	this.shape_2610 = new cjs.Shape();
	this.shape_2610.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2610.setTransform(22.3,-2.5);

	this.shape_2611 = new cjs.Shape();
	this.shape_2611.graphics.f().s("#443D3F").ss(1,1,1).p("AAFAAQAAAEgFAAQgEAAAAgEQAAgDAEAAQAFAAAAADIAAAA").cp();
	this.shape_2611.setTransform(-14.9,-2.5);

	this.shape_2612 = new cjs.Shape();
	this.shape_2612.graphics.f().s("#443D3F").ss(1,1,1).p("AAIAAQAAAGgIAAQgCAAgDgCQgCgCAAgCQAAgFAHAAQAIAAAAAFIAAAA").cp();
	this.shape_2612.setTransform(18,-2.3);

	this.shape_2613 = new cjs.Shape();
	this.shape_2613.graphics.f().s("#443D3F").ss(1,1,1).p("AAIAAQAAACgDACQgCACgDAAQgCAAgCgCQgDgCAAgCQAAgFAHAAQADAAACACQADACAAABIAAAA").cp();
	this.shape_2613.setTransform(-14.8,-5);

	this.shape_2614 = new cjs.Shape();
	this.shape_2614.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDACQgEADgEAAQgDAAgDgDQgEgCAAgDQAAgHAKAAQAEAAAEACQADADAAACIAAAA").cp();
	this.shape_2614.setTransform(-19.7,-4.3);

	this.shape_2615 = new cjs.Shape();
	this.shape_2615.graphics.f().s("#443D3F").ss(1,1,1).p("AAGAAQAAAEgGAAQgFAAAAgEQAAgDAFAAQAGAAAAADIAAAA").cp();
	this.shape_2615.setTransform(-24.4,-0.7);

	this.shape_2616 = new cjs.Shape();
	this.shape_2616.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgDQADgCADAAQAEAAADACQAEADAAACIAAAA").cp();
	this.shape_2616.setTransform(-22.5,1.3);

	this.shape_2617 = new cjs.Shape();
	this.shape_2617.graphics.f().s("#443D3F").ss(1,1,1).p("AAIAAQAAACgCACQgDACgDAAQgHAAAAgGQAAgFAHAAQADAAADACQACACAAABIAAAA").cp();
	this.shape_2617.setTransform(-17.2,-2.9);

	this.shape_2618 = new cjs.Shape();
	this.shape_2618.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAAIgLAAQgKAAAAgIQAAgCAEgCQADgDADAAQAEAAAEADQADACAAACIAAAA").cp();
	this.shape_2618.setTransform(-20.7,-1.6);

	this.shape_2619 = new cjs.Shape();
	this.shape_2619.graphics.f().s("#443D3F").ss(1,1,1).p("AAHgFQAEADAAACQAAADgEADQgDACgEAAQgDAAgDgCQgEgDAAgDQAAgCAEgDQADgCADAAQAEAAADACIAAAA").cp();
	this.shape_2619.setTransform(-17.3,0.2);

	this.shape_2620 = new cjs.Shape();
	this.shape_2620.graphics.f().s("#443D3F").ss(1,1,1).p("AAGAAQAAAFgGAAQgFAAAAgFQAAgEAFAAQAGAAAAAEIAAAA").cp();
	this.shape_2620.setTransform(16.1,2.9);

	this.shape_2621 = new cjs.Shape();
	this.shape_2621.graphics.f().s("#443D3F").ss(1,1,1).p("AALAAQAAADgDADQgEACgEAAQgDAAgDgCQgEgDAAgDQAAgHAKAAQALAAAAAHIAAAA").cp();
	this.shape_2621.setTransform(20.4,2.9);

	this.shape_2622 = new cjs.Shape();
	this.shape_2622.graphics.f().s("#443D3F").ss(1,1,1).p("AgKAAQAAgHAKAAQALAAAAAHQAAADgDADQgEACgEAAQgDAAgDgCQgEgDAAgDIAAAA").cp();
	this.shape_2622.setTransform(17.3,0.8);

	this.shape_2623 = new cjs.Shape();
	this.shape_2623.graphics.f().s("#443D3F").ss(1,1,1).p("AAoAAQAAgFgMgEQgMgEgQAAQgPAAgMAEQgMAEAAAFQAAAFAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgFIAAAA").cp();
	this.shape_2623.setTransform(-0.9,-23.4);

	this.shape_2624 = new cjs.Shape();
	this.shape_2624.graphics.f().s("#443D3F").ss(1,1,1).p("AA6BdQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIASjPQAAAGAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgGIASDP").cp();
	this.shape_2624.setTransform(-1,-11.9);

	this.shape_2625 = new cjs.Shape();
	this.shape_2625.graphics.f().s("#443D3F").ss(1,1,1).p("AA6BdQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIASjPQAAAGAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgGIASDP").cp();
	this.shape_2625.setTransform(-1,-11.9);

	this.shape_2626 = new cjs.Shape();
	this.shape_2626.graphics.f().s("#443D3F").ss(1,1,1).p("AA6BdQAAAJgRAGQgRAHgYAAQgXAAgRgHQgRgGAAgJIASjPQAAAGAMAFQAMAEAPAAQAQAAAMgEQAMgFAAgGIASDP").cp();
	this.shape_2626.setTransform(-1,-11.9);

	this.shape_2627 = new cjs.Shape();
	this.shape_2627.graphics.f().s("#443D3F").ss(1,1,1).p("ABsAAQAAAUgfAPQggAPgtAAQgsAAgggPQgfgPAAgUQAAgTAfgPQAggPAsAAQAtAAAgAPQAfAPAAATIAAAA").cp();
	this.shape_2627.setTransform(-1,-2.4);

	this.shape_2628 = new cjs.Shape();
	this.shape_2628.graphics.f().s("#443D3F").ss(1,1,1).p("ABsAAQAAAUgfAPQggAPgtAAQgsAAgggPQgfgPAAgUQAAgTAfgPQAggPAsAAQAtAAAgAPQAfAPAAATIAAAA").cp();
	this.shape_2628.setTransform(-1,-2.4);

	this.shape_2629 = new cjs.Shape();
	this.shape_2629.graphics.f().s("#443D3F").ss(1,1,1).p("ACBAAQAAATgmAOQgmANg1AAQg0AAgmgNQgmgOAAgTQAAgSAmgOQAlgNA1AAQA1AAAmANQAmAOAAASIAAAA").cp();
	this.shape_2629.setTransform(-0.9,-2.2);

	this.shape_2630 = new cjs.Shape();
	this.shape_2630.graphics.f().s("#443D3F").ss(1,1,1).p("ACDAKQAAATgnAOQgmAOg2AAQg1AAgmgOQgngOAAgTIAAgTQAAgTAngOQAmgOA1AAQA2AAAmAOQAnAOAAATIAAAT").cp();
	this.shape_2630.setTransform(-1,-1.2);

	this.shape_2631 = new cjs.Shape();
	this.shape_2631.graphics.f().s("#443D3F").ss(1,1,1).p("ACDAKQAAATgnAOQgmAOg2AAQg1AAgmgOQgngOAAgTIAAgTQAAgTAngOQAmgOA1AAQA2AAAmAOQAnAOAAATIAAAT").cp();
	this.shape_2631.setTransform(-1,-1.2);

	this.shape_2632 = new cjs.Shape();
	this.shape_2632.graphics.f().s("#443D3F").ss(1,1,1).p("ACDAKQAAATgnAOQgmAOg2AAQg1AAgmgOQgngOAAgTIAAgTQAAgTAngOQAmgOA1AAQA2AAAmAOQAnAOAAATIAAAT").cp();
	this.shape_2632.setTransform(-1,-1.2);

	this.shape_2633 = new cjs.Shape();
	this.shape_2633.graphics.f().s("#443D3F").ss(1,1,1).p("ACDgJIAAATQAAATgnAOQgmANg2AAQg1AAgmgNQgngOAAgTIAAgTQAAgTAngOQAmgNA1AAQA2AAAmANQAnAOAAATIAAAA").cp();
	this.shape_2633.setTransform(-1,0.6);

	this.shape_2634 = new cjs.Shape();
	this.shape_2634.graphics.f().s("#443D3F").ss(1,1,1).p("AAAhdQBtAABMAcQBNAbAAAmQAAAmhNAcQhNAchsAAQhrAAhNgcQhNgcAAgmQAAgmBNgbQBMgcBsAAIAAAA").cp();
	this.shape_2634.setTransform(-0.9,0.7);

	this.shape_2635 = new cjs.Shape();
	this.shape_2635.graphics.f().s("#443D3F").ss(1,1,1).p("AAAhdQBtAABMAcQBNAbAAAmQAAAmhNAcQhNAchsAAQhrAAhNgcQhNgcAAgmQAAgmBNgbQBMgcBsAAIAAAA").cp();
	this.shape_2635.setTransform(-0.9,0.7);

	this.shape_2636 = new cjs.Shape();
	this.shape_2636.graphics.f().s("#443D3F").ss(1,1,1).p("AAAhdQBtAABMAcQBNAbAAAmQAAAmhNAcQhNAchsAAQhrAAhNgcQhNgcAAgmQAAgmBNgbQBMgcBsAAIAAAA").cp();
	this.shape_2636.setTransform(-0.9,0.7);

	this.shape_2637 = new cjs.Shape();
	this.shape_2637.graphics.f().s("#443D3F").ss(1,1,1).p("AAAhnQB4AABVAfQBVAfAAApQAAArhVAeQhVAfh4AAQh3AAhVgfQhVgeAAgrQAAgpBVgfQBVgfB3AAIAAAA").cp();
	this.shape_2637.setTransform(-0.9,1.1);

	this.shape_2638 = new cjs.Shape();
	this.shape_2638.graphics.f().s("#443D3F").ss(1,1,1).p("AAAh+QB5AABWAfQBWAeAAAsIAAArQAAAshWAfQhWAeh5AAQh4AAhWgeQhWgfAAgsIAAgrQAAgsBWgeQBWgfB4AAIAAAA").cp();
	this.shape_2638.setTransform(-0.9,3.2);

	this.shape_2639 = new cjs.Shape();
	this.shape_2639.graphics.f().s("#443D3F").ss(1,1,1).p("AAAh+QB5AABWAfQBWAeAAAsIAAArQAAAshWAfQhWAeh5AAQh4AAhWgeQhWgfAAgsIAAgrQAAgsBWgeQBWgfB4AAIAAAA").cp();
	this.shape_2639.setTransform(-0.9,3.2);

	this.shape_2640 = new cjs.Shape();
	this.shape_2640.graphics.f().s("#443D3F").ss(1,1,1).p("AAAh+QB5AABWAfQBWAeAAAsIAAArQAAAshWAfQhWAeh5AAQh4AAhWgeQhWgfAAgsIAAgrQAAgsBWgeQBWgfB4AAIAAAA").cp();
	this.shape_2640.setTransform(-0.9,3.2);

	this.addChild(this.shape_2640,this.shape_2639,this.shape_2638,this.shape_2637,this.shape_2636,this.shape_2635,this.shape_2634,this.shape_2633,this.shape_2632,this.shape_2631,this.shape_2630,this.shape_2629,this.shape_2628,this.shape_2627,this.shape_2626,this.shape_2625,this.shape_2624,this.shape_2623,this.shape_2622,this.shape_2621,this.shape_2620,this.shape_2619,this.shape_2618,this.shape_2617,this.shape_2616,this.shape_2615,this.shape_2614,this.shape_2613,this.shape_2612,this.shape_2611,this.shape_2610,this.shape_2609,this.shape_2608,this.shape_2607,this.shape_2606,this.shape_2605,this.shape_2604,this.shape_2603,this.shape_2602,this.shape_2601,this.shape_2600,this.shape_2599,this.shape_2598,this.shape_2597,this.shape_2596,this.shape_2595,this.shape_2594,this.shape_2593,this.shape_2592,this.shape_2591,this.shape_2590,this.shape_2589,this.shape_2588,this.shape_2587,this.shape_2586,this.shape_2585,this.shape_2584,this.shape_2583,this.shape_2582,this.shape_2581,this.shape_2580,this.shape_2579,this.shape_2578,this.shape_2577,this.shape_2576,this.shape_2575,this.shape_2574,this.shape_2573,this.shape_2572,this.shape_2571);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.1,-24.8,82.5,49.9);


(lib.Flag = function() {
	this.initialize();

	// Calque 3
	this.instance = new lib.fagnon();
	this.instance.setTransform(1.8,-26.2,1,1,0,0,0,12.6,8.7);

	// Calque 4
	this.shape_2641 = new cjs.Shape();
	this.shape_2641.graphics.f().s("#525520").ss(0.5,0,0,4).p("AAeAAQAAANgJAIQgJAJgMAAQgLAAgJgJQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALIAAAA").cp();
	this.shape_2641.setTransform(-12.2,-38.1);

	this.shape_2642 = new cjs.Shape();
	this.shape_2642.graphics.rf(["#FAF948","rgba(245,245,71,0.957)","rgba(185,195,62,0.439)","rgba(148,164,57,0.122)","rgba(134,152,55,0)"],[0,0.035,0.49,0.824,1],0.1,-2.5,0,0.1,-2.5,3.5).s().p("AAeAAQAAANgJAIQgJAJgMAAQgLAAgJgJQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALIAAAA").cp();
	this.shape_2642.setTransform(-12.2,-38.1);

	this.shape_2643 = new cjs.Shape();
	this.shape_2643.graphics.lf(["#D8D840","#B4C636","#A6BF32","#A1B832","#93A632","#7D8931","#5F6230"],[0,0.333,0.514,0.6,0.718,0.855,1],0,-2.8,0.1,3.1).s().p("AAeAAQAAANgJAIQgJAJgMAAQgLAAgJgJQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALIAAAA").cp();
	this.shape_2643.setTransform(-12.2,-38.1);

	// Calque 5
	this.shape_2644 = new cjs.Shape();
	this.shape_2644.graphics.f("#4A3F19").s().p("AAMCvQAAAFgMAAQgLAAAAgFIAAldQAAgFALAAQAMAAAAAFIAAFd").cp();
	this.shape_2644.setTransform(-12.2,-17.9);

	this.addChild(this.shape_2644,this.shape_2643,this.shape_2642,this.shape_2641,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.3,-41.1,29.9,41.2);


(lib.Court = function() {
	this.initialize();

	// Layer 1
	this.shape_2645 = new cjs.Shape();
	this.shape_2645.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2645.setTransform(37,-0.7);

	this.shape_2646 = new cjs.Shape();
	this.shape_2646.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2646.setTransform(35.6,0.4);

	this.shape_2647 = new cjs.Shape();
	this.shape_2647.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-6.9,0,0.2,-6.9,9.5).s().p("AAmhGIAUAPQAIAFADADIAIALQACACAAAEQABAFABACQAGAHABAEQABABACALQAAAIABAFQABAJgBAEQABAJgBAEQgCAGgFAGQgHAFgDADQgGAHgEACQgCABgFAAQgFABgCAAQgHAGgEABQgBAAgMABQgCABgMAAQgIACgFAAIgLABIgNgDIgMgEQgJgBgDgCQgJgDgDgCQgFgDgGgFQgDgDgFgHQgCgEgDgIQgCgEgCgIIgEgZQAAgIABgFQADgMABgBQACgEAGgHIAIgLIAVgRQAKgGACgBQABAAAMgEQALgDACAAQAHgCAFAAIANABQADAAAKAEIAMAG").cp();
	this.shape_2647.setTransform(35.5,6.5);

	this.shape_2648 = new cjs.Shape();
	this.shape_2648.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-7.9,0.1,8.2).s().p("AAmhGIAUAPQAIAFADADIAIALQACACAAAEQABAFABACQAGAHABAEQABABACALQAAAIABAFQABAJgBAEQABAJgBAEQgCAGgFAGQgHAFgDADQgGAHgEACQgCABgFAAQgFABgCAAQgHAGgEABQgBAAgMABQgCABgMAAQgIACgFAAIgLABIgNgDIgMgEQgJgBgDgCQgJgDgDgCQgFgDgGgFQgDgDgFgHQgCgEgDgIQgCgEgCgIIgEgZQAAgIABgFQADgMABgBQACgEAGgHIAIgLIAVgRQAKgGACgBQABAAAMgEQALgDACAAQAHgCAFAAIANABQADAAAKAEIAMAG").cp();
	this.shape_2648.setTransform(35.5,6.5);

	this.shape_2649 = new cjs.Shape();
	this.shape_2649.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2649.setTransform(-21.3,0);

	this.shape_2650 = new cjs.Shape();
	this.shape_2650.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.6).s().p("AAGAAQAAAGgGAAQgFAAAAgGQAAgFAFAAQAGAAAAAFIAAAA").cp();
	this.shape_2650.setTransform(-22.7,1.1);

	this.shape_2651 = new cjs.Shape();
	this.shape_2651.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-6.9,0,0.2,-6.9,9.5).s().p("ABcANIABANQABAJgCAEQgBAEgGAIQgHAFgDADQgGAHgEACQgCABgEAAQgFABgCAAQgCABgEADQgEACgCABQgBAAgMABQgCABgLAAQgFAAgIACIgLABIgagHQgEgBgIgCQgEgCgIgDQgFgDgFgFQgEgDgFgHQgCgEgDgIIgDgMQgCgEgBgJQAAgEgCgIIACgNQABgEACgJQACgEAHgHQACgDAFgIIALgIQAIgHACgCQALgGABgBQAEgBAJgDQAJgDAEAAQAHgCAFAAIANABQADAAAKAEIAMAGIAKAHQAGAEAEAEQAJAFACADQAGAHACAEQADAJACAEQAFAHACAEQAAABADALQgBAIABAFIAAAA").cp();
	this.shape_2651.setTransform(-22.8,7.2);

	this.shape_2652 = new cjs.Shape();
	this.shape_2652.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-7.9,0.1,8.2).s().p("ABcANIABANQABAJgCAEQgBAEgGAIQgHAFgDADQgGAHgEACQgCABgEAAQgFABgCAAQgCABgEADQgEACgCABQgBAAgMABQgCABgLAAQgFAAgIACIgLABIgagHQgEgBgIgCQgEgCgIgDQgFgDgFgFQgEgDgFgHQgCgEgDgIIgDgMQgCgEgBgJQAAgEgCgIIACgNQABgEACgJQACgEAHgHQACgDAFgIIALgIQAIgHACgCQALgGABgBQAEgBAJgDQAJgDAEAAQAHgCAFAAIANABQADAAAKAEIAMAGIAKAHQAGAEAEAEQAJAFACADQAGAHACAEQADAJACAEQAFAHACAEQAAABADALQgBAIABAFIAAAA").cp();
	this.shape_2652.setTransform(-22.8,7.2);

	this.shape_2653 = new cjs.Shape();
	this.shape_2653.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQADADAAACIAAAA").cp();
	this.shape_2653.setTransform(-21.3,9.1);

	this.shape_2654 = new cjs.Shape();
	this.shape_2654.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgDgDAAgDQAAgHAIAAQAIAAAAAHIAAAA").cp();
	this.shape_2654.setTransform(-23.2,10.7);

	this.shape_2655 = new cjs.Shape();
	this.shape_2655.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("AAshlQAEAEACAAQAKABAEACQAGAHADADQACACACADQADAEABABQAIAFADAEIAIAKQAEAIACAFIAHALQAFAHACAEQABAJABAFQAEAGABAFQAAACgBAEQAAAFAAACQABALAAACQADAJgBAEQgBAGgEAGQgFAHgDAEQgDAJgDADQgBABgFACQgFAAgCABQgBACgDADQgDAEgCABIgYAJQgEAAgIAFQgEAAgJADQgEACgJgBQgEABgJgCQgEAAgJACQgCAAgJABIgZgDQgEgCgIgDQgEgBgHgEIgMgFQgLgFAAAAQgLgGAAgBQgDgCgIgFQgCgDgDgJIgHgKIgEgMQgBgEgEgIIgEgMIAAgYIACgNQACgJACgDQABgEAGgHQACgEAGgGIARgTQACgBACgEQACgEACgCQAHgGADgCQACgBAFgBQAEAAACgBQACgBADgDQADgEACgBIANgDQAIgCAEAAQAJAAAEAAQACAAAFgDQAEgCABAAQAIACAEAAQAKAAAEABIANAEQACABADADIAAAA").cp();
	this.shape_2655.setTransform(-23.3,19.1);

	this.shape_2656 = new cjs.Shape();
	this.shape_2656.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("AAshlQAEAEACAAQAKABAEACQAGAHADADQACACACADQADAEABABQAIAFADAEIAIAKQAEAIACAFIAHALQAFAHACAEQABAJABAFQAEAGABAFQAAACgBAEQAAAFAAACQABALAAACQADAJgBAEQgBAGgEAGQgFAHgDAEQgDAJgDADQgBABgFACQgFAAgCABQgBACgDADQgDAEgCABIgYAJQgEAAgIAFQgEAAgJADQgEACgJgBQgEABgJgCQgEAAgJACQgCAAgJABIgZgDQgEgCgIgDQgEgBgHgEIgMgFQgLgFAAAAQgLgGAAgBQgDgCgIgFQgCgDgDgJIgHgKIgEgMQgBgEgEgIIgEgMIAAgYIACgNQACgJACgDQABgEAGgHQACgEAGgGIARgTQACgBACgEQACgEACgCQAHgGADgCQACgBAFgBQAEAAACgBQACgBADgDQADgEACgBIANgDQAIgCAEAAQAJAAAEAAQACAAAFgDQAEgCABAAQAIACAEAAQAKAAAEABIANAEQACABADADIAAAA").cp();
	this.shape_2656.setTransform(-23.3,19.1);

	this.shape_2657 = new cjs.Shape();
	this.shape_2657.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACIAAAA").cp();
	this.shape_2657.setTransform(37.7,7.8);

	this.shape_2658 = new cjs.Shape();
	this.shape_2658.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgDgDAAgDQAAgCADgDQADgCACAAQADAAADACQACADAAACIAAAA").cp();
	this.shape_2658.setTransform(35.7,9.3);

	this.shape_2659 = new cjs.Shape();
	this.shape_2659.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("AAnhpQAEABAHAHQACABAFAAQAFAAACACQADACAGAIQAEACAEAIQAEADAHAFIAIALQADAEADAIIAHALQAFAIACAEQABAJABAEQAEAHABAEQAAACgBAFQAAAFAAACQABALAAABQADAKgBAEQgBAFgEAHQgBACgCAEQgEADgBACQgDAIgDADQgBACgFABQgFACgCAAQgFAIgEACIgMAFQgIACgEABQgIAEgEABQgIAEgFAAQgJAAgEAAQgJAAgEAAQgJACgEAAIgLABIgZgEQgIgEgEAAQgIgEgDgBIgMgFQgIgDgDgCQgIgEgDgDQgIgEgDgEQgDgHgCgEQgCgEgFgHIgEgMQgBgDgEgIIgEgMIAAgYIAGgaQABgDAGgIQACgEAGgGIARgSQACgCACgEQACgEACgBIAKgIQACgCAFAAQAEgBACgBQACAAADgEQADgDACgBQAEgCAJgCIAMgCQAFgBAIABQACAAAFgCQAEgCABAAQAEAAAIACQAFABAJAAIANAE").cp();
	this.shape_2659.setTransform(35.6,17.8);

	this.shape_2660 = new cjs.Shape();
	this.shape_2660.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("AAnhpQAEABAHAHQACABAFAAQAFAAACACQADACAGAIQAEACAEAIQAEADAHAFIAIALQADAEADAIIAHALQAFAIACAEQABAJABAEQAEAHABAEQAAACgBAFQAAAFAAACQABALAAABQADAKgBAEQgBAFgEAHQgBACgCAEQgEADgBACQgDAIgDADQgBACgFABQgFACgCAAQgFAIgEACIgMAFQgIACgEABQgIAEgEABQgIAEgFAAQgJAAgEAAQgJAAgEAAQgJACgEAAIgLABIgZgEQgIgEgEAAQgIgEgDgBIgMgFQgIgDgDgCQgIgEgDgDQgIgEgDgEQgDgHgCgEQgCgEgFgHIgEgMQgBgDgEgIIgEgMIAAgYIAGgaQABgDAGgIQACgEAGgGIARgSQACgCACgEQACgEACgBIAKgIQACgCAFAAQAEgBACgBQACAAADgEQADgDACgBQAEgCAJgCIAMgCQAFgBAIABQACAAAFgCQAEgCABAAQAEAAAIACQAFABAJAAIANAE").cp();
	this.shape_2660.setTransform(35.6,17.8);

	this.shape_2661 = new cjs.Shape();
	this.shape_2661.graphics.f("#4E4B46").s().p("AAWgeQAAA+AAALQgGAOgOAOQgMAMgIABQgDhTAAgJQAChIAQgDQAUgEAFA5IAAAA").cp();
	this.shape_2661.setTransform(60.6,-5.9);

	this.shape_2662 = new cjs.Shape();
	this.shape_2662.graphics.f("#4E4B46").s().p("AAhAtQgGAJgaANQgUALgKACQgBgPgChIQAChDAWgEQAegFAIA3QACAMABA9IAAAA").cp();
	this.shape_2662.setTransform(51.2,1.3);

	this.shape_2663 = new cjs.Shape();
	this.shape_2663.graphics.f("#4E4B46").s().p("AgDhLQAegGALA4QAEAYABAzQgPALgfAIQghAHgFABQgChBACgSQAGg+AggHIAAAA").cp();
	this.shape_2663.setTransform(37.5,6.3);

	this.shape_2664 = new cjs.Shape();
	this.shape_2664.graphics.f("#4E4B46").s().p("AgUgeQgBA+AAAMQAGAOAOANQAMAMAIABQADhSAAgKQgBhIgRgDQgUgEgEA5IAAAA").cp();
	this.shape_2664.setTransform(-50,-6.7);

	this.shape_2665 = new cjs.Shape();
	this.shape_2665.graphics.f("#4E4B46").s().p("AggAtQAGAJAaANQAUALAKACQABgPAChIQgChDgWgEQgegFgIA3QgCAMgBA9IAAAA").cp();
	this.shape_2665.setTransform(-40.6,0.5);

	this.shape_2666 = new cjs.Shape();
	this.shape_2666.graphics.f("#4E4B46").s().p("AgqAxQAXASA9AJQAChBgCgSQgGg+gggGQgegGgLA4QgEAYgBAyIAAAA").cp();
	this.shape_2666.setTransform(-26.9,5.5);

	this.shape_2667 = new cjs.Shape();
	this.shape_2667.graphics.rf(["#3A3A37","#363633","#2D2C29"],[0.353,0.678,1],0,0.9,0,0,0.9,3.1).s().p("AAfAAQAAAMgJAKQgJAJgNAAQgLAAgKgJQgJgKAAgMQAAgMAJgJQAKgJALAAQANAAAJAJQAJAKAAALIAAAA").cp();
	this.shape_2667.setTransform(5.7,18.9);

	this.shape_2668 = new cjs.Shape();
	this.shape_2668.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.263,0.459,1],0,-15.4,0,15.6).s().p("ABWgbIirAAIAKAoQAnAQAkAAQAhAAAqgQIALgo").cp();
	this.shape_2668.setTransform(5.8,30.2);

	this.shape_2669 = new cjs.Shape();
	this.shape_2669.graphics.lf(["rgba(0,0,0,0.098)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.098)"],[0,0.165,0.831,1],-8.5,0,8.7,0).s().p("ABWgbIirAAIAKAoQAnAQAkAAQAhAAAqgQIALgo").cp();
	this.shape_2669.setTransform(5.8,30.2);

	this.shape_2670 = new cjs.Shape();
	this.shape_2670.graphics.f("#807D74").s().p("ABWgbIirAAIAKAoQAnAQAkAAQAhAAAqgQIALgo").cp();
	this.shape_2670.setTransform(5.8,30.2);

	this.shape_2671 = new cjs.Shape();
	this.shape_2671.graphics.f("#68655E").s().p("ABVgjIipABIAHA2QAoAQAjAAQAiAAAqgQIALg3").cp();
	this.shape_2671.setTransform(6,31);

	this.shape_2672 = new cjs.Shape();
	this.shape_2672.graphics.f().s("#7F6A24").ss(2,0,0,4).p("ABMBUIiXAAIAAhgQAAgeAYgVQAXgUAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_2672.setTransform(5.7,20.5);

	this.shape_2673 = new cjs.Shape();
	this.shape_2673.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.459,1],0,-8.4,0,8.6).s().p("ABMBUIiXAAIAAhgQAAgeAYgVQAXgUAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_2673.setTransform(5.7,20.5);

	this.shape_2674 = new cjs.Shape();
	this.shape_2674.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-7.5,0,7.6,0).s().p("ABMBUIiXAAIAAhgQAAgeAYgVQAXgUAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_2674.setTransform(5.7,20.5);

	this.shape_2675 = new cjs.Shape();
	this.shape_2675.graphics.f("#944240").s().p("ABMBUIiXAAIAAhgQAAgeAYgVQAXgUAcAAQAaAAAYAVQAaAXAAAbIAABg").cp();
	this.shape_2675.setTransform(5.7,20.5);

	this.shape_2676 = new cjs.Shape();
	this.shape_2676.graphics.f().s("#A78D3B").ss(1,0,0,4).p("AhQAoQAAgmAagTQAWgSAgAAQAbAAAaAVQAcAWAAAg");
	this.shape_2676.setTransform(5.7,14.3);

	this.shape_2677 = new cjs.Shape();
	this.shape_2677.graphics.rf(["#FDF6DE","rgba(253,246,222,0)"],[0.263,1],0,0,0,0,0,2.1).s().p("AgDAUQgPgDgKgJQgJgIACgHQACgJAMgDQAMgEANADQAQAEAJAIQAKAIgDAHQgCAJgMAEQgMAEgNgEIAAAA").cp();
	this.shape_2677.setTransform(15.9,-105.7);

	this.shape_2678 = new cjs.Shape();
	this.shape_2678.graphics.rf(["#FDF6DE","rgba(253,246,222,0)"],[0.263,1],0,0,0,0,0,2.1).s().p("AgBAUQgPgCgLgHQgKgHABgGQABgJALgFQAMgFANACQAQABAKAHQALAIgBAGQgBAJgLAFQgMAFgOgCIAAAA").cp();
	this.shape_2678.setTransform(6.6,-103.9);

	this.shape_2679 = new cjs.Shape();
	this.shape_2679.graphics.rf(["#FDF6DE","rgba(253,246,222,0)"],[0.263,1],0,0,0,0,0,2.4).s().p("AAdALQgKAJgPADQgOACgMgFQgMgFgBgKQgDgHAKgJQAKgIAPgDQAOgCAMAFQAMAFACAJQACAHgKAJIAAAA").cp();
	this.shape_2679.setTransform(-4.7,-103.3);

	this.shape_2680 = new cjs.Shape();
	this.shape_2680.graphics.rf(["#FCEFB3","rgba(252,239,179,0)"],[0.263,1],0,0,0,0,0,2.8).s().p("AAhABQgFANgNAIQgNAJgMAAQgNgBgHgJQgGgKAFgLQAEgNANgIQANgJAMABQANAAAHAKQAGAJgEALIAAAA").cp();
	this.shape_2680.setTransform(-15.5,-101.7);

	this.shape_2681 = new cjs.Shape();
	this.shape_2681.graphics.rf(["#FCEFB3","rgba(252,239,179,0)"],[0.263,1],0,0,0,0,0,2.7).s().p("AATgSQALALACALQADAOgIAIQgIAIgOgCQgLgCgMgLQgLgLgCgLQgDgNAIgJQAIgIAOACQALACAMALIAAAA").cp();
	this.shape_2681.setTransform(27.1,-101.2);

	this.shape_2682 = new cjs.Shape();
	this.shape_2682.graphics.lf(["#8D8A82","rgba(147,145,137,0.039)","rgba(148,145,137,0)"],[0.612,0.988,1],0,-2.7,0,2.7).s().p("ACfAXIk9AAIAAgtIE9AAIAAAt").cp();
	this.shape_2682.setTransform(6.3,27.6);

	this.shape_2683 = new cjs.Shape();
	this.shape_2683.graphics.f("#EADFB7").s().p("ABGAAQAAAGhGAAQhFAAAAgGQAAgBAVgCQAUgCAcAAQAcAAAVACQAVACAAABIAAAA").cp();
	this.shape_2683.setTransform(6,-39.5);

	this.shape_2684 = new cjs.Shape();
	this.shape_2684.graphics.f("#C1B797").s().p("AAABsQj4AAirhAQing9gEhbQAFBPCuA5QCyA8DpAAQDqAACyg8QCtg4AGhPQgFBbimA8QisBAj4AAIAAAA").cp();
	this.shape_2684.setTransform(5.3,-49.7);

	this.shape_2685 = new cjs.Shape();
	this.shape_2685.graphics.f("#EADFB7").s().p("ABGAAQAAAGhGAAQhFAAAAgGQAAgBAVgCQAUgCAcAAQAcAAAVACQAVACAAABIAAAA").cp();
	this.shape_2685.setTransform(6,-9.5);

	this.shape_2686 = new cjs.Shape();
	this.shape_2686.graphics.f("#C1B797").s().p("AJPhrQgFBbimA8QisBAj4AAQj4AAirhAQing9gEhbQAFBPCuA5QCyA8DpAAQDqAACyg8QCtg4AGhPIAAAA").cp();
	this.shape_2686.setTransform(5.3,-19.7);

	this.shape_2687 = new cjs.Shape();
	this.shape_2687.graphics.rf(["#76746B","rgba(123,120,111,0.694)","rgba(133,130,120,0)"],[0.875,0.941,1],-30.5,-12.6,0,-30.5,-12.6,51.7).s().p("AjOBaQClgSCBg/QB3g4AAgqQghAphlAsQh+A2iZAOIAAAa").cp();
	this.shape_2687.setTransform(43.3,13);

	this.shape_2688 = new cjs.Shape();
	this.shape_2688.graphics.rf(["#76746B","rgba(123,120,111,0.694)","rgba(133,130,120,0)"],[0.875,0.941,1],45.4,-13.1,0,45.4,-13.1,67.2).s().p("AhdAIQCAA7C3AaIAAgbQihgXh+gyQhogqgsgrQAAAvB8A1IAAAA").cp();
	this.shape_2688.setTransform(-31.8,13.1);

	this.shape_2689 = new cjs.Shape();
	this.shape_2689.graphics.f("#807D74").s().p("ACgAyIAAgUIighPIifBPIAAAUICfhPICgBP").cp();
	this.shape_2689.setTransform(6.4,8.1);

	this.shape_2690 = new cjs.Shape();
	this.shape_2690.graphics.lf(["rgba(0,0,0,0.337)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,0.118,0.314],-1.5,-3,1.6,3.2).s().p("ABQAAIifBQIAAhQICfhPIAABP").cp();
	this.shape_2690.setTransform(-1.6,3.1);

	this.shape_2691 = new cjs.Shape();
	this.shape_2691.graphics.lf(["#949494","#D6D1BF"],[0,1],-7.9,0,8,0).s().p("ABQAAIifBQIAAhQICfhPIAABP").cp();
	this.shape_2691.setTransform(-1.6,3.1);

	this.shape_2692 = new cjs.Shape();
	this.shape_2692.graphics.lf(["rgba(0,0,0,0.337)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,0.118,0.314],1.7,-3.1,-1.5,3.1).s().p("AhPAAIAAhPICfBPIAABQIifhQ").cp();
	this.shape_2692.setTransform(14.4,3.1);

	this.shape_2693 = new cjs.Shape();
	this.shape_2693.graphics.lf(["#9C9C9C","#595959"],[0,1],-7.9,0,8,0).s().p("AhPAAIAAhPICfBPIAABQIifhQ").cp();
	this.shape_2693.setTransform(14.4,3.1);

	this.shape_2694 = new cjs.Shape();
	this.shape_2694.graphics.lf(["rgba(0,0,0,0.329)","rgba(0,0,0,0.976)","rgba(0,0,0,0)"],[0,0.004,0.267],4.9,-7.1,-2.7,10.6).s().p("ACgB4Ik/AAIAAifICfhQICgBQIAACf").cp();
	this.shape_2694.setTransform(6.4,15.1);

	this.shape_2695 = new cjs.Shape();
	this.shape_2695.graphics.lf(["rgba(0,0,0,0.557)","rgba(0,0,0,0.773)","rgba(0,0,0,0)"],[0,0.027,0.267],-5.1,-7.4,3.3,11.4).s().p("ACgB4Ik/AAIAAifICfhQICgBQIAACf").cp();
	this.shape_2695.setTransform(6.4,15.1);

	this.shape_2696 = new cjs.Shape();
	this.shape_2696.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,0,0,0,0,14.2).s().p("ACgB4Ik/AAIAAifICfhQICgBQIAACf").cp();
	this.shape_2696.setTransform(6.4,15.1);

	this.shape_2697 = new cjs.Shape();
	this.shape_2697.graphics.rf(["rgba(253,251,235,0)","rgba(253,251,235,0.965)","#FDFBEB"],[0.427,0.992,1],-0.3,22.5,0,-0.3,22.5,74.5).s().p("AIWBpQAABPidA4QicA4jdAAQjbAAidg4Qidg4AAhPQAAgsAig+QAmhHA/g+QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2697.setTransform(5.3,-80.7);

	this.shape_2698 = new cjs.Shape();
	this.shape_2698.graphics.rf(["#C4B8A8","#BFB4A5","#B2A99B","#A39D91"],[0.353,0.573,0.816,1],0.3,-1.3,0,0.3,-1.3,52.6).s().p("AIWBpQAABPidA4QicA4jdAAQjbAAidg4Qidg4AAhPQAAgsAig+QAmhHA/g+QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2698.setTransform(5.3,-80.7);

	this.shape_2699 = new cjs.Shape();
	this.shape_2699.graphics.lf(["rgba(128,125,116,0)","#726D65"],[0,1],0,-23.5,0,23.6).s().p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2699.setTransform(5.2,-66.3);

	this.shape_2700 = new cjs.Shape();
	this.shape_2700.graphics.rf(["#FDF6E2","#F8F1DE","#EAE4D2","#D4CEBE","#B5B0A2","#B2AEA0"],[0.353,0.494,0.651,0.816,0.988,1],-0.2,9.5,0,-0.2,9.5,30.9).s().p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2700.setTransform(5.2,-66.3);

	this.shape_2701 = new cjs.Shape();
	this.shape_2701.graphics.f("#A39F93").s().p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2701.setTransform(5.3,-61.3);

	this.shape_2702 = new cjs.Shape();
	this.shape_2702.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-25.9,0,26.1).s().p("AJTAuQAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAhaQAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAABa").cp();
	this.shape_2702.setTransform(5.2,-57.1);

	this.shape_2703 = new cjs.Shape();
	this.shape_2703.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.2,10.6,0,-0.2,10.6,34.1).s().p("AJTAuQAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAhaQAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAABa").cp();
	this.shape_2703.setTransform(5.2,-57.1);

	this.shape_2704 = new cjs.Shape();
	this.shape_2704.graphics.f("#A39F93").s().p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2704.setTransform(-34.9,-47.2);

	this.shape_2705 = new cjs.Shape();
	this.shape_2705.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2705.setTransform(-32,-33);

	this.shape_2706 = new cjs.Shape();
	this.shape_2706.graphics.rf(["#E0DACB","#DCD6C6","#CEC8B9","#B8B3A4","#B0AB9D"],[0.227,0.439,0.678,0.929,1],0,6.3,0,0,6.3,6.4).s().p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2706.setTransform(-32,-33);

	this.shape_2707 = new cjs.Shape();
	this.shape_2707.graphics.f("#A39F93").s().p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2707.setTransform(53.2,-54);

	this.shape_2708 = new cjs.Shape();
	this.shape_2708.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2708.setTransform(53.2,-40.7);

	this.shape_2709 = new cjs.Shape();
	this.shape_2709.graphics.rf(["#F3ECDB","#EEE7D6","#E0DAC9","#D1CCBB"],[0.227,0.49,0.78,1],0,6.3,0,0,6.3,6.4).s().p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2709.setTransform(53.2,-40.7);

	this.shape_2710 = new cjs.Shape();
	this.shape_2710.graphics.f("#A39F93").s().p("AAAgUQAWAAAQAGQAPAGAAAIQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAIAAAA").cp();
	this.shape_2710.setTransform(-44.2,-59.5);

	this.shape_2711 = new cjs.Shape();
	this.shape_2711.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AAAiaQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAIAAAA").cp();
	this.shape_2711.setTransform(-44.2,-46.2);

	this.shape_2712 = new cjs.Shape();
	this.shape_2712.graphics.rf(["#F3ECDB","#EEE7D6","#E0DAC9","#D1CCBB"],[0.227,0.49,0.78,1],0,6.3,0,0,6.3,6.4).s().p("AAAiaQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAIAAAA").cp();
	this.shape_2712.setTransform(-44.2,-46.2);

	this.shape_2713 = new cjs.Shape();
	this.shape_2713.graphics.f("#A39F93").s().p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2713.setTransform(37,-44);

	this.shape_2714 = new cjs.Shape();
	this.shape_2714.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("ABHCCQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREF").cp();
	this.shape_2714.setTransform(39,-31.7);

	this.shape_2715 = new cjs.Shape();
	this.shape_2715.graphics.rf(["#DBD5C6","#D7D1C1","#C9C4B5","#B3AEA0","#ADA99B"],[0.231,0.451,0.694,0.945,1],0,6.3,0,0,6.3,6.4).s().p("ABHCCQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREF").cp();
	this.shape_2715.setTransform(39,-31.7);

	this.shape_2716 = new cjs.Shape();
	this.shape_2716.graphics.f("#A39F93").s().p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2716.setTransform(12.7,-40.2);

	this.shape_2717 = new cjs.Shape();
	this.shape_2717.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2717.setTransform(18.7,-28);

	this.shape_2718 = new cjs.Shape();
	this.shape_2718.graphics.rf(["#CEC9BA","#CAC5B5","#BCB8A9","#A6A295","#878579","#807E73"],[0.227,0.388,0.573,0.761,0.961,1],0,6.3,0,0,6.3,6.4).s().p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2718.setTransform(18.7,-28);

	this.shape_2719 = new cjs.Shape();
	this.shape_2719.graphics.f("#A39F93").s().p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2719.setTransform(-12.9,-42);

	this.shape_2720 = new cjs.Shape();
	this.shape_2720.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2720.setTransform(-8,-27.7);

	this.shape_2721 = new cjs.Shape();
	this.shape_2721.graphics.rf(["#CEC8BB","#CAC4B6","#BCB7AA","#A6A296","#8F8B80"],[0.227,0.408,0.612,0.827,1],0,6.3,0,0,6.3,6.4).s().p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2721.setTransform(-8,-27.7);

	this.shape_2722 = new cjs.Shape();
	this.shape_2722.graphics.f().s("#A09C90").ss(1,0,0,4).p("ACzAAQAAAag0ATQg1AThKAAQhJAAg1gTQg0gTAAgaQAAgZA0gTQA1gTBJAAQBKAAA1ATQA0ATAAAZIAAAA").cp();
	this.shape_2722.setTransform(5.3,-35.6);

	this.shape_2723 = new cjs.Shape();
	this.shape_2723.graphics.f("#B0AB9E").s().p("AEHAAQAAAnhNAcQhNAbhtAAQhrAAhOgbQhNgcAAgnQAAgmBNgbQBNgcBsAAQBtAABNAcQBNAbAAAmIAAAA").cp();
	this.shape_2723.setTransform(5.2,-35.1);

	this.shape_2724 = new cjs.Shape();
	this.shape_2724.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-10.5,0,10.6).s().p("AEKALQAAAnhPAcQhNAchuAAQhtAAhOgcQhOgcAAgnIAAgUQAAgnBOgcQBOgcBtAAQBtAABOAcQBPAcAAAnIAAAU").cp();
	this.shape_2724.setTransform(5.2,-34.3);

	this.shape_2725 = new cjs.Shape();
	this.shape_2725.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,4.4,0,0,4.4,15.1).s().p("AEKALQAAAnhPAcQhNAchuAAQhtAAhOgcQhOgcAAgnIAAgUQAAgnBOgcQBOgcBtAAQBtAABOAcQBPAcAAAnIAAAU").cp();
	this.shape_2725.setTransform(5.2,-34.3);

	this.shape_2726 = new cjs.Shape();
	this.shape_2726.graphics.f("#99958A").s().p("AEkBoQB4grAAg9QAAg8h4grQh5gsirAAQipAAh5AsQh5ArAAA8QAAA9B5ArQB5AsCpAAQCrAAB5gsIAAAA").cp();
	this.shape_2726.setTransform(5.3,-31.9);

	this.shape_2727 = new cjs.Shape();
	this.shape_2727.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-15.5,0,15.7).s().p("AGggGQAAg+h6grQh6gsisAAQirAAh6AsQh6ArAAA+IAAAMQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgM").cp();
	this.shape_2727.setTransform(5.2,-32.3);

	this.shape_2728 = new cjs.Shape();
	this.shape_2728.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.1,-6.2,0,-0.1,-6.2,23.6).s().p("AGggGQAAg+h6grQh6gsisAAQirAAh6AsQh6ArAAA+IAAAMQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgM").cp();
	this.shape_2728.setTransform(5.2,-32.3);

	this.shape_2729 = new cjs.Shape();
	this.shape_2729.graphics.f("#A39F93").s().p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2729.setTransform(5.3,-31.3);

	this.shape_2730 = new cjs.Shape();
	this.shape_2730.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-37,0,37.1).s().p("AJTiaIAAE2QAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAk2QAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAAAA").cp();
	this.shape_2730.setTransform(5.2,-16.1);

	this.shape_2731 = new cjs.Shape();
	this.shape_2731.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.2,15.1,0,-0.2,15.1,35.1).s().p("AJTiaIAAE2QAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAk2QAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAAAA").cp();
	this.shape_2731.setTransform(5.2,-16.1);

	this.shape_2732 = new cjs.Shape();
	this.shape_2732.graphics.f().s("#443D3F").ss(1,1,1).p("AIWBpQAABPidA4QicA4jdAAQjbAAidg4Qidg4AAhPQAAgsAig+QAmhHA/g+QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2732.setTransform(5.3,-80.7);

	this.shape_2733 = new cjs.Shape();
	this.shape_2733.graphics.f().s("#443D3F").ss(1,1,1).p("AIWBpQAABPidA4QicA4jdAAQjbAAidg4Qidg4AAhPQAAgsAig+QAmhHA/g+QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2733.setTransform(5.3,-80.7);

	this.shape_2734 = new cjs.Shape();
	this.shape_2734.graphics.f().s("#443D3F").ss(1,1,1).p("AIWBpQAABPidA4QicA4jdAAQjbAAidg4Qidg4AAhPQAAgsAig+QAmhHA/g+QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2734.setTransform(5.3,-80.7);

	this.shape_2735 = new cjs.Shape();
	this.shape_2735.graphics.f().s("#443D3F").ss(1,1,1).p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2735.setTransform(5.2,-66.3);

	this.shape_2736 = new cjs.Shape();
	this.shape_2736.graphics.f().s("#443D3F").ss(1,1,1).p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2736.setTransform(5.2,-66.3);

	this.shape_2737 = new cjs.Shape();
	this.shape_2737.graphics.f().s("#443D3F").ss(1,1,1).p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2737.setTransform(5.2,-66.3);

	this.shape_2738 = new cjs.Shape();
	this.shape_2738.graphics.f().s("#443D3F").ss(1,1,1).p("AJIAAQAABXirA/QirA+jyAAQjxAAirg+Qirg/AAhXQAAhWCrg/QCrg+DxAAQDyAACrA+QCrA/AABWIAAAA").cp();
	this.shape_2738.setTransform(5.4,-61.9);

	this.shape_2739 = new cjs.Shape();
	this.shape_2739.graphics.f().s("#443D3F").ss(1,1,1).p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2739.setTransform(5.3,-61.3);

	this.shape_2740 = new cjs.Shape();
	this.shape_2740.graphics.f().s("#443D3F").ss(1,1,1).p("AJTAuQAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAhaQAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAABa").cp();
	this.shape_2740.setTransform(5.2,-57.1);

	this.shape_2741 = new cjs.Shape();
	this.shape_2741.graphics.f().s("#443D3F").ss(1,1,1).p("AJTAuQAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAhaQAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAABa").cp();
	this.shape_2741.setTransform(5.2,-57.1);

	this.shape_2742 = new cjs.Shape();
	this.shape_2742.graphics.f().s("#443D3F").ss(1,1,1).p("AJTAuQAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAhaQAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAABa").cp();
	this.shape_2742.setTransform(5.2,-57.1);

	this.shape_2743 = new cjs.Shape();
	this.shape_2743.graphics.f().s("#443D3F").ss(1,1,1).p("ADdAAQAAAqhBAdQhAAehcAAQhaAAhBgeQhBgdAAgqQAAgpBBgdQBBgeBaAAQBcAABAAeQBBAdAAApIAAAA").cp();
	this.shape_2743.setTransform(5,-35.5);

	this.shape_2744 = new cjs.Shape();
	this.shape_2744.graphics.f().s("#443D3F").ss(1,1,1).p("ADdAAQAAAqhBAdQhAAehcAAQhaAAhBgeQhBgdAAgqQAAgpBBgdQBBgeBaAAQBcAABAAeQBBAdAAApIAAAA").cp();
	this.shape_2744.setTransform(5,-35.5);

	this.shape_2745 = new cjs.Shape();
	this.shape_2745.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2745.setTransform(-34.9,-47.2);

	this.shape_2746 = new cjs.Shape();
	this.shape_2746.graphics.f().s("#443D3F").ss(1,1,1).p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2746.setTransform(-32,-33);

	this.shape_2747 = new cjs.Shape();
	this.shape_2747.graphics.f().s("#443D3F").ss(1,1,1).p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2747.setTransform(-32,-33);

	this.shape_2748 = new cjs.Shape();
	this.shape_2748.graphics.f().s("#443D3F").ss(1,1,1).p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2748.setTransform(-32,-33);

	this.shape_2749 = new cjs.Shape();
	this.shape_2749.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2749.setTransform(53.2,-54);

	this.shape_2750 = new cjs.Shape();
	this.shape_2750.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2750.setTransform(53.2,-40.7);

	this.shape_2751 = new cjs.Shape();
	this.shape_2751.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2751.setTransform(53.2,-40.7);

	this.shape_2752 = new cjs.Shape();
	this.shape_2752.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2752.setTransform(53.2,-40.7);

	this.shape_2753 = new cjs.Shape();
	this.shape_2753.graphics.f().s("#443D3F").ss(1,1,1).p("AAAgUQAWAAAQAGQAPAGAAAIQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAIAAAA").cp();
	this.shape_2753.setTransform(-44.2,-59.5);

	this.shape_2754 = new cjs.Shape();
	this.shape_2754.graphics.f().s("#443D3F").ss(1,1,1).p("AAAiaQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAIAAAA").cp();
	this.shape_2754.setTransform(-44.2,-46.2);

	this.shape_2755 = new cjs.Shape();
	this.shape_2755.graphics.f().s("#443D3F").ss(1,1,1).p("AAAiaQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAIAAAA").cp();
	this.shape_2755.setTransform(-44.2,-46.2);

	this.shape_2756 = new cjs.Shape();
	this.shape_2756.graphics.f().s("#443D3F").ss(1,1,1).p("AAAiaQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAIAAAA").cp();
	this.shape_2756.setTransform(-44.2,-46.2);

	this.shape_2757 = new cjs.Shape();
	this.shape_2757.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2757.setTransform(37,-44);

	this.shape_2758 = new cjs.Shape();
	this.shape_2758.graphics.f().s("#443D3F").ss(1,1,1).p("ABHCCQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREF").cp();
	this.shape_2758.setTransform(39,-31.7);

	this.shape_2759 = new cjs.Shape();
	this.shape_2759.graphics.f().s("#443D3F").ss(1,1,1).p("ABHCCQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREF").cp();
	this.shape_2759.setTransform(39,-31.7);

	this.shape_2760 = new cjs.Shape();
	this.shape_2760.graphics.f().s("#443D3F").ss(1,1,1).p("ABHCCQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREF").cp();
	this.shape_2760.setTransform(39,-31.7);

	this.shape_2761 = new cjs.Shape();
	this.shape_2761.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2761.setTransform(12.7,-40.2);

	this.shape_2762 = new cjs.Shape();
	this.shape_2762.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2762.setTransform(18.7,-28);

	this.shape_2763 = new cjs.Shape();
	this.shape_2763.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2763.setTransform(18.7,-28);

	this.shape_2764 = new cjs.Shape();
	this.shape_2764.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iDIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHQAQgGAVAAQAWAAAQAGQAQAHAAAKIAAAA").cp();
	this.shape_2764.setTransform(18.7,-28);

	this.shape_2765 = new cjs.Shape();
	this.shape_2765.graphics.f().s("#443D3F").ss(1,1,1).p("ABrgZQAFAUgcAUQgcAVgsALQgrAMgjgHQgjgGgFgUQgFgUAcgTQAcgWAtgLQAqgLAjAGQAjAGAFAUIAAAA").cp();
	this.shape_2765.setTransform(39.4,-17.8);

	this.shape_2766 = new cjs.Shape();
	this.shape_2766.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAJgPAGQgQAGgWAAQgVAAgQgGQgPgGAAgJQAAgIAPgGQAQgGAVAAQAWAAAQAGQAPAGAAAIIAAAA").cp();
	this.shape_2766.setTransform(-12.9,-42);

	this.shape_2767 = new cjs.Shape();
	this.shape_2767.graphics.f().s("#443D3F").ss(1,1,1).p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2767.setTransform(-8,-27.7);

	this.shape_2768 = new cjs.Shape();
	this.shape_2768.graphics.f().s("#443D3F").ss(1,1,1).p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2768.setTransform(-8,-27.7);

	this.shape_2769 = new cjs.Shape();
	this.shape_2769.graphics.f().s("#443D3F").ss(1,1,1).p("AgliUQAQgGAVAAQAWAAAQAGQAQAHAAAKIAREFQAAAKgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgKIARkFQAAgKAQgHIAAAA").cp();
	this.shape_2769.setTransform(-8,-27.7);

	this.shape_2770 = new cjs.Shape();
	this.shape_2770.graphics.f().s("#443D3F").ss(1,1,1).p("AE+htQCDAuAAA/QAABBiDAtQiEAui6AAQi5AAiEguQiDgtAAhBQAAg/CDguQCFguC4AAQC6AACEAuIAAAA").cp();
	this.shape_2770.setTransform(4.4,-30.8);

	this.shape_2771 = new cjs.Shape();
	this.shape_2771.graphics.f().s("#443D3F").ss(1,1,1).p("ACzAAQAAAag0ATQg1AThKAAQhJAAg1gTQg0gTAAgaQAAgZA0gTQA1gTBJAAQBKAAA1ATQA0ATAAAZIAAAA").cp();
	this.shape_2771.setTransform(5.3,-35.6);

	this.shape_2772 = new cjs.Shape();
	this.shape_2772.graphics.f().s("#443D3F").ss(1,1,1).p("AEHAAQAAAnhNAcQhNAbhtAAQhrAAhOgbQhNgcAAgnQAAgmBNgbQBNgcBsAAQBtAABNAcQBNAbAAAmIAAAA").cp();
	this.shape_2772.setTransform(5.2,-35.1);

	this.shape_2773 = new cjs.Shape();
	this.shape_2773.graphics.f().s("#443D3F").ss(1,1,1).p("ABzAAQAAAUgiAOQgiAPgvAAQguAAgigPQgigOAAgUQAAgTAigOQAigPAuAAQAvAAAiAPQAiAOAAATIAAAA").cp();
	this.shape_2773.setTransform(51.7,-27.1);

	this.shape_2774 = new cjs.Shape();
	this.shape_2774.graphics.f().s("#443D3F").ss(1,1,1).p("ABzAAQAAAUgiAOQgiAPgvAAQguAAgigPQgigOAAgUQAAgTAigOQAigPAuAAQAvAAAiAPQAiAOAAATIAAAA").cp();
	this.shape_2774.setTransform(51.7,-27.1);

	this.shape_2775 = new cjs.Shape();
	this.shape_2775.graphics.f().s("#443D3F").ss(1,1,1).p("ABgAfQgIAYgiAIQghAIgmgNQgogNgXgbQgWgYAHgYQAJgYAigIQAhgIAmANQAoANAWAaQAXAYgIAZIAAAA").cp();
	this.shape_2775.setTransform(-33.5,-19.6);

	this.shape_2776 = new cjs.Shape();
	this.shape_2776.graphics.f().s("#443D3F").ss(1,1,1).p("ADaAAQAABAhAAuQhAAuhaAAQhZAAhAguQhAguAAhAQAAhABAguQBAguBZAAQBaAABAAuQBAAuAABAIAAAA").cp();
	this.shape_2776.setTransform(6.5,8.9);

	this.shape_2777 = new cjs.Shape();
	this.shape_2777.graphics.f().s("#443D3F").ss(1,1,1).p("ACNAAQAAAUgpAOQgqAPg6AAQg5AAgpgPQgqgOAAgUQAAgTAqgOQApgPA5AAQA6AAAqAPQApAOAAATIAAAA").cp();
	this.shape_2777.setTransform(18.6,-14.8);

	this.shape_2778 = new cjs.Shape();
	this.shape_2778.graphics.f().s("#443D3F").ss(1,1,1).p("ACNAAQAAAUgpAOQgqAPg6AAQg5AAgpgPQgqgOAAgUQAAgTAqgOQApgPA5AAQA6AAAqAPQApAOAAATIAAAA").cp();
	this.shape_2778.setTransform(-8.3,-14.3);

	this.shape_2779 = new cjs.Shape();
	this.shape_2779.graphics.f().s("#443D3F").ss(1,1,1).p("AEKALQAAAnhOAcQhOAchuAAQhtAAhNgcQhPgcAAgnIAAgUQAAgnBPgcQBNgcBtAAQBuAABOAcQBOAcAAAnIAAAU").cp();
	this.shape_2779.setTransform(5.2,-34.3);

	this.shape_2780 = new cjs.Shape();
	this.shape_2780.graphics.f().s("#443D3F").ss(1,1,1).p("AEKALQAAAnhOAcQhOAchuAAQhtAAhNgcQhPgcAAgnIAAgUQAAgnBPgcQBNgcBtAAQBuAABOAcQBOAcAAAnIAAAU").cp();
	this.shape_2780.setTransform(5.2,-34.3);

	this.shape_2781 = new cjs.Shape();
	this.shape_2781.graphics.f().s("#443D3F").ss(1,1,1).p("AEKALQAAAnhOAcQhOAchuAAQhtAAhNgcQhPgcAAgnIAAgUQAAgnBPgcQBNgcBtAAQBuAABOAcQBOAcAAAnIAAAU").cp();
	this.shape_2781.setTransform(5.2,-34.3);

	this.shape_2782 = new cjs.Shape();
	this.shape_2782.graphics.f().s("#443D3F").ss(1,1,1).p("AE1AAQAAg2hagmQhbgniAAAQh/AAhbAnQhaAmAAA2QAAA3BaAnQBbAnB/AAQCAAABbgnQBagnAAg3IAAAA").cp();
	this.shape_2782.setTransform(5.3,-33.9);

	this.shape_2783 = new cjs.Shape();
	this.shape_2783.graphics.f().s("#443D3F").ss(1,1,1).p("AE1AAQAAg2hagmQhbgniAAAQh/AAhbAnQhaAmAAA2QAAA3BaAnQBbAnB/AAQCAAABbgnQBagnAAg3IAAAA").cp();
	this.shape_2783.setTransform(5.3,-33.9);

	this.shape_2784 = new cjs.Shape();
	this.shape_2784.graphics.f().s("#443D3F").ss(1,1,1).p("AEkBoQB4grAAg9QAAg8h4grQh5gsirAAQipAAh5AsQh5ArAAA8QAAA9B5ArQB5AsCpAAQCrAAB5gsIAAAA").cp();
	this.shape_2784.setTransform(5.3,-31.9);

	this.shape_2785 = new cjs.Shape();
	this.shape_2785.graphics.f().s("#443D3F").ss(1,1,1).p("AGggGQAAg+h6grQh6gsisAAQirAAh6AsQh6ArAAA+IAAAMQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgM").cp();
	this.shape_2785.setTransform(5.2,-32.3);

	this.shape_2786 = new cjs.Shape();
	this.shape_2786.graphics.f().s("#443D3F").ss(1,1,1).p("AGggGQAAg+h6grQh6gsisAAQirAAh6AsQh6ArAAA+IAAAMQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgM").cp();
	this.shape_2786.setTransform(5.2,-32.3);

	this.shape_2787 = new cjs.Shape();
	this.shape_2787.graphics.f().s("#443D3F").ss(1,1,1).p("AGggGQAAg+h6grQh6gsisAAQirAAh6AsQh6ArAAA+IAAAMQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgM").cp();
	this.shape_2787.setTransform(5.2,-32.3);

	this.shape_2788 = new cjs.Shape();
	this.shape_2788.graphics.f().s("#443D3F").ss(1,1,1).p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2788.setTransform(5.3,-31.3);

	this.shape_2789 = new cjs.Shape();
	this.shape_2789.graphics.f().s("#443D3F").ss(1,1,1).p("AJTiaIAAE2QAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAk2QAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAAAA").cp();
	this.shape_2789.setTransform(5.2,-16.1);

	this.shape_2790 = new cjs.Shape();
	this.shape_2790.graphics.f().s("#443D3F").ss(1,1,1).p("AJTiaIAAE2QAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAk2QAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAAAA").cp();
	this.shape_2790.setTransform(5.2,-16.1);

	this.shape_2791 = new cjs.Shape();
	this.shape_2791.graphics.f().s("#443D3F").ss(1,1,1).p("AJTiaIAAE2QAABZivA+QitA/j3AAQj2AAitg/Qivg+AAhZIAAk2QAAhZCvg+QCuhAD1AAQD2AACuBAQCvA+AABZIAAAA").cp();
	this.shape_2791.setTransform(5.2,-16.1);

	this.shape_2792 = new cjs.Shape();
	this.shape_2792.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgDgDAAgDQAAgCADgDQADgCACAAQADAAADACQACADAAACIAAAA").cp();
	this.shape_2792.setTransform(67.2,-26.3);

	this.shape_2793 = new cjs.Shape();
	this.shape_2793.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQADADAAACIAAAA").cp();
	this.shape_2793.setTransform(65.2,-24.8);

	this.shape_2794 = new cjs.Shape();
	this.shape_2794.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("AAahtIANAEQAEABAHAHQACABAFABQAFAAACABQADACAGAHQAEADAFAIQADAEAHAFIAIAKQADAEADAJQAFAHACADQAFAIACAEQABAJABAEQAEAHABAEQAAACgBAFQAAAFAAACQABALAAACQADAJgBAEQgBAFgEAHQgBACgCAEQgEAEgBABQgDAJgDACQgBACgFABQgFABgCABQgFAIgEACIgMAFQgIACgEABQgIAEgEABQgIAEgFABQgJgBgEABQgJgBgEAAQgIACgFAAIgLABIgZgEQgIgDgEgBQgHgEgEgBIgMgFQgIgDgDgCQgIgEgDgDQgDgCgIgFQgCgEgDgIQgCgDgFgIIgEgMQgBgEgEgHIgEgNIAAgXIAGgaQABgDAGgHQACgFAGgFQACgEAHgGIAJgJQABgBACgFQACgDACgCIAKgIQACgCAFAAQAEAAACgCQACgBADgCQADgDACgCQAEgCAJgBIAMgCQAFgCAIABQACAAAFgCQAEgCABAAQAEAAAIACQAFAAAJABIAAAA").cp();
	this.shape_2794.setTransform(65.1,-16.4);

	this.shape_2795 = new cjs.Shape();
	this.shape_2795.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("AAahtIANAEQAEABAHAHQACABAFABQAFAAACABQADACAGAHQAEADAFAIQADAEAHAFIAIAKQADAEADAJQAFAHACADQAFAIACAEQABAJABAEQAEAHABAEQAAACgBAFQAAAFAAACQABALAAACQADAJgBAEQgBAFgEAHQgBACgCAEQgEAEgBABQgDAJgDACQgBACgFABQgFABgCABQgFAIgEACIgMAFQgIACgEABQgIAEgEABQgIAEgFABQgJgBgEABQgJgBgEAAQgIACgFAAIgLABIgZgEQgIgDgEgBQgHgEgEgBIgMgFQgIgDgDgCQgIgEgDgDQgDgCgIgFQgCgEgDgIQgCgDgFgIIgEgMQgBgEgEgHIgEgNIAAgXIAGgaQABgDAGgHQACgFAGgFQACgEAHgGIAJgJQABgBACgFQACgDACgCIAKgIQACgCAFAAQAEAAACgCQACgBADgCQADgDACgCQAEgCAJgBIAMgCQAFgCAIABQACAAAFgCQAEgCABAAQAEAAAIACQAFAAAJABIAAAA").cp();
	this.shape_2795.setTransform(65.1,-16.4);

	this.shape_2796 = new cjs.Shape();
	this.shape_2796.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgHAHAAQAIAAAAAHIAAAA").cp();
	this.shape_2796.setTransform(-51.7,-28.3);

	this.shape_2797 = new cjs.Shape();
	this.shape_2797.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAJAAQAAAIgJAAQgHAAAAgIQAAgCACgDQADgCACAAQAEAAACACQADADAAACIAAAA").cp();
	this.shape_2797.setTransform(-53.6,-26.8);

	this.shape_2798 = new cjs.Shape();
	this.shape_2798.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("AgxhlIAMgEQAIgBAFgBQAIAAAFAAQACAAAEgDQAEgCABAAQAIACAFAAIANABQACAAALAFQAHAFAEACQACABAFABQAFAAACABQACACADADQADAEACABQAFAIADACQAHAFADAEIAIALQAEAIACAEIAHALQAFAHACAFQABAJABAEQAEAGABAFQABACgBAEQgBAFAAACIABANQADAJgBAEQAAABgEAMQgGAHgCADQgDAJgEADQgBACgFABQgFABgBABQgCABgDAEQgCAEgCABQgEACgJACQgBABgLACQgEACgIAEQgEABgJADIgNAAQgEAAgJgBQgEAAgJACIgKABIgNgBIgNgDQgEAAgIgEIgWgKQgEgCgIgDQgEgCgHgEIgKgIQgDgDgDgJQgGgIgBgCQgCgEgCgIQgBgEgEgIQgBgEgCgIIAAgYIACgNQACgKABgCQACgEAFgHIAIgKQACgEAHgFIAJgJQABgCACgEQACgEACgCIAKgIQAEgCAJgCQACAAADgDQAEgDACgBIAAAA").cp();
	this.shape_2798.setTransform(-53.7,-18.4);

	this.shape_2799 = new cjs.Shape();
	this.shape_2799.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("AgxhlIAMgEQAIgBAFgBQAIAAAFAAQACAAAEgDQAEgCABAAQAIACAFAAIANABQACAAALAFQAHAFAEACQACABAFABQAFAAACABQACACADADQADAEACABQAFAIADACQAHAFADAEIAIALQAEAIACAEIAHALQAFAHACAFQABAJABAEQAEAGABAFQABACgBAEQgBAFAAACIABANQADAJgBAEQAAABgEAMQgGAHgCADQgDAJgEADQgBACgFABQgFABgBABQgCABgDAEQgCAEgCABQgEACgJACQgBABgLACQgEACgIAEQgEABgJADIgNAAQgEAAgJgBQgEAAgJACIgKABIgNgBIgNgDQgEAAgIgEIgWgKQgEgCgIgDQgEgCgHgEIgKgIQgDgDgDgJQgGgIgBgCQgCgEgCgIQgBgEgEgIQgBgEgCgIIAAgYIACgNQACgKABgCQACgEAFgHIAIgKQACgEAHgFIAJgJQABgCACgEQACgEACgCIAKgIQAEgCAJgCQACAAADgDQAEgDACgBIAAAA").cp();
	this.shape_2799.setTransform(-53.7,-18.4);

	this.addChild(this.shape_2799,this.shape_2798,this.shape_2797,this.shape_2796,this.shape_2795,this.shape_2794,this.shape_2793,this.shape_2792,this.shape_2791,this.shape_2790,this.shape_2789,this.shape_2788,this.shape_2787,this.shape_2786,this.shape_2785,this.shape_2784,this.shape_2783,this.shape_2782,this.shape_2781,this.shape_2780,this.shape_2779,this.shape_2778,this.shape_2777,this.shape_2776,this.shape_2775,this.shape_2774,this.shape_2773,this.shape_2772,this.shape_2771,this.shape_2770,this.shape_2769,this.shape_2768,this.shape_2767,this.shape_2766,this.shape_2765,this.shape_2764,this.shape_2763,this.shape_2762,this.shape_2761,this.shape_2760,this.shape_2759,this.shape_2758,this.shape_2757,this.shape_2756,this.shape_2755,this.shape_2754,this.shape_2753,this.shape_2752,this.shape_2751,this.shape_2750,this.shape_2749,this.shape_2748,this.shape_2747,this.shape_2746,this.shape_2745,this.shape_2744,this.shape_2743,this.shape_2742,this.shape_2741,this.shape_2740,this.shape_2739,this.shape_2738,this.shape_2737,this.shape_2736,this.shape_2735,this.shape_2734,this.shape_2733,this.shape_2732,this.shape_2731,this.shape_2730,this.shape_2729,this.shape_2728,this.shape_2727,this.shape_2726,this.shape_2725,this.shape_2724,this.shape_2723,this.shape_2722,this.shape_2721,this.shape_2720,this.shape_2719,this.shape_2718,this.shape_2717,this.shape_2716,this.shape_2715,this.shape_2714,this.shape_2713,this.shape_2712,this.shape_2711,this.shape_2710,this.shape_2709,this.shape_2708,this.shape_2707,this.shape_2706,this.shape_2705,this.shape_2704,this.shape_2703,this.shape_2702,this.shape_2701,this.shape_2700,this.shape_2699,this.shape_2698,this.shape_2697,this.shape_2696,this.shape_2695,this.shape_2694,this.shape_2693,this.shape_2692,this.shape_2691,this.shape_2690,this.shape_2689,this.shape_2688,this.shape_2687,this.shape_2686,this.shape_2685,this.shape_2684,this.shape_2683,this.shape_2682,this.shape_2681,this.shape_2680,this.shape_2679,this.shape_2678,this.shape_2677,this.shape_2676,this.shape_2675,this.shape_2674,this.shape_2673,this.shape_2672,this.shape_2671,this.shape_2670,this.shape_2669,this.shape_2668,this.shape_2667,this.shape_2666,this.shape_2665,this.shape_2664,this.shape_2663,this.shape_2662,this.shape_2661,this.shape_2660,this.shape_2659,this.shape_2658,this.shape_2657,this.shape_2656,this.shape_2655,this.shape_2654,this.shape_2653,this.shape_2652,this.shape_2651,this.shape_2650,this.shape_2649,this.shape_2648,this.shape_2647,this.shape_2646,this.shape_2645);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.1,-124.8,166.3,171.9);


(lib.Church = function() {
	this.initialize();

	// Layer 1
	this.shape_2800 = new cjs.Shape();
	this.shape_2800.graphics.rf(["#3A3A37","#363633","#2D2C29"],[0.353,0.678,1],0,0.4,0,0,0.4,1.4).s().p("AANAAQAAAFgEAEQgEAEgFAAQgEAAgEgEQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEIAAAA").cp();
	this.shape_2800.setTransform(3.9,18.3);

	this.shape_2801 = new cjs.Shape();
	this.shape_2801.graphics.rf(["#3A3A37","#363633","#2D2C29"],[0.353,0.678,1],0,0.4,0,0,0.4,1.4).s().p("AANAAQAAAFgEAEQgEAEgFAAQgEAAgEgEQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEIAAAA").cp();
	this.shape_2801.setTransform(-1.3,18.3);

	this.shape_2802 = new cjs.Shape();
	this.shape_2802.graphics.f().s("#7F6A24").ss(2,0,0,4).p("ABbBlIi1AAIAAh0QAAgkAdgZQAbgYAiAAQAfAAAdAaQAfAaAAAhIAAB0").cp();
	this.shape_2802.setTransform(1.6,16.8);

	this.shape_2803 = new cjs.Shape();
	this.shape_2803.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.459,1],0,-10.1,0,10.3).s().p("ABbBlIi1AAIAAh0QAAgkAdgZQAbgYAiAAQAfAAAdAaQAfAaAAAhIAAB0").cp();
	this.shape_2803.setTransform(1.6,16.8);

	this.shape_2804 = new cjs.Shape();
	this.shape_2804.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-9,0,9.2,0).s().p("ABbBlIi1AAIAAh0QAAgkAdgZQAbgYAiAAQAfAAAdAaQAfAaAAAhIAAB0").cp();
	this.shape_2804.setTransform(1.6,16.8);

	this.shape_2805 = new cjs.Shape();
	this.shape_2805.graphics.f("#C6C9D4").s().p("ABbBlIi1AAIAAh0QAAgkAdgZQAbgYAiAAQAfAAAdAaQAfAaAAAhIAAB0").cp();
	this.shape_2805.setTransform(1.6,16.8);

	this.shape_2806 = new cjs.Shape();
	this.shape_2806.graphics.f().s("#A78D3B").ss(1,0,0,4).p("AhgAwQAAguAggXQAagVAmAAQAhAAAeAZQAiAaAAAm");
	this.shape_2806.setTransform(1.6,9.5);

	this.shape_2807 = new cjs.Shape();
	this.shape_2807.graphics.f("#807D74").s().p("AC/A7IAAgXIi/heIi+BeIAAAXIC+hdIC/Bd").cp();
	this.shape_2807.setTransform(2.4,2);

	this.shape_2808 = new cjs.Shape();
	this.shape_2808.graphics.lf(["rgba(0,0,0,0.337)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,0.118,0.314],-1.8,-3.7,1.9,3.8).s().p("ABfAAIi9BgIAAhgIC9hfIAABf").cp();
	this.shape_2808.setTransform(-7.1,-3.9);

	this.shape_2809 = new cjs.Shape();
	this.shape_2809.graphics.lf(["#949494","#D6D1BF"],[0,1],-9.4,0,9.6,0).s().p("ABfAAIi9BgIAAhgIC9hfIAABf").cp();
	this.shape_2809.setTransform(-7.1,-3.9);

	this.shape_2810 = new cjs.Shape();
	this.shape_2810.graphics.lf(["rgba(0,0,0,0.337)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,0.118,0.314],2,-3.6,-1.8,3.8).s().p("AheAAIAAhfIC9BfIAABgIi9hg").cp();
	this.shape_2810.setTransform(12,-3.9);

	this.shape_2811 = new cjs.Shape();
	this.shape_2811.graphics.lf(["#9C9C9C","#595959"],[0,1],-9.4,0,9.6,0).s().p("AheAAIAAhfIC9BfIAABgIi9hg").cp();
	this.shape_2811.setTransform(12,-3.9);

	this.shape_2812 = new cjs.Shape();
	this.shape_2812.graphics.lf(["rgba(0,0,0,0.337)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,0.118,0.314],5.8,-8.6,-3.3,12.6).s().p("AC/CPIl9AAIAAi9IC+hgIC/BgIAAC9").cp();
	this.shape_2812.setTransform(2.4,10.4);

	this.shape_2813 = new cjs.Shape();
	this.shape_2813.graphics.lf(["rgba(0,0,0,0.337)","rgba(0,0,0,0.098)","rgba(0,0,0,0)"],[0,0.118,0.314],-6.1,-9,4,13.6).s().p("AC/CPIl9AAIAAi9IC+hgIC/BgIAAC9").cp();
	this.shape_2813.setTransform(2.4,10.4);

	this.shape_2814 = new cjs.Shape();
	this.shape_2814.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,0,0,0,0,16.9).s().p("AC/CPIl9AAIAAi9IC+hgIC/BgIAAC9").cp();
	this.shape_2814.setTransform(2.4,10.4);

	this.shape_2815 = new cjs.Shape();
	this.shape_2815.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgDgDAAgDQAAgCADgDQADgCACAAQADAAADACQACADAAACIAAAA").cp();
	this.shape_2815.setTransform(-29,4.6);

	this.shape_2816 = new cjs.Shape();
	this.shape_2816.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgHAHAAQAJAAAAAHIAAAA").cp();
	this.shape_2816.setTransform(-31,6.1);

	this.shape_2817 = new cjs.Shape();
	this.shape_2817.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("ABxgfQAFAHACAFQABAJABAEQAEAGABAFQgCAJABAEQABAJAAAEQADAJgBAEQgBAEgDAJQgGAHgCADQgEAJgDADQgBACgFABQgFABgCABQgBABgDAEQgCAEgDABIgYAIQgEABgIAEQgEABgJADQgEABgJgBQgEABgJgCQgEAAgJADQgCAAgIAAIgagDIgMgFQgEgBgHgEIgMgFQgDgCgIgDQgKgGgBAAQgDgDgHgFQgDgDgDgJIgHgKQgCgEgCgIQgBgEgEgHQgBgEgCgJQgBgEAAgJIAAgLQABgIACgFQABgDACgJIAHgLQAFgHADgDIASgSQAEgJADgCQAHgGADgDQACgBAFAAQAEgBACgBQAGgHAEgBIAagGQAIAAAEAAQACAAAFgDQAEgCABAAQAIACAFAAQAJAAAEABIANAEQACABAEAEQAEADABABQAKAAAEACQAGAHAEADQACACACADQACAEACABQAHAFADAEIAIAKQAEAJACAEQAFAHACAEIAAAA").cp();
	this.shape_2817.setTransform(-31.1,14.5);

	this.shape_2818 = new cjs.Shape();
	this.shape_2818.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("ABxgfQAFAHACAFQABAJABAEQAEAGABAFQgCAJABAEQABAJAAAEQADAJgBAEQgBAEgDAJQgGAHgCADQgEAJgDADQgBACgFABQgFABgCABQgBABgDAEQgCAEgDABIgYAIQgEABgIAEQgEABgJADQgEABgJgBQgEABgJgCQgEAAgJADQgCAAgIAAIgagDIgMgFQgEgBgHgEIgMgFQgDgCgIgDQgKgGgBAAQgDgDgHgFQgDgDgDgJIgHgKQgCgEgCgIQgBgEgEgHQgBgEgCgJQgBgEAAgJIAAgLQABgIACgFQABgDACgJIAHgLQAFgHADgDIASgSQAEgJADgCQAHgGADgDQACgBAFAAQAEgBACgBQAGgHAEgBIAagGQAIAAAEAAQACAAAFgDQAEgCABAAQAIACAFAAQAJAAAEABIANAEQACABAEAEQAEADABABQAKAAAEACQAGAHAEADQACACACADQACAEACABQAHAFADAEIAIAKQAEAJACAEQAFAHACAEIAAAA").cp();
	this.shape_2818.setTransform(-31.1,14.5);

	this.shape_2819 = new cjs.Shape();
	this.shape_2819.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgHAHAAQAIAAAAAHIAAAA").cp();
	this.shape_2819.setTransform(38.6,4.4);

	this.shape_2820 = new cjs.Shape();
	this.shape_2820.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AgFgFQADgCACAAQAEAAACACQADADAAACQAAADgDADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgCACgDIAAAA").cp();
	this.shape_2820.setTransform(36.6,5.9);

	this.shape_2821 = new cjs.Shape();
	this.shape_2821.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("Ag2hhQADgEACAAIAMgEQAEgBAJgBIANAAQACAAAEgDQAEgCABAAQAEAAAJACIANABQAFABAIADQAEACAHAGQAEACAKABQAEADAGAGQADAEAFAHQADADAHAGIAIAKQADAEADAJIAHAKQAFAIACAEQABAKABADQAEAHABAFQABABgBAFQgBAFAAACIABANQADAJgBAEQAAABgEALQgBADgDADQgEAFAAAAQgDAJgDADQgCACgFABQgFABgBAAQgGAIgDACQgCACgLADQgBAAgLADQgIAFgEABQgIADgEABIgOAAQgIgBgFAAQgIACgFAAIgKABIgNgBQgIgCgFgBQgIgDgEgBIgWgKQgJgDgDgCQgIgEgDgDIgKgHQgCgBgBgFQgCgEgBgCQgGgIgBgDQgCgDgCgIQgBgEgEgIQgBgEgCgIIAAgYIAFgaQACgDAFgHQACgEAGgGQADgEAGgFIAJgKQABgBACgEQACgFACgBIAKgIQACgBAFAAQAEgBACgCQACgBAEgCIAAAA").cp();
	this.shape_2821.setTransform(36.5,14.4);

	this.shape_2822 = new cjs.Shape();
	this.shape_2822.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("Ag2hhQADgEACAAIAMgEQAEgBAJgBIANAAQACAAAEgDQAEgCABAAQAEAAAJACIANABQAFABAIADQAEACAHAGQAEACAKABQAEADAGAGQADAEAFAHQADADAHAGIAIAKQADAEADAJIAHAKQAFAIACAEQABAKABADQAEAHABAFQABABgBAFQgBAFAAACIABANQADAJgBAEQAAABgEALQgBADgDADQgEAFAAAAQgDAJgDADQgCACgFABQgFABgBAAQgGAIgDACQgCACgLADQgBAAgLADQgIAFgEABQgIADgEABIgOAAQgIgBgFAAQgIACgFAAIgKABIgNgBQgIgCgFgBQgIgDgEgBIgWgKQgJgDgDgCQgIgEgDgDIgKgHQgCgBgBgFQgCgEgBgCQgGgIgBgDQgCgDgCgIQgBgEgEgIQgBgEgCgIIAAgYIAFgaQACgDAFgHQACgEAGgGQADgEAGgFIAJgKQABgBACgEQACgFACgBIAKgIQACgBAFAAQAEgBACgCQACgBAEgCIAAAA").cp();
	this.shape_2822.setTransform(36.5,14.4);

	this.shape_2823 = new cjs.Shape();
	this.shape_2823.graphics.f("#4E4B46").s().p("AAWgeQAAA+AAAMQgGAOgOANQgMAMgIABQgDhSAAgKQAChIAQgDQAUgEAFA5IAAAA").cp();
	this.shape_2823.setTransform(56.7,-10.3);

	this.shape_2824 = new cjs.Shape();
	this.shape_2824.graphics.f("#4E4B46").s().p("AAhAtQgGAJgaANQgUALgKACQgBgPgChIQAChEAWgDQAegGAIA4QACAMABA9IAAAA").cp();
	this.shape_2824.setTransform(47.3,-2.9);

	this.shape_2825 = new cjs.Shape();
	this.shape_2825.graphics.f("#4E4B46").s().p("AgDhLQAegGALA4QAEAYABAyQgXASg9AJQgChBACgSQAGg+AggGIAAAA").cp();
	this.shape_2825.setTransform(33.5,2);

	this.shape_2826 = new cjs.Shape();
	this.shape_2826.graphics.f("#4E4B46").s().p("AgUgeQgBA+AAAMQAGAOAOANQAMAMAIABQADhSAAgKQgBhIgRgDQgUgEgEA5IAAAA").cp();
	this.shape_2826.setTransform(-54,-11.1);

	this.shape_2827 = new cjs.Shape();
	this.shape_2827.graphics.f("#4E4B46").s().p("AggAtQAGAJAaANQAUALAKACQABgPAChIQgChDgWgEQgegFgIA3QgCAMgBA9IAAAA").cp();
	this.shape_2827.setTransform(-44.6,-3.8);

	this.shape_2828 = new cjs.Shape();
	this.shape_2828.graphics.f("#4E4B46").s().p("AgqAyQAPALAfAIQAhAHAFABQAChBgCgSQgGg/gggGQgegGgLA4QgEAYgBAzIAAAA").cp();
	this.shape_2828.setTransform(-30.8,1.1);

	this.shape_2829 = new cjs.Shape();
	this.shape_2829.graphics.rf(["#FDF6DE","rgba(253,246,222,0)"],[0.263,1],0,0,0,0,0,2.2).s().p("AAAAVQgPgBgLgHQgLgHABgHQAAgJAMgFQALgGAOABQAPABALAGQALAHgBAHQAAAJgMAGQgLAGgOgBIAAAA").cp();
	this.shape_2829.setTransform(0.1,-116.2);

	this.shape_2830 = new cjs.Shape();
	this.shape_2830.graphics.rf(["#FDF6DE","rgba(253,246,222,0)"],[0.263,1],0,0,0,0,0,2.1).s().p("AgBAUQgPgBgLgHQgKgIABgGQABgJALgFQAMgFANACQAQABAKAHQALAIgBAGQgBAJgLAFQgMAFgOgCIAAAA").cp();
	this.shape_2830.setTransform(-9.5,-121.3);

	this.shape_2831 = new cjs.Shape();
	this.shape_2831.graphics.rf(["#FDF6DE","rgba(253,246,222,0)"],[0.263,1],0,0,0,0,0,2.4).s().p("AAEAXQgOACgMgFQgMgEgCgKQgBgIAJgJQAKgJAPgCQAOgDAMAFQAMAFACAKQABAIgJAIQgKAJgPADIAAAA").cp();
	this.shape_2831.setTransform(11.6,-119.5);

	this.shape_2832 = new cjs.Shape();
	this.shape_2832.graphics.rf(["#FCEFB3","rgba(252,239,179,0)"],[0.263,1],0,0,0,0,0,2.8).s().p("AAPAWQgNAJgMgBQgNAAgHgKQgGgJAFgLQAEgNANgJQANgIAMAAQANABAHAJQAGAKgEAKQgFANgNAJIAAAA").cp();
	this.shape_2832.setTransform(-19.1,-114.5);

	this.shape_2833 = new cjs.Shape();
	this.shape_2833.graphics.rf(["#FCEFB3","rgba(252,239,179,0)"],[0.263,1],0,0,0,0,0,2.7).s().p("AATgSQALALACALQADAOgIAIQgIAIgOgCQgLgCgMgKQgLgLgCgMQgDgNAIgJQAIgIAOACQAMACALALIAAAA").cp();
	this.shape_2833.setTransform(22.6,-114.5);

	this.shape_2834 = new cjs.Shape();
	this.shape_2834.graphics.lf(["#8D8A82","rgba(147,145,137,0.039)","rgba(148,145,137,0)"],[0.612,0.988,1],0,-2.7,0,2.7).s().p("ACfAXIk9AAIAAgtIE9AAIAAAt").cp();
	this.shape_2834.setTransform(2.4,23.2);

	this.shape_2835 = new cjs.Shape();
	this.shape_2835.graphics.f("#EADFB7").s().p("ABGAAQAAAGhGAAQhFAAAAgGQAAgFBFAAQBGAAAAAFIAAAA").cp();
	this.shape_2835.setTransform(2,-43.9);

	this.shape_2836 = new cjs.Shape();
	this.shape_2836.graphics.f("#C1B797").s().p("AAABtQj4AAirhBQing9gEhbQAFBPCuA5QCyA8DpAAQDqAACyg8QCtg5AGhOQgFBaimA9QisBBj4AAIAAAA").cp();
	this.shape_2836.setTransform(1.3,-54);

	this.shape_2837 = new cjs.Shape();
	this.shape_2837.graphics.f("#EADFB7").s().p("ABGAAQAAAGhGAAQhFAAAAgGQAAgFBFAAQBGAAAAAFIAAAA").cp();
	this.shape_2837.setTransform(2,-13.9);

	this.shape_2838 = new cjs.Shape();
	this.shape_2838.graphics.f("#C1B797").s().p("AJPhrQgFBaimA9QisBBj4AAQj4AAirhBQing9gEhbQAFBPCuA5QCyA8DpAAQDqAACyg8QCtg5AGhOIAAAA").cp();
	this.shape_2838.setTransform(1.3,-24);

	this.shape_2839 = new cjs.Shape();
	this.shape_2839.graphics.rf(["#76746B","rgba(123,120,111,0.694)","rgba(133,130,120,0)"],[0.875,0.941,1],-30.5,-12.6,0,-30.5,-12.6,51.7).s().p("AjOBaQClgSCBhAQB3g3AAgqQghAphlAsQh+A1iZAPIAAAa").cp();
	this.shape_2839.setTransform(39.3,8.7);

	this.shape_2840 = new cjs.Shape();
	this.shape_2840.graphics.rf(["#76746B","rgba(123,120,111,0.694)","rgba(133,130,120,0)"],[0.875,0.941,1],45.4,-13.2,0,45.4,-13.2,67.2).s().p("AhdAIQCAA7C3AaIAAgcQihgXh+gxQhogrgsgqQAAAvB8A1IAAAA").cp();
	this.shape_2840.setTransform(-35.8,8.8);

	this.shape_2841 = new cjs.Shape();
	this.shape_2841.graphics.rf(["#D6D9C3","#D4D4D4","#CFCFCF","#BCBCBC","#B1B1B1","#AEAEAE","#BCB9A2"],[0.275,0.333,0.365,0.537,0.718,0.91,1],0,-0.7,0,0,-0.7,3.7).s().p("AAlAAQAAAQgLAKQgKALgQAAQgOAAgLgLQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOIAAAA").cp();
	this.shape_2841.setTransform(1.2,-181.9);

	this.shape_2842 = new cjs.Shape();
	this.shape_2842.graphics.lf(["#6F675A","#878B6E"],[0,0.416],0,-6.5,0,5.7).s("#A59985").ss(0.5,0,0,4).p("AgpA2QAAAIApAAQAqABAAgJIgBhNQAAgMgJgLQgMgPgTAAQgSAAgNAMQgLALAAARIAABL").cp();
	this.shape_2842.setTransform(1,-138.1);

	this.shape_2843 = new cjs.Shape();
	this.shape_2843.graphics.rf(["#E5D6C2","#E1D3BF","#D3C8B6","#BDB6A8","#BCB5A8"],[0.353,0.545,0.765,0.996,1],0,-14.3,0,0,-14.3,8).s().p("AAkAMQAeB7AAADQAAAKgUAHQgTAHgbAAQgaAAgTgHQgUgHAAgKQAAgGAch4QAfiBAGgsQAFAuAfB/IAAAA").cp();
	this.shape_2843.setTransform(1.2,-166.9);

	this.shape_2844 = new cjs.Shape();
	this.shape_2844.graphics.f("#9B988C").s().p("ABeAAQAAANgbAKQgdAKgmAAQgmAAgcgKQgbgKAAgNQAAgNAbgKQAcgKAmAAQAmAAAdAKQAbAKAAANIAAAA").cp();
	this.shape_2844.setTransform(1.2,-152);

	this.shape_2845 = new cjs.Shape();
	this.shape_2845.graphics.lf(["rgba(128,125,116,0)","#B0AC9F"],[0,1],0,-14.1,0,14.2).s().p("ABfBrQAAAOgcAKQgcAKgnAAQgmAAgcgKQgcgKAAgOIAAjVQAAgOAcgKQAcgKAmAAQAnAAAcAKQAcAKAAAOIAADV").cp();
	this.shape_2845.setTransform(1.2,-141.3);

	this.shape_2846 = new cjs.Shape();
	this.shape_2846.graphics.rf(["#FDF6E3","#F8F1DF","#EAE4D2","#D4CEBE","#C4BFB0"],[0.353,0.518,0.702,0.894,1],0,5.8,0,0,5.8,7).s().p("ABfBrQAAAOgcAKQgcAKgnAAQgmAAgcgKQgcgKAAgOIAAjVQAAgOAcgKQAcgKAmAAQAnAAAcAKQAcAKAAAOIAADV").cp();
	this.shape_2846.setTransform(1.2,-141.3);

	this.shape_2847 = new cjs.Shape();
	this.shape_2847.graphics.f("#A3A093").s().p("AB6AAQAAASgkAMQgjAOgzAAQgxAAgkgOQgkgMAAgSQAAgQAkgNQAkgOAxAAQAyAAAkAOQAkANAAAQIAAAA").cp();
	this.shape_2847.setTransform(1.3,-128.7);

	this.shape_2848 = new cjs.Shape();
	this.shape_2848.graphics.lf(["rgba(128,125,116,0)","#B0AC9F"],[0,1],0,-5.3,0,5.4).s().p("AB8AJQAAATglAMQgkAOgzAAQgyAAgkgOQglgMAAgTIAAgRQAAgTAlgMQAkgOAyAAQAzAAAkAOQAlAMAAATIAAAR").cp();
	this.shape_2848.setTransform(1.3,-127.8);

	this.shape_2849 = new cjs.Shape();
	this.shape_2849.graphics.rf(["#FDF6E3","#F8F1DF","#EAE4D2","#D4CEBE","#C4BFB0"],[0.353,0.518,0.702,0.894,1],0,2.2,0,0,2.2,7.1).s().p("AB8AJQAAATglAMQgkAOgzAAQgyAAgkgOQglgMAAgTIAAgRQAAgTAlgMQAkgOAyAAQAzAAAkAOQAlAMAAATIAAAR").cp();
	this.shape_2849.setTransform(1.3,-127.8);

	this.shape_2850 = new cjs.Shape();
	this.shape_2850.graphics.rf(["rgba(253,251,235,0)","rgba(253,251,235,0.965)","#FDFBEB"],[0.427,0.992,1],-0.1,11.4,0,-0.1,11.4,37.7).s().p("AEOA1QAAAohPAcQhQAdhvAAQhuAAhQgdQhPgcAAgoQAAg1BEhDQBUhSB1AAQB3AABTBSQBEBCAAA2IAAAA").cp();
	this.shape_2850.setTransform(1.3,-115.1);

	this.shape_2851 = new cjs.Shape();
	this.shape_2851.graphics.rf(["#D6C8B6","#D2C5B3","#C4BBAC","#BCB5A8"],[0.353,0.604,0.882,1],0.1,-0.6,0,0.1,-0.6,26.6).s().p("AEOA1QAAAohPAcQhQAdhvAAQhuAAhQgdQhPgcAAgoQAAg1BEhDQBUhSB1AAQB3AABTBSQBEBCAAA2IAAAA").cp();
	this.shape_2851.setTransform(1.3,-115.1);

	this.shape_2852 = new cjs.Shape();
	this.shape_2852.graphics.f("#C1BDAE").s().p("AEoAAQAAAshXAfQhXAfh6AAQh5AAhXgfQhXgfAAgsQAAgqBXggQBXgfB5AAQB6AABXAfQBXAgAAAqIAAAA").cp();
	this.shape_2852.setTransform(1.3,-107.9);

	this.shape_2853 = new cjs.Shape();
	this.shape_2853.graphics.lf(["rgba(128,125,116,0)","#B0AC9F"],[0,1],0,-12.9,0,13.1).s().p("AErgWIAAAtQAAAshYAgQhXAfh8AAQh7AAhXgfQhYggAAgsIAAgtQAAgsBYggQBXgfB7AAQB8AABXAfQBYAgAAAsIAAAA").cp();
	this.shape_2853.setTransform(1.3,-105.8);

	this.shape_2854 = new cjs.Shape();
	this.shape_2854.graphics.rf(["#FDF6E3","#F8F1DF","#EAE4D2","#D4CEBE","#C4BFB0"],[0.353,0.518,0.702,0.894,1],-0.1,5.3,0,-0.1,5.3,17.1).s().p("AErgWIAAAtQAAAshYAgQhXAfh8AAQh7AAhXgfQhYggAAgsIAAgtQAAgsBYggQBXgfB7AAQB8AABXAfQBYAgAAAsIAAAA").cp();
	this.shape_2854.setTransform(1.3,-105.8);

	this.shape_2855 = new cjs.Shape();
	this.shape_2855.graphics.rf(["rgba(253,251,235,0)","rgba(253,251,235,0.965)","#FDFBEB"],[0.427,0.992,1],-0.3,22.5,0,-0.3,22.5,74.5).s().p("AIWBpQAABPidA4QicA4jdAAQjcAAicg4Qidg4AAhPQAAgsAig+QAmhIA/g9QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2855.setTransform(1.3,-85.1);

	this.shape_2856 = new cjs.Shape();
	this.shape_2856.graphics.rf(["#C4B8A8","#BFB4A5","#B2A99B","#A39D91"],[0.353,0.573,0.816,1],0.3,-1.4,0,0.3,-1.4,52.6).s().p("AIWBpQAABPidA4QicA4jdAAQjcAAicg4Qidg4AAhPQAAgsAig+QAmhIA/g9QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2856.setTransform(1.3,-85.1);

	this.shape_2857 = new cjs.Shape();
	this.shape_2857.graphics.lf(["rgba(128,125,116,0)","#726D65"],[0,1],0,-23.5,0,23.6).s().p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2857.setTransform(1.3,-70.7);

	this.shape_2858 = new cjs.Shape();
	this.shape_2858.graphics.rf(["#FDF6E2","#F8F1DE","#EAE4D2","#D4CEBE","#B5B0A2","#B2AEA0"],[0.353,0.494,0.651,0.816,0.988,1],-0.2,9.6,0,-0.2,9.6,30.9).s().p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2858.setTransform(1.3,-70.7);

	this.shape_2859 = new cjs.Shape();
	this.shape_2859.graphics.f("#A39F93").s().p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2859.setTransform(1.4,-65.7);

	this.shape_2860 = new cjs.Shape();
	this.shape_2860.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-25.9,0,26.1).s().p("AJTAuQAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAhaQAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAABa").cp();
	this.shape_2860.setTransform(1.3,-61.5);

	this.shape_2861 = new cjs.Shape();
	this.shape_2861.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.2,10.6,0,-0.2,10.6,34.1).s().p("AJTAuQAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAhaQAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAABa").cp();
	this.shape_2861.setTransform(1.3,-61.5);

	this.shape_2862 = new cjs.Shape();
	this.shape_2862.graphics.f("#A39F93").s().p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2862.setTransform(-38.9,-51.6);

	this.shape_2863 = new cjs.Shape();
	this.shape_2863.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2863.setTransform(-35.9,-37.3);

	this.shape_2864 = new cjs.Shape();
	this.shape_2864.graphics.rf(["#E0DACB","#DCD6C6","#CEC8B9","#B8B3A4","#B0AB9D"],[0.227,0.439,0.678,0.929,1],0,6.3,0,0,6.3,6.4).s().p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2864.setTransform(-35.9,-37.3);

	this.shape_2865 = new cjs.Shape();
	this.shape_2865.graphics.f("#A39F93").s().p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2865.setTransform(49.3,-58.4);

	this.shape_2866 = new cjs.Shape();
	this.shape_2866.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2866.setTransform(49.3,-45.1);

	this.shape_2867 = new cjs.Shape();
	this.shape_2867.graphics.rf(["#F3ECDB","#EEE7D6","#E0DAC9","#D1CCBB"],[0.227,0.49,0.78,1],0,6.3,0,0,6.3,6.4).s().p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2867.setTransform(49.3,-45.1);

	this.shape_2868 = new cjs.Shape();
	this.shape_2868.graphics.f("#A39F93").s().p("AAAgVQAWAAAQAHQAPAGAAAIQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAIAAAA").cp();
	this.shape_2868.setTransform(-48.1,-63.9);

	this.shape_2869 = new cjs.Shape();
	this.shape_2869.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AAAiaQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAIAAAA").cp();
	this.shape_2869.setTransform(-48.2,-50.6);

	this.shape_2870 = new cjs.Shape();
	this.shape_2870.graphics.rf(["#F3ECDB","#EEE7D6","#E0DAC9","#D1CCBB"],[0.227,0.49,0.78,1],0,6.3,0,0,6.3,6.4).s().p("AAAiaQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAIAAAA").cp();
	this.shape_2870.setTransform(-48.2,-50.6);

	this.shape_2871 = new cjs.Shape();
	this.shape_2871.graphics.f("#A39F93").s().p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2871.setTransform(33,-48.4);

	this.shape_2872 = new cjs.Shape();
	this.shape_2872.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("ABHCBQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREF").cp();
	this.shape_2872.setTransform(35,-36.1);

	this.shape_2873 = new cjs.Shape();
	this.shape_2873.graphics.rf(["#DBD5C6","#D7D1C1","#C9C4B5","#B3AEA0","#ADA99B"],[0.231,0.451,0.694,0.945,1],0,6.3,0,0,6.3,6.4).s().p("ABHCBQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREF").cp();
	this.shape_2873.setTransform(35,-36.1);

	this.shape_2874 = new cjs.Shape();
	this.shape_2874.graphics.f("#A39F93").s().p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2874.setTransform(8.8,-44.6);

	this.shape_2875 = new cjs.Shape();
	this.shape_2875.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2875.setTransform(14.8,-32.3);

	this.shape_2876 = new cjs.Shape();
	this.shape_2876.graphics.rf(["#CEC9BA","#CAC5B5","#BCB8A9","#A6A295","#878579","#807E73"],[0.227,0.388,0.573,0.761,0.961,1],0,6.3,0,0,6.3,6.4).s().p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2876.setTransform(14.8,-32.3);

	this.shape_2877 = new cjs.Shape();
	this.shape_2877.graphics.f("#A39F93").s().p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2877.setTransform(-16.9,-46.4);

	this.shape_2878 = new cjs.Shape();
	this.shape_2878.graphics.lf(["#000000","rgba(128,125,116,0.298)","rgba(132,128,119,0.384)","rgba(143,139,129,0.647)","#9E998F"],[0.192,0.506,0.686,0.859,1],0,-15.5,0,15.6).s().p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2878.setTransform(-11.9,-32.1);

	this.shape_2879 = new cjs.Shape();
	this.shape_2879.graphics.rf(["#CEC8BB","#CAC4B6","#BCB7AA","#A6A296","#8F8B80"],[0.227,0.408,0.612,0.827,1],0,6.3,0,0,6.3,6.4).s().p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2879.setTransform(-11.9,-32.1);

	this.shape_2880 = new cjs.Shape();
	this.shape_2880.graphics.f().s("#A09C90").ss(1,0,0,4).p("ACzAAQAAAag0ATQg1AThKAAQhJAAg1gTQg0gTAAgaQAAgZA0gTQA1gTBJAAQBKAAA1ATQA0ATAAAZIAAAA").cp();
	this.shape_2880.setTransform(1.3,-40);

	this.shape_2881 = new cjs.Shape();
	this.shape_2881.graphics.f("#B0AB9E").s().p("AEHAAQAAAnhNAcQhNAbhtAAQhrAAhOgbQhNgcAAgnQAAglBNgcQBOgcBrAAQBtAABNAcQBNAcAAAlIAAAA").cp();
	this.shape_2881.setTransform(1.3,-39.5);

	this.shape_2882 = new cjs.Shape();
	this.shape_2882.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-10.5,0,10.6).s().p("AEKAKQAAAohPAcQhOAchtAAQhtAAhOgcQhOgcAAgoIAAgTQAAgnBOgcQBOgcBtAAQBuAABNAcQBPAcAAAnIAAAT").cp();
	this.shape_2882.setTransform(1.3,-38.6);

	this.shape_2883 = new cjs.Shape();
	this.shape_2883.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],0,4.3,0,0,4.3,15.1).s().p("AEKAKQAAAohPAcQhOAchtAAQhtAAhOgcQhOgcAAgoIAAgTQAAgnBOgcQBOgcBtAAQBuAABNAcQBPAcAAAnIAAAT").cp();
	this.shape_2883.setTransform(1.3,-38.6);

	this.shape_2884 = new cjs.Shape();
	this.shape_2884.graphics.f("#99958A").s().p("AEkBpQB4gsAAg9QAAg8h4grQh5grirAAQiqAAh4ArQh5ArAAA8QAAA9B5AsQB4AqCqAAQCrAAB5gqIAAAA").cp();
	this.shape_2884.setTransform(1.3,-36.3);

	this.shape_2885 = new cjs.Shape();
	this.shape_2885.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-15.5,0,15.7).s().p("AGggFQAAg+h6gsQh6gsisAAQirAAh6AsQh6AsAAA+IAAALQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgL").cp();
	this.shape_2885.setTransform(1.3,-36.7);

	this.shape_2886 = new cjs.Shape();
	this.shape_2886.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.1,-6.2,0,-0.1,-6.2,23.6).s().p("AGggFQAAg+h6gsQh6gsisAAQirAAh6AsQh6AsAAA+IAAALQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgL").cp();
	this.shape_2886.setTransform(1.3,-36.7);

	this.shape_2887 = new cjs.Shape();
	this.shape_2887.graphics.f("#A39F93").s().p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2887.setTransform(1.4,-35.7);

	this.shape_2888 = new cjs.Shape();
	this.shape_2888.graphics.lf(["rgba(128,125,116,0)","#737069"],[0,1],0,-37,0,37.1).s().p("AJTiaIAAE2QAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAk2QAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAAAA").cp();
	this.shape_2888.setTransform(1.3,-20.5);

	this.shape_2889 = new cjs.Shape();
	this.shape_2889.graphics.rf(["#A5A195","#A19D91","#939085","#8F8B80"],[0.353,0.62,0.918,1],-0.2,15,0,-0.2,15,35.1).s().p("AJTiaIAAE2QAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAk2QAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAAAA").cp();
	this.shape_2889.setTransform(1.3,-20.5);

	this.shape_2890 = new cjs.Shape();
	this.shape_2890.graphics.f().s("#443D3F").ss(1,1,1).p("AAlAAQAAAQgLAKQgKALgQAAQgOAAgLgLQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOIAAAA").cp();
	this.shape_2890.setTransform(1.2,-181.9);

	this.shape_2891 = new cjs.Shape();
	this.shape_2891.graphics.f().s("#443D3F").ss(1,1,1).p("AgpA2QAAAIApAAQAqABAAgJIgBhNQAAgMgJgLQgMgPgTAAQgSAAgNAMQgLALAAARIAABL").cp();
	this.shape_2891.setTransform(1,-138.1);

	this.shape_2892 = new cjs.Shape();
	this.shape_2892.graphics.f().s("#443D3F").ss(1,1,1).p("AAkAMQAeB7AAADQAAAKgUAHQgTAHgbAAQgaAAgTgHQgUgHAAgKQAAgGAch4QAfiBAGgsQAFAuAfB/IAAAA").cp();
	this.shape_2892.setTransform(1.2,-166.9);

	this.shape_2893 = new cjs.Shape();
	this.shape_2893.graphics.f().s("#443D3F").ss(1,1,1).p("ABeAAQAAANgbAKQgdAKgmAAQgmAAgcgKQgbgKAAgNQAAgNAbgKQAcgKAmAAQAmAAAdAKQAbAKAAANIAAAA").cp();
	this.shape_2893.setTransform(1.2,-152);

	this.shape_2894 = new cjs.Shape();
	this.shape_2894.graphics.f().s("#443D3F").ss(1,1,1).p("ABfBrQAAAOgcAKQgcAKgnAAQgmAAgcgKQgcgKAAgOIAAjVQAAgOAcgKQAcgKAmAAQAnAAAcAKQAcAKAAAOIAADV").cp();
	this.shape_2894.setTransform(1.2,-141.3);

	this.shape_2895 = new cjs.Shape();
	this.shape_2895.graphics.f().s("#443D3F").ss(1,1,1).p("ABfBrQAAAOgcAKQgcAKgnAAQgmAAgcgKQgcgKAAgOIAAjVQAAgOAcgKQAcgKAmAAQAnAAAcAKQAcAKAAAOIAADV").cp();
	this.shape_2895.setTransform(1.2,-141.3);

	this.shape_2896 = new cjs.Shape();
	this.shape_2896.graphics.f().s("#443D3F").ss(1,1,1).p("ABfBrQAAAOgcAKQgcAKgnAAQgmAAgcgKQgcgKAAgOIAAjVQAAgOAcgKQAcgKAmAAQAnAAAcAKQAcAKAAAOIAADV").cp();
	this.shape_2896.setTransform(1.2,-141.3);

	this.shape_2897 = new cjs.Shape();
	this.shape_2897.graphics.f().s("#443D3F").ss(1,1,1).p("AB6AAQAAASgkAMQgjAOgzAAQgxAAgkgOQgkgMAAgSQAAgQAkgNQAkgOAxAAQAyAAAkAOQAkANAAAQIAAAA").cp();
	this.shape_2897.setTransform(1.3,-128.7);

	this.shape_2898 = new cjs.Shape();
	this.shape_2898.graphics.f().s("#443D3F").ss(1,1,1).p("AB8AJQAAATglAMQgkAOgzAAQgyAAgkgOQglgMAAgTIAAgRQAAgTAlgMQAkgOAyAAQAzAAAkAOQAlAMAAATIAAAR").cp();
	this.shape_2898.setTransform(1.3,-127.8);

	this.shape_2899 = new cjs.Shape();
	this.shape_2899.graphics.f().s("#443D3F").ss(1,1,1).p("AB8AJQAAATglAMQgkAOgzAAQgyAAgkgOQglgMAAgTIAAgRQAAgTAlgMQAkgOAyAAQAzAAAkAOQAlAMAAATIAAAR").cp();
	this.shape_2899.setTransform(1.3,-127.8);

	this.shape_2900 = new cjs.Shape();
	this.shape_2900.graphics.f().s("#443D3F").ss(1,1,1).p("AB8AJQAAATglAMQgkAOgzAAQgyAAgkgOQglgMAAgTIAAgRQAAgTAlgMQAkgOAyAAQAzAAAkAOQAlAMAAATIAAAR").cp();
	this.shape_2900.setTransform(1.3,-127.8);

	this.shape_2901 = new cjs.Shape();
	this.shape_2901.graphics.f().s("#443D3F").ss(1,1,1).p("AEOA1QAAAohPAcQhQAdhvAAQhuAAhQgdQhPgcAAgoQAAg1BEhDQBUhSB1AAQB3AABTBSQBEBCAAA2IAAAA").cp();
	this.shape_2901.setTransform(1.3,-115.1);

	this.shape_2902 = new cjs.Shape();
	this.shape_2902.graphics.f().s("#443D3F").ss(1,1,1).p("AEOA1QAAAohPAcQhQAdhvAAQhuAAhQgdQhPgcAAgoQAAg1BEhDQBUhSB1AAQB3AABTBSQBEBCAAA2IAAAA").cp();
	this.shape_2902.setTransform(1.3,-115.1);

	this.shape_2903 = new cjs.Shape();
	this.shape_2903.graphics.f().s("#443D3F").ss(1,1,1).p("AEOA1QAAAohPAcQhQAdhvAAQhuAAhQgdQhPgcAAgoQAAg1BEhDQBUhSB1AAQB3AABTBSQBEBCAAA2IAAAA").cp();
	this.shape_2903.setTransform(1.3,-115.1);

	this.shape_2904 = new cjs.Shape();
	this.shape_2904.graphics.f().s("#443D3F").ss(1,1,1).p("AElAAQAAAshWAfQhWAfh5AAQh4AAhWgfQhWgfAAgsQAAgrBWgfQBWgfB4AAQB5AABWAfQBWAfAAArIAAAA").cp();
	this.shape_2904.setTransform(1.3,-108.2);

	this.shape_2905 = new cjs.Shape();
	this.shape_2905.graphics.f().s("#443D3F").ss(1,1,1).p("AElAAQAAAshWAfQhWAfh5AAQh4AAhWgfQhWgfAAgsQAAgrBWgfQBWgfB4AAQB5AABWAfQBWAfAAArIAAAA").cp();
	this.shape_2905.setTransform(1.3,-108.2);

	this.shape_2906 = new cjs.Shape();
	this.shape_2906.graphics.f().s("#443D3F").ss(1,1,1).p("AEoAAQAAAshXAfQhXAfh6AAQh5AAhXgfQhXgfAAgsQAAgqBXggQBXgfB5AAQB6AABXAfQBXAgAAAqIAAAA").cp();
	this.shape_2906.setTransform(1.3,-107.9);

	this.shape_2907 = new cjs.Shape();
	this.shape_2907.graphics.f().s("#443D3F").ss(1,1,1).p("AErgWIAAAtQAAAshYAgQhXAfh8AAQh7AAhXgfQhYggAAgsIAAgtQAAgsBYggQBXgfB7AAQB8AABXAfQBYAgAAAsIAAAA").cp();
	this.shape_2907.setTransform(1.3,-105.8);

	this.shape_2908 = new cjs.Shape();
	this.shape_2908.graphics.f().s("#443D3F").ss(1,1,1).p("AErgWIAAAtQAAAshYAgQhXAfh8AAQh7AAhXgfQhYggAAgsIAAgtQAAgsBYggQBXgfB7AAQB8AABXAfQBYAgAAAsIAAAA").cp();
	this.shape_2908.setTransform(1.3,-105.8);

	this.shape_2909 = new cjs.Shape();
	this.shape_2909.graphics.f().s("#443D3F").ss(1,1,1).p("AErgWIAAAtQAAAshYAgQhXAfh8AAQh7AAhXgfQhYggAAgsIAAgtQAAgsBYggQBXgfB7AAQB8AABXAfQBYAgAAAsIAAAA").cp();
	this.shape_2909.setTransform(1.3,-105.8);

	this.shape_2910 = new cjs.Shape();
	this.shape_2910.graphics.f().s("#443D3F").ss(1,1,1).p("AIWBpQAABPidA4QicA4jdAAQjcAAicg4Qidg4AAhPQAAgsAig+QAmhIA/g9QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2910.setTransform(1.3,-85.1);

	this.shape_2911 = new cjs.Shape();
	this.shape_2911.graphics.f().s("#443D3F").ss(1,1,1).p("AIWBpQAABPidA4QicA4jdAAQjcAAicg4Qidg4AAhPQAAgsAig+QAmhIA/g9QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2911.setTransform(1.3,-85.1);

	this.shape_2912 = new cjs.Shape();
	this.shape_2912.graphics.f().s("#443D3F").ss(1,1,1).p("AIWBpQAABPidA4QicA4jdAAQjcAAicg4Qidg4AAhPQAAgsAig+QAmhIA/g9QClihDpAAQDsAACkChQA/A9AlBIQAiA+AAAsIAAAA").cp();
	this.shape_2912.setTransform(1.3,-85.1);

	this.shape_2913 = new cjs.Shape();
	this.shape_2913.graphics.f().s("#443D3F").ss(1,1,1).p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2913.setTransform(1.3,-70.7);

	this.shape_2914 = new cjs.Shape();
	this.shape_2914.graphics.f().s("#443D3F").ss(1,1,1).p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2914.setTransform(1.3,-70.7);

	this.shape_2915 = new cjs.Shape();
	this.shape_2915.graphics.f().s("#443D3F").ss(1,1,1).p("AIbApQAABQieA5QieA5jfAAQjeAAieg5Qieg5AAhQIAAhRQAAhQCeg5QCeg5DeAAQDfAACeA5QCeA5AABQIAABR").cp();
	this.shape_2915.setTransform(1.3,-70.7);

	this.shape_2916 = new cjs.Shape();
	this.shape_2916.graphics.f().s("#443D3F").ss(1,1,1).p("AJIAAQAABXirA/QirA+jyAAQjxAAirg+Qirg/AAhXQAAhWCrg/QCrg+DxAAQDyAACrA+QCrA/AABWIAAAA").cp();
	this.shape_2916.setTransform(1.4,-66.3);

	this.shape_2917 = new cjs.Shape();
	this.shape_2917.graphics.f().s("#443D3F").ss(1,1,1).p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2917.setTransform(1.4,-65.7);

	this.shape_2918 = new cjs.Shape();
	this.shape_2918.graphics.f().s("#443D3F").ss(1,1,1).p("AJTAuQAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAhaQAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAABa").cp();
	this.shape_2918.setTransform(1.3,-61.5);

	this.shape_2919 = new cjs.Shape();
	this.shape_2919.graphics.f().s("#443D3F").ss(1,1,1).p("AJTAuQAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAhaQAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAABa").cp();
	this.shape_2919.setTransform(1.3,-61.5);

	this.shape_2920 = new cjs.Shape();
	this.shape_2920.graphics.f().s("#443D3F").ss(1,1,1).p("AJTAuQAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAhaQAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAABa").cp();
	this.shape_2920.setTransform(1.3,-61.5);

	this.shape_2921 = new cjs.Shape();
	this.shape_2921.graphics.f().s("#443D3F").ss(1,1,1).p("ADdAAQAAAqhBAeQhAAdhcAAQhaAAhBgdQhBgeAAgqQAAgpBBgdQBBgeBaAAQBcAABAAeQBBAdAAApIAAAA").cp();
	this.shape_2921.setTransform(1.1,-39.9);

	this.shape_2922 = new cjs.Shape();
	this.shape_2922.graphics.f().s("#443D3F").ss(1,1,1).p("ADdAAQAAAqhBAeQhAAdhcAAQhaAAhBgdQhBgeAAgqQAAgpBBgdQBBgeBaAAQBcAABAAeQBBAdAAApIAAAA").cp();
	this.shape_2922.setTransform(1.1,-39.9);

	this.shape_2923 = new cjs.Shape();
	this.shape_2923.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2923.setTransform(-38.9,-51.6);

	this.shape_2924 = new cjs.Shape();
	this.shape_2924.graphics.f().s("#443D3F").ss(1,1,1).p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2924.setTransform(-35.9,-37.3);

	this.shape_2925 = new cjs.Shape();
	this.shape_2925.graphics.f().s("#443D3F").ss(1,1,1).p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2925.setTransform(-35.9,-37.3);

	this.shape_2926 = new cjs.Shape();
	this.shape_2926.graphics.f().s("#443D3F").ss(1,1,1).p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2926.setTransform(-35.9,-37.3);

	this.shape_2927 = new cjs.Shape();
	this.shape_2927.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2927.setTransform(49.3,-58.4);

	this.shape_2928 = new cjs.Shape();
	this.shape_2928.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2928.setTransform(49.3,-45.1);

	this.shape_2929 = new cjs.Shape();
	this.shape_2929.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2929.setTransform(49.3,-45.1);

	this.shape_2930 = new cjs.Shape();
	this.shape_2930.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2930.setTransform(49.3,-45.1);

	this.shape_2931 = new cjs.Shape();
	this.shape_2931.graphics.f().s("#443D3F").ss(1,1,1).p("AAAgVQAWAAAQAHQAPAGAAAIQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAIAAAA").cp();
	this.shape_2931.setTransform(-48.1,-63.9);

	this.shape_2932 = new cjs.Shape();
	this.shape_2932.graphics.f().s("#443D3F").ss(1,1,1).p("AAAiaQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAIAAAA").cp();
	this.shape_2932.setTransform(-48.2,-50.6);

	this.shape_2933 = new cjs.Shape();
	this.shape_2933.graphics.f().s("#443D3F").ss(1,1,1).p("AAAiaQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAIAAAA").cp();
	this.shape_2933.setTransform(-48.2,-50.6);

	this.shape_2934 = new cjs.Shape();
	this.shape_2934.graphics.f().s("#443D3F").ss(1,1,1).p("AAAiaQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAIAAAA").cp();
	this.shape_2934.setTransform(-48.2,-50.6);

	this.shape_2935 = new cjs.Shape();
	this.shape_2935.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2935.setTransform(33,-48.4);

	this.shape_2936 = new cjs.Shape();
	this.shape_2936.graphics.f().s("#443D3F").ss(1,1,1).p("ABHCBQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREF").cp();
	this.shape_2936.setTransform(35,-36.1);

	this.shape_2937 = new cjs.Shape();
	this.shape_2937.graphics.f().s("#443D3F").ss(1,1,1).p("ABHCBQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREF").cp();
	this.shape_2937.setTransform(35,-36.1);

	this.shape_2938 = new cjs.Shape();
	this.shape_2938.graphics.f().s("#443D3F").ss(1,1,1).p("ABHCBQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREF").cp();
	this.shape_2938.setTransform(35,-36.1);

	this.shape_2939 = new cjs.Shape();
	this.shape_2939.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2939.setTransform(8.8,-44.6);

	this.shape_2940 = new cjs.Shape();
	this.shape_2940.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2940.setTransform(14.8,-32.3);

	this.shape_2941 = new cjs.Shape();
	this.shape_2941.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2941.setTransform(14.8,-32.3);

	this.shape_2942 = new cjs.Shape();
	this.shape_2942.graphics.f().s("#443D3F").ss(1,1,1).p("AA2iEIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGQAQgHAVAAQAWAAAQAHQAQAGAAAJIAAAA").cp();
	this.shape_2942.setTransform(14.8,-32.3);

	this.shape_2943 = new cjs.Shape();
	this.shape_2943.graphics.f().s("#443D3F").ss(1,1,1).p("ABrgZQAFAUgcATQgcAWgsALQgrALgjgGQgjgGgFgUQgFgUAcgUQAcgVAtgLQAqgLAjAGQAjAGAFAUIAAAA").cp();
	this.shape_2943.setTransform(35.5,-22.1);

	this.shape_2944 = new cjs.Shape();
	this.shape_2944.graphics.f().s("#443D3F").ss(1,1,1).p("AA1AAQAAAIgPAHQgQAHgWAAQgVAAgQgHQgPgHAAgIQAAgIAPgGQAQgHAVAAQAWAAAQAHQAPAGAAAIIAAAA").cp();
	this.shape_2944.setTransform(-16.9,-46.4);

	this.shape_2945 = new cjs.Shape();
	this.shape_2945.graphics.f().s("#443D3F").ss(1,1,1).p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2945.setTransform(-11.9,-32.1);

	this.shape_2946 = new cjs.Shape();
	this.shape_2946.graphics.f().s("#443D3F").ss(1,1,1).p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2946.setTransform(-11.9,-32.1);

	this.shape_2947 = new cjs.Shape();
	this.shape_2947.graphics.f().s("#443D3F").ss(1,1,1).p("AgliTQAQgHAVAAQAWAAAQAHQAQAGAAAJIAREFQAAALgVAHQgVAIgdAAQgcAAgVgIQgVgHAAgLIARkFQAAgJAQgGIAAAA").cp();
	this.shape_2947.setTransform(-11.9,-32.1);

	this.shape_2948 = new cjs.Shape();
	this.shape_2948.graphics.f().s("#443D3F").ss(1,1,1).p("AE+htQCDAtAABAQAABAiDAuQiEAui6AAQi4AAiFguQiDguAAhAQAAhACDgtQCEguC5AAQC6AACEAuIAAAA").cp();
	this.shape_2948.setTransform(0.4,-35.2);

	this.shape_2949 = new cjs.Shape();
	this.shape_2949.graphics.f().s("#443D3F").ss(1,1,1).p("ACzAAQAAAag0ATQg1AThKAAQhJAAg1gTQg0gTAAgaQAAgZA0gTQA1gTBJAAQBKAAA1ATQA0ATAAAZIAAAA").cp();
	this.shape_2949.setTransform(1.3,-40);

	this.shape_2950 = new cjs.Shape();
	this.shape_2950.graphics.f().s("#443D3F").ss(1,1,1).p("AEHAAQAAAnhNAcQhNAbhtAAQhrAAhOgbQhNgcAAgnQAAglBNgcQBOgcBrAAQBtAABNAcQBNAcAAAlIAAAA").cp();
	this.shape_2950.setTransform(1.3,-39.5);

	this.shape_2951 = new cjs.Shape();
	this.shape_2951.graphics.f().s("#443D3F").ss(1,1,1).p("ABzAAQAAAUgiAOQgiAPgvAAQguAAgigPQgigOAAgUQAAgTAigOQAigPAuAAQAvAAAiAPQAiAOAAATIAAAA").cp();
	this.shape_2951.setTransform(47.8,-31.4);

	this.shape_2952 = new cjs.Shape();
	this.shape_2952.graphics.f().s("#443D3F").ss(1,1,1).p("ABzAAQAAAUgiAOQgiAPgvAAQguAAgigPQgigOAAgUQAAgTAigOQAigPAuAAQAvAAAiAPQAiAOAAATIAAAA").cp();
	this.shape_2952.setTransform(47.8,-31.4);

	this.shape_2953 = new cjs.Shape();
	this.shape_2953.graphics.f().s("#443D3F").ss(1,1,1).p("ABgAfQgIAYgiAIQgiAIglgNQgogNgXgbQgWgYAHgYQAJgYAigIQAhgIAmANQAnANAXAaQAXAZgIAYIAAAA").cp();
	this.shape_2953.setTransform(-37.5,-24);

	this.shape_2954 = new cjs.Shape();
	this.shape_2954.graphics.f().s("#443D3F").ss(1,1,1).p("ADaAAQAABAhAAuQhAAuhaAAQhZAAhAguQhAguAAhAQAAhABAgtQBAguBZAAQBaAABAAuQBAAtAABAIAAAA").cp();
	this.shape_2954.setTransform(2.5,4.5);

	this.shape_2955 = new cjs.Shape();
	this.shape_2955.graphics.f().s("#443D3F").ss(1,1,1).p("ACNAAQAAAUgpAOQgqAPg6AAQg5AAgpgPQgqgOAAgUQAAgTAqgOQApgPA5AAQA6AAAqAPQApAOAAATIAAAA").cp();
	this.shape_2955.setTransform(14.6,-19.2);

	this.shape_2956 = new cjs.Shape();
	this.shape_2956.graphics.f().s("#443D3F").ss(1,1,1).p("ACNAAQAAAUgpAOQgqAPg6AAQg5AAgpgPQgqgOAAgUQAAgTAqgOQApgPA5AAQA6AAAqAPQApAOAAATIAAAA").cp();
	this.shape_2956.setTransform(-12.3,-18.7);

	this.shape_2957 = new cjs.Shape();
	this.shape_2957.graphics.f().s("#443D3F").ss(1,1,1).p("AEKAKQAAAohOAcQhOAchuAAQhtAAhNgcQhPgcAAgoIAAgTQAAgnBPgcQBNgcBtAAQBuAABOAcQBOAcAAAnIAAAT").cp();
	this.shape_2957.setTransform(1.3,-38.6);

	this.shape_2958 = new cjs.Shape();
	this.shape_2958.graphics.f().s("#443D3F").ss(1,1,1).p("AEKAKQAAAohOAcQhOAchuAAQhtAAhNgcQhPgcAAgoIAAgTQAAgnBPgcQBNgcBtAAQBuAABOAcQBOAcAAAnIAAAT").cp();
	this.shape_2958.setTransform(1.3,-38.6);

	this.shape_2959 = new cjs.Shape();
	this.shape_2959.graphics.f().s("#443D3F").ss(1,1,1).p("AEKAKQAAAohOAcQhOAchuAAQhtAAhNgcQhPgcAAgoIAAgTQAAgnBPgcQBNgcBtAAQBuAABOAcQBOAcAAAnIAAAT").cp();
	this.shape_2959.setTransform(1.3,-38.6);

	this.shape_2960 = new cjs.Shape();
	this.shape_2960.graphics.f().s("#443D3F").ss(1,1,1).p("AE1AAQAAg2hagmQhcgnh/AAQh/AAhbAnQhaAmAAA2QAAA2BaAnQBbAnB/AAQCAAABbgnQBagnAAg2IAAAA").cp();
	this.shape_2960.setTransform(1.3,-38.2);

	this.shape_2961 = new cjs.Shape();
	this.shape_2961.graphics.f().s("#443D3F").ss(1,1,1).p("AE1AAQAAg2hagmQhcgnh/AAQh/AAhbAnQhaAmAAA2QAAA2BaAnQBbAnB/AAQCAAABbgnQBagnAAg2IAAAA").cp();
	this.shape_2961.setTransform(1.3,-38.2);

	this.shape_2962 = new cjs.Shape();
	this.shape_2962.graphics.f().s("#443D3F").ss(1,1,1).p("AEkBpQB4gsAAg9QAAg8h4grQh5grirAAQiqAAh4ArQh5ArAAA8QAAA9B5AsQB4AqCqAAQCrAAB5gqIAAAA").cp();
	this.shape_2962.setTransform(1.3,-36.3);

	this.shape_2963 = new cjs.Shape();
	this.shape_2963.graphics.f().s("#443D3F").ss(1,1,1).p("AGggFQAAg+h6gsQh6gsisAAQirAAh6AsQh6AsAAA+IAAALQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgL").cp();
	this.shape_2963.setTransform(1.3,-36.7);

	this.shape_2964 = new cjs.Shape();
	this.shape_2964.graphics.f().s("#443D3F").ss(1,1,1).p("AGggFQAAg+h6gsQh6gsisAAQirAAh6AsQh6AsAAA+IAAALQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgL").cp();
	this.shape_2964.setTransform(1.3,-36.7);

	this.shape_2965 = new cjs.Shape();
	this.shape_2965.graphics.f().s("#443D3F").ss(1,1,1).p("AGggFQAAg+h6gsQh6gsisAAQirAAh6AsQh6AsAAA+IAAALQAAA+B6AsQB6AsCrAAQCsAAB6gsQB6gsAAg+IAAgL").cp();
	this.shape_2965.setTransform(1.3,-36.7);

	this.shape_2966 = new cjs.Shape();
	this.shape_2966.graphics.f().s("#443D3F").ss(1,1,1).p("AJOAAQAABXitA+QitA+j0AAQjzAAisg+Qiug+AAhXQAAhWCug+QCsg+DzAAQD0AACtA+QCtA+AABWIAAAA").cp();
	this.shape_2966.setTransform(1.4,-35.7);

	this.shape_2967 = new cjs.Shape();
	this.shape_2967.graphics.f().s("#443D3F").ss(1,1,1).p("AJTiaIAAE2QAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAk2QAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAAAA").cp();
	this.shape_2967.setTransform(1.3,-20.5);

	this.shape_2968 = new cjs.Shape();
	this.shape_2968.graphics.f().s("#443D3F").ss(1,1,1).p("AJTiaIAAE2QAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAk2QAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAAAA").cp();
	this.shape_2968.setTransform(1.3,-20.5);

	this.shape_2969 = new cjs.Shape();
	this.shape_2969.graphics.f().s("#443D3F").ss(1,1,1).p("AJTiaIAAE2QAABYivA/QitA+j3AAQj1AAiug+Qivg/AAhYIAAk2QAAhZCvg/QCtg+D2AAQD3AACtA+QCvA/AABZIAAAA").cp();
	this.shape_2969.setTransform(1.3,-20.5);

	this.shape_2970 = new cjs.Shape();
	this.shape_2970.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgDgDAAgDQAAgHAIAAQAIAAAAAHIAAAA").cp();
	this.shape_2970.setTransform(63.2,-30.7);

	this.shape_2971 = new cjs.Shape();
	this.shape_2971.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAJAAQAAADgDADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQAEAAACACQADADAAACIAAAA").cp();
	this.shape_2971.setTransform(61.3,-29.2);

	this.shape_2972 = new cjs.Shape();
	this.shape_2972.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("AAahtIANAFQAEABAHAGQACABAFAAQAFABACABQADADAGAHQAEADAFAHQADADAHAGQAHAJABACQADADADAJQAFAGACAFQAFAHACAFQABAIABAFQAEAGABAFQAAACgBAEQAAAFAAACQABALAAACQADAJgBAEQgBAFgEAIQgFAHgDADQgDAJgDADQgBACgFABQgFABgCABQgBABgDAEQgDADgCACIgMAEQgIACgEABQgIAFgEABQgIADgFABIgNAAQgJgBgEAAQgIACgFAAIgLABIgMgBQgBAAgMgDQgIgDgEgBQgHgEgEgBIgMgFQgIgDgDgCQgIgEgDgCQgIgFgDgDQgCgDgDgJQgCgDgFgHIgEgMQgBgEgEgIIgEgMIAAgYIAGgZQABgFAGgGQACgEAGgGIAJgJQACgEAHgGQABgBACgEQACgFACgBIAKgIQACgBAFAAQAEgBACgCQACAAADgDQADgEACAAIANgEQAEgBAIgBIANAAQACAAAFgDQAEgCABAAQAEAAAIACIAOAB").cp();
	this.shape_2972.setTransform(61.2,-20.8);

	this.shape_2973 = new cjs.Shape();
	this.shape_2973.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.3).s().p("AAahtIANAFQAEABAHAGQACABAFAAQAFABACABQADADAGAHQAEADAFAHQADADAHAGQAHAJABACQADADADAJQAFAGACAFQAFAHACAFQABAIABAFQAEAGABAFQAAACgBAEQAAAFAAACQABALAAACQADAJgBAEQgBAFgEAIQgFAHgDADQgDAJgDADQgBACgFABQgFABgCABQgBABgDAEQgDADgCACIgMAEQgIACgEABQgIAFgEABQgIADgFABIgNAAQgJgBgEAAQgIACgFAAIgLABIgMgBQgBAAgMgDQgIgDgEgBQgHgEgEgBIgMgFQgIgDgDgCQgIgEgDgCQgIgFgDgDQgCgDgDgJQgCgDgFgHIgEgMQgBgEgEgIIgEgMIAAgYIAGgZQABgFAGgGQACgEAGgGIAJgJQACgEAHgGQABgBACgEQACgFACgBIAKgIQACgBAFAAQAEgBACgCQACAAADgDQADgEACAAIANgEQAEgBAIgBIANAAQACAAAFgDQAEgCABAAQAEAAAIACIAOAB").cp();
	this.shape_2973.setTransform(61.2,-20.8);

	this.shape_2974 = new cjs.Shape();
	this.shape_2974.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAIAAQAAADgCADQgDACgDAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACIAAAA").cp();
	this.shape_2974.setTransform(-55.6,-32.7);

	this.shape_2975 = new cjs.Shape();
	this.shape_2975.graphics.rf(["#69A733","rgba(102,162,50,0.541)","rgba(99,157,48,0)"],[0.29,0.753,1],0,0,0,0,0,0.8).s().p("AAJAAQAAADgDADQgCACgEAAQgCAAgDgCQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQADADAAACIAAAA").cp();
	this.shape_2975.setTransform(-57.6,-31.1);

	this.shape_2976 = new cjs.Shape();
	this.shape_2976.graphics.rf(["#76A031","rgba(95,139,48,0.369)","rgba(82,127,47,0)"],[0,0.557,1],0.2,-9.6,0,0.2,-9.6,13.3).s().p("AgYhrQAIAAAFAAQACAAAEgDQAEgCABAAQAIACAFABQAJAAAEAAIANAFQACAAAEADQADAEACABQACAAAFABQAFAAACABQAGAHAEADQACACACADQADAFABAAQAHAFADAEIAIALQAEAIACAEIAHALQAFAHACAFQABAIABAFQAEAGABAFQABACgBAFQgBAEAAACQABAJAAAEQADAJgBAEQgBAEgDAJQgBACgDADQgEAFAAAAQgDAJgEADQgBACgFABQgFABgBABQgGAIgDACQgEACgJACQgDACgJACQgEABgIAEQgEABgJADQgEABgJgBQgEABgJgCQgEAAgJADQgCAAgIAAIgagDIgMgFQgEgBgHgEIgLgFQgEgCgIgDQgKgFgBgBIgKgIQgDgDgDgIIgHgLQgCgEgCgIQgBgEgEgHQgBgEgCgJIAAgYIACgNQADgKAAgCQACgEAFgHIAIgKQACgEAHgFIAJgKQABgBACgEQACgEACgBQAJgIABAAQACgCAFAAQAEgBACgBQAEgCAGgGIAagG").cp();
	this.shape_2976.setTransform(-57.7,-22.8);

	this.shape_2977 = new cjs.Shape();
	this.shape_2977.graphics.lf(["#639D30","#5A8D30","#527F2F","#4F792D","#486827","#405521"],[0,0.239,0.514,0.655,0.843,1],0,-10.9,0.1,11.4).s().p("AgYhrQAIAAAFAAQACAAAEgDQAEgCABAAQAIACAFABQAJAAAEAAIANAFQACAAAEADQADAEACABQACAAAFABQAFAAACABQAGAHAEADQACACACADQADAFABAAQAHAFADAEIAIALQAEAIACAEIAHALQAFAHACAFQABAIABAFQAEAGABAFQABACgBAFQgBAEAAACQABAJAAAEQADAJgBAEQgBAEgDAJQgBACgDADQgEAFAAAAQgDAJgEADQgBACgFABQgFABgBABQgGAIgDACQgEACgJACQgDACgJACQgEABgIAEQgEABgJADQgEABgJgBQgEABgJgCQgEAAgJADQgCAAgIAAIgagDIgMgFQgEgBgHgEIgLgFQgEgCgIgDQgKgFgBgBIgKgIQgDgDgDgIIgHgLQgCgEgCgIQgBgEgEgHQgBgEgCgJIAAgYIACgNQADgKAAgCQACgEAFgHIAIgKQACgEAHgFIAJgKQABgBACgEQACgEACgBQAJgIABAAQACgCAFAAQAEgBACgBQAEgCAGgGIAagG").cp();
	this.shape_2977.setTransform(-57.7,-22.8);

	this.addChild(this.shape_2977,this.shape_2976,this.shape_2975,this.shape_2974,this.shape_2973,this.shape_2972,this.shape_2971,this.shape_2970,this.shape_2969,this.shape_2968,this.shape_2967,this.shape_2966,this.shape_2965,this.shape_2964,this.shape_2963,this.shape_2962,this.shape_2961,this.shape_2960,this.shape_2959,this.shape_2958,this.shape_2957,this.shape_2956,this.shape_2955,this.shape_2954,this.shape_2953,this.shape_2952,this.shape_2951,this.shape_2950,this.shape_2949,this.shape_2948,this.shape_2947,this.shape_2946,this.shape_2945,this.shape_2944,this.shape_2943,this.shape_2942,this.shape_2941,this.shape_2940,this.shape_2939,this.shape_2938,this.shape_2937,this.shape_2936,this.shape_2935,this.shape_2934,this.shape_2933,this.shape_2932,this.shape_2931,this.shape_2930,this.shape_2929,this.shape_2928,this.shape_2927,this.shape_2926,this.shape_2925,this.shape_2924,this.shape_2923,this.shape_2922,this.shape_2921,this.shape_2920,this.shape_2919,this.shape_2918,this.shape_2917,this.shape_2916,this.shape_2915,this.shape_2914,this.shape_2913,this.shape_2912,this.shape_2911,this.shape_2910,this.shape_2909,this.shape_2908,this.shape_2907,this.shape_2906,this.shape_2905,this.shape_2904,this.shape_2903,this.shape_2902,this.shape_2901,this.shape_2900,this.shape_2899,this.shape_2898,this.shape_2897,this.shape_2896,this.shape_2895,this.shape_2894,this.shape_2893,this.shape_2892,this.shape_2891,this.shape_2890,this.shape_2889,this.shape_2888,this.shape_2887,this.shape_2886,this.shape_2885,this.shape_2884,this.shape_2883,this.shape_2882,this.shape_2881,this.shape_2880,this.shape_2879,this.shape_2878,this.shape_2877,this.shape_2876,this.shape_2875,this.shape_2874,this.shape_2873,this.shape_2872,this.shape_2871,this.shape_2870,this.shape_2869,this.shape_2868,this.shape_2867,this.shape_2866,this.shape_2865,this.shape_2864,this.shape_2863,this.shape_2862,this.shape_2861,this.shape_2860,this.shape_2859,this.shape_2858,this.shape_2857,this.shape_2856,this.shape_2855,this.shape_2854,this.shape_2853,this.shape_2852,this.shape_2851,this.shape_2850,this.shape_2849,this.shape_2848,this.shape_2847,this.shape_2846,this.shape_2845,this.shape_2844,this.shape_2843,this.shape_2842,this.shape_2841,this.shape_2840,this.shape_2839,this.shape_2838,this.shape_2837,this.shape_2836,this.shape_2835,this.shape_2834,this.shape_2833,this.shape_2832,this.shape_2831,this.shape_2830,this.shape_2829,this.shape_2828,this.shape_2827,this.shape_2826,this.shape_2825,this.shape_2824,this.shape_2823,this.shape_2822,this.shape_2821,this.shape_2820,this.shape_2819,this.shape_2818,this.shape_2817,this.shape_2816,this.shape_2815,this.shape_2814,this.shape_2813,this.shape_2812,this.shape_2811,this.shape_2810,this.shape_2809,this.shape_2808,this.shape_2807,this.shape_2806,this.shape_2805,this.shape_2804,this.shape_2803,this.shape_2802,this.shape_2801,this.shape_2800);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87,-190.5,166.3,233.2);


(lib.Windmill = function() {
	this.initialize();

	// Layer 1
	this.shape_2978 = new cjs.Shape();
	this.shape_2978.graphics.f("#E5F7BF").s().p("AAWAAQAAADgHACQgHACgIAAQgIAAgHgCQgGgCAAgDQAAgCAGgCQAHgCAIAAQAIAAAHACQAHACAAACIAAAA").cp();
	this.shape_2978.setTransform(0,-36.1);

	this.shape_2979 = new cjs.Shape();
	this.shape_2979.graphics.f("#DBE084").s().p("AAAg9QgsAAgfAgQggAdAAAtQAAAJABAIQgFgsAjggQAiggAqAAQApAAAhAgQAiAfgCAtQACgLAAgGQAAgtgggdQgggggsAAIAAAA").cp();
	this.shape_2979.setTransform(0.3,-30.6);

	this.shape_2980 = new cjs.Shape();
	this.shape_2980.graphics.f("#ABCE5C").s("#768E42").ss(0.5,0,0,4).p("ABxAAQAAAughAhQghAhgvAAQgtAAgighQggghAAguQAAguAgghQAighAtAAQAvAAAhAhQAhAhAAAuIAAAA").cp();
	this.shape_2980.setTransform(0.1,-26.2);

	this.shape_2981 = new cjs.Shape();
	this.shape_2981.graphics.f("#ABCE5C").s().p("AAUgUQA4gcAxgVIACAPQgmAOgzAWQhkAqhAAuQAkglBug1IAAAA").cp();
	this.shape_2981.setTransform(-20.3,-15.9);

	this.shape_2982 = new cjs.Shape();
	this.shape_2982.graphics.f().s("#5E5B55").ss(0.5,0,0,4).p("AAghyQBJggA/gVQgVA/gfBKQg/CRg1A0QgSAUhUhUQhUhUAUgTQA1gzCRg/IAAAA").cp();
	this.shape_2982.setTransform(-16.7,-9.3);

	this.shape_2983 = new cjs.Shape();
	this.shape_2983.graphics.lf(["#000000","rgba(0,0,0,0.506)","rgba(0,0,0,0)"],[0,0.145,1],17.1,-16.7,-10.1,10.3).s().p("AAhh0QBKgfA/gVQgVA/ggBJQg/CRg0A1QgSAUhUhUQhVhUAUgSQA1g1CRg/IAAAA").cp();
	this.shape_2983.setTransform(-16.8,-9.2);

	this.shape_2984 = new cjs.Shape();
	this.shape_2984.graphics.lf(["#A8CB5A","#A4C758","#99B953","#87A34A","#6E843D","#6C813C"],[0,0.22,0.463,0.718,0.98,1],0.1,-50.5,0.1,16.5).s().p("AAhh0QBKgfA/gVQgVA/ggBJQg/CRg0A1QgSAUhUhUQhVhUAUgSQA1g1CRg/IAAAA").cp();
	this.shape_2984.setTransform(-16.8,-9.2);

	this.shape_2985 = new cjs.Shape();
	this.shape_2985.graphics.f("#ABCE5C").s().p("AgUgUIhogxIgCAPIBZAkQBjAqBBAuQglglhug1IAAAA").cp();
	this.shape_2985.setTransform(20.5,-15.9);

	this.shape_2986 = new cjs.Shape();
	this.shape_2986.graphics.f("#E5F7BF").s().p("AALAAQAAACgEADQgDACgEAAQgDAAgDgCQgEgDAAgCQAAgCAEgCQADgCADAAQALAAAAAGIAAAA").cp();
	this.shape_2986.setTransform(-17.9,-58.8);

	this.shape_2987 = new cjs.Shape();
	this.shape_2987.graphics.f("#E5F7BF").s().p("AALAAQAAADgEACQgDADgEAAQgDAAgDgDQgEgCAAgDQAAgCAEgCQADgDADAAQAEAAADADQAEACAAACIAAAA").cp();
	this.shape_2987.setTransform(17.9,-58.5);

	this.shape_2988 = new cjs.Shape();
	this.shape_2988.graphics.f("#DBE084").s().p("ACTCAQgdhJg6hXIg0hLQgbARgjAZQhDAygZAqQAUgrA3g1QAyguAdgMQAXAQAsBPQAvBSAZBOIAAAA").cp();
	this.shape_2988.setTransform(-18.4,-46.8);

	this.shape_2989 = new cjs.Shape();
	this.shape_2989.graphics.f("#DBE084").s().p("AiSCAQAdhJA6hXQAegtAXgeIA9AqQBEAyAYAqQgUgrg4g1QgxgugdgMQgXAQgsBPQgvBSgZBOIAAAA").cp();
	this.shape_2989.setTransform(18.6,-46.8);

	this.shape_2990 = new cjs.Shape();
	this.shape_2990.graphics.f().s("#52504A").ss(0.5,0,0,4).p("AB0AfQAfBKAVA/Qg/gVhJggQiRg/g1g0QgUgSBUhUQBUhUASAUQA1A0A/CRIAAAA").cp();
	this.shape_2990.setTransform(-16.7,-43);

	this.shape_2991 = new cjs.Shape();
	this.shape_2991.graphics.lf(["#000000","rgba(0,0,0,0.506)","rgba(0,0,0,0)"],[0,0.145,1],16.6,16.8,-10,-10.1).s().p("AB1AhQAgBJAVA/Qg/gVhKgfQiRg/g1g1QgTgSBUhUQBUhUASAUQA0A1A/CRIAAAA").cp();
	this.shape_2991.setTransform(-16.8,-43.1);

	this.shape_2992 = new cjs.Shape();
	this.shape_2992.graphics.lf(["#A8CB5A","#A4C758","#99B953","#87A34A","#6E843D","#6C813C"],[0,0.22,0.463,0.718,0.98,1],0.1,-16.6,0.1,50.4).s().p("AB1AhQAgBJAVA/Qg/gVhKgfQiRg/g1g1QgTgSBUhUQBUhUASAUQA0A1A/CRIAAAA").cp();
	this.shape_2992.setTransform(-16.8,-43.1);

	this.shape_2993 = new cjs.Shape();
	this.shape_2993.graphics.f().s("#4E4B46").ss(0.5,0,0,4).p("AhygeIg1iJICJA1QCRA/A0AzQAUAThUBUQhUBUgTgUQgzg0g/iRIAAAA").cp();
	this.shape_2993.setTransform(16.9,-9.3);

	this.shape_2994 = new cjs.Shape();
	this.shape_2994.graphics.lf(["#000000","rgba(0,0,0,0.506)","rgba(0,0,0,0)"],[0,0.145,1],-16.9,-16.6,10.1,10.1).s().p("Ah0ggIg0iIICIA0QCRA/A1A1QAUAShUBUQhUBUgSgUQg1g1g/iRIAAAA").cp();
	this.shape_2994.setTransform(17.1,-9.2);

	this.shape_2995 = new cjs.Shape();
	this.shape_2995.graphics.lf(["#A8CB5A","#A4C758","#99B953","#87A34A","#6E843D","#6C813C"],[0,0.22,0.463,0.718,0.98,1],0,-50.5,0,16.5).s().p("Ah0ggIg0iIICIA0QCRA/A1A1QAUAShUBUQhUBUgSgUQg1g1g/iRIAAAA").cp();
	this.shape_2995.setTransform(17.1,-9.2);

	this.shape_2996 = new cjs.Shape();
	this.shape_2996.graphics.f().s("#6F6B64").ss(0.5,0,0,4).p("AipCrQAVg/AghJQA/iRA0g1QASgUBUBUQBUBUgUASQg0A1iRA/QhKAfg/AVIAAAA").cp();
	this.shape_2996.setTransform(17.1,-43.1,1,1,0,0,0,0,0.2);

	this.shape_2997 = new cjs.Shape();
	this.shape_2997.graphics.lf(["#000000","rgba(0,0,0,0.506)","rgba(0,0,0,0)"],[0,0.145,1],-16.7,16.2,10.2,-10).s().p("AioCpQAVg/AfhJQA/iRA1g1QARgUBVBUQBUBUgUASQg1A1iRA/QhJAfg/AVIAAAA").cp();
	this.shape_2997.setTransform(17.1,-43.1);

	this.shape_2998 = new cjs.Shape();
	this.shape_2998.graphics.lf(["#A8CB5A","#A4C758","#99B953","#87A34A","#6E843D","#6C813C"],[0,0.22,0.463,0.718,0.98,1],0,-16.6,0,50.4).s().p("AioCpQAVg/AfhJQA/iRA1g1QARgUBVBUQBUBUgUASQg1A1iRA/QhJAfg/AVIAAAA").cp();
	this.shape_2998.setTransform(17.1,-43.1);

	this.shape_2999 = new cjs.Shape();
	this.shape_2999.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0,0,0,0,0,14.2).s().p("ACNAAQAAA5gpAoQgqAog6AAQg5AAgqgoQgpgoAAg5QAAg4ApgoQAqgoA5AAQA6AAAqAoQApAoAAA4IAAAA").cp();
	this.shape_2999.setTransform(0,-25.6);

	this.shape_3000 = new cjs.Shape();
	this.shape_3000.graphics.lf(["#878B40","#83883E","#767C3A","#616932","#444F27","#404C25"],[0,0.216,0.455,0.706,0.965,1],0,-15.9,0,15.6).s().p("ACoAAQAABDgxAvQgyAwhFAAQhEAAgxgwQgxgvAAhDQAAhCAxgwQAxgvBEAAQBFAAAyAvQAxAwAABCIAAAA").cp();
	this.shape_3000.setTransform(0.1,-25.6);

	this.shape_3001 = new cjs.Shape();
	this.shape_3001.graphics.rf(["#000000","rgba(0,0,0,0.875)","rgba(0,0,0,0)"],[0.6,0.624,1],0,0,0,0,0,21.4).s().p("ADVAAQAABYg+BAQg/A/hYAAQhXAAg/g/Qg+hAAAhYQAAhXA+hAQA/g/BXAAQBYAAA/A/QA+BAAABXIAAAA").cp();
	this.shape_3001.setTransform(0.1,-24.3);

	this.shape_3002 = new cjs.Shape();
	this.shape_3002.graphics.f().s("#7F6A24").ss(2,0,0,4).p("AgfgnQAOgMARAAQAQAAAPANQAQAOAAARIAAA8IhdAAIAAg8QAAgTAPgNIAAAA").cp();
	this.shape_3002.setTransform(0.2,3);

	this.shape_3003 = new cjs.Shape();
	this.shape_3003.graphics.lf(["rgba(0,0,0,0.318)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.318)"],[0,0.263,0.459,1],0,-5.2,0,5.4).s().p("AgfgnQAOgMARAAQAQAAAPANQAQAOAAARIAAA8IhdAAIAAg8QAAgTAPgNIAAAA").cp();
	this.shape_3003.setTransform(0.2,3);

	this.shape_3004 = new cjs.Shape();
	this.shape_3004.graphics.lf(["rgba(0,0,0,0.31)","rgba(0,0,0,0)","rgba(0,0,0,0)","rgba(0,0,0,0.31)"],[0,0.302,0.745,1],-4.6,0,4.8,0).s().p("AgfgnQAOgMARAAQAQAAAPANQAQAOAAARIAAA8IhdAAIAAg8QAAgTAPgNIAAAA").cp();
	this.shape_3004.setTransform(0.2,3);

	this.shape_3005 = new cjs.Shape();
	this.shape_3005.graphics.f("#3D3D35").s().p("AgfgnQAOgMARAAQAQAAAPANQAQAOAAARIAAA8IhdAAIAAg8QAAgTAPgNIAAAA").cp();
	this.shape_3005.setTransform(0.2,3);

	this.shape_3006 = new cjs.Shape();
	this.shape_3006.graphics.f().s("#A79149").ss(1,0,0,4).p("Ag0AgQAAgdARgOQAOgOAVAAQASAAARAQQASAQAAAZ");
	this.shape_3006.setTransform(0.2,-16.5);

	this.shape_3007 = new cjs.Shape();
	this.shape_3007.graphics.rf(["#766B48","rgba(119,109,77,0.898)","rgba(122,114,89,0.604)","rgba(127,123,110,0.122)","rgba(128,125,116,0)"],[0.792,0.851,0.918,0.984,1],0,-3.7,0,0,-3.7,27.7).s().p("AjHgqQB8ApBLAAQBMAAB8gpQAugPAPgBQAWgCAAATQAAAphTAdQhTAeh1AAQh0AAhTgeQhTgdAAgpQAAgTAXACQAPABAtAPIAAAA").cp();
	this.shape_3007.setTransform(0.5,13.6);

	this.shape_3008 = new cjs.Shape();
	this.shape_3008.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1.4,0,1.6,0).s().p("AAPAXIgdgUIAAgZIAdAUIAAAZ").cp();
	this.shape_3008.setTransform(-16.2,-13.4);

	this.shape_3009 = new cjs.Shape();
	this.shape_3009.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAVAMIgoAAIAAgYIAoAAIAAAY").cp();
	this.shape_3009.setTransform(-14.3,-1.4);

	this.shape_3010 = new cjs.Shape();
	this.shape_3010.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2,0,2.1,0).s().p("AAVAXIgogUIAAgZIAoAUIAAAZ").cp();
	this.shape_3010.setTransform(-14.2,-25.1);

	this.shape_3011 = new cjs.Shape();
	this.shape_3011.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1,0,1.1,0).s().p("AALACIgVAUIAAgYIAVgUIAAAY").cp();
	this.shape_3011.setTransform(21.2,3);

	this.shape_3012 = new cjs.Shape();
	this.shape_3012.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-1,0,1.1,0).s().p("AAKACIgUAUIAAgXIAUgUIAAAX").cp();
	this.shape_3012.setTransform(18.5,-2.6);

	this.shape_3013 = new cjs.Shape();
	this.shape_3013.graphics.lf(["rgba(128,125,116,0)","#807D74","#807D74","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.1,0,2.2,0).s().p("AAWAIIgqAKIAAgYIAqgKIAAAY").cp();
	this.shape_3013.setTransform(11.9,-10.8);

	this.shape_3014 = new cjs.Shape();
	this.shape_3014.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-3,0,3.2,0).s().p("AAfgRIAAAZIg9AKIAAgZIA9gK").cp();
	this.shape_3014.setTransform(9,-22.1);

	this.shape_3015 = new cjs.Shape();
	this.shape_3015.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.8,0,2.9,0).s().p("AAcgMIAAAZIg3AAIAAgZIA3AA").cp();
	this.shape_3015.setTransform(-4,-23.6);

	this.shape_3016 = new cjs.Shape();
	this.shape_3016.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-3,0,3.2,0).s().p("AAfANIg9AAIAAgYIA9AAIAAAY").cp();
	this.shape_3016.setTransform(4.2,-14.3);

	this.shape_3017 = new cjs.Shape();
	this.shape_3017.graphics.lf(["rgba(128,125,116,0)","rgba(128,125,116,0.42)","rgba(128,125,116,0.42)","rgba(128,125,116,0)"],[0.008,0.165,0.882,0.992],-2.3,0,2.5,0).s().p("AAYASIgvgKIAAgYIAvAKIAAAY").cp();
	this.shape_3017.setTransform(-8.5,-14.7);

	this.shape_3018 = new cjs.Shape();
	this.shape_3018.graphics.lf(["#826B26","#735F22","#584A1C"],[0.298,0.478,0.847],0,-19.5,0,18.7).s().p("AAkijQA1BZBZCAQAUAbAAApQAAAeg6AVQg6AVhSAAQhQAAg7gVQg6gVAAgeQAAgnAQgYQBciMAvhOQAKgQAIgHQALgLANAAQATAAARAeIAAAA").cp();
	this.shape_3018.setTransform(0.4,-49.6);

	this.shape_3019 = new cjs.Shape();
	this.shape_3019.graphics.f("#4A3F19").s("#3E3617").ss(1,0,0,4).p("ADBAPQAAAcg5AVQg5AUhPAAQhPAAg4gUQg5gVAAgcIAAgcQAAgdA5gUQA4gVBPAAQBQAAA4AVQA5AUAAAdIAAAc").cp();
	this.shape_3019.setTransform(0.5,-34.6);

	this.shape_3020 = new cjs.Shape();
	this.shape_3020.graphics.f().s("#BEB184").ss(1,0,0,4).p("AC9gkQAAAdg3ASQg4AUhOAAQhNAAg4gUQg3gSAAgd");
	this.shape_3020.setTransform(0.5,-28.4);

	this.shape_3021 = new cjs.Shape();
	this.shape_3021.graphics.f("#4A3F19").s().p("AAAAiQhNAAg4gUQg3gTAAgcIF5AAQAAAcg3ATQg4AUhOAAIAAAA").cp();
	this.shape_3021.setTransform(0.5,-28.7);

	this.shape_3022 = new cjs.Shape();
	this.shape_3022.graphics.lf(["rgba(128,125,116,0)","#736244"],[0,1],0,-25.6,0,25.8).s().p("ADAj/QAACtAkB6QAFATASA3QAMAgAAAPQAAAohNAbQhOAchsAAQhtAAhLgbQhOgbAAgpQAAgQALggQAUg6AFgRQAih6ABirQAAAcA4AUQA5AVBOAAQBOAAA6gVQA3gVABgbIAAAA").cp();
	this.shape_3022.setTransform(0.5,-8.5);

	this.shape_3023 = new cjs.Shape();
	this.shape_3023.graphics.rf(["#A48A45","#A08643","#937B3F","#846F39"],[0.353,0.573,0.816,1],-0.1,10.4,0,-0.1,10.4,16.8).s().p("ADAj/QAACtAkB6QAFATASA3QAMAgAAAPQAAAohNAbQhOAchsAAQhtAAhLgbQhOgbAAgpQAAgQALggQAUg6AFgRQAih6ABirQAAAcA4AUQA5AVBOAAQBOAAA6gVQA3gVABgbIAAAA").cp();
	this.shape_3023.setTransform(0.5,-8.5);

	this.shape_3024 = new cjs.Shape();
	this.shape_3024.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAFQgFAHgIAAQgGAAgGgHQgHgFAAgIQAAgHAHgGQAGgGAGAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3024.setTransform(6.5,-39.2);

	this.shape_3025 = new cjs.Shape();
	this.shape_3025.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAFQgFAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3025.setTransform(-0.1,-40.5);

	this.shape_3026 = new cjs.Shape();
	this.shape_3026.graphics.f().s("#484143").ss(1,0,0,4).p("AAPgEQADAGgDAHQgCAHgHACQgGADgEgEQgHgEgDgIQgDgGADgHQACgHAHgCQAFgCAFADQAHAEADAIIAAAA").cp();
	this.shape_3026.setTransform(13.3,-46.4);

	this.shape_3027 = new cjs.Shape();
	this.shape_3027.graphics.f().s("#484143").ss(1,0,0,4).p("AAPgEQADAGgDAHQgCAHgHACQgGADgEgEQgHgEgDgIQgCgGACgHQACgHAHgDQAFgCAGAEQAGAEADAIIAAAA").cp();
	this.shape_3027.setTransform(12.6,-41.4);

	this.shape_3028 = new cjs.Shape();
	this.shape_3028.graphics.f().s("#484143").ss(1,0,0,4).p("AAJAFQgEAHgFAEQgFADgEgCQgDgCAAgHQAAgHAEgFQAEgHAEgDQAGgEAEACQADACAAAHQAAAHgEAFIAAAA").cp();
	this.shape_3028.setTransform(-14.1,-46.6);

	this.shape_3029 = new cjs.Shape();
	this.shape_3029.graphics.f().s("#484143").ss(1,0,0,4).p("AAPACQgBAIgGAFQgGAFgEgBQgHgBgEgHQgDgGABgGQACgIAGgFQAFgFAFABQAHABADAGQAEAHgCAGIAAAA").cp();
	this.shape_3029.setTransform(-13.3,-41.1);

	this.shape_3030 = new cjs.Shape();
	this.shape_3030.graphics.f().s("#484143").ss(1,0,0,4).p("AAPADQgBAIgGAFQgFAEgFgBQgHgBgDgGQgEgHACgGQABgJAGgEQAGgFAEABQAHABADAHQAEAHgCAGIAAAA").cp();
	this.shape_3030.setTransform(-8.1,-40.8);

	this.shape_3031 = new cjs.Shape();
	this.shape_3031.graphics.f().s("#484143").ss(1,0,0,4).p("AARADQgCAIgGAFQgGAEgFgBQgHgCgEgGQgEgHABgGQACgIAGgFQAHgFAFACQAHABAEAHQADAGgBAHIAAAA").cp();
	this.shape_3031.setTransform(-9.1,-48.7);

	this.shape_3032 = new cjs.Shape();
	this.shape_3032.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAFQgFAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3032.setTransform(-0.9,-50);

	this.shape_3033 = new cjs.Shape();
	this.shape_3033.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAGQgGAGgIAAQgGAAgGgGQgHgGAAgIQAAgGAHgHQAGgGAGAAQAIAAAGAGQAGAHAAAGIAAAA").cp();
	this.shape_3033.setTransform(0.4,-64.1);

	this.shape_3034 = new cjs.Shape();
	this.shape_3034.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAGQgFAGgIAAQgGAAgGgGQgHgGAAgIQAAgHAHgGQAGgGAGAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3034.setTransform(4,-59.9);

	this.shape_3035 = new cjs.Shape();
	this.shape_3035.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAGQgFAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3035.setTransform(-1.4,-59.6);

	this.shape_3036 = new cjs.Shape();
	this.shape_3036.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAGQgFAGgIAAQgHAAgGgGQgGgGAAgIQAAgHAGgFQAGgGAHAAQAIAAAFAGQAHAGAAAGIAAAA").cp();
	this.shape_3036.setTransform(-4.9,-54.9);

	this.shape_3037 = new cjs.Shape();
	this.shape_3037.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgGAFQgGAHgIAAQgGAAgGgHQgHgFAAgIQAAgHAHgGQAGgGAGAAQAIAAAGAGQAGAGAAAHIAAAA").cp();
	this.shape_3037.setTransform(1.6,-54.5);

	this.shape_3038 = new cjs.Shape();
	this.shape_3038.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAFQgFAHgIAAQgGAAgGgHQgHgFAAgIQAAgHAHgGQAGgGAGAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3038.setTransform(4.7,-50);

	this.shape_3039 = new cjs.Shape();
	this.shape_3039.graphics.f().s("#484143").ss(1,0,0,4).p("AASAAQAAAIgGAGQgFAGgHAAQgGAAgFgGQgGgGAAgIQAAgHAGgFQAFgHAGAAQAHAAAFAHQAGAFAAAHIAAAA").cp();
	this.shape_3039.setTransform(8.4,-46.4);

	this.shape_3040 = new cjs.Shape();
	this.shape_3040.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAFQgFAHgIAAQgHAAgFgHQgHgFAAgIQAAgHAHgFQAFgHAHAAQAIAAAFAHQAHAFAAAHIAAAA").cp();
	this.shape_3040.setTransform(3.7,-44.6);

	this.shape_3041 = new cjs.Shape();
	this.shape_3041.graphics.f().s("#484143").ss(1,0,0,4).p("AAUAAQAAAIgHAFQgFAHgIAAQgHAAgGgHQgGgFAAgIQAAgHAGgGQAGgGAHAAQAIAAAFAGQAHAGAAAHIAAAA").cp();
	this.shape_3041.setTransform(-3.9,-45);

	this.shape_3042 = new cjs.Shape();
	this.shape_3042.graphics.f().s("#484143").ss(1,0,0,4).p("AAPAXIgdgUIAAgZIAdAUIAAAZ").cp();
	this.shape_3042.setTransform(-16.1,-13.4,1,1,0,0,0,0,-0.1);

	this.shape_3043 = new cjs.Shape();
	this.shape_3043.graphics.f().s("#484143").ss(1,0,0,4).p("AAVAMIgoAAIAAgYIAoAAIAAAY").cp();
	this.shape_3043.setTransform(-14.3,-1.4);

	this.shape_3044 = new cjs.Shape();
	this.shape_3044.graphics.f().s("#484143").ss(1,0,0,4).p("AAVAXIgogUIAAgZIAoAUIAAAZ").cp();
	this.shape_3044.setTransform(-14.2,-25.1,1,1,0,0,0,0,-0.1);

	this.shape_3045 = new cjs.Shape();
	this.shape_3045.graphics.f().s("#484143").ss(1,0,0,4).p("AALACIgVAUIAAgYIAVgUIAAAY").cp();
	this.shape_3045.setTransform(21.2,3);

	this.shape_3046 = new cjs.Shape();
	this.shape_3046.graphics.f().s("#484143").ss(1,0,0,4).p("AAKACIgUAUIAAgXIAUgUIAAAX").cp();
	this.shape_3046.setTransform(18.5,-2.6);

	this.shape_3047 = new cjs.Shape();
	this.shape_3047.graphics.f().s("#484143").ss(1,0,0,4).p("AgPgCIAggUIAAAYIggAUIAAgY").cp();
	this.shape_3047.setTransform(16.4,-21.6);

	this.shape_3048 = new cjs.Shape();
	this.shape_3048.graphics.f().s("#484143").ss(1,0,0,4).p("AAWAIIgqAKIAAgYIAqgKIAAAY").cp();
	this.shape_3048.setTransform(11.9,-10.8);

	this.shape_3049 = new cjs.Shape();
	this.shape_3049.graphics.f().s("#484143").ss(1,0,0,4).p("AAfgRIAAAZIg9AKIAAgZIA9gK").cp();
	this.shape_3049.setTransform(9,-22.1);

	this.shape_3050 = new cjs.Shape();
	this.shape_3050.graphics.f().s("#484143").ss(1,0,0,4).p("AAfgRIAAAZIg9AKIAAgZIA9gK").cp();
	this.shape_3050.setTransform(9,-22.1);

	this.shape_3051 = new cjs.Shape();
	this.shape_3051.graphics.f().s("#484143").ss(1,0,0,4).p("AAcgMIAAAZIg3AAIAAgZIA3AA").cp();
	this.shape_3051.setTransform(-4,-23.6);

	this.shape_3052 = new cjs.Shape();
	this.shape_3052.graphics.f().s("#484143").ss(1,0,0,4).p("AAcgMIAAAZIg3AAIAAgZIA3AA").cp();
	this.shape_3052.setTransform(-4,-23.6);

	this.shape_3053 = new cjs.Shape();
	this.shape_3053.graphics.f().s("#484143").ss(1,0,0,4).p("AgegLIA9AAIAAAYIg9AAIAAgY").cp();
	this.shape_3053.setTransform(-1.2,-18.5);

	this.shape_3054 = new cjs.Shape();
	this.shape_3054.graphics.f().s("#484143").ss(1,0,0,4).p("AgegLIA9AAIAAAYIg9AAIAAgY").cp();
	this.shape_3054.setTransform(-1.2,-18.5);

	this.shape_3055 = new cjs.Shape();
	this.shape_3055.graphics.f().s("#484143").ss(1,0,0,4).p("AAfANIg9AAIAAgYIA9AAIAAAY").cp();
	this.shape_3055.setTransform(4.2,-14.3);

	this.shape_3056 = new cjs.Shape();
	this.shape_3056.graphics.f().s("#484143").ss(1,0,0,4).p("AAfANIg9AAIAAgYIA9AAIAAAY").cp();
	this.shape_3056.setTransform(4.2,-14.3);

	this.shape_3057 = new cjs.Shape();
	this.shape_3057.graphics.f().s("#484143").ss(1,0,0,4).p("AgegLIA9AAIAAAYIg9AAIAAgY").cp();
	this.shape_3057.setTransform(-3.2,-10.7);

	this.shape_3058 = new cjs.Shape();
	this.shape_3058.graphics.f().s("#484143").ss(1,0,0,4).p("AgegLIA9AAIAAAYIg9AAIAAgY").cp();
	this.shape_3058.setTransform(-3.2,-10.7);

	this.shape_3059 = new cjs.Shape();
	this.shape_3059.graphics.f().s("#484143").ss(1,0,0,4).p("AAYASIgvgKIAAgYIAvAKIAAAY").cp();
	this.shape_3059.setTransform(-8.5,-14.7);

	this.shape_3060 = new cjs.Shape();
	this.shape_3060.graphics.f().s("#484143").ss(1,0,0,4).p("AAYASIgvgKIAAgYIAvAKIAAAY").cp();
	this.shape_3060.setTransform(-8.5,-14.7);

	this.shape_3061 = new cjs.Shape();
	this.shape_3061.graphics.f().s("#484143").ss(1,0,0,4).p("AAVASIgpgKIAAgZIApAKIAAAZ").cp();
	this.shape_3061.setTransform(-9.9,-19.1);

	this.shape_3062 = new cjs.Shape();
	this.shape_3062.graphics.f().s("#484143").ss(1,0,0,4).p("AAkijQA1BZBZCAQAUAbAAApQAAAeg6AVQg6AVhSAAQhQAAg7gVQg6gVAAgeQAAgnAQgYQBciMAvhOQAKgQAIgHQALgLANAAQATAAARAeIAAAA").cp();
	this.shape_3062.setTransform(0.4,-49.6);

	this.shape_3063 = new cjs.Shape();
	this.shape_3063.graphics.f().s("#484143").ss(1,0,0,4).p("ADBAPQAAAcg5AVQg5AUhPAAQhPAAg4gUQg5gVAAgcIAAgcQAAgdA5gUQA4gVBPAAQBQAAA4AVQA5AUAAAdIAAAc").cp();
	this.shape_3063.setTransform(0.5,-34.6);

	this.shape_3064 = new cjs.Shape();
	this.shape_3064.graphics.f().s("#484143").ss(1,0,0,4).p("AC9gkQAAAdg3ASQg4AUhOAAQhNAAg4gUQg3gSAAgd");
	this.shape_3064.setTransform(0.5,-28.4);

	this.shape_3065 = new cjs.Shape();
	this.shape_3065.graphics.f().s("#484143").ss(1,0,0,4).p("ADAj3QAACtAkB6QAFATASA3QAMAgAAAPQAAAnhNAcQhOAbhsAAQhtAAhLgbQhOgbAAgoQAAgQALghQAUg5AFgRQAih7ABiqQAAAbA4AVQA5AUBOAAQBOAAA6gVQA3gUABgbIAAAA").cp();
	this.shape_3065.setTransform(0.5,-9.3);

	this.shape_3066 = new cjs.Shape();
	this.shape_3066.graphics.f().s("#484143").ss(1,0,0,4).p("ADAj3QAACtAkB6QAFATASA3QAMAgAAAPQAAAnhNAcQhOAbhsAAQhtAAhLgbQhOgbAAgoQAAgQALghQAUg5AFgRQAih7ABiqQAAAbA4AVQA5AUBOAAQBOAAA6gVQA3gUABgbIAAAA").cp();
	this.shape_3066.setTransform(0.5,-9.3);

	this.shape_3067 = new cjs.Shape();
	this.shape_3067.graphics.f().s("#484143").ss(1,0,0,4).p("ADAj3QAACtAkB6QAFATASA3QAMAgAAAPQAAAnhNAcQhOAbhsAAQhtAAhLgbQhOgbAAgoQAAgQALghQAUg5AFgRQAih7ABiqQAAAbA4AVQA5AUBOAAQBOAAA6gVQA3gUABgbIAAAA").cp();
	this.shape_3067.setTransform(0.5,-9.3);

	this.shape_3068 = new cjs.Shape();
	this.shape_3068.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.353,1],0,0,0,0,0,21.8).s().p("ADeAAQAABMhBA2QhBA2hcAAQhbAAhBg2QhBg2AAhMQAAhLBBg2QBBg2BbAAQBbAABCA2QBBA2AABLIAAAA").cp();
	this.shape_3068.setTransform(0.4,-37.9);

	this.addChild(this.shape_3068,this.shape_3067,this.shape_3066,this.shape_3065,this.shape_3064,this.shape_3063,this.shape_3062,this.shape_3061,this.shape_3060,this.shape_3059,this.shape_3058,this.shape_3057,this.shape_3056,this.shape_3055,this.shape_3054,this.shape_3053,this.shape_3052,this.shape_3051,this.shape_3050,this.shape_3049,this.shape_3048,this.shape_3047,this.shape_3046,this.shape_3045,this.shape_3044,this.shape_3043,this.shape_3042,this.shape_3041,this.shape_3040,this.shape_3039,this.shape_3038,this.shape_3037,this.shape_3036,this.shape_3035,this.shape_3034,this.shape_3033,this.shape_3032,this.shape_3031,this.shape_3030,this.shape_3029,this.shape_3028,this.shape_3027,this.shape_3026,this.shape_3025,this.shape_3024,this.shape_3023,this.shape_3022,this.shape_3021,this.shape_3020,this.shape_3019,this.shape_3018,this.shape_3017,this.shape_3016,this.shape_3015,this.shape_3014,this.shape_3013,this.shape_3012,this.shape_3011,this.shape_3010,this.shape_3009,this.shape_3008,this.shape_3007,this.shape_3006,this.shape_3005,this.shape_3004,this.shape_3003,this.shape_3002,this.shape_3001,this.shape_3000,this.shape_2999,this.shape_2998,this.shape_2997,this.shape_2996,this.shape_2995,this.shape_2994,this.shape_2993,this.shape_2992,this.shape_2991,this.shape_2990,this.shape_2989,this.shape_2988,this.shape_2987,this.shape_2986,this.shape_2985,this.shape_2984,this.shape_2983,this.shape_2982,this.shape_2981,this.shape_2980,this.shape_2979,this.shape_2978);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.1,-71.8,82.5,99.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
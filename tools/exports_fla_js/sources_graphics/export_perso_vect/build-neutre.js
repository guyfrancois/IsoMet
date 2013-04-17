(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.buildneutre = function() {
	this.initialize();

	// Calque 4
	this.instance = new lib.perso_anim();
	this.instance.setTransform(291,290.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A88E5C").ss(1,1,1).p("AHm9qIgNABIgNgBAHM9pQhSABguASQg5AWgkA7QgtBHApD6QADAQAEAPQADALABACQAWAbATAQQAyAqAxAdQA4AhAbgBQACAAACAAQACAAACAAQAbABA4ghQAygdAxgqQAUgQAVgbQABgCADgLQAFgPADgQQAoj6gthHQgkg7g4gWQgvgShSgBAHezNIiHAAQABgQgIAsQgLA9gEAOQgNAzgdAeQgcAehOAfAMPvZQhNgfgdgeQgcgegOgzQgDgOgMg9QgIgsABAQIiHAAASRtUQAiAmAJAkQAHAhgBApQgDBCATBvQAPB4g8AGQg8AHgjg+Qgig+gbgzQgxhDgTggQgTghgHg7QgEgeABgRQACgRAKgZQAOgkAXgPQAUgMAhgCQAxgDAkAXQARALAdAfIAAAAALYjMInvgFIgHjpIhendILGAAIhsHdIgGDuAUJkhQAjAZAWByQAVBxgpBvQgqBxg+gBQg/gCgIhwQgIhvgohZQgohaAog5QAng4A4AIQA4AIAjAaIAAAAAB2CpIBpkvIH+AAIBpEvIltA3Iljg3AS8D0QBEAAAwAwQAxAxAABEQAABEgxAwQgwAxhEAAQhEAAgxgxQgwgwAAhEQAAhEAwgxQAxgwBEAAIAAAAALgDVQBygVAuBoQAuBogRCOQgRCOgqCHQgpCGhDgFQhDgEgXiNQgXiPgahcQgZhdANh5QAOh6BzgTIAAAAAOVToQgIAfgWA3QgXA3gLAqQgMAvgOBOQgPA3gtAAQgwABgMgdQgMg4gRg4QgWhLgKghQgQg4gHgkQgNg9AAg7QAAguAghEQAbg5BUACQBTABA1BUQA1BTgZBiIAAAAAKqa3QAxgeBGAAQBFAAAxAeQAxAfAAAsQAAArgxAfQgxAfhFAAQhGAAgxgfQgxgfAAgrQAAgsAxgfIAAAAAxIyjQgoAyAEBDIATE2QAiAnAlApQBKBPARAAIBfAAQAQAABJhOIBGhOIAWlQIgHgbQgLghgUgaQhAhWiAACQiGADg5BJIAAAAAslnKQBWAMBBAoQB8BOAABsQAAA3gfBuQggBxgoBMIgeHCIpYAAQAShyACh9QABh9gVgsQgUgsgthwQgthvgChLQgChLAQhCQAQhCCEgxQCDgwBggBQBfAABWANIAAAA").cp();
	this.shape.setTransform(-615.1,701.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3D089").s().p("AHm9qIAAABQBSABAvASQA4AWAkA7QAtBHgoD6QgDAQgFAPQgDALgBACQgVAbgUAQQgxAqgyAdQg4AhgbgBQgCAAgCAAQgCAAgCAAQgbABg4ghQgxgdgygqQgTgQgWgbQgBgCgDgLQgEgPgDgQQgpj6AthHQAkg7A5gWQAugSBSgBIAAgBIANABIANgBAHezNIAAgBICHAAQgBgQAIAsQAMA9ADAOQAOAzAcAeQAdAeBNAfIkxgLIAAAAIkxAMQBOgfAcgeQAdgeANgzQAEgOALg9QAIgsgBAQICHAAASRtUQAiAmAJAkQAHAhgBApQgDBCATBvQAPB4g8AGQg8AHgjg+Qgig+gbgzQgxhDgTggQgTghgHg7QgEgeABgRQACgRAKgZQAOgkAXgPQAUgMAhgCQAxgDAkAXQARALAdAfIAAAAALYjMInvgFIgHjpIhendILGAAIhsHdIgGDuAUJkhQAjAZAWByQAVBxgpBvQgqBxg+gBQg/gCgIhwQgIhvgohZQgohaAog5QAng4A4AIQA4AIAjAaIAAAAAB2CpIBpkvIH+AAIBpEvIltA3Iljg3AS8D0QBEAAAwAwQAxAxAABEQAABEgxAwQgwAxhEAAQhEAAgxgxQgwgwAAhEQAAhEAwgxQAxgwBEAAIAAAAALgDVQBygVAuBoQAuBogRCOQgRCOgqCHQgpCGhDgFQhDgEgXiNQgXiPgahcQgZhdANh5QAOh6BzgTIAAAAAOVToQgIAfgWA3QgXA3gLAqQgMAvgOBOQgPA3gtAAQgwABgMgdQgMg4gRg4QgWhLgKghQgQg4gHgkQgNg9AAg7QAAguAghEQAbg5BUACQBTABA1BUQA1BTgZBiIAAAAAKqa3QAxgeBGAAQBFAAAxAeQAxAfAAAsQAAArgxAfQgxAfhFAAQhGAAgxgfQgxgfAAgrQAAgsAxgfIAAAAAxIyjQA5hJCGgDQCAgCBABWQAUAaALAhIAHAbIgWFQIhGBOQhJBOgQAAIhfAAQgRAAhKhPQglgpgignIgTk2QgEhDAogyIAAAAAslnKQBWAMBBAoQB8BOAABsQAAA3gfBuQggBxgoBMIgeHCIpYAAQAShyACh9QABh9gVgsQgUgsgthwQgthvgChLQgChLAQhCQAQhCCEgxQCDgwBggBQBfAABWANIAAAA").cp();
	this.shape_1.setTransform(-615.1,701.9);

	// GRILLE
	this.instance_1 = new lib.grillepath();
	this.instance_1.setTransform(2160.4,524.9,1.52,1.52);
	this.instance_1.alpha = 0.629;

	this.instance_2 = new lib.grillepath();
	this.instance_2.setTransform(466.5,506.9,1.52,1.52);
	this.instance_2.alpha = 0.629;

	this.instance_3 = new lib.grillepath();
	this.instance_3.setTransform(477.5,301.9,1.52,1.52);
	this.instance_3.alpha = 0.629;

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-752.8,182.7,4108.4,709.2);


// symbols:
(lib.grillepath = function() {
	this.initialize();

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.902)").ss(0.1,1,1).p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-786.1,-55.9,1572.5,111.9);


(lib.TORSEprofil = function() {
	this.initialize();

	// Calque 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A88E5C").ss(1,1,1).p("AlRLSIBdmDQhzkNgvhqQgvhsgUh6QgTh6AghNQAghNA+hXQA/hXBNgHQBigKB2ANQBzANAzAaQBJAlBGBAQBiBZAuBpQApBegDCTQgECUgjBRQgiBTg5BmQg4BmBlFt");
	this.shape_1.setTransform(65.6,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3D089").s().p("AGMLcIrdgKIBdmDQhzkNgvhqQgvhsgUh6QgTh6AghNQAghNA+hXQA/hXBNgHQBigKB2ANQBzANAzAaQBJAlBGBAQBiBZAuBpQApBegDCTQgECUgjBRQgiBTg5BmQg4BmBlFtIAAAA").cp();
	this.shape_2.setTransform(65.6,78.1);

	this.addChild(this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17.5,4.9,96.3,146.6);


(lib.TETEprofil = function() {
	this.initialize();

	// Calque 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2.6,1,1).p("ABJAXQAKgEALgEAg/AJQgSgPgMgdAg/AJQAMALAPAHQAhAOArgJABJAXQgSAGgPADABJAXQAAAAAAAA");
	this.shape_3.setTransform(65.1,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AAliuQhWhPh7AOAgEDyICyAA");
	this.shape_4.setTransform(72.1,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA4geQAKAIAIALQANAOAJAMQAPAVACAIQADANgCAFQgCAGgLgMQgCgCgEgFQgGgIgMgPQgTgVgYgLQgNgGgPgFQgTgGgQgBQgRgDgLACQgFABgdAJQgCAAgBABQgUAGAAgGQAAgGAZgYQAZgYA1AGQAlAFAeAbIAAAA").cp();
	this.shape_5.setTransform(65,37.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#540202").s().p("AgoAwQAgAOArgJQgFAEgGADQgMAFgMAAQgWAAgSgRQgBgCgCgCQgDgEgEgEQgLgTAAgWQAAgdASgWQAEgFAFgDQAQABATAGQAPAFANAGQgDACgCAEQgHAJAAANQAAANAHAHQAGAKAKAAQAJAAAGgKQAGgGABgLQAAAFAAAFQAAAcgSAVQgEAFgFAEQgrAJgggOIAAAA").cp();
	this.shape_6.setTransform(65.5,41.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABhgRQgJgMgNgRQgIgKgKgJQAFADAEACQAaAQAFAbIAAAAABLAxQgBAAAAAAQgSAGgPADQAPgDASgGIAAABQgUATgZgDQAGgDAGgFQAFgEAEgEQASgWAAgcQAAgEAAgFQgBAJgGAIQgGAJgKAAQgJAAgHgJQgGgIAAgMQAAgNAGgKQADgDADgCQAYAMATAWQAMANAGAHQgFATgQAQIAAAAAgsApQgGgCgHgCQgCgBgCgBQgTgRgMgaQAMAaATARQgjgNAAglQAAgTADgPQABAAACgBQAdgIAFgBQALgCARACQgFAEgEAFQgTAVAAAdQAAAWAMATIAAAA").cp();
	this.shape_7.setTransform(64.9,41.3);

	// Calque 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AFilEQgjg0hegzQhPgriFACQiegBgyALQgzALg6AjQg6AkgjA0QgjA1gSAxQgNAkgGAvQgIBFAJBLQAIBPAGAaQAOBFAhBJQAOAhAjA3QAIAIB8AkQCJAoBVANQEMArBNgOQBNgOAPhzQAGgwANg4QAPg5AFgUQAGgdgKgYQgIgTgVgVQglglADgZQAUitgSgyQgQgwglg2IAAAA").cp();
	this.shape_8.setTransform(46,47);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,0,94.9,94);


(lib.PIEDprofil = function() {
	this.initialize();

	// Calque 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AFKBlQAiAigHAvQgHA6hQAGQiIAMj0AFQhuAChRgyQhRgzAjhVQAihUATiEQASiECSAIQBAADAlAyQAMARAvBoQAkBNB8A0QAQAGBIAbQArAQAJAKIAAAA").cp();
	this.shape_9.setTransform(35.9,26.3);

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.8,52.7);


(lib.COUprofil = function() {
	this.initialize();

	// Calque 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A88E5C").ss(1,1,1).p("ADfCqIgUlTIluAAIg7FM");
	this.shape_10.setTransform(22.4,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3D089").s().p("ADfCPQhvA3hvgCQgBAAAAAAQgtABgtgJQg4gLg4gZQgKgEgKgFIAAgHIA8lLIFtAAIAUFS").cp();
	this.shape_11.setTransform(22.4,19.7);

	this.addChild(this.shape_11,this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.8,39.4);


(lib.BASSINprofil = function() {
	this.initialize();

	// Calque 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AEvlSQBFB8ASCUQATCSiIDSQmMBQjFgyQhAiZgGhBQgHhCAXiEQAWiGBShsII9AA").cp();
	this.shape_12.setTransform(43.4,33.9);

	this.addChild(this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,0,78.6,68);


(lib.TORSE = function() {
	this.initialize();

	// Calque 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A88E5C").ss(1,1,1).p("AH0K0QAAgIgBgJQgUhOhtiAQgWgbgNgaQBBjkDFiYIDBmjQmGk+mQALQmPgLmGE+IDBGjQDFCYBADkQgMAagWAbQhtCAgUBOQgBAFAAAF");
	this.shape_13.setTransform(79,69.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3D089").s().p("AH0JxQAAAOgJANQgRAcg1AVQglAOg2ALQinAjijgCQiiACingjQgzgKgkgOQhIgbgKgnQgCgJABgJQAAgFABgFQAUhOBtiAQAWgbAMgaQhAjkjFiWIjBmlQGGk+GPALQGQgLGGE+IjBGlQjFCWhBDkQANAaAWAbQBtCAAUBOQABAJAAAIIAAAA").cp();
	this.shape_14.setTransform(79,75.9);

	this.addChild(this.shape_14,this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,158,151.9);


(lib.TETE = function() {
	this.initialize();

	// Calque 2
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,1,1).p("ABbAiQBZhNB7AOAhaAgQhYhNh8AO");
	this.shape_15.setTransform(40,37);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2.6,1,1).p("AElgiQguBtiOg7AklgkQAvBsCOg6");
	this.shape_16.setTransform(40,51.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AjAgSQgsgMgVAEQgFABgdAJQgXAHAAgGQAAgGAZgYQAZgYA1AGQA0AHAjAsQAkAqADANQADANgCAFQgCAGgLgMQgEgEgUgaQgcgegrgNIAAAAAECgXQgWgEgrAMQgrAMgcAfQgVAZgDAEQgLAMgCgFQgDgGADgNQAFgNAjgqQAjgsA0gGQA1gHAZAYQAZAYAAAGQAAAGgXgHQgdgIgFgBIAAAA").cp();
	this.shape_17.setTransform(40,45.3);

	// Calque 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACNgXQAGgGAIAAQAJAAAGAJQAHAKAAALQAAAMgHAKQgGAJgJAAQgKAAgGgJQgGgIgBgLQAAgCAAgBQAAgLAHgKQABgBABgCIAAAAAiDACQgBALgGAIQgGAJgKAAQgJAAgHgJQgGgJAAgMQAAgMAGgKQAHgJAJAAQAIAAAGAGQABABABACQAHAKAAAMQAAAAAAACIAAAA").cp();
	this.shape_18.setTransform(40,47.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#540202").s().p("ACNgkQAEgHAFgFQATgWAaAAQAZAAATAWQATAVAAAbQAAAegTAVQgTAVgZAAQgaAAgTgVQgTgVAAgeQAAgCABgFQABAIAGAJQAGAJAKAAQAJAAAGgJQAHgKAAgLQAAgNgHgJQgGgJgJAAQgIAAgGAGIAAAAAiMgmQgGgGgIAAQgJAAgHAJQgGAJAAANQAAANAGAHQAHAKAJAAQAKAAAGgKQAGgHABgKQAAAFAAAFQAAAcgSAWQgTAUgaAAQgaAAgSgUQgTgWAAgcQAAgdATgWQASgVAaAAQAaAAATAVQAFAGAEAHIAAAA").cp();
	this.shape_19.setTransform(40,48.7);

	// Calque 3
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("AiGAAIENAA");
	this.shape_20.setTransform(40,82.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACIgZQAcgaAkgJQAkgJAfAOQAfAOAAApQAAApgnAMQgoAMghAMQghANgbgZQgagZAEgUQAEgUAcgZIAAAAAjVhMQAyALAfATQAfASABAhQABAhgaAZQgaAZghgNQgigMgngNQgogMAAgoQAAgpARgXQARgWAyAMIAAAA").cp();
	this.shape_21.setTransform(39.9,47.3);

	// Calque 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AGIgTQgKBegeCcQgEAWgHAWQgFARgBACQgfAngdAYQg/A1hYAqQhSAngqAAQgoAAhTgnQhXgqhAg1QgdgYgfgnQgBgCgFgRQgHgWgDgWQgeicgLheQgUivASgxQASgyAjg0QAjg1BfgzQBNgqCFABQCGgBBOAqQBeAzAjA1QAkA0ARAyQASAxgUCvIAAAA").cp();
	this.shape_22.setTransform(40.3,49.1);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,98.3);


(lib.PIED = function() {
	this.initialize();

	// Calque 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AEICPQAJA3hbAfQhbAfhsADQhuAChQgyQhRgzAihVQAjhUASiEQASiECSAIQCQAIBKCsQBJCpAKA3IAAAA").cp();
	this.shape_23.setTransform(26.6,26.3);

	this.addChild(this.shape_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.1,52.7);


(lib.MAIN = function() {
	this.initialize();

	// Calque 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3DFB6").s("#A88E5C").ss(1,1,1).p("AiHC6QhfhIAVhlQAUhjA+hGQA9hGBRAFQBTAGA6BFQA5BFABBUQAABVgZAMQgaALhnBIQhlBHhehIIAAAA").cp();
	this.shape_24.setTransform(21.4,22.3);

	this.addChild(this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,44.6);


(lib.JAMBEHT = function() {
	this.initialize();

	// Calque 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AkYHIQgxp1BZk/QEMjSEOEEQgfHeh3HgQkCCniqjjIAAAA").cp();
	this.shape_25.setTransform(29.9,58.7);

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59.8,117.5);


(lib.JAMBEBS = function() {
	this.initialize();

	// Calque 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AFYlJQAAhCgNguIgggyQjDigjnCDIgmAsQgtA5gkA6QhzC5AWCHQATB0A2BeQAfA2AGANQASAmAHArQAFAggCBGIgBA2QAKA0ARANQAQANATAQQASAQBggEQBdgFAdgkQAcgkAJgSIgHgfQgBgJAAgSQABgZgCgbQgKiaAwiBQAvh/ATgqQATgqAagZQAbgaAWguQAXgvgBhBIAAAA").cp();
	this.shape_26.setTransform(34.4,58);

	this.addChild(this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.9,116.1);


(lib.COU = function() {
	this.initialize();

	// Calque 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A88E5C").ss(1,1,1).p("ADfDcIgUlSQgcgyg6gbQg2gZhAABQhBABg2AaQg5AbgaAvIgTFM");
	this.shape_27.setTransform(22.4,11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3D089").s().p("ADfDBQhvA3hvgBQgBAAAAAAQgtAAgtgIQg4gLg4gZQgKgFgKgFIAAgGIAUlMQAZgvA5gbQA2gaBBgBQBAgBA2AZQA6AbAcAyIAUFS").cp();
	this.shape_28.setTransform(22.4,14.6);

	this.addChild(this.shape_28,this.shape_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10,44.8,49.5);


(lib.BRASAV = function() {
	this.initialize();

	// Calque 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("ACBlbQAwA2AABOQAAA7gbAtQh6D3BYDlIiuAnQhXiKgZjrQgOhpAThnQAShmAxg/QAxg+BAABQBCABAwA3IAAAA").cp();
	this.shape_29.setTransform(17.7,40.4);

	this.addChild(this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,80.9);


(lib.BRASAR = function() {
	this.initialize();

	// Calque 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A88E5C").ss(1,1,1).p("ACygLQhBBhgZBXQgbBjAABIQABBIgpAmQgnAnhNgzQhNgzgFgoQgFgnAlhiQAxiAAFg/QAEg6gPhDQgOg1gGgbQgLgvADgkQAGhYAwg+QAfgpAugO");
	this.shape_30.setTransform(17.9,47.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3D089").s().p("ACAgHQhCBhgYBXQgcBjABBIQAABIgnAmQgpAnhMgzQhNgzgFgoQgFgnAlhiQAwiAAFg/QAFg6gQhDQgOg1gGgbQgKgvACgkQAGhYAwg+QAggpAwgOQABgBACAAQASgFAVgBQAFgBAFAAQAIAAAIABQAfACAcAKQAoAOAiAeQA/A5AGAwQAHAugBA7QgBASgIAZQgJAZgRAfQgHAMgIANQgOAXgTAaQgDAFgEAGQgGAIgFAIIAAAA").cp();
	this.shape_31.setTransform(22.9,47.5);

	this.addChild(this.shape_31,this.shape_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.9,95.1);


(lib.BASSIN = function() {
	this.initialize();

	// Calque 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AI6BgQkdDbkdAIQkcgIkdjbQgBj6BRiZIHpgPIHqAPQBRCZgBD6IAAAA").cp();
	this.shape_32.setTransform(57,32.4);

	this.addChild(this.shape_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,64.7);


(lib.TETEdos = function() {
	this.initialize();

	// Calque 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AGIgTQgKBegeCcQgEAWgHAWQgFARgBACQgfAngdAYQg/A1hYAqQhSAngqAAQgoAAhTgnQhXgqhAg1QgdgYgfgnQgBgCgFgRQgHgWgDgWQgeicgLheQgUivASgxQASgyAjg0QAjg1BfgzQBNgqCFABQCGgBBOAqQBeAzAjA1QAkA0ARAyQASAxgUCvIAAAA").cp();
	this.shape_33.setTransform(40.3,49.1);

	this.addChild(this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,98.3);


(lib.JAMBEBSdos = function() {
	this.initialize();

	// Calque 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AExmvIgNg8QjCigjnCDIgmAsQguA5gvBkQgvBlAECLQAECIAvBTQAvBTAHANQAZAmAGArQAFAggBBGIgBA2QAKA1AQAMIAjAdQATAQBdgEQBfgFAdgkQAdgkAIgSQABgmABgnQABhPgCgGQAllWA1igQA2ifgDAEQgCADgBhjIAAAA").cp();
	this.shape_34.setTransform(35.1,58);

	this.addChild(this.shape_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,0,61.8,116.1);


(lib.TORSE34face = function() {
	this.initialize();

	// Calque 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A88E5C").ss(1,1,1).p("AJNHCQACABAPhbQAUhuAGgeQAcljgHhLQgGhLgah1Qgah2gbhDQgbhDgrhRQgshRjDgBQjDgBiUAkQiWAkiHBYQhIAvihCKQg/CBAOB/QAQCGBMBlQDZCuA2ETQgMAggWAmQhtC2gUBZQgBAFAAAF");
	this.shape_35.setTransform(74.3,94.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3D089").s().p("AJNG3QgYBUhnBBQg0Aih8A9QiTBKiKAjQhjAZhxAJQgjACgkACQgoABgkgDQgZgCgWgEQgGgBgEgBQgTgEgJgDQgKgDABgDIAAAAQAAgFABgGQAUhYBti3QAWglAMghQg2kTjZiuQhMhkgQiGQgOiAA/iBQChiJBIgvQCHhYCWglQCUgkDDABQDDABAsBRQArBSAbBDQAbBDAaB1QAaB2AGBLQAHBLgcFiQgGAfgUBuQgPBbgCgBIAAAA").cp();
	this.shape_36.setTransform(74.3,95.6);

	this.addChild(this.shape_36,this.shape_35);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.9,12.6,131,166.1);


(lib.TETE34face = function() {
	this.initialize();

	// Calque 2
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2.6,1,1).p("AB9gTQASgDARgFAEHhnQATgaALgjAjrCkQAggCAtggAh8BoQgSAPgQALAh8BoQAKgIAKgKAkGCgQgSgIgNgWAkGCgQAMAFAPgBADrhGQgfAdgsAOAB9gTQgKACgKABAEHhnQgMATgQAO");
	this.shape_37.setTransform(43,58.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.1,1,1).p("ABbixQBZh8B7gxAhahXQhYgih8BMAiGFfIENiJ");
	this.shape_38.setTransform(43,62.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ADmhzQgQAKgVAQQgPAMgNANQgZAZgSAfQgMATgGALQgEAHgCACQgLASgCgEQgDgEADgPQAFgPAjg8QAjg+A0ghQA1ghAZALQAZAMAAAGQAAAGgXAEQgBABgBAAQgcAGgEABQgLAEgRALIAAAAAhnB9QgGgEgMgJQgSgMgZAAQgNAAgPADQgVAFgQAGQgRAGgLAIQgFADgdAXQgBACgCABQgUARAAgGQAAgHAZgkQAZglA1gVQAngOAeALQAKAEAIAGQAOAKAIAHQAPANACAHQADAMgCAGQgCAHgLgHQgBgBgFgDIAAAA").cp();
	this.shape_39.setTransform(43,51.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#540202").s().p("ACrgTQgGABgFgCQAsgNAfgeQgRAagXAMQgNAGgLAAIAAAAAD1hRQgCAGgEAGQgCADgCADQgfAegsANQgFgBgFgDQgTgLAAgeQAAgFABgFQABAKAGAFQAGAGAKgEQAJgFAGgNQAHgMAAgNQAAgNgHgHQgCgCgDAAQANgNAPgMQAVgQAQgLQAFACAEADQATALAAAeQAAAYgNAYIAAAAAipCXQgLALgOAHQgYAMgRgJQAggDAtgfQgtAfggADQgCgBgBgBQgEgCgDgEQgMgMAAgYQAAgdATgfQAEgHAFgHQAQgGAVgEQAPgEANAAQgDAEgDAFQgGANAAANQAAANAGAFQAHAHAJgFQAKgFAGgNQAGgLABgLQAAAFAAAFQAAAdgSAfQgEAHgFAGQgFAHgGAGIAAAA").cp();
	this.shape_40.setTransform(43,57.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ACrgEQgYAOgVgJQAAAAAAAAQARgBARgFQgRAFgRABQgUgHgCgPQAGgKAMgVQASggAagZQACABADACQAGAGAAANQAAANgGAMQgHANgJAFQgKAFgGgHQgGgFgBgKQAAAGAAAEQAAAeASAMQAFADAFABQAFABAGAAIAAAAAEii2QAIAKAAAVQAAAogjAeQATgaAMgjQgMAjgTAaQgCACgCACQgHAGgGAFQAMgZAAgYQAAgdgTgMQgEgDgFgBQARgLALgDQAEgCAcgGIAAAAAiOATQAFAAAFABQAaACAFAZQgJgIgNgKQgJgGgKgEIAAAAAjkBFQgFAGgFAIQgSAeAAAeQAAAXALANQgGABgGABQgDABgCAAQgSgIgMgWQAMAWASAIQgjAFAAgnQAAgTADgRQACgBABgBQAegXAEgEQALgIASgGIAAAAAikA3QAZAAASAMQAMAJAGAFQgFAVgQAYQgSAPgQALQAQgLASgPQgBABAAAAQgUAdgYAJQAGgGAFgHQAFgGAEgHQATgeAAgeQAAgFgBgFQgBAMgFALQgHAMgJAFQgKAFgGgGQgHgGAAgNQAAgNAHgNQACgEADgEIAAAA").cp();
	this.shape_41.setTransform(42.9,56.3);

	// Calque 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AGIjFQgKBlgeCpQgEAYgHAZQgFAUgBADQgfA2gdAnQg/BWhYBWQhSBRgqAWQgoAUhTADQhXAEhAgWQgdgJgfgXQgBgCgFgOQgHgSgDgVQgeiMgLhbQgUikASg5QASg6AjhHQAjhGBfhjQBNhSCFhDQCGhGBOADQBeADAjAiQAkAjARAoQASApgUC5IAAAA").cp();
	this.shape_42.setTransform(40.3,53.7);

	this.addChild(this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,107.4);


(lib.PIED34face = function() {
	this.initialize();

	// Calque 1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AFdCXQgEAjgRAYQgQAZg6AMQg6AMg5AXQg6AYhaAAQg9AAhdguQgzgZhLgwQhUg1AihWQAjhTASiEQASiFCLgEQCJgFBIB3QBCBuAOATQA2BHBBAaQBPAggJBTIAAAA").cp();
	this.shape_43.setTransform(35.1,29.4);

	this.addChild(this.shape_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-1.1,70.1,61.2);


(lib.JAMBEBS34face = function() {
	this.initialize();

	// Calque 1
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("ACmncQAtA4AkA6QBzC6gWCGQgTB0g2BeQgfA3gGAMQgSAngHAqQgFAhACBGIABA1QgKA1gQANQgRANgTAQQgSAQhggDQhegCghgaQghgZABgrIAHggQABgIAAgSQgBgaACgbQAKiagwiBQgvh/gTgqQgTgqgagZQgbgZgWguQgXgvABhBQAAhCANgvIAggyQDDifDnCCIAmAt").cp();
	this.shape_44.setTransform(34.5,58.1);

	this.addChild(this.shape_44);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.9,116.2);


(lib.COU34face = function() {
	this.initialize();

	// Calque 1
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A88E5C").ss(1,1,1).p("ADfCqIgUlTImWAAIgTFM");
	this.shape_45.setTransform(22.4,5.7,1.119,1,0,0,-26.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3D089").s().p("ADfCPQhvA3hvgCQgBAAAAAAQgtABgtgJQg4gLg4gZQgKgEgKgFIAAgHIAUlLIGVAAIAUFS").cp();
	this.shape_46.setTransform(22.4,8.4,1.119,1,0,0,-26.6);

	this.addChild(this.shape_46,this.shape_45);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-21.4,44.8,55.5);


(lib.BASSIN34face = function() {
	this.initialize();

	// Calque 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AIujEQgXCNAXBrQADAMgdAsQgkA2g1AtQhQBGgoAWQhTAviTAfQipAli1giQisggiDhVQgLAUBxkbIHXinIH3jkQAcA+AIAaQAPA3gJA4IAAAA").cp();
	this.shape_47.setTransform(57.1,15.7);

	this.addChild(this.shape_47);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.9,-23.9,112.5,79.4);


(lib.TORSE34dos = function() {
	this.initialize();

	// Calque 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A88E5C").ss(1,1,1).p("AIKGxQACABAPhbQAUhuAGgfQAcliABgNQADgsgXh7Qgfirg4g4QiGiFh8g4Qh7g4jEAEQjGAEhYAyQhYAxhIB5QhJB5AUBOQAGAaAmB+QBFDVAXBbQAXBdAVBGQAWBGAIAtQgDAJAABHQABBFgIANQhtC3gUBYQgBAGAAAF");
	this.shape_48.setTransform(81,96.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F3D089").s().p("AIKGlQgYBUhnBCQg0Ahh8A+QiTBJiIAjQhkAZhyAJQgjADgkABQgoABgkgDQgYgCgXgEQgGgBgEgBQgSgDgKgDQgJgDAAgDIAAgBQAAgEABgGQAUhZBti2QAIgOgBhEQAAhHADgJQgIgugWhGQgVhGgXhdQgXhbhFjUQgmh/gGgaQgUhOBJh5QBIh4BYgyQBYgxDGgEQDEgEB7A4QB8A3CGCFQA4A4AfCrQAXB7gDAsQgBAOgcFiQgGAegUBuQgPBbgCgBIAAAA").cp();
	this.shape_49.setTransform(81,97.4);

	this.addChild(this.shape_49,this.shape_48);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21.6,16.1,119.1,162.6);


(lib.TETE34dos = function() {
	this.initialize();

	// Calque 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AGIjFQgKBlgeCpQgEAYgHAZQgFAUgBADQgfA2gdAnQg/BWhYBWQhSBRgqAWQgoAUhTADQhXAEhAgWQgdgJgfgXQgBgCgFgOQgHgSgDgVQgeiMgLhbQgUikASg5QASg6AjhHQAjhGBfhjQBNhSCFhDQCGhGBOADQBeADAjAiQAkAjARAoQASApgUC5IAAAA").cp();
	this.shape_50.setTransform(40.3,53.7);

	this.addChild(this.shape_50);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,107.4);


(lib.PIED34dos = function() {
	this.initialize();

	// Calque 1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AGIBxQgHAtgKAjQgKAjiRAUQhDAJhSgWQhBgShrgwQiEg7hBgsQhjhCAGg7QAIhCA8gmQA5gkBVAAQAQAAAgAPQAaAMAagHQAxgOBYgkQAxgUA5AAQCVgCArChQAsCfgGAsIAAAA").cp();
	this.shape_51.setTransform(6.2,26.1);

	this.addChild(this.shape_51);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-33,1,78.6,50.2);


(lib.BASSIN34dos = function() {
	this.initialize();

	// Calque 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F3D089").s("#A88E5C").ss(1,1,1).p("AIRi0QAWCAgUEDQg4AnjJBOQjJBOiUgOQnUhXAEjJQgGAGBSjQIGxg7IH1jkQAlBRAVCAIAAAA").cp();
	this.shape_52.setTransform(61.6,15.1);

	this.addChild(this.shape_52);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.5,-23.9,108.3,78.2);


(lib.ANIMEVUEDEFACE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,WALK:9},true);

	// MAIN
	this.instance = new lib.MAIN();
	this.instance.setTransform(194.4,294.2,1,1,0,0,180,20.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:196.4,y:288.2},4,cjs.Ease.get(1)).to({x:194.4,y:294.2},4,cjs.Ease.get(-0.99)).to({x:202,y:270.5},1).to({x:198.9,y:283.3},3,cjs.Ease.get(1)).to({x:214.5,y:289.2},3,cjs.Ease.get(1)).to({x:198.9,y:283.3},3,cjs.Ease.get(1)).to({x:202,y:270.5},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AV
	this.instance_1 = new lib.BRASAV();
	this.instance_1.setTransform(193.2,227.7,1,1,0,0,180,19.8,16.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:197.2,y:221.7},4,cjs.Ease.get(1)).to({x:193.2,y:227.7},4,cjs.Ease.get(-0.99)).to({skewX:4.4,skewY:184.5,x:204.6,y:217},1).to({x:198.3,y:219},3,cjs.Ease.get(1)).to({regX:19.7,skewX:-10.9,skewY:168.9,x:210.7,y:234.7},3,cjs.Ease.get(1)).to({regX:19.8,skewX:4.4,skewY:184.5,x:198.3,y:219},3,cjs.Ease.get(1)).to({x:204.6,y:217},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AR
	this.instance_2 = new lib.BRASAR();
	this.instance_2.setTransform(172.5,150.4,1,1,0,0,180,28.7,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.6,regY:18.7,skewX:-5,skewY:174.8,x:174.6,y:144.3},4,cjs.Ease.get(1)).to({regX:28.7,regY:18.8,skewX:0,skewY:180,x:172.5,y:150.4},4,cjs.Ease.get(-0.99)).to({regX:28.6,scaleX:1,scaleY:1,skewX:-15.6,skewY:164.2,x:168.6},1).to({regX:28.7,skewX:-5.7,skewY:174.1,x:174.5,y:141.5},3,cjs.Ease.get(1)).to({regY:18.7,skewX:-25.3,skewY:154.5,x:166.5,y:162.3},3,cjs.Ease.get(1)).to({regY:18.8,skewX:-5.7,skewY:174.1,x:174.5,y:141.5},3,cjs.Ease.get(1)).to({regX:28.6,skewX:-15.6,skewY:164.2,x:168.6,y:150.4},3,cjs.Ease.get(1)).wait(1));

	// MAIN  |back]
	this.instance_3 = new lib.MAIN();
	this.instance_3.setTransform(22.4,290.2,1,1,0,0,0,22.4,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:21.4,y:283.2},4,cjs.Ease.get(1)).to({x:22.4,y:290.2},4,cjs.Ease.get(-0.99)).to({rotation:-43.7,x:-15.8,y:287.3},1).to({x:13,y:289.1},3,cjs.Ease.get(1)).to({x:9.6,y:277.2},3,cjs.Ease.get(1)).to({x:13,y:289.1},3,cjs.Ease.get(1)).to({x:-15.8,y:287.3},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AV |back]
	this.instance_4 = new lib.BRASAV();
	this.instance_4.setTransform(22.6,219.7,1,1,0,0,0,20.8,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:19.6,y:212.7},4,cjs.Ease.get(1)).to({x:22.6,y:219.7},4,cjs.Ease.get(-0.99)).to({regX:20.9,rotation:2.8,x:3,y:219.9},1).to({x:28.3,y:218.5},3,cjs.Ease.get(1)).to({regX:20.8,rotation:-11.8,x:2.3,y:204.8},3,cjs.Ease.get(1)).to({regX:20.9,rotation:2.8,x:28.3,y:218.5},3,cjs.Ease.get(1)).to({rotation:2.8,x:3,y:219.9},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AR |back]
	this.instance_5 = new lib.BRASAR();
	this.instance_5.setTransform(43.3,147.4,1,1,0,0,0,29.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:15.7,rotation:4.2,x:42.3,y:140.3},4,cjs.Ease.get(1)).to({regY:15.8,rotation:0,x:43.3,y:147.4},4,cjs.Ease.get(-0.99)).to({regX:29.6,rotation:14.7,x:41.9,y:151.3},1).to({regX:29.7,regY:15.9,rotation:-9.1,x:40.9,y:139.1},3,cjs.Ease.get(1)).to({regX:29.6,regY:15.8,rotation:20.2,x:41.8,y:151.3},3,cjs.Ease.get(1)).to({regX:29.7,regY:15.9,rotation:-9.1,x:40.9,y:139.1},3,cjs.Ease.get(1)).to({regX:29.6,regY:15.8,rotation:14.7,x:41.9,y:151.3},3,cjs.Ease.get(1)).wait(1));

	// TETE
	this.instance_6 = new lib.TETE();
	this.instance_6.setTransform(105.3,89.2,1,1,0,0,0,39.3,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:86.2},4,cjs.Ease.get(1)).to({y:89.2},4,cjs.Ease.get(-0.99)).to({regX:39.4,regY:89.1,x:98.9,y:105.2},1).to({y:89.2},3).to({y:105.1},3).to({y:89.2},3).to({y:105.2},3).wait(1));

	// COU
	this.instance_7 = new lib.COU();
	this.instance_7.setTransform(104.2,111.5,1,1,0,0,0,21.4,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:103.5},4,cjs.Ease.get(1)).to({y:111.5},4,cjs.Ease.get(-0.99)).to({x:99.2,y:116.5},1).to({y:106.5},3).to({y:116.4},3).to({y:106.5},3).to({y:116.5},3).wait(1));

	// TORSE
	this.instance_8 = new lib.TORSE();
	this.instance_8.setTransform(106.3,218,1,1,0,0,0,78,114.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:1.03,x:106.4,y:217},4,cjs.Ease.get(1)).to({scaleY:1,x:106.3,y:218},4,cjs.Ease.get(-0.99)).to({x:105.3,y:225},1).to({y:209},3).to({x:101.3,y:228.4},3).to({x:105.3,y:209},3).to({y:225},3).wait(1));

	// BASSIN
	this.instance_9 = new lib.BASSIN();
	this.instance_9.setTransform(108.3,241.4,1,1,0,0,0,58,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({rotation:-8.1,x:104.5,y:243.5},0).to({rotation:0,x:107.6,y:230.7},3).to({rotation:3.8,x:105.1,y:250.7},3).to({rotation:0,x:107.6,y:230.7},3).to({rotation:-8.1,x:104.5,y:243.5},3).wait(1));

	// JAMBE-HT
	this.instance_10 = new lib.JAMBEHT();
	this.instance_10.setTransform(77,282.4,1,1,0,0,0,31.9,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({regX:28.8,regY:13.8,rotation:-10.8,x:135.2,y:284.4},0).to({scaleY:1.07,x:136.3,y:272.4},3).to({regY:13.7,scaleY:0.62,x:129,y:298.3},3).to({regY:13.8,scaleY:1.07,x:136.3,y:272.4},3).to({scaleY:1,x:135.2,y:284.4},3).wait(1));

	// JAMBE-BS
	this.instance_11 = new lib.JAMBEBS();
	this.instance_11.setTransform(69.5,377.3,1,1,0,0,0,44.5,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({regX:45.5,regY:11,skewX:9.7,skewY:-170.1,x:152.6,y:385.3},0).to({scaleY:0.89,y:377.3},3).to({regY:11.1,scaleY:0.55,x:141.5,y:353.4},3).to({regY:11,scaleY:0.89,x:152.6,y:377.3},3).to({scaleY:1,y:385.3},3).wait(1));

	// PIED |back]
	this.instance_12 = new lib.PIED();
	this.instance_12.setTransform(59.2,476.5,1,1,0,0,0,26.6,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({regX:23.6,regY:11.3,skewY:180,x:149.8,y:482.5},0).to({x:154.1,y:449.5},3).to({x:148,y:408.9},3).to({x:154.1,y:449.5},3).to({x:149.8,y:482.5},3).wait(1));

	// JAMBE-HT  |back]
	this.instance_13 = new lib.JAMBEHT();
	this.instance_13.setTransform(142,282.4,1,1,0,0,180,28.9,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({regX:31.8,scaleY:0.79,rotation:-7.1,skewY:0,x:79.5,y:285.3},0).to({scaleY:1,x:76.6,y:271.3},3).to({x:71.6,y:287.8},3).to({x:76.6,y:271.3},3).to({scaleY:0.79,x:79.5,y:285.3},3).wait(1));

	// JAMBE-BS  |back]
	this.instance_14 = new lib.JAMBEBS();
	this.instance_14.setTransform(145.5,376.3,1,1,0,0,180,45.5,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({regX:44.5,regY:12.1,scaleY:0.69,rotation:-24.8,skewY:0,x:80.8,y:353.2},0).to({scaleX:1,scaleY:1,rotation:-17.4,x:79.8,y:369.3},3).to({regX:44.4,rotation:-18.2,x:77.7,y:386.2},3).to({regX:44.5,rotation:-17.4,x:79.8,y:369.3},3).to({scaleX:1,scaleY:0.69,rotation:-24.8,x:80.8,y:353.2},3).wait(1));

	// PIED  |back]
	this.instance_15 = new lib.PIED();
	this.instance_15.setTransform(159.8,474.5,1,1,0,0,180,23.6,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({regX:26.6,regY:13.3,skewY:0,x:98.1,y:415.9},0).to({x:101.1,y:465.9},3).to({x:96,y:481.9},3).to({x:101.1,y:465.9},3).to({x:98.1,y:415.9},3).wait(1));

	// Calque 2
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(0,0,0,0.671)","rgba(0,0,0,0.502)","rgba(0,0,0,0.369)","rgba(0,0,0,0.031)"],[0,0.537,0.702,1],0,0,0,0,0,87).s().p("AJeEvQj8B9liAAQliAAj7h9Qj8h+AAixQAAixD8h9QD7h9FiAAQFiAAD8B9QD8B9AACxQAACxj8B+IAAAA").cp();
	this.shape_53.setTransform(105.1,503.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.8,546.8);


(lib.ANIMEVUEDEDOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,WALK:9},true);

	// COU
	this.instance_16 = new lib.COU();
	this.instance_16.setTransform(105.3,109.5,1,1,0,0,0,22.4,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({y:105.5},4,cjs.Ease.get(1)).to({y:109.5},4,cjs.Ease.get(-0.99)).to({regY:32.4,rotation:4.7,x:116.9,y:123.8},1,cjs.Ease.get(1)).to({regY:30.4,rotation:0,x:105.3,y:110.5},3).to({regY:32.4,rotation:-3.3,x:98.8,y:120},3).to({regY:30.4,rotation:0,x:105.3,y:110.5},3).to({regY:32.4,rotation:4.7,x:116.9,y:123.8},3).wait(1));

	// TETE
	this.instance_17 = new lib.TETEdos();
	this.instance_17.setTransform(106.4,71.2,1,1,0,0,0,40.3,71.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:67.2},4,cjs.Ease.get(1)).to({y:71.2},4,cjs.Ease.get(-0.99)).to({regX:43.4,regY:77.2,rotation:4.7,x:124,y:89},1,cjs.Ease.get(1)).to({regX:42.3,regY:83.2,rotation:0,x:108.4,y:83.2},3).to({regX:43.3,regY:77.1,rotation:-3.3,x:100.8,y:84.4},3).to({regX:42.3,regY:83.2,rotation:0,x:108.4,y:83.2},3).to({regX:43.4,regY:77.2,rotation:4.7,x:124,y:89},3).wait(1));

	// TORSE
	this.instance_18 = new lib.TORSE();
	this.instance_18.setTransform(101.4,234,1,1,0,0,0,73,130.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1.03,scaleY:1.08,y:236},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:234},4,cjs.Ease.get(-0.99)).to({regX:78,regY:114.7,rotation:4.7,x:111.1,y:222.1},1,cjs.Ease.get(1)).to({regX:80,regY:122.7,rotation:0,x:108.4,y:226},3).to({regX:78,regY:114.7,rotation:-3.3,x:106.3,y:225.3},3).to({regX:80,regY:122.7,rotation:0,x:108.4,y:226},3).to({regX:78,regY:114.7,rotation:4.7,x:111.1,y:222.1},3).wait(1));

	// BASSIN
	this.instance_19 = new lib.BASSIN();
	this.instance_19.setTransform(106.4,245.4,1,1,0,0,0,56,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(9).to({regX:58,regY:12.3,rotation:-6.5,x:108.4,y:250.4},0).to({regY:13.4,rotation:0,y:251.4},3).to({regY:12.4,rotation:10.5,x:112,y:251.6},3).to({regY:13.4,rotation:0,x:108.4,y:251.4},3).to({regY:12.3,rotation:-6.5,y:250.4},3).wait(1));

	// JAMBE-HT
	this.instance_20 = new lib.JAMBEHT();
	this.instance_20.setTransform(75.1,327.4,1,1,0,0,0,29.9,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(9).to({regY:19.7,scaleY:0.78,rotation:-8,x:78.5,y:289.4},0).to({scaleY:1,rotation:-6.5,x:76.4,y:288.8},3).to({regX:30,regY:19.8,rotation:-12.8,x:76.8,y:279.7},3).to({regY:19.7,scaleY:0.8,rotation:-3.4,x:82.2,y:259.7},3).to({regX:29.9,scaleY:0.78,rotation:-8,x:78.5,y:289.4},3).wait(1));

	// JAMBE-BS (dos)
	this.instance_21 = new lib.JAMBEBSdos();
	this.instance_21.setTransform(57.5,425.6,1,1,0,0,0,34.4,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({regX:44.5,regY:7,scaleY:0.91,rotation:-10.1,x:87.2,y:335.1},0).to({x:88.9,y:365.1},3).to({x:91.3,y:372.1},3).to({regY:7.1,scaleY:0.76,x:81,y:323.9},3).to({regY:7,scaleY:0.91,x:87.2,y:335.1},3).wait(1));

	// PIED
	this.instance_22 = new lib.PIED();
	this.instance_22.setTransform(59.3,489.5,1,1,0,0,0,26.6,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9).to({regY:10.3,x:95.5,y:412.5},0).to({x:96,y:451.3},3).to({x:101.2,y:474.5},3).to({x:81.2,y:399.5},3).to({x:95.5,y:412.5},3).wait(1));

	// JAMBE-HT
	this.instance_23 = new lib.JAMBEHT();
	this.instance_23.setTransform(141.1,327.4,1,1,0,0,180,29.9,58.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(9).to({regX:33.9,regY:22.7,skewX:-0.8,skewY:179,x:137.1,y:291.4},0).to({scaleY:0.66,skewX:0,x:135.2,y:281.4},3).to({scaleY:0.81,skewX:7.2,skewY:186.3},3).to({scaleY:0.98,skewX:5,skewY:184.1,x:136.4,y:289.6},3).to({scaleY:1,skewX:-0.8,skewY:179,x:137.1,y:291.4},3).wait(1));

	// JAMBE-BS (dos)
	this.instance_24 = new lib.JAMBEBSdos();
	this.instance_24.setTransform(156.2,430.1,1,1,0,0,180,34.4,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(9).to({regX:39.4,regY:11.9,skewX:9.4,skewY:189.5,x:154.3,y:379.1},0).to({regY:12,scaleY:0.57,skewX:13.1,skewY:193.2,x:148.5,y:333.8},3).to({regX:39.3,regY:11.9,scaleY:0.78,skewX:9.4,skewY:189.5,x:137.5,y:347.1},3).to({regX:39.5,regY:12,scaleY:0.88,skewX:13.1,skewY:193.2,x:143.4,y:382.8},3).to({regX:39.4,regY:11.9,scaleY:1,skewX:9.4,skewY:189.5,x:154.3,y:379.1},3).wait(1));

	// PIED
	this.instance_25 = new lib.PIED();
	this.instance_25.setTransform(154.2,489.5,1,1,0,0,180,26.6,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(9).to({regX:24.6,regY:13.3,x:141.8,y:477.5},0).to({x:139.8,y:386.5},3).to({x:131,y:414.5},3).to({x:132.5,y:467.5},3).to({x:141.8,y:477.5},3).wait(1));

	// MAIN
	this.instance_26 = new lib.MAIN();
	this.instance_26.setTransform(175.5,291.1,1,1,0,0,180,18.4,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).to({skewX:2.7,skewY:182.8,x:193.5,y:284.2},4,cjs.Ease.get(1)).to({skewX:0,skewY:180,x:175.5,y:291.1},4,cjs.Ease.get(-0.99)).to({regX:16.4,regY:9.3,x:111.3,y:247.3},1,cjs.Ease.get(1)).to({x:190.9,y:275},3,cjs.Ease.get(1)).to({x:214.8,y:272.3},3,cjs.Ease.get(1)).to({x:190.9,y:275},3,cjs.Ease.get(1)).to({x:111.3,y:247.3},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AV
	this.instance_27 = new lib.BRASAV();
	this.instance_27.setTransform(192.4,219.7,1,1,0,14.7,-165.2,20.7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_27).to({regX:20.8,skewX:10,skewY:-169.8,x:201.2,y:215.6},4,cjs.Ease.get(1)).to({regX:20.7,skewX:14.7,skewY:-165.1,x:192.4,y:219.7},4,cjs.Ease.get(-0.99)).to({skewX:57.7,skewY:-122.1,x:172.7,y:230.5},1,cjs.Ease.get(1)).to({skewX:9.7,skewY:-170.1,x:194.7,y:213.8},3,cjs.Ease.get(1)).to({regY:8.6,skewX:12.7,skewY:-167.1,x:226.7,y:203.6},3,cjs.Ease.get(1)).to({regY:8.5,skewX:9.7,skewY:-170.1,x:194.7,y:213.8},3,cjs.Ease.get(1)).to({skewX:57.7,skewY:-122.1,x:172.7,y:230.5},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AR
	this.instance_28 = new lib.BRASAR();
	this.instance_28.setTransform(176.7,150.4,1,1,0,-3.6,176.3,24.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).to({regX:24.7,regY:18.9,skewX:-8,skewY:171.8,x:176.6,y:143.4},4,cjs.Ease.get(1)).to({regX:24.6,regY:18.8,skewX:-3.5,skewY:176.3,x:176.7,y:150.4},4,cjs.Ease.get(-0.99)).to({skewX:15.7,skewY:195.8,x:178.4,y:163},1,cjs.Ease.get(1)).to({skewX:-5,skewY:174.8,x:179.5,y:149},3,cjs.Ease.get(1)).to({regX:24.7,skewX:-33.2,skewY:146.6,x:172.3,y:153.5},3,cjs.Ease.get(1)).to({regX:24.6,skewX:-5,skewY:174.8,x:179.5,y:149},3,cjs.Ease.get(1)).to({skewX:15.7,skewY:195.8,x:178.4,y:163},3,cjs.Ease.get(1)).wait(1));

	// MAIN
	this.instance_29 = new lib.MAIN();
	this.instance_29.setTransform(42.5,289.1,1,1,0,0,0,19.4,9.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({rotation:-5.8,x:21.8},4,cjs.Ease.get(1)).to({rotation:0,x:42.5},4,cjs.Ease.get(-0.99)).to({regX:21.4,regY:4.3,x:0,y:271},1,cjs.Ease.get(1)).to({x:18.9,y:280.8},3,cjs.Ease.get(1)).to({x:103,y:258},3,cjs.Ease.get(1)).to({x:18.9,y:280.8},3,cjs.Ease.get(1)).to({x:0,y:271},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AV
	this.instance_30 = new lib.BRASAV();
	this.instance_30.setTransform(20.7,221.8,1,1,-13.6,0,0,18.7,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({rotation:-5.6,x:12.1,y:217.7},4,cjs.Ease.get(1)).to({rotation:-13.5,x:20.7,y:221.8},4,cjs.Ease.get(-0.99)).to({regY:10.4,rotation:2,x:-0.1,y:207.8},1,cjs.Ease.get(1)).to({x:18.7,y:217.6},3,cjs.Ease.get(1)).to({regX:18.8,regY:10.5,rotation:-49.8,x:37.9,y:230},3,cjs.Ease.get(1)).to({regX:18.7,regY:10.4,rotation:2,x:18.7,y:217.6},3,cjs.Ease.get(1)).to({x:-0.1,y:207.8},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AR
	this.instance_31 = new lib.BRASAR();
	this.instance_31.setTransform(36.4,154.4,1,1,0,0,0,22.7,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({rotation:6,x:32.6,y:148.4},4,cjs.Ease.get(1)).to({rotation:0,x:36.4,y:154.4},4,cjs.Ease.get(-0.99)).to({rotation:26.5,x:43.1,y:153.2},1,cjs.Ease.get(1)).to({regY:22.7,rotation:4,x:39.1},3,cjs.Ease.get(1)).to({regX:22.6,regY:22.9,rotation:-10.6,x:38.5,y:166},3,cjs.Ease.get(1)).to({regX:22.7,regY:22.7,rotation:4,x:39.1,y:153.2},3,cjs.Ease.get(1)).to({regY:22.8,rotation:26.5,x:43.1},3,cjs.Ease.get(1)).wait(1));

	// OMBRE
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(0,0,0,0.671)","rgba(0,0,0,0.502)","rgba(0,0,0,0.369)","rgba(0,0,0,0.031)"],[0,0.537,0.702,1],0,0,0,0,0,87).s().p("AJeEvQj8B9liAAQliAAj7h9Qj8h+AAixQAAixD8h9QD7h9FiAAQFiAAD8B9QD8B9AACxQAACxj8B+IAAAA").cp();
	this.shape_54.setTransform(105.1,503.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,214.5,546.8);


(lib.ANIMEVUEDE34FACE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,WALK:9},true);

	// MAIN
	this.instance_32 = new lib.MAIN();
	this.instance_32.setTransform(21.4,308.2,1,1,0,0,0,21.4,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({x:32.9,y:297.2},4,cjs.Ease.get(1)).to({x:21.4,y:308.2},4,cjs.Ease.get(-0.99)).wait(1).to({x:-27.6,y:281.7},0).to({x:17.3,y:294.7},3).to({rotation:-110.7,x:183.9,y:215.1},3,cjs.Ease.get(1)).to({x:25.7,y:302.5},3).to({rotation:0,x:-27.6,y:281.7},3).wait(1));

	// BRAS-AV
	this.instance_33 = new lib.BRASAV();
	this.instance_33.setTransform(18.6,220.8,1,1,0,0,0,16.8,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({regX:16.7,rotation:-6,x:16.6,y:214.8},4,cjs.Ease.get(1)).to({regX:16.8,rotation:0,x:18.6,y:220.8},4,cjs.Ease.get(-0.99)).wait(1).to({regX:22.8,regY:7.5,rotation:19.2,x:1.4,y:201.3},0).to({rotation:-0.1,x:18.8,y:211.9},3).to({rotation:-90.5,x:99.5,y:215.4},3,cjs.Ease.get(1)).to({regX:22.9,rotation:3.2,x:29.6,y:218.4},3).to({regX:22.8,rotation:19.2,x:1.4,y:201.3},3).wait(1));

	// BRAS-AR
	this.instance_34 = new lib.BRASAR();
	this.instance_34.setTransform(37.3,145.4,1,1,0,0,0,23.7,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({regX:23.5,rotation:3.2,x:37.1,y:140.4},4,cjs.Ease.get(1)).to({regX:23.7,rotation:0,x:37.3,y:145.4},4,cjs.Ease.get(-0.99)).wait(1).to({regX:26.6,regY:11.8,rotation:24.5,x:47,y:141.8},0).to({regX:26.7,rotation:3.8,x:42.8,y:134.3},3).to({rotation:-40,x:63.7,y:147.3},3,cjs.Ease.get(1)).to({regX:26.6,regY:11.9,rotation:-5.8,x:40.2,y:142.4},3).to({regY:11.8,rotation:24.5,x:47,y:141.8},3).wait(1));

	// TETE (3-4 face)
	this.instance_35 = new lib.TETE34face();
	this.instance_35.setTransform(100.6,89.2,1,1,0,0,0,46.3,89.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({y:85.2},4,cjs.Ease.get(1)).to({y:89.2},4,cjs.Ease.get(-0.99)).wait(1).to({regX:39.3,regY:91.2,x:106.7,y:96.2},0).to({x:90.7,y:91.2},3).to({x:100.6,y:97.2},3).to({x:90.7,y:91.2},3).to({x:106.7,y:96.2},3).wait(1));

	// COU (3-4 face)
	this.instance_36 = new lib.COU34face();
	this.instance_36.setTransform(91.6,108.5,1,1,0,0,0,22.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).to({y:105.5},4,cjs.Ease.get(1)).to({y:108.5},4,cjs.Ease.get(-0.99)).wait(1).to({x:86,y:100.5},3).to({x:91.6,y:108.5},3).to({x:86,y:100.5},3).to({x:91.6,y:108.5},3).wait(1));

	// TORSE (3-4 face)
	this.instance_37 = new lib.TORSE34face();
	this.instance_37.setTransform(106,227.9,1,1,0,0,0,88,142.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_37).to({scaleX:1.03,scaleY:1.03,y:223.9},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,y:227.9},4,cjs.Ease.get(-0.99)).wait(1).to({regY:131.7,rotation:6.5,y:219.9},0).to({rotation:0,x:103.9,y:210.9},3).to({regY:131.8,rotation:-1.8,x:117.9,y:213.5},3).to({regY:131.7,rotation:0,x:103.9,y:210.9},3).to({rotation:6.5,x:106,y:219.9},3).wait(1));

	// BASSIN (3-4 face)
	this.instance_38 = new lib.BASSIN34face();
	this.instance_38.setTransform(95.6,270.4,1,1,0,0,0,57,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(9).to({regX:74,regY:-4.4,rotation:11.4,x:114.3,y:237.9},0).to({rotation:0,x:104.9,y:232.6},3).to({regY:-4.5,rotation:-18,x:110.1,y:221.6},3).to({rotation:0,x:113.6,y:229.6},3).to({regY:-4.4,rotation:11.4,x:114.3,y:237.9},3).wait(1));

	// JAMBE-HT
	this.instance_39 = new lib.JAMBEHT();
	this.instance_39.setTransform(68.4,283.5,1,1,-1.7,0,0,33.1,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(9).to({scaleX:1,scaleY:1,rotation:-36.6,x:60.5,y:269.6},0).to({rotation:8.4,x:63.4,y:270.6},3).to({regX:33,regY:13.9,rotation:5.2,x:86.1,y:284.2},3).to({regX:33.1,regY:14,rotation:-40.5,x:69.1,y:267.7},3).to({rotation:-36.6,x:60.5,y:269.6},3).wait(1));

	// JAMBE-BS
	this.instance_40 = new lib.JAMBEBS();
	this.instance_40.setTransform(57.4,388.5,1,1,4,0,0,39.1,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(9).to({regX:39,regY:22.8,rotation:-29,x:112.6,y:372.5},0).to({scaleX:1,scaleY:1,rotation:3.8,x:31.7,y:360.3},3).to({regY:22.7,scaleX:1,scaleY:1,rotation:43.3,x:52.7,y:372.8},3).to({x:102.5,y:341.1},3).to({regY:22.8,rotation:-29,x:112.6,y:372.5},3).wait(1));

	// PIED
	this.instance_41 = new lib.PIED34face();
	this.instance_41.setTransform(53.7,488,1,1,0,0,0,35.1,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(9).to({regX:23.1,regY:12.5,rotation:-23.1,x:150,y:459.1},0).to({regX:23.2,regY:12.4,scaleX:1,scaleY:1,rotation:4.7,x:14.7,y:448.1},3).to({regX:23.1,scaleX:1,scaleY:1,rotation:37.2,x:-10.9,y:423},3).to({x:44.3,y:395.3},3).to({regY:12.5,rotation:-23.1,x:150,y:459.1},3).wait(1));

	// JAMBE-HT
	this.instance_42 = new lib.JAMBEHT();
	this.instance_42.setTransform(124.9,259.1,1,1,0,-7.4,172.5,28.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(9).to({regX:28.5,regY:16.8,skewX:15.7,skewY:195.8,x:124.7},0).to({skewX:-34,skewY:145.8,x:124.8},3).to({regX:28.6,regY:16.7,skewX:-30.9,skewY:148.9,x:135.7,y:250.1},3).to({skewX:20,skewY:200.1,x:125.2,y:248.1},3).to({regX:28.5,regY:16.8,skewX:15.7,skewY:195.8,x:124.7,y:259.1},3).wait(1));

	// JAMBE-BS (3-4 face)
	this.instance_43 = new lib.JAMBEBS34face();
	this.instance_43.setTransform(128.6,351.5,1,1,0,3.3,-176.6,37.1,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(9).to({regY:23.4,skewX:44,skewY:-135.8,x:92,y:330.6},0).to({regY:23.3,skewX:40.4,skewY:-139.4,x:163.8,y:323.8},3).to({regY:23.4,skewX:-21.4,skewY:-201.5,x:180.1,y:340.9},3).to({skewX:14.7,skewY:-165.1,x:80.1,y:341.9},3).to({skewX:44,skewY:-135.8,x:92,y:330.6},3).wait(1));

	// PIED
	this.instance_44 = new lib.PIED34face();
	this.instance_44.setTransform(133.1,452,1,1,0,0,0,35.1,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(9).to({regX:32.1,regY:11.4,rotation:24,x:45.6,y:385.6},0).to({regX:32.3,regY:11.3,rotation:41.1,x:119.3,y:390.5},3).to({regX:32.1,regY:11.4,rotation:-27.3,x:223,y:415},3).to({rotation:0.7,x:63.4,y:419.5},3).to({rotation:24,x:45.6,y:385.6},3).wait(1));

	// MAIN
	this.instance_45 = new lib.MAIN();
	this.instance_45.setTransform(171.9,252.4,1,1,0,19.8,-160.1,20.4,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({x:176.8,y:248.4},4,cjs.Ease.get(1)).to({x:171.9,y:252.4},4,cjs.Ease.get(1)).to({x:263.9,y:218.9},1,cjs.Ease.get(1)).to({x:198.4,y:251.5},3,cjs.Ease.get(1)).to({skewX:-9.2,skewY:-189.3,x:63.9,y:240},3,cjs.Ease.get(1)).to({x:171.9,y:251.3},3).to({skewX:19.8,skewY:-160,x:263.9,y:218.9},3).wait(1));

	// BRAS-AV
	this.instance_46 = new lib.BRASAV();
	this.instance_46.setTransform(173,188.3,1,1,0,0,-179.9,17.8,11.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_46).to({regY:11.5,skewX:3.8,skewY:-176,x:177.2,y:185.3},4,cjs.Ease.get(1)).to({regY:11.4,skewX:0,skewY:-179.8,x:173,y:188.3},4,cjs.Ease.get(-0.99)).wait(1).to({skewX:-39.7,skewY:-219.8,x:202.6,y:169.9},0).to({regY:11.5,skewX:-21.8,skewY:-201.9,x:168.7,y:186.5},3,cjs.Ease.get(1)).to({regX:17.7,skewX:32.2,skewY:-147.6,x:100.2,y:188.6},3,cjs.Ease.get(1)).to({regX:17.8,skewX:-12.4,skewY:-192.5,x:161.1,y:192.5},3).to({regY:11.4,skewX:-39.7,skewY:-219.8,x:202.6,y:169.9},3).wait(1));

	// BRAS-AR
	this.instance_47 = new lib.BRASAR();
	this.instance_47.setTransform(133.9,116,1,1,0,-15.7,164.2,25.7,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_47).to({regX:25.6,regY:12.8,skewX:-19.1,skewY:160.7,x:136.6,y:109},4,cjs.Ease.get(1)).to({regX:25.7,regY:12.7,skewX:-15.6,skewY:164.2,x:133.9,y:116},4,cjs.Ease.get(-0.99)).wait(1).to({regX:25.6,regY:12.8,skewX:-42,skewY:137.8,x:137.6,y:124.6},0).to({skewX:-13.1,skewY:166.7,x:134,y:110.1},3,cjs.Ease.get(1)).to({skewX:37.4,skewY:217.5,y:115},3,cjs.Ease.get(1)).to({skewX:-7.8,skewY:172},3).to({skewX:-42,skewY:137.8,x:137.6,y:124.6},3).wait(1));

	// Calque 2
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["rgba(0,0,0,0.671)","rgba(0,0,0,0.502)","rgba(0,0,0,0.369)","rgba(0,0,0,0.031)"],[0,0.537,0.702,1],0,0,0,0,0,87).s().p("AJekuQD8B9AACxQAACxj8B+Qj8B9liAAQliAAj7h9Qj8h+AAixQAAixD8h9QD7h9FiAAQFiAAD8B9IAAAA").cp();
	this.shape_55.setTransform(90.1,502.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.9,545.8);


(lib.ANIMEVUEDE34DOS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,WALK:9},true);

	// MAIN
	this.instance_48 = new lib.MAIN();
	this.instance_48.setTransform(32.4,280,1,1,0,0,180,10.5,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({skewX:8.5,skewY:188.6,x:31.9,y:279.9},4,cjs.Ease.get(1)).to({skewX:0,skewY:180,x:32.4,y:280},4,cjs.Ease.get(-0.99)).wait(1).to({regX:7.4,regY:13.3,skewX:-80.8,skewY:99,x:109.6,y:285.9},0).to({skewX:-35.8,skewY:144,x:34.5},3).to({regX:7.5,skewX:-63.3,skewY:116.5,x:-58.7,y:226.1},3).to({skewX:-129.4,skewY:50.4,x:60.8,y:285.9},3).to({regX:7.4,skewX:-80.8,skewY:99,x:109.6},3).wait(1));

	// BRAS-AV
	this.instance_49 = new lib.BRASAV();
	this.instance_49.setTransform(61.9,226.7,1,1,0,27.9,-152,17.7,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_49).to({regX:17.9,regY:14.4,skewX:34.1,skewY:-145.7,x:67.5,y:229.2},4,cjs.Ease.get(1)).to({regX:17.7,regY:14.5,skewX:27.9,skewY:-151.9,x:61.9,y:226.7},4,cjs.Ease.get(-0.99)).wait(1).to({skewX:-15.3,skewY:-195.4,x:92.4,y:221.8},0).to({regX:17.8,regY:14.4,skewX:17,skewY:-162.8,x:54.3,y:224.9},3).to({regY:14.5,skewX:70.2,skewY:-109.6,x:10.3,y:222.7},3).to({regX:17.7,regY:14.4,skewX:4.2,skewY:-175.6,x:85.8,y:221.2},3).to({regY:14.5,skewX:-15.3,skewY:-195.4,x:92.4,y:221.8},3).wait(1));

	// BRAS-AR
	this.instance_50 = new lib.BRASAR();
	this.instance_50.setTransform(59.7,150.4,1,1,-12.4,0,0,22.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).to({rotation:-17.5,y:150.3},4,cjs.Ease.get(1)).to({rotation:-12.3,y:150.4},4,cjs.Ease.get(-0.99)).wait(1).to({regX:22.8,rotation:-33.5,x:59.8,y:164.3},0).to({regX:22.7,rotation:-3.5,x:59.3,y:150.1},3).to({regX:22.8,rotation:24,x:50.4,y:165.4},3).to({regY:20.9,rotation:-32,x:58.5,y:156.4},3).to({regY:20.8,rotation:-33.5,x:59.8,y:164.3},3).wait(1));

	// TETE (3-4 face)
	this.instance_51 = new lib.TETE34dos();
	this.instance_51.setTransform(105.3,95.2,1,1,0,0,0,40.3,95.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_51).to({regY:95.1,rotation:4.7,x:105.6,y:97.2},4,cjs.Ease.get(1)).to({regY:95.2,rotation:0,x:105.3,y:95.2},4,cjs.Ease.get(-0.99)).wait(1).to({regX:43.3,regY:94.2,x:104.3,y:121},0).to({x:108.3,y:108.2},3).to({y:119.2},3).to({y:108.2},3).to({x:104.3,y:121},3).wait(1));

	// COU (3-4 face)
	this.instance_52 = new lib.COU34face();
	this.instance_52.setTransform(102.3,117.5,1,1,0,0,0,22.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_52).to({rotation:5.2},4,cjs.Ease.get(1)).to({rotation:0},4,cjs.Ease.get(1)).to({y:122.5},1,cjs.Ease.get(1)).to({y:108.5},3).to({y:122.5},3).to({y:108.5},3).to({y:122.5},3).wait(1));

	// TORSE (3-4 dos)
	this.instance_53 = new lib.TORSE34dos();
	this.instance_53.setTransform(103.9,233.8,1,1,0,0,0,79,138.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({scaleX:1.02,scaleY:1.02},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).to({regX:78,regY:145.7,skewY:180,x:104.9,y:246.4},1,cjs.Ease.get(1)).to({y:236.4},3).to({y:246.4},3).to({y:236.4},3).to({y:246.4},3).wait(1));

	// BASSIN (3-4 dos)
	this.instance_54 = new lib.BASSIN34dos();
	this.instance_54.setTransform(100.2,228.9,1,1,0,0,180,62,-10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(8).to({regX:60,regY:-2.4,x:98,y:250},1,cjs.Ease.get(1)).to({regX:59,regY:-6.5,x:103.2,y:232.9},3).to({regX:61,regY:-4.5,x:97,y:247.9},3).to({regX:59,regY:-6.5,x:103.2,y:232.9},3).to({regX:60,regY:-2.4,x:98,y:250},3).wait(1));

	// JAMBE-HT
	this.instance_55 = new lib.JAMBEHT();
	this.instance_55.setTransform(75.1,286.9,1,1,11.9,0,0,33.1,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(9).to({regX:33,rotation:35.4,x:75,y:286.8},0).to({rotation:-16.4,x:75.2,y:277.3},3).to({rotation:-18.9,x:75.1,y:286.9},3).to({regX:33.1,rotation:70,x:78.1,y:282.6},3).to({regX:33,rotation:35.4,x:75,y:286.8},3).wait(1));

	// JAMBE-BS
	this.instance_56 = new lib.JAMBEBS();
	this.instance_56.setTransform(55,380.3,0.999,0.999,0,-6.2,173.7,39,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(9).to({regX:38.9,regY:22.6,skewX:23.4,skewY:203.5,x:20.4,y:365.2},0).to({regX:39,skewX:1.7,skewY:181.8,x:96.9,y:379.2},3).to({regY:22.7,skewX:-65.9,skewY:113.9,x:102,y:380.2},3).to({skewX:-40.7,skewY:139.1,x:0.2,y:311.9},3).to({regX:38.9,regY:22.6,skewX:23.4,skewY:203.5,x:20.4,y:365.2},3).wait(1));

	// PIED (3-4 dos)
	this.instance_57 = new lib.PIED34dos();
	this.instance_57.setTransform(74.7,482.3,1,1,0,0,0,26.6,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(9).to({regX:24.6,regY:19.3,rotation:46.7,x:-0.7,y:444.4},0).to({rotation:0.7,x:102.2,y:466.4},3).to({regY:19.4,rotation:-95.4,x:193.8,y:413.3},3).to({rotation:-58.4,x:62.4,y:372.9},3).to({regY:19.3,rotation:46.7,x:-0.7,y:444.4},3).wait(1));

	// JAMBE-HT
	this.instance_58 = new lib.JAMBEHT();
	this.instance_58.setTransform(127.3,266.4,1,1,0,10.8,-169.1,28.6,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(9).to({regY:16.8,skewX:-23.2,skewY:-203.3,x:131.4,y:297.2},0).to({skewX:51.3,skewY:-128.5,x:133.3,y:286.1},3).to({skewX:71.2,skewY:-108.6,x:128.8,y:277.4},3).to({regY:16.7,skewX:6.7,skewY:-173.1,x:122.7,y:277.2},3).to({regY:16.8,skewX:-23.2,skewY:-203.3,x:131.4,y:297.2},3).wait(1));

	// JAMBE-BS (3-4 face)
	this.instance_59 = new lib.JAMBEBS34face();
	this.instance_59.setTransform(131.3,366.3,0.999,0.999,-7.7,0,0,37.1,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(9).to({rotation:-60.8,x:180,y:364.9},0).to({regX:37,regY:23.5,rotation:-37.6,x:90.1,y:336.1},3).to({regY:23.4,rotation:36.4,x:54.3,y:323.2},3).to({rotation:-5.2,x:131.7,y:369.2},3).to({regX:37.1,rotation:-60.8,x:180,y:364.9},3).wait(1));

	// PIED (3-4 dos)
	this.instance_60 = new lib.PIED34dos();
	this.instance_60.setTransform(152.4,464.6,1,1,0,0,0,26.6,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(9).to({regX:18.6,regY:21.3,rotation:-57,x:242.6,y:406.7},0).to({rotation:-104,x:146.5,y:404.9},3).to({rotation:47.3,x:3.6,y:385.9},3).to({regX:18.4,regY:21.2,rotation:5.4,x:134,y:454.6},3).to({regX:18.6,regY:21.3,rotation:-57,x:242.6,y:406.7},3).wait(1));

	// MAIN
	this.instance_61 = new lib.MAIN();
	this.instance_61.setTransform(125.4,286.2,1,1,0,0,0,21.4,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(8).to({rotation:72.7,x:31.2,y:229.2},1,cjs.Ease.get(1)).to({rotation:57.5,x:171.8,y:277.9},3).to({rotation:-7.3,x:227.2,y:287.9},3).to({rotation:60.4,x:38,y:268.2},3).to({rotation:72.7,x:31.2,y:229.2},3).wait(1));

	// BRAS-AV
	this.instance_62 = new lib.BRASAV();
	this.instance_62.setTransform(163.9,214.2,0.999,0.999,0,28.6,-151.3,17.7,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_62).to({x:152.9,y:218.2},4,cjs.Ease.get(1)).to({x:163.9,y:214.2},4,cjs.Ease.get(-0.99)).to({skewX:70.5,skewY:-109.3,x:98.5,y:209.9},1,cjs.Ease.get(1)).to({regX:17.8,regY:14.3,skewX:7.6,skewY:-172.2,x:175.9,y:197.9},3).to({regX:17.7,regY:14.5,skewX:-19.6,skewY:-199.7,x:202.6,y:214},3).to({regX:17.8,skewX:48.2,skewY:-131.6,x:97.3,y:217.6},3).to({regX:17.7,skewX:70.5,skewY:-109.3,x:98.5,y:209.9},3).wait(1));

	// BRAS-AR
	this.instance_63 = new lib.BRASAR();
	this.instance_63.setTransform(141.1,143,1,1,0,-8.9,171,22.7,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({skewX:-2.5,skewY:177.3,x:139.8,y:143.1},4,cjs.Ease.get(1)).to({skewX:-8.8,skewY:171,x:141.1,y:143},4,cjs.Ease.get(-0.99)).to({regY:20.7,skewX:46.4,skewY:226.5,x:148,y:158},1,cjs.Ease.get(1)).to({skewX:-16.3,skewY:163.5,x:148.3,y:137.4},3).to({skewX:-34.6,skewY:145.2,x:148,y:157.9},3).to({regX:22.8,skewX:33.2,skewY:213.3,x:118,y:140.9},3).to({regX:22.7,skewX:46.4,skewY:226.5,x:148,y:158},3).wait(1));

	// Calque 2
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(0,0,0,0.671)","rgba(0,0,0,0.502)","rgba(0,0,0,0.369)","rgba(0,0,0,0.031)"],[0,0.537,0.702,1],0,0,0,0,0,87).s().p("AJekuQD8B9AACxQAACxj8B+Qj8B9liAAQliAAj7h9Qj8h+AAixQAAixD8h9QD7h9FiAAQFiAAD8B9IAAAA").cp();
	this.shape_56.setTransform(94.7,502.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.4,545.8);


(lib.ANIMEPROFIL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// MAIN
	this.instance_64 = new lib.MAIN();
	this.instance_64.setTransform(46.1,281,1,1,-21.4,0,0,20.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(9).to({rotation:14.2,x:-46.6,y:237.5},0).to({regY:4.4,rotation:-46.2,x:15.4,y:259.1},3,cjs.Ease.get(1)).to({regY:4.3,rotation:-97.3,x:135.6,y:260.6},3,cjs.Ease.get(1)).wait(3).to({rotation:-18.8,x:-42,y:247.4},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AV
	this.instance_65 = new lib.BRASAV();
	this.instance_65.setTransform(25.3,218,1,1,-19.4,0,0,22.7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_65).wait(9).to({rotation:28.7,x:-6.7,y:186},0).to({regX:22.8,rotation:-7.8,x:18.5,y:188.2},3,cjs.Ease.get(1)).to({regY:11.6,rotation:-58.9,x:82.4,y:213.7},3,cjs.Ease.get(1)).wait(3).to({regX:22.7,regY:11.5,rotation:19.5,x:-6.7,y:186},3,cjs.Ease.get(1)).wait(1));

	// BRAS-AR
	this.instance_66 = new lib.BRASAR();
	this.instance_66.setTransform(37,174.6,1,1,0,0,0,22.7,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_66).wait(9).to({regX:29.6,regY:18.7,rotation:40.1,x:47.9,y:144.9},0).to({rotation:12.7,x:48.1,y:126.5},3,cjs.Ease.get(1)).to({rotation:-43.2,x:46.7,y:147.4},3,cjs.Ease.get(1)).wait(3).to({rotation:40.1,x:47.9,y:144.9},3,cjs.Ease.get(1)).wait(1));

	// TETE (profil)
	this.instance_67 = new lib.TETEprofil();
	this.instance_67.setTransform(44.9,49.1,1,1,0,0,0,40.3,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_67).wait(9).to({regX:49.4,regY:89.2,rotation:2.5,x:89.9,y:110.1},0).to({y:91.3},3).to({y:110.1},3).to({y:91.3},3).to({y:110.1},3).wait(1));

	// COU (profil)
	this.instance_68 = new lib.COUprofil();
	this.instance_68.setTransform(47.8,96.3,1,1,0,0,0,22.4,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_68).wait(9).to({regY:36.4,rotation:2.5,x:66.1,y:117.9},0).to({y:99.1},3).to({y:117.9},3).to({y:99.1},3).to({y:117.9},3).wait(1));

	// TORSE (profil)
	this.instance_69 = new lib.TORSEprofil();
	this.instance_69.setTransform(51.8,174.6,1,1,0,0,0,60.1,75.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_69).wait(9).to({regX:71,regY:118.2,rotation:7.7,x:61.5,y:227.6},0).to({y:208.8},3).to({y:227.6},3).to({y:208.8},3).to({y:227.6},3).wait(1));

	// BASSIN (profil)
	this.instance_70 = new lib.BASSINprofil();
	this.instance_70.setTransform(72.6,263.7,1,1,0,0,0,57,32.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_70).wait(9).to({regX:46,regY:13.4,rotation:11.2,x:60.7,y:249.7},0).to({y:230.9},3).to({y:249.7},3).to({y:230.9},3).to({y:249.7},3).wait(1));

	// JAMBE-HT
	this.instance_71 = new lib.JAMBEHT();
	this.instance_71.setTransform(55.4,277.6,1,1,-3.1,0,0,31.9,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_71).wait(9).to({regY:15.7,rotation:-43.3,x:44.7,y:287},0).to({rotation:-15.8,x:44.6,y:285.7},3).to({regY:15.8,rotation:17.9,x:52.1,y:276},3).to({regY:15.7,rotation:-18.8,y:275.9},3).to({rotation:-43.3,x:44.7,y:287},3).wait(1));

	// JAMBE-BS
	this.instance_72 = new lib.JAMBEBS();
	this.instance_72.setTransform(47.2,418.6,1,1,-7.4,0,0,34.5,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_72).wait(9).to({regX:52.1,regY:17.8,rotation:-32.8,x:110.8,y:361.7},0).to({regX:52.2,regY:17.9,rotation:12,x:66,y:379},3).to({rotation:47.9,x:18.1,y:369.8},3).to({regX:52.3,rotation:62.5,x:77,y:365.6},3).to({regX:52.1,regY:17.8,rotation:-32.8,x:110.8,y:361.7},3).wait(1));

	// PIED
	this.instance_73 = new lib.PIEDprofil();
	this.instance_73.setTransform(136.6,445.7,1,1,-46.8,0,0,23.6,7.3);
	this.instance_73._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_73).wait(9).to({_off:false},0).to({regX:23.5,rotation:-1.3,x:27.5,y:454.6},3).to({regY:7.4,rotation:40.8,x:-66.4,y:415.4},3).to({regY:7.3,rotation:75.5,x:-6.6,y:390.3},3).to({regX:23.6,rotation:-46.7,x:136.6,y:445.7},3).wait(1));

	// Calque 16
	this.instance_74 = new lib.PIED();
	this.instance_74.setTransform(53.3,479.8,1,1,0,0,0,26.6,26.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).to({_off:true},9).wait(13));

	// JAMBE-HT
	this.instance_75 = new lib.JAMBEHT();
	this.instance_75.setTransform(65.1,263.7,1,1,-15.4,0,0,31.8,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_75).wait(9).to({regX:31.9,rotation:13.4,x:54.6,y:276.9},0).to({rotation:-41.7,y:276.8},3).to({rotation:-39.6,x:50,y:284},3).to({regX:31.8,rotation:3.9,x:51.1,y:272.1},3).to({regX:31.9,rotation:13.4,x:54.6,y:276.9},3).wait(1));

	// JAMBE-BS
	this.instance_76 = new lib.JAMBEBS();
	this.instance_76.setTransform(87.5,353.2,1,1,-2.2,0,0,52.2,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_76).wait(9).to({regX:52.1,rotation:51.2,x:32.4,y:359.6},0).to({regX:52.2,regY:17.9,rotation:56.2,x:103.8,y:345.7},3).to({regX:52.3,rotation:-33.8,x:113.1,y:362.5},3).to({rotation:14.3,x:52,y:361.5},3).to({regX:52.1,regY:17.8,rotation:51.2,x:32.4,y:359.6},3).wait(1));

	// PIED (profil)
	this.instance_77 = new lib.PIEDprofil();
	this.instance_77.setTransform(67.9,429.8,1,1,1.8,0,0,23.6,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_77).wait(9).to({regY:7.4,rotation:57.5,x:-48,y:401},0).to({regX:23.5,rotation:92.2,x:22.3,y:388.9},3).to({regX:23.6,rotation:-40.2,x:142.6,y:443.3},3).to({rotation:-2,x:10.9,y:439.3},3).to({rotation:57.5,x:-48,y:401},3).wait(1));

	// MAIN
	this.instance_78 = new lib.MAIN();
	this.instance_78.setTransform(100.1,280.6,1,1,-68.1,0,0,20.4,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_78).wait(9).to({regY:4.4,rotation:-129.9,x:177.7,y:233.4},0).to({regY:4.3,rotation:-44.2,x:72.3,y:253.5},3).to({regY:4.4,rotation:-0.2,x:-32.2,y:232.4},3).to({rotation:-0.2},3).to({regY:4.3,rotation:-95.2,x:177.7,y:233.5},3).wait(1));

	// BRAS-AV
	this.instance_79 = new lib.BRASAV();
	this.instance_79.setTransform(95.5,217.4,1,1,-19.4,0,0,22.8,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_79).wait(9).to({rotation:-72.2,x:120,y:205.1},0).to({rotation:-21.2,x:56.1,y:206.1},3).to({regX:22.7,rotation:22.6,x:0.9,y:177.3},3).wait(3).to({regX:22.8,rotation:-72.2,x:120,y:205.1},3).wait(1));

	// BRAS-AR
	this.instance_80 = new lib.BRASAR();
	this.instance_80.setTransform(83.2,145.6,1,1,-20.4,0,0,29.6,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_80).wait(9).to({regX:29.7,regY:18.9,rotation:-44.6,x:83.5,y:146.3},0).to({regY:18.8,rotation:6.2,x:78.7,y:140.5},3).to({regY:18.9,rotation:47.2,x:61.2,y:142.8},3).wait(3).to({rotation:-44.6,x:83.5,y:146.3},3).wait(1));

	// Calque 2
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["rgba(0,0,0,0.671)","rgba(0,0,0,0.502)","rgba(0,0,0,0.369)","rgba(0,0,0,0.031)"],[0,0.537,0.702,1],0,0,0,0,0,87).s().p("ANaAAQAACwj8B+Qj8B+liAAQliAAj7h+Qj8h+AAiwQAAixD8h+QD7h9FiAAQFiAAD8B9QD8B+AACxIAAAA").cp();
	this.shape_57.setTransform(41.1,495);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,0,190.5,537.9);


(lib.perso_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{IDLE:0,IDLE_D:9,IDLE_TG:18,IDLE_H:27,IDLE_B:36,W_D:45,W_BD:58,W_TG:71,W_B:84,W_H:97,ROCK:110},true);

	// timeline functions:
	this.frame_8 = function() {
		this.gotoAndPlay("IDLE");
	}
	this.frame_57 = function() {
		this.gotoAndPlay("W_D");
	}
	this.frame_70 = function() {
		this.gotoAndPlay("W_BD");
	}
	this.frame_83 = function() {
		this.gotoAndPlay("W_TG");
	}
	this.frame_96 = function() {
		this.gotoAndPlay("W_B");
	}
	this.frame_109 = function() {
		this.gotoAndPlay("W_H");
	}
	this.frame_168 = function() {
		this.gotoAndPlay("ROCK");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(49).call(this.frame_57).wait(13).call(this.frame_70).wait(13).call(this.frame_83).wait(13).call(this.frame_96).wait(13).call(this.frame_109).wait(59).call(this.frame_168).wait(1));

	// ANIME VUE DE 3-4 FACE
	this.instance_81 = new lib.ANIMEVUEDE34FACE("synched",0,false);
	this.instance_81.setTransform(0,-50.6,0.22,0.22,0,0,0,102.3,257.8);

	this.instance_82 = new lib.ANIMEPROFIL("synched",0,false);
	this.instance_82.setTransform(-2.1,-49.4,0.22,0.22,0,0,0,52.8,255.5);

	this.instance_83 = new lib.ANIMEVUEDE34DOS("synched",0,false);
	this.instance_83.setTransform(-0.9,-51.3,0.22,0.22,0,0,0,92.5,253.7);

	this.instance_84 = new lib.ANIMEVUEDEDOS("synched",0,false);
	this.instance_84.setTransform(-0.7,-50.8,0.22,0.22,0,0,0,107.3,257.9);

	this.instance_85 = new lib.ANIMEVUEDEFACE("synched",0,false);
	this.instance_85.setTransform(-22.5,-107.3,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_81,p:{startPosition:0}}]}).to({state:[{t:this.instance_82,p:{startPosition:0}}]},9).to({state:[{t:this.instance_83,p:{startPosition:0}}]},9).to({state:[{t:this.instance_84,p:{startPosition:0}}]},9).to({state:[{t:this.instance_85,p:{startPosition:0,loop:false}}]},9).to({state:[{t:this.instance_82,p:{startPosition:9}}]},9).to({state:[{t:this.instance_81,p:{startPosition:9}}]},13).to({state:[{t:this.instance_83,p:{startPosition:9}}]},13).to({state:[{t:this.instance_85,p:{startPosition:9,loop:false}}]},13).to({state:[{t:this.instance_84,p:{startPosition:9}}]},13).to({state:[{t:this.instance_85,p:{startPosition:9,loop:undefined}}]},13).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.3,-108.3,75.7,121);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
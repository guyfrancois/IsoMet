(function () { "use strict";
var $estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var HxOverrides = function() { }
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var Reflect = function() { }
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
var Std = function() { }
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	__class__: StringBuf
}
var ValueType = { __ename__ : true, __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumIndex = function(e) {
	return e[1];
}
var events = {}
events.Key = function() { }
events.Key.__name__ = true;
events.Mouse = function() { }
events.Mouse.__name__ = true;
events.PreloadJS = function() { }
events.PreloadJS.__name__ = true;
events.Window = function() { }
events.Window.__name__ = true;
var gf = {}
gf.GTools = function() { }
gf.GTools.__name__ = true;
gf.GTools.distance_manhattan = function(x0,y0,x1,y1) {
	return gf.GTools.helper_absSub(x0,x1) + gf.GTools.helper_absSub(y0,y1);
}
gf.GTools.helper_absSub = function(a,b) {
	return a > b?a - b:b - a;
}
gf.GTools.fdistance_manhattan = function(x0,y0,x1,y1) {
	return gf.GTools.fhelper_absSub(x0,x1) + gf.GTools.fhelper_absSub(y0,y1);
}
gf.GTools.fhelper_absSub = function(a,b) {
	return a > b?a - b:b - a;
}
gf.channels = {}
gf.channels.DataBringerEvent = function(type,initialData) {
	this.type = type;
	this.initialData = initialData;
};
gf.channels.DataBringerEvent.__name__ = true;
gf.channels.DataBringerEvent.getChannel = function() {
	if(gf.channels.DataBringerEvent._channel == null) gf.channels.DataBringerEvent._channel = gf.channels.EventChannel.get(gf.channels.DataBringerEvent.EVENT_CHANNEL_NAME);
	return gf.channels.DataBringerEvent._channel;
}
gf.channels.DataBringerEvent.prototype = {
	dispatch: function() {
		gf.channels.DataBringerEvent.getChannel().dispatchEvent(this);
	}
	,__class__: gf.channels.DataBringerEvent
}
var haxe = {}
haxe.ds = {}
haxe.ds.StringMap = function() {
	this.h = { };
};
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
gf.channels.EventChannel = function() {
};
gf.channels.EventChannel.__name__ = true;
gf.channels.EventChannel.get = function(channelName) {
	if(channelName == null) channelName = gf.channels.EventChannel.defaultChannel;
	var aChan;
	if(gf.channels.EventChannel._channels.exists(channelName)) aChan = gf.channels.EventChannel._channels.get(channelName); else {
		aChan = new gf.channels.EventChannel();
		gf.channels.EventChannel._channels.set(channelName,aChan);
	}
	return aChan;
}
gf.channels.EventChannel.__super__ = createjs.EventDispatcher;
gf.channels.EventChannel.prototype = $extend(createjs.EventDispatcher.prototype,{
	addEventListener: function(type,listener) {
		return createjs.EventDispatcher.prototype.addEventListener.call(this,type,listener);
	}
	,__class__: gf.channels.EventChannel
});
haxe.Json = function() {
};
haxe.Json.__name__ = true;
haxe.Json.stringify = function(value,replacer) {
	return new haxe.Json().toString(value,replacer);
}
haxe.Json.prototype = {
	quote: function(s) {
		this.buf.b += "\"";
		var i = 0;
		while(true) {
			var c = s.charCodeAt(i++);
			if(c != c) break;
			switch(c) {
			case 34:
				this.buf.b += "\\\"";
				break;
			case 92:
				this.buf.b += "\\\\";
				break;
			case 10:
				this.buf.b += "\\n";
				break;
			case 13:
				this.buf.b += "\\r";
				break;
			case 9:
				this.buf.b += "\\t";
				break;
			case 8:
				this.buf.b += "\\b";
				break;
			case 12:
				this.buf.b += "\\f";
				break;
			default:
				this.buf.b += String.fromCharCode(c);
			}
		}
		this.buf.b += "\"";
	}
	,toStringRec: function(k,v) {
		if(this.replacer != null) v = this.replacer(k,v);
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 8:
			this.buf.b += "\"???\"";
			break;
		case 4:
			this.objString(v);
			break;
		case 1:
			var v1 = v;
			this.buf.b += Std.string(v1);
			break;
		case 2:
			this.buf.b += Std.string(Math.isFinite(v)?v:"null");
			break;
		case 5:
			this.buf.b += "\"<fun>\"";
			break;
		case 6:
			var _g_eTClass_0 = $e[2];
			if(_g_eTClass_0 == String) this.quote(v); else if(_g_eTClass_0 == Array) {
				var v1 = v;
				this.buf.b += "[";
				var len = v1.length;
				if(len > 0) {
					this.toStringRec(0,v1[0]);
					var i = 1;
					while(i < len) {
						this.buf.b += ",";
						this.toStringRec(i,v1[i++]);
					}
				}
				this.buf.b += "]";
			} else if(_g_eTClass_0 == haxe.ds.StringMap) {
				var v1 = v;
				var o = { };
				var $it0 = v1.keys();
				while( $it0.hasNext() ) {
					var k1 = $it0.next();
					o[k1] = v1.get(k1);
				}
				this.objString(o);
			} else this.objString(v);
			break;
		case 7:
			var i = Type.enumIndex(v);
			var v1 = i;
			this.buf.b += Std.string(v1);
			break;
		case 3:
			var v1 = v;
			this.buf.b += Std.string(v1);
			break;
		case 0:
			this.buf.b += "null";
			break;
		}
	}
	,objString: function(v) {
		this.fieldsString(v,Reflect.fields(v));
	}
	,fieldsString: function(v,fields) {
		var first = true;
		this.buf.b += "{";
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			var value = Reflect.field(v,f);
			if(Reflect.isFunction(value)) continue;
			if(first) first = false; else this.buf.b += ",";
			this.quote(f);
			this.buf.b += ":";
			this.toStringRec(f,value);
		}
		this.buf.b += "}";
	}
	,toString: function(v,replacer) {
		this.buf = new StringBuf();
		this.replacer = replacer;
		this.toStringRec("",v);
		return this.buf.b;
	}
	,__class__: haxe.Json
}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe.Timer.__name__ = true;
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.prototype = {
	run: function() {
		console.log("run");
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,__class__: haxe.Timer
}
var isoMet = {}
isoMet.Main = function() {
	this.idDebug = 0;
	this.invalideView = false;
	this.userPos_y = 20;
	this.userPos_x = 27;
	this.g = new isoMet.models.GridModel(50,50);
	this.g.setBackGround("img/backgrounds/iso-2.jpg",0,0);
	this.g.setMap("map/map_1.json");
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.spritefromLib("House_White",2);
	}),25,25,0);
	this.g.getTileAt(25,25,0).setTraversable(false);
	this.g.getTileAt(26,25,0).setTraversable(false);
	this.g.getTileAt(25,26,0).setTraversable(false);
	this.g.getTileAt(26,26,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("Flag");
	}),8,19,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),30,30,0);
	this.g.getTileAt(30,30,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),31,30,0);
	this.g.getTileAt(31,30,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),32,30,0);
	this.g.getTileAt(32,30,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),30,31,0);
	this.g.getTileAt(30,31,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),30,32,0);
	this.g.getTileAt(30,32,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),32,31,0);
	this.g.getTileAt(32,31,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),32,32,0);
	this.g.getTileAt(32,32,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.mur();
	}),31,32,0);
	this.g.getTileAt(31,32,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("Flag");
	}),31,31,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("Flag");
	}),40,35,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.displayObjectfromLib("Bush");
	}),23,15,0);
	this.g.getTileAt(23,15,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.spritefromLib("Store_Medium");
	}),23,16,0);
	this.g.getTileAt(23,16,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.displayObjectfromLib("TreeCone");
	}),23,17,0);
	this.g.getTileAt(23,17,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.displayObjectfromLib("TreeApple");
	}),23,18,0);
	this.g.getTileAt(23,18,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.spritefromLib("House1");
	}),24,15,0);
	this.g.getTileAt(24,15,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.spritefromLib("Windmill");
	}),25,15,0);
	this.g.getTileAt(25,15,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.displayObjectfromLib("TreeRound");
	}),26,18,0);
	this.g.getTileAt(26,18,0).setTraversable(false);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.displayObjectfromLib("TreeRoundFlower");
	}),27,15,0);
	this.g.getTileAt(27,15,0).setTraversable(false);
	this.g.addTile(this.userTile = new isoMet.models.PersoTile(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),this.userPos_x,this.userPos_y,0);
	this.userTile.x = 0;
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),29,19,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),29,18,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),30,17,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),29,16,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),29,15,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),30,14,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),30,13,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),29,13,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),29,12,0);
	this.g.addTile(new isoMet.models.TileContentModel(function() {
		return isoMet.view.GfxFactory.autoAnimfromLib("perso_anim");
	}),30,12,0);
	this.path = new Array();
	isoMet.channel.MapEvent.getChannel().addEventListener(isoMet.channel.MapEvent.EVT_CLICK,$bind(this,this.evt_MapClick));
	isoMet.channel.MapEvent.getChannel().addEventListener(isoMet.channel.MapEvent.EVT_CTRLCLICK,$bind(this,this.evt_MapCtrlClick));
	isoMet.channel.MapEvent.getChannel().addEventListener("evtEleveplus",$bind(this,this.evt_MapElevePlus));
	isoMet.channel.MapEvent.getChannel().addEventListener("evtElevemoins",$bind(this,this.evt_MapEleveMoins));
};
isoMet.Main.__name__ = true;
isoMet.Main.main = function() {
	createjs.Ticker.useRAF = false;
	createjs.Ticker.setFPS(30);
	isoMet.Main.mainContent = js.Browser.document.getElementById("mainContent");
	isoMet.Main.mainContent.oncontextmenu = function(e) {
		e.stopPropagation();
		return false;
	};
	isoMet.Main.container = isoMet.Main.mainContent.parentElement;
	js.Browser.document.getElementById("loader").className = "";
	isoMet.Main.loadQueue = new createjs.LoadQueue(false);
	isoMet.Main.loadQueue.addEventListener("complete",isoMet.Main.evt_fileLoadComplete);
	isoMet.Main.loadQueue.addEventListener("progress",isoMet.Main.evt_fileLoadProgress);
	isoMet.Main.loadQueue.addEventListener("error",isoMet.Main.evt_fileLoadError);
	isoMet.Main.loadQueue.setMaxConnections(5);
	isoMet.Main._stage = new createjs.Stage(isoMet.Main.mainContent);
	isoMet.Main.width = isoMet.Main.container.clientWidth;
	isoMet.Main.height = isoMet.Main.container.clientHeight;
	isoMet.Main._stage.mouseEnabled = true;
	isoMet.Main.container.oncontextmenu = isoMet.Main.onContextMenu;
	console.log("width : " + isoMet.Main.width + "| height : " + isoMet.Main.height);
	isoMet.Main._main = new isoMet.Main();
	isoMet.Main.container.addEventListener("click",($_=isoMet.Main._main,$bind($_,$_.evt_clickMap)));
	js.Browser.document.addEventListener("keydown",($_=isoMet.Main._main,$bind($_,$_.evt_key)));
	js.Browser.window.addEventListener("resize",isoMet.Main.evt_resize);
	isoMet.Main.evt_resize(null);
	createjs.Ticker.addListener(($_=isoMet.Main._main,$bind($_,$_.tickHandler)));
}
isoMet.Main.onContextMenu = function(e) {
	console.log("contextMenu" + e.type);
}
isoMet.Main.evt_fileLoadError = function(e) {
	console.log("ERROR : evt_fileLoadError");
}
isoMet.Main.evt_fileLoadProgress = function(e) {
	console.log("TOTAL: " + isoMet.Main.loadQueue.progress);
	var perc = isoMet.Main.loadQueue.progress * 100;
	new js.JQuery("#loadingFill").animate({ width : perc + "%"},2);
	js.Browser.document.getElementById("loader").className = "loader";
}
isoMet.Main.evt_fileLoadComplete = function(e) {
	console.log("evt_fileLoadComplete TOTAL: " + isoMet.Main.loadQueue.progress);
	js.Browser.document.getElementById("loader").className = "";
	if(isoMet.Main._main != null) {
		isoMet.Main._main.updateGridView();
		haxe.Timer.delay(($_=isoMet.Main._main,$bind($_,$_.updateGridView)),100);
	}
}
isoMet.Main.evt_resize = function(e) {
	isoMet.Main.width = isoMet.Main.container.clientWidth;
	isoMet.Main.height = isoMet.Main.container.clientHeight;
	isoMet.Main.mainContent.setAttribute("width",Std.string(isoMet.Main.width));
	isoMet.Main.mainContent.setAttribute("height",Std.string(isoMet.Main.height));
	console.log("width : " + isoMet.Main.width + "| height : " + isoMet.Main.height);
	isoMet.Main._main.updateGridView();
}
isoMet.Main.prototype = {
	getGridPos: function(v) {
		var y_x = (2 * v.x - isoMet.Main.width) / isoMet.models.GridModel.tilesWidth;
		var yx = (2 * v.y - isoMet.Main.height) / isoMet.models.GridModel.tilesHeight + this.g.xSize - 1;
		console.log("y-x=" + y_x + " y+x=" + yx);
		var x = (yx - y_x) / 2;
		var y = (y_x + yx) / 2;
		console.log("x=" + x + " y=" + y);
		return new isoMet.models.Int2d(Math.round(x),Math.round(y));
	}
	,paintTile: function(x,y) {
		var items = this.g.getTileAt(x,y,0);
		var itView = items.getView();
		var over = false;
		if(this.pointMouse != null && items.collMouseCoord(this.pointMouse)) {
			console.log("MouseOver " + items.x + " " + items.y);
			this.currentMouseTarget = items;
		}
		if(itView == null) return;
		var p = itView.localToGlobal(0,0);
		this.gview.addChild(itView);
		this.idDebug++;
	}
	,paintXY: function() {
		this.idDebug = 0;
		var _g1 = 0, _g = this.g.xSize;
		while(_g1 < _g) {
			var x = _g1++;
			var _g3 = 0, _g2 = this.g.ySize;
			while(_g3 < _g2) {
				var y = _g3++;
				this.paintTile(x,y);
			}
		}
	}
	,update: function() {
		var _g1 = 0, _g = this.g.xSize;
		while(_g1 < _g) {
			var x = _g1++;
			var _g3 = 0, _g2 = this.g.ySize;
			while(_g3 < _g2) {
				var y = _g3++;
				var items = this.g.getTileAt(x,y,0);
				items.setViewCoord((y - x) * (isoMet.models.GridModel.tilesWidth / 2) + isoMet.Main.width / 2,(y + x) * (isoMet.models.GridModel.tilesHeight / 2) + isoMet.models.GridModel.tilesHeight / 2 + (isoMet.Main.height - isoMet.models.GridModel.tilesHeight * this.g.ySize) / 2);
			}
		}
	}
	,paintCount: function() {
		if(this.gview == null) return;
		this.gview.removeAllChildren();
		if(this.g.backGround != null) this.gview.addChild(this.g.backGround);
		this.idDebug = 0;
		var _g1 = 0, _g = this.g.xSize;
		while(_g1 < _g) {
			var count = _g1++;
			var _g2 = 0;
			while(_g2 < count) {
				var rCount = _g2++;
				var x = count - rCount;
				var y = rCount;
				this.paintTile(x,y);
			}
		}
		var _g1 = 0, _g = this.g.xSize;
		while(_g1 < _g) {
			var count = _g1++;
			var count2 = this.g.xSize - 1 - count;
			var _g2 = 0;
			while(_g2 < count2) {
				var rCount = _g2++;
				var x = this.g.xSize - 1 - rCount;
				var y = this.g.xSize - (count2 - rCount);
				this.paintTile(x,y);
			}
		}
	}
	,serialize: function() {
		var t = new Array();
		var p = new Array();
		var _g1 = 0, _g = this.g.xSize;
		while(_g1 < _g) {
			var x = _g1++;
			t[x] = new Array();
			p[x] = new Array();
			var _g3 = 0, _g2 = this.g.ySize;
			while(_g3 < _g2) {
				var y = _g3++;
				t[x][y] = this.g.getTileAt(x,y).isTraversable()?1:0;
				p[x][y] = this.g.getTileAt(x,y).z;
			}
		}
		var j = { p : p, t : t};
		var js = haxe.Json.stringify(j);
		console.log(js);
	}
	,updateGridView: function() {
		if(this.gview == null) this.gview = new createjs.Container();
		if(this.g.backGround != null) {
			this.g.backGround.x = this.g.xBackOffset + (isoMet.Main.width - this.g.backGround.image.width) / 2;
			this.g.backGround.y = this.g.yBackOffset + (isoMet.Main.height - this.g.backGround.image.height) / 2;
			this.gview.addChild(this.g.backGround);
			var sc = Math.max(isoMet.Main.width / this.g.backGround.image.width,isoMet.Main.height / this.g.backGround.image.height);
			this.gview.scaleX = this.gview.scaleY = isoMet.Main.width / this.g.backGround.image.width;
			this.gview.x = -this.g.backGround.x * this.gview.scaleX;
			this.gview.y = -this.g.backGround.y * this.gview.scaleY;
		}
		this.update();
		this.paintCount();
		this.invalideView = true;
		isoMet.Main._stage.addChild(this.gview);
	}
	,updateDepthNearMove: function(userTile,f_x,f_y,t_x,t_y) {
		this.g.removeTile(userTile,f_x,f_y);
		this.g.addTile(userTile,t_x,t_y);
	}
	,helper_direction: function(dx,dy) {
		var sd = dx + dy;
		if(sd == 1 || sd == -1) return 10; else return 14;
	}
	,helper_direction_move: function(pj,dx,dy) {
		if(dx > 0) {
			if(dy > 0) this.userTile.cmd(isoMet.models.ANIM.W_B); else if(dy < 0) this.userTile.cmd(isoMet.models.ANIM.W_G); else this.userTile.cmd(isoMet.models.ANIM.W_BG);
		} else if(dx < 0) {
			if(dy > 0) this.userTile.cmd(isoMet.models.ANIM.W_D); else if(dy < 0) this.userTile.cmd(isoMet.models.ANIM.W_H); else this.userTile.cmd(isoMet.models.ANIM.W_HD);
		} else if(dy > 0) this.userTile.cmd(isoMet.models.ANIM.W_BD); else if(dy < 0) this.userTile.cmd(isoMet.models.ANIM.W_HG); else this.userTile.cmd(isoMet.models.ANIM.IDLE);
	}
	,move_step: function(x,y) {
		var _g = this;
		var alphMoveSpeed = 10;
		var from_x = this.userPos_x;
		var from_y = this.userPos_y;
		var dx = x - this.userPos_x;
		var dy = y - this.userPos_y;
		console.log("dx " + dx + " dy " + dy);
		var view = this.userTile.getView();
		var ddx = isoMet.models.GridModel.tilesWidth * (dy - dx) / 4;
		var ddy = isoMet.models.GridModel.tilesHeight * (dy + dx) / 4;
		var zs = this.g.getTileAt(this.userPos_x,this.userPos_y).z * isoMet.models.GridModel.HeightMultiplier;
		var zf = this.g.getTileAt(x,y).z * isoMet.models.GridModel.HeightMultiplier;
		var ddz = (zf - zs) / 2;
		var sd = dx + dy;
		this.userPos_x = x;
		this.userPos_y = y;
		var speed = alphMoveSpeed * this.helper_direction(dx,dy);
		console.log("speed" + speed);
		this.invalideView = true;
		this.helper_direction_move(this.userTile,dx,dy);
		(this.mvTween = createjs.Tween.get(view,null,null,true)).to({ x : ddx, y : ddy - (zs + ddz)},speed).call(function() {
			_g.updateDepthNearMove(_g.userTile,from_x,from_y,x,y);
			view.set({ x : -ddx, y : -ddy - (zf - ddz)});
			_g.userPos_x = x;
			_g.userPos_y = y;
			console.log("alph complete userTile.dx " + view.x + " userTile.dy " + view.y);
			_g.invalideView = true;
			(_g.mvTween = createjs.Tween.get(view,null,null,true)).to({ x : 0, y : -zf},speed).call(function() {
				console.log("complete userTile.dx " + view.x + " userTile.dy " + view.y);
				var next = _g.path.pop();
				if(next != null) {
					_g.move_step(next.x,next.y);
					_g.invalideView = true;
				} else {
					_g.mvTween = null;
					_g.invalideView = true;
					_g.userTile.cmd(isoMet.models.ANIM.IDLE);
				}
			});
		});
	}
	,helperMoveTo: function(x,y) {
		console.log("helperMoveTo" + x + " " + y);
		if(this.userPos_x == x && this.userPos_y == y) return;
		var view = this.userTile.getView();
		if(this.path != null) this.path.splice(0,this.path.length);
		var oPath = new isoMet.controler.Astar_2(this.g);
		oPath.setEndPoints(this.userPos_x,this.userPos_y,x,y);
		this.path = oPath.solve().concat(this.path);
		if(this.mvTween == null) {
			var next = this.path.pop();
			if(next != null) this.move_step(next.x,next.y);
		}
	}
	,evt_MapCtrlClick: function(e) {
		if(this.currentMouseTarget != null) this.currentMouseTarget.setTraversable(!this.currentMouseTarget.isTraversable());
		this.invalideView = true;
	}
	,evt_MapEleveMoins: function(e) {
		console.log("evt_MapEleveMoins " + Std.string(e.initialData));
		if(this.currentMouseTarget != null) this.currentMouseTarget.setZ(this.currentMouseTarget.z - 1);
		this.invalideView = true;
	}
	,evt_MapElevePlus: function(e) {
		console.log("evt_MapElevePlus " + Std.string(e.initialData));
		if(this.currentMouseTarget != null) this.currentMouseTarget.setZ(this.currentMouseTarget.z + 1);
		this.invalideView = true;
	}
	,evt_MapClick: function(e) {
		console.log("evt_MapClick " + Std.string(e.initialData));
		if(this.currentMouseTarget != null) {
			if(!this.currentMouseTarget.isTraversable()) return;
			this.helperMoveTo(this.currentMouseTarget.x,this.currentMouseTarget.y);
		}
	}
	,tickHandler: function() {
		var newp = this.gview.globalToLocal(isoMet.Main._stage.mouseX,isoMet.Main._stage.mouseY);
		if(this.pointMouse == null || gf.GTools.fdistance_manhattan(newp.x,newp.y,this.pointMouse.x,this.pointMouse.y) > 2) {
			this.pointMouse = newp;
			this.invalideView = true;
		}
		var fps = js.Browser.document.getElementById("fps");
		fps.innerHTML = Std.string("FPS :" + (createjs.Ticker.getMeasuredFPS() * 10 | 0) / 10);
		if(this.mvTween != null || this.invalideView) {
			if(this.currentMouseTarget != null) this.currentMouseTarget.update();
			this.currentMouseTarget = null;
			this.paintCount();
			if(this.mouseIndic == null) this.mouseIndic = isoMet.view.GfxFactory.circle(255,255,0);
			if(this.currentMouseTarget != null) this.currentMouseTarget.setSol(this.mouseIndic); else if(this.mouseIndic.parent != null) this.mouseIndic.parent.removeChild(this.mouseIndic);
			this.invalideView = false;
		}
		isoMet.Main._stage.update();
	}
	,evt_clickMap: function(e) {
		var me = js.Boot.__cast(e , MouseEvent);
		var p = this.gview.globalToLocal(isoMet.Main._stage.mouseX,isoMet.Main._stage.mouseY);
		console.log(isoMet.Main._stage.x + " " + isoMet.Main._stage.y + " " + p.x + " " + p.y + " " + Std.string(me.ctrlKey));
		if(me.ctrlKey) isoMet.channel.MapEvent.sdispatch(isoMet.channel.MapEvent.EVT_CTRLCLICK,p); else isoMet.channel.MapEvent.sdispatch(isoMet.channel.MapEvent.EVT_CLICK,p);
	}
	,evt_key: function(e) {
		console.log("evt_key" + Std.string(e.keyCode));
		switch(e.keyCode) {
		case 32:
			this.userTile.cmd(isoMet.models.ANIM.ROCK);
			isoMet.Main._main.serialize();
			break;
		case 107:
			var p = this.gview.globalToLocal(isoMet.Main._stage.mouseX,isoMet.Main._stage.mouseY);
			isoMet.channel.MapEvent.sdispatch("evtEleveplus",p);
			break;
		case 109:
			var p = this.gview.globalToLocal(isoMet.Main._stage.mouseX,isoMet.Main._stage.mouseY);
			isoMet.channel.MapEvent.sdispatch("evtElevemoins",p);
			break;
		default:
			null;
		}
	}
	,__class__: isoMet.Main
}
isoMet.channel = {}
isoMet.channel.MapEvent = function(type,initialData) {
	gf.channels.DataBringerEvent.call(this,type,initialData);
};
isoMet.channel.MapEvent.__name__ = true;
isoMet.channel.MapEvent.sdispatch = function(type,initialData) {
	var notif = new isoMet.channel.MapEvent(type,initialData);
	notif.dispatch();
	return notif;
}
isoMet.channel.MapEvent.getChannel = function() {
	if(isoMet.channel.MapEvent._channel == null) isoMet.channel.MapEvent._channel = gf.channels.EventChannel.get(isoMet.channel.MapEvent.EVENT_CHANNEL_NAME);
	return isoMet.channel.MapEvent._channel;
}
isoMet.channel.MapEvent.__super__ = gf.channels.DataBringerEvent;
isoMet.channel.MapEvent.prototype = $extend(gf.channels.DataBringerEvent.prototype,{
	dispatch: function() {
		isoMet.channel.MapEvent.getChannel().dispatchEvent(this);
	}
	,__class__: isoMet.channel.MapEvent
});
isoMet.channel.TileEvent = function(type,initialData) {
	gf.channels.DataBringerEvent.call(this,type,initialData);
};
isoMet.channel.TileEvent.__name__ = true;
isoMet.channel.TileEvent.sdispatch = function(type,initialData) {
	var notif = new isoMet.channel.TileEvent(type,initialData);
	notif.dispatch();
	return notif;
}
isoMet.channel.TileEvent.getChannel = function() {
	if(isoMet.channel.TileEvent._channel == null) isoMet.channel.TileEvent._channel = gf.channels.EventChannel.get(isoMet.channel.TileEvent.EVENT_CHANNEL_NAME);
	return isoMet.channel.TileEvent._channel;
}
isoMet.channel.TileEvent.__super__ = gf.channels.DataBringerEvent;
isoMet.channel.TileEvent.prototype = $extend(gf.channels.DataBringerEvent.prototype,{
	dispatch: function() {
		isoMet.channel.TileEvent.getChannel().dispatchEvent(this);
	}
	,__class__: isoMet.channel.TileEvent
});
isoMet.controler = {}
isoMet.controler.Astar_2 = function(map) {
	this.MAX_ITERATIONS = 500;
	this.mapArray = map;
	this.gridWidth = isoMet.models.GridModel.tilesWidth;
	this.gridHeight = isoMet.models.GridModel.tilesHeight;
};
isoMet.controler.Astar_2.__name__ = true;
isoMet.controler.Astar_2.prototype = {
	helper_absSub: function(a,b) {
		return a > b?a - b:b - a;
	}
	,distance_manhattan: function(x0,y0,x1,y1) {
		return (x0 > x1?x0 - x1:x1 - x0) + (y0 > y1?y0 - y1:y1 - y0);
	}
	,helper_heuristic: function(from,to) {
		return this.distance_manhattan(from.x,from.y,to.x,to.y);
	}
	,arrCell_findFirst: function(arr,cell) {
		var arrRet = arr.filter(function(item) {
			return item.cell == cell;
		});
		if(arrRet.length > 0) return arrRet[0]; else return null;
	}
	,arrCell_has: function(arr,cell) {
		return arr.filter(function(item) {
			return item.cell == cell;
		}).length > 0;
	}
	,helper_adjacent_for: function(cell) {
		var ret = new Array();
		var item = null;
		var _g = 0, _g1 = [-1,0,1];
		while(_g < _g1.length) {
			var xx = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = [-1,0,1];
			while(_g2 < _g3.length) {
				var yy = _g3[_g2];
				++_g2;
				if(xx != 0 || yy != 0) {
					try {
						item = this.mapArray.getTileAt(cell.cell.x + xx,cell.cell.y + yy);
					} catch( e ) {
						item = null;
					}
					if(item != null && item.isTraversable()) ret.push(item);
				}
			}
		}
		return ret;
	}
	,helper_Lower: function(arr) {
		if(arr == null || arr.length == 0) return null;
		var lower = arr[0];
		var _g = 0;
		while(_g < arr.length) {
			var item = arr[_g];
			++_g;
			if(item.score < lower.score) lower = item;
		}
		return lower;
	}
	,helper_PopLower: function(arr) {
		if(arr == null || arr.length == 0) return null;
		var lower = this.helper_Lower(arr);
		HxOverrides.remove(arr,lower);
		return lower;
	}
	,stepPathfinder: function() {
		this.currentCell = this.helper_PopLower(this.openList);
		if(this.currentCell == null) return true;
		this.closedList.push(this.currentCell);
		var adj = this.helper_adjacent_for(this.currentCell);
		var _g = 0;
		while(_g < adj.length) {
			var item = adj[_g];
			++_g;
			if(!this.arrCell_has(this.closedList,item)) {
				var inOpenList = this.arrCell_findFirst(this.openList,item);
				if(inOpenList == null) {
					inOpenList = new isoMet.controler.PathCell(item,this.helper_heuristic(this.destination,item));
					this.openList.push(inOpenList);
					inOpenList.set_parent(this.currentCell);
					if(item == this.destination) return true;
				} else if(inOpenList.isBetterParent(this.currentCell)) inOpenList.set_parent(this.currentCell);
			}
		}
		return false;
	}
	,solve: function() {
		this.openList = new Array();
		this.closedList = new Array();
		this.openList.push(new isoMet.controler.PathCell(this.origin,0));
		var iter = 0;
		var sol;
		while(!(sol = this.stepPathfinder()) && iter < this.MAX_ITERATIONS) iter++;
		var solutionPath = new Array();
		if(!sol) return solutionPath;
		solutionPath.push(this.destination);
		var count = 0;
		var cellPointer = this.closedList[this.closedList.length - 1];
		while(cellPointer.cell != this.origin) {
			if(count++ > 800) return solutionPath;
			solutionPath.push(cellPointer.cell);
			cellPointer = cellPointer.get_parent();
		}
		return solutionPath;
	}
	,setEndPoints: function(originX,originY,destX,destY) {
		this.origin = this.mapArray.getTileAt(originX,originY);
		this.destination = this.mapArray.getTileAt(destX,destY);
	}
	,__class__: isoMet.controler.Astar_2
}
isoMet.controler.PathCell = function(cell,heuristic) {
	if(heuristic == null) heuristic = 0;
	this.cout = 0;
	this.score = 0;
	this.heuristic = 0;
	this.parent = null;
	this.cell = cell;
	this.heuristic = heuristic * 10;
};
isoMet.controler.PathCell.__name__ = true;
isoMet.controler.PathCell.prototype = {
	isBetterParent: function(currentCell) {
		return currentCell.score > this.get_scoreWith(currentCell);
	}
	,get_parent: function() {
		return this.parent;
	}
	,get_scoreWith: function(parent) {
		var cout = this.cell.cost + Math.round(Math.pow(parent.cell.z - this.cell.z,2)) * 10 + parent.cout + this.helper_direction(parent.cell.x - this.cell.x,parent.cell.y - this.cell.y);
		return cout + this.heuristic;
	}
	,helper_direction: function(dx,dy) {
		var sd = dx + dy;
		if(sd == 1 || sd == -1) return 10; else return 14;
	}
	,set_parent: function(parent) {
		this.parent = parent;
		this.cout = this.cell.cost + Math.round(Math.pow(parent.cell.z - this.cell.z,2)) * 10 + parent.cout + this.helper_direction(parent.cell.x - this.cell.x,parent.cell.y - this.cell.y);
		this.score = this.cout + this.heuristic;
	}
	,__class__: isoMet.controler.PathCell
}
isoMet.models = {}
isoMet.models.TileContentModel = function(viewBuilder) {
	this.view = null;
	if(viewBuilder == null) this.viewBuilder = function() {
		return isoMet.view.GfxFactory.mur();
	}; else this.viewBuilder = viewBuilder;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.traversable = true;
	this.cost = 0;
};
isoMet.models.TileContentModel.__name__ = true;
isoMet.models.TileContentModel.zSort = function(x,y) {
	return x.z - y.z;
}
isoMet.models.TileContentModel.prototype = {
	evt_mouseDown: function(e) {
		console.log("evt_mouseDown TileContentModel" + this.x + " " + this.y);
	}
	,evt_contectMenu: function(e) {
		console.log("evt_contectMenu TileContentModel" + this.x + " " + this.y);
	}
	,getView: function() {
		if(this.view == null) this.view = this.viewBuilder();
		return this.view;
	}
	,getCost: function() {
		return this.cost;
	}
	,updateTraversable: function() {
		console.log("TileContentModel updateTraversable " + this.x + " " + this.y + " " + Std.string(this.traversable));
	}
	,setTraversable: function(v) {
		if(this.traversable != v) {
			this.traversable = v;
			this.updateTraversable();
		}
	}
	,isTraversable: function() {
		return this.traversable;
	}
	,setMapCoords: function(x,y,z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	,__class__: isoMet.models.TileContentModel
}
isoMet.models.GridItems = function(x,y,z) {
	this.invalideView = false;
	isoMet.models.TileContentModel.call(this);
	this.invalideView = true;
	this.setMapCoords(x,y,z);
	this.items = new Array();
};
isoMet.models.GridItems.__name__ = true;
isoMet.models.GridItems.__super__ = isoMet.models.TileContentModel;
isoMet.models.GridItems.prototype = $extend(isoMet.models.TileContentModel.prototype,{
	removeTile: function(tile,z) {
		this.invalideView = true;
		var ret = HxOverrides.remove(this.items,tile);
		return ret;
	}
	,addTile: function(tile,z) {
		this.invalideView = true;
		this.items.push(tile);
		tile.getView().y = tile.y - z * isoMet.models.GridModel.HeightMultiplier;
		tile.getView().x = tile.x;
	}
	,setZ: function(z) {
		this.z = z;
		var _g = 0, _g1 = this.items;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			item.getView().y = item.y - z * isoMet.models.GridModel.HeightMultiplier;
			item.getView().x = item.x;
		}
		this.updateTraversable();
		this.invalideView = true;
	}
	,updateContainer: function() {
		var view;
		if(this.view != null) {
			view = js.Boot.__cast(this.view , createjs.Container);
			view.removeAllChildren();
		} else this.view = view = new createjs.Container();
		if(this.sol == null && this.items.length == 0) {
		} else {
			view.x = this.xx;
			view.y = this.yy;
			if(this.sol != null) {
				this.sol.y = -this.z * isoMet.models.GridModel.HeightMultiplier;
				view.addChild(this.sol);
			}
			var _g = 0, _g1 = this.items;
			while(_g < _g1.length) {
				var item = _g1[_g];
				++_g;
				view.addChild(item.getView());
			}
		}
		this.invalideView = false;
	}
	,evt_mouseDown: function(e) {
		console.log("evt_mouseDown GridItems" + this.x + " " + this.y);
		isoMet.channel.TileEvent.sdispatch(isoMet.channel.TileEvent.EVT_CLICK,this);
	}
	,updateTraversable: function() {
		console.log("GridItems updateTraversable " + this.x + " " + this.y + " " + Std.string(this.traversable));
		this.sol = null;
	}
	,getView: function() {
		this.update();
		if(this.sol == null && this.items.length == 0) return null;
		return this.view;
	}
	,update: function() {
		if(this.invalideView) this.updateContainer();
	}
	,setSol: function(sol) {
		var _g = this;
		this.invalideView = true;
		if(this.view == null) return;
		this.sol = sol;
		if(this.invalideView) this.updateContainer();
		if(this.timerSol != null) this.timerSol.stop();
		this.timerSol = haxe.Timer.delay(function() {
			_g.invalideView = true;
			_g.updateTraversable();
			if(_g.invalideView) _g.updateContainer();
		},250);
	}
	,collMouseCoord: function(m) {
		if(!this.traversable) return false;
		var p = new createjs.Point(this.xx,this.yy - this.z * isoMet.models.GridModel.HeightMultiplier);
		if(Math.abs(p.x - m.x) < isoMet.models.GridModel.tilesWidth / 2 && Math.abs(p.y - m.y) < isoMet.models.GridModel.tilesHeight / 2) return true;
		return false;
	}
	,setViewCoord: function(x,y) {
		this.invalideView = this.xx != x || this.yy != y;
		this.xx = x;
		this.yy = y;
	}
	,setView: function(view) {
		this.invalideView = true;
		this.view = view;
		if(this.invalideView) this.updateContainer();
	}
	,__class__: isoMet.models.GridItems
});
isoMet.models.GridModel = function(xSize,ySize) {
	this.src_map = "map/map_1.json";
	this.src_backGround = "img/backgrounds/iso-4.jpg";
	this.xSize = xSize;
	this.ySize = ySize;
	this.items = new Array();
	var _g = 0;
	while(_g < xSize) {
		var x = _g++;
		this.items[x] = new Array();
		var _g1 = 0;
		while(_g1 < ySize) {
			var y = _g1++;
			this.items[x][y] = new isoMet.models.GridItems(x,y,0);
		}
	}
};
isoMet.models.GridModel.__name__ = true;
isoMet.models.GridModel.prototype = {
	update: function() {
	}
	,getTileAt: function(x,y,z) {
		return this.items[x][y];
	}
	,isInside: function(x,y) {
		return x > 0 && y > 0 && x < this.xSize && y < this.ySize;
	}
	,removeTile: function(tile,x,y,z) {
		if(z == null) z = 0;
		this.items[x][y].removeTile(tile,z);
	}
	,addTile: function(tile,x,y,z) {
		if(z == null) z = 0;
		this.items[x][y].addTile(tile,z);
	}
	,evt_mapLoad: function(e) {
		console.log("file loaded" + this.src_map);
		var item = isoMet.Main.loadQueue.getResult(this.src_map);
		if(item == null) return;
		var _g1 = 0, _g = this.xSize;
		while(_g1 < _g) {
			var x = _g1++;
			var _g3 = 0, _g2 = this.ySize;
			while(_g3 < _g2) {
				var y = _g3++;
				this.items[x][y].setTraversable(item.t[x][y] == 1);
				this.items[x][y].setZ(item.p[x][y]);
			}
		}
	}
	,evt_backLoad: function(e) {
		console.log("file loaded" + this.src_backGround);
		var item = isoMet.Main.loadQueue.getItem(this.src_backGround);
		this.backGround = new createjs.Bitmap(this.src_backGround);
	}
	,setBackGround: function(src_backGround,xBackOffset,yBackOffset) {
		if(yBackOffset == null) yBackOffset = 0;
		if(xBackOffset == null) xBackOffset = 0;
		this.src_backGround = src_backGround;
		this.xBackOffset = xBackOffset;
		this.yBackOffset = yBackOffset;
		var backGround = isoMet.Main.loadQueue.getItem(src_backGround);
		if(backGround == null) {
			isoMet.Main.loadQueue.addEventListener("complete",$bind(this,this.evt_backLoad));
			isoMet.Main.loadQueue.loadFile(src_backGround);
		} else this.evt_backLoad(null);
	}
	,setMap: function(src_map) {
		this.src_map = src_map;
		var map = isoMet.Main.loadQueue.getItem(src_map);
		if(map == null) {
			isoMet.Main.loadQueue.addEventListener("complete",$bind(this,this.evt_mapLoad));
			isoMet.Main.loadQueue.loadFile(src_map);
		} else this.evt_mapLoad(null);
	}
	,__class__: isoMet.models.GridModel
}
isoMet.models.Int2d = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
isoMet.models.Int2d.__name__ = true;
isoMet.models.Int2d.prototype = {
	toString: function() {
		return "[Int2d (x=" + this.x + " y=" + this.y + ")]";
	}
	,clone: function() {
		return new isoMet.models.Int2d(this.x,this.y);
	}
	,__class__: isoMet.models.Int2d
}
isoMet.models.ANIM = { __ename__ : true, __constructs__ : ["IDLE","W_D","W_G","W_BD","W_BG","W_HG","W_HD","W_B","W_H","ROCK"] }
isoMet.models.ANIM.IDLE = ["IDLE",0];
isoMet.models.ANIM.IDLE.toString = $estr;
isoMet.models.ANIM.IDLE.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_D = ["W_D",1];
isoMet.models.ANIM.W_D.toString = $estr;
isoMet.models.ANIM.W_D.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_G = ["W_G",2];
isoMet.models.ANIM.W_G.toString = $estr;
isoMet.models.ANIM.W_G.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_BD = ["W_BD",3];
isoMet.models.ANIM.W_BD.toString = $estr;
isoMet.models.ANIM.W_BD.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_BG = ["W_BG",4];
isoMet.models.ANIM.W_BG.toString = $estr;
isoMet.models.ANIM.W_BG.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_HG = ["W_HG",5];
isoMet.models.ANIM.W_HG.toString = $estr;
isoMet.models.ANIM.W_HG.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_HD = ["W_HD",6];
isoMet.models.ANIM.W_HD.toString = $estr;
isoMet.models.ANIM.W_HD.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_B = ["W_B",7];
isoMet.models.ANIM.W_B.toString = $estr;
isoMet.models.ANIM.W_B.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.W_H = ["W_H",8];
isoMet.models.ANIM.W_H.toString = $estr;
isoMet.models.ANIM.W_H.__enum__ = isoMet.models.ANIM;
isoMet.models.ANIM.ROCK = ["ROCK",9];
isoMet.models.ANIM.ROCK.toString = $estr;
isoMet.models.ANIM.ROCK.__enum__ = isoMet.models.ANIM;
isoMet.models.PersoTile = function(viewBuilder) {
	isoMet.models.TileContentModel.call(this,viewBuilder);
	this.lastCmd = isoMet.models.ANIM.IDLE;
};
isoMet.models.PersoTile.__name__ = true;
isoMet.models.PersoTile.__super__ = isoMet.models.TileContentModel;
isoMet.models.PersoTile.prototype = $extend(isoMet.models.TileContentModel.prototype,{
	cmd: function(action) {
		if(this.view == null) return;
		if(this.lastCmd == action) return;
		this.lastCmd = action;
		var anim = js.Boot.__cast(this.view , createjs.MovieClip);
		switch( (action)[1] ) {
		case 0:
			anim.scaleX = 1;
			anim.gotoAndPlay("IDLE");
			break;
		case 1:
			anim.scaleX = 1;
			anim.gotoAndPlay("W_D");
			break;
		case 2:
			anim.scaleX = -1;
			anim.gotoAndPlay("W_D");
			break;
		case 3:
			anim.scaleX = 1;
			anim.gotoAndPlay("W_BD");
			break;
		case 4:
			anim.scaleX = -1;
			anim.gotoAndPlay("W_BD");
			break;
		case 5:
			anim.scaleX = 1;
			anim.gotoAndPlay("W_TG");
			break;
		case 6:
			anim.scaleX = -1;
			anim.gotoAndPlay("W_TG");
			break;
		case 7:
			anim.scaleX = 1;
			anim.gotoAndPlay("W_B");
			break;
		case 8:
			anim.scaleX = 1;
			anim.gotoAndPlay("W_H");
			break;
		default:
			anim.gotoAndPlay("ROCK");
		}
	}
	,getView: function() {
		if(this.view == null) this.view = this.viewBuilder();
		return this.view;
	}
	,__class__: isoMet.models.PersoTile
});
isoMet.view = {}
isoMet.view.GfxFactory = function() { }
isoMet.view.GfxFactory.__name__ = true;
isoMet.view.GfxFactory.exemple = function() {
	return new createjs.Shape();
}
isoMet.view.GfxFactory.animFromLib = function(id) {
	var builder = new createjs.SpriteSheetBuilder();
	builder.defaultScale = 1;
	builder.maxWidth = 256;
	builder.addMovieClip(isoMet.view.GfxFactory.displayObjectfromLib(id));
	var bmpAnim = new createjs.BitmapAnimation(builder.build());
	bmpAnim.gotoAndPlay(0);
	return bmpAnim;
}
isoMet.view.GfxFactory.animFromLib_complete = function(e,targetDisplay) {
	var spriteSheet = e.target.spriteSheet;
	var bmpAnim = new createjs.BitmapAnimation(spriteSheet);
	targetDisplay.addChild(bmpAnim);
	bmpAnim.gotoAndPlay(0);
}
isoMet.view.GfxFactory.autoAnimfromLib = function(id,scale) {
	if(scale == null) scale = 1;
	var S = lib[id];
	if(S == null) return isoMet.view.GfxFactory.mur(255,0,0);
	var ret = Type.createInstance(S,[]);
	ret.scaleX = ret.scaleY = scale;
	ret.mouseEnabled = false;
	return ret;
}
isoMet.view.GfxFactory.displayObjectfromLib = function(id,scale) {
	if(scale == null) scale = 1;
	var S = lib[id];
	if(S == null) return isoMet.view.GfxFactory.mur(255,0,0);
	var ret = Type.createInstance(S,[]);
	ret.scaleX = ret.scaleY = scale;
	ret.cache(-64,-200,128,264,scale);
	ret.mouseEnabled = false;
	return ret;
}
isoMet.view.GfxFactory.spritefromLib = function(id,scale) {
	if(scale == null) scale = 1;
	var S = spriteLib[id];
	if(S == null) return isoMet.view.GfxFactory.mur(255,0,0);
	var ret = Type.createInstance(S,[]);
	ret.scaleX = ret.scaleY = scale;
	ret.mouseEnabled = false;
	return ret;
}
isoMet.view.GfxFactory.circle = function(r,g,b) {
	if(b == null) b = 200;
	if(g == null) g = 200;
	if(r == null) r = 200;
	var color = createjs.Graphics.getRGB(r,g,b,1);
	var w_2 = Math.round(isoMet.models.GridModel.tilesWidth / 2);
	var h_2 = Math.round(isoMet.models.GridModel.tilesHeight / 2);
	var gfx = new createjs.Shape();
	gfx.graphics.beginStroke(color).drawEllipse(-w_2 / 2,-h_2 / 2,w_2,h_2).closePath();
	return gfx;
}
isoMet.view.GfxFactory.sol = function(fill,alpha) {
	if(alpha == null) alpha = .0;
	if(fill == null) fill = "#CCCCCC";
	var w_2 = Math.round(isoMet.models.GridModel.tilesWidth / 2);
	var h_2 = Math.round(isoMet.models.GridModel.tilesHeight / 2);
	var gfx = new createjs.Shape();
	gfx.alpha = alpha;
	gfx.graphics.beginFill(fill).beginStroke("#FFCC00").moveTo(w_2,0).lineTo(0,-h_2).lineTo(-w_2,0).lineTo(0,h_2).lineTo(w_2,0).closePath();
	return gfx;
}
isoMet.view.GfxFactory.solEl = function(r,g,b) {
	if(b == null) b = 200;
	if(g == null) g = 200;
	if(r == null) r = 200;
	var color = createjs.Graphics.getRGB(r,g,b,0.5);
	var color_g = createjs.Graphics.getRGB(Math.round(0.8 * r),Math.round(0.8 * g),Math.round(0.8 * b),0.5);
	var color_d = createjs.Graphics.getRGB(Math.round(0.6 * r),Math.round(0.6 * g),Math.round(0.6 * b),0.5);
	var w_2 = Math.round(isoMet.models.GridModel.tilesWidth / 2);
	var h_2 = Math.round(isoMet.models.GridModel.tilesHeight / 2);
	var gfx = new createjs.Shape();
	gfx.graphics.beginFill(color).beginStroke(color_g).moveTo(w_2,0).lineTo(0,-h_2).lineTo(-w_2,0).lineTo(0,h_2).lineTo(w_2,0);
	gfx.graphics.closePath();
	return gfx;
}
isoMet.view.GfxFactory.mur = function(r,g,b) {
	if(b == null) b = 200;
	if(g == null) g = 200;
	if(r == null) r = 200;
	var w_2 = Math.round(isoMet.models.GridModel.tilesWidth / 2);
	var h_2 = Math.round(isoMet.models.GridModel.tilesHeight / 2);
	var h = 18;
	var h_2ph = h_2 + h;
	var color = createjs.Graphics.getRGB(r,g,b);
	var color_g = createjs.Graphics.getRGB(Math.round(0.8 * r),Math.round(0.8 * g),Math.round(0.8 * b));
	var color_d = createjs.Graphics.getRGB(Math.round(0.6 * r),Math.round(0.6 * g),Math.round(0.6 * b));
	var gfx = new createjs.Shape();
	gfx.graphics.beginFill(color_d);
	gfx.graphics.moveTo(0,-h).lineTo(0,h_2).lineTo(w_2,0).lineTo(w_2,-h_2ph).lineTo(0,-h);
	gfx.graphics.beginFill(color);
	gfx.graphics.moveTo(w_2,-h_2ph).lineTo(0,-(h_2ph + h_2)).lineTo(-w_2,-h_2ph).lineTo(0,-h).lineTo(w_2,-h_2ph);
	gfx.graphics.beginFill(color_g);
	gfx.graphics.moveTo(-w_2,-h_2ph).lineTo(-w_2,0).lineTo(0,h_2).lineTo(0,-h).lineTo(-w_2,-h_2ph);
	gfx.graphics.closePath();
	return gfx;
}
var js = {}
js.Boot = function() { }
js.Boot.__name__ = true;
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		if(cl == Class && o.__name__ != null) return true; else null;
		if(cl == Enum && o.__ename__ != null) return true; else null;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
js.Browser.__name__ = true;
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_;
function $bind(o,m) { var f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
}; else null;
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.prototype.__class__ = Array;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(typeof(JSON) != "undefined") haxe.Json = JSON;
var q = window.jQuery;
js.JQuery = q;
gf.channels.DataBringerEvent.DATA_EVENT = "dataEvent";
gf.channels.DataBringerEvent.EVENT_CHANNEL_NAME = "dataChannel";
gf.channels.EventChannel._channels = new haxe.ds.StringMap();
gf.channels.EventChannel.defaultChannel = "defaultChannel";
isoMet.channel.MapEvent.EVENT_CHANNEL_NAME = "mapChannel";
isoMet.channel.MapEvent.EVT_CLICK = "evt_click";
isoMet.channel.MapEvent.EVT_CTRLCLICK = "evt_CTRLclick";
isoMet.channel.MapEvent.EVT_ELEVEPLUS = "evtEleveplus";
isoMet.channel.MapEvent.EVT_ELEVEMOINS = "evtElevemoins";
isoMet.channel.TileEvent.EVENT_CHANNEL_NAME = "tileChannel";
isoMet.channel.TileEvent.EVT_CLICK = "evt_click";
isoMet.models.GridModel.HeightMultiplier = 10;
isoMet.models.GridModel.tilesWidth = 64;
isoMet.models.GridModel.tilesHeight = 32;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
isoMet.Main.main();
})();

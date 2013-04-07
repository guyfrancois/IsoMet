package isoMet;

import createjs.easeljs.BitmapAnimation;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.Point;
import createjs.easeljs.Stage;
import createjs.easeljs.Text;
import createjs.easeljs.Ticker;
import createjs.preloadjs.LoadQueue;
import createjs.tweenjs.Tween;
import events.Mouse;
import events.PreloadJS;
import events.Window;
import haxe.Timer;
import isoMet.channel.MapEvent;
import isoMet.channel.TileEvent;
import isoMet.controler.Astar_2;
import isoMet.models.GridItems;
import isoMet.models.GridModel;
import isoMet.models.Int2d;
import isoMet.models.TileContentModel;
import isoMet.view.GfxFactory;
import js.Browser;
import js.html.Element;
import js.html.Event;
import js.html.svg.AnimatedBoolean;
import js.JQuery;




/**
 * ...
 * @author GuyF
 */

class Main 
{
	public static var loadQueue:LoadQueue;
	private static var container:Element;
	private static var mainContent:Element;
	private static var _stage:Stage;
	private static var _main:Main;
	private static var width : Int;
	private static var height : Int;

    public static function main():Void
    {
		#if debug
			trace("Debug infos for all debug compiles");
		#end
        //Ticker provides a centralized tick or heartbeat broadcast at a set interval.
        //Here we tells it to use browser "requestAnimationFrame" instead of "setTimeout" to process ticks
        Ticker.useRAF = false;
        //Maximum FPS
        Ticker.setFPS(60);
	
    	
		 //Creating of stage. We need to create stage manually. Constructor receives canvas element declared in index.html.
		 mainContent = js.Browser.document.getElementById("mainContent");
		 mainContent.oncontextmenu = function(e:Event) { e.stopPropagation(); return false; };
		 container = mainContent.parentElement;
		 Browser.document.getElementById("loader").className = "";
		 
		loadQueue = new LoadQueue(false);
		//loadQueue.addEventListener(PreloadJS.FILELOAD, evt_fileLoad);
        loadQueue.addEventListener(PreloadJS.COMPLETE, evt_fileLoadComplete);
        loadQueue.addEventListener(PreloadJS.PROGRESS, evt_fileLoadProgress);
		loadQueue.addEventListener(PreloadJS.ERROR, evt_fileLoadError);
		
		
		loadQueue.setMaxConnections(5);
		 
		// PreloadJS usage
		// http://nightlycoding.com/index.php/2012/09/image-slideshow-with-preloadjs-jquery-and-tweenmax/
		 
        _stage = new Stage(cast mainContent);
		
		width = container.clientWidth;
		height = container.clientHeight;
		//_stage.enableMouseOver(10);
		//_stage.mouseMoveOutside = true;
		_stage.mouseEnabled = true;
		container.oncontextmenu = onContextMenu;
		

        //Alternative to Event.ENTER_FRAME. Method tickHandler called 60 times per second
      
		
		trace("width : " + width + "| height : " + height);
		_main = new Main();
		
		container.addEventListener(Mouse.CLICK, _main.evt_clickMap);
		
		Browser.window.addEventListener(Window.RESIZE, evt_resize);
		evt_resize(null);
		  Ticker.addListener(_main.tickHandler);
	}
	
	
	
	static private function onContextMenu(e:js.html.Event ) 
	{
		trace("contextMenu"+e.type);
	}
	
	
	
	public static function evt_fileLoadError(e) {
		trace("ERROR : evt_fileLoadError");
	}
	
	public static function evt_fileLoadProgress(e) {
		trace('TOTAL: '+loadQueue.progress);
		var perc = loadQueue.progress * 100;
		
		new JQuery("#loadingFill").animate( {  'width':perc + '%' }, 2);
		Browser.document.getElementById("loader").className = "loader";
	}
	
	public static function evt_fileLoadComplete(e) {
		trace('evt_fileLoadComplete TOTAL: '+loadQueue.progress);
		 Browser.document.getElementById("loader").className = "";
		if (_main != null) {
			
			_main.updateGridView();
			Timer.delay(_main.updateGridView, 100);
		}
		
	}
	
	private function evt_clickMap(e:Event) {
		var p = gview.globalToLocal(_stage.mouseX, _stage.mouseY);
		trace(_stage.x + " " + _stage.y + " " + p.x + " " + p.y+" ");
		MapEvent.sdispatch( 
			MapEvent.EVT_CLICK,p
			
			);
	}
	//In CreateJS we have to update stage every time any display object changed.
    //So it's not necessary to update it on each frame but in this example choose the simple way.
    private function tickHandler():Void
    {
		
		
      
		var fps = js.Browser.document.getElementById('fps');
		//#if debug
		
		fps.innerHTML = Std.string("FPS :"+Std.int(Ticker.getMeasuredFPS()*10)/10);
		//#end
		if (mvTween!= null || invalideView ) {
			paintCount();
			invalideView = false;
		}
		  _stage.update();
		//_main.updateGridView();
    }
	
	private static function evt_resize(e:Event):Void {
		
		width = container.clientWidth;
		height = container.clientHeight;
		
		mainContent.setAttribute("width", Std.string(width));
		mainContent.setAttribute("height", Std.string(height) );
		
		trace("width : " + width + "| height : " + height);
		_main.updateGridView();
		
	}
	
	private var g:GridModel;
	private var gview : Container;
	
	
	private var userPos_x:Int=15;
	private var userPos_y:Int=15;
	private var userTile:TileContentModel;
	
	private var anim:BitmapAnimation;
	
	public function new ():Void {
		
		g = new GridModel(50, 50);
		g.setBackGround("img/backgrounds/iso-2.jpg", 0, 0);
		
		g.addTile(new TileContentModel(GfxFactory.displayObjectfromLib.bind("HouseWhite",2)), 25, 25, 0);
		g.getTileAt(25, 25, 0).setTraversable(false);
		g.getTileAt(26, 25, 0).setTraversable(false);
		g.getTileAt(25, 26, 0).setTraversable(false);
		g.getTileAt(26, 26, 0).setTraversable(false);
		
		g.addTile(new TileContentModel(GfxFactory.autoAnimfromLib.bind("Flag")), 8, 19, 0);
		
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 30, 30, 0);
		g.getTileAt(30, 30, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 31, 30, 0);
		g.getTileAt(31, 30, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 32, 30, 0);
		g.getTileAt(32, 30, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 30, 31, 0);
		g.getTileAt(30, 31, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 30, 32, 0);
		g.getTileAt(30, 32, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 32, 31, 0);
		g.getTileAt(32, 31, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 32, 32, 0);
		g.getTileAt(32, 32, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.mur.bind()), 31, 32, 0);
		g.getTileAt(31, 32, 0).setTraversable(false);
		
		g.addTile(new TileContentModel(GfxFactory.autoAnimfromLib.bind("Flag")), 31, 31, 0);
		
		g.addTile(new TileContentModel(GfxFactory.autoAnimfromLib.bind("Flag")), 40, 35, 0);
		
		//g.getTileAt(8, 8, 0).setTraversable(false);
		
		
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("Bush");
			} ), 10, 25, 0);
		g.getTileAt(10, 25, 0).setTraversable(false);
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("StoreSmall");
			}), 10, 26, 0);
		g.getTileAt(10, 26, 0).setTraversable(false);
		
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("TreeCone");
			}), 10, 27, 0);
		g.getTileAt(10, 27, 0).setTraversable(false);
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("TreeApple");
			}), 10, 28, 0);
		g.getTileAt(10, 28, 0).setTraversable(false);
		
		
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("TreeApple1");
			}), 11, 25, 0);
		g.getTileAt(11, 25, 0).setTraversable(false);
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("TreeApple2");
			}), 12, 25, 0);
		g.getTileAt(12, 25, 0).setTraversable(false);
		g.addTile(new TileContentModel(GfxFactory.displayObjectfromLib.bind("TreeRound")), 13, 28, 0);
		g.getTileAt(13, 28, 0).setTraversable(false);
		g.addTile(new TileContentModel(function()
			{
				return  GfxFactory.displayObjectfromLib("TreeRoundFlower");
			}), 14, 25, 0);
		g.getTileAt(14, 25, 0).setTraversable(false);
		
		g.addTile(userTile = new TileContentModel(function() {
				return  GfxFactory.mur(255,0,0);
			}), userPos_x, userPos_y, 0);
		userTile.x = 0;
		path =  new Array<TileContentModel>();
		
		TileEvent.getChannel().addEventListener(TileEvent.EVT_CLICK, evt_tileClick);
		MapEvent.getChannel().addEventListener(MapEvent.EVT_CLICK, evt_MapClick);
		
	}
	private var path:Array<TileContentModel>;
	private function evt_MapClick(e:MapEvent):Void 
	{
		trace("evt_MapClick " + e.initialData);
		
		var p = getGridPos(e.initialData);
	
		trace("p :" + p ) ;
		if (!g.isInside(p.x, p.y)) return;
		if (!g.getTileAt(p.x, p.y).isTraversable()) return;
		helperMoveTo(p.x, p.y);
	}
	
	
	private function evt_tileClick(e:TileEvent):Void 
	{
		trace("evt_mouseDown Main TileContentModel" +e.type + e.initialData.x + e.initialData.y);
		// STOP end CLEAR precedent mouvement
		if (!e.initialData.isTraversable()) return;
		
		helperMoveTo(e.initialData.x, e.initialData.y);
		
				//--> determiner le sens du deplacement
		//if (sd==0 /*horizontal*/ || sd>1 ||sd <-1 /* vertical*/) {
		//
		//} else if (sd==1) {
		//
		//}else if (sd==-1) {
			//
		//}
		
	}
	
	private function helperMoveTo(x:Int,y:Int) {
		trace("helperMoveTo" +x+" "+y);
		// STOP end CLEAR precedent mouvement
		
		//if (!e.initialData.isTraversable()) return;
		if (userPos_x ==  x && userPos_y == y) return;
		var view = userTile.getView();
		
		if (path != null) path.splice(0, path.length);
		
		var oPath:Astar_2 = new Astar_2(g);
		oPath.setEndPoints(userPos_x, userPos_y, x, y);
		
		path = oPath.solve().concat(path);
		#if debug
			trace("path >>" +userPos_x + "x" + userPos_y + "->" + x + "x" + y);
			
			for (cp in path) {
				trace("path :" + cp.x + " " + cp.y);
				cast(cp,GridItems).setSol(GfxFactory.sol("#00FFFF",1));
			}
		#end
		
		if (mvTween==null) {
			var next = path.pop();
			if (next != null) {
				#if debug
					cast(next,GridItems).setSol(GfxFactory.sol("#00FF00",1));
				#end
				move_step(next.x, next.y);
			}
		}
	}
	
	private var mvTween:Tween;
	private var invalideView:Bool = false;
	/**
	 * modifie "userPos_x" & "userPos_y", "mvTween" , 
	 * depile "path" (parcours du chemin)
	 * mise à jour graphic userTile.getView(), 
	 * @param	x position cible du deplacement
	 * @param	y
	 */
	private function move_step(x:Int, y:Int) {
		var alphMoveSpeed = 10;
		var from_x = userPos_x;		
		var from_y = userPos_y;	
		
		
		var dx:Int = x - userPos_x;
		var dy:Int = y - userPos_y;
		trace("dx " +dx + " dy " +dy );
		var view = userTile.getView();
		
		//Tween.removeTweens(view);
		var ddx:Float = (GridModel.tilesWidth  * (dy - dx) / 4);
		var ddy:Float = (GridModel.tilesHeight   * (dy + dx) / 4 );
		var sd = dx + dy;
		// position anticipé de la position de l'utilisateur
		
		userPos_x =  x;
		userPos_y = y;
		var speed = alphMoveSpeed  * helper_direction(dx, dy);
		
		trace("speed" + speed);	
		invalideView = true;
		(mvTween=Tween.get(view,null,null,true)).to({ x:ddx, y:ddy }, speed).call(
			function() {
				
				
				updateDepthNearMove(userTile, from_x, from_y, x, y);
				view.set( { x: -ddx, y: -ddy } );
				userPos_x =  x;
				userPos_y = y;
				trace("alph complete userTile.dx "+ view.x + " userTile.dy " +view.y ); 
				invalideView = true;
				(mvTween=Tween.get(view,  { x: -ddx, y: -ddy } ,null,true)).to( { x:0, y:0 }, speed).call(
					function() {
						trace("complete userTile.dx " +view.x + " userTile.dy " +view.y ); 
						//userPos_x =  x;
						//userPos_y = y;
						var next = path.pop();
						if (next != null) {
							#if debug
								cast(next,GridItems).setSol(GfxFactory.sol("#00FF00",1));
							#end
							move_step(next.x, next.y);
							invalideView = true;
						} else {
							mvTween = null;
							invalideView = true;
						}
					}
				);
				
			}
		);
	}
	
	private function helper_direction(dx:Int , dy:Int):Int {
		var sd = dx + dy;
		if (sd==1 || sd==-1) {
			return 10;
		}else {
			return 14;
		}
	}
	
	private function updateDepthNearMove(userTile:TileContentModel, f_x:Int, f_y:Int, t_x:Int, t_y:Int) {
		g.removeTile(userTile, f_x, f_y);
		g.addTile(userTile, t_x,t_y);
	}
	
	
	public function updateGridView():Void {
		//GridItemsView.refresh()
		if (gview == null) {
			gview = new Container();
			
		}
		
		
		if (g.backGround != null) {
			g.backGround.x = g.xBackOffset +(width-g.backGround.image.width)/2;
			g.backGround.y = g.yBackOffset +(height-g.backGround.image.height)/2;
			
			gview.addChild(g.backGround);
			var sc = Math.max(width / g.backGround.image.width, height / g.backGround.image.height);
			//gview.scaleX = gview.scaleY = width / g.backGround.image.width;
			//gview.x =- g.backGround.x*gview.scaleX;
			//gview.x = -(width-g.backGround.image.width)/2;
		}
		
		update();
		
		paintCount();
		
		invalideView = true;
		_stage.addChild(gview);
		
		
	}
	private function paintCount() {
		if (gview == null) {
			return;
			
		}
		gview.removeAllChildren();
		if (g.backGround != null) {
			gview.addChild(g.backGround);
		}
		idDebug = 0;
		for (count in 0...g.xSize) {
				for (rCount in 0...count) {
					
					var x = count - rCount;
					var y = rCount;
					paintTile(x,y);
					
				}
				
		}
		
		for (count in 0...g.xSize) {
				var count2 = (g.xSize-1) - count;
				for (rCount in 0...count2) {
					//var count2 = (g.xSize-1) - count;
					var x = (g.xSize-1)-rCount;
					var y = (g.xSize)-(count2 - rCount);
					
					paintTile(x,y);
					
				}
				
		}
	}
	private function update() {
		for (x in 0...g.xSize) {
			for (y in 0...g.ySize) {
				var items:GridItems = g.getTileAt(x, y, 0);
				items.setViewCoord(
					( y - x ) * (GridModel.tilesWidth / 2) +width / 2,
					( y + x) * (GridModel.tilesHeight / 2) + GridModel.tilesHeight / 2 + (height - GridModel.tilesHeight * g.ySize) / 2
				);
			}
		}
	}
	
	private function paintXY() {
		idDebug = 0;
		
		for (x in 0...g.xSize) {
			for (y in 0...g.ySize) {
				
				paintTile(x,y);
				
			}
		}
	}
	private var idDebug:Int=0;
	private function paintTile(x:Int, y:Int) {
		var items:GridItems = g.getTileAt(x, y, 0);
		var itView : DisplayObject = items.getView();
		if (itView == null) {
			return;
		}
		var p = itView.localToGlobal(0, 0);
		//p.x = p.x * _stage.scaleX;-------------
		//p.y = p.y * _stage.scaleY;
		
	//	if (p.x>-g.tilesWidth && p.x<width+g.tilesWidth && p.y>-g.tilesHeight && p.y<height+g.tilesHeight) {
			gview.addChild(itView);
					items.setDebugText(Std.string(idDebug) + " " + Std.string(x) + "," + Std.string(y));
					/*
					gview.addChild(
							new Text(Std.string(idDebug) + " " + Std.string(x) + "," + Std.string(y))
						).set({x:itView.x , y: itView.y});*/
		idDebug++;
	//		} 
		
	}

	private function getGridPos( v : Point ) : Int2d {
		var y_x = (2 * v.x - width) / GridModel.tilesWidth;
		var yx = (2 * v.y - height) / GridModel.tilesHeight + g.xSize-1;
		trace("y-x=" + y_x + " y+x=" + yx);
		var x = (yx - y_x) / 2;
		var y = (y_x + yx) / 2;
		trace("x=" + x + " y=" + y);
		
		
		return new Int2d(
		Math.round (x),
		Math.round (y)
		);
	}

	
}
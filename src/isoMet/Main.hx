package isoMet;

import createjs.easeljs.Ticker;
import createjs.preloadjs.LoadQueue;
import events.Key;
import events.Mouse;
import events.PreloadJS;
import events.Window;
import haxe.Timer;
import isoMet.channel.MapEvent;
import isoMet.controler.MapControler;
import isoMet.view.MapRenderer;
import js.Browser;
import js.html.Element;
import js.html.Event;
import js.html.MouseEvent;
import js.JQuery;

import isoMet.models.PersoTile;








/**
 * ...
 * @author GuyF
 */

class Main 
{
	public static var loadQueue:LoadQueue;
	
	
	private static var _main:Main;
	
	
	private var mapControler:MapControler;
	private var mapRenderer:MapRenderer;
	private static var mainContent:Element;

    public static function main():Void
    {
		#if debug
			trace("Debug infos for all debug compiles");
		#end
        //Ticker provides a centralized tick or heartbeat broadcast at a set interval.
        //Here we tells it to use browser "requestAnimationFrame" instead of "setTimeout" to process ticks
        Ticker.useRAF = false;
        //Maximum FPS
        Ticker.setFPS(30);
	
    	
		 //Creating of stage. We need to create stage manually. Constructor receives canvas element declared in index.html.
		mainContent = js.Browser.document.getElementById("mainContent");
		mainContent.oncontextmenu = function(e:Event) { e.stopPropagation(); return false; };
		var container:Element  = mainContent.parentElement;
		 Browser.document.getElementById("loader").className = "";
		
		loadQueue = new LoadQueue(false);
		//loadQueue.addEventListener(PreloadJS.FILELOAD, evt_fileLoad);
        loadQueue.addEventListener(PreloadJS.COMPLETE, evt_fileLoadComplete);
        loadQueue.addEventListener(PreloadJS.PROGRESS, evt_fileLoadProgress);
		loadQueue.addEventListener(PreloadJS.ERROR, evt_fileLoadError);
		
		
		loadQueue.setMaxConnections(5);
		 
		// PreloadJS usage
		// http://nightlycoding.com/index.php/2012/09/image-slideshow-with-preloadjs-jquery-and-tweenmax/
		 
       
		
		
		//_stage.enableMouseOver(10);
		//_stage.mouseMoveOutside = true;
		
		container.oncontextmenu = onContextMenu;
		

        //Alternative to Event.ENTER_FRAME. Method tickHandler called 60 times per second
      
		
		
		_main = new Main();
		
		container.addEventListener(Mouse.CLICK, _main.evt_clickMap);
		
		Browser.document.addEventListener(Key.KEYDOWN, _main.evt_key);
		
		Browser.window.addEventListener(Window.RESIZE, _main.evt_resize);
		_main.evt_resize(null);
		Ticker.addListener(_main.tickHandler);
	}
	
	public function evt_resize(e:Dynamic):Void {
		mapRenderer.evt_resize(e);
	}
	
	public function tickHandler():Void {
		var fps = js.Browser.document.getElementById('fps');
		//#if debug
		fps.innerHTML = Std.string("FPS :" + Std.int(Ticker.getMeasuredFPS() * 10) / 10);
		//#end
		mapRenderer.tickHandler(mapControler);
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
			
			_main.mapRenderer.updateGridView();
			Timer.delay(_main.mapRenderer.updateGridView, 100);
		}
		
	}
	
	private function evt_key(e:Dynamic) {
		trace("evt_key" + e.keyCode );
		switch (e.keyCode) {
			case  32:
				mapRenderer.userTile.cmd(ANIM.ROCK);
				_main.serialize();
			case  107://+
					
					MapEvent.sdispatch( MapEvent.EVT_ELEVEPLUS);
			case  109://-
					MapEvent.sdispatch( MapEvent.EVT_ELEVEMOINS);
			default : null ;
		}
	}
	private function evt_clickMap(e:Event) {
		var me:MouseEvent = cast(e, MouseEvent);
		if (me.ctrlKey) {
			MapEvent.sdispatch( MapEvent.EVT_CTRLCLICK);
		} else {
			MapEvent.sdispatch( MapEvent.EVT_CLICK);
		}
	}
	//In CreateJS we have to update stage every time any display object changed.
    //So it's not necessary to update it on each frame but in this example choose the simple way.
	
	

	
	
	
	public function new ():Void {
		mapRenderer = new MapRenderer(mainContent);
		mapControler = new MapControler(mapRenderer);
		
		
		//TileEvent.getChannel().addEventListener(TileEvent.EVT_CLICK, evt_tileClick);
		
		
	}
	
	
	
	
	
	private function serialize() {
		trace(mapRenderer.serialize());
		
	}
	
	

	
}


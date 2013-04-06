package isoMet.models;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.MouseEvent;
import createjs.easeljs.Text;
import events.Mouse;
import haxe.Timer;
import isoMet.channel.TileEvent;
import isoMet.models.TileContentModel;
import isoMet.view.GfxFactory;
import js.html.Float32Array;
import js.html.VoidCallback;

/**
 * ...
 * @author GuyF
 */
class GridItems extends TileContentModel
{
	
	private var items:Array<TileContentModel>;
	#if debug
	private var debugInfo:Text;
	#end
	public function new(x:Int,y : Int,z : Int) 
	{
		super();
		invalideView = true;
		setMapCoords(x, y, z);
		items = new Array<TileContentModel>();
		#if debug
			debugInfo = new Text();
			
		#end
		
	}
	#if debug
	public function setDebugText(s:String) { 
		debugInfo.text = s;
		Timer.delay(function() {
				debugInfo.text = "";
			}, 1000);
	}
	#end
	
	
	public function setView(view:DisplayObject) { 
		invalideView = true;
		this.view = view;
		if (invalideView) updateContainer();
	}
	private var xx:Float;
	private var yy:Float;
	public function setViewCoord(x:Float, y:Float):Void {
		xx = x;
		yy = y;
		invalideView = true;
		
		
	}
	public function setSol(sol:DisplayObject) { 
		invalideView = true;
		if (view == null)  return;
		this.sol = sol;
		if (invalideView) updateContainer();
		#if debug
		Timer.delay(function() {
			invalideView = true;
			updateTraversable();
			if (invalideView) updateContainer();
		}
		, 1000);
		#end
		
		
	}
	
	private var sol:DisplayObject;
	public function update() {
		if (invalideView) updateContainer();
	}
	override public function getView():DisplayObject {
		
		//if (view == null) {
		//	invalideView = true;
		//	if (sol == null) sol = GfxFactory.sol("#CCCCCC",0);
			
			//view = new Container();
			//view.addEventListener(Mouse.CLICK, evt_mouseDown);
		//}
		
		update();
		if (sol == null && items.length == 0) {
			
			return null;
			
		}
		return view;
	}
	
	override private function updateTraversable() {
		trace("GridItems updateTraversable " + x + " " + y + " " + traversable);
		#if debug
		sol = GfxFactory.sol(traversable?"#CCCCCC":"#FF0000", traversable?0:0.5);
		if (!traversable) {
			sol = GfxFactory.sol(traversable?"#CCCCCC":"#FF0000", traversable?0:0.5);
		} else {
			sol = null;
		}
		#end
		
	}
	
	override private function evt_mouseDown(e:MouseEvent):Void 
	{
		trace("evt_mouseDown GridItems" + x + " " + y);
		TileEvent.sdispatch( TileEvent.EVT_CLICK, this);
	}
	
	private function updateContainer() {
		var view:Container;
		if (this.view != null) {
			view = cast(this.view, Container);
			view.removeAllChildren();
		} else {
			this.view = view = new Container();
		}
		if (sol == null && items.length == 0) {
			
			//view = null;
			
		} else {
			
			view.x = xx;
			view.y = yy;
			if (sol != null) {
				view.addChild(sol);
			}
			for (item in items) {
				view.addChild(item.getView());
			}
			#if debug
			if (view != null) {
				view.addChild(debugInfo);
			}
			#end
		}
		
		invalideView = false;
		
	}
	private var invalideView:Bool = false;
	public function addTile(tile:TileContentModel, z:Int) 
	{
		//tile.setMapCoords( z);
		invalideView = true;
		items.push(tile);
		
		
	}
	
	public function removeTile(tile:TileContentModel, z:Int) : Bool
	{
		invalideView = true;
		var ret= items.remove(tile);
		
		
		return ret;
	}
	
	
}
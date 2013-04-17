package isoMet.models;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.MouseEvent;
import createjs.easeljs.Point;
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
		invalideView = (xx != x) || (yy != y) ;
		xx = x;
		yy = y;
	}
	public function collMouseCoord(m:Point):Bool {
		#if debug
		#else
		if (!traversable) return false;
		#end
		var p = new Point(xx, yy - z * GridModel.HeightMultiplier);
		if ((Math.abs(p.x - m.x) < GridModel.tilesWidth/2) && (Math.abs(p.y - m.y) < GridModel.tilesHeight/2)) {
			return true;
		}
		return false;
	}
	
	var timerSol:Timer;
	public function setSol(sol:DisplayObject) { 
		invalideView = true;
		if (view == null)  return;
		this.sol = sol;
		if (invalideView) updateContainer();
		
		if (timerSol != null) {
			timerSol.stop();
		}
		timerSol=Timer.delay(function() {
			invalideView = true;
			updateTraversable();
			if (invalideView) updateContainer();
		}
		, 250);
		
		//#if debug
		//#end
		
		
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
	#if debug
	var soltrav : DisplayObject;
	var solNontrav : DisplayObject;
	#end
	
	override private function updateTraversable() {
		trace("GridItems updateTraversable " + x + " " + y + " " + traversable);
		
		#if debug
		//sol = GfxFactory.sol(traversable?"#CCCCCC":"#FF0000", traversable?0:0.5);
		//if (sol != null && sol != solNontrav && sol != soltrav) return;	
		if (!traversable && sol!=solNontrav || sol==null) {
			if (solNontrav == null) {
				solNontrav = GfxFactory.solEl(250, 0, 0);
				
			}
			sol = solNontrav;
			invalideView = true;
			
		} else if (sol!=soltrav || sol==null)  {
			
			if (soltrav == null ) {
				soltrav = GfxFactory.solEl(25 * z, 25 * z, 25 * z);
				
			}
			sol = soltrav;
			invalideView = true;
		}
		
		#else
			sol = null;
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
		#if debug
		if (sol == null) {
			updateTraversable();
		}
			
		#end
		if (sol == null && items.length == 0) {
			
			//view = null;
			
		} else {
			
			view.x = xx;
			view.y = yy;
			if (sol != null) {
				sol.y = -z * GridModel.HeightMultiplier;
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
	public function setZ(z:Int) 
	{
		
		this.z = z;
		for (item in items) {
				
			item.getView().y = item.y - z * GridModel.HeightMultiplier;
			item.getView().x = item.x;
		}
		updateTraversable();
		
		invalideView = true;
		//items.push(tile);
		
		
		
	}
	public function addTile(tile:TileContentModel, z:Int) 
	{
		//tile.setMapCoords( z);
		invalideView = true;
		items.push(tile);
		tile.getView().y = tile.y - z * GridModel.HeightMultiplier;
		tile.getView().x = tile.x;
		
		
	}
	
	public function removeTile(tile:TileContentModel, z:Int) : Bool
	{
		invalideView = true;
		var ret= items.remove(tile);
		
		
		return ret;
	}
	
	
}
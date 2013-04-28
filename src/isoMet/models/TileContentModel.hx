package isoMet.models;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.MouseEvent;
import events.Mouse;
import isoMet.view.GfxFactory;

import js.html.Float32Array;




/**
 * ...
 * @author GuyF
 */
typedef JsonTileItem = {
	var x:Int;
	var y:Int;
	var xOffset:Float;
	var yOffset:Float;
	var factory:String; // spritefromLib
	var item:String;
    
}

class TileContentModel
{
	// coordonnées sur la grille
	public var x:Int;
	public var y:Int;
	public var z:Int; // profondeur d'affichage
	
	public var factory:String; // spritefromLib
	public var item:String;
	
	public var xOffset:Float;
	public var yOffset:Float;
	
	public var traversable:Bool;
	public var cost : Int;
	//private var viewBuilder = isoMet.view.GfxFactory.mur;
	private var viewBuilder : Void  -> DisplayObject;
	public function new(?json:JsonTileItem) 
	{
		
		
		if (json == null) {
			
		} else {
			this.factory = json.factory;
			this.item = json.item;
			this.xOffset = json.xOffset;
			this.yOffset = json.yOffset;
			build(GfxFactory.builder(factory, [item]));
		}
		init();
	}

	private function build(?viewBuilder:Void  -> DisplayObject) 
	{
		if (viewBuilder == null) {
			this.viewBuilder = function() {
				return  isoMet.view.GfxFactory.mur();
			}
		} else {
			this.viewBuilder = viewBuilder;
		}
		
		
		
	}
	private function init():Void {
		x = 0;
		y = 0;
		z = 0;
		
		traversable = true;
		cost = 0;
	}
	
	public function setMapCoords(x:Int, y:Int, z : Int) {
			this.x = x;
			this.y = y;
			this.z = z;
	}
	
	/**
	 * true si l'element est traversable
	 * @return
	 */
	public function isTraversable():Bool {
		return traversable;
	}
	
	public function setTraversable(v:Bool) {
		if (traversable != v) {
			traversable = v;
			updateTraversable();
		}
		
	}
	
	private function updateTraversable() {
		trace("TileContentModel updateTraversable " + x + " " + y + " " + traversable);
	}
	
	/**
	 * cout en deplacement pour traverser l'element
	 * @return
	 */
	public function getCost():Int {
		return cost;
	}
	
	
	public static function zSort(x:TileContentModel,y:TileContentModel):Int {
		return x.z - y.z; 
	}
	
	private var view:DisplayObject=null;
	public function getView():DisplayObject {
		if (view==null) {
		 view = viewBuilder();// isoMet.view.GfxFactory.mur();
		 //view.x = ;
		 //view.y = yOffset;
		
		 //view.addEventListener(Mouse.CLICK, evt_mouseDown);
		 //view.addEventListener("contextmenu", evt_contectMenu);
		}
		
		return view;
		//	return throw "abstract method isoMet.models.TileContentModel::getView not implemented by"+Type.getClassName(Type.getClass(this));
	}
	
	private function evt_contectMenu(e:MouseEvent):Void 
	{
		
		trace("evt_contectMenu TileContentModel"+x+" "+y);
	}
	
	private function evt_mouseDown(e:MouseEvent):Void 
	{
		trace("evt_mouseDown TileContentModel" + x + " " + y);
		
		
	}
	
	
	
}
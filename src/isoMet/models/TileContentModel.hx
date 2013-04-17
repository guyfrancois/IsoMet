package isoMet.models;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.MouseEvent;
import events.Mouse;

import js.html.Float32Array;




/**
 * ...
 * @author GuyF
 */
class TileContentModel
{
	// coordonnées sur la grille
	public var x:Int;
	public var y:Int;
	public var z:Int; // profondeur d'affichage
	
	
	
	public var traversable:Bool;
	public var cost : Int;
	//private var viewBuilder = isoMet.view.GfxFactory.mur;
	private var viewBuilder : Void  -> DisplayObject;
	

	public function new(?viewBuilder:Void  -> DisplayObject) 
	{
		if (viewBuilder == null) {
			this.viewBuilder = function() {
				return  isoMet.view.GfxFactory.mur();
			}
		} else {
			this.viewBuilder = viewBuilder;
		}
		
		
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
package isoMet.models;
import createjs.easeljs.Bitmap;
import createjs.easeljs.Point;
import events.PreloadJS;
import haxe.Json;
import js.html.ImageElement;


/**
 * ...
 * @author GuyF
 */

 typedef JsonTile = {
	var b:String ; // image de fond
    var t : Array<Array<Int>>;// travsersable
    var p : Array<Array<Int>>;//profondeur;
	 var i : Array<Dynamic>;//items;
}



class GridModel 
{
	public static var HeightMultiplier : Int = 10;
	public static var tilesWidth : Int = 64;
	public static var tilesHeight : Int = 32;
	
	public var offsetWidth : Int;
	public var offsetHeight : Int;
	
	public var items:Array<Array<GridItems>>;
	public var xSize:Int;
	public var ySize:Int;
	
	public var src_backGround : String = "img/backgrounds/iso-4.jpg";
	public var src_map : String = "map/map_1.json";
	
	public var xBackOffset :Int;
	public var yBackOffset :Int;
	public var backGround : Bitmap;
	//private var length:Int;
	
	public function new(xSize:Int,ySize:Int) 
	{
		this.xSize = xSize;
		this.ySize = ySize;
		items = new Array<Array<GridItems>>();
		//length = xSize * ySize;
		for (x in 0...xSize) {
			items[x] = new Array<GridItems>();
			for (y in 0...ySize) {
				items[x][y] = new GridItems(x, y, 0);
			}
    	}
		
	}
	
	public function setMap(src_map:String) {
		this.src_map = src_map;
		var map = Main.loadQueue.getItem(src_map);
		if (map == null ) {
			Main.loadQueue.addEventListener(PreloadJS.COMPLETE, evt_mapLoad);
			
			Main.loadQueue.loadFile(src_map);
		} else {
			evt_mapLoad(null);
		}
	}
	
	
	public function setBackGround(src_backGround:String, xBackOffset:Int=0, yBackOffset:Int=0 ) {
		this.src_backGround = src_backGround;
		this.xBackOffset = xBackOffset;
		this.yBackOffset = yBackOffset;
		var backGround = Main.loadQueue.getItem(src_backGround);
		if (backGround == null ) {
			Main.loadQueue.addEventListener(PreloadJS.COMPLETE, evt_backLoad);
			Main.loadQueue.loadFile(src_backGround);
		} else {
			evt_backLoad(null);
		}
	}
	
	
	private function evt_backLoad(e) {
		trace("file loaded" + src_backGround);
		var item = Main.loadQueue.getItem(src_backGround);
		backGround = new Bitmap(src_backGround);
	
	}
	private function evt_mapLoad(e) {
		trace("file loaded" + src_map);
		var item : JsonTile = Main.loadQueue.getResult(src_map);
		
		deserialization(item);
	
	}
	
	/*
 	
	public function hasNext() {
        return( min < max );
    }

    public function next() {
        return min++;
    }
	
	public function iterator () : Iterator<GridItems>
    {
        return items.iterator();
    }
	
	*/
	
	public function addTile ( tile:TileContentModel, x : Int, y : Int, z : Int=0):Void {
		// TODO : ajouter des items dans la case
		items[x][y].addTile(tile, z);
	}
	
	public function removeTile ( tile:TileContentModel , x : Int, y : Int, z : Int=0):Void {
		items[x][y].removeTile(tile, z);
	}
	
	public function isInside(x : Int, y : Int):Bool {
		return x > 0 && y > 0 && x < xSize && y < ySize;
	}
	
	public function getTileAt ( x : Int, y : Int, ?z : Int):GridItems {
		return items[x][y];
	}
	
	public function update ():Void {
		
	}
	
	public function deserialization (js:JsonTile) {
		if (js == null) return;
		setBackGround(js.b);
		for (i in js.i) {
			
			addTile(new TileContentModel(i), i.x, i.y, 0);
		}
		for (x in 0...xSize) {
			for (y in 0...ySize) {
				items[x][y].setTraversable(js.t[x][y] == 1);
				items[x][y].setZ(js.p[x][y]);
			}
    	}
		
		
	}
	
	public function serialize():String {
		
		var t:Array<Array<Int>> = new Array<Array<Int>>();
		var p:Array<Array<Int>> = new Array<Array<Int>>();
		var i:Array<Dynamic> = new Array<Dynamic>();
		
		
		for (x in 0...xSize) {
				t[x] = new Array<Int>();
				p[x] = new Array<Int>();
				for (y in 0...ySize) {
					t[x][y] = getTileAt(x, y).isTraversable()?1:0;
					p[x][y] = getTileAt(x, y).z;
					
					i=i.concat(getTileAt(x, y).serialize());
					
				}
				
		}
		var j:JsonTile = {b:src_backGround, p:p, t:t ,i:i};
		 var js=Json.stringify(j);
		return js;
	}
	
	
	
}
package isoMet.controler;

import isoMet.models.GridItems;
import isoMet.models.GridModel;
import isoMet.models.TileContentModel;
import js.html.svg.AnimatedBoolean;

/**
 * ...
 * @author GuyF
 */
class Astar_2
{
	public var MAX_ITERATIONS:Int = 500;
	
	public var gridWidth:Int;
	public var gridHeight:Int;
	
	private var mapArray:GridModel;
	
	private var origin:TileContentModel;
	private var destination:TileContentModel;
	
	private var currentCell:PathCell;
	
	private var openList:Array<PathCell>;
	private var closedList:Array<PathCell>;
	
		
	public function new(map:GridModel) 
	{
		mapArray = map;
		gridWidth = GridModel.tilesWidth;
		gridHeight = GridModel.tilesHeight;
	}
	
	//Sets origin and destination
	public function setEndPoints(originX:Int, originY:Int, destX:Int, destY:Int):Void {
			origin = mapArray.getTileAt(originX,originY);
			destination = mapArray.getTileAt(destX,destY);
	}
	/**
	 * resolusion de chemin
	 * @return le liste des points de passages empilée
	 */
	public function solve():Array<TileContentModel> {
		openList = new Array<PathCell>();
		closedList = new Array<PathCell>();
		
		openList.push(new PathCell(origin,0));
		
		var iter:Int = 0;
		var sol:Bool;
		while (!(sol=stepPathfinder()) && iter<MAX_ITERATIONS) {
			iter++;
		}
		var solutionPath:Array<TileContentModel> = new Array<TileContentModel>();
		if (!sol) return solutionPath;
		solutionPath.push(destination);
		var count:Int = 0;
		var cellPointer:PathCell = closedList[closedList.length - 1];
		while(cellPointer.cell != origin) {
			if (count++ > 800) return solutionPath; //prevent a hang in case something goes awry
			solutionPath.push(cellPointer.cell);	
			//trace("cellPointer ->"+cellPointer.cout+" "+cellPointer.cell.x+"x"+cellPointer.cell.y+" "+cellPointer.cell.cost);
			cellPointer = cellPointer.get_parent();					
		}
	
		return solutionPath;
		
	}
	
	/**
	 * 
	 * @return true si chemin trouvé
	 */
	private function stepPathfinder():Bool {
		//a) Look for the lowest F cost square on the open list. We refer to this as the current square.
		currentCell = helper_PopLower(openList);
		if (currentCell == null) return true;
		//b) Switch it to the closed list.
		closedList.push(currentCell);
		//c) For each of the 8 squares adjacent to this current square …
		//If it is not walkable ignore it
		var adj = helper_adjacent_for(currentCell);
		for (item in adj) {
			//  if it is on the closed list, ignore it. 
			if (!arrCell_has(closedList, item)) {
				var inOpenList:PathCell = arrCell_findFirst(openList, item);
				if (inOpenList == null) {
					//If it isn’t on the open list, add it to the open list. Make the current square the parent of this square. Record the F, G, and H costs of the square. 
					inOpenList = new PathCell(item, helper_heuristic(destination,item));
					openList.push(inOpenList);
					inOpenList.set_parent(currentCell);
					
					if (item == destination) return true; // Chemin trouvé
				} else {
					if (inOpenList.isBetterParent(currentCell)) {
						inOpenList.set_parent(currentCell);
					}
				}
			}
		}
		
		return false;
	}
	
	//  lowest F cost square on the open list
	/**
	 * enleve du tableau et retourne la cellule de moinde cout
	 * @param arr : table de recherche
	 * @return la cellule de moindre cout
	 */
	// TODO : OPT  priorityQueue ??
	private function helper_PopLower(arr:Array<PathCell>):PathCell {
		if (arr == null || arr.length == 0) return null;
		var lower = helper_Lower(arr);
		arr.remove(lower);
		
		return lower;
	}
	
	private function helper_Lower(arr:Array<PathCell>):PathCell {
		if (arr == null || arr.length == 0) return null;
		var lower:PathCell = arr[0];
		// TODO : OPT : retest le 1er
		for (item in arr) {
			if (item.score < lower.score) {
				lower = item;
			}
		}
		return lower;
	}
	
	private function helper_adjacent_for(cell:PathCell):Array<TileContentModel> {
		var ret = new Array<TileContentModel>();
		var item:TileContentModel = null;
		for ( xx in [ -1, 0,1]) {		
			
			for (yy in [ -1, 0, 1]) {
				if (xx!=0 || yy!=0 ) {
					try {
						item = mapArray.getTileAt(cell.cell.x + xx, cell.cell.y + yy);
					} catch (e:Dynamic) {
						item = null;
					}
					if (item != null && item.isTraversable() ) {
							ret.push(item);
					}
				}
			}
		}
		
		return ret;
	}
	
	private function arrCell_has(arr:Array<PathCell>, cell:TileContentModel):Bool {
		
		return arr.filter(
			function (item : PathCell):Bool {
				return item.cell == cell;
			}
		).length > 0;
	
	}
	private function arrCell_findFirst(arr:Array<PathCell>, cell:TileContentModel):PathCell {
		
		var arrRet= arr.filter(
			function (item : PathCell):Bool {
				return item.cell == cell;
			}
		);
		if (arrRet.length > 0) {
			return arrRet[0];
		} else {
			return null;
		}
	
	}
	
	private function helper_heuristic(from:TileContentModel,to:TileContentModel):Int {
		
		return distance_manhattan(from.x, from.y, to.x, to.y);
	
	}
	/**
	 * TODO : extraire dans boite à outils
	 * calcul la distance de manhattan en 2 points
	 * @param	x0
	 * @param	y0
	 * @param	x1
	 * @param	y1
	 * @return
	 */
	private function distance_manhattan(x0:Int, y0:Int, x1:Int, y1:Int ):Int {
		return helper_absSub(x0, x1) + helper_absSub(y0, y1);
	}
	inline private function helper_absSub(a:Int, b:Int):Int {
		return a > b?a - b:b - a;
	}
	
	
}


class PathCell 
{
	private var parent:PathCell = null;
	public var cell : TileContentModel;
	/**
	 * heuristic :cout extimé de la cellule jusqu'a arrivée
	 */
	private var heuristic : Int = 0;
	
	/**
	 * coût extimé du depart jusqu'a arrivée
	 */
	public var score : Int = 0;
	/**
	 * cout reel pour atteindre cette cellule depuis le point de depart
	 */
	public var cout :Int = 0;
	
	public function new(cell:TileContentModel, heuristic : Int = 0 ) 
	{
		this.cell = cell;
		this.heuristic = heuristic*10;
	}
	public function set_parent(parent:PathCell) {
		this.parent = parent;
		cout = cell.cost +Math.round(Math.pow(parent.cell.z-cell.z,2))*10
			+ parent.cout
			+ helper_direction( parent.cell.x - cell.x, parent.cell.y - cell.y);
		score = cout + heuristic;
		#if debug
			//cast(cell, GridItems).setDebugText(Std.string(score));
		#end
	}
	private function helper_direction(dx:Int , dy:Int):Int {
		var sd = dx + dy;
		if (sd==1 || sd==-1) {
			return 10;
		}else {
			return 14;
		}
	}
	
	public function get_scoreWith(parent:PathCell):Int {
		var cout = cell.cost + Math.round(Math.pow(parent.cell.z-cell.z,2))*10 + parent.cout + helper_direction( parent.cell.x - cell.x, parent.cell.y - cell.y);
		
		return cout + heuristic;
	}
	public function get_parent():PathCell {
		return parent;
	}
	
	public function isBetterParent(currentCell:PathCell):Bool {
		return currentCell.score > get_scoreWith(currentCell);
	}
	
}
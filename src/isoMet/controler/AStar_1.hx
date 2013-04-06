package isoMet.controler;
import isoMet.models.GridItems;
import isoMet.models.GridModel;
import isoMet.models.TileContentModel;
import js.JQuery;

/**
 * ...
 * @author GuyF
 */
class AStar_1
{
		
		public var MAX_ITERATIONS:Int = 2000;
		
		public var gridWidth:Int;
		public var gridHeight:Int;
		
		private var originCell:TileContentModel;
		private var destinationCell:TileContentModel;
		private var currentCell:TileContentModel;
		
		private var openList:Array<TileContentModel>;
		private var closedList:Array<TileContentModel>;
		
		private var mapArray:GridModel;
		
		
	public function new(map:GridModel) 
	{
		mapArray = map;
		gridWidth = mapArray.tilesWidth;
		gridHeight = mapArray.tilesHeight;
	}
	
	public function solve():Array<TileContentModel> {
			//count = 0;
			reset();
			//trace(destinationCell.x, destinationCell.y);
			var isSolved:Bool = false;
			var iter:Int = 0;
			
			isSolved = stepPathfinder();

			while(!isSolved) {
				isSolved = stepPathfinder();
				if(iter++ > MAX_ITERATIONS) return null;
			}

			//set pointer to last cell on list
			//if pointer is pointing to originCell, then finish
			//if pointer is not pointing at origin cell, then process, and set pointer to parent of current cell	
			var solutionPath:Array<TileContentModel> = new Array<TileContentModel>();
			var count:Int = 0;
			var cellPointer:TileContentModel = closedList[closedList.length - 1];
			while(cellPointer != originCell) {
				if(count++ > 800) return null; //prevent a hang in case something goes awry
				solutionPath.push(cellPointer);				
				cellPointer = cellPointer.parentCell;					
			}
			
			return solutionPath;
				
		}
		
		private function stepPathfinder():Bool {
			//trace(cnt++);
			if(currentCell == destinationCell) {
				closedList.push(destinationCell);
				return true;
			}
			
			//place current cell into openList
			openList.push(currentCell);	

			//----------------------------------------------------------------------------------------------------
			//place all legal adjacent squares into a temporary array
			//----------------------------------------------------------------------------------------------------
			
			//add legal adjacent cells from above to the open list
			var adjacentCell:Array<TileContentModel> = new Array<TileContentModel>();
			var arryPtr:TileContentModel;			
			
			for( xx in [-1,1]) {				
				for(yy in [-1,1]) {					
					if(!(xx == 0 && yy == 0)) { //this is the current cell, so skip it.
						if (currentCell.x + xx >= 0 && currentCell.y + yy >= 0 && currentCell.x + xx < gridWidth && currentCell.y + yy < gridHeight) {
							arryPtr = mapArray.getTileAt(currentCell.x + xx, currentCell.y + yy,0);
							if(arryPtr != null) {
								
							
								
								if(arryPtr.isTraversable() && !Lambda.has(closedList,arryPtr)) {
									
									//trace(mapArray[currentCell.x + xx][currentCell.y + yy]);
									adjacentCell.push(arryPtr);
								}								
							}
						}
					}					
				}						
			}
						
						
			var g:Int;
			var h:Int;

			for(ii in 0...adjacentCell.length) {
								
				g = currentCell.g + 1;
				
				h = Math.round(Math.abs(adjacentCell[ii].x - destinationCell.x) + Math.abs(adjacentCell[ii].y - destinationCell.y));
					
				if(openList.indexOf(adjacentCell[ii]) == -1) { //is cell already on the open list? - no									

					adjacentCell[ii].f = g + h;
					adjacentCell[ii].parentCell = currentCell;
					adjacentCell[ii].g = g;					
					openList.push(adjacentCell[ii]);

				} else { //is cell already on the open list? - yes
					
					if(adjacentCell[ii].g < currentCell.parentCell.g) {
						
						currentCell.parentCell = adjacentCell[ii];
						currentCell.g = adjacentCell[ii].g + 1;
						currentCell.f = adjacentCell[ii].g + h;
						
					}
				}
			}
				
			//Remove current cell from openList and add to closedList.
			var indexOfCurrent = openList.indexOf(currentCell);
			closedList.push(currentCell);
			openList.splice(indexOfCurrent, 1);
			
			//Take the lowest scoring openList cell and make it the current cell.
			openList.sortOn("f", Array.NUMERIC | Array.DESCENDING);	
			
			if(openList.length == 0) return true;
			
			currentCell = openList.pop();			
			
			return false;
			
		}
		

		

		
		
		//Sets origin and destination
		public function setEndPoints(originX:Int, originY:Int, destX:Int, destY:Int):Void {
			originCell = mapArray.getTileAt(originX,originY);
			destinationCell = mapArray.getTileAt(destX,destY);
			currentCell = originCell;
			closedList.push(originCell);
			
		}
		
		//Resets algorithm without clearing cells
		public function reset():Void {
			
			
			openList = new Array<TileContentModel>();
			closedList = new Array<TileContentModel>();
			
			currentCell = originCell;
			closedList.push(originCell);
			
		}
		

		
	} //end class
	

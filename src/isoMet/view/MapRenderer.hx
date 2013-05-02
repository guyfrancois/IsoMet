package isoMet.view;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.Point;
import createjs.easeljs.Stage;
import createjs.tweenjs.Tween;
import isoMet.controler.Astar_2;
import isoMet.controler.MapControler;
import isoMet.models.GridItems;
import isoMet.models.GridModel;
import isoMet.models.Int2d;
import isoMet.models.PersoTile;
import isoMet.models.TileContentModel;
import js.html.Element;

/**
 * ...
 * @author GuyF
 */
class MapRenderer
{
	private var _stage:Stage;
	private var mainContent:Element;
	private var container:Element;
	
	private var width : Int;
	private var height : Int;
	
	private var g:GridModel;
	private var gview : Container;
	
	
	private var userPos_x:Int=27;
	private var userPos_y:Int = 20;
	
	
	public var userTile:PersoTile;
	
	
	private var invalideView:Bool = false;
	
	public function invalidate() {
		invalideView = true;
	}
	
	public function new(mainContent: Element) 
	{
		this.mainContent = mainContent;
		 _stage = new Stage(cast mainContent);
		 container  = mainContent.parentElement;
		 _stage.mouseEnabled = true;
		 width = container.clientWidth;
		height = container.clientHeight;
		
		g = new GridModel(50, 50);
		g.setMap("map/map_1.json");
		g.addTile(userTile = new PersoTile("perso_anim"), userPos_x, userPos_y, 0);
		userTile.x = 0;
		
		path =  new Array<TileContentModel>();
	}
	
	var pointMouse:Point;
	
	
	private var currentMouseTarget:GridItems;
	
    public function tickHandler(mapControler:MapControler):Void
    {
		currentMouseTarget = null;
		var newp = gview.globalToLocal(_stage.mouseX, _stage.mouseY);
		
		if (pointMouse == null || gf.GTools.fdistance_manhattan(newp.x, newp.y, pointMouse.x, pointMouse.y)>2) {
			pointMouse = newp;
			invalideView = true;
		}
      
		
		
		if (mvTween != null || invalideView ) {
			if (mapControler.getMouseTarget() != null) {
				mapControler.getMouseTarget().update();
			}
			
			paintCount();
			if (mouseIndic == null) {
				mouseIndic = GfxFactory.circle(255, 255, 0);
			}
			mapControler.updateMouseTarget(currentMouseTarget);
			if (currentMouseTarget != null) {
			
				mapControler.getMouseTarget().setSol(mouseIndic);
			} else if (mouseIndic.parent != null) {
				mouseIndic.parent.removeChild(mouseIndic);
			}
			
			invalideView = false;
		}
		
		_stage.update();
		  
		//_main.updateGridView();
    }
	
	public function evt_resize(e:Dynamic):Void {
		
		width = container.clientWidth;
		height = container.clientHeight;
		
		mainContent.setAttribute("width", Std.string(width));
		mainContent.setAttribute("height", Std.string(height) );
		
		trace("width : " + width + "| height : " + height);
		updateGridView();
		
		
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
			gview.scaleX = gview.scaleY = width / g.backGround.image.width;
			gview.x = - g.backGround.x * gview.scaleX;
			gview.y = - g.backGround.y * gview.scaleY;
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
	private var idDebug:Int = 0;
	private var mouseIndic:DisplayObject;
	
	private function paintTile(x:Int, y:Int) {
		var items:GridItems = g.getTileAt(x, y, 0);
		var itView : DisplayObject = items.getView();
		var over:Bool = false;
		if (pointMouse!=null && items.collMouseCoord(pointMouse)) {
			trace("MouseOver " + items.x + " " + items.y);
			currentMouseTarget = items;
			
		}
		if (itView == null) {
			return;
		}
		var p = itView.localToGlobal(0, 0);
		//p.x = p.x * _stage.scaleX;-------------
		//p.y = p.y * _stage.scaleY;
		
	//	if (p.x>-g.tilesWidth && p.x<width+g.tilesWidth && p.y>-g.tilesHeight && p.y<height+g.tilesHeight) {
			gview.addChild(itView);
			#if debug
					//items.setDebugText(/*Std.string(idDebug) + " " + */Std.string(x) + "," + Std.string(y));
			#end
					/*
					gview.addChild(
							new Text(Std.string(idDebug) + " " + Std.string(x) + "," + Std.string(y))
						).set({x:itView.x , y: itView.y});*/
		idDebug++;
	//		} 
		
	}
	
	/**************************************************************************************************/
	private var path:Array<TileContentModel>;
	
	
	
	public function helperMoveTo(x:Int,y:Int) {
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
	
	/**
	 * modifie "userPos_x" & "userPos_y", "mvTween" , 
	 * depile "path" (parcours du chemin)
	 * mise à jour graphic userTile.getView(), 
	 * @param	x position cible du deplacement
	 * @param	y
	 */
	private function move_step(x:Int, y:Int) {
				//--> determiner le sens du deplacement
		//if (sd==0 /*horizontal*/ || sd>1 ||sd <-1 /* vertical*/) {
		//
		//} else if (sd==1) {
		//
		//}else if (sd==-1) {
			//
		//}
		
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
		var zs =  g.getTileAt(userPos_x, userPos_y).z * GridModel.HeightMultiplier;
		var zf =  g.getTileAt(x, y).z * GridModel.HeightMultiplier;
		var ddz : Float =  (zf-zs) / 2 ;
		var sd = dx + dy;
		// position anticipé de la position de l'utilisateur
		
		userPos_x =  x;
		userPos_y = y;
		var speed = Math.round(alphMoveSpeed  * (helper_direction(dx, dy)+ddz));
		
		trace("speed" + speed);	
		invalideView = true;
		
		helper_direction_move(userTile, dx, dy,ddz) ;
		(mvTween=Tween.get(view,null,null,true)).to({ x:ddx, y:ddy-(zs+ddz)}, speed).call(
			function() {
				
				
				updateDepthNearMove(userTile, from_x, from_y, x, y);
				view.set( { x: -ddx, y: -ddy-(zf-ddz) } );
				userPos_x =  x;
				userPos_y = y;
				trace("alph complete userTile.dx "+ view.x + " userTile.dy " +view.y ); 
				invalideView = true;
				(mvTween=Tween.get(view,  null,null,true)).to( { x:0, y:-zf }, speed).call(
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
							userTile.cmd(ANIM.IDLE);
						}
					}
				);
				
			}
		);
	}
	
	private function helper_direction_move(pj:PersoTile,dx:Int , dy:Int,ddz:Float) {
		var f = 1 + ddz / 10;
		if (dx > 0) { // gauche
			if (dy > 0) {
				userTile.cmd(ANIM.W_B,f);
			} else if (dy < 0) {
				userTile.cmd(ANIM.W_G,f);
			} else {
				userTile.cmd(ANIM.W_BG,f);
			}
		} else if (dx < 0) {
			if (dy > 0) {
				userTile.cmd(ANIM.W_D,f);
			} else if (dy < 0) {
				userTile.cmd(ANIM.W_H,f);
			} else {
				userTile.cmd(ANIM.W_HD,f);
			}
		} else  {
			if (dy > 0) {
				userTile.cmd(ANIM.W_BD,f);
			} else if (dy < 0) {
				userTile.cmd(ANIM.W_HG,f);
			} else {
				userTile.cmd(ANIM.IDLE);
			}
		}
		
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
	
	
	/******************************************************************************************************/

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
	/*****************************************************************************************************/
	public function serialize():String {
		return g.serialize();
		
	}
	
}
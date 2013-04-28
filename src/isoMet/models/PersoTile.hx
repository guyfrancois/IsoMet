package isoMet.models;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.MovieClip;
import createjs.easeljs.BitmapAnimation;
import haxe.macro.Format;

/**
 * ...
 * @author GuyF
 */
enum ANIM {
		/**
		 * en attente
		 */
       IDLE;
	   /**
	    * marche à droite
	    */
	   W_D ;
	   W_G ;
	   W_BD;
	   W_BG;
	   W_HG;
	   W_HD;
	   W_B;
	   W_H;
	   ROCK;
}
	
class PersoTile extends TileContentModel
{

	public function new(item:String) 
	{
		super({x:0,y:0,xOffset:0,yOffset:0,factory:"animFromLib",item:item});
		lastCmd = IDLE;
	}
	
	
	public override function getView():DisplayObject {
		if (view==null) {
		 view = viewBuilder();// isoMet.view.GfxFactory.mur();
		
		
		 //view.addEventListener(Mouse.CLICK, evt_mouseDown);
		 //view.addEventListener("contextmenu", evt_contectMenu);
		}
		
		return view;
		//	return throw "abstract method isoMet.models.TileContentModel::getView not implemented by"+Type.getClassName(Type.getClass(this));
	}
	private var lastCmd:ANIM ;
	public function cmd(action:ANIM,f:Float=1) {
		if (view == null) return;
		var anim = cast(view, BitmapAnimation);
		if (lastCmd != action) {
			lastCmd = action;
			
		
			switch (action) {
				case IDLE : 
					anim.scaleX=1;
					anim.gotoAndPlay("IDLE");
				case W_D : 
					anim.scaleX=1;
					anim.gotoAndPlay("W_D");
				case W_G : 
					anim.scaleX=-1;
					anim.gotoAndPlay("W_D");
					
				case W_BD : 
					anim.scaleX=1;
					anim.gotoAndPlay("W_BD");
				case W_BG : 
					anim.scaleX=-1;
					anim.gotoAndPlay("W_BD");
					
				case W_HG : 
					anim.scaleX=1;
					anim.gotoAndPlay("W_TG");
				case W_HD : 
					anim.scaleX=-1;
					anim.gotoAndPlay("W_TG");
					
				case W_B : 
					anim.scaleX=1;
					anim.gotoAndPlay("W_B");
				case W_H : 
					anim.scaleX=1;
					anim.gotoAndPlay("W_H");
				default : 
					anim.gotoAndPlay("ROCK");
					
					
			}
		}
		
		var _anim:Dynamic = untyped __js__("anim._animation");
		if (_anim) {
			
			var __anim = {
					name : _anim.name, 
					frequency : f, 
					next : _anim.next, 
					frames : _anim.frames
			} 
			//_anim.frequency = 10;
			untyped __js__("anim._animation=__anim");
			
			trace("anim" +_anim );
		}
		
		
	}
	
}
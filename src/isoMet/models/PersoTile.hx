package isoMet.models;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.MovieClip;

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

	public function new(?viewBuilder:Void -> DisplayObject) 
	{
		super(viewBuilder);
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
	public function cmd(action:ANIM) {
		if (view == null) return;
		if (lastCmd == action) return;
		lastCmd = action;
		var anim = cast(view, MovieClip);
		
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
	
}
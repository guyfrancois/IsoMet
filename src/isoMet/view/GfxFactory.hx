package isoMet.view;
import createjs.easeljs.BitmapAnimation;
import createjs.easeljs.Container;
import createjs.easeljs.DisplayObject;
import createjs.easeljs.Graphics;
import createjs.easeljs.Shadow;
import createjs.easeljs.Shape;
import createjs.easeljs.SpriteSheet;
import createjs.easeljs.SpriteSheetBuilder;
import createjs.easeljs.MovieClip;
import haxe.ds.StringMap;
import isoMet.models.GridModel;

/**
 * ...
 * @author GuyF
 */
class GfxFactory
{

	public static function builder(factory:String, arg:Array<Dynamic>):Void  -> DisplayObject {
		var f : Dynamic;
		switch (factory) {
			case  "animFromLib" :
				return GfxFactory.animFromLib.bind(arg);
			case "autoAnimfromLib" :
				return GfxFactory.autoAnimfromLib.bind(arg);
			case "mur" :
				return GfxFactory.mur.bind();
			case "spritefromLib" :
				return GfxFactory.spritefromLib.bind(arg);
			default :
				return GfxFactory.mur.bind();
				
		}
		//return   f.bind(GfxFactory,arg);
		//var f = Reflect.field(GfxFactory, factory);
		/*
		if (f != null) {
			return   f.bind(GfxFactory,arg);
		} else {
			return GfxFactory.mur.bind();
		}
		*/
		
	}
	public static function exemple():DisplayObject {
		return new Shape();
	}
	
	
	private static var bmpAnimDic:StringMap<BitmapAnimation>;
	/**
	 * reste  tester
	 * @param	id
	 * @return
	 */
	public static function animFromLib(arg:Array<Dynamic>):DisplayObject {
		trace("Build animFromLib " + arg);
		if (bmpAnimDic == null) {
			bmpAnimDic = new StringMap<BitmapAnimation>();
		}
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		var id = arg[0];
		var scale = 1;
		var bmpAnim : BitmapAnimation;
		
		if (bmpAnimDic.exists(id)) {
			//bmpAnim = bmpAnimDic.get(id).clone();
			var s = bmpAnimDic.get(id).spriteSheet.clone();
			
			var arAns:Array<Dynamic>=null;
			untyped __js__("arAns = s.getAnimations()");
			trace("arAns " + arAns);
			var arAnsRet = new Array<Dynamic>();
			for (an in arAns) {
				
				var anr = {
					name : an.name, 
					frequency : 1, 
					next : an.next, 
					frames : an.frames
				}
				arAnsRet[an.name] = anr;
				untyped __js__("s._data[an.name] = anr");
			}
			untyped __js__("s._animations = arAnsRet");
			
			bmpAnim = new BitmapAnimation(s);
			
		} else {
		
		//scale = arg[1]==null?arg[1]:1;
		var S:Class<MovieClip> = untyped __js__("lib[id]");
		if (S == null) {
			return mur(255, 0, 0);
		}
		
		
		var ret:MovieClip = Type.createInstance(S, []);
		ret.scaleX = ret.scaleY = scale;
		ret.mouseEnabled = false;
		
		var builder:SpriteSheetBuilder = new SpriteSheetBuilder();
		
		builder.maxWidth = 256;
		builder.maxHeight = 256;
		builder.addMovieClip(ret);
		var spriteSheet = builder.build();
		
		bmpAnim = new BitmapAnimation(spriteSheet);
		trace("bounds "+id+">"+ bmpAnim.getBounds());
		bmpAnimDic.set(id, bmpAnim);
		}
		bmpAnim.gotoAndPlay("IDLE");
		return bmpAnim;
		
	}
	

	
	public static function autoAnimfromLib(arg:Array<Dynamic>):DisplayObject {
		trace("Build autoAnimfromLib "+arg);
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		var id = arg[0];
		var scale = 1;
		
		//scale = arg[1]==null?arg[1]:1;
		var S:Class<MovieClip> = untyped __js__("lib[id]");
		if (S == null) {
			return mur(255, 0, 0);
		}
		
		
		var ret:MovieClip = Type.createInstance(S, []);
		ret.scaleX = ret.scaleY = scale;
		ret.mouseEnabled = false;
		
		
		return ret;
		
	}
	
	
	
	
	
	public static function displayObjectfromLib(arg:Array<Dynamic>):DisplayObject {
		trace("Build displayObjectfromLib "+arg);
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		var id = arg[0];
		
		var scale = 1;
		//scale = arg[1]==null?arg[1]:1;
		
		var S:Class<DisplayObject> = untyped __js__("lib[id]");
		if (S == null) {
			return mur(255, 0, 0);
		}
		var ret:DisplayObject = Type.createInstance(S, []);
		ret.scaleX = ret.scaleY = scale;
		ret.cache( -64, -200, 128, 264, scale);
		ret.mouseEnabled = false;
		return ret;
		
	}
	
	public static function spritefromLib(arg:Array<Dynamic>):DisplayObject {
		trace("Build spritefromLib "+arg);
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		var id = arg[0];
		var scale = 1;
		//scale = arg[1]==null?arg[1]:1;
		
		var S:Class<BitmapAnimation> = untyped __js__("spriteLib[id]");
		if (S == null) {
			return mur(255, 0, 0);
		}
		var ret:BitmapAnimation = Type.createInstance(S, []);
		ret.scaleX = ret.scaleY = scale;
		
	//	ret.cache( -64, -200, 128, 264, scale);
		ret.mouseEnabled = false;
		
		return ret;
		
	}
	
	public static function circle(r:Int = 200, g:Int = 200, b:Int = 200):DisplayObject {
		var color = Graphics.getRGB(r, g, b, 1);
		var w_2 = Math.round(GridModel.tilesWidth / 2);
		var h_2 = Math.round(GridModel.tilesHeight / 2);
		var gfx = new Shape();
		
        //On accéde a la propriété graphics
        gfx.graphics
                //On initie un nouveau tracé (ici, gris)
               
				.beginStroke(color)
                //On applique les actions vues dans le schémà
                //.moveTo(-w_2/2, -h_2/2)
				.drawEllipse(-w_2/2,-h_2/2, w_2, h_2)
				//.drawCircle(0,0,w_4)
                
                //On termine le tracé.
                .closePath();
        return gfx;
	}
	
	public static function sol(fill:String = "#CCCCCC", alpha:Float = .0):DisplayObject {
		var w_2 = Math.round(GridModel.tilesWidth / 2);
		var h_2 = Math.round(GridModel.tilesHeight / 2);
		var gfx = new Shape();
		gfx.alpha = alpha;
        //On accéde a la propriété graphics
        gfx.graphics
                //On initie un nouveau tracé (ici, gris)
                .beginFill(fill)
				.beginStroke("#FFCC00")
                //On applique les actions vues dans le schémà
                .moveTo(w_2,0)
                .lineTo(0,-h_2)
                .lineTo(-w_2,0)
                .lineTo(0,h_2)
                .lineTo(w_2,0)
                //On termine le tracé.
                .closePath();
        return gfx;
	}
	public static function solEl(r:Int = 200, g:Int = 200, b:Int = 200):DisplayObject {
		var color = Graphics.getRGB(r, g, b, 0.5);
		var color_g = Graphics.getRGB(Math.round(0.8*r), Math.round(0.8*g), Math.round(0.8*b),0.5);
		var color_d = Graphics.getRGB(Math.round(0.6*r), Math.round(0.6*g), Math.round(0.6*b),0.5);
		var w_2 = Math.round(GridModel.tilesWidth / 2);
		var h_2 = Math.round(GridModel.tilesHeight / 2);
		var gfx = new Shape();
		
        //On accéde a la propriété graphics
        gfx.graphics
                //On initie un nouveau tracé (ici, gris)
                .beginFill(color)
				.beginStroke(color_g)
                //On applique les actions vues dans le schémà
                .moveTo(w_2,0)
                .lineTo(0,-h_2)
                .lineTo(-w_2,0)
                .lineTo(0,h_2)
                .lineTo(w_2, 0);
                //On termine le tracé.
				/**
				*  Face  av droite.
				*/
				//gfx.graphics.beginFill(color_d)
				//.moveTo(w_2, 0).lineTo(w_2, z).lineTo(0, z + h_2).lineTo(0, h_2).lineTo(w_2, 0);
				
				/**
				*  Face  av gauche.
				*/
				//gfx.graphics.beginFill(color_g)
				//.moveTo(-w_2, 0).lineTo(-w_2, z).lineTo(0, z + h_2).lineTo(0, h_2).lineTo(-w_2, 0);
		
                gfx.graphics.closePath();
		 return gfx;
	}
	
	public static function mur(r:Int = 200, g:Int = 200, b:Int = 200):DisplayObject {
		trace("Build mur "+r+" "+g+" "+b);
		var w_2 = Math.round(GridModel.tilesWidth / 2); // 64
		var h_2 = Math.round(GridModel.tilesHeight / 2); // 32
		var h = 18;
		var h_2ph = h_2 + h;
		
		
		
		var color = Graphics.getRGB(r, g, b);
		var color_g = Graphics.getRGB(Math.round(0.8*r), Math.round(0.8*g), Math.round(0.8*b));
		var color_d = Graphics.getRGB(Math.round(0.6*r), Math.round(0.6*g), Math.round(0.6*b));
		
		var gfx = new Shape();
		/**
         * Face droite.
         */
		gfx.graphics.beginFill(color_d);
        gfx.graphics.moveTo(0,-h).lineTo(0,h_2).lineTo(w_2,0).lineTo(w_2,-h_2ph).lineTo(0,-h);
        
        /**
         * Face supérieure.
         */
        gfx.graphics.beginFill(color);
        gfx.graphics.moveTo(w_2,-h_2ph).lineTo(0,-(h_2ph+h_2)).lineTo(-w_2,-h_2ph).lineTo(0,-h).lineTo(w_2,-h_2ph);
        
        /**
         * Face gauche.
         */
        gfx.graphics.beginFill(color_g);
        gfx.graphics.moveTo(-w_2,-h_2ph).lineTo(-w_2,0).lineTo(0,h_2).lineTo(0,-h).lineTo(-w_2,-h_2ph);
        gfx.graphics.closePath();
        return gfx;
	}
	
}
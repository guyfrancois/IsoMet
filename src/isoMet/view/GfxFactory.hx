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
import isoMet.models.GridModel;

/**
 * ...
 * @author GuyF
 */
class GfxFactory
{

	public static function exemple():DisplayObject {
		return new Shape();
	}
	
	/**
	 * reste  tester
	 * @param	id
	 * @return
	 */
	public static function animFromLib(id:String):BitmapAnimation {
		
		var builder:SpriteSheetBuilder = new SpriteSheetBuilder();
		builder.defaultScale = 1;
		builder.maxWidth = 256;
		
		builder.addMovieClip(displayObjectfromLib(id));
		
		
		
		var bmpAnim = new BitmapAnimation(builder.build());
	
		bmpAnim.gotoAndPlay(0);
		
		
		//var ret:Container = new Container();
		//builder.addEventListener("complete" , function(e:Dynamic) {
		//		animFromLib_complete(e, ret);
		//});
		//builder.buildAsync();
		//return ret;
		return bmpAnim;
		
	}
	
	private static function animFromLib_complete(e:Dynamic, targetDisplay:Container) {
		
		var spriteSheet:SpriteSheet = e.target.spriteSheet;
		
		var bmpAnim = new BitmapAnimation(spriteSheet);
	
		targetDisplay.addChild(bmpAnim);
		
		bmpAnim.gotoAndPlay(0);
	}
	
	public static function autoAnimfromLib(id:String,scale:Float=1):DisplayObject {
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		
		var S:Class<DisplayObject> = untyped __js__("lib[id]");
		if (S == null) {
			return mur(255, 0, 0);
		}
		var ret:DisplayObject = Type.createInstance(S, []);
		ret.scaleX = ret.scaleY = scale;
		ret.mouseEnabled = false;
		return ret;
		
	}
	
	
	
	public static function displayObjectfromLib(id:String,scale:Float=1):DisplayObject {
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		
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
	
	public static function spritefromLib(id:String,scale:Float=1):DisplayObject {
		//var S:Class<Dynamic> = Type.resolveClass("lib." + id); // valable que pour des class registered
		
		// TODO : trouver un moyen safe d'acceder au element de library
		
		var S:Class<BitmapAnimation> = untyped __js__("spriteLib[id]");
		if (S == null) {
			return mur(255, 0, 0);
		}
		var ret:BitmapAnimation = Type.createInstance(S, []);
		ret.scaleX = ret.scaleY = scale;
		
	//	ret.cache( -64, -200, 128, 264, scale);
		ret.mouseEnabled = false;
		//ret.shadow=new Shadow("#000000",10,10,1);
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
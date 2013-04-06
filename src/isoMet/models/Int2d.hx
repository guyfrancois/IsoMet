package isoMet.models;

/**
 * ...
 * @author GuyF
 */
class Int2d
{

	public function new(?x:Int = 0, ?y:Int = 0):Void {
		this.x = x;
		this.y = y;
	}
	public function clone():Int2d {
		return new Int2d(x, y);
	}
	public function toString():String {
		return "[Int2d (x="+x+" y="+y+")]";
	}

	public var x:Int;
	public var y:Int;
	
}
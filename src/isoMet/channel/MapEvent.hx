package isoMet.channel;
import createjs.easeljs.Point;
import gf.channels.DataBringerEvent;
import gf.channels.EventChannel;

/**
 * ...
 * @author GuyF
 */
class MapEvent extends DataBringerEvent<Point>
{

	static private var EVENT_CHANNEL_NAME:String = 'mapChannel';
	
	
	static public var EVT_CLICK:String = 'evt_click';
	static public var EVT_CTRLCLICK:String = 'evt_CTRLclick';
	static public inline var EVT_ELEVEPLUS:String = "evtEleveplus";
	static public inline var EVT_ELEVEMOINS:String = "evtElevemoins";
	
	
	
	static public function sdispatch(type:String, initialData:Point=null):MapEvent	{
			var notif:MapEvent = new MapEvent(type, initialData);
			notif.dispatch();
			return notif;
	}
	
	override public function dispatch()	{
			getChannel().dispatchEvent(this);
	}
		
		
	static private var _channel:EventChannel; 
	static public function getChannel():EventChannel	{
		if (_channel == null) {
			_channel = EventChannel.get(EVENT_CHANNEL_NAME);
		}
		return _channel;
	}
}
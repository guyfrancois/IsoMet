package isoMet.channel;
import gf.channels.DataBringerEvent;
import gf.channels.EventChannel;
import isoMet.models.TileContentModel;

/**
 * ...
 * @author GuyF
 */
class TileEvent extends DataBringerEvent<TileContentModel>
{

	static private var EVENT_CHANNEL_NAME:String = 'tileChannel';
	
	
	static public var EVT_CLICK:String = 'evt_click';
	
	
	
	static public function sdispatch(type:String, initialData:TileContentModel):TileEvent	{
			var notif:TileEvent = new TileEvent(type, initialData);
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
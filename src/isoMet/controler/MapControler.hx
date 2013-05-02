package isoMet.controler;
import isoMet.channel.MapEvent;
import isoMet.models.GridItems;
import isoMet.view.MapRenderer;

/**
 * ...
 * @author GuyF
 */
class MapControler
{

	private var currentMouseTarget:GridItems;
	public function updateMouseTarget(currentMouseTarget:GridItems = null) {
		this.currentMouseTarget = currentMouseTarget;
	}
	
	public function getMouseTarget():GridItems {
		return currentMouseTarget;
	}
	
	private var renderer:MapRenderer;
	
	
	
	public function new(renderer:MapRenderer) 
	{
		this.renderer = renderer;
		MapEvent.getChannel().addEventListener(MapEvent.EVT_CLICK, evt_MapClick);
		MapEvent.getChannel().addEventListener(MapEvent.EVT_CTRLCLICK, evt_MapCtrlClick);
		MapEvent.getChannel().addEventListener(MapEvent.EVT_ELEVEPLUS, evt_MapElevePlus);
		MapEvent.getChannel().addEventListener(MapEvent.EVT_ELEVEMOINS, evt_MapEleveMoins);
	}
	
	public function evt_MapClick(e:MapEvent):Void 
	{
		
		trace("evt_MapClick " + e.initialData);
		
		//var p = getGridPos(e.initialData);
		if (currentMouseTarget != null) {
		//	currentMouseTarget.setSol(GfxFactory.circle(255, 255, 0));
			if (!currentMouseTarget.isTraversable()) return;
			this.renderer.helperMoveTo(currentMouseTarget.x, currentMouseTarget.y);
		}
		
		//if (!g.isInside(p.x, p.y)) return;
		//if (!g.getTileAt(p.x, p.y).isTraversable()) return;
		
	}
	private function evt_MapElevePlus(e:MapEvent):Void 
	{
		
		trace("evt_MapElevePlus " + e.initialData);
		if (currentMouseTarget != null) {
			currentMouseTarget.setZ(currentMouseTarget.z+1);
		
		}
		renderer.invalidate();
		
		
	}
	private function evt_MapEleveMoins(e:MapEvent):Void 
	{
		trace("evt_MapEleveMoins " + e.initialData);
		if (currentMouseTarget != null) {
			currentMouseTarget.setZ(currentMouseTarget.z-1);
		
		}
		renderer.invalidate();
		
	}
	
	private function evt_MapCtrlClick(e:MapEvent):Void 
	{

		if (currentMouseTarget != null) {
			currentMouseTarget.setTraversable(!currentMouseTarget.isTraversable());
		
		}
		renderer.invalidate();
		
	}
	
}
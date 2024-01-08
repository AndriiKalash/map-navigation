import { Marker } from 'react-leaflet';
import L from 'leaflet';
import PopupRender from './PopupRender';

function RenderMarker({ position, popupData }) {
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <Marker position={position} icon={customIcon}>
      <PopupRender popupData={popupData} />
    </Marker>
  );
}

export default RenderMarker;

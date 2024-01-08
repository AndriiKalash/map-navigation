import { MapContainer, TileLayer } from 'react-leaflet';
import RenderMarker from '../marker/RenderMarker';
import { MapEventHandler } from './MapEventHandler';
import { useDispatch, useSelector } from 'react-redux';
import { dataSelector, setCoordinates } from '../../redux/data/slice';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.scss';

function MapComponent({ setPosition, formdata }) {
  const dispatch = useDispatch();
  const { coordinates, fullData } = useSelector(dataSelector);

  const handlePickPosition = (e) => {
    if (formdata.position.length > 0) return;

    const { lat, lng } = e.latlng;
    const newMarker = [lat, lng];
    // position for useSetData:
    setPosition(newMarker);
    // all markers
    dispatch(setCoordinates(newMarker));
  };

  return (
    <div>
      <MapContainer
        className={styles.root}
        center={[49.0, 31.0]}
        zoom={6}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.map((position, i) => (
          <RenderMarker key={i} position={position} popupData={fullData[i]} />
        ))}
        <MapEventHandler onMapClick={handlePickPosition} />
      </MapContainer>
    </div>
  );
}

export default MapComponent;

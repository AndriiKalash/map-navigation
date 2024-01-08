import { useEffect } from 'react';
import { useMap, useMapEvents } from 'react-leaflet';
import { useDispatch } from 'react-redux';
import { getLSData } from '../../utils/getLSData';
import { getVisibleData } from '../../redux/data/slice';

export const MapEventHandler = ({ onMapClick }) => {
  useMapEvents({ click: onMapClick });
  const map = useMap();
  const dispatch = useDispatch();

  useEffect(() => {
    const updateVisibleMarkers = () => {
      const bounds = map.getBounds();

      const savedData = getLSData();

      // if mark beyond the visible area, the visible key in obj is set to false:
      const visibleData = savedData.map((data) => ({
        ...data,
        visible: bounds.contains(data.position),
      }));

      dispatch(getVisibleData(visibleData));
    };

    updateVisibleMarkers();

    map.on('moveend', updateVisibleMarkers);

    return () => map.off('moveend', updateVisibleMarkers);
  }, [map]);
};

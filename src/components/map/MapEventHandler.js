import React from 'react';
import { useMap, useMapEvents } from 'react-leaflet';

const MapEventHandler = React.memo(
  ({ onMapClick, onMoveMap }) => {
    const map = useMap();
    useMapEvents({ click: onMapClick, moveend: () => onMoveMap(map) });
  },
  (prevProps, nextProps) => {
    return prevProps.onMapClick === nextProps.onMapClick;
  }
);

export default MapEventHandler;

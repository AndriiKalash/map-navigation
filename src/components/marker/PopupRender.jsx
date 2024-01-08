import { Popup } from 'react-leaflet';
import AdvertisementCard from '../advertismentCard/AdvertisementCard';

function PopupRender({ popupData }) {
  return (
    <Popup>
      {popupData ? (
        <AdvertisementCard cardObj={popupData} />
      ) : (
        <p>here is will be your advertisment</p>
      )}
    </Popup>
  );
}

export default PopupRender;

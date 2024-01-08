import { useSelector } from 'react-redux';
import { dataSelector } from '../../redux/data/slice';
import AdvertisementCard from '../advertismentCard/AdvertisementCard';
import styles from './AdvertisementList.module.scss';

function AdvertisementList() {
  const { fullData } = useSelector(dataSelector);

  return (
    <div className={styles.container}>
      <h2>Advertisement</h2>
      <ul>
        {fullData
          .filter((obj) => obj.visible === true)
          .map((obj, i) => (
            <AdvertisementCard key={i} cardObj={obj} />
          ))}
      </ul>
    </div>
  );
}

export default AdvertisementList;

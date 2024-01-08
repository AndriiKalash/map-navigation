import styles from './AdvertisementCard.module.scss';

export default function AdvertisementCard({ cardObj }) {
  return (
    <li className={styles.liContainer}>
      <h5>{cardObj.title}</h5>
      <img src={cardObj.image} alt="item" />
      <p className={styles.text}>{cardObj.description}</p>
    </li>
  );
}

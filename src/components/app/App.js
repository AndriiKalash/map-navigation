import MapComponent from '../map/MapComponent';
import styles from './App.module.scss';
import InputForm from '../form/InputForm';
import AdvertisementList from '../advertisement/AdvertisementList';
import { useSetData } from '../../hooks/useSetData';

function App() {
  const {
    formData,
    setFormData,
    handleChangeFile,
    handleChangeInput,
    handleFormData,
    setPosition,
  } = useSetData();

  return (
    <div className={styles.app}>
      <InputForm
        data={formData}
        setFormData={setFormData}
        handleChangeFile={handleChangeFile}
        handleChangeInput={handleChangeInput}
        handleFormData={handleFormData}
      />
      <MapComponent setPosition={setPosition} formdata={formData} />
      <AdvertisementList />
    </div>
  );
}

export default App;

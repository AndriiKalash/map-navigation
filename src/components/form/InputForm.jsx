import { useDispatch } from 'react-redux';
import { getData } from '../../redux/data/slice';
import styles from './InputForm.module.scss';

function InputForm({
  data,
  handleChangeFile,
  handleChangeInput,
  handleFormData,
}) {
  const { title, description, image, position } = data;
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (position.length === 0) return;

    const newFormData = {
      title,
      description,
      image,
      position,
      visible: true,
    };
    handleFormData(e);
    dispatch(getData(newFormData));
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add your advertisment:</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          className={styles.title}
          type="text"
          required
          name="title"
          autoFocus
          value={title}
          onChange={(e) => handleChangeInput(e, 'title')}
        />
        <textarea
          className={styles.description}
          type="text"
          required
          name="description"
          value={description}
          onChange={(e) => handleChangeInput(e, 'description')}
        />
        <input required type="file" onChange={handleChangeFile} />
        {image && (
          <div>
            <h5>Preview:</h5>
            <img src={image} alt="Preview" />
          </div>
        )}
        {position.length === 0 && (
          <p style={{ color: 'red' }}>add position on the map!</p>
        )}
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default InputForm;

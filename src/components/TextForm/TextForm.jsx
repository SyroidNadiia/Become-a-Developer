import Notiflix from 'notiflix';
import css from './TextForm.module.css';

const TextForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value;

    const words = text.split(' ');

    const uniqueChars = words.reduce((acc, word) => {
      const chars = word.split('');

      const uniqueCharInWord = chars.find(
        char => chars.indexOf(char) === chars.lastIndexOf(char)
      );

      if (uniqueCharInWord !== undefined) {
        acc.push(uniqueCharInWord);
      }

      return acc;
    }, []);

    const uniqueCharInText = uniqueChars.find(
      (char, index, array) => array.indexOf(char) === array.lastIndexOf(char)
    );

    if (!uniqueCharInText) {
      Notiflix.Notify.failure('Унікальний символ не знайдений');
    } else {
      Notiflix.Notify.success(`${uniqueCharInText} is a unique symbol`);
    }
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.container}>
        <label className={css.label}>
          Please enter any text
          <textarea type="text" name="text" required className={css.textarea} />
        </label>
        <button className={css.button} type="submit">
          Find a unique symbol
        </button>
      </div>
    </form>
  );
};

export default TextForm;

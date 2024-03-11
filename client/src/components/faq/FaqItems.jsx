import styles from './FaqItems.module.scss';

const FaqItems = ({ category, qnas }) => {
  return (
    <div className={styles.faqItems}>
      <h2>{category}</h2>
      <ul className={styles.faqItems__qnas}>
        {qnas.map((qna) => {
          const { id, question, answer } = qna;

          return (
            <li key={id} className={styles.faqItems__qna}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqItems;

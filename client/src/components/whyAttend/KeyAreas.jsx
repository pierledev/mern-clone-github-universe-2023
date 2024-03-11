import { Container } from '../shared';
import { keyAreas } from '../../data';

import styles from './KeyAreas.module.scss';

const KeyAreas = () => {
  return (
    <section className={styles.keyAreas}>
      <Container className={styles.keyAreas__container}>
        <h2>Key areas to get excited about</h2>
        <ul className={styles.keyAreas__list}>
          {keyAreas.map((keyArea) => {
            const { id, title, text } = keyArea;

            return (
              <li key={id} className={styles.keyAreas__item}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default KeyAreas;

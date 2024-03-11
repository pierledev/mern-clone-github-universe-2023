import { Container } from '../shared';
import { testimonies } from '../../data';

import styles from './Testimonies.module.scss';

const Testimonies = () => {
  return (
    <section className={styles.testimonies}>
      <Container className={styles.testimonies__container}>
        <h2>
          See what Universe 2022 attendees had to say about their experience
        </h2>
        <div className={styles.testimonies__group}>
          {testimonies.map((testimony, idx) => (
            <q key={idx}>{testimony}</q>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonies;

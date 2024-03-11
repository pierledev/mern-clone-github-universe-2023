import { Container } from '../shared';
import { sponsors } from '../../data';

import styles from './Sponsors.module.scss';

const Sponsors = () => {
  return (
    <section className={styles.sponsors}>
      <Container className={styles.sponsors__container}>
        <h2>Special thanks to our sponsors</h2>
        <ul className={styles.sponsors__list}>
          {sponsors.map((sponsor) => {
            const { id, company, logo, logoHeight, link } = sponsor;

            return (
              <li key={id} className={styles.sponsors__item}>
                <a href={link}>
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    style={{ height: `${logoHeight}px` }}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Sponsors;

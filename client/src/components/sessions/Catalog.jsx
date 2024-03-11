import { Container } from '../shared';
import { Filter, SessionsGroup } from '.';

import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.catalog__container}>
        <Filter className={styles.catalog__filter} />
        <SessionsGroup />
      </Container>
    </section>
  );
};

export default Catalog;

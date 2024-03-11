import { Container } from '../shared';
import { AgendasBanner } from '.';

import catalogBanner from '../../assets/media/agenda-banner.webp';

import styles from './CatalogBanner.module.scss';

const CatalogBanner = () => {
  return (
    <section className={styles.catalogBanner}>
      <Container className={styles.catalogBanner__container}>
        <AgendasBanner
          heading='Visit the catalog to view and schedule all available sessions'
          buttonText='View Session Catalog'
          image={catalogBanner}
          className={styles.catalogBanner__banner}
        />
      </Container>
    </section>
  );
};

export default CatalogBanner;

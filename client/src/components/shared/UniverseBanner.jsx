import { Container } from '.';

import universeBanner from '../../assets/media/universe-banner.webp';

import styles from './UniverseBanner.module.scss';

const UniverseBanner = () => {
  return (
    <Container className={styles.container}>
      <img src={universeBanner} alt='Universe 2023 Banner' />
    </Container>
  );
};

export default UniverseBanner;

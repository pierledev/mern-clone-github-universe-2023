import { Container, DividerBanner } from '../shared';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <DividerBanner />
      <Container className={styles.hero__container}>
        <h1>Frequently asked questions</h1>
      </Container>
    </section>
  );
};

export default Hero;

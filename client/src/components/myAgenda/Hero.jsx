import { Container, DividerBanner } from '../shared';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <DividerBanner />
      <Container className={styles.hero__container}>
        <h1>My Agenda</h1>
      </Container>
    </section>
  );
};

export default Hero;

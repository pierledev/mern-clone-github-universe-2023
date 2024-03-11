import { ButtonLink, Container } from '../shared';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <h1>Session catalog</h1>
        <p>
          Take the guesswork out of your Universe experience by checking out
          these curated agendas, suited for all types of learning and interests.
        </p>
        <ButtonLink to='/sessions/curated-agendas' className={styles.hero__button}>
          View curated agendas
        </ButtonLink>
      </Container>
    </section>
  );
};

export default Hero;

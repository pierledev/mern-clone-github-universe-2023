import { Container } from '../shared';
import { AgendasBanner } from '.';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <AgendasBanner
          variant='h1'
          heading='Curated Agendas'
          subheading='Take the guesswork out of your Universe experience with these curated agendas suited for all types of learning and&nbsp;interests.'
        />
      </Container>
    </section>
  );
};

export default Hero;

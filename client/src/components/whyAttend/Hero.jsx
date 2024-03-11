import { Container } from '../shared';

import heroImg from '../../assets/media/why-attend-banner.webp';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__banner}>
        <img src={heroImg} alt='' />
      </div>
      <Container className={styles.hero__container}>
        <h1>What's to love about GitHub Universe 2023?</h1>
        <p>
          Universe is where our global community will gather to learn from each
          other and pioneer tomorrow’s innovation. After all, 92% of 2022
          attendees reported learning something new at last year’s Universe!
          This year, we’re exploring three content tracks: the impact of AI on
          productivity, protecting your software with proactive security
          measures, and transforming the way you work through a better developer
          experience. It’s going to be pretty epic.
        </p>
      </Container>
    </section>
  );
};

export default Hero;

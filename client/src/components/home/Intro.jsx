import { Container } from '../shared';

import mobileImg from '../../assets/media/bento-narrow.webp';
import desktopImg from '../../assets/media/bento.webp';

import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <section className={styles.intro}>
      <Container className={styles.intro__container}>
        <picture>
          <source srcSet={mobileImg} media='(max-width: 767px)' />
          <img src={desktopImg} alt='GitHub Universe Sessions' />
        </picture>

        <div className={styles.intro__copy}>
          <p>
            <span className={styles.intro__highlight}>
              Universe brings together
            </span>{' '}
            the world's developers, enterprise leaders, and security
            professionals for two days of interactive sessions on{' '}
            <span className={styles.intro__session}>AI</span>,{' '}
            <span className={styles.intro__session}>security</span>, and the{' '}
            <span className={styles.intro__session}>developer</span> experience.{' '}
            Come for the learning, stay for the{' '}
            <span className={styles.intro__session}>fun</span>.{' '}
            <span className={styles.intro__highlight}>
              We'll see you there!
            </span>
          </p>

          <div className={styles.intro__stats}>
            <div>
              <span>2,000+</span>
              <span>attendees</span>
            </div>
            <div>
              <span>100+</span>
              <span>speakers</span>
            </div>
            <div>
              <span>85+</span>
              <span>sessions</span>
            </div>
            <div>
              <span>03</span>
              <span>content tracks</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;

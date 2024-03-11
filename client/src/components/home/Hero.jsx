import { ButtonLink, Container } from '../shared';
import { HiChevronRight } from 'react-icons/hi';

import heroBrandImg from '../../assets/media/hero-video.webp';
import heroLogoUniverse from '../../assets/media/hero-logo.svg';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <button className={styles['hero__img-container']}>
          <img src={heroBrandImg} alt='GitHub Universe Brand Image' />
          <div>
            <svg
              aria-hidden='true'
              focusable='false'
              role='img'
              viewBox='0 0 24 24'
              width='32'
              height='32'
              fill='currentColor'
            >
              <path d='M9.5 15.584V8.416a.5.5 0 0 1 .77-.42l5.576 3.583a.5.5 0 0 1 0 .842l-5.576 3.584a.5.5 0 0 1-.77-.42Z'></path>
              <path d='M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5Z'></path>
            </svg>
            <span>Universe 2023 teaser</span>
          </div>
        </button>

        <div className={styles.hero__copy}>
          <div className={styles.hero__schedule}>
            <span>NOVEMBER 8—9</span>
            <span>LIVE & VIRTUAL</span>
            <span>YBCA, SAN FRANCISCO</span>
            <span>Yerba Buena Center For The Arts, San Francisco</span>
          </div>
          <img src={heroLogoUniverse} alt='GitHub Universe Logo' />
          <div className={styles.hero__text}>
            <p>
              Our global developer conference is back. Join us as we build the
              future together.
            </p>
            <ButtonLink variant='brand' to='/get-tickets'>
              Get tickets <HiChevronRight />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

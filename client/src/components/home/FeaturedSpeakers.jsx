import { ButtonLink, Container, DividerBanner } from '../shared';
import { HiChevronRight } from 'react-icons/hi2';
import { featuredSpeakers } from '../../data';

import styles from './FeaturedSpeakers.module.scss';

const FeaturedSpeakers = () => {
  return (
    <section className={styles.featuredSpeakers}>
      {/* Speaker Image Decoration */}
      <DividerBanner />

      <Container className={styles.featuredSpeakers__container}>
        <div className={styles.featuredSpeakers__copy}>
          <h2>Featured speakers</h2>
          <ButtonLink variant='secondary' to='/speakers'>
            View speaker catalog <HiChevronRight />
          </ButtonLink>
        </div>

        {/* Speakers */}
        <ul className={styles.featuredSpeakers__speakers}>
          {featuredSpeakers.map((speaker) => {
            const { id, name, position, company, ava, github } = speaker;

            return (
              <li key={id} className={styles.featuredSpeakers__speaker}>
                <a href={`https://github.com/${github}`}>
                  <div
                    className={
                      styles['featuredSpeakers__speaker-img-container']
                    }
                  >
                    <img src={ava} alt={name} />
                  </div>
                  <div className={styles.featuredSpeakers__profile}>
                    <h3>{name}</h3>
                    <p>
                      {position}, {company}
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default FeaturedSpeakers;

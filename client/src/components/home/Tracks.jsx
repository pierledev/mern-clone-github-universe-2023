import { ButtonLink, Container } from '../shared';
import { HiArrowRight, HiChevronRight } from 'react-icons/hi2';
import { tracks } from '../../data';

import styles from './Tracks.module.scss';

const Tracks = () => {
  return (
    <section className={styles.tracks}>
      <Container className={styles.tracks__container}>
        {/* Copy Text */}
        <div className={styles.tracks__copy}>
          <h2>This year's tracks</h2>
          <p>
            Learn how to spark innovation, stay in the flow, optimize
            collaboration, and prevent vulnerabilities with AI-powered security.
          </p>
        </div>

        {/* Tracks */}
        <ul className={styles.tracks__list}>
          {tracks.map((track) => {
            const { id, icon, title, desc, topics } = track;

            return (
              <li key={id} className={styles.tracks__item}>
                <div className={styles['tracks__img-container']}>
                  <img src={icon} alt={title} />
                </div>
                <div className={styles.tracks__details}>
                  <div className={styles.tracks__top}>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <div className={styles.tracks__bottom}>
                    <p>You'll learn about</p>
                    <ul>
                      {topics.map((topic, idx) => (
                        <li key={idx}>_ {topic}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Ticket */}
        <div className={styles.tracks__ticket}>
          <div className={styles['tracks__img-container']}>
            <HiArrowRight />
          </div>
          <div className={styles['tracks__ticket-details']}>
            <div>
              <h2>Let's redefine what's possible</h2>
              <p>
                P.S. In 2022, 92% of Universe attendees reported learning
                something new. Don’t miss out on your chance!
              </p>
            </div>
            <ButtonLink variant='brand' to='/get-tickets'>
              Get tickets <HiChevronRight />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tracks;

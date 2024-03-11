import { Container } from '../shared';
import { timelines } from '../../data';

import styles from './Agenda.module.scss';

const Agenda = () => {
  return (
    <section className={styles.agenda}>
      <Container className={styles.agenda__container}>
        <h2>The agenda at a glance</h2>

        <ul className={styles.agenda__list}>
          {timelines.map((timeline) => {
            const { id, date, events } = timeline;

            return (
              <li key={id} className={styles.agenda__item}>
                <h3>{date}</h3>
                <ul className={styles.agenda__timeline}>
                  {events.map((event) => {
                    const { id, time, desc } = event;

                    return (
                      <li key={id} className={styles.agenda__time}>
                        <h4>{time}</h4>
                        <p>{desc}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Agenda;

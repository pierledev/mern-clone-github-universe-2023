import { ButtonLink, Container } from '../shared';
import { agendas } from '../../data';

import styles from './Agendas.module.scss';

const Agendas = () => {
  return (
    <section className={styles.agendas}>
      <Container className={styles.agendas__container}>
        <ul className={styles.agendas__list}>
          {agendas.map((agenda) => {
            const { id, title, desc } = agenda;

            return (
              <li key={id} className={styles.agendas__item}>
                <div className={styles.agendas__copy}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <ButtonLink variant='secondary' className={styles.agendas__cta}>View Agenda</ButtonLink>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Agendas;

import { ButtonLink, Container } from '../shared';
import { HiChevronRight } from 'react-icons/hi2';
import { ticketCategories } from '../../data';

import styles from './Tickets.module.scss';

const Tickets = () => {
  return (
    <section className={styles.tickets}>
      <Container className={styles.tickets__container}>
        <div className={styles.tickets__group}>
          <h2>
            Meet us in San&nbsp;Francisco or join us virtually
            November&nbsp;8&nbsp;-&nbsp;9!
          </h2>
          <ul className={styles.tickets__list}>
            {ticketCategories.map((ticket) => {
              const { id, name, desc, price, available } = ticket;

              return (
                <li key={id} className={styles.tickets__item}>
                  <div className={styles.tickets__header}>
                    <h3>{name}</h3>
                    <p className={styles.tickets__desc}>{desc}</p>
                  </div>
                  <div className={styles.tickets__footer}>
                    {available ? (
                      <p className={styles.tickets__price}>{price}</p>
                    ) : (
                      <p className={styles.tickets__soldout}>Soldout</p>
                    )}
                    {available && (
                      <ButtonLink variant='secondary' to='/get-tickets'>
                        Get tickets <HiChevronRight />
                      </ButtonLink>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.tickets__cta}>
          <p>Questions?</p>
          <ButtonLink to='/faq' variant='ghost'>
            FAQ <HiChevronRight />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default Tickets;

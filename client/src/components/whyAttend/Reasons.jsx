import { Container } from '../shared';
import { reasonsToJoin } from '../../data';

import styles from './Reasons.module.scss';

const Reasons = () => {
  return (
    <section className={styles.reasons}>
      <Container className={styles.reasons__container}>
        <h2>
          Here are five more reasons why you should join us in San Francisco for
          Universe 2023
        </h2>
        <ol className={styles.reasons__group}>
          {reasonsToJoin.map((reason) => {
            const { id, title, texts } = reason;

            return (
              <li key={id} className={styles.reasons__item}>
                <h3>{id}. {title}</h3>
                <div className={styles.reasons__texts}>
                  {texts.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
        <p>
          We don’t want to spoil the rest. But if you need a little help
          convincing your boss to send you and your team to Universe,{' '}
          <a href='https://static.rainfocus.com/github/universe23/static/staticfile/staticfile/Persuade%20Your%20Boss_1691623195585001MLXi.pdf'>
            use our handy template
          </a>
          ! We can’t wait to see you there.
        </p>
      </Container>
    </section>
  );
};

export default Reasons;

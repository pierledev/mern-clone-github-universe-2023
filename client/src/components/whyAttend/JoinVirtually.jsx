import { Container } from '../shared';

import styles from './JoinVirtually.module.scss';

const JoinVirtually = () => {
  return (
    <section className={styles.joinVirtually}>
      <Container className={styles.joinVirtually__container}>
        <h2>Can't make it in person? No&nbsp;problem. Join us virtually!</h2>
        <div>
          <p>
            As a virtual attendee of Universe 2023, you can join us from
            wherever you are. The Main Stage and Broadcast Studio content will
            be live-streamed, so you can take part in the learning and product
            announcements live with our attendees in San Francisco! Content from
            the SF MoMA theater and Screening Room will be recorded and
            available on demand by the end of the event.
          </p>
          <p>
            We’ll also have ample networking opportunities for virtual
            attendees, such as the “Ask GitHub” sessions with technical experts.
            But best of all, registration is free! (And if you register
            in-person, the virtual experience is included in the price of your
            ticket).
          </p>
          <p>
            If you're undecided about attending IRL, sign up for a virtual pass
            now and upgrade later on, while tickets last.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default JoinVirtually;

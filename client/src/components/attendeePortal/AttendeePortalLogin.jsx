import { Link } from 'react-router-dom';
import { Container, Login } from '../shared';

import styles from './AttendeePortalLogin.module.scss';

const AttendeePortalLogin = () => {
  return (
    <section className={styles.attendeePortalLogin}>
      <Container className={styles.attendeePortalLogin__container}>
        <div className={styles.attendeePortalLogin__block}>
          <Login />
          <p className={styles['attendeePortalLogin__block-register']}>
            Don't have account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AttendeePortalLogin;

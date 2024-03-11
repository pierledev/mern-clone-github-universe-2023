import { ButtonLink, Container } from '../shared';
import notFoundImg from '../../assets/media/not-found.webp';

import styles from './ErrorStatus.module.scss';

const ErrorStatus = () => {
  return (
    <section className={styles.errorStatus}>
      <Container className={styles.errorStatus__container}>
        <div className={styles.errorStatus__copy}>
          <h1>404</h1>
          <p>This is not the web page you are looking for.</p>
          <img src={notFoundImg} alt='GitHub Icon Page Not Found' />
          <ButtonLink to='/' className={styles.errorStatus__cta}>
            Back Home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};

export default ErrorStatus;

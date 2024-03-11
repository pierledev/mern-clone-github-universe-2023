import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { ButtonLink, Container, Login } from '../shared';

import styles from './GetTicketsAuth.module.scss';

const GetTicketsAuth = () => {
  const { user, setupUser, userLoading } = useAppContext();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleUser = (e) => {
    setUserData((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setupUser(user, 'login');
  };

  return (
    <section className={styles.getTicketsAuth}>
      <Container className={styles.getTicketsAuth__container}>
        <div className={styles.getTicketsAuth__block}>
          <div className={styles.getTicketsAuth__register}>
            <h2>Create Account</h2>
            <p>
              New user? Please begin by selecting Login with GitHub. If you
              don't have a GitHub account you can register without one by
              clicking below.
            </p>
            <ButtonLink to='/register'>Create Account</ButtonLink>
          </div>

          <div>
            <Login
              user={userData}
              handleUser={handleUser}
              handleSbmit={handleSubmit}
              userLoading={userLoading}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetTicketsAuth;

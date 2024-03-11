import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLink, Container, FormInput } from '../../components/shared';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

import { customFetch } from '../../utils';
import toast from 'react-hot-toast';

import styles from './RegisterAccount.module.scss';

const RegisterAccount = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    githubHandle: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);

  const {
    firstName,
    lastName,
    email,
    githubHandle,
    password,
    confirmPassword,
  } = userData;

  const handleUser = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName.trim().length < 2 || lastName.trim().length < 2) {
      return toast.error('First Name and Last Name min 2 characters');
    }

    if (githubHandle.trim().length < 6) {
      return toast.error('Github Handle min 6 characters');
    }

    if (password !== confirmPassword) {
      return toast.error("Password and Confirm Password don't match");
    }

    if (password.length < 8) {
      return toast.error('Password min 8 charachters');
    }

    try {
      setLoading(true);
      const response = await customFetch.post('/auth/register', userData);
      const { message } = response.data;
      setLoading(false);
      toast.success(message);

      setTimeout(() => {
        toast.loading('Navigating to login page...', { duration: 1500 });
      }, 1000);

      setTimeout(() => {
        navigate('/attendee-portal');
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <section className={styles.registerAccount}>
      <Container className={styles.registerAccount__container}>
        <div className={styles.registerAccount__copy}>
          <h1>Registration</h1>
          <p>Let' make this official.</p>
        </div>
        <div className={styles.registerAccount__block}>
          <h2>Begin by confirming the following information:</h2>
          <form
            className={styles.registerAccount__form}
            onSubmit={handleSubmit}
          >
            <div className={styles.registerAccount__input}>
              <FormInput
                label='first name'
                name='firstName'
                type='text'
                placeholder='Adam'
                value={firstName}
                onChange={handleUser}
                required
              />
              <span>Min 2 characters</span>
            </div>
            <div className={styles.registerAccount__input}>
              <FormInput
                label='last name'
                name='lastName'
                type='text'
                placeholder='Zacharia'
                value={lastName}
                onChange={handleUser}
                required
              />
              <span>Min 2 characters</span>
            </div>
            <div className={styles.registerAccount__input}>
              <FormInput
                type='email'
                name='email'
                placeholder='adamzacharia@email.com'
                value={email}
                onChange={handleUser}
                required
              />
            </div>
            <div className={styles.registerAccount__input}>
              <FormInput
                type='text'
                name='githubHandle'
                label='github handle'
                placeholder='adamzacharia'
                value={githubHandle}
                onChange={handleUser}
                required
              />
              <span>Min 6 charachters</span>
            </div>
            <div className={styles.registerAccount__info}>
              <p>
                Please enter a password for your account. Passwords must include
                the following:
              </p>
              <div>
                <div>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{' '}
                  <span>a lowercase letter (a-z)</span>
                </div>
                <div>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{' '}
                  <span>an uppercase letter (A-Z)</span>
                </div>
                <div>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{' '}
                  <span>a number (0-9)</span>
                </div>
                <div>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{' '}
                  <span>a special character (!@#$%)</span>
                </div>
                <div>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{' '}
                  <span>at least 8 characters</span>
                </div>
              </div>
            </div>
            <FormInput
              type='password'
              name='password'
              placeholder='••••••••••••'
              value={password}
              onChange={handleUser}
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              label='confirm password'
              placeholder='••••••••••••'
              value={confirmPassword}
              onChange={handleUser}
              required
            />
            <ButtonLink>{loading ? 'Submitting...' : 'Register'}</ButtonLink>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default RegisterAccount;

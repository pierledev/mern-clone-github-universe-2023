import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLink, FormInput } from '../shared';
import { customFetch } from '../../utils';
import { useAppContext } from '../../context/appContext';
import toast from 'react-hot-toast';

import styles from './Login.module.scss';

const Login = () => {
  const { login } = useAppContext();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleUser = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error('Email and password are required');
    }

    try {
      setLoading(true);
      const response = await customFetch.post('/auth/login', userData);
      const { user, message } = response.data;
      login({ user });

      setLoading(false);
      toast.success(message);

      setTimeout(() => {
        toast.loading('Navigating...', { duration: 1500 });
      }, 1000);

      setTimeout(() => {
        navigate('/my-agenda');
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <ButtonLink className={styles.login__github}>
        Login with GitHub
      </ButtonLink>
      <div className={styles.login__divider}>
        <span></span>
        <span>OR</span>
        <span></span>
      </div>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          placeholder='faridxjs@email.com'
          value={userData?.email}
          onChange={handleUser}
          required
        />
        <FormInput
          name='password'
          type='password'
          placeholder='••••••••'
          value={userData?.password}
          onChange={handleUser}
          required
        />
        <ButtonLink type='submit'>
          {loading ? 'Submitting...' : 'Login'}
        </ButtonLink>
      </form>
    </>
  );
};

export default Login;

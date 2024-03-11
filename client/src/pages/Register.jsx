import { useEffect } from 'react';
import { RegisterAccount } from '../components/register';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/my-agenda');
    }
  }, []);

  return (
    <main>
      <RegisterAccount />
    </main>
  );
};

export default Register;

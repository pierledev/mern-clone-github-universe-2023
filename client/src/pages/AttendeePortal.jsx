import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { AttendeePortalLogin } from '../components/attendeePortal';

const AttendeePortal = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/my-agenda');
    }
  }, []);

  return (
    <main>
      <AttendeePortalLogin />
    </main>
  );
};

export default AttendeePortal;

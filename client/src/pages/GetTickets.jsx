import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import { GetTicketsAuth } from '../components/getTickets';

const GetTickets = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/my-agenda');
    }
  }, []);

  return (
    <main>
      <GetTicketsAuth />
    </main>
  );
};

export default GetTickets;

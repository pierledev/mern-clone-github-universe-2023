import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.loading('You need to login first. Navigating...', {
        duration: 1500,
      });

      setTimeout(() => {
        navigate('/attendee-portal');
      }, 1500);

      return;
    }
  }, []);

  return children;
};

export default ProtectedRoute;

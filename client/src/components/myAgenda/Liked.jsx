import { useAppContext } from '../../context/appContext';
import MyAgendaList from './MyAgendaList';

const Liked = () => {
  const { user, sessions } = useAppContext();

  const likedSessions = sessions.filter((session) =>
    Boolean(session.likedBy[user?._id])
  );

  return <MyAgendaList variant='liked' sessionList={likedSessions} />;
};

export default Liked;

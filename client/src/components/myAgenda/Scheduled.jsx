import { useAppContext } from '../../context/appContext';
import { MyAgendaList } from '.';

const Scheduled = () => {
  const { user, sessions } = useAppContext();

  const scheduledSessions = sessions.filter((session) =>
    Boolean(session.scheduledBy[user?._id])
  );

  return <MyAgendaList variant='scheduled' sessionList={scheduledSessions} />;
};

export default Scheduled;

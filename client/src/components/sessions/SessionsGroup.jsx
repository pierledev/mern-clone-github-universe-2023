import Session from './Session';
import { Loading } from '../shared';
import { useAppContext } from '../../context/appContext';

import styles from './SessionsGroup.module.scss';

const SessionsGroup = () => {
  const {
    loading,
    sessions,
    filterCategories: {
      days,
      'delivery formats': deliveryFormats,
      'session tracks': sessionTracks,
      'session types': sessionTypes,
      levels,
      search,
    },
  } = useAppContext();

  let filteredSessions = [...sessions];

  if (days.length > 0) {
    filteredSessions = filteredSessions.filter((session) => {
      return days.includes(session.schedule.day);
    });
  }

  if (deliveryFormats.length > 0) {
    filteredSessions = filteredSessions.filter((session) => {
      return session.labels.some((label) => deliveryFormats.includes(label));
    });
  }

  if (sessionTracks.length > 0) {
    filteredSessions = filteredSessions.filter((session) => {
      return session.tracks.some((track) => sessionTracks.includes(track));
    });
  }

  if (sessionTypes.length > 0) {
    filteredSessions = filteredSessions.filter((session) => {
      return sessionTypes.includes(session.type);
    });
  }

  if (levels.length > 0) {
    filteredSessions = filteredSessions.filter((session) => {
      return levels.includes(session.level);
    });
  }

  if (search) {
    filteredSessions = filteredSessions.filter((session) => {
      return session.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={styles.sessionsGroup}>
      <p className={styles.sessionsGroup__results}>
        <span>{filteredSessions.length}</span> sessions
      </p>
      <ul className={styles.sessionsGroup__sessions}>
        {filteredSessions.map((session) => (
          <Session key={session._id} session={session} />
        ))}
      </ul>
    </div>
  );
};

export default SessionsGroup;

import { useState } from 'react';
import { useAppContext } from '../../context/appContext';
import { ButtonLink } from '../shared';
import { SessionModal } from '../sessions';
import { formatDate } from '../../utils';
import { HiHeart } from 'react-icons/hi2';

import styles from './MyAgendaListItem.module.scss';

const MyAgendaListItem = ({ session, variant }) => {
  const { _id: id, title, labels, schedule, tracks } = session;

  const { unlikeSession, unscheduleSession } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUnlike = async (sessionId) => unlikeSession({ sessionId });
  const handleUnschedule = async (sessionId) =>
    unscheduleSession({ sessionId });

  return (
    <>
      <li className={styles.myAgendaListItem} key={id}>
        <article>
          <header>
            <div>
              <div>
                {labels.map((label) => (
                  <span className={styles.myAgendaListItem__label} key={label}>
                    {label}
                  </span>
                ))}
              </div>

              {variant === 'liked' && (
                <button type='button' onClick={() => handleUnlike(id)}>
                  <HiHeart />
                </button>
              )}
            </div>
            <button type='button' onClick={handleShowModal}>
              <h3>{title}</h3>
            </button>
          </header>
          <div className={styles.myAgendaListItem__body}>
            <p>Session Track: {tracks.join(', ')}</p>
          </div>
          <footer>
            <div>
              <p>{formatDate(schedule.day)}</p>
              <p>{schedule.time}</p>
            </div>
            {variant === 'scheduled' && (
              <ButtonLink variant='ghost' onClick={() => handleUnschedule(id)}>
                Remove from Schedule
              </ButtonLink>
            )}
          </footer>
        </article>
      </li>
      {showModal && (
        <SessionModal handleClose={handleCloseModal} session={session} />
      )}
    </>
  );
};

export default MyAgendaListItem;

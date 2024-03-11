import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/appContext';
import { formatDate } from '../../utils';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi2';
import { ButtonLink } from '../shared';
import toast from 'react-hot-toast';

import styles from './Session.module.scss';
import SessionModal from './SessionModal';

const Session = ({
  session
}) => {
  const {_id: id,
    labels,
    title,
    description,
    speakers,
    tracks,
    schedule,
    likedBy,
    scheduledBy} = session;

  const navigate = useNavigate();
  const {
    user,
    likeSession,
    unlikeSession,
    scheduleSession,
    unscheduleSession,
  } = useAppContext();

  const [showModal, setShowModal] = useState(false);

  const isLiked = Boolean(likedBy[user?._id]);
  const isScheduled = Boolean(scheduledBy[user?._id]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleLike = () => {
    if (!user) {
      toast.loading('You need to login first...', { duration: 1500 });

      setTimeout(() => {
        navigate('/attendee-portal');
      }, 1500);

      return;
    }

    likeSession({ sessionId: id });
  };

  const handleUnlike = () => {
    unlikeSession({ sessionId: id });
  };

  const handleSchedule = () => {
    if (!user) {
      toast.loading('You need to login first...', { duration: 1500 });

      setTimeout(() => {
        navigate('/attendee-portal');
      }, 1500);

      return;
    }

    scheduleSession({ sessionId: id });
  };

  const handleUnschedule = () => {
    unscheduleSession({ sessionId: id });
  };

  return (
    <li className={styles.session}>
      <article>
        <header>
          <div>
            <div className={styles.session__labels}>
              {labels.map((label) => (
                <span className={styles.session__label} key={label}>
                  {label}
                </span>
              ))}
            </div>
            <button
              className={isLiked ? styles.session__liked : ''}
              type='button'
              onClick={isLiked ? handleUnlike : handleLike}
            >
              {isLiked ? <HiHeart /> : <HiOutlineHeart />}
            </button>
          </div>
          <button type='button' onClick={handleOpenModal}>
            <h3>{title}</h3>
          </button>
        </header>
        <div className={styles.session__body}>
          <p>{description}</p>
          <div>
            {speakers.map((speaker) => {
              const { _id: id, name, role, company } = speaker;

              return (
                <p key={id}>
                  <span>{name}</span>, {role}, {company}
                </p>
              );
            })}
          </div>
          <p>
            <span>Session Track</span>: {tracks.join(', ')}
          </p>
        </div>
        <footer>
          <div>
            <p>{formatDate(schedule.day)}</p>
            <p>{schedule.time}</p>
          </div>
          <ButtonLink
            variant='secondary'
            onClick={isScheduled ? handleUnschedule : handleSchedule}
          >
            {isScheduled ? 'Remove from Schedule' : 'Add to Schedule'}
          </ButtonLink>
        </footer>
      </article>
      {showModal && (
        <SessionModal session={session} handleClose={handleCloseModal} />
      )}
    </li>
  );
};

export default Session;

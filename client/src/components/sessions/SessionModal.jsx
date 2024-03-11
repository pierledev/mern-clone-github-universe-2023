import { ButtonLink, Modal } from '../shared';
import { formatDate } from '../../utils';

import styles from './Session.module.scss';

const SessionModal = ({ session, handleClose }) => {
  const { title, description, speakers, tracks, schedule, type, level } =
    session;

  return (
    <Modal onClose={handleClose} className={styles.modal}>
      <article className={styles.session}>
        <header>
          <h3>{title}</h3>
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
          <p>
            <span>Type</span>: {type}
          </p>
          <p>
            <span>Level</span>: {level}
          </p>
        </div>
        <footer>
          <div>
            <p>{formatDate(schedule.day)}</p>
            <p>{schedule.time}</p>
          </div>
          <ButtonLink onClick={handleClose} className={styles.session__cta}>
            Close
          </ButtonLink>
        </footer>
      </article>
    </Modal>
  );
};

export default SessionModal;

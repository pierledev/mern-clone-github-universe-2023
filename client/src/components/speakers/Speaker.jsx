import { useState } from 'react';
import { Modal } from '../shared';
import { HiOutlineXMark } from 'react-icons/hi2';

import styles from './Speaker.module.scss';

const Speaker = ({ _id: id, name, role, company, photo, description }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button
        type='button'
        key={id}
        className={styles.speaker}
        onClick={handleShowModal}
      >
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{company}</p>
      </button>

      {showModal && (
        <Modal onClose={handleCloseModal} className={styles.speaker__modal}>
          <header>
            <h2>Speaker</h2>
            <button type='button' onClick={handleCloseModal}>
              <HiOutlineXMark />
            </button>
          </header>
          <div className={styles['speaker__modal-body']}>
            <img src={photo} alt={name} />
            <div>
              <h3>{name}</h3>
              <h4>
                {role}, {company}
              </h4>
              <p>{description}</p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Speaker;

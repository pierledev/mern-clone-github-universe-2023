import styles from './Overlay.module.scss';

const Overlay = ({ onClose }) => {
  return <div onClick={onClose} className={styles.overlay}></div>;
};

export default Overlay;

import styles from './ModalWrapper.module.scss';

const ModalWrapper = ({ children, className }) => {
  const combinedStyles = `${styles.modalWrapper} ${className}`;

  return <div className={combinedStyles}>{children}</div>;
};

export default ModalWrapper;

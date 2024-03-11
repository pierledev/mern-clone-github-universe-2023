import styles from './Container.module.scss';

const Container = ({ className = '', children }) => {
  const combinedStyles = `${styles.container} ${className}`;

  return <div className={combinedStyles}>{children}</div>;
};

export default Container;

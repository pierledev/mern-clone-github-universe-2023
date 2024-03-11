import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';

const Logo = ({ className = '', onClick }) => {
  const combinedStyles = `${styles.logo} ${className}`;

  return (
    <Link to='/' className={combinedStyles} onClick={onClick}>
      GitHub Universe
    </Link>
  );
};

export default Logo;

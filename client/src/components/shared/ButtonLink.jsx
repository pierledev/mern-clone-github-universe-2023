import { Link } from 'react-router-dom';

import styles from './ButtonLink.module.scss';

const ButtonLink = ({
  type,
  children,
  variant = 'primary',
  className = '',
  to,
  onClick,
}) => {
  const combinedStyles = `${styles['button-link']} ${
    styles[`button-link--${variant}`]
  } ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonLink;

import { ButtonLink } from '../shared';

import agendasBanner from '../../assets/media/agenda-banner.webp';

import styles from './AgendasBanner.module.scss';

const AgendasBanner = ({
  variant = 'h2',
  heading,
  subheading,
  buttonText,
  className = '',
}) => {
  const combinedStyles = `${styles.agendasBanner} ${className}`;

  return (
    <div className={combinedStyles}>
      <div className={styles.agendasBanner__copy}>
        {variant === 'h1' ? <h1>{heading}</h1> : <h2>{heading}</h2>}
        {subheading ? (
          <p>{subheading}</p>
        ) : (
          <ButtonLink
            variant='secondary'
            to='/sessions'
            className={styles.agendasBanner__cta}
          >
            {buttonText}
          </ButtonLink>
        )}
      </div>
      <div className={styles['agendasBanner__img-container']}>
        <img src={agendasBanner} alt='Agendas Banner' />
      </div>
    </div>
  );
};

export default AgendasBanner;

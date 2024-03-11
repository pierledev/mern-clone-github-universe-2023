import { Container } from '.';

import styles from './DividerBanner.module.scss';

import banner from '../../assets/media/divider.webp';

const DividerBanner = ({ className = '' }) => {
  const combinedStyles = `${styles.banner} ${className}`;

  return (
    <Container className={combinedStyles}>
      <img src={banner} alt='GitHub Universe Banner' />
    </Container>
  );
};

export default DividerBanner;

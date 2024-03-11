import { FaqItems } from '.';
import { Container } from '../shared';
import { faqs } from '../../data';

import styles from './FaqGroup.module.scss';

const FaqGroup = () => {
  return (
    <section className={styles.faqGroup}>
      <Container className={styles.faqGroup__container}>
        {faqs.map((faq) => (
          <FaqItems key={faq.id} {...faq} />
        ))}
      </Container>
    </section>
  );
};

export default FaqGroup;

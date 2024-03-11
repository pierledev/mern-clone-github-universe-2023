import { Container, Loading } from '../shared';
import { Speaker } from '.';
import { useAppContext } from '../../context/appContext';

import styles from './Catalog.module.scss';

const Catalog = () => {
  const { loading, speakers } = useAppContext();

  return (
    <section className={styles.catalog}>
      <Container className={styles.catalog__container}>
        <div>
          <h1>Universe 2023 Speakers</h1>
          <p>
            Discover a handpicked lineup of influential speakers set to inspire
            and enlighten at Universe 2023.
          </p>
        </div>
        {loading ? (
          <Loading />
        ) : !loading && speakers.length === 0 ? (
          <h3>Speakers not found</h3>
        ) : (
          <div className={styles.catalog__speakers}>
            {speakers.map((speaker) => (
              <Speaker key={speaker._id} {...speaker} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Catalog;

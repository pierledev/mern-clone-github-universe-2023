import { Link } from 'react-router-dom';
import { Container, Loading } from '../shared';
import { MyAgendaListItem } from '.';

import styles from './MyAgendaList.module.scss';

const MyAgendaList = ({ variant, loading = false, sessionList }) => {
  return (
    <section className={styles.myAgendaList}>
      <Container className={styles.myAgendaList__container}>
        <h2>{variant}</h2>
        {loading && <Loading />}
        {!loading && sessionList?.length === 0 && (
          <p className={styles.myAgendaList__empty}>
            Your list is empty. Go to <Link to='/sessions'>Session page</Link>{' '}
            to add sesssion to your list.
          </p>
        )}
        {!loading && sessionList?.length !== 0 && (
          <ul className={styles.myAgendaList__list}>
            {sessionList?.map((session) => (
              <MyAgendaListItem
                session={session}
                variant={variant}
                key={session._id}
              />
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
};

export default MyAgendaList;

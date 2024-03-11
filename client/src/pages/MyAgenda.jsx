import { Liked, Hero, Scheduled } from '../components/myAgenda';

const MyAgenda = () => {
  return (
    <main>
      <Hero />
      <Scheduled />
      <Liked />
    </main>
  );
};

export default MyAgenda;

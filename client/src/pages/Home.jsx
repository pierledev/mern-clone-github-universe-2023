import {
  FeaturedSpeakers,
  Hero,
  Intro,
  Sponsors,
  Tickets,
  Tracks,
} from '../components/home';

const Home = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Tickets />
      <Tracks />
      <FeaturedSpeakers />
      <Sponsors />
    </main>
  );
};

export default Home;

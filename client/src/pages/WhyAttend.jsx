import {
  Agenda,
  Hero,
  JoinVirtually,
  KeyAreas,
  Reasons,
  Testimonies,
} from '../components/whyAttend';
import { UniverseBanner } from '../components/shared';

const WhyAttend = () => {
  return (
    <main>
      <Hero />
      <Reasons />
      <KeyAreas />
      <JoinVirtually />
      <Testimonies />
      <Agenda />
      <UniverseBanner />
    </main>
  );
};

export default WhyAttend;

import { Outlet } from 'react-router-dom';
import { Footer, Header, ScrollToTop } from '../components/shared';

const SharedLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;

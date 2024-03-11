import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  AttendeePortal,
  CuratedAgenda,
  Error,
  Faq,
  GetTickets,
  Home,
  MyAgenda,
  ProtectedRoute,
  Register,
  Sessions,
  SharedLayout,
  Speakers,
  WhyAttend,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sessions',
        element: <Sessions />,
      },
      {
        path: 'sessions/curated-agendas',
        element: <CuratedAgenda />,
      },
      {
        path: 'speakers',
        element: <Speakers />,
      },
      {
        path: 'why-attend',
        element: <WhyAttend />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'attendee-portal',
        element: <AttendeePortal />,
      },
      {
        path: 'get-tickets',
        element: <GetTickets />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'my-agenda',
        element: (
          <ProtectedRoute>
            <MyAgenda />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
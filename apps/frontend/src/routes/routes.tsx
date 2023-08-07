import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '../layout';
import { ROUTE_PATHS } from './paths';

export const AppRoutes = createBrowserRouter([
  {
    path: '',
    element: <DashboardLayout />,
    children: ROUTE_PATHS.map((route) => {
      const Component = route.component;
      return {
        key: route.component,
        path: route.path,
        element: (
          <Suspense fallback={<>...</>}>
            <Component />
          </Suspense>
        ),
      };
    }),
  },
]);

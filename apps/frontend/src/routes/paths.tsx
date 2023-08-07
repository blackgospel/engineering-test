import React from 'react';

export const ROUTE_PATHS = [
  {
    name: 'Users',
    path: 'users',
    component: React.lazy(() => import('../pages/users')),
  },
  // {
  //   name: 'Parcs',
  //   path: '/parcs',
  // },
  // {
  //   name: 'Bookings',
  //   path: '/bookings',
  // },
];

import { IconBook, IconLocation, IconUser } from '@tabler/icons-react';
import React from 'react';

export const ROUTE_PATHS = [
  {
    name: 'Users',
    path: 'users',
    component: React.lazy(() => import('../pages/users')),
    icon: <IconUser size="1rem" />,
    color: 'blue',
  },
  {
    name: 'Parcs',
    path: 'parcs',
    component: React.lazy(() => import('../pages/parcs')),
    icon: <IconLocation size="1rem" />,
    color: 'teal',
  },
  {
    name: 'Bookings',
    path: 'bookings',
    component: React.lazy(() => import('../pages/bookings')),
    icon: <IconBook size="1rem" />,
    color: 'violet',
  },
];

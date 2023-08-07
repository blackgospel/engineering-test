import { faker } from '@faker-js/faker';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';

type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

const data: Person[] = [...Array(100)].map(() => ({
  name: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
}));

export const UsersPage = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data,
    initialState: {
      density: 'xs',
    },
  });

  return <MantineReactTable table={table} />;
};

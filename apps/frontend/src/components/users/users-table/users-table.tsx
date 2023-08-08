import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import { IUserSchema } from '../../../schema';

interface IUsersTableProps {
  data: IUserSchema[];
}

export const UsersTable: React.FC<IUsersTableProps> = ({ data }) => {
  const columns = useMemo<MRT_ColumnDef<IUserSchema>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
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

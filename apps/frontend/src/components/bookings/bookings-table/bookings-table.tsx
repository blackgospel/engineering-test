import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import { IBookingSchema } from '../../../schema';

interface IBookingTableProps {
  data: IBookingSchema[];
}

export const BookingsTable: React.FC<IBookingTableProps> = ({ data }) => {
  const columns = useMemo<MRT_ColumnDef<IBookingSchema>[]>(
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

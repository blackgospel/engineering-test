import { IBookingSchema } from '@eurocamp/schema';
import dayjs from 'dayjs';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';

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
        accessorKey: 'user',
        header: 'User ID',
      },
      {
        accessorKey: 'parc',
        header: 'Parc ID',
      },
      {
        accessorKey: 'bookingdate',
        header: 'Date',
        Cell: ({ cell }) => (
          <>
            {dayjs(cell.renderValue() as string).format('MMMM D, YYYY h:mm A')}
          </>
        ),
      },
      {
        accessorKey: 'comments',
        header: 'Comments',
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

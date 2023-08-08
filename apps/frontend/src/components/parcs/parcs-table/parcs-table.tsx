import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import { IParcSchema } from '../../../schema';

interface IParcTableProps {
  data: IParcSchema[];
}

export const ParcsTable: React.FC<IParcTableProps> = ({ data }) => {
  const columns = useMemo<MRT_ColumnDef<IParcSchema>[]>(
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
        accessorKey: 'description',
        header: 'Description',
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

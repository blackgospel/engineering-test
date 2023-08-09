import { IUserSchema } from '@eurocamp/schema';
import { useDeleteUserMutation } from '@eurocamp/store';
import { Button, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';
import { useMemo } from 'react';
import { CreateUserModal } from '../create-user-modal';

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
    enableRowActions: true,
    // enableRowSelection: true,
    initialState: {
      density: 'xs',
      showColumnFilters: true,
    },
    renderRowActionMenuItems: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [deleteUser] = useDeleteUserMutation();
      const handleDelete = () => {
        deleteUser(row.original.id);
      };

      return (
        <Menu.Item icon={<IconTrash />} onClick={handleDelete}>
          Delete User
        </Menu.Item>
      );
    },
    renderTopToolbarCustomActions: () => {
      const [
        createUserModal,
        { open: openCreateModal, close: closeCreateModal },
        // eslint-disable-next-line react-hooks/rules-of-hooks
      ] = useDisclosure(false);
      const handleCreateUser = () => {
        openCreateModal();
      };

      return (
        <>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button onClick={handleCreateUser} variant="filled">
              Create User
            </Button>
          </div>

          <CreateUserModal
            opened={createUserModal}
            onClose={closeCreateModal}
          />
        </>
      );
    },
  });

  return <MantineReactTable table={table} />;
};

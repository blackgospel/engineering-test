import { Box } from '@mantine/core';
import { UsersTable } from '../../components';
import { useGetAllUsersQuery } from '../../redux';

export const UsersPage = () => {
  const { data, isLoading, error } = useGetAllUsersQuery();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error occurred</Box>;
  }

  if (!data) {
    return <Box>No Data</Box>;
  }

  return <UsersTable data={data} />;
};

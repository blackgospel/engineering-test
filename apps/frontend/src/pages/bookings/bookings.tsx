import { Box } from '@mantine/core';
import { BookingsTable } from '../../components';
import { useGetAllBookingsQuery } from '../../redux';

export const BookingsPage = () => {
  const { data, isLoading, error } = useGetAllBookingsQuery();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error occurred</Box>;
  }

  if (!data) {
    return <Box>No Data</Box>;
  }

  return <BookingsTable data={data} />;
};

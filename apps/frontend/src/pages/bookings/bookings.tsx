import { useGetAllBookingsQuery } from '@eurocamp/store';
import { Box } from '@mantine/core';
import { BookingsTable } from '../../components';

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

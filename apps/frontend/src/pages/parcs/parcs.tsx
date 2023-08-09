import { useGetAllParcsQuery } from '@eurocamp/store';
import { Box } from '@mantine/core';
import { ParcsTable } from '../../components';

export const ParcsPage = () => {
  const { data, isLoading, error } = useGetAllParcsQuery();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error occurred</Box>;
  }

  if (!data) {
    return <Box>No Data</Box>;
  }

  return <ParcsTable data={data} />;
};

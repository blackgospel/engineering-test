import { Box, Button, Center, Title } from '@mantine/core';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export const Fallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Center>
      <Title>Something went wrong:</Title>
      <Box component="pre">{error.message}</Box>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Center>
  );
};

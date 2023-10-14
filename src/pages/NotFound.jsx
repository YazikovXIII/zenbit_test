import React from 'react';
import { Box, Heading, Text, ChakraProvider } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <ChakraProvider colorScheme="blue">
      <Box textAlign="center" mt="20">
        <Heading as="h1" size="xl" mb="6">
          Page does not exist
        </Heading>
        <Text fontSize="lg">Not Found</Text>
      </Box>
    </ChakraProvider>
  );
};

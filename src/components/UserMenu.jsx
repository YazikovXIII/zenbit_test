import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import { authOperations } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);

  return (
    <ChakraProvider>
      <Box display="flex" alignItems="center">
        <Box marginRight={4} fontSize="md">
          {user.name}
        </Box>
        <Button
          colorScheme="blue"
          size="sm"
          onClick={() => {
            dispatch(authOperations.logOut());
          }}
        >
          Log Out
        </Button>
      </Box>
    </ChakraProvider>
  );
};

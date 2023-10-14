import { useSelector } from 'react-redux';
import { Box, Heading, ChakraProvider } from '@chakra-ui/react';
import authSelectors from 'redux/auth/authSelectors';
import { NotStyledLink } from 'components/AppBar/AppBar.styled';

export const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const user = useSelector(authSelectors.selectUser);

  return (
    <ChakraProvider>
      <Box textAlign="center" mt="20">
        {isLoggedIn ? (
          <Heading as="h1" size="xl">
            Welcome,{user.name}!
            <br />
            Here's your <NotStyledLink to="/contacts">Phonebook</NotStyledLink>
          </Heading>
        ) : (
          <Heading as="h1" size="xl">
            Welcome!
            <br />
            Please Login or Register a new user
          </Heading>
        )}
      </Box>
    </ChakraProvider>
  );
};

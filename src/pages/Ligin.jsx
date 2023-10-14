import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import {
  Button,
  Input,
  FormControl,
  Heading,
  FormLabel,
  VStack,
  ChakraProvider,
} from '@chakra-ui/react';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <ChakraProvider colorScheme="blue">
      <VStack
        as="form"
        onSubmit={handleSubmit}
        spacing={4}
        gap={2}
        align="center"
      >
        <Heading margin={4}>Login</Heading>

        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            name="email"
            maxWidth="300px"
            onChange={handleChange}
          />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            name="password"
            maxWidth="300px"
            onChange={handleChange}
          />
        </FormControl>

        <Button colorScheme="blue" type="submit" margin={8}>
          Login
        </Button>
      </VStack>
    </ChakraProvider>
  );
};

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import toast, { Toaster } from 'react-hot-toast';
import {
  Input,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  ChakraProvider,
} from '@chakra-ui/react';

export const Registration = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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

    if (password.length < 7) {
      toast.error('password should be longer than 6 symbols');
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <ChakraProvider colorScheme="blue">
      <Toaster />
      <VStack spacing={4} align="center">
        <form onSubmit={handleSubmit}>
          <Heading margin={4}>Registration</Heading>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              variant="outline"
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
              maxWidth="300px"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              variant="outline"
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              maxWidth="300px"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              variant="outline"
              onChange={handleChange}
              type="password"
              name="password"
              value={password}
              maxWidth="300px"
            />
          </FormControl>
          <Button colorScheme="blue" type="submit" width="100%" mt={10}>
            Reg me!
          </Button>
        </form>
      </VStack>
    </ChakraProvider>
  );
};

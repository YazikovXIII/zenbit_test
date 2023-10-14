import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useState } from 'react';
import { ListItem, Text, Button } from '@chakra-ui/react';
import { Section } from 'components/Section/Section.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    dispatch(deleteContact(id))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  return (
    <Section>
      <ListItem
        marginTop={4}
        key={id}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text>{name}</Text>
        <Text>{number}</Text>
        <Button
          colorScheme="blue"
          borderRadius={10}
          padding={5}
          onClick={handleDelete}
          isLoading={loading}
          loadingText="Deleting"
          isDisabled={loading}
        >
          {loading ? '...' : 'Delete'}
        </Button>
      </ListItem>
    </Section>
  );
};

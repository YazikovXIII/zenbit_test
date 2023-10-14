import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useSelector } from 'react-redux';
import {
  selectIsloading,
  selectContacts,
} from 'redux/contacts/contactSelectors';
import { Box } from '@chakra-ui/react';

export const ContactPage = () => {
  const isLoading = useSelector(selectIsloading);
  const contacts = useSelector(selectContacts);

  return (
    <>
      {isLoading && <Loader />}
      <ContactForm />

      <Filter />
      {contacts.length === 0 && (
        <Box margin={20} color={'#3182ce'}>
          <p>There are no contacts yet...</p>
        </Box>
      )}
      <ContactList />
    </>
  );
};

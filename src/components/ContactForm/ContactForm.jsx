// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';
// import { addContact } from 'redux/contacts/contactsOperations';
// import { selectContacts } from 'redux/contacts/contactSelectors';
// import { Section } from 'components/Section/Section.styled';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const id = nanoid();
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);
//   const nameInputId = nanoid();
//   const numberInputId = nanoid();
//   const isFormFilled = name && number;

//   const handleChange = e => {
//     const { name, value } = e.target;
//     // eslint-disable-next-line
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const arrayOfNames = [];
//     contacts.forEach(user => {
//       arrayOfNames.push(user.name.toLowerCase());
//     });
//     if (arrayOfNames.includes(name.toLowerCase())) {
//       reset();
//       return alert(`${name} is already in contacts.`);
//     } else {
//       dispatch(addContact({ id, name, number }));
//     }
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <Section>
//       <form onSubmit={handleSubmit} className="contact_add__form">
//         <label htmlFor={nameInputId}>Name</label>
//         <input
//           id={nameInputId}
//           className="form__input"
//           onChange={handleChange}
//           value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//         <label htmlFor={numberInputId}>Number</label>
//         <input
//           id={numberInputId}
//           className="form__input"
//           onChange={handleChange}
//           value={number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <div className="form__button_container">
//           {isFormFilled ? (
//             <button className="form__button" type="submit">
//               Add contact
//             </button>
//           ) : (
//             <p className="form__message">Fill the fields to Add contact</p>
//           )}
//         </div>
//       </form>
//     </Section>
//   );
// };

import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  ChakraProvider,
  Heading,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const oldContact = contacts.find(contact => contact.name === name.value);

    if (oldContact) {
      toast.error('Sorry, a contact with this name already exists');
      e.target.reset();
      return;
    }

    const contact = {
      name: name.value,
      number: number.value,
      id: nanoid(),
    };
    e.target.reset();
    dispatch(addContact(contact));
    toast.success(`Contact ${contact.name} added`);
  };

  return (
    <ChakraProvider>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} marginBottom={10}>
          <Heading margin={4}>Phonebook</Heading>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="The name can only contain letters, apostrophes, hyphens, and spaces. For example, Иван, Мария Иванова, John Doe"
              required
              variant="outline"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="number">Number</FormLabel>
            <Input
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="The phone number must contain only numbers and may include spaces, hyphens, brackets and may begin with +"
              required
              variant="outline"
              marginBottom={4}
            />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Add contact
          </Button>
        </VStack>
      </form>
    </ChakraProvider>
  );
};

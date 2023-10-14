// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteUser } from 'redux/contactSlice';

// export const ContactList = () => {
//   const data = useSelector(state => state.contacts);

//   const filterValue = useSelector(state => state.filter);
//   const dispatch = useDispatch();
//   const filterUser = () => {
//     return data.filter(({ name }) =>
//       name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   };
//   const visible = filterUser();

//   return (
//     <ul className="contacts__list">
//       {visible.length > 0 ? (
//         visible.map(({ name, number, id }) => (
//           <li className="contacts__list_item" key={id}>
//             {name}: {number}
//             <button
//               onClick={() => dispatch(deleteUser(id))}
//               className="filter__delete_button"
//             >
//               Delete
//             </button>
//           </li>
//         ))
//       ) : (
//         <p className="form__message">No such contact</p>
//       )}
//     </ul>
//   );
// };

// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactSlice';
// import {
//   selectContacts,
//   selectStatusFilter,
//   selectIsLoading,
// } from 'redux/selectors';

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const data = useSelector(selectContacts);
//   const filterValue = useSelector(selectStatusFilter);

//   const filterUser = () => {
//     return data.filter(({ name }) =>
//       name.toLowerCase().includes(filterValue.toLowerCase())
//     );
//   };
//   const visible = filterUser();

//   return (
//     <ul className="contacts__list">
//       {visible.length > 0 ? (
//         visible.map(({ name, number, id }) => (
//           <li className="contacts__list_item" key={id}>
//             {name}: {number}
//             {!isLoading && (
//               <button
//                 onClick={() => dispatch(deleteContact(id))}
//                 className="filter__delete_button"
//               >
//                 Delete
//               </button>
//             )}
//           </li>
//         ))
//       ) : (
//         <p className="form__message">No such contact</p>
//       )}
//     </ul>
//   );
// };

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  UnorderedList,
  Alert,
  AlertIcon,
  ChakraProvider,
} from '@chakra-ui/react';
import { Contact } from 'components/Contact/Contact';
import { Loader } from 'components/Loader';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectError,
  selectIsloading,
  selectVisibleContacts,
} from 'redux/contacts/contactSelectors';

export const ContactList = () => {
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      {isLoading && <Loader />}
      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          Please authenticate
        </Alert>
      )}
      <UnorderedList listStyleType="none">
        {contacts.map(({ id, name, number }) => (
          <Contact name={name} number={number} id={id} key={id} />
        ))}
      </UnorderedList>
    </ChakraProvider>
  );
};

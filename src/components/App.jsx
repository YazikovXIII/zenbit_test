// import { Wrapper } from './Wrapper/Wrapper.styled';
// import { Section } from './Section/Section.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { useSelector } from 'react-redux';
// import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contactSlice';
// import { Loader } from './Loader';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const contacts = useSelector(selectContacts);

//   return (
//     <Wrapper>
//       <Section>
//         <h1 className="form__title">Phonebook</h1>
//         <ContactForm />
//       </Section>
//       {contacts.length > 0 && (
//         <Section>
//           <h2 className="contacts__list_title">Contacts</h2>
//           <Filter />
//           {isLoading && !error ? <Loader /> : <ContactList />}
//         </Section>
//       )}
//     </Wrapper>
//   );
// };

// import { Wrapper } from './Wrapper/Wrapper.styled';
import { Route, Routes } from 'react-router-dom';
import { Registration } from 'pages/Registration';
import { Login } from 'pages/Ligin';
import { Home } from 'pages/Home';
import { ContactPage } from 'pages/Contactpage';
import { SharedLayout } from './SharedLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { ResrtictedRoute } from './routes/Restricted';
import { PrivateRoute } from './routes/Private';
import { Loader } from './Loader';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    // <Wrapper>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/registration"
          element={
            <ResrtictedRoute
              component={<Registration />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/login"
          element={
            <ResrtictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactPage />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
    // </Wrapper>
  );
};

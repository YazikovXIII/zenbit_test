// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { filterUser } from 'redux/filterSlice';

// export const Filter = () => {
//   const id = 'search-input';
//   const [filter, setFilter] = useState('');
//   const dispatch = useDispatch();
//   const changeFilter = ({ target }) => {
//     setFilter(target.value);
//     dispatch(filterUser(target.value));
//   };
//   return (
//     <div className="filterwrapper">
//       <label htmlFor={id}>Search by name</label>
//       <input id={id} type="text" value={filter} onChange={changeFilter} />
//     </div>
//   );
// };

// import { useDispatch, useSelector } from 'react-redux';
// import { change } from 'redux/filterSlice';
// import { selectFilter } from 'redux/filter/filterSelectors';

// export const Filter = () => {
//   const id = 'search-input';
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilter);
//   const changeFilter = event => {
//     dispatch(change(event.currentTarget.value));
//   };

//   return (
//     <div className="filterwrapper">
//       <label htmlFor={id}>Search by name</label>
//       <input id={id} type="text" value={filter} onChange={changeFilter} />
//     </div>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Input, Heading, ChakraProvider } from '@chakra-ui/react';
// import { Section } from 'components/Section/Section.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value.toLocaleLowerCase()));
  };

  return (
    <ChakraProvider>
      <Heading as="h2" size="md" mb={4}>
        Contacts
      </Heading>
      <Input
        id="outlined-basic"
        placeholder="Find Contact by name"
        variant="outline"
        type="text"
        value={filter}
        onChange={handleChange}
        width="225px"
      />
    </ChakraProvider>
  );
};

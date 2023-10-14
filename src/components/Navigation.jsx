import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { StyledLink } from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Phonebook</StyledLink>}
    </nav>
  );
};

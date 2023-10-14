import { StyledLink } from 'components/AppBar/AppBar.styled';

export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/registration">Registration</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </div>
  );
};

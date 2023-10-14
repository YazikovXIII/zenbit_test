import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import authSelectors from 'redux/auth/authSelectors';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

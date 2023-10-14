import { Outlet } from 'react-router-dom';
import { Wrapper } from './Wrapper/Wrapper.styled';
import { AppBar } from './AppBar/AppBarr';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

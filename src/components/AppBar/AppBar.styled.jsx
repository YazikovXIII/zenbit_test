import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px #3182ce;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  color: #000;
  margin-right: 16px;

  &.active {
    color: #3182ce;
  }
`;

export const NotStyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 32px;
  color: #3182ce;
`;

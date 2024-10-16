import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export { Header, Nav, NavLink };
import { Link } from 'react-router-dom';
import {
  Nav,
  Lista,
  Item,
} from './styles/NavbarStyled'
import { WarningButtonComponent } from './Button';

export const NavbarComponent = () => {
  return (
    <Nav>
      <Lista>
        <Item><Link to="/blogs">Blogs</Link></Item>
        <Item><Link to="/contact">Contact</Link></Item>
        <Item><Link to="/sobre">Sobre</Link></Item>
      </Lista>

      <WarningButtonComponent label='Deslogar' />
    </Nav>
  );
}

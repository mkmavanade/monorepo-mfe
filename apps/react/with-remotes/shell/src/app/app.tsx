import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';

import { 
  HeaderComponent,
  SucessButtonComponent,
  NavbarComponent,
  FooterComponent,
  LabelStyled,
  InputStyled
} from 'remote1/Module';

/*<!--Route path="/" element={<NxWelcome title="shell" />} /-->/
import NxWelcome from './nx-welcome'; */
import Blogs from '../pages/blogs';
import Home from '../pages/home';
import Login from '../pages/login';

/*const Remote1 = React.lazy(() => import('remote1/Module'));

const Remote2 = React.lazy(() => import('remote2/Module'));

<li>
          <Link to="/remote1">Remote1</Link>
        </li>
        <li>
          <Link to="/remote2">Remote2</Link>
        </li>
        <Route path="/remote1" element={<Remote1 />} />
        <Route path="/remote2" element={<Remote2 />} />*/

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Home Nome</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>        
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    <Login />
     
    </React.Suspense>
  );
}

export default App;

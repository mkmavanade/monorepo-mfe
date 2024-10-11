import * as React from 'react';

import { HeaderComponent } from 'remote1/Module';
import NxWelcome from './nx-welcome';
import Blogs from '../pages/blogs';
import { NavbarComponent } from 'remote1/Module';
import { FooterComponent } from 'remote1/Module';

import { Link, Route, Routes } from 'react-router-dom';

const Remote1 = React.lazy(() => import('remote1/Module'));

const Remote2 = React.lazy(() => import('remote2/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <HeaderComponent title='Header' /> 
      <NavbarComponent />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote1">Remote1</Link>
        </li>
        <li>
          <Link to="/remote2">Remote2</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/remote1" element={<Remote1 />} />

        <Route path="/remote2" element={<Remote2 />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <FooterComponent title='Footer' />
    </React.Suspense>
  );
}

export default App;

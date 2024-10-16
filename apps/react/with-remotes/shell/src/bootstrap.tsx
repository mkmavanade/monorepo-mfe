import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import App from './app/app';
import Login from './pages/login';
import Blogs from './pages/blogs';
import Home from './pages/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/">
          <Route path="blogs" element={<Blogs />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

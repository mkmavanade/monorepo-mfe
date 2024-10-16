import {lazy, useState, Suspense} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../login/login';
import { Header, Nav, NavLink } from './style';
import { stat } from 'fs';
const Remote1 = lazy(() => import('remote1/Module'));

const Remote2 = lazy(() => import('remote2/Module'));

export function App() {
  
  function useTokenId() {
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const state = params.get('state');
  const code = params.get('code');
  const clientInfo = params.get('client_info');

  return {state, code, clientInfo};
}
const [login, setLogin] = useState(false)
const params = useTokenId();

  return (
    <Suspense fallback={null}>
      {!login && (
      <>
      
      <Header>
        <h1>Aceleração Iônica</h1>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login-oauth" onClick={() => setLogin(true)}>Login</NavLink>
          <NavLink to="/remote1">Remote1</NavLink>
          <NavLink to="/remote2">Remote2</NavLink>
          <p>State: {params.state}</p>
          <p>Code: {params.code}</p>
          <p>Client_info: {params.clientInfo}</p>
        </Nav>
      </Header>
      </>)}
      <Routes>
        <Route path="/login-oauth" element={<Login/>} />

        <Route path="/remote1" element={<Remote1 />} />

        <Route path="/remote2" element={<Remote2 />} />
      </Routes>
      
    </Suspense>
  );
}

export default App;

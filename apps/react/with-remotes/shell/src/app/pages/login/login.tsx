import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/loading';
import { Button, ForgotPassword, Input, LoginBox, LoginPage } from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Login() {
  let navigate = useNavigate();

  function getParams() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    const state = params.get('state');
    const code = params.get('code');
    const clientInfo = params.get('client_info');

    return { state, code, clientInfo };
  }
  const params = getParams();

  const LoginTeste = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://apimocha.com/ionicaaceleracao/login-oauth`
      );

      if (!response.data.erro) {
        const data = {
          user: {
            name: response.data.data.user.name,
            lastname: response.data.data.user.last_name,
            email: response.data.data.user.email,
            schoolname: response.data.data.user.schools[0].name,
          },
        };

        navigate('/home', { state: data });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <LoginPage>
      <LoginBox>
        <h2>Login</h2>
        <Loading />

        {/* <Button to="https://ionicadev.b2clogin.com/ionicadev.onmicrosoft.com/b2c_1a_signuporsignin/oauth2/v2.0/authorize?client_id=f61d4516-d466-4265-bd78-81b97c52a299&scope=openid%20profile%20offline_access%20https%3A%2F%2Fionicadev.onmicrosoft.com%2Ff8b6f5f8-9724-461a-be39-2ec8025c32b8%2FTeste&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fredirect&client-request-id=84366941-383f-4b07-94df-de138d596c45&response_mode=query&response_type=code&x-client-SKU=msal.js.node&x-client-VER=1.3.3&x-client-OS=win32&x-client-CPU=x64&client_info=1&state=login">
            Login
          </Button> */}

        <Button to="http://localhost:4200/login-oauth?state=login&code=du1hod21ihdu&client_info=1208u3y9vy">
          Login
        </Button>
        <p>State: {params.state}</p>
        <p>Code: {params.code}</p>
        <p>Client_info: {params.clientInfo}</p>

        <button onClick={Login}>Teste</button>
      </LoginBox>
    </LoginPage>
  );
}

export default Login;

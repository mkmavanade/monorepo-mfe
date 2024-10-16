import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import {
  TitleH1,
  Text,
  LoginDiv,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from 'remote1/Module';

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

  async function LoginTeste() {
    console.log('entrou');
    // e.preventDefault();

    try {
      const response = await axios.post(
        `https://apimocha.com/ionicaaceleracao2/login-oauth`,
        {
          params,
        }
      );

      console.log('response', response);

      if (!response.data.erro) {
        const data = {
          user: {
            name: response.data.name,
            age: response.data.age,
            email: response.data.email,
            // schoolname: response.data.data.user.schools[0].name,
          },
        };

        navigate('/home', { state: data });
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <React.Suspense fallback={null}>
      <LoginDiv>
        <TitleH1>Login</TitleH1>
        <Text>Verificar se esse usuário está logado.</Text>

        <ButtonStyled
          onClick={() =>
            navigate(
              '/login-oauth?state=login&code=du1hod21ihdu&client_info=1208u3y9vy'
            )
          }
        >
          Ir para msal
        </ButtonStyled>

        <ButtonStyled onClick={LoginTeste}>Logar</ButtonStyled>

        <p>State: {params.state}</p>
        <p>Code: {params.code}</p>
        <p>Client_info: {params.clientInfo}</p>
      </LoginDiv>
    </React.Suspense>
  );
}

export default Login;

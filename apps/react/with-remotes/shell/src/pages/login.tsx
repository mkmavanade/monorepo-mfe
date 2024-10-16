import React, { useState } from 'react';

import { useNavigate  } from "react-router-dom";
import axios from "axios";

import {
  TitleH1,
  Text,
  LoginDiv,
  LabelStyled,
  InputStyled,
  ButtonStyled
} from 'remote1/Module';

interface LoginForm  {
  email: string;
  password: string
}

export function Login() {
  let navigate = useNavigate()

  const [formData, setFormData] = useState<LoginForm> ({
    email: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const Login = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://apimocha.com/ionicaaceleracao/whoami`);
      
      if (!response.data.erro) {
        const data = {
          'user': {
            'name': response.data.data.user.name,
            'lastname': response.data.data.user.last_name,
            'email': response.data.data.user.email,
            'schoolname': response.data.data.user.schools[0].name
          } 
        };

        navigate('/home', { state: data } );
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <React.Suspense fallback={null}>
      <LoginDiv>
        <TitleH1>Login</TitleH1>
        <Text>Verificar se esse usuário está logado.</Text>

        <form onSubmit={Login}>
          <div>
            <LabelStyled>E-mail:</LabelStyled><br />
            <InputStyled
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              maxLength={40}
            /><br /><br />
          </div>
          <div>
            <LabelStyled>Senha:</LabelStyled><br />
            <InputStyled
              type="password"
              name="password"
              id="pass"
              onChange={handleChange}
              maxLength={15}
            /><br /><br />
          </div>

          <ButtonStyled type="submit">Logar</ButtonStyled>
        </form>
      </LoginDiv>
    </React.Suspense>

  );
}

export default Login;

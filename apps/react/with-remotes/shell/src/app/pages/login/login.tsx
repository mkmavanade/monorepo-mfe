import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../../components/loading';
import { Button, ForgotPassword, Input, LoginBox, LoginPage } from './style';



export function Login() {
    return (
        <LoginPage>
            <LoginBox>
                <h2>Login</h2>
                <Loading />

                <form>
                    <Button type="submit">Login</Button>
                </form>
                <Link to="/">Voltar</Link>
            </LoginBox>
        </LoginPage>
    );
};

export default Login;
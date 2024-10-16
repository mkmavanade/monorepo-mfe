import styled from 'styled-components';
import { Link } from 'react-router-dom';



const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://ola.souionica.com.br/wp-content/uploads/2023/04/ionica-logo-1280x720-1.png');
    background-size: cover;
    background-position: center;
`;

const LoginBox = styled.div`
    background: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Button = styled(Link)`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const ForgotPassword = styled.a`
    display: block;
    margin: 1rem 0px;
    color: #007bff;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export { LoginPage, LoginBox, Input, Button, ForgotPassword };